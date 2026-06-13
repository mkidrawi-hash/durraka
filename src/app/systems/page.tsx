import type { Metadata } from 'next'
import Link from 'next/link'
import { SYSTEMS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Systems',
  description:
    'Explore Durraka Factory\'s full range of GFRC/GRC architectural systems — façade cladding, mashrabiya, domes, cornices, columns, and custom elements.',
}

export default function SystemsPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase">What We Manufacture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Systems</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            A complete portfolio of GFRC and GRC architectural systems, each engineered to deliver exceptional
            aesthetics and structural performance.
          </p>
        </div>
      </div>

      {/* Systems grid — dark section continues from header */}
      <div className="bg-navy relative">
        {/* Diagonal texture layer */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='40' x2='40' y2='0' stroke='%23ffffff' stroke-width='0.4'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SYSTEMS.map((system) => (
              <div
                key={system.id}
                className="group flex gap-5 p-6 sm:p-8 bg-white/[0.04] border border-white/[0.08] rounded-sm hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-11 h-11 bg-white/[0.08] rounded-sm flex-shrink-0 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg mb-2.5 group-hover:text-accent transition-colors">
                    {system.title}
                  </h2>
                  <p className="text-white/55 text-sm leading-relaxed mb-3">{system.description}</p>
                  <span className="text-accent/80 text-xs font-semibold tracking-wide uppercase">
                    Custom engineering available
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA — seamless within dark section */}
          <div className="mt-16 border-t border-white/[0.08] pt-14 text-center">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Get Started</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Our engineering team designs and manufactures bespoke GFRC/GRC elements to
              project-specific requirements — from concept to Kingdom-wide delivery.
            </p>
            <Link
              href="/request-quotation"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-accent text-white font-semibold rounded-sm hover:bg-accent/10 transition-colors text-sm"
            >
              Submit Your Requirements
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
