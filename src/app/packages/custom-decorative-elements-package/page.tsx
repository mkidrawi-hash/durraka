import type { Metadata } from 'next'
import { CustomDecorativePackageClient } from './client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Custom Decorative Elements Package — Bespoke GFRC/GRC Panels | Durraka',
  description:
    'Bespoke GFRC/GRC decorative panels, calligraphy-inspired features, identity panels, special frames, and project-specific architectural details. Manufactured in Saudi Arabia.',
}

export default function CustomDecorativeElementsPackagePage() {
  return (
    <>
      <CustomDecorativePackageClient />
      <StickyMobileCTA />
    </>
  )
}
