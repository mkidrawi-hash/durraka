'use client'

import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n'

export { localizeHref } from '@/lib/i18n'

// Current locale for client components, derived from the /ar route prefix.
export function useLocale(): Locale {
  const pathname = usePathname()
  return pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en'
}
