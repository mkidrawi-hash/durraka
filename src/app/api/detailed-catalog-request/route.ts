import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import { Resend } from 'resend'
import { attributionCells, sanitizeAttribution, type Attribution } from '@/lib/attribution'

// ── Specialized / detailed catalog request — controlled distribution ────────────
// CORE POLICY: no catalog file is auto-downloaded or publicly hosted. This route
// only records the request + issues a reference; Durraka sends the specialized
// catalog MANUALLY after verification. NO auto-attachment, NO public file URL.

export interface DetailedCatalogPayload {
  fullName: string
  company: string
  email: string
  phone: string
  clientType: string
  projectType: string
  interestedSystems: string[]
  cityCountry: string
  timeline: string
  notes?: string
  attribution?: Attribution // first-touch UTM / referrer captured client-side
  website?: string // honeypot — must be empty
}

// Google Sheet tab "Catalog Requests (Specialized)" — 16 columns (A–P) + Q–X:
// A Timestamp · B Reference · C Full Name · D Company · E Email · F Phone ·
// G Client Type · H Project Type · I Interested Systems · J City / Country ·
// K Timeline · L Notes · M Source Page · N Status (default "New") ·
// O User Agent · P Referrer ·
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
  const tabName = process.env.CATALOG_SPECIALIZED_TAB_NAME ?? 'Catalog Requests (Specialized)'
  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error('Google Sheets env vars not configured')
  }
  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  const sheets = google.sheets({ version: 'v4', auth })
  return { sheets, spreadsheetId, tabName }
}

// Reference CAT-YYYY-NNNN — derived from the MAX existing reference (+1), not row
// count, so a deleted/blank row can never cause a duplicate. Fallback CAT-YYYY-T####
// (visually distinct) if the read fails.
async function generateReference(
  sheets: ReturnType<typeof sheetsEnv>['sheets'],
  spreadsheetId: string,
  tabName: string,
): Promise<string> {
  const year = new Date().getUTCFullYear()
  try {
    const res = await sheets.spreadsheets.values.get({ spreadsheetId, range: `${tabName}!B:B` })
    const rows = res.data.values ?? []
    let max = 0
    for (const row of rows) {
      const m = String(row?.[0] ?? '').match(/^CAT-\d{4}-(\d{4,})$/)
      if (m) {
        const n = parseInt(m[1], 10)
        if (Number.isFinite(n) && n > max) max = n
      }
    }
    return `CAT-${year}-${String(max + 1).padStart(4, '0')}`
  } catch {
    return `CAT-${year}-T${String(Date.now() % 10000).padStart(4, '0')}`
  }
}

async function appendRow(
  sheets: ReturnType<typeof sheetsEnv>['sheets'],
  spreadsheetId: string,
  tabName: string,
  timestamp: string,
  ref: string,
  p: DetailedCatalogPayload,
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
          p.email,
          p.phone,
          p.clientType,
          p.projectType,
          p.interestedSystems.join(', '),
          p.cityCountry,
          p.timeline,
          p.notes ?? '',
          'Durraka Website — /catalog',
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

function buildEmailHTML(p: DetailedCatalogPayload, ref: string, timestamp: string): string {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:5px 0;color:#666;font-size:13px;width:185px;vertical-align:top">${label}</td>
      <td style="padding:5px 0;font-size:13px;font-weight:600;vertical-align:top">${value || '—'}</td>
    </tr>`
  const section = (title: string) =>
    `<h2 style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#071B3B;
      margin:24px 0 10px;padding-bottom:6px;border-bottom:2px solid #D71920">${title}</h2>`
  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">
<div style="max-width:620px;margin:28px auto;background:#fff;border:1px solid #ddd">
  <div style="background:#071B3B;padding:22px 30px;border-left:5px solid #D71920">
    <div style="color:#fff;font-size:16px;font-weight:700;letter-spacing:2px">DURRAKA FACTORY FOR INDUSTRY</div>
    <div style="color:rgba(255,255,255,.45);font-size:10px;margin-top:3px;letter-spacing:3px;text-transform:uppercase">
      New Specialized Catalog Request
    </div>
  </div>
  <div style="background:#fafafa;padding:12px 30px;border-bottom:1px solid #e8e8e8">
    <span style="font-size:11px;color:#888">Reference:&nbsp;</span>
    <span style="font-size:15px;font-weight:700;color:#D71920">${ref}</span>
    <span style="font-size:11px;color:#aaa;margin-left:12px">${timestamp}</span>
  </div>
  <div style="padding:22px 30px 28px">
    ${section('Contact Details')}
    <table style="width:100%;border-collapse:collapse">
      ${row('Full Name', p.fullName)}
      ${row('Company', p.company)}
      ${row('Email', `<a href="mailto:${p.email}" style="color:#D71920;text-decoration:none">${p.email}</a>`)}
      ${row('Phone / WhatsApp', p.phone)}
    </table>
    ${section('Project Details')}
    <table style="width:100%;border-collapse:collapse">
      ${row('Client Type', p.clientType)}
      ${row('Project Type', p.projectType)}
      ${row('Interested Systems', p.interestedSystems.join(', '))}
      ${row('City / Country', p.cityCountry)}
      ${row('Project Timeline', p.timeline)}
    </table>
    ${p.notes
      ? `${section('Message / Notes')}
         <div style="background:#f8f8f8;border-left:3px solid #D71920;padding:12px 14px;
           font-size:13px;line-height:1.75;color:#333">${p.notes.replace(/\n/g, '<br>')}</div>`
      : ''}
    <div style="margin-top:24px;padding:10px 14px;background:#f0f4f9;font-size:11px;color:#666;line-height:1.7">
      <b>Status:</b> New — verify before sending. Specialized catalogs are issued manually after review.<br>
      <b>Source:</b> Durraka Website — /catalog
    </div>
  </div>
</div>
</body>
</html>`
}

async function sendNotificationEmail(p: DetailedCatalogPayload, ref: string, timestamp: string): Promise<void> {
  const apiKey = process.env.EMAIL_SERVICE_API_KEY
  if (!apiKey) throw new Error('EMAIL_SERVICE_API_KEY not configured')
  const resend = new Resend(apiKey)
  const recipient = process.env.RFQ_TO_EMAIL ?? 'info@durraka.com'
  const fromEmail = process.env.RFQ_FROM_EMAIL ?? 'Durraka Catalog <no-reply@durraka.com>'
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [recipient],
    subject: `Specialized Catalog Request — ${ref}`,
    html: buildEmailHTML(p, ref, timestamp),
  })
  if (error) throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as DetailedCatalogPayload

    // Honeypot
    if (payload.website) {
      return NextResponse.json({ success: true, reference: 'CAT-0000-0000' })
    }

    const p: DetailedCatalogPayload = {
      fullName: sanitize(payload.fullName),
      company: sanitize(payload.company),
      email: sanitize(payload.email),
      phone: sanitize(payload.phone),
      clientType: sanitize(payload.clientType),
      projectType: sanitize(payload.projectType),
      interestedSystems: Array.isArray(payload.interestedSystems)
        ? payload.interestedSystems.map((s) => sanitize(s)).filter(Boolean)
        : [],
      cityCountry: sanitize(payload.cityCountry),
      timeline: sanitize(payload.timeline),
      notes: payload.notes ? sanitize(payload.notes) : undefined,
      attribution: sanitizeAttribution(payload.attribution),
    }

    const required: [keyof DetailedCatalogPayload, string][] = [
      ['fullName', 'Full name'],
      ['company', 'Company name'],
      ['email', 'Email address'],
      ['phone', 'Phone or WhatsApp'],
      ['clientType', 'Client type'],
      ['projectType', 'Project type'],
      ['cityCountry', 'City / Country'],
      ['timeline', 'Project timeline'],
    ]
    for (const [field, label] of required) {
      if (!String(p[field] ?? '').trim()) {
        return NextResponse.json({ error: `${label} is required.` }, { status: 400 })
      }
    }
    if (p.interestedSystems.length === 0) {
      return NextResponse.json({ error: 'Please select at least one system of interest.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const timestamp = formatTimestamp(new Date())
    const userAgent = req.headers.get('user-agent') ?? ''
    const referer = req.headers.get('referer') ?? ''

    // Reference + Sheets append share the sheets client (one sink).
    let reference = ''
    const sheetsOk = await (async () => {
      const { sheets, spreadsheetId, tabName } = sheetsEnv()
      reference = await generateReference(sheets, spreadsheetId, tabName)
      await appendRow(sheets, spreadsheetId, tabName, timestamp, reference, p, userAgent, referer)
      return true
    })().catch((err) => {
      console.error('[SpecializedCatalogRequest] Sheets append failed:', err)
      return false
    })

    if (!reference) reference = `CAT-${new Date().getUTCFullYear()}-T${String(Date.now() % 10000).padStart(4, '0')}`

    const emailOk = await sendNotificationEmail(p, reference, timestamp)
      .then(() => true)
      .catch((err) => {
        console.error('[SpecializedCatalogRequest] Email send failed:', err)
        return false
      })

    // No silent lead loss.
    if (!sheetsOk && !emailOk) {
      console.error(
        '[SpecializedCatalogRequest] LEAD NOT DELIVERED — no sink succeeded. Recoverable lead:',
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

    // No file link/URL is ever returned — specialized catalogs are sent manually.
    return NextResponse.json({ success: true, reference })
  } catch (err) {
    console.error('[SpecializedCatalogRequest] Unhandled error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 },
    )
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
