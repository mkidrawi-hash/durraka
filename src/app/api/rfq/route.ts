import { NextRequest, NextResponse } from 'next/server'
import { validateRfq, RfqValidationError } from '@/lib/rfq/schema'
import { scoreLead } from '@/lib/rfq/scoring'
import { SheetsSink } from '@/lib/rfq/sinks/sheets'
import { EmailSink } from '@/lib/rfq/sinks/email'
import type { ScoredLead } from '@/lib/rfq/types'

export type { RfqFormData, ScoredLead, LeadScore } from '@/lib/rfq/types'

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

const sheetsSink = new SheetsSink()
const emailSink = new EmailSink()

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Honeypot — silently pretend success so bots think they submitted
    if (body?.website) {
      return NextResponse.json({ success: true, reference: 'RFQ-00000000-0000' })
    }

    // 1. Validate
    let data
    try {
      data = validateRfq(body)
    } catch (err) {
      if (err instanceof RfqValidationError) {
        return NextResponse.json({ error: err.message }, { status: 400 })
      }
      throw err
    }

    // 2. Score
    const score = scoreLead(data)

    const lead: ScoredLead = {
      data,
      score,
      reference: generateReference(),
      timestamp: formatTimestamp(new Date()),
    }

    // 3. Send internal email notification — failure blocks submission
    await emailSink.write(lead)

    // 4. Append to Google Sheets — failure is non-blocking
    sheetsSink.write(lead).catch((err) => {
      console.error('[RFQ] Sheets write failed:', err)
    })

    return NextResponse.json({ success: true, reference: lead.reference })
  } catch (err) {
    console.error('[RFQ] Unhandled error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 },
    )
  }
}
