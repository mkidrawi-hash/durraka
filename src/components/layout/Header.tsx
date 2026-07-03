'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'

// Arabic content is not live yet — every /ar/* route currently 404s. Keep the
// full i18n structure (routes, isArabic/enHref/arHref logic, /ar scaffold) in
// place but hide the language switcher UI until Arabic ships. Flip this single
// flag to true to bring the EN/AR toggle back.
const ARABIC_ENABLED = false

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isArabic = pathname.startsWith('/ar')
  const enHref = isArabic ? pathname.replace(/^\/ar/, '') || '/' : pathname
  const arHref = isArabic ? pathname : `/ar${pathname}`

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
          {ARABIC_ENABLED && (
            <div className="lg:hidden flex items-center mr-1 border border-navy/20 rounded-sm overflow-hidden">
              <Link href={enHref} className={`px-2 py-1 text-[10px] font-bold tracking-widest uppercase transition-colors ${!isArabic ? 'bg-navy text-white' : 'text-navy/50'}`}>EN</Link>
              <div className="w-px h-3 bg-navy/20" />
              <Link href={arHref} className={`px-2 py-1 text-[10px] font-bold tracking-widest uppercase transition-colors ${isArabic ? 'bg-navy text-white' : 'text-navy/50'}`}>AR</Link>
            </div>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-navy/70 hover:text-navy hover:bg-navy/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Desktop Language Switcher */}
            {ARABIC_ENABLED && (
              <div className="hidden lg:flex items-center ml-3 border border-navy/20 rounded-sm overflow-hidden">
                <Link href={enHref} className={`px-2.5 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${!isArabic ? 'bg-navy text-white' : 'text-navy/50 hover:text-navy hover:bg-navy/[0.06]'}`}>EN</Link>
                <div className="w-px h-3 bg-navy/20" />
                <Link href={arHref} className={`px-2.5 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${isArabic ? 'bg-navy text-white' : 'text-navy/50 hover:text-navy hover:bg-navy/[0.06]'}`}>AR</Link>
              </div>
            )}
            <Link
              href="/request-quotation"
              className="ml-4 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
            >
              Request a Quotation
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm font-medium rounded-sm transition-colors ${
                  pathname === link.href
                    ? 'text-accent bg-accent/5'
                    : 'text-navy/70 hover:text-navy hover:bg-navy/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request-quotation"
              className="mt-2 px-4 py-3 bg-accent text-white text-sm font-semibold rounded-sm text-center hover:bg-accent-dark transition-colors"
            >
              Request a Quotation
            </Link>
            {/* Mobile dropdown language switcher */}
            {ARABIC_ENABLED && (
              <div className="mt-3 pt-3 border-t border-navy/10 flex items-center gap-2">
                <span className="text-navy/40 text-[10px] tracking-widest uppercase">Language</span>
                <div className="flex items-center border border-navy/20 rounded-sm overflow-hidden">
                  <Link href={enHref} className={`px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${!isArabic ? 'bg-navy text-white' : 'text-navy/50'}`}>EN</Link>
                  <div className="w-px h-3 bg-navy/20" />
                  <Link href={arHref} className={`px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${isArabic ? 'bg-navy text-white' : 'text-navy/50'}`}>AR</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
