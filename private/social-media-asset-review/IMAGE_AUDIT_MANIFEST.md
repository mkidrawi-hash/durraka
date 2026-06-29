# Image Audit Manifest — Durraka Website / Gallery Assets

**Audit date:** 2026-06-29
**Mode:** Documentation-only (no images modified, moved, or created).
**Scope:** Every image asset in the repo (public, gallery, project, catalog,
design, and private/held folders).

> Per-image rows are in `IMAGE_AUDIT_MANIFEST.csv` (one row per image, 12 columns).
> This file is the human-readable summary.

## Totals
- **Total images reviewed:** 183
- **Public Safe:** 70
- **Sanitizable (fixable later):** 28
- **Needs Manual Review:** 28
- **Internal Only (archive originals):** 50
- **HELD_FOR_REVIEW (excluded):** 7
- **Reject for Public Use:** 0

## By category
- Unknown / Needs Review: 24
- Internal Only: 60
- Product/System Page: 12
- Website Hero: 2
- Catalog: 6
- Project Gallery: 79

## Method & safety basis (no fabrication)
Each image was classified using grounded signals only:
1. Whether it is already rendered as `status: 'Public Safe'` in `src/data/galleryImages.ts`.
2. The image's own package `image-manifest.json` `public_status` (e.g. "Public candidate", "Needs crop/review", "Archive only", "client branding visible").
3. Folder semantics (`99-archive-originals`, `…-needs-crop`, `design-*`, held folders).
Anything with no positive public-safe signal is treated as **unapproved until reviewed**
(Needs Manual Review), per the rule "treat all images as unapproved until reviewed".

## Safety status legend
Public Safe · Sanitizable · Needs Manual Review · Internal Only · HELD_FOR_REVIEW · Reject for Public Use

## Rixos
No Rixos images are present in this repo (no filename or text match for
rixos / rixsos / ريكسوس). See `GALLERY_GROUPING_PLAN.md` → "Rixos — Pending Upload".
