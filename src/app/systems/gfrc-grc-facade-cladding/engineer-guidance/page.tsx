import type { Metadata } from 'next'
import EngineerGuidanceView from '@/components/systems/EngineerGuidanceView'
import { engineerGuidanceContent } from '@/content/en/systems/engineer-guidance'

export const metadata: Metadata = {
  title: engineerGuidanceContent.page.metaTitle,
  description: engineerGuidanceContent.page.metaDescription,
}

export default function EngineerGuidancePage() {
  return <EngineerGuidanceView locale="en" />
}
