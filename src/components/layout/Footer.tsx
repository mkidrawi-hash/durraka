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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <Link href="/" aria-label="Durraka Factory for Industry">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logos/durraka-logo-original-red-blue.svg"
                  alt="Durraka Factory for Industry logo"
                  className="h-[64px] sm:h-[76px] w-auto"
                />
              </Link>
              <div className="mt-3">
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
            <div className="mt-5">
              <SocialLinks variant="light" size="sm" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-navy/40 text-xs font-semibold tracking-widest uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy/60 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-navy/40 text-xs font-semibold tracking-widest uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy/60 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-navy/40 text-xs font-semibold tracking-widest uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Durraka office location on Google Maps"
                  className="text-navy/60 hover:text-accent text-sm transition-colors"
                >
                  {CONTACT_INFO.address}
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-navy/60 hover:text-accent text-sm transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-navy/60 hover:text-accent text-sm transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy/10 mt-12 pt-8">
          <p className="text-navy/40 text-xs">
            &copy; {new Date().getFullYear()} Durraka Factory for Industry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
