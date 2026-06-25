import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import { Resend } from 'resend'

// ── Types ─────────────────────────────────────────────────────────────────────

export interface CatalogRequestPayload {
  fullName: string
  company: string
  email: string
  phone: string
  clientType: string
  catalogRequested: string
  projectLocation: string
  projectType: string
  estimatedArea?: string
  projectStage: string
  notes?: string
  consent: boolean
  website?: string // honeypot — must be empty
}

// ── Google Sheet column layout ─────────────────────────────────────────────────
// Tab: "Catalog Requests"  (env: CATALOG_REQUESTS_TAB_NAME)
//
// A  Timestamp (AST)
// B  Reference
// C  Request Type          → "Detailed Catalog" | "NDA Annex"
// D  Catalog Requested
// E  Full Name
// F  Company / Organization
// G  Email
// H  Phone / WhatsApp
// I  Client Type
// J  Project Location / City
// K  Project Type
// L  Estimated Scope Area
// M  Project Stage
// N  Source Page
// O  Download Status       → "Submitted" | "Auto-access granted" | "Manual approval required"
// P  Notes
// Q  User Agent
// R  Referrer

// NDA catalog id — never receives auto-access
const NDA_CATALOG_ID = 'NDA Technical Annex Request'

// Catalog download URLs — set these env vars in Vercel when PDFs are ready.
// Leave unset (or empty) to show the manual-review success message instead.
// Required env vars (all optional):
//   CATALOG_B2B_URL   → URL for B2B Contractor / Consultant Detailed Catalog
//   CATALOG_B2G_URL   → URL for B2G Prequalification Pack
//   CATALOG_B2C_URL   → URL for B2C Villas & Palaces Visual Catalog
const CATALOG_URLS: Record<string, string | undefined> = {
  'B2B Contractor / Consultant Detailed Catalog': process.env.CATALOG_B2B_URL,
  'B2G / Government & Semi-Government Prequalification Pack': process.env.CATALOG_B2G_URL,
  'B2C / Private Villas & Palaces Visual Catalog': process.env.CATALOG_B2C_URL,
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function generateReference(): string {
  const d = new Date()
  const date =
    String(d.getUTCFullYear()) +
    String(d.getUTCMonth() + 1).padStart(2, '0') +
    String(d.getUTCDate()).padStart(2, '0')
  const suffix = String(Math.floor(1000 + Math.random() * 9000))
  return `CATLG-${date}-${suffix}`
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
  timestamp: string,
  ref: string,
  requestType: string,
  catalogRequested: string,
  p: CatalogRequestPayload,
  downloadStatus: string,
  userAgent: string,
  referer: string,
): Promise<void> {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = (process.env.GOOGLE_SHEETS_PRIVATE_KEY ?? '').replace(/\\n/g, '\n')
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const tabName = process.env.CATALOG_REQUESTS_TAB_NAME ?? 'Catalog Requests'

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
    range: `${tabName}!A:R`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          timestamp,
          ref,
          requestType,
          catalogRequested,
          p.fullName,
          p.company,
          p.email,
          p.phone,
          p.clientType,
          p.projectLocation,
          p.projectType,
          p.estimatedArea ?? '',
          p.projectStage,
          'Durraka Website — /catalog',
          downloadStatus,
          p.notes ?? '',
          userAgent,
          referer,
        ],
      ],
    },
  })
}

// ── Email notification ────────────────────────────────────────────────────────

function buildEmailHTML(
  p: CatalogRequestPayload,
  ref: string,
  timestamp: string,
  requestType: string,
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
      New Catalog Request — ${requestType}
    </div>
  </div>

  <div style="background:#fafafa;padding:12px 30px;border-bottom:1px solid #e8e8e8">
    <span style="font-size:11px;color:#888">Reference:&nbsp;</span>
    <span style="font-size:15px;font-weight:700;color:#D71920">${ref}</span>
    <span style="font-size:11px;color:#aaa;margin-left:12px">${timestamp}</span>
  </div>

  <div style="padding:22px 30px 28px">

    ${section('Catalog Requested')}
    <table style="width:100%;border-collapse:collapse">
      ${row('Catalog', p.catalogRequested)}
      ${row('Status', downloadStatus)}
    </table>

    ${section('Contact Details')}
    <table style="width:100%;border-collapse:collapse">
      ${row('Full Name', p.fullName)}
      ${row('Company / Org', p.company)}
      ${row('Email', `<a href="mailto:${p.email}" style="color:#D71920;text-decoration:none">${p.email}</a>`)}
      ${row('Phone / WhatsApp', p.phone)}
      ${row('Client Type', p.clientType)}
    </table>

    ${section('Project Details')}
    <table style="width:100%;border-collapse:collapse">
      ${row('Project Location', p.projectLocation)}
      ${row('Project Type', p.projectType)}
      ${row('Estimated Area', p.estimatedArea ? p.estimatedArea + ' m²' : '—')}
      ${row('Project Stage', p.projectStage)}
    </table>

    ${p.notes
      ? `${section('Notes')}
         <div style="background:#f8f8f8;border-left:3px solid #D71920;padding:12px 14px;
           font-size:13px;line-height:1.75;color:#333">
           ${p.notes.replace(/\n/g, '<br>')}
         </div>`
      : ''
    }

    <div style="margin-top:24px;padding:12px 14px;background:#f0f4f9;font-size:11px;color:#666;line-height:1.7">
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
    const payload = (await req.json()) as CatalogRequestPayload

    // Honeypot
    if (payload.website) {
      return NextResponse.json({ success: true, reference: 'CATLG-00000000-0000' })
    }

    // Sanitize
    const p: CatalogRequestPayload = {
      fullName: sanitize(payload.fullName),
      company: sanitize(payload.company),
      email: sanitize(payload.email),
      phone: sanitize(payload.phone),
      clientType: sanitize(payload.clientType),
      catalogRequested: sanitize(payload.catalogRequested),
      projectLocation: sanitize(payload.projectLocation),
      projectType: sanitize(payload.projectType),
      estimatedArea: payload.estimatedArea ? sanitize(payload.estimatedArea) : undefined,
      projectStage: sanitize(payload.projectStage),
      notes: payload.notes ? sanitize(payload.notes) : undefined,
      consent: Boolean(payload.consent),
    }

    // Required field validation
    const required: [keyof CatalogRequestPayload, string][] = [
      ['fullName', 'Full name'],
      ['company', 'Company or organization name'],
      ['email', 'Email address'],
      ['phone', 'Phone or WhatsApp number'],
      ['clientType', 'Client type'],
      ['catalogRequested', 'Catalog selection'],
      ['projectLocation', 'Project location'],
      ['projectType', 'Project type'],
      ['projectStage', 'Project stage'],
    ]

    for (const [field, label] of required) {
      if (!String(p[field] ?? '').trim()) {
        return NextResponse.json({ error: `${label} is required.` }, { status: 400 })
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    if (!p.consent) {
      return NextResponse.json({ error: 'Please confirm your consent to be contacted.' }, { status: 400 })
    }

    const isNDA = p.catalogRequested === NDA_CATALOG_ID
    const catalogUrl = isNDA ? null : (CATALOG_URLS[p.catalogRequested] || null)
    const requestType = isNDA ? 'NDA Annex' : 'Detailed Catalog'
    const downloadStatus = isNDA
      ? 'Manual approval required'
      : catalogUrl
        ? 'Auto-access granted'
        : 'Submitted'

    const reference = generateReference()
    const timestamp = formatTimestamp(new Date())
    const userAgent = req.headers.get('user-agent') ?? ''
    const referer = req.headers.get('referer') ?? ''

    // Google Sheets log (non-blocking)
    logToSheets(timestamp, reference, requestType, p.catalogRequested, p, downloadStatus, userAgent, referer).catch(
      (err) => console.error('[CatalogRequest] Sheets log failed:', err),
    )

    // Email notification (non-blocking)
    const apiKey = process.env.EMAIL_SERVICE_API_KEY
    if (!apiKey) {
      console.warn('[CatalogRequest] EMAIL_SERVICE_API_KEY not set — email skipped. Ref:', reference)
    } else {
      const resend = new Resend(apiKey)
      const recipient = process.env.RFQ_TO_EMAIL ?? 'info@durraka.com'
      const fromEmail = process.env.RFQ_FROM_EMAIL ?? 'Durraka Catalog <no-reply@durraka.com>'
      resend.emails
        .send({
          from: fromEmail,
          to: [recipient],
          subject: `Catalog Request — ${p.catalogRequested} — ${reference}`,
          html: buildEmailHTML(p, reference, timestamp, requestType, downloadStatus),
        })
        .catch((err) => console.error('[CatalogRequest] Email send failed:', err))
    }

    return NextResponse.json({ success: true, reference, isNDA, catalogUrl })
  } catch (err) {
    console.error('[CatalogRequest] Unhandled error:', err)
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again later.' }, { status: 500 })
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
