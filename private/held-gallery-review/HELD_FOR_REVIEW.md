# HELD_FOR_REVIEW — FINAL Manifest (Current Gallery Audit)

**Status: FINAL audit decision · report-only.** These 7 project images are
**not public-safe yet**. They must not be used in any public section until they
have been reviewed, cropped, cleaned, or explicitly approved.

This file is a **record only**. As of this manifest, no removal has been applied
to `main` — the images remain in the repo (nothing deleted). The actual removal
is deferred to the next **Gallery Asset Cleanup** phase (see "Planned actions").

## Do / Don't
- ❌ Do **not** mark these public-safe.
- ❌ Do **not** use in product pages, catalog, systems pages, hero galleries, or
  any future public gallery expansion.
- ❌ Do **not** delete the original archive (conceptually preserved).
- ✅ Keep classified as held / not public-safe yet.

Status legend: `Needs privacy review` · `Needs branding cleanup` ·
`Not public-safe yet`

---

## Resort / Hospitality Package — privacy review
Reason: aerial / site / beachfront views reveal resort identity and sensitive
site context rather than GFRC product detail.

| Image | Status | Current location (on `main`) |
|---|---|---|
| KAEC aerial-masterplan-001 | Needs privacy review · Not public-safe yet | `public/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-aerial-masterplan-001.jpg` |
| KAEC aerial-waterfront-001 | Needs privacy review · Not public-safe yet | `public/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-aerial-waterfront-001.jpg` |
| KAEC beachfront-overview-001 | Needs privacy review · Not public-safe yet | `public/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-beachfront-overview-001.jpg` |
| KAEC landscape-courtyard-001 | Needs privacy review · Not public-safe yet | `public/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-landscape-courtyard-001.jpg` |

## Facade Package — branding cleanup
Reason: civic signage / logo panels and calligraphic identity column may carry
client or project branding.

| Image | Status | Current location (on `main`) |
|---|---|---|
| civic-identity-logo-panel-001 | Needs branding cleanup · Not public-safe yet | `public/images/projects/grand-arcade-facade-complex/civic-identity-logo-panel-001.jpg` |
| civic-identity-logo-panel-002 | Needs branding cleanup · Not public-safe yet | `public/images/projects/grand-arcade-facade-complex/civic-identity-logo-panel-002.jpg` |
| civic-identity-calligraphy-column-001 | Needs branding cleanup · Not public-safe yet | `public/images/projects/grand-arcade-facade-complex/civic-identity-calligraphy-column-001.jpg` |

---

## Planned actions (next Gallery Asset Cleanup phase — NOT done yet)
1. Remove these 7 images from public gallery rendering (`src/data/galleryImages.ts`).
2. Remove them from public-served paths (move out of `/public`) so they cannot be
   opened directly by URL after deploy.
3. Preserve them under `private/held-gallery-review/<package>/` (never deleted).

A branch implementing exactly these steps is already prepared and parked
(unmerged): `chore/gallery-public-safe-cleanup`. It will not affect production
unless explicitly merged.

## Reinstating an image (after cleanup)
1. Resolve the issue (crop / privacy review / branding cleanup).
2. Move the cleaned file back under `public/images/projects/...`.
3. Re-add a `status: 'Public Safe'` entry in `src/data/galleryImages.ts`.
4. Run `npm run lint && npm run build` and confirm the path resolves.
