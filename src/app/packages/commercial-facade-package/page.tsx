import type { Metadata } from 'next'
import { PackageDetailLayout } from '@/components/packages/PackageDetailLayout'
import type { PackagePageData } from '@/components/packages/PackageDetailLayout'
import { CommercialFacadeIllustration } from '@/components/packages/illustrations'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Commercial Façade Package — GFRC/GRC Cladding for Multi-Storey Buildings | Durraka',
  description:
    'GFRC/GRC facade cladding package for commercial buildings. Panels, cornices, window surrounds, vertical rhythm, and edge expression. Engineered and manufactured in Saudi Arabia.',
}

const data: PackagePageData = {
  title: 'Commercial Façade Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Multi-storey exterior cladding. Engineered in GFRC/GRC.',
  heroDescription:
    'A complete GFRC/GRC scope for commercial building exteriors — combining façade cladding panels, cornice lines, window surrounds, vertical rhythm elements, and edge expression into a single precision-manufactured package.',
  illustrativeArea: 'Approx. 8,000–14,000 m²',
  visibleComponents: [
    'Façade cladding panels',
    'Cornices / profiles',
    'Window surrounds',
    'Edge / corner expression',
    'Decorative vertical elements',
  ],
  HeroIllustration: CommercialFacadeIllustration,
  packageIntent:
    'This package is designed to help architects, consultants, developers, and project teams understand how GFRC/GRC components can be coordinated into a complete commercial facade cladding scope. The focus is on panel module rhythm, horizontal banding, window surround detailing, and controlled architectural expression. The final scope, dimensions, finishes, and engineering requirements are confirmed from submitted architectural drawings and project specifications during technical review.',
  suitableApplications: [
    'Multi-storey commercial offices',
    'Mixed-use developments',
    'Retail and hospitality towers',
    'Corporate headquarters',
    'Government administrative buildings',
    'Educational and institutional buildings',
  ],
  components: [
    { label: 'Façade cladding panels' },
    { label: 'Cornices and profile bands' },
    { label: 'Window surrounds and reveals' },
    { label: 'Edge and corner expression elements' },
    { label: 'Decorative vertical fins or elements' },
    { label: 'Custom profiles', note: 'Available on request — from architectural drawings' },
  ],
  designGuidanceAreas: [
    {
      title: 'Panel Layout Guidance',
      body: 'Module sizing, joint spacing, and horizontal banding to achieve the intended architectural rhythm across the full façade elevation.',
    },
    {
      title: 'Opening Surround Guidance',
      body: 'Reveal depth, surround width, and shadow-line detailing to complement window openings and glazing system interfaces.',
    },
    {
      title: 'Edge & Corner Guidance',
      body: 'Quoin details, return panels, and corner column expressions to resolve the building edges cleanly and consistently.',
    },
    {
      title: 'Finish Selection Guidance',
      body: 'Guidance on finish options appropriate for the commercial context, exposure conditions, and specified maintenance requirements.',
    },
    {
      title: 'Project Coordination Guidance',
      body: 'Interface areas with glazing, metalwork, and other facade elements should be defined early to allow full scope confirmation.',
    },
  ],
  coordinationNotes: [
    'Architectural elevations and sections should show panel module rhythm, joint spacing, and horizontal banding clearly across all facade levels.',
    'Window surround type, reveal depth, and interface with the glazing system should be confirmed before scope finalisation.',
    'Approximate facade areas, panel count, cornice run lengths, and repeated surround elements help define the pricing and technical review approach.',
    'Finish direction — colour, texture, and maintenance considerations for the commercial context — should be clarified with reference samples before work proceeds.',
    'Interface zones with glazing contractors, metalwork suppliers, and structural frame elements should be identified and coordinated early in the design process.',
    'Final scope and recommendations depend on approved architectural drawings, project specifications, and consultant or client requirements.',
  ],
  informationRequired: [
    'Architectural elevations for all facade faces showing panel layout and banding',
    'Panel module dimensions and joint spacing from the drawing set',
    'Window surround and reveal depth details',
    'Approximate facade area and element quantities',
    'Design intent images or finish references',
    'Preferred finish direction and colour specification (RAL/NCS)',
    'Project location, building height, and exposure category',
    'Timeline, programme, and consultant or client requirements',
  ],
}

export default function CommercialFacadePackagePage() {
  return (
    <>
      <PackageDetailLayout data={data} />
      <StickyMobileCTA />
    </>
  )
}
