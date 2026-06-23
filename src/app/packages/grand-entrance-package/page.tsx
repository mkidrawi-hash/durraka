import type { Metadata } from 'next'
import { PackageDetailLayout } from '@/components/packages/PackageDetailLayout'
import type { PackagePageData } from '@/components/packages/PackageDetailLayout'
import { GrandEntranceIllustration } from '@/components/packages/illustrations'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Grand Entrance Package — GFRC/GRC Architectural Entrances | Durraka',
  description:
    'Monumental GFRC/GRC entrance systems for luxury villas, palaces, hotels, and landmark developments. Columns, arches, cornices, and custom architectural details.',
}

const data: PackagePageData = {
  title: 'Grand Entrance Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Monumental entrances. Engineered in GFRC/GRC.',
  heroDescription:
    'An integrated GFRC/GRC scope for landmark entrance gates and arrival facades — combining columns, capitals, arches, cornices, decorative frames, and cladding into a single precision-manufactured architectural package.',
  illustrativeArea: 'Approx. 1,200–3,500 m²',
  visibleComponents: [
    'Columns',
    'Capitals',
    'Arches',
    'Cornices',
    'Decorative panels',
    'Entrance cladding',
    'Mashrabiya / screen accents',
  ],
  HeroIllustration: GrandEntranceIllustration,
  packageIntent:
    'This package is designed for projects that demand architectural impact at the point of arrival. The focus is on creating a coordinated entrance composition — columns, arches, cornices, and feature panels — that reflects the architectural character of the development. Durraka engineers each entrance package from the submitted drawing set, confirming scope, dimensions, and component count before manufacture. The final delivery is a precision-cast GFRC/GRC system aligned to the approved design intent.',
  suitableApplications: [
    'Luxury villas and private residences',
    'Royal palaces and government buildings',
    'Hotels and hospitality developments',
    'Gated compounds and master plans',
    'Commercial landmarks and mixed-use towers',
    'Heritage and culturally inspired projects',
    'Institutional and civic complexes',
  ],
  components: [
    { label: 'GFRC/GRC columns' },
    { label: 'Capitals' },
    { label: 'Decorative frames and surrounds' },
    { label: 'Cornices and profile bands' },
    { label: 'Arches and keystone details' },
    { label: 'Mashrabiya or screen panels', note: 'When required by design' },
    { label: 'Domes or decorative crowns', note: 'When required by design' },
    { label: 'Custom architectural details' },
  ],
  designGuidanceAreas: [
    {
      title: 'Entrance Composition Guidance',
      body: 'Overall proportions, symmetry axis, and the relationship between the central arch, flanking columns, and wing elements.',
    },
    {
      title: 'Column & Arch Coordination',
      body: 'Column height, shaft diameter, capital style, and arch geometry — coordinated to achieve the intended scale and visual weight.',
    },
    {
      title: 'Cornice & Profile Alignment',
      body: 'Cornice positions, profile depths, and horizontal bands that tie the entrance composition to the flanking wing elevations.',
    },
    {
      title: 'Feature Panel Placement',
      body: 'Location, scale, and integration of decorative panels, screen elements, and ornamental features within the overall gate composition.',
    },
    {
      title: 'Finish Selection Guidance',
      body: 'Finish direction for the entrance composition — including contrast between main elements, decorative details, and background cladding.',
    },
  ],
  coordinationNotes: [
    'Full entrance elevation drawing — with column positions, arch geometry, gate span dimensions, and symmetry axis — should be submitted before scope confirmation.',
    'Flanking wing elevations and boundary wall integration drawings should be included to allow the full entrance composition to be scoped accurately.',
    'Component count — columns, arch elements, cornice runs, and decorative panels — helps define the technical review scope and pricing approach.',
    'Finish direction for each element type (columns, arch, cornice, panels) should be agreed and referenced before sampling begins.',
    'Interface areas with gate metalwork, civil base works, security systems, and lighting should be identified early to avoid scope gaps.',
    'Final scope depends on approved entrance drawings and the confirmed design intent — partial drawings will result in an indicative scope only.',
  ],
  informationRequired: [
    'Full entrance elevation drawing with column positions, arch geometry, and gate span dimensions',
    'Flanking wing and boundary wall elevations for interface confirmation',
    'Column height, shaft diameter, and capital style reference',
    'Approximate quantities of all component types (columns, arches, cornices, panels)',
    'Design intent images or cultural reference imagery',
    'Preferred finish direction for each element type',
    'Interface requirements with metalwork, civil works, and security systems',
    'Timeline, programme, and consultant or client requirements',
  ],
}

export default function GrandEntrancePackagePage() {
  return (
    <>
      <PackageDetailLayout data={data} />
      <StickyMobileCTA />
    </>
  )
}
