import type { Metadata } from 'next'
import { PackageDetailLayout } from '@/components/packages/PackageDetailLayout'
import type { PackagePageData } from '@/components/packages/PackageDetailLayout'
import { ColumnsCapitalsIllustration } from '@/components/packages/illustrations'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Columns & Capitals Package — GFRC/GRC Colonnades & Pilasters | Durraka',
  description:
    'GFRC/GRC columns, capitals, bases, pilasters, and entrance colonnades for classical, heritage, and contemporary architectural projects. Kingdom-wide delivery.',
}

const data: PackagePageData = {
  title: 'Columns & Capitals Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Colonnades, pilasters, and capitals. Engineered in GFRC/GRC.',
  heroDescription:
    'GFRC/GRC columns, capitals, bases, and pilasters — manufactured to architectural drawings for classical, heritage, and contemporary building entrances, colonnades, and facades.',
  illustrativeArea: 'Approx. 800–2,500 m²',
  visibleComponents: [
    'Column shafts',
    'Capitals',
    'Bases',
    'Pilasters',
    'Arched colonnades',
    'Decorative panels',
  ],
  HeroIllustration: ColumnsCapitalsIllustration,
  packageIntent:
    'This package is designed for projects that feature columns, pilasters, or colonnades as a primary architectural element. The scope covers the full column assembly — base, shaft, and capital — along with associated pilasters, arched bays, and decorative panel elements. Each column is dimensioned and profiled from the submitted architectural drawings. Durraka works with the project team to confirm the capital style, shaft diameter, fluting or plain finish, and integration with surrounding entablature and base course elements.',
  suitableApplications: [
    'Entrance colonnades and porticos',
    'Luxury villas and private residences',
    'Hotels and hospitality developments',
    'Government and institutional buildings',
    'Heritage and classical architecture',
    'Cultural centres and mixed-use developments',
  ],
  components: [
    { label: 'Column shafts — round or square section' },
    { label: 'Capitals — classical or contemporary' },
    { label: 'Bases and plinths' },
    { label: 'Pilasters and flat column elements' },
    { label: 'Arched colonnade bays' },
    { label: 'Entablature and beam elements', note: 'Where required by design' },
    { label: 'Decorative spandrel panels' },
  ],
  designGuidanceAreas: [
    {
      title: 'Column Proportion Guidance',
      body: 'Height-to-diameter ratio, entasis profile, and column spacing — confirmed against the architectural drawings and the intended scale of the colonnade.',
    },
    {
      title: 'Capital Style Direction',
      body: 'Capital form — Doric, Ionic, Corinthian, or contemporary — and its proportional relationship to the shaft and entablature above.',
    },
    {
      title: 'Base & Shaft Coordination',
      body: 'Base moulding profile, plinth dimensions, and shaft continuity — including whether the shaft is plain, fluted, or receives a special surface treatment.',
    },
    {
      title: 'Colonnade Rhythm Guidance',
      body: 'Column spacing, intercolumniation, and the rhythm of arched or flat bays — coordinated to the building entrance, portal width, and facade alignment.',
    },
    {
      title: 'Finish Selection Guidance',
      body: 'Finish direction for column shaft, capital, and base — including smooth, stone-like, or textured finishes and colour coordination with adjacent facade elements.',
    },
  ],
  coordinationNotes: [
    'Column height, diameter, capital style, and shaft form (plain or fluted) should be confirmed in architectural drawings before technical review can proceed.',
    'Colonnade spacing, intercolumniation, and arched or flat bay geometry should be defined and shown clearly in the elevation drawings.',
    'Column count, pilaster positions, and the breakdown of unique versus repeated capital profiles help define the pricing and manufacturing scope.',
    'Finish direction for shaft, capital, and base — including fluting or smooth treatment, colour, and whether stone-like or textured — should be clarified before sampling.',
    'Interface areas with entablature, beam elements, structural supports, and foundation details should be identified and coordinated with the structural engineer.',
    'Column installation method, site access, and structural interface may affect component segmentation, weight, and delivery planning.',
  ],
  informationRequired: [
    'Architectural drawings showing column height, diameter, capital style, and shaft treatment',
    'Colonnade spacing, bay geometry, and intercolumniation dimensions',
    'Column count and pilaster positions across all affected facades',
    'Approximate quantities including unique versus repeated capital profiles',
    'Design intent images or classical reference imagery',
    'Preferred finish direction (smooth, fluted, stone-like, or textured)',
    'Structural interface requirements and installation method',
    'Timeline, programme, and consultant or client requirements',
  ],
}

export default function ColumnsCapitalsPackagePage() {
  return (
    <>
      <PackageDetailLayout data={data} />
      <StickyMobileCTA />
    </>
  )
}
