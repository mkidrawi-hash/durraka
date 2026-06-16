import Link from 'next/link'

export default function RfqCTA() {
  return (
    <section
      className="bg-navy pt-20 sm:py-24"
      style={{ paddingBottom: 'calc(96px + env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent flex-shrink-0" />
          <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase whitespace-nowrap">Get Started</span>
          <div className="w-8 h-px bg-accent flex-shrink-0" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>

        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Submit your project details and our team will review the scope, drawings, timeline,
          and technical requirements before preparing the next step.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/request-quotation"
            className="min-h-[52px] flex items-center justify-center px-10 py-3.5 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-base"
          >
            Request a Quotation
          </Link>
          <Link
            href="/contact"
            className="min-h-[52px] flex items-center justify-center px-10 py-3.5 border border-white/50 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
