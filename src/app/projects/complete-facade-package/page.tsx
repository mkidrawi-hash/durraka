import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPackageBySlug } from '@/lib/project-packages'
import { PackageDetailPage } from '@/components/projects/PackageDetailPage'
import { INFOGRAPHIC_CARDS, GUIDANCE_LIBRARY } from '@/lib/package-content'

const PKG = getPackageBySlug('complete-facade-package')

export const metadata: Metadata = {
  title: 'Complete Facade Package — GRC/GFRC Architectural Scope | Durraka',
  description:
    'Integrated GRC/GFRC scope covering cladding panels, columns, cornices, domes, mashrabiya screens, and custom architectural details across the full building facade.',
}

const COMPONENTS = [
  INFOGRAPHIC_CARDS.dome,
  INFOGRAPHIC_CARDS.cornice,
  INFOGRAPHIC_CARDS.mashrabiya,
  INFOGRAPHIC_CARDS.columns,
]

const GUIDANCE = [
  GUIDANCE_LIBRARY.dome,
  GUIDANCE_LIBRARY.cornice,
  GUIDANCE_LIBRARY.mashrabiya,
  GUIDANCE_LIBRARY.columns,
]

export default function CompleteFacadePackagePage() {
  if (!PKG) notFound()
  return <PackageDetailPage data={PKG} components={COMPONENTS} guidance={GUIDANCE} />
}
