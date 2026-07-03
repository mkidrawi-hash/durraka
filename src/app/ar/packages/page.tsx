import type { Metadata } from 'next'
import PackagesIndexView from '@/components/packages/PackagesIndexView'
import { getDictionary } from '@/content/dictionaries'

const dict = getDictionary('ar')

export const metadata: Metadata = {
  title: dict.packages.index.metaTitle,
  description: dict.packages.index.metaDescription,
  keywords: [
    'باقات GFRC',
    'باقات GRC',
    'تكسية واجهات',
    'مشربية',
    'قباب وكرانيش',
    'مداخل كبرى',
    'أعمدة وتيجان',
    'مصنع دراكة للصناعة',
    'دُرّاكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: dict.packages.index.metaTitle,
    description: dict.packages.index.metaDescription,
  },
}

export default function ArPackagesPage() {
  return <PackagesIndexView locale="ar" />
}
