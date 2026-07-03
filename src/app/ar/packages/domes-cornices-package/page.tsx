import type { Metadata } from 'next'
import { DomesCornicesPackageClient } from '@/app/packages/domes-cornices-package/client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'
import { domesCornicesContentAr } from '@/content/ar/packages/domes-cornices-package'

export const metadata: Metadata = {
  title: `${domesCornicesContentAr.title} — قباب وكرانيش ومقاطع تراثية من GFRC / GRC`,
  description: domesCornicesContentAr.heroDescription,
  keywords: [
    'باقة القباب والكرانيش GFRC',
    'قباب GRC',
    'كرانيش',
    'مقاطع تراثية',
    'قوس مدخل',
    'تيجان أعمدة',
    'مصنع دراكة للصناعة',
    'دراكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: domesCornicesContentAr.title,
    description: domesCornicesContentAr.heroDescription,
  },
}

export default function ArDomesCornicesPackagePage() {
  return (
    <>
      <DomesCornicesPackageClient locale="ar" />
      <StickyMobileCTA locale="ar" />
    </>
  )
}
