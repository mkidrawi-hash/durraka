# Sanitization Plan

**Audit date:** 2026-06-29 · Documentation-only. **No derivative images were produced**
(no image-editing tooling available — see SANITIZED_OUTPUTS.md).

These 28 images are **Sanitizable**: not currently public-safe, but
likely fixable by creating a NEW derivative copy (originals untouched). When tooling is
available, store outputs under `public/images/sanitized-gallery/` (mirror the source path)
and re-review each derivative.

| # | Image | Unsafe elements | Required fixes |
|---|---|---|---|
| 1 | `classic-villa-boundary-wall-gfrc-package/01-hero/classic-villa-boundary-wall-gfrc-hero-01.jpg` | site/location identity | crop; obscure project identifier; strip metadata; optimize copy |
| 2 | `classic-villa-boundary-wall-gfrc-package/02-entrance-gate/classic-villa-boundary-wall-entrance-gate-01.jpg` | site/location identity | crop; obscure project identifier; strip metadata; optimize copy |
| 3 | `classic-villa-boundary-wall-gfrc-package/03-boundary-wall-details/classic-villa-boundary-wall-detail-01.jpg` | site/location identity | crop; obscure project identifier; strip metadata; optimize copy |
| 4 | `classic-villa-boundary-wall-gfrc-package/04-cornices-ornaments/classic-villa-cornice-ornament-detail-01.jpg` | site/location identity | crop; obscure project identifier; strip metadata; optimize copy |
| 5 | `commercial-gfrc-facade-cladding-package/01-hero/commercial-gfrc-facade-cladding-hero-01.png` | site/location identity | crop; strip metadata; optimize copy |
| 6 | `commercial-gfrc-facade-cladding-package/02-design-render/commercial-gfrc-facade-cladding-design-render-01.png` | site/location identity | crop; strip metadata; optimize copy |
| 7 | `commercial-gfrc-facade-cladding-package/03-facade-overview/commercial-gfrc-facade-cladding-overview-01.png` | site/location identity | crop; strip metadata; optimize copy |
| 8 | `commercial-hospitality-tower-gfrc-facade-package/01-hero/commercial-hospitality-tower-gfrc-facade-hero-01.jpeg` | site/location identity | crop; strip metadata; optimize copy |
| 9 | `commercial-hospitality-tower-gfrc-facade-package/02-building-overview/commercial-hospitality-tower-gfrc-facade-overview-01.jpeg` | site/location identity | crop; strip metadata; optimize copy |
| 10 | `commercial-hospitality-tower-gfrc-facade-package/02-building-overview/commercial-hospitality-tower-gfrc-facade-overview-02.jpeg` | site/location identity | crop; strip metadata; optimize copy |
| 11 | `commercial-hospitality-tower-gfrc-facade-package/03-design-reference/commercial-hospitality-tower-gfrc-facade-design-reference-01.png` | site/location identity | crop; strip metadata; optimize copy |
| 12 | `commercial-hospitality-tower-gfrc-facade-package/03-design-reference/commercial-hospitality-tower-gfrc-facade-design-reference-02.png` | site/location identity | crop; strip metadata; optimize copy |
| 13 | `geometric-mashrabiya-screen-package/01-hero/geometric-mashrabiya-screen-hero-01.jpg` | site/location identity | crop; strip metadata; optimize copy |
| 14 | `geometric-mashrabiya-screen-package/03-installation-progress/geometric-mashrabiya-screen-installation-progress-01.jpg` | site/location identity | crop; strip metadata; optimize copy |
| 15 | `heritage-gfrc-facade-package/02-facade-cladding/heritage-gfrc-facade-wide-02.jpg` | site/location identity | crop; strip metadata; optimize copy |
| 16 | `heritage-gfrc-facade-package/03-arches-cornices/heritage-gfrc-entrance-arch-01.jpeg` | site/location identity | crop; strip metadata; optimize copy |
| 17 | `heritage-gfrc-facade-package/03-arches-cornices/heritage-gfrc-entrance-arch-detail-02.jpeg` | site/location identity | crop; strip metadata; optimize copy |
| 18 | `heritage-gfrc-facade-package/04-mashrabiya-screens/heritage-gfrc-window-screens-01.jpeg` | site/location identity | crop; strip metadata; optimize copy |
| 19 | `heritage-gfrc-facade-package/05-site-context-needs-crop/heritage-gfrc-site-context-01.jpeg` | site/location identity | crop; strip metadata; optimize copy |
| 20 | `infrastructure-bridge-gfrc-cladding-package/01-hero/infrastructure-bridge-gfrc-cladding-hero-01.jpeg` | site/location identity; confidential drawing/detail | crop; strip metadata; optimize copy |
| 21 | `infrastructure-bridge-gfrc-cladding-package/02-bridge-overview/infrastructure-bridge-gfrc-cladding-overview-01.jpeg` | site/location identity; confidential drawing/detail | crop; strip metadata; optimize copy |
| 22 | `infrastructure-bridge-gfrc-cladding-package/03-installation-progress/infrastructure-bridge-gfrc-cladding-installation-progress-01.jpeg` | site/location identity; confidential drawing/detail | crop; strip metadata; optimize copy |
| 23 | `infrastructure-underpass-patterned-gfrc-wall-cladding-package/01-hero/infrastructure-underpass-patterned-gfrc-wall-cladding-hero-01.jpg` | site/location identity | crop; strip metadata; optimize copy |
| 24 | `infrastructure-underpass-patterned-gfrc-wall-cladding-package/02-wall-cladding-overview/infrastructure-underpass-patterned-gfrc-wall-cladding-overview-01.jpg` | site/location identity | crop; strip metadata; optimize copy |
| 25 | `infrastructure-underpass-patterned-gfrc-wall-cladding-package/03-pattern-detail/infrastructure-underpass-patterned-gfrc-wall-cladding-detail-01.jpg` | site/location identity | crop; strip metadata; optimize copy |
| 26 | `infrastructure-underpass-patterned-gfrc-wall-cladding-package/04-site-context-needs-crop/infrastructure-underpass-patterned-gfrc-wall-cladding-site-context-01.jpg` | site/location identity | crop; strip metadata; optimize copy |
| 27 | `large-development-entrance-gateway-gfrc-package/01-hero/large-development-entrance-gateway-gfrc-hero-01.png` | visible client logo; project name/signage | mask logo; obscure project identifier; manual review required |
| 28 | `mosque-domes-minaret-gfrc-package/05-site-context-needs-crop/mosque-gfrc-site-context-needs-crop-01.jpeg` | site/location identity | crop; strip metadata; optimize copy |


## Fix definitions
crop · blur face · blur license plate · mask client logo · obscure project name/signage ·
hide sensitive detail · strip metadata · optimize/compress for web.

## Rule
If an image cannot be made safe without harming quality, authenticity, or ownership rights,
it must be moved to NEEDS_MANUAL_REVIEW or REJECTED_FOR_PUBLIC_USE instead of force-edited.
