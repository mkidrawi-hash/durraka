import { Resend } from 'resend'
import type { LeadSink } from './index'
import type { ScoredLead, ScoreLabel } from '../types'

const SCORE_COLORS: Record<ScoreLabel, string> = {
  hot: '#D71920',
  warm: '#c47d00',
  cold: '#6b7280',
}

function buildEmailHtml(lead: ScoredLead): string {
  const { data, score, reference, timestamp } = lead
  const scoreColor = SCORE_COLORS[score.label]

  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:5px 0;color:#666;font-size:13px;width:185px;vertical-align:top">${label}</td>
           <td style="padding:5px 0;font-size:13px;font-weight:600;vertical-align:top">${value}</td>
         </tr>`
      : ''

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
    <span style="font-size:15px;font-weight:700;color:#D71920">${reference}</span>
    <span style="font-size:11px;color:#aaa;margin-left:12px">${timestamp}</span>
  </div>

  <div style="padding:22px 30px 28px">

    <div style="background:#f8f8f8;border-left:4px solid ${scoreColor};padding:12px 16px;margin-bottom:4px">
      <div style="font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1px">Lead Score</div>
      <div style="font-size:22px;font-weight:700;color:${scoreColor};margin-top:2px">
        ${score.value}<span style="font-size:13px">/100</span>
        &nbsp;<span style="font-size:11px;text-transform:uppercase;letter-spacing:1px">${score.label}</span>
      </div>
      <div style="font-size:11px;color:#999;margin-top:4px">${score.factors.join(' · ')}</div>
    </div>

    ${section('Contact Details')}
    <table style="width:100%;border-collapse:collapse">
      ${row('Full Name', data.fullName)}
      ${row('Job Title', data.jobTitle)}
      ${row('Company', data.company)}
      ${row('Email', `<a href="mailto:${data.email}" style="color:#D71920;text-decoration:none">${data.email}</a>`)}
      ${row('Mobile / WhatsApp', data.phone)}
      ${row('Client Type', data.clientType)}
    </table>

    ${section('Project Details')}
    <table style="width:100%;border-collapse:collapse">
      ${row('Project Name', data.projectName)}
      ${row('Project Location', data.projectLocation)}
      ${row('Project Type', data.projectType)}
      ${row('Estimated Area', data.estimatedArea ? data.estimatedArea + ' m²' : '')}
      ${row('Target Timeline', data.deliveryDate)}
      ${row('Systems Required', data.systemRequired)}
    </table>

    ${
      data.notes
        ? `${section('Technical Notes')}
           <div style="background:#f8f8f8;border-left:3px solid #D71920;padding:12px 14px;
             font-size:13px;line-height:1.75;color:#333">
             ${data.notes.replace(/\n/g, '<br>')}
           </div>`
        : ''
    }

    <div style="margin-top:24px;padding:12px 14px;background:#f0f4f9;font-size:11px;color:#666;line-height:1.7">
      <b>Source:</b> Durraka Website — /request-quotation
    </div>

  </div>
</div>
</body>
</html>`
}

export class EmailSink implements LeadSink {
  async write(lead: ScoredLead): Promise<void> {
    const apiKey = process.env.EMAIL_PROVIDER_API_KEY
    if (!apiKey) throw new Error('EMAIL_PROVIDER_API_KEY is not configured.')

    const resend = new Resend(apiKey)
    const to = process.env.RFQ_NOTIFICATION_EMAIL ?? 'info@durraka.com'
    const from = process.env.EMAIL_FROM ?? 'Durraka RFQ <onboarding@resend.dev>'

    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: `New RFQ — ${lead.data.projectName} — ${lead.reference} [${lead.score.label.toUpperCase()}]`,
      html: buildEmailHtml(lead),
    })

    if (error) throw new Error(`Email delivery failed: ${JSON.stringify(error)}`)
  }
}
