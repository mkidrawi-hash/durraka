import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/domes-visuals'
import { domesContentAr } from '@/content/ar/systems/domes'

export const metadata: Metadata = {
  title: domesContentAr.title,
  description: domesContentAr.heroDescription,
  keywords: [
    'قباب GFRC',
    'أقبية GFRC',
    'القباب والأقبية',
    'قباب معمارية من الخرسانة المسلحة بالألياف الزجاجية',
    'قباب المساجد',
    'رقبة القبة',
    'دُرّاكة',
    'مصنع دراكة للصناعة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: domesContentAr.title,
    description: domesContentAr.heroDescription,
  },
}

export default function ArDomesPage() {
  return (
    <SystemEnhancedLayout
      data={domesContentAr}
      sampleDrawing={<SampleDrawing />}
      systemContext={<SystemContext />}
      locale="ar"
    />
  )
}
