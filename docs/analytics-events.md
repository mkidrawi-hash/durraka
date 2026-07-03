# Analytics & Attribution — Event Reference

_Phase 5. Covers the client-side event taxonomy, first-touch UTM capture, and the
attribution columns now written next to every lead. There is **no dashboard UI** in
the app — reporting lives in the Vercel Analytics dashboard and in the Google Sheets._

---

## 1. What was added

| Piece | Where | Purpose |
|---|---|---|
| Vercel Web Analytics | `<Analytics />` in `src/app/layout.tsx` | Automatic page-views + custom events |
| First-touch attribution capture | `src/lib/analytics.ts` + `src/components/analytics/AttributionCapture.tsx` | Record UTM / referrer / landing page once per tab session |
| Custom events | `trackEvent()` in `src/lib/analytics.ts` | Named conversion signals (form submits, CTA clicks) |
| Lead attribution columns | `src/lib/attribution.ts` + the three lead API routes | Persist where each lead came from, next to the lead |

**No GA4.** Google Analytics 4 was intentionally **not** added — only Vercel Analytics.
If GA4 is wanted later, add the `@next/third-parties` `<GoogleAnalytics>` tag in the
layout and mirror each `trackEvent` call with a `gtag` event. Do not add it without a
confirmed measurement ID.

**Privacy.** Custom events carry **no PII** — only campaign metadata and non-identifying
context (project type, client type, system, page). Personal details (name, email, phone)
travel only in the lead payload to the Sheet + notification email, exactly as before.

---

## 2. Event taxonomy

All events are fired client-side via `trackEvent(name, props)`. Every event is
automatically merged with the visitor's first-touch attribution (see §3), so no event
needs to pass UTM props itself.

| Event | Fires when | Props |
|---|---|---|
| `rfq_submit` | RFQ submitted successfully | `projectType`, `clientType`, `system` |
| `rfq_submit_error` | RFQ submit rejected / network error | `status` or `reason` |
| `engineer_guidance_submit` | Engineer-guidance request succeeded | `role` |
| `engineer_guidance_submit_error` | Guidance submit failed | `status` or `reason` |
| `catalog_request_submit` | Specialized catalog request succeeded | `clientType`, `projectType` |
| `catalog_request_submit_error` | Catalog request failed | `status` or `reason` |
| `catalog_download` | Public catalog download clicked | `catalog`, `catalogType`, `pageSource` |
| `whatsapp_click` | Floating WhatsApp button clicked | `placement` |
| `phone_click` | _Reserved_ — `tel:` CTA clicked | `placement` |
| `email_click` | _Reserved_ — `mailto:` CTA clicked | `placement` |

`phone_click` / `email_click` are defined in the `AnalyticsEvent` union and ready to
wire; the footer/legal `tel:`/`mailto:` links are currently server-rendered, so they were
left unwired to avoid converting those components to client components. Wire them by
adding `onClick={() => trackEvent('phone_click', { placement: 'footer' })}` when any of
those areas becomes a client component.

The `AnalyticsEvent` union type in `src/lib/analytics.ts` is the source of truth — a
mistyped event name is a compile error, not a silently split metric. **Keep this table
and that union in sync.**

---

## 3. First-touch attribution

Captured once per tab session by `AttributionCapture` (mounted in the root layout) as
early as the client renders:

| Field | Source |
|---|---|
| `utmSource` | `?utm_source=` |
| `utmMedium` | `?utm_medium=` |
| `utmCampaign` | `?utm_campaign=` |
| `utmTerm` | `?utm_term=` |
| `utmContent` | `?utm_content=` |
| `gclid` | `?gclid=` (Google Ads) |
| `landingPage` | first `pathname + search` seen |
| `referrer` | `document.referrer` at first load |

- **First-touch, not last-touch.** Stored in `sessionStorage` under
  `durraka_attribution_v1` and written **once** — a visitor who lands from an ad, browses
  five pages, then submits an RFQ still shows the ad as the source.
- **Best-effort.** If `sessionStorage` is blocked (private mode), capture silently no-ops;
  the lead still submits normally with empty attribution.
- **Session-scoped.** Cleared when the tab session ends — no long-lived tracking cookie.

On submit, each lead form includes `getAttribution()` in its payload; the API route
sanitizes it (`sanitizeAttribution`) and appends it to the lead's Sheet row.

---

## 4. Google Sheet columns (⚠ manual header action)

The three lead tabs now receive **8 appended attribution columns** in this fixed order
(`ATTRIBUTION_HEADERS` in `src/lib/attribution.ts`):

`UTM Source · UTM Medium · UTM Campaign · UTM Term · UTM Content · GCLID · Landing Page · Referrer`

| Tab | Attribution columns | Append range |
|---|---|---|
| `RFQ Submissions` | **AA–AH** (after the Phase 3 scoring block ending at Z) | `A:AH` |
| `Engineer Guidance Requests` | **Q–X** (after `P Referrer`) | `A:X` |
| `Catalog Requests (Specialized)` | **Q–X** (after `P Referrer`) | `A:X` |

**Owner action:** add these 8 header labels to the header row of each tab, in the columns
above. This is **cosmetic only** — the append is positional, so data lands in the right
columns even before headers are added; the labels just make the sheet readable. No new
environment variable and no new tab are required.

---

## 5. Verifying

- **Page views / events:** Vercel project → **Analytics** tab (custom events appear under
  _Events_ once traffic flows; there is a short delay after deploy).
- **UTM end-to-end:** open a lead form with e.g.
  `/request-quotation?utm_source=linkedin&utm_medium=social&utm_campaign=q3-facade`,
  submit, and confirm the campaign values land in the tab's attribution columns.
- **First-touch:** land on that UTM URL, navigate to another page, then submit — the
  original `utm_source` must still be recorded.
