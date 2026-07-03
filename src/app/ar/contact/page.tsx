import type { Metadata } from 'next'
import ContactView from '@/components/contact/ContactView'
import { getDictionary } from '@/content/dictionaries'

const dict = getDictionary('ar')

export const metadata: Metadata = {
  title: dict.contact.metaTitle,
  description: dict.contact.metaDescription,
  keywords: [
    'اتصل بدراكة',
    'مصنع دراكة للصناعة',
    'واجهات GFRC',
    'واجهات GRC',
    'دُرّاكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
  },
}

export default function ArContactPage() {
  return <ContactView locale="ar" />
}
