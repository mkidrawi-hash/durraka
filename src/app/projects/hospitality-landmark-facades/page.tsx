import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPackageBySlug } from '@/lib/project-packages'
import { PackageDetailPage } from '@/components/projects/PackageDetailPage'
import { INFOGRAPHIC_CARDS, GUIDANCE_LIBRARY } from '@/lib/package-content'

const PKG = getPackageBySlug('hospitality-landmark-facades')

export const metadata: Metadata = {
  title: 'Hospitality & Landmark Facades — GRC/GFRC Package',
  description: PKG?.shortDescription ?? '',
}

const COMPONENTS = [INFOGRAPHIC_CARDS.columns, INFOGRAPHIC_CARDS.cornice]

const GUIDANCE = [GUIDANCE_LIBRARY.columns, GUIDANCE_LIBRARY.cornice]

export default function HospitalityLandmarkFacadesPage() {
  if (!PKG) notFound()
  return <PackageDetailPage data={PKG} components={COMPONENTS} guidance={GUIDANCE} />
}
