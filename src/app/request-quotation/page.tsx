import type { Metadata } from 'next'
import RFQPageView from '@/components/rfq/RFQPageView'
import { rfqContent } from '@/content/en/rfq'

export const metadata: Metadata = {
  title: rfqContent.page.metaTitle,
  description: rfqContent.page.metaDescription,
}

export default function RequestQuotationPage() {
  return <RFQPageView locale="en" />
}
