import type { Metadata } from 'next'
import RFQPageView from '@/components/rfq/RFQPageView'
import { getDictionary } from '@/content/dictionaries'

const dict = getDictionary('ar')

export const metadata: Metadata = {
  title: dict.rfq.page.metaTitle,
  description: dict.rfq.page.metaDescription,
  keywords: [
    'طلب عرض سعر GFRC',
    'عرض سعر GRC',
    'تكسية واجهات معمارية',
    'مصنع دراكة للصناعة',
    'دُرّاكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: dict.rfq.page.metaTitle,
    description: dict.rfq.page.metaDescription,
  },
}

export default function ArRequestQuotationPage() {
  return <RFQPageView locale="ar" />
}
