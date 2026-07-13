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
  // Second publish gate. An image renders only when status === 'Public Safe'
  // AND approvedForWeb === true. `status` encodes confidentiality
  // (Public Safe = public; others = internal/NDA); approvedForWeb is the
  // explicit per-image sign-off that it is cleared for the website.
  approvedForWeb: boolean
  // Third layer (grouping — on top of the publish gate, not a replacement):
  // the project this image belongs to (see GALLERY_PROJECTS). Images WITHOUT a
  // projectSlug are UNGROUPED and do not render in the gallery; they stay in
  // this registry so the owner can group them later — see
  // docs/gallery-ungrouped-backlog.md.
  projectSlug?: string
}

// ─── Project registry ─────────────────────────────────────────────────────────
// The gallery renders PROJECT cards; each project's photo set opens in the
// lightbox. Display titles are localized in the en/ar gallery dictionaries
// (keyed by slug). `city`/`year` are shown only when set — never "Various".
// `samplesBadge` projects show a "Samples" badge instead of city · year.

export interface GalleryProject {
  slug: string
  city?: string
  year?: string
  samplesBadge?: boolean
  coverImageId: string
}

// Server-side pre-filter for the gallery pages: publish gate (unchanged) +
// grouping layer. Passing this (instead of the full registry) keeps hidden /
// ungrouped entries out of the serialized page payload entirely.
export function publishedGalleryImages(images: GalleryImage[]): GalleryImage[] {
  return images.filter(
    (img) => img.status === 'Public Safe' && img.approvedForWeb && img.image !== null && img.projectSlug,
  )
}

export const GALLERY_PROJECTS: GalleryProject[] = [
  { slug: 'beachfront-hotel-resort-jeddah', city: 'Jeddah', year: '2026', coverImageId: 'beachfront-hotel-resort-colonnade-mashrabiya-11' },
  { slug: 'kaec-2025-hospitality', city: 'KAEC', year: '2025', coverImageId: 'kaec-2025-grand-entrance-001' },
  { slug: 'makkah-2023-heritage-mosque', city: 'Makkah', year: '2023', coverImageId: 'makkah-2023-domes-001' },
  { slug: 'landmark-mosque-aziziyah', city: 'Makkah', coverImageId: 'landmark-mosque-aziziyah-makkah-hero-001' },
  { slug: 'mosque-domes-minaret', coverImageId: 'mosque-domes-minaret-gfrc-hero-001' },
  { slug: 'grand-arcade-facade', city: 'Saudi Arabia', coverImageId: 'grand-arcade-facade-overall-view-001' },
  { slug: 'infrastructure-cladding', city: 'Saudi Arabia', coverImageId: 'bridge-infrastructure-cladding-overall-view-001' },
  { slug: 'urban-high-rise-tower', city: 'Saudi Arabia', coverImageId: 'urban-high-rise-tower-full-height-view-001' },
  { slug: 'mashrabiya-entry-screens', city: 'Saudi Arabia', coverImageId: 'mashrabiya-entry-screen-doorway-001' },
  { slug: 'architectural-samples', samplesBadge: true, coverImageId: 'architectural-sample-arched-screen-panel-001' },
]

export const GALLERY_IMAGES: GalleryImage[] = [
  // ── Beachfront Hotel & Resort · Jeddah · 2026 ────────────────────────────────
  {
    id: 'beachfront-hotel-resort-mashrabiya-facade-01',
    projectSlug: 'beachfront-hotel-resort-jeddah',
    title: 'Mashrabiya Facade',
    city: 'Jeddah',
    year: '2026',
    category: 'Mashrabiya',
    packageType: 'Hospitality & Commercial Landmark Scope',
    components: ['GFRC', 'Mashrabiya', 'Facade Screens'],
    description:
      'GFRC/GRC mashrabiya screen facade on a beachfront hospitality development in Jeddah — project-specific screen geometry across the guest-wing elevation.',
    image: '/images/projects/beachfront-hotel-resort-jeddah/beachfront-hotel-resort-mashrabiya-facade-01.jpg',
    alt: 'GFRC mashrabiya screen facade on a beachfront resort building, Jeddah',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'beachfront-hotel-resort-arched-pool-courtyard-02',
    projectSlug: 'beachfront-hotel-resort-jeddah',
    title: 'Arched Pool Courtyard',
    city: 'Jeddah',
    year: '2026',
    category: 'Facades & Cladding',
    packageType: 'Hospitality & Commercial Landmark Scope',
    components: ['GFRC', 'Arches', 'Facade Cladding'],
    description:
      'Arched GFRC/GRC courtyard facades framing the resort pool terrace — repeated arch profiles and cladding panels around the courtyard elevation.',
    image: '/images/projects/beachfront-hotel-resort-jeddah/beachfront-hotel-resort-arched-pool-courtyard-02.jpg',
    alt: 'Arched GFRC courtyard facades around a resort pool terrace, Jeddah',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'beachfront-hotel-resort-mashrabiya-balconies-03',
    projectSlug: 'beachfront-hotel-resort-jeddah',
    title: 'Mashrabiya Balconies',
    city: 'Jeddah',
    year: '2026',
    category: 'Mashrabiya',
    packageType: 'Hospitality & Commercial Landmark Scope',
    components: ['GFRC', 'Mashrabiya', 'Balcony Screens'],
    description:
      'Guest-room balconies wrapped in GFRC/GRC mashrabiya screens — privacy and shading elements integrated into the resort facade rhythm.',
    image: '/images/projects/beachfront-hotel-resort-jeddah/beachfront-hotel-resort-mashrabiya-balconies-03.jpg',
    alt: 'GFRC mashrabiya balcony screens on a resort facade, Jeddah',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'beachfront-hotel-resort-seafront-elevation-04',
    projectSlug: 'beachfront-hotel-resort-jeddah',
    title: 'Seafront Elevation',
    city: 'Jeddah',
    year: '2026',
    category: 'Facades & Cladding',
    packageType: 'Hospitality & Commercial Landmark Scope',
    components: ['GFRC', 'Facade Cladding', 'Cornices'],
    description:
      'Seafront elevation of the beachfront resort — GFRC/GRC facade cladding, cornice lines, and screen elements along the waterfront frontage.',
    image: '/images/projects/beachfront-hotel-resort-jeddah/beachfront-hotel-resort-seafront-elevation-04.jpg',
    alt: 'Seafront GFRC facade elevation of a beachfront resort, Jeddah',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'beachfront-hotel-resort-resort-aerial-08',
    projectSlug: 'beachfront-hotel-resort-jeddah',
    title: 'Resort Aerial View',
    city: 'Jeddah',
    year: '2026',
    category: 'Hospitality',
    packageType: 'Hospitality & Commercial Landmark Scope',
    components: ['GFRC', 'Hospitality', 'Facade Elements'],
    description:
      'Aerial view of the beachfront resort composition — GFRC/GRC facade and screen packages across the hotel wings and public buildings.',
    image: '/images/projects/beachfront-hotel-resort-jeddah/beachfront-hotel-resort-resort-aerial-08.jpg',
    alt: 'Aerial view of a beachfront resort with GFRC facade elements, Jeddah',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'beachfront-hotel-resort-villas-golf-aerial-09',
    projectSlug: 'beachfront-hotel-resort-jeddah',
    title: 'Villas & Golf Aerial',
    city: 'Jeddah',
    year: '2026',
    category: 'Hospitality',
    packageType: 'Hospitality & Commercial Landmark Scope',
    components: ['GFRC', 'Hospitality', 'Villas'],
    description:
      'Aerial view over the resort villas and golf landscape — repeated GFRC/GRC facade and screen applications across the villa clusters.',
    image: '/images/projects/beachfront-hotel-resort-jeddah/beachfront-hotel-resort-villas-golf-aerial-09.jpg',
    alt: 'Aerial view of resort villas and golf landscape, Jeddah',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'beachfront-hotel-resort-masterplan-aerial-10',
    projectSlug: 'beachfront-hotel-resort-jeddah',
    title: 'Masterplan Aerial',
    city: 'Jeddah',
    year: '2026',
    category: 'Hospitality',
    packageType: 'Hospitality & Commercial Landmark Scope',
    components: ['GFRC', 'Hospitality', 'Masterplan'],
    description:
      'Masterplan-scale aerial of the beachfront development — the overall composition served by the GFRC/GRC architectural package.',
    image: '/images/projects/beachfront-hotel-resort-jeddah/beachfront-hotel-resort-masterplan-aerial-10.jpg',
    alt: 'Masterplan aerial of a beachfront hospitality development, Jeddah',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'beachfront-hotel-resort-colonnade-mashrabiya-11',
    projectSlug: 'beachfront-hotel-resort-jeddah',
    title: 'Colonnade & Mashrabiya Screens',
    city: 'Jeddah',
    year: '2026',
    category: 'Mashrabiya',
    packageType: 'Hospitality & Commercial Landmark Scope',
    components: ['GFRC', 'Colonnade', 'Mashrabiya', 'Decorative Elements'],
    description:
      'Resort colonnade with GFRC/GRC mashrabiya screens and decorative profile work — the signature facade treatment of the development.',
    image: '/images/projects/beachfront-hotel-resort-jeddah/beachfront-hotel-resort-colonnade-mashrabiya-11.jpg',
    alt: 'GFRC colonnade with mashrabiya screens at a beachfront resort, Jeddah',
    status: 'Public Safe',
    approvedForWeb: true,
  },

  // ── KAEC · 2025 ──────────────────────────────────────────────────────────────
  {
    id: 'kaec-2025-grand-entrance-001',
    projectSlug: 'kaec-2025-hospitality',
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
    approvedForWeb: true,
  },
  {
    id: 'kaec-2025-arrival-plaza-001',
    projectSlug: 'kaec-2025-hospitality',
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
    approvedForWeb: true,
  },
  {
    id: 'kaec-2025-facade-mashrabiya-001',
    projectSlug: 'kaec-2025-hospitality',
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
    approvedForWeb: true,
  },
  {
    id: 'kaec-2025-facade-screens-002',
    projectSlug: 'kaec-2025-hospitality',
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
    approvedForWeb: true,
  },
  {
    id: 'kaec-2025-mashrabiya-facade-003',
    projectSlug: 'kaec-2025-hospitality',
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
    approvedForWeb: true,
  },
  {
    id: 'kaec-2025-facade-arches-screens-004',
    projectSlug: 'kaec-2025-hospitality',
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
    approvedForWeb: true,
  },
  {
    id: 'kaec-2025-courtyard-facade-001',
    projectSlug: 'kaec-2025-hospitality',
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
    approvedForWeb: true,
  },

  // ── Makkah · 2023 ────────────────────────────────────────────────────────────
  {
    id: 'makkah-2023-domes-001',
    projectSlug: 'makkah-2023-heritage-mosque',
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
    approvedForWeb: true,
  },
  {
    id: 'makkah-2023-mashrabiya-001',
    projectSlug: 'makkah-2023-heritage-mosque',
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
    approvedForWeb: true,
  },
  {
    id: 'makkah-2023-columns-001',
    projectSlug: 'makkah-2023-heritage-mosque',
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
    approvedForWeb: true,
  },
  {
    id: 'makkah-2023-columns-002',
    projectSlug: 'makkah-2023-heritage-mosque',
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
    approvedForWeb: true,
  },
  {
    id: 'makkah-2023-decorative-001',
    projectSlug: 'makkah-2023-heritage-mosque',
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
    approvedForWeb: true,
  },
  {
    id: 'makkah-2023-decorative-002',
    projectSlug: 'makkah-2023-heritage-mosque',
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
    approvedForWeb: true,
  },

  // ── Placeholder entries (image: null — excluded from gallery render) ─────────
  // These are reserved data records for future project photos.
  // GalleryPage filters out null-image entries, so none of these are displayed.
  {
    id: 'cornice-makkah-2024', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
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
    approvedForWeb: true,
  },
  {
    id: 'grand-entrance-makkah-2024', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
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
    approvedForWeb: true,
  },
  {
    id: 'facade-cladding-jeddah-2023', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
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
    approvedForWeb: true,
  },
  {
    id: 'dome-riyadh-2023', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
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
    approvedForWeb: true,
  },
  {
    id: 'mashrabiya-medina-2024', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
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
    approvedForWeb: true,
  },
  {
    id: 'columns-makkah-2023', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
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
    approvedForWeb: true,
  },

  // ── Mixed Project Archive · Batch 01 & 02 · Saudi Arabia ─────────────────────

  // Grand Arcade Facade Complex
  {
    id: 'grand-arcade-facade-overall-view-001',
    projectSlug: 'grand-arcade-facade',
    title: 'Grand Arcade Facade, Overall View',
    city: 'Saudi Arabia',
    year: '',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Arcade', 'Arches'],
    description:
      'Overall view of a large-scale arcade facade complex featuring GFRC/GRC cladding, arched bays, and decorative architectural elements.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-overall-view-001.jpg',
    alt: 'Overall view of a grand arcade facade with GFRC cladding and arched bays',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'grand-arcade-facade-overall-view-002',
    projectSlug: 'grand-arcade-facade',
    title: 'Grand Arcade Facade, Second View',
    city: 'Saudi Arabia',
    year: '',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Arcade'],
    description:
      'Second elevation view of the arcade facade complex showing the full extent of GFRC/GRC architectural components.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-overall-view-002.jpg',
    alt: 'Second view of a grand arcade facade with GFRC architectural components',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'grand-arcade-facade-wide-view-001',
    projectSlug: 'grand-arcade-facade',
    title: 'Grand Arcade Facade, Wide View',
    city: 'Saudi Arabia',
    year: '',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Arcade', 'Colonnade'],
    description:
      'Wide-angle view of the arcade facade, capturing the repetitive arch rhythm and GFRC/GRC cladding system across the full building frontage.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-wide-view-001.jpg',
    alt: 'Wide view of a grand arcade GFRC facade with repeated arch rhythm',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'grand-arcade-facade-street-view-001',
    projectSlug: 'grand-arcade-facade',
    title: 'Grand Arcade Facade, Street View',
    city: 'Saudi Arabia',
    year: '',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Street Frontage'],
    description:
      'Street-level view of the arcade facade, showing the GFRC/GRC cladding and architectural detail at pedestrian scale.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-street-view-001.jpg',
    alt: 'Street-level view of a grand arcade facade with GFRC cladding',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'grand-arcade-facade-side-perspective-001',
    projectSlug: 'grand-arcade-facade',
    title: 'Grand Arcade Facade, Side Perspective',
    city: 'Saudi Arabia',
    year: '',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Perspective View'],
    description:
      'Side perspective of the arcade facade complex, showing the depth and profile of GFRC/GRC cladding elements and projecting cornice bands.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-side-perspective-001.jpg',
    alt: 'Side perspective of a grand arcade facade showing GFRC cornice and cladding depth',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'grand-arcade-facade-main-block-001',
    projectSlug: 'grand-arcade-facade',
    title: 'Grand Arcade Facade, Main Block',
    city: 'Saudi Arabia',
    year: '',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Facade Cladding', 'Main Elevation'],
    description:
      'Main building block elevation of the arcade facade complex, showing the integrated GFRC/GRC cladding panels and facade composition.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-main-block-001.jpg',
    alt: 'Main block elevation of an arcade facade with integrated GFRC cladding panels',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'grand-arcade-facade-institutional-view-001', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
    title: 'Grand Arcade Facade, Institutional',
    city: 'Saudi Arabia',
    year: '',
    category: 'Facades & Cladding',
    packageType: 'Landmark & Government Package',
    components: ['GFRC', 'Facade Cladding', 'Institutional'],
    description:
      'Institutional elevation of the arcade facade complex with monumental GFRC/GRC cladding and classical architectural detailing.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-institutional-view-001.jpg',
    alt: 'Institutional elevation of an arcade facade complex with GFRC cladding',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'grand-arcade-facade-colonnade-view-001',
    projectSlug: 'grand-arcade-facade',
    title: 'Arcade Colonnade Facade',
    city: 'Saudi Arabia',
    year: '',
    category: 'Grand Entrances',
    packageType: 'Landmark & Government Package',
    components: ['GFRC', 'Colonnade', 'Columns', 'Arches'],
    description:
      'Colonnade elevation of the arcade facade, featuring GFRC/GRC columns, arched bays, and classical entablature elements.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-colonnade-view-001.jpg',
    alt: 'Arcade colonnade facade with GFRC columns and arched bays',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'grand-arcade-facade-arch-detail-001',
    projectSlug: 'grand-arcade-facade',
    title: 'Arcade Facade Arch Detail',
    city: 'Saudi Arabia',
    year: '',
    category: 'Facades & Cladding',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Arch', 'Facade Detail', 'Mouldings'],
    description:
      'Close-up detail of a GFRC/GRC arched bay on the arcade facade, showing decorative moulding profiles and surface finish.',
    image: '/images/projects/grand-arcade-facade-complex/grand-arcade-facade-arch-detail-001.jpg',
    alt: 'Close-up detail of a GFRC arcade facade arch with decorative moulding profiles',
    status: 'Public Safe',
    approvedForWeb: true,
  },

  // Bridge Infrastructure Cladding
  {
    id: 'bridge-infrastructure-cladding-overall-view-001',
    projectSlug: 'infrastructure-cladding',
    title: 'Infrastructure Cladding, Overall View',
    city: 'Saudi Arabia',
    year: '',
    category: 'Infrastructure',
    packageType: 'Infrastructure Package',
    components: ['GFRC', 'Infrastructure Cladding', 'Bridge'],
    description:
      'Overall view of GFRC/GRC cladding applied to a bridge infrastructure project, showing the architectural surface treatment across the full span.',
    image: '/images/projects/grand-arcade-facade-complex/bridge-infrastructure-cladding-overall-view-001.jpg',
    alt: 'Overall view of GFRC infrastructure cladding on a bridge structure',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'bridge-infrastructure-cladding-long-view-001',
    projectSlug: 'infrastructure-cladding',
    title: 'Infrastructure Cladding, Long View',
    city: 'Saudi Arabia',
    year: '',
    category: 'Infrastructure',
    packageType: 'Infrastructure Package',
    components: ['GFRC', 'Infrastructure Cladding', 'Bridge'],
    description:
      'Longitudinal view of GFRC/GRC infrastructure cladding panels applied along a bridge structure, demonstrating large-scale panel continuity.',
    image: '/images/projects/grand-arcade-facade-complex/bridge-infrastructure-cladding-long-view-001.jpg',
    alt: 'Longitudinal view of GFRC infrastructure cladding panels on a bridge',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'bridge-infrastructure-cladding-support-detail-001',
    projectSlug: 'infrastructure-cladding',
    title: 'Infrastructure Cladding, Structural Detail',
    city: 'Saudi Arabia',
    year: '',
    category: 'Infrastructure',
    packageType: 'Infrastructure Package',
    components: ['GFRC', 'Infrastructure Cladding', 'Structural Detail'],
    description:
      'Detail view of GFRC/GRC cladding panels at a structural support location on an infrastructure project, showing panel geometry and surface finish.',
    image: '/images/projects/grand-arcade-facade-complex/bridge-infrastructure-cladding-support-detail-001.jpg',
    alt: 'Detail view of GFRC infrastructure cladding at a structural support point',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'tunnel-pattern-cladding-001',
    projectSlug: 'infrastructure-cladding',
    title: 'Tunnel Pattern Cladding',
    city: 'Saudi Arabia',
    year: '',
    category: 'Infrastructure',
    packageType: 'Infrastructure Package',
    components: ['GFRC', 'Tunnel Cladding', 'Pattern Surface'],
    description:
      'GFRC/GRC patterned cladding panels applied to a tunnel or underpass structure, providing a decorative architectural surface treatment.',
    image: '/images/projects/grand-arcade-facade-complex/tunnel-pattern-cladding-001.jpg',
    alt: 'GFRC patterned cladding panels on a tunnel or underpass structure',
    status: 'Public Safe',
    approvedForWeb: true,
  },

  // Mashrabiya Entry Screens
  {
    id: 'mashrabiya-entry-screen-doorway-001',
    projectSlug: 'mashrabiya-entry-screens',
    title: 'Mashrabiya Entry Screen, Doorway',
    city: 'Saudi Arabia',
    year: '',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Mashrabiya', 'Entry Screen', 'Doorway'],
    description:
      'GFRC/GRC mashrabiya entry screen framing a doorway opening, combining traditional perforated geometry with an arched surround.',
    image: '/images/projects/grand-arcade-facade-complex/mashrabiya-entry-screen-doorway-001.jpg',
    alt: 'GFRC mashrabiya entry screen framing a doorway opening',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'mashrabiya-entry-screen-doorway-002',
    projectSlug: 'mashrabiya-entry-screens',
    title: 'Mashrabiya Entry Screen, Second View',
    city: 'Saudi Arabia',
    year: '',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Mashrabiya', 'Entry Screen'],
    description:
      'Second view of a GFRC/GRC mashrabiya entry screen, showing the full screen panel geometry and integration with the surrounding facade.',
    image: '/images/projects/grand-arcade-facade-complex/mashrabiya-entry-screen-doorway-002.jpg',
    alt: 'Second view of a GFRC mashrabiya entry screen panel with full geometry',
    status: 'Public Safe',
    approvedForWeb: true,
  },

  // Religious Facility Architectural Details
  {
    id: 'mosque-architectural-details-main-entrance-001', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
    title: 'Religious Facility Main Entrance',
    city: 'Saudi Arabia',
    year: '',
    category: 'Grand Entrances',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Grand Entrance', 'Arch', 'Decorative Elements'],
    description:
      'Main entrance facade of a religious facility featuring GFRC/GRC arched openings, decorative capitals, and ornamental surface detailing.',
    image: '/images/projects/grand-arcade-facade-complex/mosque-architectural-details-main-entrance-001.jpg',
    alt: 'Main entrance facade of a religious facility with GFRC arched elements and decorative detailing',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'mosque-architectural-details-dome-interior-001', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
    title: 'Dome Interior Architectural Detail',
    city: 'Saudi Arabia',
    year: '',
    category: 'Domes',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Dome', 'Interior', 'Decorative Finish'],
    description:
      'Interior dome architectural detail for a religious facility, showing GFRC/GRC surface treatment and decorative geometric finish.',
    image: '/images/projects/grand-arcade-facade-complex/mosque-architectural-details-dome-interior-001.jpg',
    alt: 'Interior dome architectural detail with GFRC decorative geometric finish',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'mosque-architectural-details-lattice-window-001', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
    title: 'Lattice Window Screen Detail',
    city: 'Saudi Arabia',
    year: '',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Mashrabiya', 'Lattice Window', 'Geometric Pattern'],
    description:
      'GFRC/GRC lattice window screen with traditional geometric pattern for a religious facility, providing filtered natural light.',
    image: '/images/projects/grand-arcade-facade-complex/mosque-architectural-details-lattice-window-001.jpg',
    alt: 'GFRC lattice window screen with traditional geometric pattern on a religious facility',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'mosque-architectural-details-screen-windows-001', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
    title: 'Screen Windows, Geometric Pattern',
    city: 'Saudi Arabia',
    year: '',
    category: 'Mashrabiya',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Screen Windows', 'Geometric Lattice'],
    description:
      'Row of GFRC/GRC screen window panels with traditional geometric lattice pattern on a religious facility facade.',
    image: '/images/projects/grand-arcade-facade-complex/mosque-architectural-details-screen-windows-001.jpg',
    alt: 'Row of GFRC screen window panels with geometric lattice pattern',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'mosque-architectural-details-minaret-001', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
    title: 'Minaret Architectural Detail',
    city: 'Saudi Arabia',
    year: '',
    category: 'Architectural Details',
    packageType: 'Heritage & Regional Package',
    components: ['GFRC', 'Minaret', 'Architectural Detail'],
    description:
      'GFRC/GRC architectural detail of a minaret structure for a religious facility, showing decorative surface banding and profile elements.',
    image: '/images/projects/grand-arcade-facade-complex/mosque-architectural-details-minaret-001.jpg',
    alt: 'GFRC architectural detail of a minaret with decorative surface banding',
    status: 'Public Safe',
    approvedForWeb: true,
  },

  // Urban High-Rise Tower
  {
    id: 'urban-high-rise-tower-full-height-view-001',
    projectSlug: 'urban-high-rise-tower',
    title: 'High-Rise Tower, Full Height View',
    city: 'Saudi Arabia',
    year: '',
    category: 'High-Rise / Towers',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Tower Cladding', 'High-Rise Facade'],
    description:
      'Full-height view of an urban high-rise tower with GFRC/GRC facade cladding applied across the entire building elevation.',
    image: '/images/projects/grand-arcade-facade-complex/urban-high-rise-tower-full-height-view-001.jpg',
    alt: 'Full-height view of an urban high-rise tower with GFRC facade cladding',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'urban-high-rise-tower-corner-view-001',
    projectSlug: 'urban-high-rise-tower',
    title: 'High-Rise Tower, Corner View',
    city: 'Saudi Arabia',
    year: '',
    category: 'High-Rise / Towers',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Tower Cladding', 'Corner Detail'],
    description:
      'Corner elevation of an urban high-rise tower, showing GFRC/GRC cladding continuity across the building corner and vertical reveal lines.',
    image: '/images/projects/grand-arcade-facade-complex/urban-high-rise-tower-corner-view-001.jpg',
    alt: 'Corner view of a high-rise tower with GFRC cladding and reveal lines',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'urban-high-rise-tower-corner-view-002',
    projectSlug: 'urban-high-rise-tower',
    title: 'High-Rise Tower, Corner View 2',
    city: 'Saudi Arabia',
    year: '',
    category: 'High-Rise / Towers',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Tower Cladding', 'Corner Detail'],
    description:
      'Second corner view of the urban high-rise tower, showing the GFRC/GRC facade system from a different angle.',
    image: '/images/projects/grand-arcade-facade-complex/urban-high-rise-tower-corner-view-002.jpg',
    alt: 'Second corner view of a high-rise tower with GFRC facade cladding system',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'urban-high-rise-tower-street-view-001',
    projectSlug: 'urban-high-rise-tower',
    title: 'High-Rise Tower, Street View',
    city: 'Saudi Arabia',
    year: '',
    category: 'High-Rise / Towers',
    packageType: 'Complete Facade Package',
    components: ['GFRC', 'Tower Cladding', 'Street Level'],
    description:
      'Street-level view of an urban high-rise tower with GFRC/GRC cladding, showing the base facade treatment and podium elements.',
    image: '/images/projects/grand-arcade-facade-complex/urban-high-rise-tower-street-view-001.jpg',
    alt: 'Street-level view of a high-rise tower showing GFRC cladding and podium facade',
    status: 'Public Safe',
    approvedForWeb: true,
  },

  // Architectural Samples & Mockups
  {
    id: 'architectural-sample-arched-screen-panel-001',
    projectSlug: 'architectural-samples',
    title: 'Arched Screen Panel Sample',
    city: 'Saudi Arabia',
    year: '',
    category: 'Samples & Mockups',
    packageType: 'Custom Architectural Package',
    components: ['GFRC', 'Arched Screen', 'Sample Panel'],
    description:
      'GFRC/GRC sample arched screen panel produced as an architectural mockup, demonstrating screen geometry, arch profile, and surface finish.',
    image: '/images/projects/grand-arcade-facade-complex/architectural-sample-arched-screen-panel-001.jpg',
    alt: 'GFRC sample arched screen panel showing screen geometry and surface finish',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'architectural-sample-balustrade-001',
    projectSlug: 'architectural-samples',
    title: 'Balustrade Sample',
    city: 'Saudi Arabia',
    year: '',
    category: 'Samples & Mockups',
    packageType: 'Custom Architectural Package',
    components: ['GFRC', 'Balustrade', 'Sample'],
    description:
      'GFRC/GRC balustrade sample element produced as an architectural mockup, showing profile, balusters, and top rail detail.',
    image: '/images/projects/grand-arcade-facade-complex/architectural-sample-balustrade-001.jpg',
    alt: 'GFRC balustrade sample showing profile and baluster detail',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'architectural-sample-frame-panel-001',
    projectSlug: 'architectural-samples',
    title: 'Frame Panel Sample',
    city: 'Saudi Arabia',
    year: '',
    category: 'Samples & Mockups',
    packageType: 'Custom Architectural Package',
    components: ['GFRC', 'Frame Panel', 'Sample'],
    description:
      'GFRC/GRC architectural frame panel sample produced as a mockup, demonstrating panel proportion, moulded frame detail, and surface finish.',
    image: '/images/projects/grand-arcade-facade-complex/architectural-sample-frame-panel-001.jpg',
    alt: 'GFRC frame panel sample showing moulded frame detail and surface finish',
    status: 'Public Safe',
    approvedForWeb: true,
  },

  // ── Landmark Mosque · Al Aziziyah, Makkah ──
  {
    id: 'landmark-mosque-aziziyah-makkah-hero-001',
    projectSlug: 'landmark-mosque-aziziyah',
    title: 'Landmark Mosque – Al Aziziyah, Makkah — Exterior Elevation',
    city: 'Makkah',
    year: '',
    category: 'Domes',
    packageType: 'Mosque GFRC/GRC Package',
    components: ['GFRC', 'GRC', 'Domes', 'Minarets', 'Religious Architecture'],
    description:
      'Ornate GFRC/GRC mosque architecture featuring decorative domes, minarets, and carved façade ornamentation.',
    image:
      '/images/projects/landmark-mosque-aziziyah-makkah-gfrc-package/01-hero/landmark-mosque-aziziyah-makkah-hero-01.jpg',
    alt: 'Landmark Mosque in Al Aziziyah, Makkah, with ornate GFRC domes and minarets',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'landmark-mosque-aziziyah-makkah-minaret-detail-001',
    projectSlug: 'landmark-mosque-aziziyah',
    title: 'Landmark Mosque – Al Aziziyah, Makkah — Minaret Detail',
    city: 'Makkah',
    year: '',
    category: 'Architectural Details',
    packageType: 'Mosque GFRC/GRC Package',
    components: ['GFRC', 'GRC', 'Minarets', 'Decorative Detail'],
    description:
      'Ornate GFRC/GRC minaret detailing with carved decorative surfaces and Islamic ornamentation.',
    image:
      '/images/projects/landmark-mosque-aziziyah-makkah-gfrc-package/03-minaret-details/landmark-mosque-aziziyah-makkah-minaret-detail-01.jpg',
    alt: 'Ornate GFRC minaret detail at Landmark Mosque, Al Aziziyah, Makkah',
    status: 'Public Safe',
    approvedForWeb: true,
  },
  {
    id: 'landmark-mosque-aziziyah-makkah-dome-detail-001',
    projectSlug: 'landmark-mosque-aziziyah',
    title: 'Landmark Mosque – Al Aziziyah, Makkah — Dome & Ornament Detail',
    city: 'Makkah',
    year: '',
    category: 'Domes',
    packageType: 'Mosque GFRC/GRC Package',
    components: ['GFRC', 'GRC', 'Domes', 'Decorative Detail'],
    description:
      'Decorative GFRC/GRC mosque dome with ornamental relief and refined exterior finishing.',
    image:
      '/images/projects/landmark-mosque-aziziyah-makkah-gfrc-package/04-dome-details/landmark-mosque-aziziyah-makkah-dome-detail-01.jpg',
    alt: 'Decorative GFRC dome detail at Landmark Mosque, Al Aziziyah, Makkah',
    status: 'Public Safe',
    approvedForWeb: true,
  },

  // ── Mosque Domes & Minaret · GFRC/GRC ──────────────────────────────────────────
  {
    id: 'mosque-domes-minaret-gfrc-hero-001',
    projectSlug: 'mosque-domes-minaret',
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
    approvedForWeb: true,
  },
  {
    id: 'mosque-domes-minaret-gfrc-dome-detail-001',
    projectSlug: 'mosque-domes-minaret',
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
    approvedForWeb: true,
  },
  {
    id: 'mosque-domes-minaret-gfrc-minaret-facade-001',
    projectSlug: 'mosque-domes-minaret',
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
    approvedForWeb: true,
  },
  {
    id: 'mosque-domes-minaret-gfrc-facade-overview-001',
    projectSlug: 'mosque-domes-minaret',
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
    approvedForWeb: true,
  },

  // ── Heritage GFRC/GRC Façade ───────────────────────────────────────────────────
  {
    id: 'heritage-gfrc-facade-hero-001', // UNGROUPED — hidden from gallery; see docs/gallery-ungrouped-backlog.md
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
    approvedForWeb: true,
  },
]
