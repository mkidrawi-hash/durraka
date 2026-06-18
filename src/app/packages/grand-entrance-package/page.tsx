import type { Metadata } from 'next'
import { PackageDetailLayout } from '@/components/packages/PackageDetailLayout'
import type { PackageDetailData } from '@/components/packages/PackageDetailLayout'
import { StickyMobileCTA } from './StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Grand Entrance Package — GFRC/GRC Architectural Entrances | Durraka',
  description:
    'Monumental GFRC/GRC entrance systems for luxury villas, palaces, hotels, and landmark developments. Precision-engineered columns, arches, cornices, and custom architectural details.',
}

const data: PackageDetailData = {
  hero: {
    eyebrow: 'Signature Package',
    title: 'Grand Entrance Package',
    subtitle: 'Monumental entrances. Engineered in GFRC/GRC.',
    description:
      'A comprehensive architectural package for luxury entrance systems — GFRC/GRC columns, arches, cornices, and custom details, all precision-manufactured to project drawings.',
    ctaLabel: 'Request Similar Package',
    ctaHref: '/request-quotation',
    heroImage: '/images/projects/grand-entrance-gfrc.png',
  },
  overview: {
    body: 'The Grand Entrance Package is designed for projects that demand architectural impact at the point of arrival. Durraka manufactures complete entrance systems in GFRC/GRC — columns, arches, cornices, decorative frames, and custom ornamental details — matched precisely to architectural intent and structural drawings. Each package is scoped from the submitted drawing set, reviewed by our engineering team, and manufactured to exacting standards for exterior installation.',
    suitedFor: [
      'Luxury villas and private residences',
      'Royal palaces and government buildings',
      'Hotels and hospitality developments',
      'Gated compounds and master plans',
      'Commercial landmarks and mixed-use towers',
      'Heritage and culturally inspired projects',
    ],
  },
  components: [
    { label: 'GFRC/GRC columns' },
    { label: 'Decorative frames and surrounds' },
    { label: 'Cornices and profile bands' },
    { label: 'Arches and keystone details' },
    { label: 'Mashrabiya or patterned panels' },
    { label: 'Domes or decorative crowns', note: 'When required by design' },
    { label: 'Custom architectural details' },
  ],
  requiredDocs: [
    {
      label: 'Architectural drawings',
      description:
        'Plans, elevations, and entrance layout drawings showing overall composition and dimensions.',
    },
    {
      label: 'Elevations',
      description:
        'Exterior elevation drawings showing the entrance facade, height, and architectural details.',
    },
    {
      label: 'Sections',
      description:
        'Cross-section drawings to understand depth, profile, and layering of components.',
    },
    {
      label: 'Structural drawings',
      description:
        'Drawings showing the structural system and support conditions relevant to the entrance opening.',
    },
    {
      label: 'BOQ / quantity schedule',
      description:
        'Bill of quantities or quantity schedule to establish scope. Our team can estimate from drawings when not available.',
    },
    {
      label: 'Reference images or design direction',
      description:
        'Mood boards, reference photographs, or notes on the intended architectural style and character.',
    },
  ],
  extractItems: [
    {
      source: 'Architectural drawings and elevations',
      extracts: 'Approximate entrance width, height, and overall opening dimensions.',
    },
    {
      source: 'BOQ / quantity schedule',
      extracts:
        'Scope quantities for each GFRC/GRC component — columns, arches, cornices, and details.',
    },
    {
      source: 'Elevations, sections, and reference images',
      extracts: 'Design style, façade intent, profile depth, and ornamental character.',
    },
    {
      source: 'Full drawing package',
      extracts:
        'Manufacturing requirements — profiles, finishes, tolerances, and production sequence.',
    },
  ],
  processSteps: [
    'Drawing review',
    'Concept and scope confirmation',
    'Shop drawings',
    'Mold preparation',
    'GFRC/GRC manufacturing',
    'Quality control',
    'Delivery and installation coordination',
  ],
  ctaHeadline:
    'Share your drawings and BOQ to receive a professional GFRC entrance quotation.',
  ctaSubline:
    'Our engineering team will review your package and return a detailed scope and pricing proposal.',
}

export default function GrandEntrancePackagePage() {
  return (
    <>
      <PackageDetailLayout data={data} />
      <StickyMobileCTA />
    </>
  )
}
