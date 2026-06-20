export type GalleryCategory =
  | 'Facade Cladding'
  | 'Domes'
  | 'Cornices'
  | 'Mashrabiya'
  | 'Columns & Capitals'
  | 'Decorative Elements'
  | 'Villa & Palace'
  | 'Heritage & Regional'
  | 'Landmark & Government'
  | 'Hospitality'

export const GALLERY_FILTERS = [
  'All',
  'Facade Cladding',
  'Domes',
  'Cornices',
  'Mashrabiya',
  'Columns & Capitals',
  'Decorative Elements',
  'Villa & Palace',
  'Heritage & Regional',
  'Landmark & Government',
  'Hospitality',
] as const

export type GalleryFilter = (typeof GALLERY_FILTERS)[number]

export interface GalleryImage {
  id: string
  title: string
  category: GalleryCategory
  city: string
  year: number
  tags: string[]
  description: string
  image: string | null
  publicSafe: true
}

// ─── Public-safe image registry ───────────────────────────────────────────────
// Rules: no client names, no exact project names, no exact areas or quantities,
// no contract values, no fixing or installation details, no anchors/brackets,
// no screws, no confidential drawings or shop drawing details.
// Only entries with publicSafe: true are rendered.

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'villa-facade-jeddah-2025-01',
    title: 'Private Villa Facade, Jeddah, 2025',
    category: 'Villa & Palace',
    city: 'Jeddah',
    year: 2025,
    tags: ['GRC', 'Facade Cladding', 'Residential'],
    description:
      'Full GRC facade cladding system including cornices, columns, and decorative panel elements for a private villa development.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'hospitality-facade-makkah-2025-01',
    title: 'Hospitality Facade, Makkah, 2025',
    category: 'Hospitality',
    city: 'Makkah',
    year: 2025,
    tags: ['GFRC', 'Cornices', 'Large-Scale'],
    description:
      'Decorative GFRC cornice and facade panel system for a hospitality development. Classical profiles with contemporary surface detailing.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'landmark-facade-riyadh-2025-01',
    title: 'Landmark Facade, Riyadh, 2025',
    category: 'Landmark & Government',
    city: 'Riyadh',
    year: 2025,
    tags: ['GRC', 'Columns', 'Landmark'],
    description:
      'Column and capital elements fabricated for a landmark building facade in Riyadh. Corinthian-style capitals with full entablature profiles.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'heritage-facade-makkah-region-2025-01',
    title: 'Heritage-Inspired Facade, Makkah Region, 2025',
    category: 'Heritage & Regional',
    city: 'Makkah Region',
    year: 2025,
    tags: ['GRC', 'Mashrabiya', 'Heritage'],
    description:
      'Heritage-inspired mashrabiya screen and arch system referencing traditional Saudi architectural forms in GRC.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'custom-components-jeddah-2025-01',
    title: 'Custom Architectural Components, Jeddah, 2025',
    category: 'Decorative Elements',
    city: 'Jeddah',
    year: 2025,
    tags: ['GFRC', 'Custom', 'Decorative'],
    description:
      'Bespoke GRC decorative components including medallions, keystones, and sculptural ornamental details for a mixed-use facade.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'dome-crown-jeddah-2024-01',
    title: 'Dome & Crown Elements, Jeddah, 2024',
    category: 'Domes',
    city: 'Jeddah',
    year: 2024,
    tags: ['GRC', 'Dome', 'Crown'],
    description:
      'Segmented GRC dome and decorative crown elements. Compound-curved segments precision-manufactured for seamless assembly.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'facade-cladding-riyadh-2024-01',
    title: 'Facade Cladding System, Riyadh, 2024',
    category: 'Facade Cladding',
    city: 'Riyadh',
    year: 2024,
    tags: ['GFRC', 'Cladding', 'Commercial'],
    description:
      'Large-format GFRC facade cladding panels for a commercial development. Uniform texture finish with integrated reveal lines.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'mashrabiya-screens-jeddah-2024-01',
    title: 'Mashrabiya Screen System, Jeddah, 2024',
    category: 'Mashrabiya',
    city: 'Jeddah',
    year: 2024,
    tags: ['GRC', 'Mashrabiya', 'Geometric'],
    description:
      'Custom geometric mashrabiya screen panels with traditional hexagonal lattice patterns, cast in GFRC for precision and durability.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'cornice-profiles-makkah-2024-01',
    title: 'Cornice & Profile System, Makkah, 2024',
    category: 'Cornices',
    city: 'Makkah',
    year: 2024,
    tags: ['GRC', 'Cornice', 'Classical'],
    description:
      'Detailed classical cornice profiles and string course elements in GRC, including dentil moldings and fascia bands.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'columns-capitals-medina-2024-01',
    title: 'Columns & Capitals, Madinah, 2024',
    category: 'Columns & Capitals',
    city: 'Madinah',
    year: 2024,
    tags: ['GFRC', 'Columns', 'Classical'],
    description:
      'Full GFRC column assemblies including fluted shafts, Corinthian-style capitals, base profiles, and entablature members.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'villa-facade-taif-2024-01',
    title: 'Villa Facade Package, Taif, 2024',
    category: 'Villa & Palace',
    city: 'Taif',
    year: 2024,
    tags: ['GRC', 'Residential', 'Full Facade'],
    description:
      'Complete GRC villa facade package covering columns, cornices, arches, and decorative cladding panels.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'hospitality-cornices-makkah-2023-01',
    title: 'Hospitality Cornices, Makkah, 2023',
    category: 'Hospitality',
    city: 'Makkah',
    year: 2023,
    tags: ['GFRC', 'Cornices', 'Hospitality'],
    description:
      'Decorative GFRC cornice and facade profile systems for a large hospitality development in Makkah.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'heritage-dome-riyadh-2023-01',
    title: 'Heritage Dome, Riyadh, 2023',
    category: 'Domes',
    city: 'Riyadh',
    year: 2023,
    tags: ['GRC', 'Dome', 'Heritage'],
    description:
      'Heritage-inspired GRC dome structure with decorative drum, cornice ring, and finial. Ribbed profile referencing classical Islamic architecture.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'decorative-elements-jeddah-2023-01',
    title: 'Decorative Facade Elements, Jeddah, 2023',
    category: 'Decorative Elements',
    city: 'Jeddah',
    year: 2023,
    tags: ['GFRC', 'Decorative', 'Custom'],
    description:
      'Custom GFRC decorative elements including arched panel inserts, ornamental borders, and facade accent pieces.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'landmark-columns-makkah-2023-01',
    title: 'Landmark Columns, Makkah, 2023',
    category: 'Columns & Capitals',
    city: 'Makkah',
    year: 2023,
    tags: ['GRC', 'Columns', 'Landmark'],
    description:
      'Monumental-scale GRC column elements for a landmark entrance facade. Classical proportions with bespoke capital detailing.',
    image: null,
    publicSafe: true,
  },
  {
    id: 'facade-cladding-jeddah-2023-01',
    title: 'Residential Facade Cladding, Jeddah, 2023',
    category: 'Facade Cladding',
    city: 'Jeddah',
    year: 2023,
    tags: ['GFRC', 'Cladding', 'Residential'],
    description:
      'GFRC facade cladding panel system with integrated reveal and shadow lines for a residential development.',
    image: null,
    publicSafe: true,
  },
]
