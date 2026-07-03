import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/columns-visuals'
import { columnsContentAr } from '@/content/ar/systems/columns'

// Arabic mirror of the columns & capitals system page. Renders the SAME shared
// component as the English page (SystemEnhancedLayout), driven by the Arabic
// content. RTL comes from ArLayout's dir="rtl"; the layout uses logical spacing
// so it mirrors automatically. Not publicly linked yet.

export const metadata: Metadata = {
  title: columnsContentAr.title,
  description: columnsContentAr.heroDescription,
  keywords: [
    'أعمدة GFRC',
    'تيجان أعمدة معمارية',
    'أعمدة خرسانية مسلحة بالألياف الزجاجية',
    'أعمدة وقواعد معمارية',
    'أعمدة مداخل وأروقة',
    'دُرّاكة',
    'مصنع دراكة للصناعة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: columnsContentAr.title,
    description: columnsContentAr.heroDescription,
  },
}

export default function ArColumnsPage() {
  return (
    <SystemEnhancedLayout
      data={columnsContentAr}
      sampleDrawing={<SampleDrawing />}
      systemContext={<SystemContext />}
      locale="ar"
    />
  )
}
