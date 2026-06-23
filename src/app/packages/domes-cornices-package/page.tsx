import type { Metadata } from 'next'
import { DomesCornicesPackageClient } from './client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Domes & Cornices Package — GFRC/GRC Heritage Architecture | Durraka',
  description:
    'GFRC/GRC domes, cornices, mouldings, and ornamental profiles for religious, hospitality, and heritage-inspired projects. Precision-manufactured in Saudi Arabia.',
}

export default function DomesCornicesPackagePage() {
  return (
    <>
      <DomesCornicesPackageClient />
      <StickyMobileCTA />
    </>
  )
}
