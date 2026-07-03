import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPackageBySlug } from '@/lib/project-packages'
import { PackageDetailPage } from '@/components/projects/PackageDetailPage'
import { INFOGRAPHIC_CARDS, GUIDANCE_LIBRARY } from '@/lib/package-content'

const PKG = getPackageBySlug('villa-palace-architecture')

export const metadata: Metadata = {
  title: 'Villa & Palace Architecture — GRC/GFRC Package',
  description: PKG?.shortDescription ?? '',
}

const COMPONENTS = [INFOGRAPHIC_CARDS.columns, INFOGRAPHIC_CARDS.cornice, INFOGRAPHIC_CARDS.dome]

const GUIDANCE = [GUIDANCE_LIBRARY.columns, GUIDANCE_LIBRARY.cornice, GUIDANCE_LIBRARY.dome]

export default function VillaPalaceArchitecturePage() {
  if (!PKG) notFound()
  return <PackageDetailPage data={PKG} components={COMPONENTS} guidance={GUIDANCE} />
}
