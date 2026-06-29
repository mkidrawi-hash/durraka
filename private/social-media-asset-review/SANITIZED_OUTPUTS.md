# Sanitized Outputs

**Audit date:** 2026-06-29

## Status: NONE PRODUCED
**No sanitized derivative images were produced in this step because image-editing
tooling is unavailable in this environment.**

Verified absent: `cwebp`, ImageMagick (`convert`/`magick`/`mogrify`), `ffmpeg`,
`sharp` (binary and node module), `jpegtran`, `exiftran`, `exiftool`. Chromium is
present but was intentionally **not** used — it cannot reliably blur faces/plates/logos
or preserve photographic quality, and the brief forbids unreliable Chromium edits.

- Originals: **untouched**.
- No new image files were created.
- The 28 Sanitizable images and their required fixes are listed in
  `SANITIZATION_PLAN.md`, ready for a future phase once tooling is available.

## Tools needed for the next (sanitization) phase
- **sharp** (Node) or **ImageMagick** — crop, resize, optimize, format conversion.
- **cwebp** — WebP optimization.
- **exiftool** — strip EXIF/GPS metadata.
- A **face/plate/logo blur** step — manual (Photoshop/GIMP) or an OpenCV/ML pipeline;
  face/plate/logo removal should be human-reviewed, not fully automated.
