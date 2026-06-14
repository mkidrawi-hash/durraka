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

Images received but **NOT** cleared for public Projects or Hero use. They are factory/process
or internal-reference candidates only, pending the required edits below.

> **Storage policy:** anything placed under `public/` is served publicly by Next.js at a real
> URL. Internal-only binaries therefore live in `internal-assets/image-candidates/` (outside
> `public/`) so they are never served. Promote a candidate to `public/images/factory/` only
> after its required edits are done **and** the Pre-Publish Checklist passes.

| Source file | Classification | Intended use | Caption | Required edits | Public? |
|---|---|---|---|---|---|
| `fac1.jpg` | `approved-after-editing` | Factory / Process section only | GFRC elements staged for project preparation and delivery. | Crop shadows & clutter; improve exposure. **Never use as hero.** | After editing |
| `fac8.jpg` | `approved-after-editing` | About page or Factory / Process section | Factory preparation of custom GFRC architectural elements. | Crop around moulds; improve clarity; blur background people. | After editing |
| `sitepic6.jpg` | `internal-docs` | Internal project-delivery reference only | — | Heavy crop & clean-up required before any public use. | **No — internal only** (site looks unfinished; not premium marketing) |

---

## Asset Log

_Add a row here each time an image is classified or promoted._

| File | Classification | Alt text | Added by | Date |
|---|---|---|---|---|
| `fac1.jpg` | `approved-after-editing` | GFRC elements staged for project preparation and delivery. | mkidrawi | 2026-06-14 |
| `fac8.jpg` | `approved-after-editing` | Factory preparation of custom GFRC architectural elements. | mkidrawi | 2026-06-14 |
| `sitepic6.jpg` | `internal-docs` | Internal delivery reference — not for public use. | mkidrawi | 2026-06-14 |
