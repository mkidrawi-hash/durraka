// ── Client-side analytics + attribution ─────────────────────────────────────
// Thin wrapper around Vercel Analytics custom events plus first-touch UTM
// capture. Everything here is CLIENT-ONLY and best-effort: analytics must never
// throw into a form submit or block a CTA. No PII is sent in event props — only
// campaign/attribution metadata and non-identifying context (system, page).
//
// Server note: this module holds NO secrets and never runs on the server path
// for lead scoring. Attribution captured here is echoed back to the API routes
// inside the normal lead payload so it lands next to the lead in the Sheet.

import { track } from '@vercel/analytics'
import type { Attribution } from '@/lib/attribution'

// First-touch attribution (shape in @/lib/attribution) is captured from the
// landing URL and persisted for the tab session, so a lead submitted three pages
// later still carries where they came from. First-touch, not last-touch: we only
// write it once per session.
export type { Attribution }

const STORAGE_KEY = 'durraka_attribution_v1'

const isBrowser = (): boolean => typeof window !== 'undefined'

function readStored(): Attribution | null {
  if (!isBrowser()) return null
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Attribution) : null
  } catch {
    return null
  }
}

// Capture attribution from the current URL. First-touch: if something is already
// stored for this session we keep it and do nothing. Call once, on first mount.
export function captureAttribution(): void {
  if (!isBrowser()) return
  if (readStored()) return // first-touch already recorded this session

  try {
    const params = new URLSearchParams(window.location.search)
    const pick = (k: string): string | undefined => {
      const v = params.get(k)
      return v ? v.trim().slice(0, 200) : undefined
    }

    const attr: Attribution = {
      utmSource: pick('utm_source'),
      utmMedium: pick('utm_medium'),
      utmCampaign: pick('utm_campaign'),
      utmTerm: pick('utm_term'),
      utmContent: pick('utm_content'),
      gclid: pick('gclid'),
      landingPage: (window.location.pathname + window.location.search).slice(0, 500),
      referrer: document.referrer ? document.referrer.slice(0, 500) : undefined,
    }

    // Persist even when there are no UTM params, so we don't re-capture a
    // deeper-page referrer later and mislabel first-touch. landingPage/referrer
    // still carry useful attribution for organic/direct visits.
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attr))
  } catch {
    // sessionStorage blocked (private mode / cookies off) — skip silently.
  }
}

// Read the stored attribution as a flat, undefined-stripped object suitable for
// merging into an event or a lead payload. Returns {} when nothing was captured.
export function getAttribution(): Attribution {
  const stored = readStored()
  if (!stored) return {}
  const out: Attribution = {}
  for (const [k, v] of Object.entries(stored)) {
    if (v) (out as Record<string, string>)[k] = v
  }
  return out
}

// Vercel custom events accept flat string/number/boolean/null props only. Flatten
// and drop empties so the dashboard stays clean.
type EventProps = Record<string, string | number | boolean | null | undefined>

function cleanProps(props: EventProps): Record<string, string | number | boolean | null> {
  const out: Record<string, string | number | boolean | null> = {}
  for (const [k, v] of Object.entries(props)) {
    if (v === undefined || v === '') continue
    out[k] = v
  }
  return out
}

// Fire a custom analytics event with first-touch attribution merged in. Safe to
// call anywhere on the client — never throws, no-ops on the server.
export function trackEvent(name: AnalyticsEvent, props: EventProps = {}): void {
  if (!isBrowser()) return
  try {
    track(name, cleanProps({ ...getAttribution(), ...props }))
  } catch {
    // Analytics is best-effort — never surface to the user.
  }
}

// Canonical event names. Keep this list and docs/analytics-events.md in sync;
// the union type makes a typo a compile error rather than a silent split metric.
export type AnalyticsEvent =
  | 'rfq_submit'
  | 'rfq_submit_error'
  | 'engineer_guidance_submit'
  | 'engineer_guidance_submit_error'
  | 'catalog_request_submit'
  | 'catalog_request_submit_error'
  | 'catalog_download'
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click'
