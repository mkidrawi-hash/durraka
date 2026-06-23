import type { Metadata } from 'next'
import { GrandEntrancePackageClient } from './client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Grand Entrance Package — GFRC/GRC Architectural Entrances | Durraka',
  description:
    'Monumental GFRC/GRC entrance systems for luxury villas, palaces, hotels, and landmark developments. Columns, arches, cornices, and custom architectural details.',
}

export default function GrandEntrancePackagePage() {
  return (
    <>
      <GrandEntrancePackageClient />
      <StickyMobileCTA />
    </>
  )
}
