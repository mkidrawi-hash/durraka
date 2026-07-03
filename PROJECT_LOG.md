# Durraka Website — Project Log

Running log of all development sessions, decisions, and branch references.

---

## Session 1 — Initial build (PR #1)

**Branch:** `feat/initial-site`  
**Merged to main:** Yes

- Scaffolded Next.js 14 App Router project with TypeScript and Tailwind CSS
- Defined brand tokens: `navy (#071B3B)`, `accent (#D71920)`
- Built pages: Home, About, Projects, Systems, Contact
- Layout: Header (sticky), Footer, global CSS

---

## Session 2 — RFQ system (PR #2 + PR #3)

**Branch:** `feat/rfq-backend`  
**Merged to main:** Yes (after rebase fix)

- Added `/request-quotation` page with server-side RFQ form (`RFQForm` client component)
- Added `/api/rfq` route: validation, Resend email, optional Google Sheets logging
- Honeypot spam protection (`website` field hidden at −9999 px)
- Permanent redirect `/rfq` → `/request-quotation`
- RFQ reference format: `RFQ-YYYYMMDD-XXXX`
- Hero rebranded: "Request a GFRC/GRC Quotation", two-column layout with four benefit bullets
- **Env vars (main):** `RESEND_API_KEY`, `RFQ_INTERNAL_EMAIL`, `RFQ_FROM_EMAIL`, `GOOGLE_SHEETS_*`

---

## Session 3 — Legal pages (PR #4 + PR #5)

**Branch:** `feat/legal-pages` → `fix/legal-contact-details`  
**Merged to main:** Yes

- Added `/privacy-policy` and `/terms-and-conditions` pages (Durraka-specific content)
- Footer LEGAL column added (5-column grid)
- PR #5 fix: added contact details (`info@durraka.com`, `+966 12 619 2224`, Saudi Arabia) to both legal pages
- Updated last-modified date to June 2026
- Scope: RFQ submissions, contact form, catalog requests

---

## Session 4 — RFQ pipeline refactor

**Branch:** `feat/rfq-pipeline`  
**Merged to main:** Pending

- Extracted RFQ processing into typed lib: `src/lib/rfq/`
  - `types.ts` — `RfqFormData`, `LeadScore`, `ScoredLead`, `ScoreLabel` types
  - `schema.ts` — `validateRfq()`, `RfqValidationError`
  - `scoring.ts` — 0–100 lead score; `hot` / `warm` / `cold` labels
  - `sinks/index.ts` — `LeadSink` interface
  - `sinks/email.ts` — `EmailSink` (Resend, branded HTML with score block)
  - `sinks/sheets.ts` — `SheetsSink` (Google Sheets API, 18-column append)
- Renamed env vars: `EMAIL_PROVIDER_API_KEY`, `RFQ_NOTIFICATION_EMAIL`, `EMAIL_FROM`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`, `GOOGLE_SHEETS_TAB_NAME`
- Email subject includes score label: `[HOT]` / `[WARM]` / `[COLD]`

---

## Session 5 — Social icons system (PR #6)

**Branch:** `feat/social-icons`  
**Merged to main:** Yes

- Created `src/lib/social-links.ts` — centralized LinkedIn + WhatsApp config
  - LinkedIn: `https://www.linkedin.com/company/durraka`
  - WhatsApp: `+966126192224` with pre-filled message
- Built `SocialIcon`, `SocialLinks` components (`src/components/social/`)
- Added `FloatingWhatsAppButton` (fixed `bottom-6 right-4`, `z-40`, WhatsApp green)
- Updated `Footer.tsx`: `SocialLinks variant="dark" size="sm"` below brand, Google Maps address link
- Updated `Contact` page: "Prefer a quick discussion?" block with WhatsApp + LinkedIn CTAs
- Added `FloatingWhatsAppButton` to `app/layout.tsx`

---

## Session 7 — Mixed Project Archive Batch 01 & 02 published

**Branch:** `feat/publish-mixed-project-batches-01-02`  
**Merged to main:** Pending

- Published all owner-approved images from Mixed Project Archive Batch 01 and Batch 02 to the public Project Gallery
- Image folders used:
  - `public/images/projects/kaec-2025-hospitality/` — 11 images (KAEC · 2025, Hospitality/Resort)
  - `public/images/projects/grand-arcade-facade-complex/` — 30 images (Saudi Arabia · Various)
- Added 5 new `GalleryCategory` values: `Infrastructure`, `High-Rise / Towers`, `Architectural Details`, `Samples & Mockups`, `Civic Identity Elements`
- Updated `GALLERY_FILTERS` to include all new categories
- Added 30 new `GALLERY_IMAGES` entries in `src/data/galleryImages.ts` covering:
  - Grand Arcade Facade Complex (9 entries) → Facades & Cladding + Grand Entrances
  - Bridge Infrastructure Cladding (3 entries) → Infrastructure
  - Tunnel Pattern Cladding (1 entry) → Infrastructure
  - Civic Identity Elements (3 entries, incl. owner-approved logo panels) → Civic Identity Elements
  - Mashrabiya Entry Screens (2 entries) → Mashrabiya
  - Religious Facility Architectural Details (5 entries) → Grand Entrances + Domes + Mashrabiya + Architectural Details
  - Urban High-Rise Tower (4 entries) → High-Rise / Towers
  - Architectural Samples & Mockups (3 entries) → Samples & Mockups
- All 41 images registered in `IMAGE_REGISTER.md` as `approved-website`
- Logo-panel images published per owner approval; captions use neutral wording: "Project-specific decorative identity panel" / "Architectural signage feature"
- No confidential client names, contract names, fixing details, quantities, or installation methodology exposed

---

## Session 6 — Image placeholders (PR #7)

**Branch:** `feat/image-placeholders`  
**Merged to main:** Pending

- Created `public/images/` folder structure:
  - `hero/`, `projects/`, `systems/`, `factory/`, `details/`, `catalog/`, `placeholders/`, `logos/`
- Built `src/components/ui/ImagePlaceholder.tsx`:
  - CSS-only branded placeholder: navy background, diagonal SVG texture (6% opacity), bottom gradient, muted category label (18% opacity)
  - When `src` prop supplied: renders real Next.js `<Image>` with `fill` + `object-cover`
  - Props: `src?`, `alt`, `category?`, `className?`, `badge?`, `priority?`
- Applied to `src/app/projects/page.tsx` — replaced ghost camera SVG icon
- Applied to `src/components/home/ProjectsPreview.tsx` — replaced grid-pattern div
- Created `IMAGE_REGISTER.md` — classification guide, pre-publish checklist, folder targets, page slot inventory
- Created `PROJECT_LOG.md` — this file

---

## Session 8 — Package infographic boards inline + Custom Decorative SVG (PR #20)

**Branch:** `feat/project-infographic-boards`  
**Merged to main:** Pending

### What changed

- Added `InfographicBoard` interface and `infographics?: InfographicBoard[]` field to `PackageDetailLayout.tsx`
- Added inline Architecture Reference Boards section to `PackageDetailLayout` — renders SVG boards at full width using `<Image unoptimized>` with horizontal scroll on mobile (minWidth 700px)
- Wired infographic boards to all 6 package pages:
  - `domes-cornices-package` — dome + cornice boards
  - `columns-capitals-package` — column-capital board
  - `mashrabiya-screen-package` — mashrabiya board
  - `commercial-facade-package` — cornice board
  - `grand-entrance-package` — column-capital + cornice boards
  - `custom-decorative-elements-package` — new custom decorative board
- Created new SVG infographic board: `public/images/infographics/custom-decorative-component-overview.svg`
  - 1600×900 board matching existing visual style
  - Left panel: facade illustration with diamond lattice pattern, 8-petal rosette medallion, corner ornaments, 6 callout circles
  - Right dark panel: title, 4 content cards, 6 reference lines
  - NDA-safe labels only: Decorative Panel, Bespoke Ornament, Relief Pattern, Edge Profile, Repeating Motif, Project Geometry

### Files changed
- `src/components/packages/PackageDetailLayout.tsx`
- `src/app/packages/domes-cornices-package/page.tsx`
- `src/app/packages/columns-capitals-package/page.tsx`
- `src/app/packages/mashrabiya-screen-package/page.tsx`
- `src/app/packages/commercial-facade-package/page.tsx`
- `src/app/packages/grand-entrance-package/page.tsx`
- `src/app/packages/custom-decorative-elements-package/page.tsx`
- `public/images/infographics/custom-decorative-component-overview.svg` (new)

### Status
Pushed to branch. Ready for visual review.

### Next step
Merge PR #20 after visual review on mobile and desktop.

---

## Session 9 — Bilingual EN/AR infographic page

**Branch:** `feat/project-infographic-boards`  
**Merged to main:** Pending

### What changed

- Created new route: `/infographic/gfrc-classical-columns`
- New file: `src/app/infographic/gfrc-classical-columns/page.tsx`
  - Server component with `export const metadata` for SEO
  - Full bilingual English + Arabic infographic page
  - Arabic rendered with `dir="rtl" lang="ar"` and system font stack (Cairo, Noto Kufi Arabic)
  - No external Arabic font import needed
- Sections: header (EN+AR title + intro + Durraka wordmark), hero image (21:9 cinematic crop, navy vignette), 4 feature blocks (2×2 grid with inline SVG illustrations), 5 finish swatches, navy CTA strip, footer
- Inline SVG components: `ColumnIllustration`, `PrecisionIllustration`, `LightweightIllustration`, `WeatherIllustration`
- Hero image: `public/images/infographics/gfrc-classical-columns-hero.png` (neoclassical columns, no people, NDA-safe)
- No installation details, fixing systems, or confidential production methods anywhere

### Files changed
- `src/app/infographic/gfrc-classical-columns/page.tsx` (new)
- `public/images/infographics/gfrc-classical-columns-hero.png` (new)

### Status
Pushed to branch. Ready for visual review.

### Next step
Share URL after deployment for client review.

---

## Session 10 — Premium package pages: modal system + component detail cards

**Branch:** `feat/project-infographic-boards`  
**Merged to main:** Pending

### What changed

**New shared components:**

- `src/components/packages/ComponentDetailModal.tsx`
  - `'use client'` modal with 7 tabs: Overview, Materials, Arch. Drawings, Shop Drawings, Finishes & Colors, Project Inputs, Scope & Deliverables
  - ESC key close, backdrop tap close, body scroll lock
  - Mobile: full-screen slide-up sheet. Desktop: centered max-w-4xl with max-height
  - Tabs scroll horizontally on mobile (no tab truncation)
  - Footer with Request Quotation CTA
  - No installation details, fixing systems, or structural secrets in any tab

- `src/components/packages/PremiumPackageLayout.tsx`
  - `'use client'` reusable full-page layout for all 6 package pages
  - Manages modal open/close state and active tab state
  - Sections: Hero (navy, two CTAs), quick highlights strip, package overview + suitable-for sidebar, component cards grid, architecture reference boards, project review timeline (6 steps), finish directions, information required checklist, dark CTA section, disclaimer
  - Component cards: unique inline SVG card illustration, short description, 3 tags, **View Details** button → opens modal

**Per-package client.tsx files (all new):**

Each file contains:
- Package-specific SVG card illustrations (simple architectural line drawings)
- Package-specific facade elevation hotspot diagram (used in modal Overview tab, shows A–F hotspot positions)
- `ComponentDetail[]` array with 6–8 components, each with: id, title, shortDescription, tags, CardIllustration, hotspots (A–F), HotspotDiagram, and full tab data
- `PremiumPackageData` object with reviewSteps, suitableApplications, infographics, etc.
- Named export: `[PackageName]PackageClient`

Files:
- `src/app/packages/domes-cornices-package/client.tsx` (7 components: Main Dome, Cornice Profile, Crown Cornice, Decorative Band, Parapet Coping, Column Capital Connection, Entrance Arch)
- `src/app/packages/columns-capitals-package/client.tsx` (7 components: Column Shaft, Capital, Base/Plinth, Pilaster, Arched Bay, Entablature, Spandrel Panel)
- `src/app/packages/commercial-facade-package/client.tsx` (6 components: Cladding Panel, Cornice Band, Window Surround, Corner Expression, Vertical Fin, Custom Profile)
- `src/app/packages/grand-entrance-package/client.tsx` (8 components: Entrance Column, Capital, Grand Arch, Gate Cornice, Decorative Frame, Feature Panel, Mashrabiya Accent, Custom Detail)
- `src/app/packages/mashrabiya-screen-package/client.tsx` (6 components: Screen Panel, Window Insert, Entrance Screen, Background Cladding, Screen Frame, Custom Pattern)
- `src/app/packages/custom-decorative-elements-package/client.tsx` (7 components: Geometric Panel, Calligraphic Panel, Identity Panel, Custom Frame, Ornamental Detail, Accent Feature, Civic Element)

**Updated page.tsx files (server components):**

All 6 package `page.tsx` files stripped to metadata + `<[PackageName]PackageClient />` + `<StickyMobileCTA />`. No data or logic in the server component.

### Architecture notes

- `page.tsx` stays a **server component** — exports `metadata` for SEO
- All interactivity (modal, tabs, scroll lock) is in `'use client'` components
- `PremiumPackageLayout` is reusable — to apply to a new package, create a `client.tsx` next to its `page.tsx` with the package's data and SVG illustrations
- All shared tab content (Materials, Shop Drawings, Finishes, Inputs, Scope) is defined as `SHARED_*` constants and reused across all components in each package

### Confidentiality

- No fixing details, brackets, anchors, or structural calculations anywhere
- Shop Drawings tab explicitly states these are not published publicly
- All SVG illustrations are architectural reference drawings only — no connection details

### Files changed
- `src/components/packages/ComponentDetailModal.tsx` (new)
- `src/components/packages/PremiumPackageLayout.tsx` (new)
- `src/app/packages/domes-cornices-package/client.tsx` (new)
- `src/app/packages/domes-cornices-package/page.tsx` (modified)
- `src/app/packages/columns-capitals-package/client.tsx` (new)
- `src/app/packages/columns-capitals-package/page.tsx` (modified)
- `src/app/packages/commercial-facade-package/client.tsx` (new)
- `src/app/packages/commercial-facade-package/page.tsx` (modified)
- `src/app/packages/grand-entrance-package/client.tsx` (new)
- `src/app/packages/grand-entrance-package/page.tsx` (modified)
- `src/app/packages/mashrabiya-screen-package/client.tsx` (new)
- `src/app/packages/mashrabiya-screen-package/page.tsx` (modified)
- `src/app/packages/custom-decorative-elements-package/client.tsx` (new)
- `src/app/packages/custom-decorative-elements-package/page.tsx` (modified)

### Build status
All 6 package pages build cleanly. No TypeScript errors, no lint warnings.

### Status
Pushed to `feat/project-infographic-boards`. Ready for visual review and merge.

### Next step
1. Visual review all 6 package pages on mobile and desktop
2. Test modal: open, close, ESC, tab switching, scroll
3. Merge PR #20 after approval
4. Consider applying same premium modal system to project detail pages

---

## Session — Social-Media-Center Image Audit (documentation-only)

**Branch:** `main` (no code/data changes) · **No PR opened.**
**Audit date:** 2026-06-29

Documentation-only image review, classification, sanitization planning, and gallery
project-grouping plan using the Social Media Command Center logic.

- **Folders scanned:** `public/images/**` (projects, packages, infographics, logos),
  repo-root stray images, and `private/held-gallery-review/**`.
- **Total images reviewed:** 183
- **Public-safe images:** 70
- **Sanitizable images:** 28
- **Needs manual review:** 28
- **Rejected / internal-only:** 0 rejected + 50 internal-only (archive originals)
- **HELD_FOR_REVIEW (excluded):** 7 (unchanged from Phase 2)
- **Project groups found:** 22 folders (12 project packages, 3 legacy sets, 4 design-asset
  groups, 2 held groups, 1 repo-root stray group)
- **Rixos status:** **Not present in current repo / pending upload** — no rixos / rixsos /
  ريكسوس match anywhere. No Rixos collection created; documented in GALLERY_GROUPING_PLAN.md.

**Confirmations:**
- ✅ No original images were modified, moved, overwritten, or deleted.
- ✅ No sanitized derivative images were produced (image-editing tooling unavailable).
- ✅ Public gallery data (`src/data/galleryImages.ts`) was NOT changed.
- ✅ HELD_FOR_REVIEW images remain excluded from public use.

**Files created:** `private/social-media-asset-review/` →
IMAGE_AUDIT_MANIFEST.md, IMAGE_AUDIT_MANIFEST.csv, GALLERY_GROUPING_PLAN.md,
GALLERY_GROUPING_PLAN.csv, SANITIZATION_PLAN.md, SANITIZED_OUTPUTS.md,
NEEDS_MANUAL_REVIEW.md, REJECTED_FOR_PUBLIC_USE.md.

**Next step:** provide image-editing tooling (sharp / ImageMagick / cwebp / exiftool) to
produce sanitized derivatives, and upload Rixos images to a dedicated package folder.

---

## Session — Phase 1 Systems Alignment Patch

**Branch:** `feat/phase-1-systems-alignment` · **No PR opened** (per instruction).

Small alignment patch for the Systems section only (no Phase 2, no redesign).

- **Canonical slug:** façade page moved to `/systems/gfrc-grc-facade-cladding`;
  old `/systems/facade-cladding` now **308-redirects** (next.config `redirects()`).
  `SYSTEMS` entries gained a `slug`; the systems list links via `slug`.
- **Feature badges row:** added optional `featureBadges?: string[]` to
  `SystemEnhancedData`; new distinct navy badge row renders below the hero.
  Façade page: Architectural Freedom · Durable · Lightweight · Weather Resistant.
- **Nav label:** "Components" → "Systems" (route stays `/systems`).
- **Content organization:** façade page copy moved to
  `src/content/en/systems/gfrc-grc-facade-cladding.ts` (pattern for future
  `content/ar` — no Arabic added, other systems left inline as-is).
- **Finish tiles:** no fake/AI textures introduced; existing SVG swatches kept;
  heading "Real Texture & Finish Options" → "Finish Options & Directions" +
  TODO comment that dedicated finish-texture photos are pending approval.

**Deferred to Phase 2 (not implemented):** "Request Engineer Guidance" CTA,
guidance forms/flows, coming-soon placeholder cards.

**Checks:** tsc clean · lint clean · build ✓ (route generated) · runtime:
`/systems` 200, `/systems/gfrc-grc-facade-cladding` 200, old slug 308→canonical,
badges render, nav shows "Systems". No unsafe/confidential media introduced.

**Files changed:** src/lib/constants.ts, src/app/systems/page.tsx,
next.config.mjs, src/components/systems/SystemEnhancedLayout.tsx,
src/content/en/systems/gfrc-grc-facade-cladding.ts (new),
src/app/systems/gfrc-grc-facade-cladding/page.tsx (new),
src/app/systems/facade-cladding/page.tsx (removed).

### Phase 1 completion note
Reviewed and verified on `feat/phase-1-systems-alignment`:
- Nav "Systems" (desktop + mobile via shared NAV_LINKS) · list links via `slug`
  · façade card → `/systems/gfrc-grc-facade-cladding`.
- Canonical page renders and imports copy from
  `src/content/en/systems/gfrc-grc-facade-cladding.ts`.
- Old `/systems/facade-cladding` → 308 permanent redirect (next.config).
- `featureBadges?: string[]` typed + reusable; distinct badge row below hero,
  separate from the hero photo callouts; optional field does not break the other
  five system pages.
- Added missing `typecheck` script (`tsc --noEmit`).
- No stale English `/systems/facade-cladding` route remains (only the redirect
  source). No sitemap/robots file exists, so no stale canonical reference.
- lint ✓ · typecheck ✓ · build ✓.

Known TODO (not Phase 1): `/ar/systems/facade-cladding` Arabic mirror still uses
the old slug — align when Arabic content work begins (Phase 2+).

### Phase 1 completion — Section 1B detail page
Completed the GFRC/GRC façade cladding detail page per master prompt 1B, on
`feat/phase-1-systems-alignment` (same branch/PR):
- Added Engineer Guidance **stub route** `/systems/gfrc-grc-facade-cladding/engineer-guidance`
  (Phase-1 placeholder → routes to RFQ; full flow is Phase 2). Hero secondary CTA
  now "Request Engineer Guidance" (via optional `engineerGuidanceHref`).
- Added "Request More Information" block (→ Request Quote / RFQ).
- Wired "Talk to a Specialist" to WhatsApp (+966 12 619 2224 via SOCIAL_LINKS).
- Finish tiles: added optional `finishes` on the content type; façade now shows the
  6 requested directions (Smooth · Sandblasted · Textured · Stone-Like · Custom
  Color · Heritage) as clean SVG/data tiles (no fake photos).
- Systems list cards now use two CTAs: **Explore System** (→ detail) + **Request
  Technical Review** (→ RFQ), applied to all cards.
- Footer address already correct (Office 203, 2nd Floor, JBSA 2372, Jeddah, Saudi
  Arabia via CONTACT_INFO) — no change.
- Reuse preserved: everything renders from the typed `SystemEnhancedData` content
  object. RFQ/lead-scoring API untouched.
- lint ✓ · typecheck ✓ · build ✓ (both routes generated).

Note: the 404 the reviewer saw was because this branch was not merged to `main`.
This is now ready as one PR for review/merge.

### Deployment wiring check (2026-07-03)
Investigated whether `mkidrawi-hash/durraka` reaches a live Vercel project.

**Finding: (b) — the repo IS connected, to a project named `durraka`** (NOT the
old `v0-durraka-factory-website`).
- Vercel project: **durraka** · id `prj_K2Vqk0SjmiYEXL36AeExCpbbqzxL` ·
  team `durraka-factory-for-industry`.
- Evidence: Vercel bot preview comments on both PRs, status **Ready**:
  - PR #29 inspector: vercel.com/durraka-factory-for-industry/durraka/ECcG5VwdanEf9ov9vEpw9msE8qx4
  - PR #30 inspector: vercel.com/durraka-factory-for-industry/durraka/Aw2Px7hVEfP5bqBz2KkEWK64k4wx
  - PR #30 preview: https://durraka-git-feat-phase-1-sy-948371-durraka-factory-for-industry.vercel.app
- Why the earlier "no deployments since June 11": that was the OLD project
  `v0-durraka-factory-website` (linked to the old repo). The current repo
  deploys to the NEWER `durraka` project, which the earlier list_projects view
  did not surface.
- Repo has no `.vercel/`, no `vercel.json`, no GitHub Actions → deploys purely
  via Vercel's dashboard Git integration (which is active for the `durraka` project).

**Open item (domain):** confirm the custom domain (durraka.com) is attached to
the `durraka` project, not the old `v0-durraka-factory-website`. The old project
can be archived once confirmed.

**Merge convention:** recent merges show `<title> (#NN)` on a single commit →
**squash merge** is the repo convention.

---

## Session — Phase 2: Engineer Guidance Request System

**Branch:** `feat/phase-2-engineer-guidance` (from clean main after PR #30 merged).
**PR:** held — opens only after the Sheets tab + env are set up (owner action).

Controlled-distribution request flow. NO document is auto-downloaded or publicly
hosted; the site records the request + issues a reference; Durraka sends guidance
MANUALLY after verification. No public file link/URL/attachment anywhere.

- New `POST /api/engineer-guidance` — sanitise → validate → honeypot → Sheets
  append + Resend email. **No silent lead loss:** both sinks awaited; success only
  if ≥1 succeeds; if none → full lead logged + HTTP 502 telling the visitor to
  email info@durraka.com.
- **Reference `EG-YYYY-NNNN`:** derived from the **MAX existing reference** in the
  reference column (+1), zero-padded — a deleted/blank row can never cause a
  duplicate. **Fallback `EG-YYYY-T####`** (T + last 4 epoch digits) — visually
  distinct so it can never collide with a sequential number.
- Sheets tab **"Engineer Guidance Requests"** (env `ENGINEER_GUIDANCE_TAB_NAME`),
  16 columns A–P incl. Status (default "New"; site never changes it).
- Stub page replaced with the request form (`EngineerGuidanceForm`, dictionary
  copy in `src/content/en/systems/engineer-guidance.ts`). Confirmation shows the
  reference number.
- Internal master template `private/engineer-guidance/gfrc-grc-facade-cladding.md`
  (public-safe design guidance only; no fixing/anchor/subframe/mix-design).

**Operational rules (agreed):**
- Rows in the Engineer Guidance tab are **never deleted — only marked `Declined`**
  (protects the MAX-reference sequence from ever reusing a number).
- Status flow (internal only): New → Under Review → Approved → Sent → Declined.

**Security note:** nothing under `private/` is imported by any client/src code
(verified — does not enter the JS bundle) and it lives outside `/public` (not
served). ⚠️ If this repo is ever made **public**, `private/` contents become
visible in the repository — review/relocate internal material before that.

**Env required (no secrets committed):** existing GOOGLE_SHEETS_*, EMAIL_SERVICE_API_KEY,
RFQ_TO_EMAIL, RFQ_FROM_EMAIL + new `ENGINEER_GUIDANCE_TAB_NAME` (default
"Engineer Guidance Requests").

**Checks:** typecheck ✓ · lint ✓ · build ✓ (both routes generated). RFQ/lead-scoring
and catalog-manual work untouched.

---

## Session — Phase 3: Smart RFQ Engine + Lead Qualification

**Branch:** `feat/phase-3-rfq-upgrade` · one PR.

Audit finding: the RFQ route had **no lead scoring** (the "existing scoring" was
in the old v0 repo, never ported) and used **fire-and-forget** Sheets append.
PR #27 was already **merged/closed** (not dangling).

Upgrade (does not break /request-quotation):
- **Reliability:** RFQ route now mirrors `/api/engineer-guidance` — awaits Sheets +
  Resend, succeeds if ≥1 sink works, else logs full lead + returns **502** with an
  email-fallback message. No silent lead loss.
- **Conditional qualification fields** (shown once a project type is chosen):
  Approximate Scale, Consultant Appointed?, Target Start (copy in
  `src/content/en/rfq.ts`).
- **Required Project Information checklist** — text-only section on
  `/request-quotation` (no file uploads built).
- **Lead scoring (server-only, new)** `src/lib/leadScoring.ts`: numeric score +
  tier (Green/Amber/Red) + tags (Segment, Routing, Follow-up Priority). Rubric in
  `docs/lead-scoring.md`. Written to RFQ Sheet columns V–Z (+ S–U for the new
  fields). Existing columns A–R unchanged (append-only).
- **Security:** scoring never imported client-side (verified — not in bundle) and
  never returned in API responses. No pricing anywhere public.

**Manual step (owner) — add these Sheet headers (S–Z) to the RFQ tab before use:**
`S Consultant Appointed · T Scale Band · U Target Start · V Lead Score · W Tier ·
X Segment · Y Routing · Z Follow-up Priority`.

**Untouched:** engineer-guidance, catalog-manual, Phase 1 pages. No new deps.
Checks: typecheck ✓ · lint ✓ · build ✓.

---

## Session — Phase 4A: Catalog gating (controlled distribution)

**Branch:** `feat/phase-4a-catalog-gating` · one PR.

Consolidated the tangled catalog request flow to the engineer-guidance controlled
pattern. Public simple catalog stays a direct download; specialized catalogs are
request-only (no auto-download, no public file URL).

- **`detailed-catalog-request` rewritten (controlled):** removed the auto-access
  path (`CATALOG_B2B_URL` + token), hardened sinks (await Sheets + Resend, 502 if
  none — no silent lead loss), reference now **`CAT-YYYY-NNNN`** (MAX-based;
  `CAT-YYYY-T####` fallback), tab **"Catalog Requests (Specialized)"**
  (env `CATALOG_SPECIALIZED_TAB_NAME`), Status column default **"New"**. Returns
  only `{ success, reference }` — never a file link.
- **Retired:** `api/detailed-catalog-download` (token download), `lib/catalogToken.ts`,
  the orphaned `api/catalog-request` route + `GatedCatalogSection` component. Reverted
  the `next.config` file-tracing (download route gone).
- **`DetailedCatalogRequestForm`:** removed the auto-download success state — always
  shows pending-review confirmation with the reference.
- `private/catalogs/durraka-b2b-detailed-catalog-draft.pdf` remains archived (not
  served, not linked); team sends specialized catalogs manually.

**Manual action (owner) before merge:** create Sheet tab "Catalog Requests
(Specialized)" with headers A–P and (optional) set `CATALOG_SPECIALIZED_TAB_NAME`.
`CATALOG_B2B_URL` is no longer used (safe to remove).

**Checks:** typecheck ✓ · lint ✓ · build ✓. RFQ / engineer-guidance / Phase 1 untouched.

---

## Session — Phase 4B: Projects gallery (dual publish gate + hardened lightbox)

**Branch:** `feat/phase-4b-gallery` · one PR. Extended the existing `/gallery`
(no duplicate `/projects` gallery).

- **Second publish gate — `approvedForWeb`:** added `approvedForWeb: boolean` to the
  `GalleryImage` interface and set it on all 54 entries. An image now renders only
  when `status === 'Public Safe'` **AND** `approvedForWeb === true` **AND**
  `image !== null`. `status` still encodes confidentiality (Public Safe / Needs
  Editing / Internal Only / NDA Protected); `approvedForWeb` is the explicit
  owner sign-off toggle so a Public-Safe asset can be held back until cleared.
- **Lightbox focus-return:** the mount/unmount effect now captures the triggering
  element and restores focus to it on close (alongside the existing scroll-lock).
  Already present and verified: ESC + arrow keys, zoom keys, `role="dialog"` +
  `aria-modal`, backdrop-click + close button, `next/image` lazy-loading, and the
  system filter chips.

**Manual action (owner):** none — no new Sheet tab or env var. To publish a held
image, flip its `approvedForWeb` to `true` (and confirm `status: 'Public Safe'`).

**Confidentiality:** no fixing/installation, structural, pricing, or lead-scoring
detail is exposed publicly; no public file links added beyond already-approved assets.

**Checks:** typecheck ✓ · lint ✓ · build ✓ (`/gallery` compiles). RFQ /
engineer-guidance / catalog / Phase 1 untouched.

---

## Session — Phase 5: Analytics events + UTM attribution

**Branch:** `feat/phase-5-analytics` · one PR. No dashboard UI in-app (reporting lives
in the Vercel dashboard + the lead Sheets).

- **Vercel Web Analytics:** added `@vercel/analytics` and mounted `<Analytics />` in the
  root layout (page-views + custom events). **No GA4** (intentionally excluded — add only
  with a confirmed measurement ID).
- **First-touch attribution:** `src/lib/analytics.ts` (client) captures UTM
  (`source/medium/campaign/term/content`), `gclid`, landing page, and referrer **once per
  tab session** into `sessionStorage` (`durraka_attribution_v1`), via the
  `AttributionCapture` component mounted in the layout. Best-effort, no PII, session-scoped
  (no long-lived cookie).
- **Custom events:** `trackEvent()` with a typed `AnalyticsEvent` union — `rfq_submit`
  (+`_error`), `engineer_guidance_submit` (+`_error`), `catalog_request_submit`
  (+`_error`), `catalog_download`, `whatsapp_click`; `phone_click`/`email_click` reserved.
  Every event auto-merges first-touch attribution.
- **Lead attribution in Sheets:** `src/lib/attribution.ts` (server-safe, no secrets) is the
  single source of truth for shape + fixed column order. Each lead form now sends
  `attribution` in its payload; routes sanitize it and append **8 columns**:
  RFQ **AA–AH** (`A:AH`), Engineer Guidance & Catalog **Q–X** (`A:X`). Positional append —
  data lands correctly even before headers exist.
- **Docs:** `docs/analytics-events.md` — taxonomy, attribution model, sheet columns,
  verification steps.

**Manual action (owner):** add 8 header labels
(`UTM Source · UTM Medium · UTM Campaign · UTM Term · UTM Content · GCLID · Landing Page ·
Referrer`) to each lead tab (RFQ AA–AH; Guidance/Catalog Q–X). Cosmetic only — no new env
var or tab. Enable Web Analytics in the Vercel project if not already on.

**Checks:** typecheck ✓ · lint ✓ · build ✓. Lead-loss hardening, scoring, and controlled
distribution untouched.

---

## Session — Gallery polish: filters, captions, titles, naming

**Branch:** `fix/gallery-polish` · one PR. Display/copy only — no request flows, APIs,
Sheets, lightbox behavior, or publish gate touched.

- **Empty filters hidden:** `FilterBar` now renders `All` plus only categories with ≥ 1
  published item (computed from the live counts), so Hospitality/Cornices (0 items) no
  longer show and future categories appear automatically once they have content.
- **Caption location cleanup:** added `formatLocation()` in `GalleryPage` — known city →
  "City, Saudi Arabia", generic/empty city → "Saudi Arabia"; the placeholder year
  "Various" is dropped. Eliminates the redundant "Saudi Arabia, KSA · Various" pattern.
  No city invented.
- **Duplicate titles distinguished + mosque anonymized:** the 3 identical mosque cards now
  read "Landmark Mosque – Al Aziziyah, Makkah — {Exterior Elevation | Minaret Detail |
  Dome & Ornament Detail}" (suffixes derived from each card's existing alt text); alt texts
  anonymized to match. The real project name is removed from all rendered/served output.
- **Page-title de-duplication:** stripped the baked-in brand tail from 27 per-page metadata
  titles so the root `template: '%s | Durraka Factory'` adds the brand exactly once
  ("<Page> | Durraka Factory"). Home keeps the root default.

**Internal identifiers retained (per guardrail):** the source-folder name, the folder's
`image-manifest.json` / `README.md` / `project-info.md`, and one source code comment still
reference the real project name — none are rendered or served on a page.

**Verification:** grep of the served build (`.next` excluding `cache`) → **0** occurrences
of the full mosque name and **0** gallery ", KSA"/"· Various" captions. typecheck ✓ ·
lint ✓ · build ✓.

---

## Session — Navigation & terminology cleanup (Packages / Systems / Projects)

**Branch:** `fix/nav-terminology` · one PR. Naming/links + one redirect only — no
layout, flow, or API changes.

- **Package detail pages (shared `PremiumPackageLayout`, all 6 packages):** hero anchor
  button "View Components" → **"What's Included"** (anchor `#components` + existing
  down-chevron unchanged → reads "What's Included ↓"); section heading "GFRC/GRC
  Components" → **"What's Included in This Package"** (subheading + eyebrow unchanged).
- **Homepage terminology:** Hero "View Components" → **"Explore Our Systems"** (→ /systems);
  Capabilities "View All Components" → **"View All Systems"** (→ /systems); Packages
  "View All Packages" link **/projects → /packages** (label unchanged).
- **Legacy `/projects` retired (option a):** it mixed abstracted project claims with
  concept imagery and duplicated `/gallery`, and was already out of the main nav/footer.
  Added **301 redirects** `/projects → /gallery` and `/projects/:slug → /gallery` in
  `next.config.mjs`. The old page/subpage files remain in the tree but are shadowed by the
  redirects (safe to delete in a later cleanup).

**Checks:** typecheck ✓ · lint ✓ · build ✓.

---

## Session — Cleanup: remove legacy /projects route files

**Branch:** `chore/remove-legacy-projects` · one PR. Follow-up to #41 (301 redirects
`/projects` + `/projects/:slug` → `/gallery`, verified in production).

Deleted the legacy `/projects` page + subpage files now that the redirects fully cover the
URLs. The `next.config.mjs` 301 redirects are **kept unchanged**.

Removed (`src/app/projects/`): `page.tsx`, `ProjectsGrid.tsx`, `[slug]/page.tsx`, and the 6
named subpages (complete-facade-package, custom-architectural-components,
heritage-regional-architecture, hospitality-landmark-facades, landmark-government-facades,
villa-palace-architecture).

Confirmed nothing outside `src/app/projects/` imported these files, so the route deletes
cleanly. `/projects` + `/projects/:slug` are now served solely by the 301 redirects.

**Out of scope (flagged, not deleted):** the support modules used *only* by the removed
route — `src/components/projects/{PackageDetailPage,ProjectDetailLayout,PackageComponentsGallery}.tsx`
and `src/lib/{project-packages,package-content}.ts` — are now orphaned dead code. Left in
place per "nothing else"; can be removed in a follow-up.

**Checks:** typecheck ✓ · lint ✓ · build ✓ (no `/projects` route; redirects intact).

---

## Session — Package pages: design-intent diagrams + controlled BOQ (all 6)

**Branch:** `feat/package-design-intent` · one shared template + six typed configs · one PR.
No new dependencies (SVG hand-coded). Applies to all 6 packages via `PremiumPackageLayout`.

**Confidentiality:** public pages show DESIGN INTENT only. Added a shared SVG renderer, a
3D placeholder, a numbers-free scope section, and the mandated disclaimer — no fixing/
structural/section detail, and **no numeric quantities/areas/prices** anywhere in the
public output.

- **PART 1 — 2D design-intent diagrams:** new `DesignIntentDiagram` shared SVG renderer
  (navy `#071B3B` lines, red `#D71920` accents, white ground, thin weights) driven by a
  typed `DesignDiagram` config per package. Six meaningfully different schematics with
  numbered callouts mirroring each package's real "What's Included" list. Legend stacks
  below on mobile; caption: "Schematic design-intent diagram. Indicative arrangement only —
  not a construction or shop drawing."
- **PART 2 — 3D concept slot:** branded navy-gradient placeholder ("3D Concept Render —
  provided in the Engineer Guidance package on request"); renders a real image instead when
  `conceptImageSrc` is set (no broken-image state, no faked render).
- **PART 3 — controlled BOQ:** "Package Scope & Estimated Quantities" section = descriptive
  component list only (no numbers) + bordered callout + "Request Engineer Guidance" CTA
  linking to `…/engineer-guidance?package=<slug>`. EG form/route untouched.
- **PART 4 — disclaimer:** replaced the page-end disclaimer with the mandated wording,
  sourced from the new dictionary `src/content/en/packages.ts`.
- **Confidentiality fix:** neutralized the numeric `illustrativeArea` (e.g. "Approx.
  8,000–14,000 m²") on all 6 detail heroes **and** the `/packages` index cards → qualitative
  descriptors (no digits).

**Confidentiality grep (built package output):** zero `m²`/`mm`/`SAR`/`ريال` strings, zero
area ranges, zero "Approx." figures. Residual comma-digits are only CSS `rgba()` color
channels and SVG path/point coordinates — no quantity/area/price data.

**Checks:** typecheck ✓ · lint ✓ · build ✓.

---

## Session — Pre-merge QA fixes: package images, legal cross-refs, WhatsApp a11y

**Branch:** `feat/package-design-intent` (same branch, added commit — not merged).

- **Fix 1 — duplicate component images:** reassigned image references across all 6 package
  pages so every card uses a thematically-appropriate image. **Zero cross-theme duplicates
  remain.** Constraint noted: only **6 package images** exist (`/public/images/packages/`)
  for pages with up to 8 cards + 2 boards, so full page-wide uniqueness is impossible.
  Commercial Façade is now fully distinct (6 cards + 1 board = 7 unique, using the
  `gfrc-classical-columns-hero.png` infographic for the reference board). On 7–8 card pages
  the only remaining repeats are **same-theme** (a reference board sharing its own family's
  image with the matching card, or two same-family cards). **Recommend commissioning ~4–6
  more package images** to reach full uniqueness (esp. a dedicated cornice board image).
- **Fix 2 — legal cross-references:** corrected 4 broken "Section N" references —
  Privacy §10 & §12 contact refs (13 → **14** Contact), Privacy cookies ref (8 → **9**
  Cookies), Terms §10 Force-Majeure ref (13 → **14**). Verified all other refs
  (Privacy §8; Terms §12 jurisdiction) already correct.
- **Fix 3 — WhatsApp a11y:** already satisfied in code — `FloatingWhatsAppButton` has
  `aria-label="Contact Durraka on WhatsApp"` and the icon is `aria-hidden="true"` (added
  earlier; the reviewed preview predated it). No change required.
- **Optional — Façade:** standardized the Commercial Façade **H1** (`Facade` → `Façade`)
  to match its metadata. Component-card labels/body left as-is (full 71-occurrence sweep is
  beyond the "trivial" optional scope). URL slugs unchanged.

**Checks:** typecheck ✓ · lint ✓ · build ✓.

**Follow-up:** reverted the Commercial Façade reference board from the off-theme
`gfrc-classical-columns-hero.png` stand-in back to `villa-palace-architectural` (cornice
theme). Commercial Façade now matches every other page: the sole remaining reuse is the
cornice card ↔ cornice board (same-theme, coherent). A dedicated cornice board image is
still recommended for full uniqueness.
