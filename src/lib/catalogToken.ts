import crypto from 'crypto'

// ── Gated catalog download token ───────────────────────────────────────────────
//
// Short-lived, HMAC-signed access token for the protected B2B catalog download.
// A token is issued ONLY after a successful detailed-catalog request submission
// when auto-access is enabled (CATALOG_B2B_URL set). It is verified by the
// protected download route before any file bytes are served.
//
// Design notes:
//  - Stateless signed token (works across serverless instances) → no DB needed.
//  - Short TTL (default 20 min, clamped 5–60) limits the exposure window.
//  - Best-effort single-use: each token carries a random nonce; a warm function
//    instance remembers spent nonces in-memory and rejects replays. Across cold
//    starts / multiple instances this is not guaranteed — true global one-time
//    use would require a shared store (e.g. Vercel KV). The short TTL is the
//    primary control; single-use is defence-in-depth.

const DEFAULT_TTL_MINUTES = 20
const MIN_TTL_MINUTES = 5
const MAX_TTL_MINUTES = 60

function getTtlSeconds(): number {
  const raw = Number(process.env.CATALOG_TOKEN_TTL_MINUTES)
  const minutes = Number.isFinite(raw) && raw > 0 ? raw : DEFAULT_TTL_MINUTES
  const clamped = Math.min(MAX_TTL_MINUTES, Math.max(MIN_TTL_MINUTES, minutes))
  return Math.round(clamped * 60)
}

// Signing secret. In production set CATALOG_DOWNLOAD_SECRET to a long random
// string so tokens validate consistently across all serverless instances.
// If unset, fall back to a per-process random secret — tokens then only verify
// on the same warm instance (acceptable for short TTL, but a warning is logged).
let ephemeralSecret: string | null = null
function getSecret(): string {
  const configured = process.env.CATALOG_DOWNLOAD_SECRET
  if (configured && configured.length >= 16) return configured
  if (!ephemeralSecret) {
    ephemeralSecret = crypto.randomBytes(32).toString('hex')
    console.warn(
      '[catalogToken] CATALOG_DOWNLOAD_SECRET not set (or too short) — using an ' +
        'ephemeral per-process secret. Set a stable secret in production so download ' +
        'tokens validate across instances.',
    )
  }
  return ephemeralSecret
}

function sign(data: string): string {
  return crypto.createHmac('sha256', getSecret()).update(data).digest('base64url')
}

// Best-effort single-use store (per warm instance).
const spentNonces = new Set<string>()

/** Issue a signed, expiring token. Format: `${expEpochSec}.${nonce}.${sig}` */
export function issueDownloadToken(): string {
  const exp = Math.floor(Date.now() / 1000) + getTtlSeconds()
  const nonce = crypto.randomBytes(12).toString('base64url')
  const payload = `${exp}.${nonce}`
  return `${payload}.${sign(payload)}`
}

export type TokenResult =
  | { valid: true }
  | { valid: false; reason: 'malformed' | 'expired' | 'bad-signature' | 'already-used' }

/** Verify a token, enforce expiry, signature, and best-effort single use. */
export function verifyDownloadToken(token: string | null | undefined): TokenResult {
  if (!token || typeof token !== 'string') return { valid: false, reason: 'malformed' }

  const parts = token.split('.')
  if (parts.length !== 3) return { valid: false, reason: 'malformed' }

  const [expStr, nonce, sig] = parts
  const exp = Number(expStr)
  if (!Number.isFinite(exp) || !nonce || !sig) return { valid: false, reason: 'malformed' }

  // Constant-time signature check
  const expectedSig = sign(`${expStr}.${nonce}`)
  const a = Buffer.from(sig)
  const b = Buffer.from(expectedSig)
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return { valid: false, reason: 'bad-signature' }
  }

  if (Math.floor(Date.now() / 1000) > exp) return { valid: false, reason: 'expired' }

  if (spentNonces.has(nonce)) return { valid: false, reason: 'already-used' }
  spentNonces.add(nonce)
  // Bound memory: forget the oldest entries once the set grows large. Expiry is
  // the real control, so dropping old nonces only weakens single-use slightly.
  if (spentNonces.size > 5000) {
    const first = spentNonces.values().next().value
    if (first !== undefined) spentNonces.delete(first)
  }

  return { valid: true }
}
