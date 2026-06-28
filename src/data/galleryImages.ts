export type GalleryCategory =
  | 'Grand Entrances'
  | 'Facades & Cladding'
  | 'Domes'
  | 'Mashrabiya'
  | 'Columns & Capitals'
  | 'Cornices'
  | 'Decorative Elements'
  | 'Hospitality'
  | 'Infrastructure'
  | 'High-Rise / Towers'
  | 'Architectural Details'
  | 'Samples & Mockups'
  | 'Civic Identity Elements'

export const GALLERY_FILTERS = [
  'All',
  'Hospitality',
  'Grand Entrances',
  'Facades & Cladding',
  'High-Rise / Towers',
  'Domes',
  'Mashrabiya',
  'Columns & Capitals',
  'Cornices',
  'Decorative Elements',
  'Infrastructure',
  'Architectural Details',
  'Samples & Mockups',
  'Civic Identity Elements',
] as const

export type GalleryFilter = (typeof GALLERY_FILTERS)[number]

export type GalleryImageStatus =
  | 'Public Safe'
  | 'Needs Editing'
  | 'Internal Only'
  | 'NDA Protected'

// ─── Public-safe image registry ───────────────────────────────────────────────
// Rules: no client names, no exact project names, no exact areas or quantities,
// no contract values, no fixing or installation details, no anchors, brackets,
// screws, or confidential drawings. Only status: "Public Safe" entries render.

export interface GalleryImage {
  id: string
  title: string
  city: string
  year: string
  category: GalleryCategory
  packageType: string
  components: string[]
  description: string
  image: string | null
  alt: string
  status: GalleryImageStatus
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // ── KAEC · 2025 ──────────────────────────────────────────────────────────────
  {
    id: 'kaec-2025-grand-entrance-001',
    title: 'Grand Entrance, KAEC',
    city: 'KAEC',
    year: '',
    category: 'Grand Entrances',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Grand Entrance', 'Arch', 'Facade Elements'],
    description:
      'GFRC/GRC grand entrance elements for a waterfront hospitality development in KAEC, featuring arched openings and decorative facade detailing.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-grand-entrance-001.jpg',
    alt: 'GFRC grand entrance facade elements for a hospitality project, KAEC',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-arrival-plaza-001',
    title: 'Arrival Plaza Facade, KAEC',
    city: 'KAEC',
    year: '',
    category: 'Grand Entrances',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Arrival Plaza', 'Facade Elements'],
    description:
      'Exterior architectural facade components at the arrival plaza of a resort-scale hospitality development in KAEC.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-arrival-plaza-001.jpg',
    alt: 'Architectural facade components at the arrival plaza of a hospitality project, KAEC',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-facade-mashrabiya-001',
    title: 'Facade Mashrabiya Screens, KAEC',
    city: 'KAEC',
    year: '',
    category: 'Mashrabiya',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Mashrabiya', 'Facade Screens'],
    description:
      'GFRC/GRC facade mashrabiya screen elements for a hospitality project in KAEC. Project-specific screen geometry integrated into the building facade.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-facade-mashrabiya-001.jpg',
    alt: 'GFRC mashrabiya facade screens on a hospitality building, KAEC',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-facade-screens-002',
    title: 'Hospitality Facade Screens, KAEC',
    city: 'KAEC',
    year: '',
    category: 'Mashrabiya',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Facade Screens', 'Architectural Screens'],
    description:
      'Hospitality facade featuring project-specific GFRC/GRC architectural screen components across the building elevation, KAEC.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-facade-screens-002.jpg',
    alt: 'GFRC architectural facade screen components on a hospitality building, KAEC',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-mashrabiya-facade-003',
    title: 'Mashrabiya Facade Detail, KAEC',
    city: 'KAEC',
    year: '',
    category: 'Mashrabiya',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Mashrabiya', 'Facade Detail'],
    description:
      'Detailed view of GFRC/GRC mashrabiya facade components on a hospitality development in KAEC, showing screen geometry and integration.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-mashrabiya-facade-003.jpg',
    alt: 'GFRC mashrabiya facade detail on a hospitality project, KAEC',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-facade-arches-screens-004',
    title: 'Facade Arches & Screens, KAEC',
    city: 'KAEC',
    year: '',
    category: 'Mashrabiya',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Arches', 'Facade Screens', 'Mashrabiya'],
    description:
      'GFRC/GRC facade arches and screen components combined across the hospitality building elevation in KAEC.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-facade-arches-screens-004.jpg',
    alt: 'GFRC facade arches and screen elements on a hospitality project, KAEC',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-courtyard-facade-001',
    title: 'Courtyard Facade, KAEC',
    city: 'KAEC',
    year: '',
    category: 'Facades & Cladding',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Facade Cladding', 'Courtyard'],
    description:
      'GFRC/GRC facade cladding and architectural components at the courtyard elevation of a hospitality development in KAEC.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-courtyard-facade-001.jpg',
    alt: 'GFRC facade cladding components at a hospitality courtyard elevation, KAEC',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-beachfront-overview-001',
    title: 'Beachfront Facade Overview, KAEC',
    city: 'KAEC',
    year: '',
    category: 'Hospitality',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Facade Scope', 'Beachfront'],
    description:
      'Overview of the beachfront facade scope for a resort-scale hospitality development in KAEC, showing the full extent of GFRC/GRC components.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-beachfront-overview-001.jpg',
    alt: 'Beachfront overview of a resort hospitality development with GFRC facade components, KAEC',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-landscape-courtyard-001',
    title: 'Landscape & Courtyard Elements, KAEC',
    city: 'KAEC',
    year: '',
    category: 'Hospitality',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Courtyard', 'Landscape Integration'],
    description:
      'Exterior architectural components at the landscaped courtyard of a waterfront hospitality project in KAEC.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-landscape-courtyard-001.jpg',
    alt: 'Landscaped courtyard with architectural facade elements at a hospitality project, KAEC',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-aerial-masterplan-001',
    title: 'Resort Masterplan Overview, KAEC',
    city: 'KAEC',
    year: '',
    category: 'Hospitality',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Resort Scope', 'Masterplan'],
    description:
      'Aerial masterplan view of a resort-scale hospitality development in KAEC, showing the full scope of architectural facade components supplied.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-aerial-masterplan-001.jpg',
    alt: 'Aerial masterplan view of a hospitality resort development with GFRC facade scope, KAEC',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-aerial-waterfront-001',
    title: 'Waterfront Aerial View, KAEC',
    city: 'KAEC',
    year: '',
    category: 'Hospitality',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Waterfront', 'Facade Scope'],
    description:
      'Aerial waterfront view of a hospitality development in KAEC, showing the scale of the integrated GFRC/GRC facade scope across the site.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-aerial-waterfront-001.jpg',
    alt: 'Aerial waterfront view of a resort hospitality development with GFRC facade components, KAEC',
    status: 'Public Safe',
  },

  // ── Makkah · 2023 ────────────────────────────────────────────────────────────
  {
    id: 'makkah-2023-domes-001',
    title: 'Dome Elements, Makkah',
    city: 'Makkah',
    year: '',
    category: 'Domes',
    packageType: 'Heritage & Regional Package',
    components: ['GRC', 'Dome', 'Drum'],
    description:
      'GRC dome and drum elements for a mosque project in Makkah. Compound-curved segmented assembly with decorative surface finish.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-domes-001.jpg',
    alt: 'GRC dome elements on a mosque facade, Makkah',
    status: 'Public Safe',
  },
  {
    id: 'makkah-2023-mashrabiya-001',
    title: 'Mashrabiya Screens, Makkah',
    city: 'Makkah',
    year: '',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Mashrabiya', 'Geometric Lattice'],
    description:
      'GFRC mashrabiya screen panels with traditional geometric pattern for a mosque project in Makkah.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-mashrabiya-001.jpg',
    alt: 'GFRC mashrabiya screens with geometric lattice pattern, Makkah',
    status: 'Public Safe',
  },
  {
    id: 'makkah-2023-columns-001',
    title: 'Arched Columns & Capitals, Makkah',
    city: 'Makkah',
    year: '',
    category: 'Columns & Capitals',
    packageType: 'Heritage & Regional Package',
    components: ['GRC', 'Columns', 'Arch', 'Capitals'],
    description:
      'GRC columns with arched openings and decorative capitals for a mosque project in Makkah.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-arches-columns-capitals-001.jpg',
    alt: 'GRC arched columns and decorative capitals on a mosque, Makkah',
    status: 'Public Safe',
  },
  {
    id: 'makkah-2023-columns-002',
    title: 'Column Arcade Detail, Makkah',
    city: 'Makkah',
    year: '',
    category: 'Columns & Capitals',
    packageType: 'Heritage & Regional Package',
    components: ['GRC', 'Columns', 'Arch'],
    description:
      'Detailed view of GRC column arcade with arched bays for a mosque project in Makkah.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-arches-columns-capitals-002.jpg',
    alt: 'GRC column arcade with arched bays on a mosque facade, Makkah',
    status: 'Public Safe',
  },
  {
    id: 'makkah-2023-decorative-001',
    title: 'Decorative Facade Elements, Makkah',
    city: 'Makkah',
    year: '',
    category: 'Decorative Elements',
    packageType: 'Heritage & Regional Package',
    components: ['GRC', 'Ornamental', 'Surface Detail'],
    description:
      'Bespoke GRC decorative facade elements for a mosque project in Makkah, including ornamental surface details.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-decorative-elements-001.jpg',
    alt: 'GRC decorative facade elements on a mosque, Makkah',
    status: 'Public Safe',
  },
  {
    id: 'makkah-2023-decorative-002',
    title: 'Ornamental Detail, Makkah',
    city: 'Makkah',
    year: '',
    category: 'Decorative Elements',
    packageType: 'Heritage & Regional Package',
    components: ['GRC', 'Ornamental', 'Heritage Detail'],
    description:
      'Close-up of GRC ornamental facade detailing for a mosque project in Makkah, referencing classical Islamic architectural forms.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-decorative-elements-002.jpg',
    alt: 'GRC ornamental facade detailing on a mosque, Makkah',
    status: 'Public Safe',
  },

  // ── Placeholder entries (image: null — excluded from gallery render) ─────────
  // These are reserved data records for future project photos.
  // GalleryPage filters out null-image entries, so none of these are displayed.
  {
    id: 'cornice-makkah-2024',
    title: 'Cornice Profile System, Makkah, 2024',
    city: 'Makkah',
    year: '2024',
    category: 'Cornices',
    packageType: 'Complete Facade Package',
    components: ['GRC', 'Cornice', 'Dentil', 'String Course'],
    description:
      'Classical GRC cornice profiles with dentil molding band, fascia, and string course elements.',
    image: null,
    alt: 'GRC classical cornice with dentil molding and string course',
    status: 'Public Safe',
  },
  {
    id: 'grand-entrance-makkah-2024',
    title: 'Hospitality Grand Entrance, Makkah, 2024',
    city: 'Makkah',
    year: '2024',
    category: 'Grand Entrances',
    packageType: 'Hospitality Package',
    components: ['GRC', 'Arch', 'Pilasters', 'Cornice'],
    description:
      'Monumental GRC entrance with arched opening, pilasters, and projecting cornice hood.',
    image: null,
    alt: 'GRC hospitality grand entrance with arch and pilasters',
    status: 'Public Safe',
  },
  {
    id: 'facade-cladding-jeddah-2023',
    title: 'Residential Facade Cladding, Jeddah, 2023',
    city: 'Jeddah',
    year: '2023',
    category: 'Facades & Cladding',
    packageType: 'Villa & Palace Package',
    components: ['GFRC', 'Cladding', 'Reveals'],
    description:
      'GFRC facade cladding system with integrated reveal lines for a residential villa development.',
    image: null,
    alt: 'GFRC residential facade cladding with reveal lines',
    status: 'Public Safe',
  },
  {
    id: 'dome-riyadh-2023',
    title: 'Heritage Dome, Riyadh, 2023',
    city: 'Riyadh',
    year: '2023',
    category: 'Domes',
    packageType: 'Heritage & Regional Package',
    components: ['GRC', 'Dome', 'Heritage Detail'],
    description:
      'Heritage-inspired GRC dome with ribbed profile referencing classical Islamic architectural forms.',
    image: null,
    alt: 'GRC heritage dome with ribbed profile',
    status: 'Public Safe',
  },
  {
    id: 'mashrabiya-medina-2024',
    title: 'Facade Mashrabiya Screens, Madinah, 2024',
    city: 'Madinah',
    year: '2024',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Mashrabiya', 'Arched Frame'],
    description:
      'Full-height arched GFRC mashrabiya screens with traditional geometric infill panel pattern.',
    image: null,
    alt: 'GFRC full-height arched mashrabiya screens',
    status: 'Public Safe',
  },
  {
    id: 'columns-makkah-2023',
    title: 'Landmark Columns, Makkah, 2023',
    city: 'Makkah',
    year: '2023',
    category: 'Columns & Capitals',
    packageType: 'Landmark & Government Package',
    components: ['GRC', 'Columns', 'Classical Capital'],
    description:
      'Monumental-scale GRC columns with bespoke classical capital detailing for a landmark entrance.',
    image: null,
    alt: 'GRC monumental landmark columns with classical capitals',
    status: 'Public Safe',
  },

  // ── Mixed Project Archive · Batch 01 & 02 · Saudi Arabia ─────────────────────

  // Grand Arcade Facade Complex
  {
    id: 'grand-arcade-facade-overall-view-001',
    title: 'Grand Arcade Facade, Overall View',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Arcade', 'Arches'],
    description:
      'Overall view of a large-scale arcade facade complex featuring GFRC/GRC cladding, arched bays, and decorative architectural elements.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-overall-view-001.jpg',
    alt: 'Overall view of a grand arcade facade with GFRC cladding and arched bays',
    status: 'Public Safe',
  },
  {
    id: 'grand-arcade-facade-overall-view-002',
    title: 'Grand Arcade Facade, Second View',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Arcade'],
    description:
      'Second elevation view of the arcade facade complex showing the full extent of GFRC/GRC architectural components.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-overall-view-002.jpg',
    alt: 'Second view of a grand arcade facade with GFRC architectural components',
    status: 'Public Safe',
  },
  {
    id: 'grand-arcade-facade-wide-view-001',
    title: 'Grand Arcade Facade, Wide View',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Arcade', 'Colonnade'],
    description:
      'Wide-angle view of the arcade facade, capturing the repetitive arch rhythm and GFRC/GRC cladding system across the full building frontage.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-wide-view-001.jpg',
    alt: 'Wide view of a grand arcade GFRC facade with repeated arch rhythm',
    status: 'Public Safe',
  },
  {
    id: 'grand-arcade-facade-street-view-001',
    title: 'Grand Arcade Facade, Street View',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Street Frontage'],
    description:
      'Street-level view of the arcade facade, showing the GFRC/GRC cladding and architectural detail at pedestrian scale.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-street-view-001.jpg',
    alt: 'Street-level view of a grand arcade facade with GFRC cladding',
    status: 'Public Safe',
  },
  {
    id: 'grand-arcade-facade-side-perspective-001',
    title: 'Grand Arcade Facade, Side Perspective',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Perspective View'],
    description:
      'Side perspective of the arcade facade complex, showing the depth and profile of GFRC/GRC cladding elements and projecting cornice bands.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-side-perspective-001.jpg',
    alt: 'Side perspective of a grand arcade facade showing GFRC cornice and cladding depth',
    status: 'Public Safe',
  },
  {
    id: 'grand-arcade-facade-main-block-001',
    title: 'Grand Arcade Facade, Main Block',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Main Elevation'],
    description:
      'Main building block elevation of the arcade facade complex, showing the integrated GFRC/GRC cladding panels and facade composition.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-main-block-001.jpg',
    alt: 'Main block elevation of an arcade facade with integrated GFRC cladding panels',
    status: 'Public Safe',
  },
  {
    id: 'grand-arcade-facade-institutional-view-001',
    title: 'Grand Arcade Facade, Institutional',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Facades & Cladding',
    packageType: 'Landmark & Government Package',
    components: ['GFRC', 'Facade Cladding', 'Institutional'],
    description:
      'Institutional elevation of the arcade facade complex with monumental GFRC/GRC cladding and classical architectural detailing.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-institutional-view-001.jpg',
    alt: 'Institutional elevation of an arcade facade complex with GFRC cladding',
    status: 'Public Safe',
  },
  {
    id: 'grand-arcade-facade-colonnade-view-001',
    title: 'Arcade Colonnade Facade',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Grand Entrances',
    packageType: 'Landmark & Government Package',
    components: ['GFRC', 'Colonnade', 'Columns', 'Arches'],
    description:
      'Colonnade elevation of the arcade facade, featuring GFRC/GRC columns, arched bays, and classical entablature elements.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-colonnade-view-001.jpg',
    alt: 'Arcade colonnade facade with GFRC columns and arched bays',
    status: 'Public Safe',
  },
  {
    id: 'grand-arcade-facade-arch-detail-001',
    title: 'Arcade Facade Arch Detail',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Arch', 'Facade Detail', 'Mouldings'],
    description:
      'Close-up detail of a GFRC/GRC arched bay on the arcade facade, showing decorative moulding profiles and surface finish.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-arch-detail-001.jpg',
    alt: 'Close-up detail of a GFRC arcade facade arch with decorative moulding profiles',
    status: 'Public Safe',
  },

  // Bridge Infrastructure Cladding
  {
    id: 'bridge-infrastructure-cladding-overall-view-001',
    title: 'Infrastructure Cladding, Overall View',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Infrastructure',
    packageType: 'Infrastructure Package',
    components: ['GFRC', 'Infrastructure Cladding', 'Bridge'],
    description:
      'Overall view of GFRC/GRC cladding applied to a bridge infrastructure project, showing the architectural surface treatment across the full span.',
    image: '/images/projects/grand-arcade-facade-complex/bridge-infrastructure-cladding-overall-view-001.jpg',
    alt: 'Overall view of GFRC infrastructure cladding on a bridge structure',
    status: 'Public Safe',
  },
  {
    id: 'bridge-infrastructure-cladding-long-view-001',
    title: 'Infrastructure Cladding, Long View',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Infrastructure',
    packageType: 'Infrastructure Package',
    components: ['GFRC', 'Infrastructure Cladding', 'Bridge'],
    description:
      'Longitudinal view of GFRC/GRC infrastructure cladding panels applied along a bridge structure, demonstrating large-scale panel continuity.',
    image: '/images/projects/grand-arcade-facade-complex/bridge-infrastructure-cladding-long-view-001.jpg',
    alt: 'Longitudinal view of GFRC infrastructure cladding panels on a bridge',
    status: 'Public Safe',
  },
  {
    id: 'bridge-infrastructure-cladding-support-detail-001',
    title: 'Infrastructure Cladding, Structural Detail',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Infrastructure',
    packageType: 'Infrastructure Package',
    components: ['GFRC', 'Infrastructure Cladding', 'Structural Detail'],
    description:
      'Detail view of GFRC/GRC cladding panels at a structural support location on an infrastructure project, showing panel geometry and surface finish.',
    image: '/images/projects/grand-arcade-facade-complex/bridge-infrastructure-cladding-support-detail-001.jpg',
    alt: 'Detail view of GFRC infrastructure cladding at a structural support point',
    status: 'Public Safe',
  },
  {
    id: 'tunnel-pattern-cladding-001',
    title: 'Tunnel Pattern Cladding',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Infrastructure',
    packageType: 'Infrastructure Package',
    components: ['GFRC', 'Tunnel Cladding', 'Pattern Surface'],
    description:
      'GFRC/GRC patterned cladding panels applied to a tunnel or underpass structure, providing a decorative architectural surface treatment.',
    image: '/images/projects/grand-arcade-facade-complex/tunnel-pattern-cladding-001.jpg',
    alt: 'GFRC patterned cladding panels on a tunnel or underpass structure',
    status: 'Public Safe',
  },

  // Civic Identity Elements
  {
    id: 'civic-identity-calligraphy-column-001',
    title: 'Decorative Calligraphic Column',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Civic Identity Elements',
    packageType: 'Civic & Landmark Package',
    components: ['GFRC', 'Column', 'Calligraphy', 'Architectural Detail'],
    description:
      'GFRC/GRC column element featuring calligraphic decorative surface treatment for a civic or landmark project.',
    image: '/images/projects/grand-arcade-facade-complex/civic-identity-calligraphy-column-001.jpg',
    alt: 'GFRC decorative column with calligraphic surface treatment for a civic project',
    status: 'Public Safe',
  },
  {
    id: 'civic-identity-logo-panel-001',
    title: 'Decorative Architectural Panel',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Civic Identity Elements',
    packageType: 'Civic & Landmark Package',
    components: ['GFRC', 'Decorative Panel', 'Architectural Detail'],
    description:
      'Custom GFRC/GRC decorative architectural panel for a civic or landmark project.',
    image: '/images/projects/grand-arcade-facade-complex/civic-identity-logo-panel-001.jpg',
    alt: 'Custom GFRC decorative architectural panel for a civic landmark project',
    status: 'Public Safe',
  },
  {
    id: 'civic-identity-logo-panel-002',
    title: 'Decorative Architectural Feature',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Civic Identity Elements',
    packageType: 'Civic & Landmark Package',
    components: ['GFRC', 'Decorative Panel', 'Architectural Detail'],
    description:
      'GFRC/GRC decorative architectural feature element for a civic or institutional project.',
    image: '/images/projects/grand-arcade-facade-complex/civic-identity-logo-panel-002.jpg',
    alt: 'GFRC decorative architectural feature for a civic or institutional project',
    status: 'Public Safe',
  },

  // Mashrabiya Entry Screens
  {
    id: 'mashrabiya-entry-screen-doorway-001',
    title: 'Mashrabiya Entry Screen, Doorway',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Mashrabiya', 'Entry Screen', 'Doorway'],
    description:
      'GFRC/GRC mashrabiya entry screen framing a doorway opening, combining traditional perforated geometry with an arched surround.',
    image: '/images/projects/grand-arcade-facade-complex/mashrabiya-entry-screen-doorway-001.jpg',
    alt: 'GFRC mashrabiya entry screen framing a doorway opening',
    status: 'Public Safe',
  },
  {
    id: 'mashrabiya-entry-screen-doorway-002',
    title: 'Mashrabiya Entry Screen, Second View',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Mashrabiya', 'Entry Screen'],
    description:
      'Second view of a GFRC/GRC mashrabiya entry screen, showing the full screen panel geometry and integration with the surrounding facade.',
    image: '/images/projects/grand-arcade-facade-complex/mashrabiya-entry-screen-doorway-002.jpg',
    alt: 'Second view of a GFRC mashrabiya entry screen panel with full geometry',
    status: 'Public Safe',
  },

  // Religious Facility Architectural Details
  {
    id: 'mosque-architectural-details-main-entrance-001',
    title: 'Religious Facility Main Entrance',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Grand Entrances',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Grand Entrance', 'Arch', 'Decorative Elements'],
    description:
      'Main entrance facade of a religious facility featuring GFRC/GRC arched openings, decorative capitals, and ornamental surface detailing.',
    image: '/images/projects/grand-arcade-facade-complex/mosque-architectural-details-main-entrance-001.jpg',
    alt: 'Main entrance facade of a religious facility with GFRC arched elements and decorative detailing',
    status: 'Public Safe',
  },
  {
    id: 'mosque-architectural-details-dome-interior-001',
    title: 'Dome Interior Architectural Detail',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Domes',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Dome', 'Interior', 'Decorative Finish'],
    description:
      'Interior dome architectural detail for a religious facility, showing GFRC/GRC surface treatment and decorative geometric finish.',
    image: '/images/projects/grand-arcade-facade-complex/mosque-architectural-details-dome-interior-001.jpg',
    alt: 'Interior dome architectural detail with GFRC decorative geometric finish',
    status: 'Public Safe',
  },
  {
    id: 'mosque-architectural-details-lattice-window-001',
    title: 'Lattice Window Screen Detail',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Mashrabiya', 'Lattice Window', 'Geometric Pattern'],
    description:
      'GFRC/GRC lattice window screen with traditional geometric pattern for a religious facility, providing filtered natural light.',
    image: '/images/projects/grand-arcade-facade-complex/mosque-architectural-details-lattice-window-001.jpg',
    alt: 'GFRC lattice window screen with traditional geometric pattern on a religious facility',
    status: 'Public Safe',
  },
  {
    id: 'mosque-architectural-details-screen-windows-001',
    title: 'Screen Windows, Geometric Pattern',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Screen Windows', 'Geometric Lattice'],
    description:
      'Row of GFRC/GRC screen window panels with traditional geometric lattice pattern on a religious facility facade.',
    image: '/images/projects/grand-arcade-facade-complex/mosque-architectural-details-screen-windows-001.jpg',
    alt: 'Row of GFRC screen window panels with geometric lattice pattern',
    status: 'Public Safe',
  },
  {
    id: 'mosque-architectural-details-minaret-001',
    title: 'Minaret Architectural Detail',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Architectural Details',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Minaret', 'Architectural Detail'],
    description:
      'GFRC/GRC architectural detail of a minaret structure for a religious facility, showing decorative surface banding and profile elements.',
    image: '/images/projects/grand-arcade-facade-complex/mosque-architectural-details-minaret-001.jpg',
    alt: 'GFRC architectural detail of a minaret with decorative surface banding',
    status: 'Public Safe',
  },

  // Urban High-Rise Tower
  {
    id: 'urban-high-rise-tower-full-height-view-001',
    title: 'High-Rise Tower, Full Height View',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'High-Rise / Towers',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Tower Cladding', 'High-Rise Facade'],
    description:
      'Full-height view of an urban high-rise tower with GFRC/GRC facade cladding applied across the entire building elevation.',
    image: '/images/projects/grand-arcade-facade-complex/urban-high-rise-tower-full-height-view-001.jpg',
    alt: 'Full-height view of an urban high-rise tower with GFRC facade cladding',
    status: 'Public Safe',
  },
  {
    id: 'urban-high-rise-tower-corner-view-001',
    title: 'High-Rise Tower, Corner View',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'High-Rise / Towers',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Tower Cladding', 'Corner Detail'],
    description:
      'Corner elevation of an urban high-rise tower, showing GFRC/GRC cladding continuity across the building corner and vertical reveal lines.',
    image: '/images/projects/grand-arcade-facade-complex/urban-high-rise-tower-corner-view-001.jpg',
    alt: 'Corner view of a high-rise tower with GFRC cladding and reveal lines',
    status: 'Public Safe',
  },
  {
    id: 'urban-high-rise-tower-corner-view-002',
    title: 'High-Rise Tower, Corner View 2',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'High-Rise / Towers',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Tower Cladding', 'Corner Detail'],
    description:
      'Second corner view of the urban high-rise tower, showing the GFRC/GRC facade system from a different angle.',
    image: '/images/projects/grand-arcade-facade-complex/urban-high-rise-tower-corner-view-002.jpg',
    alt: 'Second corner view of a high-rise tower with GFRC facade cladding system',
    status: 'Public Safe',
  },
  {
    id: 'urban-high-rise-tower-street-view-001',
    title: 'High-Rise Tower, Street View',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'High-Rise / Towers',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Tower Cladding', 'Street Level'],
    description:
      'Street-level view of an urban high-rise tower with GFRC/GRC cladding, showing the base facade treatment and podium elements.',
    image: '/images/projects/grand-arcade-facade-complex/urban-high-rise-tower-street-view-001.jpg',
    alt: 'Street-level view of a high-rise tower showing GFRC cladding and podium facade',
    status: 'Public Safe',
  },

  // Architectural Samples & Mockups
  {
    id: 'architectural-sample-arched-screen-panel-001',
    title: 'Arched Screen Panel Sample',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Samples & Mockups',
    packageType: 'Custom Architectural Package',
    components: ['GFRC', 'Arched Screen', 'Sample Panel'],
    description:
      'GFRC/GRC sample arched screen panel produced as an architectural mockup, demonstrating screen geometry, arch profile, and surface finish.',
    image: '/images/projects/grand-arcade-facade-complex/architectural-sample-arched-screen-panel-001.jpg',
    alt: 'GFRC sample arched screen panel showing screen geometry and surface finish',
    status: 'Public Safe',
  },
  {
    id: 'architectural-sample-balustrade-001',
    title: 'Balustrade Sample',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Samples & Mockups',
    packageType: 'Custom Architectural Package',
    components: ['GFRC', 'Balustrade', 'Sample'],
    description:
      'GFRC/GRC balustrade sample element produced as an architectural mockup, showing profile, balusters, and top rail detail.',
    image: '/images/projects/grand-arcade-facade-complex/architectural-sample-balustrade-001.jpg',
    alt: 'GFRC balustrade sample showing profile and baluster detail',
    status: 'Public Safe',
  },
  {
    id: 'architectural-sample-frame-panel-001',
    title: 'Frame Panel Sample',
    city: 'Saudi Arabia',
    year: 'Various',
    category: 'Samples & Mockups',
    packageType: 'Custom Architectural Package',
    components: ['GFRC', 'Frame Panel', 'Sample'],
    description:
      'GFRC/GRC architectural frame panel sample produced as a mockup, demonstrating panel proportion, moulded frame detail, and surface finish.',
    image: '/images/projects/grand-arcade-facade-complex/architectural-sample-frame-panel-001.jpg',
    alt: 'GFRC frame panel sample showing moulded frame detail and surface finish',
    status: 'Public Safe',
  },

  // ── Sheikh Hamad bin Abdullah bin Jassim Al Thani Mosque · Al Aziziyah, Makkah ──
  {
    id: 'sheikh-hamad-al-thani-mosque-makkah-hero-001',
    title: 'Sheikh Hamad bin Abdullah bin Jassim Al Thani Mosque – Al Aziziyah, Makkah',
    city: 'Makkah',
    year: '',
    category: 'Domes',
    packageType: 'Mosque GFRC/GRC Package',
    components: ['GFRC', 'GRC', 'Domes', 'Minarets', 'Religious Architecture'],
    description:
      'Ornate GFRC/GRC mosque architecture featuring decorative domes, minarets, and carved façade ornamentation.',
    image:
      '/images/projects/sheikh-hamad-al-thani-mosque-makkah-gfrc-package/01-hero/sheikh-hamad-al-thani-mosque-makkah-hero-01.jpg',
    alt: 'Sheikh Hamad bin Abdullah bin Jassim Al Thani Mosque in Al Aziziyah, Makkah, with ornate GFRC domes and minarets',
    status: 'Public Safe',
  },
  {
    id: 'sheikh-hamad-al-thani-mosque-makkah-minaret-detail-001',
    title: 'Sheikh Hamad bin Abdullah bin Jassim Al Thani Mosque – Al Aziziyah, Makkah',
    city: 'Makkah',
    year: '',
    category: 'Architectural Details',
    packageType: 'Mosque GFRC/GRC Package',
    components: ['GFRC', 'GRC', 'Minarets', 'Decorative Detail'],
    description:
      'Ornate GFRC/GRC minaret detailing with carved decorative surfaces and Islamic ornamentation.',
    image:
      '/images/projects/sheikh-hamad-al-thani-mosque-makkah-gfrc-package/03-minaret-details/sheikh-hamad-al-thani-mosque-makkah-minaret-detail-01.jpg',
    alt: 'Ornate GFRC minaret detail at Sheikh Hamad bin Abdullah bin Jassim Al Thani Mosque, Al Aziziyah, Makkah',
    status: 'Public Safe',
  },
  {
    id: 'sheikh-hamad-al-thani-mosque-makkah-dome-detail-001',
    title: 'Sheikh Hamad bin Abdullah bin Jassim Al Thani Mosque – Al Aziziyah, Makkah',
    city: 'Makkah',
    year: '',
    category: 'Domes',
    packageType: 'Mosque GFRC/GRC Package',
    components: ['GFRC', 'GRC', 'Domes', 'Decorative Detail'],
    description:
      'Decorative GFRC/GRC mosque dome with ornamental relief and refined exterior finishing.',
    image:
      '/images/projects/sheikh-hamad-al-thani-mosque-makkah-gfrc-package/04-dome-details/sheikh-hamad-al-thani-mosque-makkah-dome-detail-01.jpg',
    alt: 'Decorative GFRC dome detail at Sheikh Hamad bin Abdullah bin Jassim Al Thani Mosque, Al Aziziyah, Makkah',
    status: 'Public Safe',
  },

  // ── Mosque Domes & Minaret · GFRC/GRC ──────────────────────────────────────────
  {
    id: 'mosque-domes-minaret-gfrc-hero-001',
    title: 'Mosque Domes & Minaret, GFRC/GRC',
    city: '',
    year: '',
    category: 'Domes',
    packageType: 'Mosque GFRC/GRC Package',
    components: ['GFRC', 'GRC', 'Domes', 'Minaret', 'Facade'],
    description:
      'GFRC/GRC mosque architecture with decorative domes, a detailed minaret, and ornamental façade elements.',
    image:
      '/images/projects/mosque-domes-minaret-gfrc-package/01-hero/mosque-domes-minaret-gfrc-hero-01.jpeg',
    alt: 'GFRC/GRC mosque with decorative domes and a detailed minaret',
    status: 'Public Safe',
  },
  {
    id: 'mosque-domes-minaret-gfrc-dome-detail-001',
    title: 'Decorative Mosque Dome, GFRC/GRC',
    city: '',
    year: '',
    category: 'Domes',
    packageType: 'Mosque GFRC/GRC Package',
    components: ['GFRC', 'GRC', 'Dome', 'Decorative Detail'],
    description:
      'Decorative GFRC/GRC mosque dome showing ornamental relief and openwork detailing.',
    image:
      '/images/projects/mosque-domes-minaret-gfrc-package/02-dome-detail/mosque-gfrc-decorative-dome-detail-01.jpg',
    alt: 'Decorative GFRC mosque dome with ornamental relief detailing',
    status: 'Public Safe',
  },
  {
    id: 'mosque-domes-minaret-gfrc-minaret-facade-001',
    title: 'Mosque Minaret Façade, GFRC/GRC',
    city: '',
    year: '',
    category: 'Architectural Details',
    packageType: 'Mosque GFRC/GRC Package',
    components: ['GFRC', 'GRC', 'Minaret', 'Facade Detail'],
    description:
      'GFRC/GRC minaret and façade detailing with refined Islamic architectural ornamentation.',
    image:
      '/images/projects/mosque-domes-minaret-gfrc-package/03-minaret-facade/mosque-gfrc-minaret-facade-view-01.jpeg',
    alt: 'GFRC/GRC mosque minaret façade with decorative detailing',
    status: 'Public Safe',
  },
  {
    id: 'mosque-domes-minaret-gfrc-facade-overview-001',
    title: 'Mosque Façade, GFRC/GRC',
    city: '',
    year: '',
    category: 'Facades & Cladding',
    packageType: 'Mosque GFRC/GRC Package',
    components: ['GFRC', 'GRC', 'Facade Cladding', 'Cornices'],
    description:
      'GFRC/GRC mosque façade with cladding, cornices, and decorative architectural elements.',
    image:
      '/images/projects/mosque-domes-minaret-gfrc-package/03-facade-overview/mosque-gfrc-facade-overview-01.jpeg',
    alt: 'GFRC/GRC mosque façade with cladding and decorative cornices',
    status: 'Public Safe',
  },

  // ── Heritage GFRC/GRC Façade ───────────────────────────────────────────────────
  {
    id: 'heritage-gfrc-facade-hero-001',
    title: 'Heritage GFRC/GRC Façade',
    city: '',
    year: '',
    category: 'Facades & Cladding',
    packageType: 'Heritage Facade Package',
    components: ['GFRC', 'GRC', 'Facade Cladding', 'Arches', 'Cornices'],
    description:
      'Heritage-style GFRC/GRC façade package featuring arches, cornices, decorative screens, and patterned façade panels.',
    image: '/images/projects/heritage-gfrc-facade-package/01-hero/heritage-gfrc-facade-hero-01.jpg',
    alt: 'Heritage-style GFRC/GRC façade with arches, cornices, and decorative screen panels',
    status: 'Public Safe',
  },
]
