import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Metrics from '@/components/home/Metrics'
import SystemsOverview from '@/components/home/SystemsOverview'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import RfqCTA from '@/components/home/RfqCTA'
import { hreflangAlternates } from '@/lib/i18n-routes'

export const metadata: Metadata = {
  alternates: hreflangAlternates('/', 'en'),
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <SystemsOverview />
      <ProjectsPreview />
      <RfqCTA />
    </>
  )
}
