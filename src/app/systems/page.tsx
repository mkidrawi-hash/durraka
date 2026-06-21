import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SYSTEMS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'GFRC/GRC Architectural Components | Durraka Factory',
  description:
    'Explore Durraka Factory\'s GFRC/GRC architectural components for façade cladding, mashrabiya screens, domes, cornices, columns, capitals, and bespoke decorative elements.',
}

export default function SystemsPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy pt-16 pb-8 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase">What We Manufacture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">GFRC/GRC Architectural Components</h1>
          <p className="text-white/70 text-lg max-w-2xl mb-5">
            Engineered architectural components for façades, entrances, domes, screens, columns, cornices, and bespoke decorative elements.
          </p>
          <p className="text-white/45 text-sm max-w-2xl leading-relaxed border-l-2 border-accent/40 pl-4">
            Most projects combine multiple GFRC/GRC components into one integrated architectural package, depending on the approved drawings, façade design, and project requirements.
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SYSTEMS.map((system) => {
              const imgSrc: string | null = system.image
              const imgAlt: string | null = system.imageAlt
              return (
                <Link
                  key={system.id}
                  href={`/systems/${system.id}`}
                  className="group flex flex-col bg-white/[0.04] border border-white/[0.08] rounded-sm hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden"
                >
                  {imgSrc && (
                    <div className="relative w-full h-44 flex-shrink-0">
                      <Image
                        src={imgSrc}
                        alt={imgAlt ?? system.title}
                        fill
                        className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                      <span className="absolute bottom-2 right-3 text-[9px] font-bold tracking-widest uppercase text-white/50">
                        Makkah · 2023
                      </span>
                    </div>
                  )}
                  <div className="flex gap-5 p-6 sm:p-8">
                    <div className="w-11 h-11 bg-white/[0.08] rounded-sm flex-shrink-0 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-accent transition-colors">
                        {system.title}
                      </h2>
                      <p className="text-white/50 text-sm leading-relaxed">{system.description}</p>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span className="text-[10px] text-white/40 tracking-widest uppercase">
                            Project-specific manufacturing
                          </span>
                        </div>
                        <span className="text-[10px] text-accent/70 group-hover:text-accent tracking-widest uppercase transition-colors">
                          View Component →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
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
