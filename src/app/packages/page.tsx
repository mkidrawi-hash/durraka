import type { Metadata } from 'next'
import PackagesIndexView from '@/components/packages/PackagesIndexView'
import { packagesContent } from '@/content/en/packages'

export const metadata: Metadata = {
  title: packagesContent.index.metaTitle,
  description: packagesContent.index.metaDescription,
}

export default function PackagesPage() {
  return <PackagesIndexView locale="en" />
}
