import type { Metadata } from 'next'
import SystemsIndexView from '@/components/systems/SystemsIndexView'
import { systemsIndexContent } from '@/content/en/systems-index'

export const metadata: Metadata = {
  title: systemsIndexContent.metaTitle,
  description: systemsIndexContent.metaDescription,
}

export default function SystemsPage() {
  return <SystemsIndexView locale="en" />
}
