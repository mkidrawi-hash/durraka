import type { Metadata } from 'next'
import AboutView from '@/components/about/AboutView'
import { aboutContentAr } from '@/content/ar/about'

export const metadata: Metadata = {
  title: aboutContentAr.metaTitle,
  description: aboutContentAr.metaDescription,
}

export default function ArAboutPage() {
  return <AboutView locale="ar" />
}
