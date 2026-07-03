import type { Metadata } from 'next'
import CatalogView from '@/components/catalog/CatalogView'
import { catalogContentAr } from '@/content/ar/catalog'

export const metadata: Metadata = {
  title: catalogContentAr.metaTitle,
  description: catalogContentAr.metaDescription,
  keywords: [
    'كتالوج المنتجات',
    'كتالوج GFRC',
    'كتالوج GRC',
    'مصنع دراكة للصناعة',
    'دُرّاكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: catalogContentAr.metaTitle,
    description: catalogContentAr.metaDescription,
  },
}

export default function ArCatalogPage() {
  return <CatalogView locale="ar" />
}
