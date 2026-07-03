import type { Metadata } from 'next'
import { GrandEntrancePackageClient } from '@/app/packages/grand-entrance-package/client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'
import { grandEntranceContentAr } from '@/content/ar/packages/grand-entrance-package'

export const metadata: Metadata = {
  title: `${grandEntranceContentAr.title} — مداخل معمارية من GFRC / GRC`,
  description: grandEntranceContentAr.heroDescription,
  keywords: [
    'باقة مدخل كبير GFRC',
    'بوابات مداخل GRC',
    'أعمدة وتيجان',
    'أقواس',
    'كرانيش',
    'مصنع دراكة للصناعة',
    'دُرّاكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: grandEntranceContentAr.title,
    description: grandEntranceContentAr.heroDescription,
  },
}

export default function ArGrandEntrancePackagePage() {
  return (
    <>
      <GrandEntrancePackageClient locale="ar" />
      <StickyMobileCTA locale="ar" />
    </>
  )
}
