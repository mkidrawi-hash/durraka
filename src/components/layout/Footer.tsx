'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS, CONTACT_INFO, MAPS_URL } from '@/lib/constants'
import { SOCIAL_LINKS } from '@/lib/social-links'
import { useLocale, localizeHref } from '@/lib/useLocale'
import { commonContent } from '@/content/en/common'
import { commonAr } from '@/content/ar/common'

const LEGAL_LINKS = [
  { key: 'privacy' as const, href: '/privacy-policy' },
  { key: 'terms' as const, href: '/terms-and-conditions' },
]

// Reference/contact numbers render LTR even inside RTL text.
function Ltr({ children }: { children: React.ReactNode }) {
  return (
    <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
      {children}
    </span>
  )
}

export default function Footer() {
  const locale = useLocale()
  const t = locale === 'ar' ? commonAr : commonContent
  const navLabel: Record<string, string> = {
    '/': t.nav.home,
    '/about': t.nav.about,
    '/systems': t.nav.systems,
    '/packages': t.nav.packages,
    '/gallery': t.nav.gallery,
    '/catalog': t.nav.catalog,
    '/contact': t.nav.contact,
  }

  return (
    <footer className="bg-white border-t border-navy/10 text-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-8">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-4">
              <Link href={localizeHref('/', locale)} aria-label="Durraka Factory for Industry">
                <Image
                  src="/images/logos/durraka-logo-original-red-blue.svg"
                  alt="Durraka Factory for Industry logo"
                  width={67}
                  height={64}
                  className="h-[48px] sm:h-[64px] w-auto"
                />
              </Link>
              <div className="mt-2">
                <p className="text-navy font-bold text-sm leading-tight tracking-wide">
                  {t.footer.brandName}
                </p>
                <p className="text-accent text-[11px] font-semibold tracking-widest uppercase mt-0.5">
                  {t.footer.tagline}
                </p>
              </div>
            </div>
            <p className="text-navy/60 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            {/* Social links with visible labels */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              <a
                href={SOCIAL_LINKS.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={SOCIAL_LINKS.linkedin.label}
                className="inline-flex items-center gap-2 text-navy/60 hover:text-accent text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={SOCIAL_LINKS.whatsapp.label}
                className="inline-flex items-center gap-2 text-navy/60 hover:text-accent text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-navy/40 text-xs font-semibold tracking-widest uppercase mb-3">{t.footer.navigationHeading}</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localizeHref(link.href, locale)}
                    className="text-navy/60 hover:text-accent text-xs sm:text-sm leading-relaxed transition-colors"
                  >
                    {navLabel[link.href]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-navy/40 text-xs font-semibold tracking-widest uppercase mb-3">{t.footer.legalHeading}</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localizeHref(link.href, locale)}
                    className="text-navy/60 hover:text-accent text-xs sm:text-sm leading-relaxed transition-colors"
                  >
                    {t.legal[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-navy/40 text-xs font-semibold tracking-widest uppercase mb-4">{t.footer.contactHeading}</h3>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Durraka office location on Google Maps"
                  className="flex items-start gap-2.5 text-navy/60 hover:text-accent text-sm transition-colors group"
                >
                  <svg className="w-4 h-4 mt-1 flex-shrink-0 text-navy/30 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="leading-relaxed">
                    <span className="block">{CONTACT_INFO.address},</span>
                    <span className="block">{CONTACT_INFO.addressLine2}</span>
                  </span>
                </Link>
              </li>
              <li className="space-y-3">
                <a
                  href="tel:+966126192224"
                  className="flex items-center gap-2.5 text-navy/60 hover:text-accent text-sm leading-relaxed transition-colors group"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-navy/30 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span><span className="text-navy/35 text-[11px] me-1">{t.footer.phoneLabel}</span><Ltr>{CONTACT_INFO.phone}</Ltr></span>
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-navy/60 hover:text-accent text-sm leading-relaxed transition-colors group"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-navy/30 group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span><span className="text-navy/35 text-[11px] me-1">{t.footer.whatsappLabel}</span><Ltr>{CONTACT_INFO.phone}</Ltr></span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@durraka.com"
                  className="flex items-center gap-2.5 text-navy/60 hover:text-accent text-sm leading-relaxed transition-colors group"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-navy/30 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <Ltr>{CONTACT_INFO.email}</Ltr>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar — extra padding so floating WA button never covers copyright */}
        <div
          className="border-t border-navy/10 mt-7 sm:mt-10 pt-5"
          style={{ paddingBottom: 'calc(88px + env(safe-area-inset-bottom))' }}
        >
          <p className="text-navy/40 text-xs">
            &copy; <Ltr>{new Date().getFullYear()}</Ltr> {t.footer.brandName}. {t.footer.rightsReserved}
          </p>
        </div>

      </div>
    </footer>
  )
}
