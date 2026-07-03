import type { Metadata } from 'next'
import { SystemEnhancedLayout } from '@/components/systems/SystemEnhancedLayout'
import { SampleDrawing, SystemContext } from '@/components/systems/mashrabiya-visuals'
import { mashrabiyaContentAr } from '@/content/ar/systems/mashrabiya'

export const metadata: Metadata = {
  title: mashrabiyaContentAr.title,
  description: mashrabiyaContentAr.heroDescription,
  keywords: [
    'مشربيات GFRC',
    'مشربيات GRC',
    'شاشات مُخرّمة',
    'ساتر خصوصية معماري',
    'شاشات واجهات بنمط هندسي',
    'مشربيات تراثية',
    'دُرّاكة',
    'مصنع دراكة للصناعة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: mashrabiyaContentAr.title,
    description: mashrabiyaContentAr.heroDescription,
  },
}

export default function ArMashrabiyaPage() {
  return (
    <SystemEnhancedLayout
      data={mashrabiyaContentAr}
      sampleDrawing={<SampleDrawing />}
      systemContext={<SystemContext />}
      locale="ar"
    />
  )
}
