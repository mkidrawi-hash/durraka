import type { Metadata } from 'next'
import { PackageDetailLayout } from '@/components/packages/PackageDetailLayout'
import type { PackagePageData } from '@/components/packages/PackageDetailLayout'
import { DomesCornicesIllustration } from '@/components/packages/illustrations'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Domes & Cornices Package — GFRC/GRC Heritage Architecture | Durraka',
  description:
    'GFRC/GRC domes, cornices, mouldings, and ornamental profiles for religious, hospitality, and heritage-inspired projects. Precision-manufactured in Saudi Arabia.',
}

const data: PackagePageData = {
  title: 'Domes & Cornices Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Domes, cornices, and heritage profiles. Engineered in GFRC/GRC.',
  heroDescription:
    'GFRC/GRC domes, cornices, mouldings, and ornamental profiles — manufactured to project-specific design intent for religious, hospitality, and heritage-inspired architectural projects.',
  illustrativeArea: 'Approx. 2,000–6,500 m²',
  visibleComponents: [
    'Dome elements',
    'Cornices',
    'Mouldings',
    'Arched openings',
    'Decorative facade bands',
    'Heritage profiles',
  ],
  HeroIllustration: DomesCornicesIllustration,
  packageIntent:
    'This package is designed for projects where the dome, cornice, and ornamental profile form a primary architectural element — mosques, hospitality developments, heritage-inspired institutions, and high-value residential projects. The focus is on geometric intent, proportion, cornice line positioning, and profile rhythm. Durraka works from architectural drawings and reference imagery to define the manufacturing scope, including drum geometry, dome segment details, profile cross-sections, and arched facade elements. Technical review confirms all dimensions and finish requirements before manufacture.',
  suitableApplications: [
    'Mosques and religious facilities',
    'Heritage-inspired hospitality projects',
    'Palaces and government buildings',
    'Luxury residential developments',
    'Cultural centres and museums',
    'Institutional and civic buildings',
  ],
  components: [
    { label: 'Dome elements and segments' },
    { label: 'Cornice bands — primary and secondary' },
    { label: 'Mouldings and profile sections' },
    { label: 'Arched openings and reveals' },
    { label: 'Decorative facade bands' },
    { label: 'Heritage profiles and ornamental details' },
    { label: 'Drum and lantern elements', note: 'Where required by design' },
  ],
  designGuidanceAreas: [
    {
      title: 'Dome Geometry Intent',
      body: 'Dome form — spherical, onion, or compound — rise-to-span ratio, segment count, and transition from drum to dome face, coordinated to architectural drawings.',
    },
    {
      title: 'Cornice Line Guidance',
      body: 'Cornice positions relative to floor levels, their projection depth, profile character, and visual relationship to arched openings below.',
    },
    {
      title: 'Profile Rhythm Guidance',
      body: 'Repetition frequency, spacing, and size variation of horizontal moulding profiles across the facade height — for visual coherence and classical proportion.',
    },
    {
      title: 'Heritage Proportion Guidance',
      body: 'Proportional relationships between dome, drum, cornice, arch, and wall elements — referencing the architectural style and cultural design intent.',
    },
    {
      title: 'Finish Selection Guidance',
      body: 'Finish direction for dome, cornice, and moulding elements — including contrast, texture differentiation, and finish appropriate for exterior heritage exposure.',
    },
  ],
}

export default function DomesCornicesPackagePage() {
  return (
    <>
      <PackageDetailLayout data={data} />
      <StickyMobileCTA />
    </>
  )
}
