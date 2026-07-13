# Durraka Factory Website — Claude Code Notes

## Deployment (Vercel — connected 2026-07-13)

This repo (**mkidrawi-hash/durraka**) is connected to the Vercel project
**durraka** (team *Durraka Factory for Industry*). Every push to `main`
auto-deploys to production at **durraka.vercel.app**; feature branches get
preview deployments automatically.

Note: the older Vercel project **v0-durraka-factory-website** is still tied to
the legacy `v0-durraka-factory-website` repo and is NOT this site's production —
don't deploy there. If a custom domain is added later, attach it to the
**durraka** project.

---

## What was completed (session 2026-06-24)

- Fixed package index page (`/packages`) — card images now display correctly (added explicit height to `next/image fill` container)
- Wired real WebP photos into all 6 package detail pages:
  - Commercial Façade Package ✓
  - Mashrabiya Screen Package ✓
  - Domes & Cornices Package ✓
  - Grand Entrance Package ✓
  - Columns & Capitals Package ✓
  - Custom Decorative Elements Package ✓
- 35 component cards updated with real photos + hover zoom
- 7 Architecture Reference Board infographics updated from SVG to WebP
- All changes merged into `main` and pushed to GitHub

## Available WebP images (in /public/images/packages/)

| File | Best used for |
|---|---|
| `hospitality-commercial.webp` | Facade cladding, commercial |
| `heritage-regional.webp` | Mashrabiya, screens, heritage |
| `villa-palace-architectural.webp` | Domes, cornices, heritage profiles |
| `grand-entrance-gate.webp` | Entrances, arches, columns |
| `landmark-government-facade.webp` | Columns, capitals, civic |
| `custom-architectural-components.webp` | Decorative panels, custom elements |

## Up next (future sessions)

- Official Durraka logo — replace placeholder "D" square in header/footer with SVG cornice logo
- Color finish selector on component cards (user requested — deferred)
- Public-safe project images (3 photos need NDA crop + WebP export before wiring in)
