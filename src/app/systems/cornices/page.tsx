import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/cornices-visuals'
import { cornicesContent } from '@/content/en/systems/cornices'

export const metadata: Metadata = {
  title: 'Cornices & Profiles System — GFRC/GRC Architectural Profiles',
  description:
    'GFRC/GRC cornices, bands, sill profiles, parapets, and façade lines for refined architectural definition. Heritage and contemporary profile manufacturing in Saudi Arabia.',
}

export default function CornicesPage() {
  return (
    <SystemEnhancedLayout data={cornicesContent} sampleDrawing={<SampleDrawing />} systemContext={<SystemContext />} locale="en" />
  )
}
