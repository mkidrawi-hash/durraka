import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { google } from 'googleapis'

export interface RFQPayload {
  fullName: string
  jobTitle?: string
  company: string
  email: string
  phone?: string
  projectName: string
  projectLocation: string
  clientType?: string
  projectType?: string
  estimatedArea?: string
  deliveryDate?: string
  systemRequired: string
  notes?: string
  website?: string // honeypot — must be empty
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function generateReference(): string {
  const d = new Date()
  const date =
    String(d.getUTCFullYear()) +
    String(d.getUTCMonth() + 1).padStart(2, '0') +
    String(d.getUTCDate()).padStart(2, '0')
  const suffix = String(Math.floor(1000 + Math.random() * 9000))
  return `RFQ-${date}-${suffix}`
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

// ── Email ─────────────────────────────────────────────────────────────────────

function buildEmailHTML(p: RFQPayload, ref: string, timestamp: string): string {
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
      New Request for Quotation
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
      ${row('Job Title', p.jobTitle ?? '')}
      ${row('Company', p.company)}
      ${row('Email', `<a href="mailto:${p.email}" style="color:#D71920;text-decoration:none">${p.email}</a>`)}
      ${row('Mobile / WhatsApp', p.phone ?? '')}
      ${row('Client Type', p.clientType ?? '')}
    </table>

    ${section('Project Details')}
    <table style="width:100%;border-collapse:collapse">
      ${row('Project Name', p.projectName)}
      ${row('Project Location', p.projectLocation)}
      ${row('Project Type', p.projectType ?? '')}
      ${row('Estimated Area', p.estimatedArea ? p.estimatedArea + ' m²' : '')}
      ${row('Target Timeline', p.deliveryDate ?? '')}
      ${row('Systems Required', p.systemRequired)}
    </table>

    ${
      p.notes
        ? `${section('Technical Notes')}
           <div style="background:#f8f8f8;border-left:3px solid #D71920;padding:12px 14px;
             font-size:13px;line-height:1.75;color:#333">
             ${p.notes.replace(/\n/g, '<br>')}
           </div>`
        : ''
    }

    <div style="margin-top:24px;padding:12px 14px;background:#f0f4f9;font-size:11px;color:#666;line-height:1.7">
      <b>Attachments:</b> File attachments are not yet supported via web submission.
      Follow up by email to request drawings or references from the client.<br>
      <b>Source:</b> Durraka Website — /request-quotation
    </div>

  </div>
</div>
</body>
</html>`
}

// ── Google Sheets ─────────────────────────────────────────────────────────────

async function appendToSheets(
  p: RFQPayload,
  ref: string,
  timestamp: string,
): Promise<void> {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = (process.env.GOOGLE_SHEETS_PRIVATE_KEY ?? '').replace(/\\n/g, '\n')
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const tabName = process.env.GOOGLE_SHEETS_TAB_NAME ?? 'RFQ Submissions'

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error('Google Sheets env vars are not fully configured')
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
          p.jobTitle ?? '',
          p.company,
          p.email,
          p.phone ?? '',
          p.projectName,
          p.projectLocation,
          p.clientType ?? '',
          p.projectType ?? '',
          p.estimatedArea ?? '',
          p.deliveryDate ?? '',
          p.systemRequired,
          p.notes ?? '',
          'Durraka Website',
        ],
      ],
    },
  })
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as RFQPayload

    // Honeypot — silently pretend success so bots think they submitted
    if (payload.website) {
      return NextResponse.json({ success: true, reference: 'RFQ-00000000-0000' })
    }

    // Server-side required field validation
    const required: [keyof RFQPayload, string][] = [
      ['fullName', 'Full name'],
      ['company', 'Company name'],
      ['email', 'Email address'],
      ['projectName', 'Project name'],
      ['projectLocation', 'Project location'],
      ['systemRequired', 'System required'],
    ]

    for (const [field, label] of required) {
      if (!String(payload[field] ?? '').trim()) {
        return NextResponse.json({ error: `${label} is required.` }, { status: 400 })
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[RFQ] RESEND_API_KEY is not configured')
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
    }

    const reference = generateReference()
    const timestamp = formatTimestamp(new Date())

    // Send notification email — failure blocks submission
    const resend = new Resend(apiKey)
    const recipient = process.env.RFQ_INTERNAL_EMAIL ?? 'mkidrawi@gmail.com'
    const fromEmail = process.env.RFQ_FROM_EMAIL ?? 'Durraka RFQ <onboarding@resend.dev>'

    const { error: emailError } = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      subject: `New RFQ Submitted — ${payload.projectName} — ${reference}`,
      html: buildEmailHTML(payload, reference, timestamp),
    })

    if (emailError) {
      console.error('[RFQ] Resend error:', emailError)
      return NextResponse.json(
        { error: 'Could not send the notification email. Please try again.' },
        { status: 500 },
      )
    }

    // Append to Google Sheets — failure is non-blocking
    try {
      await appendToSheets(payload, reference, timestamp)
    } catch (sheetsErr) {
      console.error('[RFQ] Google Sheets append failed:', sheetsErr)
    }

    return NextResponse.json({ success: true, reference })
  } catch (err) {
    console.error('[RFQ] Unhandled error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 },
    )
  }
}
