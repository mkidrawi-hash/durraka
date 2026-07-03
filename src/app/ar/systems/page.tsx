import type { Metadata } from 'next'
import SystemsIndexView from '@/components/systems/SystemsIndexView'
import { getDictionary } from '@/content/dictionaries'

const dict = getDictionary('ar')

export const metadata: Metadata = {
  title: dict.systemsIndex.metaTitle,
  description: dict.systemsIndex.metaDescription,
  keywords: [
    'مكوّنات GFRC',
    'مكوّنات GRC',
    'تكسية واجهات',
    'مشربية',
    'قباب',
    'كرانيش',
    'أعمدة',
    'مصنع دراكة للصناعة',
    'دُرّاكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: dict.systemsIndex.metaTitle,
    description: dict.systemsIndex.metaDescription,
  },
}

export default function ArSystemsPage() {
  return <SystemsIndexView locale="ar" />
}
