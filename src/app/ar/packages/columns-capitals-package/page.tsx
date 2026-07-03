import type { Metadata } from 'next'
import { ColumnsCapitalsPackageClient } from '@/app/packages/columns-capitals-package/client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'
import { columnsCapitalsContentAr } from '@/content/ar/packages/columns-capitals-package'

export const metadata: Metadata = {
  title: `${columnsCapitalsContentAr.title} — أعمدة وتيجان ودعامات جدارية من GFRC / GRC`,
  description: columnsCapitalsContentAr.heroDescription,
  keywords: [
    'باقة أعمدة وتيجان GFRC',
    'أعمدة GRC',
    'تيجان أعمدة',
    'دعامات جدارية',
    'أروقة أعمدة',
    'مصنع دراكة للصناعة',
    'دراكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: columnsCapitalsContentAr.title,
    description: columnsCapitalsContentAr.heroDescription,
  },
}

export default function ArColumnsCapitalsPackagePage() {
  return (
    <>
      <ColumnsCapitalsPackageClient locale="ar" />
      <StickyMobileCTA locale="ar" />
    </>
  )
}
