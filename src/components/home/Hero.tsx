import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Subtle geometric pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28"
        style={{ paddingBottom: 'calc(64px + env(safe-area-inset-bottom))' }}
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5 sm:mb-8">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase">
              GFRC &amp; GRC Specialists — Saudi Arabia
            </span>
          </div>

          <h1 className="text-[28px] sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-5 sm:mb-6">
            Engineered GFRC
            <span className="block text-accent">Architectural Systems</span>
            <span className="block">for Landmark Projects</span>
          </h1>

          <p className="text-white/80 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            Durraka Factory for Industry manufactures GFRC façade cladding, mashrabiya panels,
            cornices, domes, columns, decorative elements, and custom architectural systems for
            projects across Saudi Arabia.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/request-quotation"
              className="min-h-[52px] flex items-center justify-center px-8 py-3.5 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-base"
            >
              Request a Quotation
            </Link>
            <Link
              href="/systems"
              className="min-h-[52px] flex items-center justify-center px-8 py-3.5 border border-white/50 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-base"
            >
              View GFRC Systems
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent" />
    </section>
  )
}
