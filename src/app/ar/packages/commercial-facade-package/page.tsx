import type { Metadata } from 'next'
import { CommercialFacadePackageClient } from '@/app/packages/commercial-facade-package/client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'
import { commercialFacadeContentAr } from '@/content/ar/packages/commercial-facade-package'

export const metadata: Metadata = {
  title: `${commercialFacadeContentAr.title} — تكسية GFRC / GRC للمباني متعددة الطوابق`,
  description: commercialFacadeContentAr.heroDescription,
  keywords: [
    'باقة واجهات تجارية GFRC',
    'تكسية واجهات GRC',
    'ألواح واجهات',
    'كرانيش',
    'إطارات نوافذ',
    'مصنع دراكة للصناعة',
    'دُرّاكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: commercialFacadeContentAr.title,
    description: commercialFacadeContentAr.heroDescription,
  },
}

export default function ArCommercialFacadePackagePage() {
  return (
    <>
      <CommercialFacadePackageClient locale="ar" />
      <StickyMobileCTA locale="ar" />
    </>
  )
}
