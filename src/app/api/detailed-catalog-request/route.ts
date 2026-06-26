import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import { Resend } from 'resend'

// ── Types ──────────────────────────────────────────────────────────────────────

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
  website?: string // honeypot — must be empty
}

// ── Google Sheet column layout ─────────────────────────────────────────────────
// Tab: "Detailed Catalog Requests"  (env: DETAILED_CATALOG_REQUESTS_TAB_NAME)
//
// A  Timestamp (AST)
// B  Reference
// C  Full Name
// D  Company
// E  Email
// F  Phone / WhatsApp
// G  Client Type
// H  Project Type
// I  Interested Systems
// J  City / Country
// K  Project Timeline
// L  Message / Notes
// M  Source Page
// N  Download Status
// O  User Agent
// P  Referrer

// ── Helpers ───────────────────────────────────────────────────────────────────

function generateReference(): string {
  const d = new Date()
  const date =
    String(d.getUTCFullYear()) +
    String(d.getUTCMonth() + 1).padStart(2, '0') +
    String(d.getUTCDate()).padStart(2, '0')
  const suffix = String(Math.floor(1000 + Math.random() * 9000))
  return `DTLCAT-${date}-${suffix}`
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

function sanitize(s: unknown): string {
  return String(s ?? '').trim().slice(0, 2000)
}

// ── Google Sheets ─────────────────────────────────────────────────────────────

async function logToSheets(
  ref: string,
  timestamp: string,
  p: DetailedCatalogPayload,
  downloadStatus: string,
  userAgent: string,
  referer: string,
): Promise<void> {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = (process.env.GOOGLE_SHEETS_PRIVATE_KEY ?? '').replace(/\\n/g, '\n')
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const tabName = process.env.DETAILED_CATALOG_REQUESTS_TAB_NAME ?? 'Detailed Catalog Requests'

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error('Google Sheets env vars not configured')
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${tabName}!A:P`,
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
          downloadStatus,
          userAgent,
          referer,
        ],
      ],
    },
  })
}

// ── Email notification ────────────────────────────────────────────────────────

function buildEmailHTML(
  p: DetailedCatalogPayload,
  ref: string,
  timestamp: string,
  downloadStatus: string,
): string {
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
      New Detailed Catalog Request
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
           font-size:13px;line-height:1.75;color:#333">
           ${p.notes.replace(/\n/g, '<br>')}
         </div>`
      : ''
    }

    <div style="margin-top:24px;padding:10px 14px;background:#f0f4f9;font-size:11px;color:#666;line-height:1.7">
      <b>Status:</b> ${downloadStatus}<br>
      <b>Source:</b> Durraka Website — /catalog
    </div>

  </div>
</div>
</body>
</html>`
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as DetailedCatalogPayload

    // Honeypot
    if (payload.website) {
      return NextResponse.json({ success: true, reference: 'DTLCAT-00000000-0000' })
    }

    // Sanitize
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
    }

    // Required field validation
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
      return NextResponse.json(
        { error: 'Please select at least one system of interest.' },
        { status: 400 },
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 },
      )
    }

    // Determine access — auto only if B2B URL is configured
    const catalogUrl = process.env.CATALOG_B2B_URL || null
    const downloadStatus = catalogUrl ? 'Auto-access granted' : 'Submitted — pending review'

    const reference = generateReference()
    const timestamp = formatTimestamp(new Date())
    const userAgent = req.headers.get('user-agent') ?? ''
    const referer = req.headers.get('referer') ?? ''

    // Google Sheets log (non-blocking)
    logToSheets(reference, timestamp, p, downloadStatus, userAgent, referer).catch(
      (err) => console.error('[DetailedCatalogRequest] Sheets log failed:', err),
    )

    // Email notification (non-blocking)
    const apiKey = process.env.EMAIL_SERVICE_API_KEY
    if (!apiKey) {
      console.warn('[DetailedCatalogRequest] EMAIL_SERVICE_API_KEY not set — email skipped. Ref:', reference)
    } else {
      const resend = new Resend(apiKey)
      const recipient = process.env.RFQ_TO_EMAIL ?? 'info@durraka.com'
      const fromEmail = process.env.RFQ_FROM_EMAIL ?? 'Durraka Catalog <no-reply@durraka.com>'
      resend.emails
        .send({
          from: fromEmail,
          to: [recipient],
          subject: `Detailed Catalog Request — ${reference}`,
          html: buildEmailHTML(p, reference, timestamp, downloadStatus),
        })
        .catch((err) => console.error('[DetailedCatalogRequest] Email send failed:', err))
    }

    return NextResponse.json({ success: true, reference, catalogUrl })
  } catch (err) {
    console.error('[DetailedCatalogRequest] Unhandled error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 },
    )
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
