import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPackageBySlug } from '@/lib/project-packages'
import { PackageDetailPage } from '@/components/projects/PackageDetailPage'
import { INFOGRAPHIC_CARDS, GUIDANCE_LIBRARY } from '@/lib/package-content'

const PKG = getPackageBySlug('landmark-government-facades')

export const metadata: Metadata = {
  title: 'Landmark & Government Facades — GRC/GFRC Package | Durraka',
  description: PKG?.shortDescription ?? '',
}

const COMPONENTS = [INFOGRAPHIC_CARDS.columns, INFOGRAPHIC_CARDS.cornice, INFOGRAPHIC_CARDS.dome]

const GUIDANCE = [GUIDANCE_LIBRARY.columns, GUIDANCE_LIBRARY.cornice, GUIDANCE_LIBRARY.dome]

export default function LandmarkGovernmentFacadesPage() {
  if (!PKG) notFound()
  return <PackageDetailPage data={PKG} components={COMPONENTS} guidance={GUIDANCE} />
}
