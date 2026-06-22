# Internal Image Candidates

This folder holds **internal-only** and **pending-edit** image candidates for the Durraka
website. It lives **outside `public/`** on purpose: anything under `public/` is served by
Next.js at a public URL, so internal-only assets must never go there.

**Nothing in this folder is published on durraka.com.** These are working files for the
team: review, editing, and internal reference only.

## Candidates that MUST stay internal (never under `public/`)

| Drop file as | Classification | Reason |
|---|---|---|
| `sitepic6.jpg` | internal-docs | Site looks unfinished; not premium. Heavy crop & clean required before any public use. |
| `7.jpg` | internal-docs | **NDA** — visible official government-authority emblem. Do not publish. |
| `8.jpg` | internal-docs | **NDA** — visible official government-authority emblem + delivery context. Do not publish. |
| `4.jpg` | internal-docs (NDA review) | On hold pending NDA approval. Do not publish until cleared, and only then after editing. |

## Pending-edit candidates (may go public *after* editing → `public/images/...`)

These are stored here as working originals; the edited, cleaned exports go to the target
public folder per `IMAGE_REGISTER.md`.

| Drop file as | Target after edit | Notes |
|---|---|---|
| `fac1.jpg`, `fac8.jpg` | `public/images/factory/` | Factory / process. Never use as hero. |
| `6.jpg` ⭐, `2.jpg` ⭐, `3.jpg` ⭐ | `public/images/systems/` or `projects/` | **Priority** — prepare these first. |
| `1.jpg`, `5.jpg`, `9.jpg` | `public/images/projects/` | Crop vehicles / scaffolding / people / signs first. |

Captions and full per-file required edits are tracked in the root
[`IMAGE_REGISTER.md`](../../IMAGE_REGISTER.md) under **Internal / Pending Image Candidates**.

> **NDA reminder:** never show client names, official logos, holy-site names, or identifiable
> project names anywhere on the public site. Keep all captions abstract.

## Promotion path

1. Complete the required edits listed above (and in `IMAGE_REGISTER.md`).
2. Run the **Pre-Publish Checklist** in `IMAGE_REGISTER.md` (no faces, no client branding,
   no scaffolding, min 1200 px, exported WebP, alt text written, etc.).
3. Only `approved-after-editing` candidates may then move to `public/images/factory/`
   using the `factory-{subject}-{seq}.webp` naming convention.
4. `internal-docs` candidates (e.g. `sitepic6.jpg`) stay here unless re-classified.
5. Never place any of these in `public/images/projects/` or `public/images/hero/`.
