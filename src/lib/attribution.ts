// ── Attribution shape + sheet serialization (server-safe, no secrets) ────────
// Shared by the client analytics helper (which captures it) and the API routes
// (which persist it next to the lead). Kept separate from analytics.ts so the
// server bundle never pulls in the @vercel/analytics client package.

export interface Attribution {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
  gclid?: string // Google Ads click id
  landingPage?: string // path + query of the first page seen this session
  referrer?: string // external document.referrer at first load
}

// Canonical, FIXED column order appended to every lead sheet. Adding a lead
// sink column? Append here (never reorder) and update the header row documented
// in docs/analytics-events.md.
export const ATTRIBUTION_HEADERS: readonly string[] = [
  'UTM Source',
  'UTM Medium',
  'UTM Campaign',
  'UTM Term',
  'UTM Content',
  'GCLID',
  'Landing Page',
  'Referrer',
]

function clean(v: unknown): string {
  return String(v ?? '').trim().slice(0, 500)
}

// Coerce untrusted client JSON into a safe Attribution. Never throws.
export function sanitizeAttribution(input: unknown): Attribution {
  const a = (input ?? {}) as Record<string, unknown>
  return {
    utmSource: clean(a.utmSource),
    utmMedium: clean(a.utmMedium),
    utmCampaign: clean(a.utmCampaign),
    utmTerm: clean(a.utmTerm),
    utmContent: clean(a.utmContent),
    gclid: clean(a.gclid),
    landingPage: clean(a.landingPage),
    referrer: clean(a.referrer),
  }
}

// Ordered row cells matching ATTRIBUTION_HEADERS — ready to spread into a
// sheets append. Empty strings for missing values (direct / organic visits).
export function attributionCells(a: Attribution | undefined): string[] {
  const x = a ?? {}
  return [
    x.utmSource ?? '',
    x.utmMedium ?? '',
    x.utmCampaign ?? '',
    x.utmTerm ?? '',
    x.utmContent ?? '',
    x.gclid ?? '',
    x.landingPage ?? '',
    x.referrer ?? '',
  ]
}
