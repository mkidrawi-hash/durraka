import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/custom-visuals'
import { customContent } from '@/content/en/systems/custom'

export const metadata: Metadata = {
  title: 'Custom Decorative Elements System — GFRC/GRC Ornamental Architecture',
  description:
    'Project-specific GFRC/GRC decorative elements for entrances, façades, frames, arches, panels, and architectural features. Custom motifs and heritage-inspired ornamental manufacturing.',
}

export default function CustomPage() {
  return (
    <SystemEnhancedLayout data={customContent} sampleDrawing={<SampleDrawing />} systemContext={<SystemContext />} locale="en" />
  )
}
