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
