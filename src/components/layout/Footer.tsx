import Link from 'next/link'
import { NAV_LINKS, CONTACT_INFO, MAPS_URL } from '@/lib/constants'
import SocialLinks from '@/components/social/SocialLinks'

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-navy/10 text-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12">

          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <Link href="/" aria-label="Durraka Factory for Industry">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logos/durraka-logo-original-red-blue.svg"
                  alt="Durraka Factory for Industry logo"
                  className="h-[72px] sm:h-[88px] w-auto"
                />
              </Link>
              <div className="mt-4">
                <p className="text-navy font-bold text-base leading-tight tracking-wide">
                  Durraka Factory for Industry
                </p>
                <p className="text-accent text-xs font-semibold tracking-widest uppercase mt-1">
                  GFRC &amp; GRC Architectural Systems
                </p>
              </div>
            </div>
            <p className="text-navy/60 text-sm leading-relaxed max-w-sm">
              Saudi Arabia&#39;s specialized manufacturer of GFRC &amp; GRC façade cladding, mashrabiya
              systems, architectural domes, cornices, and custom decorative elements.
            </p>
            <div className="mt-6">
              <SocialLinks variant="light" size="sm" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-navy/40 text-xs font-semibold tracking-widest uppercase mb-5">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy/60 hover:text-accent text-sm leading-relaxed transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-navy/40 text-xs font-semibold tracking-widest uppercase mb-5">Legal</h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy/60 hover:text-accent text-sm leading-relaxed transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-navy/40 text-xs font-semibold tracking-widest uppercase mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Durraka office location on Google Maps"
                  className="flex items-start gap-2.5 text-navy/60 hover:text-accent text-sm leading-relaxed transition-colors group"
                >
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-navy/30 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {CONTACT_INFO.address}
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2.5 text-navy/60 hover:text-accent text-sm leading-relaxed transition-colors group"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-navy/30 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 text-navy/60 hover:text-accent text-sm leading-relaxed transition-colors group"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-navy/30 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy/10 mt-14 pt-8">
          <p className="text-navy/40 text-xs">
            &copy; {new Date().getFullYear()} Durraka Factory for Industry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
