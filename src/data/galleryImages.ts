export type GalleryCategory =
  | 'Grand Entrances'
  | 'Facades & Cladding'
  | 'Domes'
  | 'Mashrabiya'
  | 'Columns & Capitals'
  | 'Cornices'
  | 'Decorative Elements'
  | 'Hospitality'

export const GALLERY_FILTERS = [
  'All',
  'Hospitality',
  'Grand Entrances',
  'Facades & Cladding',
  'Domes',
  'Mashrabiya',
  'Columns & Capitals',
  'Cornices',
  'Decorative Elements',
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
    title: 'Grand Entrance, KAEC, 2025',
    city: 'KAEC',
    year: '2025',
    category: 'Grand Entrances',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Grand Entrance', 'Arch', 'Facade Elements'],
    description:
      'GFRC/GRC grand entrance elements for a waterfront hospitality development in KAEC, featuring arched openings and decorative facade detailing.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-grand-entrance-001.jpg',
    alt: 'GFRC grand entrance facade elements for a hospitality project, KAEC 2025',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-arrival-plaza-001',
    title: 'Arrival Plaza Facade, KAEC, 2025',
    city: 'KAEC',
    year: '2025',
    category: 'Grand Entrances',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Arrival Plaza', 'Facade Elements'],
    description:
      'Exterior architectural facade components at the arrival plaza of a resort-scale hospitality development in KAEC.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-arrival-plaza-001.jpg',
    alt: 'Architectural facade components at the arrival plaza of a hospitality project, KAEC 2025',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-facade-mashrabiya-001',
    title: 'Facade Mashrabiya Screens, KAEC, 2025',
    city: 'KAEC',
    year: '2025',
    category: 'Mashrabiya',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Mashrabiya', 'Facade Screens'],
    description:
      'GFRC/GRC facade mashrabiya screen elements for a hospitality project in KAEC. Project-specific screen geometry integrated into the building facade.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-facade-mashrabiya-001.jpg',
    alt: 'GFRC mashrabiya facade screens on a hospitality building, KAEC 2025',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-facade-screens-002',
    title: 'Hospitality Facade Screens, KAEC, 2025',
    city: 'KAEC',
    year: '2025',
    category: 'Mashrabiya',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Facade Screens', 'Architectural Screens'],
    description:
      'Hospitality facade featuring project-specific GFRC/GRC architectural screen components across the building elevation, KAEC.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-facade-screens-002.jpg',
    alt: 'GFRC architectural facade screen components on a hospitality building, KAEC 2025',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-mashrabiya-facade-003',
    title: 'Mashrabiya Facade Detail, KAEC, 2025',
    city: 'KAEC',
    year: '2025',
    category: 'Mashrabiya',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Mashrabiya', 'Facade Detail'],
    description:
      'Detailed view of GFRC/GRC mashrabiya facade components on a hospitality development in KAEC, showing screen geometry and integration.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-mashrabiya-facade-003.jpg',
    alt: 'GFRC mashrabiya facade detail on a hospitality project, KAEC 2025',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-facade-arches-screens-004',
    title: 'Facade Arches & Screens, KAEC, 2025',
    city: 'KAEC',
    year: '2025',
    category: 'Mashrabiya',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Arches', 'Facade Screens', 'Mashrabiya'],
    description:
      'GFRC/GRC facade arches and screen components combined across the hospitality building elevation in KAEC.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-facade-arches-screens-004.jpg',
    alt: 'GFRC facade arches and screen elements on a hospitality project, KAEC 2025',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-courtyard-facade-001',
    title: 'Courtyard Facade, KAEC, 2025',
    city: 'KAEC',
    year: '2025',
    category: 'Facades & Cladding',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Facade Cladding', 'Courtyard'],
    description:
      'GFRC/GRC facade cladding and architectural components at the courtyard elevation of a hospitality development in KAEC.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-courtyard-facade-001.jpg',
    alt: 'GFRC facade cladding components at a hospitality courtyard elevation, KAEC 2025',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-beachfront-overview-001',
    title: 'Beachfront Facade Overview, KAEC, 2025',
    city: 'KAEC',
    year: '2025',
    category: 'Hospitality',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Facade Scope', 'Beachfront'],
    description:
      'Overview of the beachfront facade scope for a resort-scale hospitality development in KAEC, showing the full extent of GFRC/GRC components.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-beachfront-overview-001.jpg',
    alt: 'Beachfront overview of a resort hospitality development with GFRC facade components, KAEC 2025',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-landscape-courtyard-001',
    title: 'Landscape & Courtyard Elements, KAEC, 2025',
    city: 'KAEC',
    year: '2025',
    category: 'Hospitality',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Courtyard', 'Landscape Integration'],
    description:
      'Exterior architectural components at the landscaped courtyard of a waterfront hospitality project in KAEC.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-landscape-courtyard-001.jpg',
    alt: 'Landscaped courtyard with architectural facade elements at a hospitality project, KAEC 2025',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-aerial-masterplan-001',
    title: 'Resort Masterplan Overview, KAEC, 2025',
    city: 'KAEC',
    year: '2025',
    category: 'Hospitality',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Resort Scope', 'Masterplan'],
    description:
      'Aerial masterplan view of a resort-scale hospitality development in KAEC, showing the full scope of architectural facade components supplied.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-aerial-masterplan-001.jpg',
    alt: 'Aerial masterplan view of a hospitality resort development with GFRC facade scope, KAEC 2025',
    status: 'Public Safe',
  },
  {
    id: 'kaec-2025-aerial-waterfront-001',
    title: 'Waterfront Aerial View, KAEC, 2025',
    city: 'KAEC',
    year: '2025',
    category: 'Hospitality',
    packageType: 'Hospitality Package',
    components: ['GFRC', 'Waterfront', 'Facade Scope'],
    description:
      'Aerial waterfront view of a hospitality development in KAEC, showing the scale of the integrated GFRC/GRC facade scope across the site.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-aerial-waterfront-001.jpg',
    alt: 'Aerial waterfront view of a resort hospitality development with GFRC facade components, KAEC 2025',
    status: 'Public Safe',
  },

  // ── Makkah · 2023 ────────────────────────────────────────────────────────────
  {
    id: 'makkah-2023-domes-001',
    title: 'Dome Elements, Makkah, 2023',
    city: 'Makkah',
    year: '2023',
    category: 'Domes',
    packageType: 'Heritage & Regional Package',
    components: ['GRC', 'Dome', 'Drum'],
    description:
      'GRC dome and drum elements for a mosque project in Makkah. Compound-curved segmented assembly with decorative surface finish.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-domes-001.jpg',
    alt: 'GRC dome elements on a mosque facade, Makkah 2023',
    status: 'Public Safe',
  },
  {
    id: 'makkah-2023-mashrabiya-001',
    title: 'Mashrabiya Screens, Makkah, 2023',
    city: 'Makkah',
    year: '2023',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Mashrabiya', 'Geometric Lattice'],
    description:
      'GFRC mashrabiya screen panels with traditional geometric pattern for a mosque project in Makkah.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-mashrabiya-001.jpg',
    alt: 'GFRC mashrabiya screens with geometric lattice pattern, Makkah 2023',
    status: 'Public Safe',
  },
  {
    id: 'makkah-2023-columns-001',
    title: 'Arched Columns & Capitals, Makkah, 2023',
    city: 'Makkah',
    year: '2023',
    category: 'Columns & Capitals',
    packageType: 'Heritage & Regional Package',
    components: ['GRC', 'Columns', 'Arch', 'Capitals'],
    description:
      'GRC columns with arched openings and decorative capitals for a mosque project in Makkah.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-arches-columns-capitals-001.jpg',
    alt: 'GRC arched columns and decorative capitals on a mosque, Makkah 2023',
    status: 'Public Safe',
  },
  {
    id: 'makkah-2023-columns-002',
    title: 'Column Arcade Detail, Makkah, 2023',
    city: 'Makkah',
    year: '2023',
    category: 'Columns & Capitals',
    packageType: 'Heritage & Regional Package',
    components: ['GRC', 'Columns', 'Arch'],
    description:
      'Detailed view of GRC column arcade with arched bays for a mosque project in Makkah.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-arches-columns-capitals-002.jpg',
    alt: 'GRC column arcade with arched bays on a mosque facade, Makkah 2023',
    status: 'Public Safe',
  },
  {
    id: 'makkah-2023-decorative-001',
    title: 'Decorative Facade Elements, Makkah, 2023',
    city: 'Makkah',
    year: '2023',
    category: 'Decorative Elements',
    packageType: 'Heritage & Regional Package',
    components: ['GRC', 'Ornamental', 'Surface Detail'],
    description:
      'Bespoke GRC decorative facade elements for a mosque project in Makkah, including ornamental surface details.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-decorative-elements-001.jpg',
    alt: 'GRC decorative facade elements on a mosque, Makkah 2023',
    status: 'Public Safe',
  },
  {
    id: 'makkah-2023-decorative-002',
    title: 'Ornamental Detail, Makkah, 2023',
    city: 'Makkah',
    year: '2023',
    category: 'Decorative Elements',
    packageType: 'Heritage & Regional Package',
    components: ['GRC', 'Ornamental', 'Heritage Detail'],
    description:
      'Close-up of GRC ornamental facade detailing for a mosque project in Makkah, referencing classical Islamic architectural forms.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-decorative-elements-002.jpg',
    alt: 'GRC ornamental facade detailing on a mosque, Makkah 2023',
    status: 'Public Safe',
  },

  // ── Other projects ────────────────────────────────────────────────────────────
  {
    id: 'grand-entrance-jeddah-2025',
    title: 'Grand Entrance Facade, Jeddah, 2025',
    city: 'Jeddah',
    year: '2025',
    category: 'Grand Entrances',
    packageType: 'Complete Facade Package',
    components: ['GRC', 'Columns', 'Arch', 'Cornices'],
    description:
      'Full GRC entrance facade with classical columns, arched opening, and decorative cornice band elements.',
    image: '/images/projects/grand-entrance-gfrc.png',
    alt: 'GRC grand entrance facade with classical columns and decorative arch',
    status: 'Public Safe',
  },
  {
    id: 'facade-cladding-riyadh-2025',
    title: 'Architectural Facade Cladding, Riyadh, 2025',
    city: 'Riyadh',
    year: '2025',
    category: 'Facades & Cladding',
    packageType: 'Facade & Cladding Package',
    components: ['GFRC', 'Cladding Panels', 'Reveal Lines'],
    description:
      'Large-format GFRC facade cladding with integrated shadow reveals and contemporary surface finish.',
    image: '/images/projects/architectural-cladding-gfrc.png',
    alt: 'GFRC architectural facade cladding panels with reveal lines',
    status: 'Public Safe',
  },
  {
    id: 'dome-vault-jeddah-2024',
    title: 'Dome & Vault Elements, Jeddah, 2024',
    city: 'Jeddah',
    year: '2024',
    category: 'Domes',
    packageType: 'Dome Package',
    components: ['GRC', 'Dome', 'Drum', 'Crown'],
    description:
      'Segmented GRC dome with decorative drum band, cornice ring, and ribbed crown finial assembly.',
    image: '/images/projects/dome-vault-gfrc.png',
    alt: 'GRC dome and vault with ribbed crown and decorative drum',
    status: 'Public Safe',
  },
  {
    id: 'mashrabiya-jeddah-2024',
    title: 'Mashrabiya Screen System, Jeddah, 2024',
    city: 'Jeddah',
    year: '2024',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Mashrabiya', 'Geometric Lattice'],
    description:
      'Custom GFRC mashrabiya screen panels with traditional hexagonal lattice pattern and arched frame.',
    image: '/images/projects/mashrabiya-screen-gfrc.png',
    alt: 'GFRC mashrabiya screen with hexagonal geometric lattice pattern',
    status: 'Public Safe',
  },
  {
    id: 'columns-capitals-riyadh-2025',
    title: 'Column Portico, Riyadh, 2025',
    city: 'Riyadh',
    year: '2025',
    category: 'Columns & Capitals',
    packageType: 'Villa & Palace Package',
    components: ['GFRC', 'Columns', 'Capitals', 'Entablature'],
    description:
      'Full GFRC column assemblies including fluted shafts, classical capitals, and entablature members.',
    image: '/images/projects/column-portico-gfrc.png',
    alt: 'GFRC column portico with classical fluted shafts and decorative capitals',
    status: 'Public Safe',
  },
  {
    id: 'decorative-facade-makkah-2024',
    title: 'Decorative Facade Elements, Makkah, 2024',
    city: 'Makkah',
    year: '2024',
    category: 'Decorative Elements',
    packageType: 'Custom Architectural Package',
    components: ['GFRC', 'Ornamental', 'Custom Details'],
    description:
      'Bespoke GRC ornamental facade elements including medallions, keystones, and surface detailing.',
    image: '/images/projects/ornamental-facade-gfrc.png',
    alt: 'GFRC decorative ornamental facade elements and medallions',
    status: 'Public Safe',
  },
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
]
