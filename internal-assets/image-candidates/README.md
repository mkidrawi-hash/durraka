# Internal Image Candidates

This folder holds **internal-only** and **pending-edit** image candidates for the Durraka
website. It lives **outside `public/`** on purpose: anything under `public/` is served by
Next.js at a public URL, so internal-only assets must never go there.

**Nothing in this folder is published on durraka.com.** These are working files for the
team: review, editing, and internal reference only.

## Current candidates

| Drop file as | Classification | Use | Status |
|---|---|---|---|
| `fac1.jpg` | approved-after-editing | Factory / Process section only | Needs editing — crop shadows & clutter, improve exposure. Never use as hero. |
| `fac8.jpg` | approved-after-editing | About page or Factory / Process section | Needs editing — crop around moulds, improve clarity, blur background people. |
| `sitepic6.jpg` | internal-docs | Internal project-delivery reference only | Internal only — do not publish. Site looks unfinished; heavy crop & clean required before any public use. |

Captions and full classification details are tracked in the root
[`IMAGE_REGISTER.md`](../../IMAGE_REGISTER.md) under **Internal / Pending Image Candidates**.

## Promotion path

1. Complete the required edits listed above (and in `IMAGE_REGISTER.md`).
2. Run the **Pre-Publish Checklist** in `IMAGE_REGISTER.md` (no faces, no client branding,
   no scaffolding, min 1200 px, exported WebP, alt text written, etc.).
3. Only `approved-after-editing` candidates may then move to `public/images/factory/`
   using the `factory-{subject}-{seq}.webp` naming convention.
4. `internal-docs` candidates (e.g. `sitepic6.jpg`) stay here unless re-classified.
5. Never place any of these in `public/images/projects/` or `public/images/hero/`.
