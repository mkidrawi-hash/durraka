import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import LocaleHtmlAttrs from '@/components/i18n/LocaleHtmlAttrs'
import { commonAr } from '@/content/ar/common'

// Arabic UI/display font (foundation decision — see docs/i18n.md). Exposed as a
// CSS variable and mapped to the `font-arabic` Tailwind family, scoped to the
// /ar subtree only; the English site keeps Poppins.
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-arabic',
})

// The toggle is now live, but the Arabic copy is still machine-draft — keep the
// /ar subtree OUT of search indexes until hreflang/SEO is added (next phase).
// Removing this must be paired with hreflang; see docs/i18n.md.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" lang="ar" className={`${plexArabic.variable} font-arabic min-h-screen`}>
      <LocaleHtmlAttrs dir="rtl" lang="ar" />
      {/* Draft notice — shown on every /ar page while Arabic copy is under review.
          Remove (with commonAr.draftNotice) once terminology review completes. */}
      <div
        role="note"
        className="bg-navy text-white/85 text-[11px] sm:text-xs text-center leading-relaxed px-4 py-2 border-b border-white/10"
      >
        {commonAr.draftNotice}
      </div>
      {children}
    </div>
  )
}
