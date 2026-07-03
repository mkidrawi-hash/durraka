import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPackageBySlug } from '@/lib/project-packages'
import { PackageDetailPage } from '@/components/projects/PackageDetailPage'
import { INFOGRAPHIC_CARDS, GUIDANCE_LIBRARY } from '@/lib/package-content'

const PKG = getPackageBySlug('heritage-regional-architecture')

export const metadata: Metadata = {
  title: 'Heritage & Regional Architecture — GRC/GFRC Package',
  description: PKG?.shortDescription ?? '',
}

const COMPONENTS = [INFOGRAPHIC_CARDS.mashrabiya, INFOGRAPHIC_CARDS.dome, INFOGRAPHIC_CARDS.cornice]

const GUIDANCE = [GUIDANCE_LIBRARY.mashrabiya, GUIDANCE_LIBRARY.dome, GUIDANCE_LIBRARY.cornice]

export default function HeritageRegionalArchitecturePage() {
  if (!PKG) notFound()
  return <PackageDetailPage data={PKG} components={COMPONENTS} guidance={GUIDANCE} />
}
