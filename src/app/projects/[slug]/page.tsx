import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PROJECT_PACKAGES, getPackageBySlug } from '@/lib/project-packages'
import { ProjectDetailLayout } from '@/components/projects/ProjectDetailLayout'

export function generateStaticParams() {
  return PROJECT_PACKAGES.map((pkg) => ({ slug: pkg.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const pkg = getPackageBySlug(slug)
  if (!pkg) return {}

  return {
    title: `${pkg.title} — GRC/GFRC Architectural Package | Durraka`,
    description: pkg.shortDescription,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pkg = getPackageBySlug(slug)
  if (!pkg) notFound()

  return <ProjectDetailLayout data={pkg} />
}
