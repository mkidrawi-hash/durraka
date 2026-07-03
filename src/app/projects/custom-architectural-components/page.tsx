import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPackageBySlug } from '@/lib/project-packages'
import { PackageDetailPage } from '@/components/projects/PackageDetailPage'
import { INFOGRAPHIC_CARDS, GUIDANCE_LIBRARY } from '@/lib/package-content'

const PKG = getPackageBySlug('custom-architectural-components')

export const metadata: Metadata = {
  title: 'Custom Architectural Components — GRC/GFRC Package',
  description: PKG?.shortDescription ?? '',
}

const COMPONENTS = [INFOGRAPHIC_CARDS.cornice, INFOGRAPHIC_CARDS.columns]

const GUIDANCE = [GUIDANCE_LIBRARY.cornice, GUIDANCE_LIBRARY.columns]

export default function CustomArchitecturalComponentsPage() {
  if (!PKG) notFound()
  return <PackageDetailPage data={PKG} components={COMPONENTS} guidance={GUIDANCE} />
}
