import type { Metadata } from 'next'
import EngineerGuidanceView from '@/components/systems/EngineerGuidanceView'
import { engineerGuidanceContentAr } from '@/content/ar/systems/engineer-guidance'

export const metadata: Metadata = {
  title: { absolute: `${engineerGuidanceContentAr.page.metaTitle} | مصنع دراكة للصناعة` },
  description: engineerGuidanceContentAr.page.metaDescription,
}

export default function ArEngineerGuidancePage() {
  return <EngineerGuidanceView locale="ar" />
}
