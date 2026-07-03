import Link from 'next/link'
import { SYSTEMS } from '@/lib/constants'

const SYSTEM_ICONS: Record<string, React.ReactNode> = {
  // Façade Cladding — staggered panel elevation (running bond pattern)
  'facade-cladding': (
    <svg className="w-8 h-8 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Outer building face */}
      <rect x="2" y="2" width="20" height="20" />
      {/* Horizontal panel joints */}
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="2" y1="16" x2="22" y2="16" />
      {/* Row 1 — centre joint */}
      <line x1="12" y1="2" x2="12" y2="9" />
      {/* Row 2 — offset joints (running bond) */}
      <line x1="8" y1="9" x2="8" y2="16" />
      <line x1="16" y1="9" x2="16" y2="16" />
      {/* Row 3 — centre joint (same as row 1) */}
      <line x1="12" y1="16" x2="12" y2="22" />
    </svg>
  ),

  // Mashrabiya — 3×3 diamond lattice perforated screen
  'mashrabiya': (
    <svg className="w-8 h-8 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Screen frame */}
      <rect x="2" y="2" width="20" height="20" />
      {/* Row 1 diamonds — y-centre 7 */}
      <polygon points="7,5.5 8.5,7 7,8.5 5.5,7" />
      <polygon points="12,5.5 13.5,7 12,8.5 10.5,7" />
      <polygon points="17,5.5 18.5,7 17,8.5 15.5,7" />
      {/* Row 2 diamonds — y-centre 12 */}
      <polygon points="7,10.5 8.5,12 7,13.5 5.5,12" />
      <polygon points="12,10.5 13.5,12 12,13.5 10.5,12" />
      <polygon points="17,10.5 18.5,12 17,13.5 15.5,12" />
      {/* Row 3 diamonds — y-centre 17 */}
      <polygon points="7,15.5 8.5,17 7,18.5 5.5,17" />
      <polygon points="12,15.5 13.5,17 12,18.5 10.5,17" />
      <polygon points="17,15.5 18.5,17 17,18.5 15.5,17" />
    </svg>
  ),

  // Domes & Vaults — dome elevation with inner arc, drum, and lantern
  'domes': (
    <svg className="w-8 h-8 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Outer dome arc */}
      <path d="M 3 17 Q 3 5 12 5 Q 21 5 21 17" />
      {/* Inner dome arc */}
      <path d="M 6 17 Q 6 9 12 9 Q 18 9 18 17" />
      {/* Drum / cylindrical base */}
      <rect x="3" y="17" width="18" height="3" />
      {/* Lantern stem + finial */}
      <line x1="12" y1="5" x2="12" y2="2.5" />
      <circle cx="12" cy="2" r="1" />
      {/* Ground line */}
      <line x1="1" y1="20" x2="23" y2="20" />
    </svg>
  ),

  // Cornices & Profiles — stepped section profile (side view cross-section)
  'cornices': (
    <svg className="w-8 h-8 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Wall face */}
      <line x1="4" y1="22" x2="4" y2="3" />
      {/* Ground / baseline */}
      <line x1="3" y1="21" x2="22" y2="21" />
      {/* Stepped profile: 3 projections reading upward from base */}
      <polyline points="4,19 8,19 8,14 13,14 13,9 21,9" />
      {/* Top crown returns across to wall */}
      <line x1="4" y1="9" x2="21" y2="9" />
      {/* Top fascia edge */}
      <line x1="21" y1="9" x2="21" y2="5" />
      <line x1="4" y1="5" x2="21" y2="5" />
    </svg>
  ),

  // Columns & Pillars — classical column elevation (capital, shaft, base)
  'columns': (
    <svg className="w-8 h-8 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Abacus — wide top slab */}
      <rect x="3" y="2" width="18" height="2" />
      {/* Capital — trapezoid narrowing to shaft */}
      <path d="M 3 4 L 7.5 8 L 16.5 8 L 21 4" />
      {/* Shaft sides */}
      <line x1="7.5" y1="8" x2="7.5" y2="17" />
      <line x1="16.5" y1="8" x2="16.5" y2="17" />
      {/* Shaft fluting — centre dashed line */}
      <line x1="12" y1="8.5" x2="12" y2="16.5" strokeDasharray="1.5 1" />
      {/* Base — trapezoid widening from shaft */}
      <path d="M 7.5 17 L 3 20.5 L 21 20.5 L 16.5 17" />
      {/* Plinth — wide bottom slab */}
      <rect x="3" y="20.5" width="18" height="1.5" />
    </svg>
  ),

  // Custom Decorative Elements — geometric ornamental rosette
  'custom': (
    <svg className="w-8 h-8 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {/* Outer ring */}
      <circle cx="12" cy="12" r="9" />
      {/* Middle ring */}
      <circle cx="12" cy="12" r="5" />
      {/* Centre */}
      <circle cx="12" cy="12" r="1.75" />
      {/* 8 radial spokes — middle ring to outer ring */}
      <line x1="12" y1="7" x2="12" y2="3" />
      <line x1="15.5" y1="8.5" x2="18.4" y2="5.6" />
      <line x1="17" y1="12" x2="21" y2="12" />
      <line x1="15.5" y1="15.5" x2="18.4" y2="18.4" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="8.5" y1="15.5" x2="5.6" y2="18.4" />
      <line x1="7" y1="12" x2="3" y2="12" />
      <line x1="8.5" y1="8.5" x2="5.6" y2="5.6" />
    </svg>
  ),
}

export default function SystemsOverview() {
  return (
    <section className="bg-white pt-[72px] pb-9 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase whitespace-nowrap">What We Manufacture</span>
            <div className="w-8 h-px bg-accent flex-shrink-0" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">GFRC/GRC Architectural Components</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Six integrated GFRC/GRC manufacturing capabilities — combined on any project scope to deliver a complete architectural façade package.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SYSTEMS.map((system) => (
            <div
              key={system.id}
              className="group p-5 sm:p-8 border border-gray-200/80 rounded-sm hover:border-accent/60 hover:shadow-md bg-white transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 rounded-sm flex items-center justify-center text-navy mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                {SYSTEM_ICONS[system.id]}
              </div>
              <h3 className="text-navy font-bold text-xl sm:text-lg mb-2.5 group-hover:text-accent transition-colors leading-snug">
                {system.title}
              </h3>
              <p className="text-gray-500 text-[17px] sm:text-sm leading-[1.65]">{system.description}</p>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-10 sm:mt-12"
          style={{ paddingBottom: 'calc(64px + env(safe-area-inset-bottom))' }}
        >
          <Link
            href="/systems"
            className="inline-flex items-center justify-center gap-2 w-[80%] sm:w-auto min-h-[56px] px-8 py-4 bg-navy text-white font-semibold rounded-sm hover:bg-navy-light transition-colors"
          >
            View All Systems
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
