import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import LocaleHtmlAttrs from '@/components/i18n/LocaleHtmlAttrs'

// Arabic UI/display font (foundation decision — see docs/i18n.md). Exposed as a
// CSS variable and mapped to the `font-arabic` Tailwind family, scoped to the
// /ar subtree only; the English site keeps Poppins.
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-arabic',
})

// The Arabic subtree is NOT publicly linked yet (ARABIC_ENABLED is false) and its
// copy is machine-draft pending review — keep it out of search indexes until the
// dictionaries are approved and the toggle is switched on.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" lang="ar" className={`${plexArabic.variable} font-arabic min-h-screen`}>
      <LocaleHtmlAttrs dir="rtl" lang="ar" />
      {children}
    </div>
  )
}
