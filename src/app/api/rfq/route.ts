import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { google } from 'googleapis'
import { scoreLead, type LeadScoreResult } from '@/lib/leadScoring'

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
  // Phase 3 conditional qualification fields (by project type)
  scaleBand?: string
  consultantAppointed?: string
  targetStart?: string
  systemRequired: string
  notes?: string
  attachments?: Array<{ name: string; size: number; type: string; slot: string }>
  largeFileLink?: string
  fileLinkNotes?: string
  drawingsNotAvailable?: boolean
  needDrawingSupport?: boolean
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

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
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

  // Build attachments section
  const hasFiles = p.attachments && p.attachments.length > 0
  const hasLink = p.largeFileLink && p.largeFileLink.trim()
  const hasNotes = p.fileLinkNotes && p.fileLinkNotes.trim()
  const hasAny = hasFiles || hasLink || hasNotes || p.drawingsNotAvailable

  const attachmentsRows = hasAny
    ? `
      ${hasFiles
        ? p.attachments!.map((f) =>
            row(f.slot, `${f.name} <span style="font-weight:400;color:#888">(${formatBytes(f.size)})</span>`)
          ).join('')
        : ''
      }
      ${hasLink
        ? row('Large File Link', `<a href="${p.largeFileLink}" style="color:#D71920;text-decoration:none;word-break:break-all">${p.largeFileLink}</a>`)
        : ''
      }
      ${hasNotes
        ? row('File Link Notes', p.fileLinkNotes!.replace(/\n/g, '<br>'))
        : ''
      }
      ${row('Drawings Available', p.drawingsNotAvailable ? 'No — not available yet' : 'Yes / Not specified')}
      ${p.drawingsNotAvailable
        ? row('Drawing Support Requested', p.needDrawingSupport ? 'Yes' : 'No')
        : ''
      }
    `
    : row('Attachments', 'No attachments provided')

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

    ${section('Attachments')}
    <table style="width:100%;border-collapse:collapse">
      ${attachmentsRows}
    </table>

    <div style="margin-top:24px;padding:12px 14px;background:#f0f4f9;font-size:11px;color:#666;line-height:1.7">
      <b>Note:</b> Files listed above were not uploaded — only file names and sizes are recorded.
      Contact the client to request drawing files or references directly.<br>
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
  score: LeadScoreResult,
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

  const attachmentNames = (p.attachments ?? []).map((f) => f.name).join(', ')

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${tabName}!A:Z`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          // A–R (existing order — unchanged)
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
          attachmentNames,
          p.largeFileLink ?? '',
          'Durraka Website',
          // S–Z (Phase 3 — appended; internal qualification + scoring)
          p.consultantAppointed ?? '',
          p.scaleBand ?? '',
          p.targetStart ?? '',
          String(score.score),
          score.tier,
          score.segment,
          score.routing,
          score.followUpPriority,
        ],
      ],
    },
  })
}

// ── CRM / database hook (extend here to integrate a CRM or database) ──────────
// async function saveToCRM(p: RFQPayload, ref: string): Promise<void> { ... }

// Send the RFQ notification email. Rejects (throws) if unconfigured or on send
// failure, so the caller can treat it as a sink that either succeeds or fails.
async function sendRfqEmail(p: RFQPayload, ref: string, timestamp: string): Promise<void> {
  const apiKey = process.env.EMAIL_SERVICE_API_KEY
  if (!apiKey) throw new Error('EMAIL_SERVICE_API_KEY not configured')
  const resend = new Resend(apiKey)
  const recipient = process.env.RFQ_TO_EMAIL ?? 'info@durraka.com'
  const fromEmail = process.env.RFQ_FROM_EMAIL ?? 'Durraka RFQ <no-reply@durraka.com>'
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [recipient],
    subject: `New RFQ — ${p.projectName} — ${ref}`,
    html: buildEmailHTML(p, ref, timestamp),
  })
  if (error) throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
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

    const reference = generateReference()
    const timestamp = formatTimestamp(new Date())

    // Server-side lead scoring. NEVER returned to the visitor and never in the
    // client bundle (this module is imported only here, on the server).
    const score = scoreLead({
      clientType: payload.clientType,
      projectType: payload.projectType,
      scaleBand: payload.scaleBand,
      targetStart: payload.targetStart,
      consultantAppointed: payload.consultantAppointed,
      projectLocation: payload.projectLocation,
    })

    // Durable delivery — no silent lead loss. Await both sinks; the submission is
    // only reported successful if at least one persisted. If neither did, log the
    // full lead (recoverable from server logs) and return an error so the visitor
    // is told to contact us directly rather than believing it went through.
    const sheetsOk = await appendToSheets(payload, reference, timestamp, score)
      .then(() => true)
      .catch((err) => {
        console.error('[RFQ] Google Sheets append failed:', err)
        return false
      })

    const emailOk = await sendRfqEmail(payload, reference, timestamp)
      .then(() => true)
      .catch((err) => {
        console.error('[RFQ] Email send failed:', err)
        return false
      })

    if (!sheetsOk && !emailOk) {
      console.error(
        '[RFQ] LEAD NOT DELIVERED — no sink succeeded. Recoverable lead:',
        JSON.stringify({ reference, timestamp, tier: score.tier, ...payload }),
      )
      return NextResponse.json(
        {
          error:
            'We could not submit your request automatically. Please email info@durraka.com and our team will assist you directly.',
        },
        { status: 502 },
      )
    }

    // score/tier/tags are intentionally NOT returned to the client.
    return NextResponse.json({ success: true, reference })
  } catch (err) {
    console.error('[RFQ] Unhandled error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 },
    )
  }
}
