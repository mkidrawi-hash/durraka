import type { Metadata } from 'next'
import AboutView from '@/components/about/AboutView'
import { aboutContent } from '@/content/en/about'

export const metadata: Metadata = {
  title: aboutContent.metaTitle,
  description: aboutContent.metaDescription,
}

export default function AboutPage() {
  return <AboutView locale="en" />
}
