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

## Asset Log

_Add a row here each time an image is classified or promoted._

| File | Classification | Alt text | Added by | Date |
|---|---|---|---|---|
| `kaec-2025-hospitality/kaec-2025-hospitality-grand-entrance-001.jpg` | `approved-website` | GFRC grand entrance facade elements for a hospitality project, KAEC 2025 | Claude | 2026-06-22 |
| `kaec-2025-hospitality/kaec-2025-hospitality-arrival-plaza-001.jpg` | `approved-website` | Architectural facade components at the arrival plaza of a hospitality project, KAEC 2025 | Claude | 2026-06-22 |
| `kaec-2025-hospitality/kaec-2025-hospitality-facade-mashrabiya-001.jpg` | `approved-website` | GFRC mashrabiya facade screens on a hospitality building, KAEC 2025 | Claude | 2026-06-22 |
| `kaec-2025-hospitality/kaec-2025-hospitality-facade-screens-002.jpg` | `approved-website` | GFRC architectural facade screen components on a hospitality building, KAEC 2025 | Claude | 2026-06-22 |
| `kaec-2025-hospitality/kaec-2025-hospitality-mashrabiya-facade-003.jpg` | `approved-website` | GFRC mashrabiya facade detail on a hospitality project, KAEC 2025 | Claude | 2026-06-22 |
| `kaec-2025-hospitality/kaec-2025-hospitality-facade-arches-screens-004.jpg` | `approved-website` | GFRC facade arches and screen elements on a hospitality project, KAEC 2025 | Claude | 2026-06-22 |
| `kaec-2025-hospitality/kaec-2025-hospitality-courtyard-facade-001.jpg` | `approved-website` | GFRC facade cladding components at a hospitality courtyard elevation, KAEC 2025 | Claude | 2026-06-22 |
| `kaec-2025-hospitality/kaec-2025-hospitality-beachfront-overview-001.jpg` | `approved-website` | Beachfront overview of a resort hospitality development with GFRC facade components, KAEC 2025 | Claude | 2026-06-22 |
| `kaec-2025-hospitality/kaec-2025-hospitality-landscape-courtyard-001.jpg` | `approved-website` | Landscaped courtyard with architectural facade elements at a hospitality project, KAEC 2025 | Claude | 2026-06-22 |
| `kaec-2025-hospitality/kaec-2025-hospitality-aerial-masterplan-001.jpg` | `approved-website` | Aerial masterplan view of a hospitality resort development with GFRC facade scope, KAEC 2025 | Claude | 2026-06-22 |
| `kaec-2025-hospitality/kaec-2025-hospitality-aerial-waterfront-001.jpg` | `approved-website` | Aerial waterfront view of a resort hospitality development with GFRC facade components, KAEC 2025 | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/grand-arcade-facade-overall-view-001.jpg` | `approved-website` | Overall view of a grand arcade facade with GFRC cladding and arched bays | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/grand-arcade-facade-overall-view-002.jpg` | `approved-website` | Second view of a grand arcade facade with GFRC architectural components | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/grand-arcade-facade-wide-view-001.jpg` | `approved-website` | Wide view of a grand arcade GFRC facade with repeated arch rhythm | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/grand-arcade-facade-street-view-001.jpg` | `approved-website` | Street-level view of a grand arcade facade with GFRC cladding | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/grand-arcade-facade-side-perspective-001.jpg` | `approved-website` | Side perspective of a grand arcade facade showing GFRC cornice and cladding depth | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/grand-arcade-facade-main-block-001.jpg` | `approved-website` | Main block elevation of an arcade facade with integrated GFRC cladding panels | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/grand-arcade-facade-institutional-view-001.jpg` | `approved-website` | Institutional elevation of an arcade facade complex with GFRC cladding | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/grand-arcade-facade-colonnade-view-001.jpg` | `approved-website` | Arcade colonnade facade with GFRC columns and arched bays | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/grand-arcade-facade-arch-detail-001.jpg` | `approved-website` | Close-up detail of a GFRC arcade facade arch with decorative moulding profiles | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/bridge-infrastructure-cladding-overall-view-001.jpg` | `approved-website` | Overall view of GFRC infrastructure cladding on a bridge structure | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/bridge-infrastructure-cladding-long-view-001.jpg` | `approved-website` | Longitudinal view of GFRC infrastructure cladding panels on a bridge | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/bridge-infrastructure-cladding-support-detail-001.jpg` | `approved-website` | Detail view of GFRC infrastructure cladding at a structural support point | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/tunnel-pattern-cladding-001.jpg` | `approved-website` | GFRC patterned cladding panels on a tunnel or underpass structure | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/civic-identity-calligraphy-column-001.jpg` | `approved-website` | GFRC decorative column with calligraphic surface treatment for a civic project | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/civic-identity-logo-panel-001.jpg` | `approved-website` | Custom GFRC architectural identity panel for a civic landmark project | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/civic-identity-logo-panel-002.jpg` | `approved-website` | GFRC architectural signage feature for a civic or institutional project | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/mashrabiya-entry-screen-doorway-001.jpg` | `approved-website` | GFRC mashrabiya entry screen framing a doorway opening | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/mashrabiya-entry-screen-doorway-002.jpg` | `approved-website` | Second view of a GFRC mashrabiya entry screen panel with full geometry | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/mosque-architectural-details-main-entrance-001.jpg` | `approved-website` | Main entrance facade of a religious facility with GFRC arched elements and decorative detailing | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/mosque-architectural-details-dome-interior-001.jpg` | `approved-website` | Interior dome architectural detail with GFRC decorative geometric finish | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/mosque-architectural-details-lattice-window-001.jpg` | `approved-website` | GFRC lattice window screen with traditional geometric pattern on a religious facility | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/mosque-architectural-details-screen-windows-001.jpg` | `approved-website` | Row of GFRC screen window panels with geometric lattice pattern | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/mosque-architectural-details-minaret-001.jpg` | `approved-website` | GFRC architectural detail of a minaret with decorative surface banding | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/urban-high-rise-tower-full-height-view-001.jpg` | `approved-website` | Full-height view of an urban high-rise tower with GFRC facade cladding | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/urban-high-rise-tower-corner-view-001.jpg` | `approved-website` | Corner view of a high-rise tower with GFRC cladding and reveal lines | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/urban-high-rise-tower-corner-view-002.jpg` | `approved-website` | Second corner view of a high-rise tower with GFRC facade cladding system | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/urban-high-rise-tower-street-view-001.jpg` | `approved-website` | Street-level view of a high-rise tower showing GFRC cladding and podium facade | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/architectural-sample-arched-screen-panel-001.jpg` | `approved-website` | GFRC sample arched screen panel showing screen geometry and surface finish | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/architectural-sample-balustrade-001.jpg` | `approved-website` | GFRC balustrade sample showing profile and baluster detail | Claude | 2026-06-22 |
| `grand-arcade-facade-complex/architectural-sample-frame-panel-001.jpg` | `approved-website` | GFRC frame panel sample showing moulded frame detail and surface finish | Claude | 2026-06-22 |
