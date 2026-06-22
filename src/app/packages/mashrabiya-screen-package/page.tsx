import type { Metadata } from 'next'
import { PackageDetailLayout } from '@/components/packages/PackageDetailLayout'
import type { PackagePageData } from '@/components/packages/PackageDetailLayout'
import { MashrabiyaScreenIllustration } from '@/components/packages/illustrations'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Mashrabiya Screen Package — GFRC/GRC Screens & Privacy Facades | Durraka',
  description:
    'Project-specific GFRC/GRC mashrabiya screens for privacy, shading, and architectural identity. Pattern design, window screens, decorative frames, and entrance panels manufactured in Saudi Arabia.',
}

const data: PackagePageData = {
  title: 'Mashrabiya Screen Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Project-specific screens. Privacy, shading, and identity.',
  heroDescription:
    'GFRC/GRC mashrabiya screens designed to project-specific patterns — integrating privacy control, solar shading, and decorative architectural identity into a single manufactured scope.',
  illustrativeArea: 'Approx. 1,500–4,500 m²',
  visibleComponents: [
    'Mashrabiya screens',
    'Window screens',
    'Façade cladding',
    'Decorative frames',
    'Entrance screen panels',
  ],
  HeroIllustration: MashrabiyaScreenIllustration,
  packageIntent:
    'This package is designed to help architects, consultants, and project teams define a coordinated mashrabiya screen scope for hospitality, residential, institutional, and commercial projects. The emphasis is on pattern scale, opening ratio, privacy performance, and integration with the building facade. Each screen panel is cast to project-specific pattern drawings and confirmed against the facade layout before manufacture. Finish direction and integration with surrounding cladding elements are coordinated during the technical review stage.',
  suitableApplications: [
    'Hospitality and hotel facades',
    'Residential and villa developments',
    'Heritage and traditional architecture',
    'Institutional and government buildings',
    'Commercial office buildings',
    'Religious and cultural facilities',
  ],
  components: [
    { label: 'Mashrabiya screen panels' },
    { label: 'Window screen inserts' },
    { label: 'Decorative entrance screens' },
    { label: 'Facade cladding panels' },
    { label: 'Decorative frames and surrounds' },
    { label: 'Custom pattern panels', note: 'Designed to project-specific drawings' },
  ],
  designGuidanceAreas: [
    {
      title: 'Pattern Scale Guidance',
      body: 'Geometric module size relative to panel dimensions and viewing distance — ensuring the pattern reads correctly at both close range and full-facade scale.',
    },
    {
      title: 'Opening Ratio Guidance',
      body: 'Ratio of solid to open area within each screen panel, balancing privacy requirements, daylight, ventilation, and structural integrity.',
    },
    {
      title: 'Privacy & Shading Intent',
      body: 'Orientation, depth, and layering of screen elements to achieve the intended privacy level and solar shading performance at different times of day.',
    },
    {
      title: 'Frame Integration Guidance',
      body: 'How screen panels integrate with surrounding cladding, framing elements, window openings, and facade joints — to resolve the visible edges cleanly.',
    },
    {
      title: 'Finish Selection Guidance',
      body: 'Finish direction for screen panels, including colour contrast with the background facade, light interaction, and maintenance considerations.',
    },
  ],
}

export default function MashrabiyaScreenPackagePage() {
  return (
    <>
      <PackageDetailLayout data={data} />
      <StickyMobileCTA />
    </>
  )
}
