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

      {/* Systems grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SYSTEMS.map((system) => (
            <div
              key={system.id}
              className="group flex gap-6 p-8 border border-gray-100 rounded-sm hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy/5 rounded-sm flex-shrink-0 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <div className="w-3 h-3 bg-navy rounded-full group-hover:bg-white transition-colors duration-300" />
              </div>
              <div>
                <h2 className="text-navy font-bold text-xl mb-3 group-hover:text-accent transition-colors">
                  {system.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{system.description}</p>
                <span className="text-accent text-xs font-semibold tracking-wide uppercase">
                  Custom engineering available
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-navy rounded-sm p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            Our engineering team designs and manufactures bespoke GFRC/GRC elements to project-specific
            requirements — from concept to Kingdom-wide delivery.
          </p>
          <Link
            href="/request-quotation"
            className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors"
          >
            Submit Your Requirements
          </Link>
        </div>
      </div>
    </div>
  )
}
