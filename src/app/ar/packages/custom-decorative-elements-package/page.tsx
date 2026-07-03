import type { Metadata } from 'next'
import { CustomDecorativePackageClient } from '@/app/packages/custom-decorative-elements-package/client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'
import { customDecorativeContentAr } from '@/content/ar/packages/custom-decorative-elements-package'

export const metadata: Metadata = {
  title: `${customDecorativeContentAr.title} — ألواح GFRC / GRC زخرفية حسب الطلب`,
  description: customDecorativeContentAr.heroDescription,
  keywords: [
    'باقة عناصر زخرفية مخصصة GFRC',
    'ألواح زخرفية GRC',
    'عناصر مستوحاة من الخط العربي',
    'عناصر هوية',
    'إطارات معمارية مخصصة',
    'مصنع دراكة للصناعة',
    'دُرّاكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: customDecorativeContentAr.title,
    description: customDecorativeContentAr.heroDescription,
  },
}

export default function ArCustomDecorativeElementsPackagePage() {
  return (
    <>
      <CustomDecorativePackageClient locale="ar" />
      <StickyMobileCTA locale="ar" />
    </>
  )
}
