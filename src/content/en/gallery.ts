// Project Gallery copy. Chrome strings, category labels, and per-image
// title/alt live here (per-locale). The gallery DATA (src/data/galleryImages.ts)
// stays the English source of truth for category values, ids, descriptions,
// cities, and years; this dictionary only supplies the localized display copy.
//
// categoryLabels is keyed by the ENGLISH GalleryCategory value — the component
// filters on the English category value and renders the localized label.

export const galleryContent = {
  metaTitle: 'Project Gallery',
  metaDescription:
    'Explore selected GRC / GFRC architectural works, facade components, textures, and project-based visual references.',

  // ── Chrome ──
  breadcrumbHome: 'Home',
  breadcrumbGallery: 'Project Gallery',
  eyebrow: 'Visual References',
  title: 'Project Gallery',
  intro:
    'Explore selected GRC / GFRC architectural works, facade components, textures, and project-based visual references.',

  filterAll: 'All',
  // Count line under the filter bar. `{count}` is composed in the component.
  countNone: 'No references in this category',
  countSingular: 'reference',
  countPlural: 'references',
  // Project-grouped count line pieces ("N projects · M photos").
  projectCountSingular: 'project',
  projectCountPlural: 'projects',
  photoCountSingular: 'photo',
  photoCountPlural: 'photos',

  emptyStateTitle: 'No references in this category yet',
  emptyStateSubtext: '{category} images will appear here when published.',

  imageComingSoon: 'Image coming soon',

  cardView: 'View',
  cardViewProject: 'View Project',
  cardOpenPreview: 'Open preview: {title}',
  cardOpenProject: 'Open project photos: {title}',

  // Badge shown instead of city · year on sample-collection projects.
  samplesBadge: 'Samples',

  // ── Project display titles (keyed by GALLERY_PROJECTS slug) ──
  // `chips` (optional) overrides the derived category tags on the project card
  // with exact display wording — display only; filters still act on the real
  // image categories.
  projects: {
    'beachfront-hotel-resort-jeddah': {
      title: 'Beachfront Hotel & Resort – Jeddah',
      chips: ['Mashrabiya Screens', 'Facade Cladding', 'Cornices & Profiles', 'Decorative Elements'] as string[],
    },
    'kaec-2025-hospitality': { title: 'Hospitality Development Facades' },
    'makkah-2023-heritage-mosque': { title: 'Heritage Mosque Elements' },
    'landmark-mosque-aziziyah': { title: 'Landmark Mosque – Al Aziziyah' },
    'mosque-domes-minaret': { title: 'Mosque Domes & Minaret' },
    'grand-arcade-facade': { title: 'Grand Arcade Facade Complex' },
    'infrastructure-cladding': { title: 'Infrastructure Cladding — Bridge & Tunnel' },
    'urban-high-rise-tower': { title: 'High-Rise Tower Facade' },
    'mashrabiya-entry-screens': { title: 'Mashrabiya Entry Screens' },
    'architectural-samples': { title: 'Architectural Samples & Mockups' },
  },

  // City display labels for project meta lines (keyed by the data value).
  cityLabels: {
    Jeddah: 'Jeddah',
    KAEC: 'KAEC',
    Makkah: 'Makkah',
    'Saudi Arabia': 'Saudi Arabia',
  },

  // ── Lightbox ──
  lightboxEyebrow: 'Project Gallery',
  lightboxPreview: 'Gallery preview: {title}',
  lightboxClose: 'Close preview',
  lightboxPrevious: 'Previous',
  lightboxNext: 'Next',
  lightboxZoomIn: 'Zoom in',
  lightboxZoomOut: 'Zoom out',
  lightboxResetZoom: 'Reset zoom',

  // Location line: a known city renders "City, {saudiArabia}"; a generic/empty
  // city renders just "{saudiArabia}".
  locationSaudiArabia: 'Saudi Arabia',

  lightboxDisclosure:
    'For design reference only. Client names, exact project identities, quantities, contract values, fixing details, and confidential specifications are not disclosed.',
  galleryDisclosure:
    'All references are for design coordination purposes only. Client names, exact project identities, contract values, quantities, fixing details, anchors, brackets, installation sequences, and confidential specifications are not disclosed. Only public-safe selections are shown.',

  // ── CTA ──
  ctaHeading: 'Have a project to discuss?',
  ctaBody:
    'Share your drawings and receive a project-specific GRC/GFRC quotation from our engineering team.',
  ctaButton: 'Request a Quotation',

  // ── Category display labels (keyed by ENGLISH GalleryCategory value) ──
  categoryLabels: {
    'Grand Entrances': 'Grand Entrances',
    'Facades & Cladding': 'Facades & Cladding',
    Domes: 'Domes',
    Mashrabiya: 'Mashrabiya',
    'Columns & Capitals': 'Columns & Capitals',
    Cornices: 'Cornices',
    'Decorative Elements': 'Decorative Elements',
    Hospitality: 'Hospitality',
    Infrastructure: 'Infrastructure',
    'High-Rise / Towers': 'High-Rise / Towers',
    'Architectural Details': 'Architectural Details',
    'Samples & Mockups': 'Samples & Mockups',
    'Civic Identity Elements': 'Civic Identity Elements',
  },

  // ── Per-image display copy (keyed by GALLERY_IMAGES id) ──
  images: {
    'beachfront-hotel-resort-mashrabiya-facade-01': {
      title: 'Mashrabiya Facade',
      alt: 'GFRC mashrabiya screen facade on a beachfront resort building, Jeddah',
    },
    'beachfront-hotel-resort-arched-pool-courtyard-02': {
      title: 'Arched Pool Courtyard',
      alt: 'Arched GFRC courtyard facades around a resort pool terrace, Jeddah',
    },
    'beachfront-hotel-resort-mashrabiya-balconies-03': {
      title: 'Mashrabiya Balconies',
      alt: 'GFRC mashrabiya balcony screens on a resort facade, Jeddah',
    },
    'beachfront-hotel-resort-seafront-elevation-04': {
      title: 'Seafront Elevation',
      alt: 'Seafront GFRC facade elevation of a beachfront resort, Jeddah',
    },
    'beachfront-hotel-resort-entrance-axis-07': {
      title: 'Entrance Axis',
      alt: 'GFRC entrance colonnade along the arrival axis of a beachfront resort, Jeddah',
    },
    'beachfront-hotel-resort-resort-aerial-08': {
      title: 'Resort Aerial View',
      alt: 'Aerial view of a beachfront resort with GFRC facade elements, Jeddah',
    },
    'beachfront-hotel-resort-villas-golf-aerial-09': {
      title: 'Villas & Golf Aerial',
      alt: 'Aerial view of resort villas and golf landscape, Jeddah',
    },
    'beachfront-hotel-resort-masterplan-aerial-10': {
      title: 'Masterplan Aerial',
      alt: 'Masterplan aerial of a beachfront hospitality development, Jeddah',
    },
    'beachfront-hotel-resort-colonnade-mashrabiya-11': {
      title: 'Colonnade & Mashrabiya Screens',
      alt: 'GFRC colonnade with mashrabiya screens at a beachfront resort, Jeddah',
    },
    'kaec-2025-grand-entrance-001': {
      title: 'Grand Entrance, KAEC',
      alt: 'GFRC grand entrance facade elements for a hospitality project, KAEC',
    },
    'kaec-2025-arrival-plaza-001': {
      title: 'Arrival Plaza Facade, KAEC',
      alt: 'Architectural facade components at the arrival plaza of a hospitality project, KAEC',
    },
    'kaec-2025-facade-mashrabiya-001': {
      title: 'Facade Mashrabiya Screens, KAEC',
      alt: 'GFRC mashrabiya facade screens on a hospitality building, KAEC',
    },
    'kaec-2025-facade-screens-002': {
      title: 'Hospitality Facade Screens, KAEC',
      alt: 'GFRC architectural facade screen components on a hospitality building, KAEC',
    },
    'kaec-2025-mashrabiya-facade-003': {
      title: 'Mashrabiya Facade Detail, KAEC',
      alt: 'GFRC mashrabiya facade detail on a hospitality project, KAEC',
    },
    'kaec-2025-facade-arches-screens-004': {
      title: 'Facade Arches & Screens, KAEC',
      alt: 'GFRC facade arches and screen elements on a hospitality project, KAEC',
    },
    'kaec-2025-courtyard-facade-001': {
      title: 'Courtyard Facade, KAEC',
      alt: 'GFRC facade cladding components at a hospitality courtyard elevation, KAEC',
    },
    'makkah-2023-domes-001': {
      title: 'Dome Elements, Makkah',
      alt: 'GRC dome elements on a mosque facade, Makkah',
    },
    'makkah-2023-mashrabiya-001': {
      title: 'Mashrabiya Screens, Makkah',
      alt: 'GFRC mashrabiya screens with geometric lattice pattern, Makkah',
    },
    'makkah-2023-columns-001': {
      title: 'Arched Columns & Capitals, Makkah',
      alt: 'GRC arched columns and decorative capitals on a mosque, Makkah',
    },
    'makkah-2023-columns-002': {
      title: 'Column Arcade Detail, Makkah',
      alt: 'GRC column arcade with arched bays on a mosque facade, Makkah',
    },
    'makkah-2023-decorative-001': {
      title: 'Decorative Facade Elements, Makkah',
      alt: 'GRC decorative facade elements on a mosque, Makkah',
    },
    'makkah-2023-decorative-002': {
      title: 'Ornamental Detail, Makkah',
      alt: 'GRC ornamental facade detailing on a mosque, Makkah',
    },
    'cornice-makkah-2024': {
      title: 'Cornice Profile System, Makkah, 2024',
      alt: 'GRC classical cornice with dentil molding and string course',
    },
    'grand-entrance-makkah-2024': {
      title: 'Hospitality Grand Entrance, Makkah, 2024',
      alt: 'GRC hospitality grand entrance with arch and pilasters',
    },
    'facade-cladding-jeddah-2023': {
      title: 'Residential Facade Cladding, Jeddah, 2023',
      alt: 'GFRC residential facade cladding with reveal lines',
    },
    'dome-riyadh-2023': {
      title: 'Heritage Dome, Riyadh, 2023',
      alt: 'GRC heritage dome with ribbed profile',
    },
    'mashrabiya-medina-2024': {
      title: 'Facade Mashrabiya Screens, Madinah, 2024',
      alt: 'GFRC full-height arched mashrabiya screens',
    },
    'columns-makkah-2023': {
      title: 'Landmark Columns, Makkah, 2023',
      alt: 'GRC monumental landmark columns with classical capitals',
    },
    'grand-arcade-facade-overall-view-001': {
      title: 'Grand Arcade Facade, Overall View',
      alt: 'Overall view of a grand arcade facade with GFRC cladding and arched bays',
    },
    'grand-arcade-facade-overall-view-002': {
      title: 'Grand Arcade Facade, Second View',
      alt: 'Second view of a grand arcade facade with GFRC architectural components',
    },
    'grand-arcade-facade-wide-view-001': {
      title: 'Grand Arcade Facade, Wide View',
      alt: 'Wide view of a grand arcade GFRC facade with repeated arch rhythm',
    },
    'grand-arcade-facade-street-view-001': {
      title: 'Grand Arcade Facade, Street View',
      alt: 'Street-level view of a grand arcade facade with GFRC cladding',
    },
    'grand-arcade-facade-side-perspective-001': {
      title: 'Grand Arcade Facade, Side Perspective',
      alt: 'Side perspective of a grand arcade facade showing GFRC cornice and cladding depth',
    },
    'grand-arcade-facade-main-block-001': {
      title: 'Grand Arcade Facade, Main Block',
      alt: 'Main block elevation of an arcade facade with integrated GFRC cladding panels',
    },
    'grand-arcade-facade-institutional-view-001': {
      title: 'Grand Arcade Facade, Institutional',
      alt: 'Institutional elevation of an arcade facade complex with GFRC cladding',
    },
    'grand-arcade-facade-colonnade-view-001': {
      title: 'Arcade Colonnade Facade',
      alt: 'Arcade colonnade facade with GFRC columns and arched bays',
    },
    'grand-arcade-facade-arch-detail-001': {
      title: 'Arcade Facade Arch Detail',
      alt: 'Close-up detail of a GFRC arcade facade arch with decorative moulding profiles',
    },
    'bridge-infrastructure-cladding-overall-view-001': {
      title: 'Infrastructure Cladding, Overall View',
      alt: 'Overall view of GFRC infrastructure cladding on a bridge structure',
    },
    'bridge-infrastructure-cladding-long-view-001': {
      title: 'Infrastructure Cladding, Long View',
      alt: 'Longitudinal view of GFRC infrastructure cladding panels on a bridge',
    },
    'bridge-infrastructure-cladding-support-detail-001': {
      title: 'Infrastructure Cladding, Structural Detail',
      alt: 'Detail view of GFRC infrastructure cladding at a structural support point',
    },
    'tunnel-pattern-cladding-001': {
      title: 'Tunnel Pattern Cladding',
      alt: 'GFRC patterned cladding panels on a tunnel or underpass structure',
    },
    'mashrabiya-entry-screen-doorway-001': {
      title: 'Mashrabiya Entry Screen, Doorway',
      alt: 'GFRC mashrabiya entry screen framing a doorway opening',
    },
    'mashrabiya-entry-screen-doorway-002': {
      title: 'Mashrabiya Entry Screen, Second View',
      alt: 'Second view of a GFRC mashrabiya entry screen panel with full geometry',
    },
    'mosque-architectural-details-main-entrance-001': {
      title: 'Religious Facility Main Entrance',
      alt: 'Main entrance facade of a religious facility with GFRC arched elements and decorative detailing',
    },
    'mosque-architectural-details-dome-interior-001': {
      title: 'Dome Interior Architectural Detail',
      alt: 'Interior dome architectural detail with GFRC decorative geometric finish',
    },
    'mosque-architectural-details-lattice-window-001': {
      title: 'Lattice Window Screen Detail',
      alt: 'GFRC lattice window screen with traditional geometric pattern on a religious facility',
    },
    'mosque-architectural-details-screen-windows-001': {
      title: 'Screen Windows, Geometric Pattern',
      alt: 'Row of GFRC screen window panels with geometric lattice pattern',
    },
    'mosque-architectural-details-minaret-001': {
      title: 'Minaret Architectural Detail',
      alt: 'GFRC architectural detail of a minaret with decorative surface banding',
    },
    'urban-high-rise-tower-full-height-view-001': {
      title: 'High-Rise Tower, Full Height View',
      alt: 'Full-height view of an urban high-rise tower with GFRC facade cladding',
    },
    'urban-high-rise-tower-corner-view-001': {
      title: 'High-Rise Tower, Corner View',
      alt: 'Corner view of a high-rise tower with GFRC cladding and reveal lines',
    },
    'urban-high-rise-tower-corner-view-002': {
      title: 'High-Rise Tower, Corner View 2',
      alt: 'Second corner view of a high-rise tower with GFRC facade cladding system',
    },
    'urban-high-rise-tower-street-view-001': {
      title: 'High-Rise Tower, Street View',
      alt: 'Street-level view of a high-rise tower showing GFRC cladding and podium facade',
    },
    'architectural-sample-arched-screen-panel-001': {
      title: 'Arched Screen Panel Sample',
      alt: 'GFRC sample arched screen panel showing screen geometry and surface finish',
    },
    'architectural-sample-balustrade-001': {
      title: 'Balustrade Sample',
      alt: 'GFRC balustrade sample showing profile and baluster detail',
    },
    'architectural-sample-frame-panel-001': {
      title: 'Frame Panel Sample',
      alt: 'GFRC frame panel sample showing moulded frame detail and surface finish',
    },
    'landmark-mosque-aziziyah-makkah-hero-001': {
      title: 'Landmark Mosque – Al Aziziyah, Makkah — Exterior Elevation',
      alt: 'Landmark Mosque in Al Aziziyah, Makkah, with ornate GFRC domes and minarets',
    },
    'landmark-mosque-aziziyah-makkah-minaret-detail-001': {
      title: 'Landmark Mosque – Al Aziziyah, Makkah — Minaret Detail',
      alt: 'Ornate GFRC minaret detail at Landmark Mosque, Al Aziziyah, Makkah',
    },
    'landmark-mosque-aziziyah-makkah-dome-detail-001': {
      title: 'Landmark Mosque – Al Aziziyah, Makkah — Dome & Ornament Detail',
      alt: 'Decorative GFRC dome detail at Landmark Mosque, Al Aziziyah, Makkah',
    },
    'mosque-domes-minaret-gfrc-hero-001': {
      title: 'Mosque Domes & Minaret, GFRC/GRC',
      alt: 'GFRC/GRC mosque with decorative domes and a detailed minaret',
    },
    'mosque-domes-minaret-gfrc-dome-detail-001': {
      title: 'Decorative Mosque Dome, GFRC/GRC',
      alt: 'Decorative GFRC mosque dome with ornamental relief detailing',
    },
    'mosque-domes-minaret-gfrc-minaret-facade-001': {
      title: 'Mosque Minaret Façade, GFRC/GRC',
      alt: 'GFRC/GRC mosque minaret façade with decorative detailing',
    },
    'mosque-domes-minaret-gfrc-facade-overview-001': {
      title: 'Mosque Façade, GFRC/GRC',
      alt: 'GFRC/GRC mosque façade with cladding and decorative cornices',
    },
    'heritage-gfrc-facade-hero-001': {
      title: 'Heritage GFRC/GRC Façade',
      alt: 'Heritage-style GFRC/GRC façade with arches, cornices, and decorative screen panels',
    },
  },
} as const
