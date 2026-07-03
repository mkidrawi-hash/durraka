import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

// Single source of truth for the routes that have a translated /ar counterpart.
// Used by the sitemap (hreflang alternates), the header language toggle, and the
// per-page `alternates` metadata helper. Keep this list in sync when new pages
// are localized. Home ('/') maps to '/ar' (not '/ar/').
export const TRANSLATED_PATHS: string[] = [
  '/',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/request-quotation',
  '/catalog',
  '/gallery',
  '/packages',
  '/packages/commercial-facade-package',
  '/packages/mashrabiya-screen-package',
  '/packages/domes-cornices-package',
  '/packages/grand-entrance-package',
  '/packages/columns-capitals-package',
  '/packages/custom-decorative-elements-package',
  '/systems',
  '/systems/columns',
  '/systems/cornices',
  '/systems/custom',
  '/systems/domes',
  '/systems/mashrabiya',
  '/systems/gfrc-grc-facade-cladding',
  '/systems/gfrc-grc-facade-cladding/engineer-guidance',
]

// English path → its /ar counterpart ('/' → '/ar').
export function arPathFor(enPath: string): string {
  return enPath === '/' ? '/ar' : `/ar${enPath}`
}

// Builds the hreflang alternates for a page. `enPath` is the English route; the
// caller passes its own locale so `canonical` points at the current URL while
// `languages` lists both locales + x-default (English).
export function hreflangAlternates(enPath: string, locale: 'en' | 'ar'): Metadata['alternates'] {
  const enUrl = `${SITE_URL}${enPath}`
  const arUrl = `${SITE_URL}${arPathFor(enPath)}`
  return {
    canonical: locale === 'ar' ? arUrl : enUrl,
    languages: {
      en: enUrl,
      'ar-SA': arUrl,
      'x-default': enUrl,
    },
  }
}
