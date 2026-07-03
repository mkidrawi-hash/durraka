import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/columns-visuals'
import { columnsContent } from '@/content/en/systems/columns'

export const metadata: Metadata = {
  title: 'Columns & Capitals System — GFRC/GRC Architectural Columns',
  description:
    'Architectural GFRC/GRC columns, capitals, shafts, and bases for refined façade and entrance compositions. Custom column profiles for entrances, arcades, and heritage-inspired architecture.',
}

export default function ColumnsPage() {
  return (
    <SystemEnhancedLayout data={columnsContent} sampleDrawing={<SampleDrawing />} systemContext={<SystemContext />} locale="en" />
  )
}
