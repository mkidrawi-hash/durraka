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
}

export default function ColumnsCapitalsPackagePage() {
  return (
    <>
      <PackageDetailLayout data={data} />
      <StickyMobileCTA />
    </>
  )
}
