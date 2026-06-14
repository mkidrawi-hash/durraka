import Link from 'next/link'
import { NAV_LINKS, CONTACT_INFO, MAPS_URL } from '@/lib/constants'
import SocialLinks from '@/components/social/SocialLinks'

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center font-bold text-white text-xl">
                D
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight tracking-wide">DURRAKA</div>
                <div className="text-white/50 text-xs tracking-widest uppercase">Factory for Industry</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mt-4">
              Saudi Arabia&#39;s specialized manufacturer of GFRC &amp; GRC façade cladding, mashrabiya
              systems, architectural domes, cornices, and custom decorative elements.
            </p>
            <div className="mt-5">
              <SocialLinks variant="dark" size="sm" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Durraka office location on Google Maps"
                  className="text-white/70 hover:text-accent text-sm transition-colors"
                >
                  {CONTACT_INFO.address}
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-white/70 hover:text-accent text-sm transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/70 hover:text-accent text-sm transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Durraka Factory for Industry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
