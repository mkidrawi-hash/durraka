import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/mashrabiya-visuals'
import { mashrabiyaContent } from '@/content/en/systems/mashrabiya'

export const metadata: Metadata = {
  title: 'Mashrabiya Screens System — GFRC/GRC Patterned Screens',
  description:
    'GFRC/GRC patterned mashrabiya screens designed for privacy, shading, identity, and architectural façade expression. Modern and heritage-inspired pattern design. Manufactured in Saudi Arabia.',
}

export default function MashrabiyaPage() {
  return (
    <SystemEnhancedLayout data={mashrabiyaContent} sampleDrawing={<SampleDrawing />} systemContext={<SystemContext />} locale="en" />
  )
}
