import type { Metadata } from 'next'
import ContactView from '@/components/contact/ContactView'
import { contactContent } from '@/content/en/contact'

export const metadata: Metadata = {
  title: contactContent.metaTitle,
  description: contactContent.metaDescription,
}

export default function ContactPage() {
  return <ContactView locale="en" />
}
