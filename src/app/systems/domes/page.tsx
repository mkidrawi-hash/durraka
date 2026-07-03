import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/domes-visuals'
import { domesContent } from '@/content/en/systems/domes'

export const metadata: Metadata = {
  title: 'Domes & Vaults System — GFRC/GRC Architectural Domes',
  description:
    'Lightweight GFRC/GRC dome and vault elements for heritage-inspired, institutional, hospitality, and landmark architectural projects. Custom geometry and curvature. Manufactured in Saudi Arabia.',
}

export default function DomesPage() {
  return (
    <SystemEnhancedLayout data={domesContent} sampleDrawing={<SampleDrawing />} systemContext={<SystemContext />} locale="en" />
  )
}
