import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Request Engineer Guidance — GFRC / GRC Façade Cladding | Durraka',
  description:
    'Request engineer guidance for the GFRC/GRC façade cladding system. Guidance is issued through project-based engineering review after our team verifies your request.',
}

// Phase 1 STUB route. The full Engineer Guidance request flow (form, reference
// number, controlled distribution) is scoped for Phase 2. For now this page
// explains the process and routes the visitor to the RFQ so nothing is lost.
export default function EngineerGuidanceStubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-navy px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-5" aria-label="Breadcrumb">
            <Link href="/" className="text-white/45 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <Link href="/systems" className="text-white/45 hover:text-white transition-colors">Systems</Link>
            <span className="text-white/30">›</span>
            <Link href="/systems/gfrc-grc-facade-cladding" className="text-white/45 hover:text-white transition-colors">
              GFRC / GRC Façade Cladding
            </Link>
            <span className="text-white/30">›</span>
            <span className="text-accent font-semibold">Engineer Guidance</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Project-Based Review</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Request Engineer Guidance</h1>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl">
            Engineer guidance for the GFRC / GRC façade cladding system is issued through
            project-based engineering review. Our team verifies each request before responding.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="border border-navy/15 bg-[#F8F9FA] rounded-sm p-6 sm:p-8">
            <p className="text-navy/70 text-sm leading-relaxed mb-4">
              The dedicated guidance request form is being finalised. In the meantime, share your
              project details through our quotation request and our engineering team will follow up
              with the right guidance for your scope.
            </p>
            <ul className="space-y-2.5 mb-2">
              {[
                'Share drawings, elevations, or design intent references',
                'Tell us the project location, type, and approximate scope',
                'Our team reviews and responds with project-based guidance',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-navy/70">
                  <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              href="/request-quotation"
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
            >
              Request a Quote
            </Link>
            <Link
              href="/systems/gfrc-grc-facade-cladding"
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 border border-navy/25 text-navy font-semibold rounded-sm hover:border-accent hover:text-accent transition-colors text-sm"
            >
              Back to System
            </Link>
          </div>

          <p className="text-navy/40 text-xs leading-relaxed mt-8">
            Guidance is provided for design understanding and early coordination only.
            Project-specific engineering details are issued through approved project submissions
            where required.
          </p>
        </div>
      </div>
    </div>
  )
}
