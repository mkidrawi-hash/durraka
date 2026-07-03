import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/facade-cladding-visuals'
import { facadeCladdingContent } from '@/content/en/systems/gfrc-grc-facade-cladding'

export const metadata: Metadata = {
  title: 'GFRC / GRC Façade Cladding System',
  description:
    'High-performance GFRC/GRC façade cladding system designed for durable, design-flexible, and timeless façades. Panel systems, cornice profiles, window surrounds, and custom architectural expression.',
}

export default function FacadeCladdingPage() {
  return (
    <SystemEnhancedLayout data={facadeCladdingContent} sampleDrawing={<SampleDrawing />} systemContext={<SystemContext />} />
  )
}
