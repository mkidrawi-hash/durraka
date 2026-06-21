import type { Metadata } from 'next'
import RFQForm from '@/components/rfq/RFQForm'

export const metadata: Metadata = {
  title: 'Request a GFRC/GRC Quotation',
  description:
    'Submit your GFRC/GRC project requirements to Durraka Factory. Our engineering team will review the scope and contact you with the next steps.',
}

const BENEFITS = [
  'GFRC/GRC façade systems',
  'Project-based manufacturing',
  'Engineering review before pricing',
  'Confidential RFQ handling',
]

export default function RequestQuotationPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy py-10 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">

            {/* Left: heading */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-accent flex-shrink-0" />
                <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase">
                  Get a Quote
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Request a GFRC/GRC Quotation
              </h1>
              <p className="text-white/70 text-base sm:text-lg mb-6">
                Share your project requirements and our team will review the scope and contact you
                with the next steps.
              </p>
              <a
                href="#rfq-form"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
              >
                Start RFQ
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Right: benefits */}
            <div className="lg:pt-2">
              <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-5">
                What to expect
              </p>
              <ul className="space-y-4">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-accent"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div id="rfq-form" />
      <RFQForm />
    </div>
  )
}
