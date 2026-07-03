import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/facade-cladding-visuals'
import { getDictionary } from '@/content/dictionaries'

// Reference implementation of the i18n foundation: the Arabic façade page renders
// the SAME shared component as the English page (SystemEnhancedLayout), driven by
// the Arabic dictionary. RTL comes from ArLayout's dir="rtl"; the layout uses
// logical spacing so it mirrors automatically. Not publicly linked yet.
const dict = getDictionary('ar')

export const metadata: Metadata = {
  title: dict.facadeCladding.title,
  description: dict.facadeCladding.heroDescription,
  keywords: [
    'تكسية واجهات GFRC',
    'تكسية واجهات GRC',
    'ألواح خرسانية معمارية',
    'واجهات مسلحة بالألياف الزجاجية',
    'كرانيش GFRC',
    'دُرّاكة',
    'مصنع دراكة للصناعة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: dict.facadeCladding.title,
    description: dict.facadeCladding.heroDescription,
  },
}

export default function ArFacadeCladdingPage() {
  return (
    <SystemEnhancedLayout
      data={dict.facadeCladding}
      sampleDrawing={<SampleDrawing />}
      systemContext={<SystemContext />}
      locale="ar"
    />
  )
}
