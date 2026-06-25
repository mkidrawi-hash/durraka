import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

// ── Google Sheet column layout ─────────────────────────────────────────────────
// Tab: "Catalog Downloads"  (env: CATALOG_SHEETS_TAB_NAME)
//
// A  Timestamp (AST)
// B  Catalog Name
// C  Catalog Type   → "Public" | "Gated" | "NDA"
// D  Page Source    → e.g. "/catalog"
// E  Download Status

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

async function logToSheets(
  timestamp: string,
  catalogName: string,
  catalogType: string,
  pageSource: string,
  downloadStatus: string,
): Promise<void> {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = (process.env.GOOGLE_SHEETS_PRIVATE_KEY ?? '').replace(/\\n/g, '\n')
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const tabName = process.env.CATALOG_SHEETS_TAB_NAME ?? 'Catalog Downloads'

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error('Google Sheets env vars not configured — skipping catalog download log')
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${tabName}!A:E`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[timestamp, catalogName, catalogType, pageSource, downloadStatus]],
    },
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { catalogName, catalogType, pageSource } = body as {
      catalogName?: string
      catalogType?: string
      pageSource?: string
    }

    if (!catalogName || !catalogType) {
      return NextResponse.json(
        { error: 'catalogName and catalogType are required' },
        { status: 400 },
      )
    }

    const timestamp = formatTimestamp(new Date())

    // Non-blocking — do not delay the download response for sheet logging
    logToSheets(timestamp, catalogName, catalogType, pageSource ?? 'unknown', 'Initiated').catch(
      (err) => console.error('[CatalogDownload] Google Sheets log failed:', err),
    )

    return NextResponse.json({ success: true, timestamp })
  } catch (err) {
    console.error('[CatalogDownload] Unhandled error:', err)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
