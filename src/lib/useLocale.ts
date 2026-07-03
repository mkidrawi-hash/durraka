'use client'

import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n'

// Current locale for client components, derived from the /ar route prefix.
export function useLocale(): Locale {
  const pathname = usePathname()
  return pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en'
}

// Prefix a root-relative href with /ar for the Arabic locale ("/" → "/ar").
export function localizeHref(href: string, locale: Locale): string {
  if (locale !== 'ar') return href
  if (href === '/') return '/ar'
  return href.startsWith('/') ? `/ar${href}` : href
}
