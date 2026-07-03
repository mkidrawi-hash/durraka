import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/custom-visuals'
import { customContentAr } from '@/content/ar/systems/custom'

export const metadata: Metadata = {
  title: customContentAr.title,
  description: customContentAr.heroDescription,
  keywords: [
    'عناصر زخرفية مخصصة GFRC',
    'عناصر زخرفية GRC',
    'زخارف معمارية مخصصة',
    'مداخل وأقواس زخرفية',
    'ألواح زخرفية معمارية',
    'دُرّاكة',
    'مصنع دراكة للصناعة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: customContentAr.title,
    description: customContentAr.heroDescription,
  },
}

export default function ArCustomPage() {
  return (
    <SystemEnhancedLayout
      data={customContentAr}
      sampleDrawing={<SampleDrawing />}
      systemContext={<SystemContext />}
      locale="ar"
    />
  )
}
