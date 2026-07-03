import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { TRANSLATED_PATHS, arPathFor } from '@/lib/i18n-routes'

// Emits both the English and Arabic URLs for every translated route, each
// annotated with hreflang alternates (en, ar-SA, x-default) so search engines
// pair the two locales instead of treating /ar as duplicate content.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const enPath of TRANSLATED_PATHS) {
    const enUrl = `${SITE_URL}${enPath}`
    const arUrl = `${SITE_URL}${arPathFor(enPath)}`
    const languages = { en: enUrl, 'ar-SA': arUrl, 'x-default': enUrl }

    entries.push({ url: enUrl, changeFrequency: 'monthly', priority: enPath === '/' ? 1 : 0.7, alternates: { languages } })
    entries.push({ url: arUrl, changeFrequency: 'monthly', priority: enPath === '/' ? 0.9 : 0.6, alternates: { languages } })
  }

  return entries
}
