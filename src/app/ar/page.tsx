import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Metrics from '@/components/home/Metrics'
import SystemsOverview from '@/components/home/SystemsOverview'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import RfqCTA from '@/components/home/RfqCTA'

export const metadata: Metadata = {
  title: { absolute: 'مصنع دراكة للصناعة | أنظمة واجهات GFRC و GRC' },
  description:
    'مصنع دراكة للصناعة — الشركة السعودية المتخصصة في تصنيع تكسية الواجهات وأنظمة GFRC و GRC المعمارية لمشاريع في جميع أنحاء المملكة العربية السعودية.',
}

export default function ArHomePage() {
  return (
    <>
      <Hero locale="ar" />
      <Metrics locale="ar" />
      <SystemsOverview locale="ar" />
      <ProjectsPreview locale="ar" />
      <RfqCTA locale="ar" />
    </>
  )
}
