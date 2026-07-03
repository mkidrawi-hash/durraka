import type { Metadata } from 'next'
import CatalogView from '@/components/catalog/CatalogView'
import { catalogContent } from '@/content/en/catalog'

export const metadata: Metadata = {
  title: catalogContent.metaTitle,
  description: catalogContent.metaDescription,
}

export default function CatalogPage() {
  return <CatalogView locale="en" />
}
