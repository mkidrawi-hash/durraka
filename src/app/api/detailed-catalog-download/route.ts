import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'
import { verifyDownloadToken } from '@/lib/catalogToken'

// Protected B2B catalog download.
//
// The B2B PDF lives OUTSIDE /public (in /private/catalogs) so it is never
// served as a static asset. The only way to obtain it is:
//   1. Submit the detailed-catalog request form successfully.
//   2. Receive a short-lived signed token (auto-access mode only).
//   3. Call this route with that token, which streams the file.
//
// Auto-access is gated by CATALOG_B2B_URL: if it is unset the system is in
// manual-review mode and no token is ever issued, so this route always 401s.

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PRIVATE_PDF = path.join(
  process.cwd(),
  'private',
  'catalogs',
  'durraka-b2b-detailed-catalog-draft.pdf',
)
const DOWNLOAD_FILENAME = 'Durraka-Detailed-Technical-Catalog.pdf'

export async function GET(req: NextRequest) {
  // Auto-access must be enabled for any download to be possible.
  if (!process.env.CATALOG_B2B_URL) {
    return NextResponse.json(
      { error: 'Detailed catalog auto-access is not enabled. Your request is under manual review.' },
      { status: 403 },
    )
  }

  const token = req.nextUrl.searchParams.get('token')
  const result = verifyDownloadToken(token)
  if (!result.valid) {
    const status = result.reason === 'expired' ? 410 : 401
    const message =
      result.reason === 'expired'
        ? 'This download link has expired. Please submit the request form again.'
        : result.reason === 'already-used'
          ? 'This download link has already been used. Please submit the request form again.'
          : 'Invalid or missing download token.'
    return NextResponse.json({ error: message }, { status })
  }

  // If CATALOG_B2B_URL points to external storage, proxy it; otherwise serve
  // the bundled private file.
  const configured = process.env.CATALOG_B2B_URL
  try {
    if (/^https?:\/\//i.test(configured)) {
      const upstream = await fetch(configured)
      if (!upstream.ok || !upstream.body) {
        throw new Error(`Upstream fetch failed: ${upstream.status}`)
      }
      const buf = Buffer.from(await upstream.arrayBuffer())
      return new NextResponse(buf, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${DOWNLOAD_FILENAME}"`,
          'Cache-Control': 'no-store, private',
        },
      })
    }

    const file = await readFile(PRIVATE_PDF)
    return new NextResponse(file, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${DOWNLOAD_FILENAME}"`,
        'Cache-Control': 'no-store, private',
        'Content-Length': String(file.length),
      },
    })
  } catch (err) {
    console.error('[DetailedCatalogDownload] Failed to serve file:', err)
    return NextResponse.json(
      { error: 'The catalog file is temporarily unavailable. Please contact info@durraka.com.' },
      { status: 500 },
    )
  }
}

export function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
