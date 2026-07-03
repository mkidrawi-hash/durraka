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
