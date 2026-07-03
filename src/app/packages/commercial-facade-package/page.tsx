import type { Metadata } from 'next'
import { CommercialFacadePackageClient } from './client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Commercial Façade Package — GFRC/GRC Cladding for Multi-Storey Buildings',
  description:
    'GFRC/GRC facade cladding package for commercial buildings. Panels, cornices, window surrounds, vertical rhythm, and edge expression. Engineered and manufactured in Saudi Arabia.',
}

export default function CommercialFacadePackagePage() {
  return (
    <>
      <CommercialFacadePackageClient locale="en" />
      <StickyMobileCTA locale="en" />
    </>
  )
}
