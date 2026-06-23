import type { Metadata } from 'next'
import { PackageDetailLayout } from '@/components/packages/PackageDetailLayout'
import type { PackagePageData } from '@/components/packages/PackageDetailLayout'
import { CustomDecorativeIllustration } from '@/components/packages/illustrations'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Custom Decorative Elements Package — Bespoke GFRC/GRC Panels | Durraka',
  description:
    'Bespoke GFRC/GRC decorative panels, calligraphy-inspired features, identity panels, special frames, and project-specific architectural details. Manufactured in Saudi Arabia.',
}

const data: PackagePageData = {
  title: 'Custom Decorative Elements Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Bespoke ornamental elements. Engineered in GFRC/GRC.',
  heroDescription:
    'Project-specific GFRC/GRC decorative panels, calligraphy-inspired features, identity elements, custom frames, and bespoke architectural details — manufactured to unique design drawings.',
  illustrativeArea: 'Approx. 500–2,000 m²',
  visibleComponents: [
    'Decorative panels',
    'Custom ornaments',
    'Identity features',
    'Calligraphy-inspired panels',
    'Special frames',
    'Bespoke facade details',
  ],
  HeroIllustration: CustomDecorativeIllustration,
  packageIntent:
    'This package is designed for projects that require bespoke decorative GFRC/GRC elements beyond standard facade cladding — custom ornamental panels, identity features, calligraphy-inspired surfaces, civic signage elements, and architecturally significant detail work. Each element is scoped from project-specific design drawings and confirmed during the technical review process. The package is appropriate for civic landmarks, cultural institutions, hospitality developments, and any project where the decorative architectural detail carries design intent and identity value.',
  suitableApplications: [
    'Civic landmarks and cultural institutions',
    'Hospitality and destination developments',
    'Religious and heritage facilities',
    'Government and institutional buildings',
    'Luxury residential and villa projects',
    'Mixed-use developments with identity features',
  ],
  components: [
    { label: 'Decorative panels — geometric or pattern-based' },
    { label: 'Calligraphy-inspired surface elements' },
    { label: 'Project identity and signage panels' },
    { label: 'Custom architectural frames and surrounds' },
    { label: 'Special ornamental details' },
    { label: 'Facade accent features' },
    { label: 'Civic or institutional identity elements', note: 'Neutral caption — no confidential project names' },
  ],
  designGuidanceAreas: [
    {
      title: 'Ornament Intent',
      body: 'The purpose and role of decorative elements within the facade — whether they serve as identity markers, pattern fields, focal points, or surface enrichment.',
    },
    {
      title: 'Pattern Scale Guidance',
      body: 'The size and density of the decorative geometry in relation to the panel dimensions, viewing distance, and the overall facade composition.',
    },
    {
      title: 'Identity Feature Placement',
      body: 'Location and prominence of identity panels or civic elements within the building composition — their scale, framing, and relationship to surrounding facade.',
    },
    {
      title: 'Custom Panel Coordination',
      body: 'How bespoke decorative panels integrate with standard cladding, framing elements, and facade joints — to resolve visible interfaces and edges cleanly.',
    },
    {
      title: 'Finish Selection Guidance',
      body: 'Finish direction for decorative surfaces — including contrast with background cladding, texture differentiation, and pigment or aggregate selection for visual impact.',
    },
  ],
  coordinationNotes: [
    'Project-specific design drawings, pattern files, or DXF references are required before any scope or pricing can be prepared — standard layouts cannot be used for bespoke elements.',
    'Decorative element scale, depth of relief, and integration method with the surrounding facade must be clearly defined in the drawing or specification.',
    'A clear breakdown of unique versus repeated panels and an approximate total quantity are needed to initiate technical review and pricing.',
    'Finish direction — contrast with background cladding, texture character, and pigment or aggregate selection — should be confirmed with visual references before sampling.',
    'Interface areas with framing elements, surrounding cladding, and structural support positions must be resolved in the drawing set before manufacture.',
    'Final scope and pricing depend entirely on project-specific submitted drawings — indicative pricing cannot be prepared without confirmed design documentation.',
  ],
  informationRequired: [
    'Project-specific design drawings or pattern files (DXF, PDF, or equivalent) — required before any scope can be confirmed',
    'Panel dimensions, depth of relief, and integration method with surrounding facade',
    'Breakdown of unique versus repeated panel types and approximate total quantity',
    'Facade elevations showing decorative element positions and framing context',
    'Design intent images, cultural references, or client mood board',
    'Preferred finish direction — contrast, texture, pigment, or aggregate specification',
    'Interface requirements with surrounding cladding and structural support',
    'Timeline, programme, and any special design or approval requirements',
  ],
}

export default function CustomDecorativeElementsPackagePage() {
  return (
    <>
      <PackageDetailLayout data={data} />
      <StickyMobileCTA />
    </>
  )
}
