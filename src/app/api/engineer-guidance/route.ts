import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import { Resend } from 'resend'
import { attributionCells, sanitizeAttribution, type Attribution } from '@/lib/attribution'

// ── Engineer Guidance Request — controlled distribution ─────────────────────────
// CORE POLICY: no document is ever auto-downloaded or publicly hosted. This route
// only records the request + issues a reference number. Durraka sends the guidance
// document MANUALLY after internal verification. There is NO file link/URL/attachment.

export interface EngineerGuidancePayload {
  fullName: string
  company: string
  role: string
  email: string
  phone: string
  projectLocation: string
  projectType: string
  approxScope?: string
  timeline: string
  notes?: string
  attribution?: Attribution // first-touch UTM / referrer captured client-side
  website?: string // honeypot — must be empty
}

// Google Sheet tab "Engineer Guidance Requests" — 16 columns (A–P) + Q–X:
// A Timestamp · B Reference · C Full Name · D Company · E Role · F Email ·
// G Phone · H Project Location · I Project Type · J Approx Scope · K Timeline ·
// L Notes · M Source Page · N Status (default "New") · O User Agent · P Referrer ·
// Q UTM Source · R UTM Medium · S UTM Campaign · T UTM Term · U UTM Content ·
// V GCLID · W Landing Page · X Referrer (attribution)

function sanitize(s: unknown): string {
  return String(s ?? '').trim().slice(0, 2000)
}

function formatTimestamp(d: Date): string {
  return (
    d.toLocaleString('en-US', {
      timeZone: 'Asia/Riyadh',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }) + ' (AST)'
  )
}

function sheetsEnv() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = (process.env.GOOGLE_SHEETS_PRIVATE_KEY ?? '').replace(/\\n/g, '\n')
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const tabName = process.env.ENGINEER_GUIDANCE_TAB_NAME ?? 'Engineer Guidance Requests'
  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error('Google Sheets env vars are not fully configured')
  }
  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  const sheets = google.sheets({ version: 'v4', auth })
  return { sheets, spreadsheetId, tabName }
}

// Reference EG-YYYY-NNNN.
// Primary: read the reference column, take the MAX existing numeric suffix + 1
// (derive from the max reference, NOT the row count, so a deleted/blank row can
// never cause a duplicate). Zero-padded to 4 digits, current UTC year as prefix.
// Fallback (if the read fails): EG-YYYY-T#### — a visually DISTINCT format
// (the "T" marks a timestamp-derived number) so it can never collide with a
// sequential one.
async function generateReference(
  sheets: ReturnType<typeof sheetsEnv>['sheets'],
  spreadsheetId: string,
  tabName: string,
): Promise<string> {
  const year = new Date().getUTCFullYear()
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${tabName}!B:B`,
    })
    const rows = res.data.values ?? []
    let max = 0
    for (const row of rows) {
      const cell = String(row?.[0] ?? '')
      const m = cell.match(/^EG-\d{4}-(\d{4,})$/) // sequential refs only; ignore T#### fallbacks
      if (m) {
        const n = parseInt(m[1], 10)
        if (Number.isFinite(n) && n > max) max = n
      }
    }
    const next = String(max + 1).padStart(4, '0')
    return `EG-${year}-${next}`
  } catch {
    const t = String(Date.now() % 10000).padStart(4, '0')
    return `EG-${year}-T${t}`
  }
}

async function appendRow(
  sheets: ReturnType<typeof sheetsEnv>['sheets'],
  spreadsheetId: string,
  tabName: string,
  timestamp: string,
  ref: string,
  p: EngineerGuidancePayload,
  userAgent: string,
  referer: string,
): Promise<void> {
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    // A–P existing; Q–X appended for attribution (see docs/analytics-events.md).
    range: `${tabName}!A:X`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          timestamp,
          ref,
          p.fullName,
          p.company,
          p.role,
          p.email,
          p.phone,
          p.projectLocation,
          p.projectType,
          p.approxScope ?? '',
          p.timeline,
          p.notes ?? '',
          'Durraka Website — /systems/gfrc-grc-facade-cladding/engineer-guidance',
          'New', // Status — managed internally by Durraka; the site never changes it.
          userAgent,
          referer,
          // Q–X (Phase 5 — appended; marketing attribution)
          ...attributionCells(p.attribution),
        ],
      ],
    },
  })
}

async function sendNotificationEmail(
  p: EngineerGuidancePayload,
  ref: string,
  timestamp: string,
): Promise<void> {
  const apiKey = process.env.EMAIL_SERVICE_API_KEY
  if (!apiKey) throw new Error('EMAIL_SERVICE_API_KEY not configured')
  const resend = new Resend(apiKey)
  const recipient = process.env.RFQ_TO_EMAIL ?? 'info@durraka.com'
  const fromEmail = process.env.RFQ_FROM_EMAIL ?? 'Durraka Guidance <no-reply@durraka.com>'
  const row = (l: string, v: string) =>
    `<tr><td style="padding:5px 0;color:#666;font-size:13px;width:170px;vertical-align:top">${l}</td><td style="padding:5px 0;font-size:13px;font-weight:600;vertical-align:top">${v || '—'}</td></tr>`
  const html = `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
<div style="max-width:620px;margin:28px auto;background:#fff;border:1px solid #ddd">
  <div style="background:#071B3B;padding:22px 30px;border-left:5px solid #D71920">
    <div style="color:#fff;font-size:16px;font-weight:700;letter-spacing:2px">DURRAKA FACTORY FOR INDUSTRY</div>
    <div style="color:rgba(255,255,255,.45);font-size:10px;margin-top:3px;letter-spacing:3px;text-transform:uppercase">New Engineer Guidance Request</div>
  </div>
  <div style="background:#fafafa;padding:12px 30px;border-bottom:1px solid #e8e8e8">
    <span style="font-size:11px;color:#888">Reference:&nbsp;</span>
    <span style="font-size:15px;font-weight:700;color:#D71920">${ref}</span>
    <span style="font-size:11px;color:#aaa;margin-left:12px">${timestamp}</span>
  </div>
  <div style="padding:22px 30px 28px"><table style="width:100%;border-collapse:collapse">
    ${row('Full Name', p.fullName)}${row('Company', p.company)}${row('Role', p.role)}
    ${row('Email', `<a href="mailto:${p.email}" style="color:#D71920;text-decoration:none">${p.email}</a>`)}
    ${row('Phone / WhatsApp', p.phone)}${row('Project Location', p.projectLocation)}
    ${row('Project Type', p.projectType)}${row('Approx Scope', p.approxScope ?? '')}${row('Timeline', p.timeline)}
    ${p.notes ? row('Notes', p.notes.replace(/\n/g, '<br>')) : ''}
  </table>
  <div style="margin-top:20px;padding:10px 14px;background:#f0f4f9;font-size:11px;color:#666;line-height:1.7">
    <b>Status:</b> New — verify before sending guidance. Guidance is issued manually after review.
  </div></div></div></body></html>`
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [recipient],
    subject: `Engineer Guidance Request — ${ref}`,
    html,
  })
  if (error) throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as EngineerGuidancePayload

    // Honeypot
    if (payload.website) {
      return NextResponse.json({ success: true, reference: 'EG-0000-0000' })
    }

    const p: EngineerGuidancePayload = {
      fullName: sanitize(payload.fullName),
      company: sanitize(payload.company),
      role: sanitize(payload.role),
      email: sanitize(payload.email),
      phone: sanitize(payload.phone),
      projectLocation: sanitize(payload.projectLocation),
      projectType: sanitize(payload.projectType),
      approxScope: payload.approxScope ? sanitize(payload.approxScope) : undefined,
      timeline: sanitize(payload.timeline),
      notes: payload.notes ? sanitize(payload.notes) : undefined,
      attribution: sanitizeAttribution(payload.attribution),
    }

    const required: [keyof EngineerGuidancePayload, string][] = [
      ['fullName', 'Full name'],
      ['company', 'Company'],
      ['role', 'Role'],
      ['email', 'Email address'],
      ['phone', 'Phone or WhatsApp'],
      ['projectLocation', 'Project location'],
      ['projectType', 'Project type'],
      ['timeline', 'Timeline'],
    ]
    for (const [field, label] of required) {
      if (!String(p[field] ?? '').trim()) {
        return NextResponse.json({ error: `${label} is required.` }, { status: 400 })
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const timestamp = formatTimestamp(new Date())
    const userAgent = req.headers.get('user-agent') ?? ''
    const referer = req.headers.get('referer') ?? ''

    // Reference + Sheets append are one sink (need the sheets client for both).
    let reference = ''
    const sheetsResult = await (async () => {
      const { sheets, spreadsheetId, tabName } = sheetsEnv()
      reference = await generateReference(sheets, spreadsheetId, tabName)
      await appendRow(sheets, spreadsheetId, tabName, timestamp, reference, p, userAgent, referer)
      return true
    })().catch((err) => {
      console.error('[EngineerGuidance] Sheets append failed:', err)
      return false
    })

    // If Sheets failed we still need a reference for the visitor + email.
    if (!reference) reference = `EG-${new Date().getUTCFullYear()}-T${String(Date.now() % 10000).padStart(4, '0')}`

    const emailResult = await sendNotificationEmail(p, reference, timestamp)
      .then(() => true)
      .catch((err) => {
        console.error('[EngineerGuidance] Email send failed:', err)
        return false
      })

    // No silent lead loss: succeed only if at least one sink worked.
    if (!sheetsResult && !emailResult) {
      console.error(
        '[EngineerGuidance] LEAD NOT DELIVERED — no sink succeeded. Recoverable lead:',
        JSON.stringify({ reference, timestamp, ...p }),
      )
      return NextResponse.json(
        {
          error:
            'We could not submit your request automatically. Please email info@durraka.com and our team will assist you directly.',
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true, reference })
  } catch (err) {
    console.error('[EngineerGuidance] Unhandled error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 },
    )
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
