# Durraka Image Register

Tracks every image asset considered for the website. Update this file before adding any image to `public/images/`.

---

## Classification Key

| Label | Meaning |
|---|---|
| `approved-website` | Cleared for public use on durraka.com |
| `approved-after-editing` | Acceptable once cropped / colour-corrected / watermark removed |
| `catalog-only` | Print/PDF use only — not for web |
| `social-media-only` | Cleared for LinkedIn/WhatsApp; not for the website |
| `internal-docs` | Proposals, presentations — not public |
| `not-suitable` | Do not use (faces visible, scaffolding, client branding, watermark) |

---

## Pre-Publish Checklist

Before moving any image to `approved-website`:

- [ ] No identifiable faces of site workers or members of the public
- [ ] No watermarks or third-party branding
- [ ] No scaffolding, safety netting, or temporary works visible
- [ ] No confidential client names on signage or drawings
- [ ] No raw concrete / unfinished surfaces that misrepresent final quality
- [ ] Minimum 1200 px on the long edge (1920 px preferred for hero)
- [ ] Exported as WebP; fallback JPEG at ≤ 200 KB per image
- [ ] Alt text written and logged in this register

---

## Folder Targets

| Folder | Use | Recommended size | Aspect ratio |
|---|---|---|---|
| `public/images/hero/` | Homepage hero banner | 1920 × 1080 px | 16:9 |
| `public/images/projects/` | Project cards and detail pages | 1200 × 800 px | 3:2 |
| `public/images/systems/` | Products/systems section visuals | 1200 × 900 px | 4:3 |
| `public/images/factory/` | Factory, production, QA process | 1200 × 800 px | 3:2 |
| `public/images/details/` | Close-up façade details | 900 × 900 px | 1:1 |
| `public/images/catalog/` | Catalog PDF thumbnails | 800 × 1130 px | A4 portrait |
| `public/images/logos/` | Partner / certification logos | PNG with transparency | — |
| `public/images/placeholders/` | Development-only placeholder exports | any | — |

---

## File Naming Convention

```
{category}-{subject}-{sequence}.webp
```

Examples:
- `hero-riyadh-tower-01.webp`
- `project-heritage-mashrabiya-01.webp`
- `factory-gfrc-mixing-02.webp`
- `detail-cornice-profile-01.webp`

---

## Page Image Slot Inventory

### Homepage (`/`)
| Slot | Component | Category | Current state |
|---|---|---|---|
| Hero banner | `Hero.tsx` | `hero` | Placeholder |
| Project 1 — Riyadh Tower | `ProjectsPreview.tsx` | `project` | Placeholder |
| Project 2 — Heritage Mashrabiya | `ProjectsPreview.tsx` | `project` | Placeholder |
| Project 3 — Grand Mosque | `ProjectsPreview.tsx` | `project` | Placeholder |
| Systems section | `SystemsOverview.tsx` | `system` | Icon-only (no image slot) |

### Projects page (`/projects`)
| Slot | Project | Category | Current state |
|---|---|---|---|
| Card 1 | Riyadh Mixed-Use Tower | `project` | Placeholder |
| Card 2 | Heritage District Mashrabiya | `project` | Placeholder |
| Card 3 | Grand Mosque Extension | `project` | Placeholder |
| Card 4 | Luxury Villa Development | `project` | Placeholder |
| Card 5 | Government Complex | `project` | Placeholder |
| Card 6 | Hotel Colonnade | `project` | Placeholder |

---

## Internal / Pending Image Candidates

Images received but **NOT** cleared for direct publication. Each is either (a) pending the
required edits before it can go public, or (b) internal-only / NDA-protected and never public.

> **Storage policy:** anything placed under `public/` is served publicly by Next.js at a real
> URL. Internal-only / NDA binaries therefore live in `internal-assets/image-candidates/`
> (outside `public/`) so they are never served. Promote a candidate to its target
> `public/images/` folder only after its required edits are done **and** the Pre-Publish
> Checklist passes.
>
> **NDA rule:** never show client names, official logos, holy-site names, or identifiable
> project names. Keep every caption abstract and NDA-safe.

### Batch 1 — Factory / process photos (2026-06-14)

| Source file | Classification | Intended use | Caption | Required edits | Public? |
|---|---|---|---|---|---|
| `fac1.jpg` | `approved-after-editing` | Factory / Process section only | GFRC elements staged for project preparation and delivery. | Crop shadows & clutter; improve exposure. **Never use as hero.** | After editing |
| `fac8.jpg` | `approved-after-editing` | About page or Factory / Process section | Factory preparation of custom GFRC architectural elements. | Crop around moulds; improve clarity; blur background people. | After editing |
| `sitepic6.jpg` | `internal-docs` | Internal project-delivery reference only | — | Heavy crop & clean-up required before any public use. | **No — internal only** (site looks unfinished; not premium marketing) |

### Batch 2 — Façade photos (2026-06-14)

**Prepare first (priority order):** `6.jpg` → `2.jpg` → `3.jpg`.

| Source file | Classification | Intended use | Caption | Required edits | Public? |
|---|---|---|---|---|---|
| `6.jpg` ⭐1 | `approved-after-editing` | Systems / Catalog / Home secondary | GFRC façade elements with arches, cornices, and decorative architectural details. | Crop bottom unfinished area; crop right scaffolding; improve contrast. | After cropping |
| `2.jpg` ⭐2 | `approved-after-editing` | Systems / Projects | Architectural GFRC arches and decorative façade elements for large-scale developments. | Crop bottom vehicles & street; improve exposure. | After cropping |
| `3.jpg` ⭐3 | `approved-after-editing` | Systems / Projects / Catalog | Custom GFRC façade cladding with traditional arch and ornamental details. | Crop bottom construction clutter; remove/avoid visible container; reduce scaffolding. | After cropping |
| `1.jpg` | `approved-after-editing` | Projects / Systems | — | Crop vehicles & construction clutter; keep façade & arches. | After cropping |
| `5.jpg` | `approved-after-editing` | Projects / Mashrabiya & Arches | — | Crop bottom cars & construction; straighten perspective if possible. | After cropping |
| `9.jpg` | `approved-after-editing` | Project reference only — after cleaning | — | Crop cars, scaffolding, people, visible construction signs. | After cleaning |
| `4.jpg` | `internal-docs` (NDA review) | Projects / Cultural & Religious — only after approval | — | Crop people, cars, scaffolding, clutter. Do not mention project or client name. | **Hold — NDA review required** |
| `7.jpg` | `internal-docs` | Internal only | — | — | **No — NDA (visible official client logo)** |
| `8.jpg` | `internal-docs` | Internal only | — | — | **No — NDA (client logo + delivery context)** |

---

## Asset Log

_Add a row here each time an image is classified or promoted._

| File | Classification | Alt text | Added by | Date |
|---|---|---|---|---|
| `fac1.jpg` | `approved-after-editing` | GFRC elements staged for project preparation and delivery. | mkidrawi | 2026-06-14 |
| `fac8.jpg` | `approved-after-editing` | Factory preparation of custom GFRC architectural elements. | mkidrawi | 2026-06-14 |
| `sitepic6.jpg` | `internal-docs` | Internal delivery reference — not for public use. | mkidrawi | 2026-06-14 |
| `6.jpg` | `approved-after-editing` | GFRC façade elements with arches, cornices, and decorative architectural details. | mkidrawi | 2026-06-14 |
| `2.jpg` | `approved-after-editing` | Architectural GFRC arches and decorative façade elements for large-scale developments. | mkidrawi | 2026-06-14 |
| `3.jpg` | `approved-after-editing` | Custom GFRC façade cladding with traditional arch and ornamental details. | mkidrawi | 2026-06-14 |
| `1.jpg` | `approved-after-editing` | GFRC façade with decorative arches. | mkidrawi | 2026-06-14 |
| `5.jpg` | `approved-after-editing` | GFRC mashrabiya screens and arched façade detailing. | mkidrawi | 2026-06-14 |
| `9.jpg` | `approved-after-editing` | GFRC façade project reference (internal until cleaned). | mkidrawi | 2026-06-14 |
| `4.jpg` | `internal-docs` (NDA review) | Hold — NDA review required before any public use. | mkidrawi | 2026-06-14 |
| `7.jpg` | `internal-docs` | Internal only — NDA (visible official client emblem). | mkidrawi | 2026-06-14 |
| `8.jpg` | `internal-docs` | Internal only — NDA (visible official client emblem). | mkidrawi | 2026-06-14 |
