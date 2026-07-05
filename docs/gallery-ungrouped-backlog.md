# Gallery — Ungrouped Image Backlog

The gallery renders **project cards** (see `GALLERY_PROJECTS` in
`src/data/galleryImages.ts`). Entries **without a `projectSlug` are hidden** from
the gallery but kept in the data registry and in the repo — nothing was deleted.
To publish one of these again, assign it a `projectSlug` (existing or new
project) and, for new projects, add a registry row + localized titles in the
`en`/`ar` gallery dictionaries.

## Hidden entries (13)

### Photo-less placeholders (6) — `image: null`, no photo ever uploaded

| id | Old display title | Category |
|---|---|---|
| `cornice-makkah-2024` | Cornice Profile System, Makkah, 2024 | Cornices |
| `grand-entrance-makkah-2024` | Hospitality Grand Entrance, Makkah, 2024 | Grand Entrances |
| `facade-cladding-jeddah-2023` | Residential Facade Cladding, Jeddah, 2023 | Facades & Cladding |
| `dome-riyadh-2023` | Heritage Dome, Riyadh, 2023 | Domes |
| `mashrabiya-medina-2024` | Facade Mashrabiya Screens, Madinah, 2024 | Mashrabiya |
| `columns-makkah-2023` | Landmark Columns, Makkah, 2023 | Columns & Capitals |

These were "image coming soon" tiles. To revive one: add a real photo, set
`image:` to its path, and assign a `projectSlug`.

Note: hiding `cornice-makkah-2024` removes the only **Cornices**-category item,
so the Cornices filter chip disappears (zero-count rule) until a real cornice
photo is published.

### Batch outlier (1) — different building than its source batch

| id | Why |
|---|---|
| `grand-arcade-facade-institutional-view-001` | Visually verified: a beige governmental-style complex with flag poles — NOT the white Grand Arcade complex the rest of its batch shows. Single image, no sibling group. |

### One-image project deferred by owner (1)

| id | Why |
|---|---|
| `heritage-gfrc-facade-hero-001` | Only 1 publishable image. Its curated folder (`heritage-gfrc-facade-package`, docs in `private/project-media/`) has more photos that could be wired to form a full project later. |

### Group hidden by owner decision (5) — `mosque-architectural-details-*`

| id |
|---|
| `mosque-architectural-details-main-entrance-001` |
| `mosque-architectural-details-dome-interior-001` |
| `mosque-architectural-details-lattice-window-001` |
| `mosque-architectural-details-screen-windows-001` |
| `mosque-architectural-details-minaret-001` |

A coherent white carved-stone mosque set (under construction), but its identity
could not be visually confirmed against the Landmark Mosque (Al Aziziyah) or the
Grand Arcade complex. Owner chose to keep it hidden until identified. To revive:
either merge into `landmark-mosque-aziziyah` / `grand-arcade-facade` (set that
`projectSlug` on the 5 entries) or register it as its own project.

## Arithmetic

54 total registry entries = **41 grouped** (9 projects) + **13 hidden** (above).
