'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'
import { TRANSLATED_PATHS } from '@/lib/i18n-routes'
import { localizeHref } from '@/lib/useLocale'
import { commonContent } from '@/content/en/common'
import { commonAr } from '@/content/ar/common'

// The EN/AR language switcher is LIVE in all environments (owner decision).
// `showLangToggle = previewMode || ARABIC_ENABLED`; with ARABIC_ENABLED = true it
// shows in production too. The Arabic copy is still machine-draft (a notice bar on
// /ar pages says so), and the /ar subtree stays `noindex` until hreflang/SEO is
// added — see docs/i18n.md. To pull the toggle back, set this to false.
const ARABIC_ENABLED = true

// English routes that have a translated /ar equivalent. The toggle links to
// /ar<path> for these; for any other page it falls back to /ar (never a 404).
// Sourced from the single route list in lib/i18n-routes ('/' is handled
// separately by the toggle, so it's excluded here).
const TRANSLATED_AR_ROUTES = new Set<string>(TRANSLATED_PATHS.filter((p) => p !== '/'))

function PreviewBadge({ className = '' }: { className?: string }) {
  return (
    <span
      dir="rtl"
      lang="ar"
      title="Preview — under review (not launched)"
      className={`inline-flex items-center whitespace-nowrap rounded-sm border border-amber-400 bg-amber-100 px-1.5 py-0.5 text-[9px] font-semibold text-amber-800 ${className}`}
    >
      معاينة — قيد المراجعة
    </span>
  )
}

export default function Header({ previewMode = false }: { previewMode?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Show the switcher in non-production (preview/dev) always, and in production
  // only once Arabic is launched.
  const showLangToggle = previewMode || ARABIC_ENABLED

  const isArabic = pathname.startsWith('/ar')
  const enPath = isArabic ? pathname.replace(/^\/ar/, '') || '/' : pathname
  const enHref = enPath
  // Never 404 from the toggle: link to the /ar equivalent only when it exists,
  // otherwise fall back to /ar (Arabic preview landing).
  const arHref = isArabic ? pathname : TRANSLATED_AR_ROUTES.has(enPath) ? `/ar${enPath}` : '/ar'

  // Localized nav labels + CTA. Hrefs are /ar-prefixed on the Arabic subtree.
  const locale = isArabic ? 'ar' : 'en'
  const t = isArabic ? commonAr : commonContent
  const navLabel: Record<string, string> = {
    '/': t.nav.home,
    '/about': t.nav.about,
    '/systems': t.nav.systems,
    '/packages': t.nav.packages,
    '/gallery': t.nav.gallery,
    '/catalog': t.nav.catalog,
    '/contact': t.nav.contact,
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white border-navy/10 shadow-sm'
          : 'bg-white/98 backdrop-blur-sm border-navy/[0.06]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[84px] sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Durraka Factory for Industry">
            <Image
              src="/images/logos/durraka-logo-original-red-blue.svg"
              alt="Durraka Factory for Industry logo"
              width={54}
              height={52}
              className="h-[46px] sm:h-[52px] w-auto flex-shrink-0"
              priority
            />
            <div>
              <p className="text-navy font-bold text-base sm:text-lg leading-tight tracking-[0.06em] uppercase group-hover:text-accent transition-colors">
                Durraka
              </p>
              <p className="text-navy/50 text-[10px] sm:text-xs tracking-[0.18em] uppercase mt-0.5">
                Factory for Industry
              </p>
            </div>
          </Link>

          {/* Mobile Language Switcher — between logo and hamburger */}
          {showLangToggle && (
            <div className="lg:hidden flex items-center gap-1.5 mr-1">
              {previewMode && <PreviewBadge />}
              <div className="flex items-center border border-navy/20 rounded-sm overflow-hidden">
                <Link href={enHref} className={`px-2 py-1 text-[10px] font-bold tracking-widest uppercase transition-colors ${!isArabic ? 'bg-navy text-white' : 'text-navy/50'}`}>EN</Link>
                <div className="w-px h-3 bg-navy/20" />
                <Link href={arHref} className={`px-2 py-1 text-[10px] font-bold tracking-widest uppercase transition-colors ${isArabic ? 'bg-navy text-white' : 'text-navy/50'}`}>AR</Link>
              </div>
            </div>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const href = localizeHref(link.href, locale)
              return (
              <Link
                key={link.href}
                href={href}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                  pathname === href
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-navy/70 hover:text-navy hover:bg-navy/5'
                }`}
              >
                {navLabel[link.href]}
              </Link>
            )})}
            {/* Desktop Language Switcher */}
            {showLangToggle && (
              <div className="hidden lg:flex items-center gap-2 ml-3">
                {previewMode && <PreviewBadge />}
                <div className="flex items-center border border-navy/20 rounded-sm overflow-hidden">
                  <Link href={enHref} className={`px-2.5 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${!isArabic ? 'bg-navy text-white' : 'text-navy/50 hover:text-navy hover:bg-navy/[0.06]'}`}>EN</Link>
                  <div className="w-px h-3 bg-navy/20" />
                  <Link href={arHref} className={`px-2.5 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${isArabic ? 'bg-navy text-white' : 'text-navy/50 hover:text-navy hover:bg-navy/[0.06]'}`}>AR</Link>
                </div>
              </div>
            )}
            <Link
              href={localizeHref('/request-quotation', locale)}
              className="ml-4 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
            >
              {t.cta.requestQuotation}
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-navy p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-navy/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const href = localizeHref(link.href, locale)
              return (
              <Link
                key={link.href}
                href={href}
                className={`px-4 py-3 text-sm font-medium rounded-sm transition-colors ${
                  pathname === href
                    ? 'text-accent bg-accent/5'
                    : 'text-navy/70 hover:text-navy hover:bg-navy/5'
                }`}
              >
                {navLabel[link.href]}
              </Link>
            )})}
            <Link
              href={localizeHref('/request-quotation', locale)}
              className="mt-2 px-4 py-3 bg-accent text-white text-sm font-semibold rounded-sm text-center hover:bg-accent-dark transition-colors"
            >
              {t.cta.requestQuotation}
            </Link>
            {/* Mobile dropdown language switcher */}
            {showLangToggle && (
              <div className="mt-3 pt-3 border-t border-navy/10 flex items-center gap-2 flex-wrap">
                <span className="text-navy/40 text-[10px] tracking-widest uppercase">Language</span>
                <div className="flex items-center border border-navy/20 rounded-sm overflow-hidden">
                  <Link href={enHref} className={`px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${!isArabic ? 'bg-navy text-white' : 'text-navy/50'}`}>EN</Link>
                  <div className="w-px h-3 bg-navy/20" />
                  <Link href={arHref} className={`px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${isArabic ? 'bg-navy text-white' : 'text-navy/50'}`}>AR</Link>
                </div>
                {previewMode && <PreviewBadge />}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
