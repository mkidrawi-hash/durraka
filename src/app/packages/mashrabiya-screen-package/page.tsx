import type { Metadata } from 'next'
import { MashrabiyaScreenPackageClient } from './client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Mashrabiya Screen Package — GFRC/GRC Screens & Privacy Facades',
  description:
    'Project-specific GFRC/GRC mashrabiya screens for privacy, shading, and architectural identity. Pattern design, window screens, decorative frames, and entrance panels manufactured in Saudi Arabia.',
}

export default function MashrabiyaScreenPackagePage() {
  return (
    <>
      <MashrabiyaScreenPackageClient locale="en" />
      <StickyMobileCTA locale="en" />
    </>
  )
}
