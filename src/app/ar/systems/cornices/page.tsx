import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/cornices-visuals'
import { cornicesContentAr } from '@/content/ar/systems/cornices'

export const metadata: Metadata = {
  title: cornicesContentAr.title,
  description: cornicesContentAr.heroDescription,
  keywords: [
    'كرانيش GFRC',
    'كرانيش GRC',
    'مقاطع معمارية',
    'حواجز الأسطح',
    'أشرطة أفقية معمارية',
    'مقاطع عتبات الشبابيك',
    'دُرّاكة',
    'مصنع دراكة للصناعة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: cornicesContentAr.title,
    description: cornicesContentAr.heroDescription,
  },
}

export default function ArCornicesPage() {
  return (
    <SystemEnhancedLayout
      data={cornicesContentAr}
      sampleDrawing={<SampleDrawing />}
      systemContext={<SystemContext />}
      locale="ar"
    />
  )
}
