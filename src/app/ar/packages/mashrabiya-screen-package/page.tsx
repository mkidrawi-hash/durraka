import type { Metadata } from 'next'
import { MashrabiyaScreenPackageClient } from '@/app/packages/mashrabiya-screen-package/client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'
import { mashrabiyaScreenContentAr } from '@/content/ar/packages/mashrabiya-screen-package'

export const metadata: Metadata = {
  title: `${mashrabiyaScreenContentAr.title} — شاشات GFRC / GRC للخصوصية والتظليل`,
  description: mashrabiyaScreenContentAr.heroDescription,
  keywords: [
    'باقة شاشات مشربية GFRC',
    'مشربية GRC',
    'شاشات خصوصية',
    'تظليل شمسي',
    'نمط هندسي',
    'مصنع دراكة للصناعة',
    'دُرّاكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: mashrabiyaScreenContentAr.title,
    description: mashrabiyaScreenContentAr.heroDescription,
  },
}

export default function ArMashrabiyaScreenPackagePage() {
  return (
    <>
      <MashrabiyaScreenPackageClient locale="ar" />
      <StickyMobileCTA locale="ar" />
    </>
  )
}
