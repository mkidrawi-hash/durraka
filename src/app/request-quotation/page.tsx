import type { Metadata } from 'next'
import RFQForm from '@/components/rfq/RFQForm'

export const metadata: Metadata = {
  title: 'Request for Quotation',
  description:
    'Submit your project requirements to Durraka Factory for a tailored GFRC/GRC façade quotation.',
}

export default function RequestQuotationPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy py-20 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase">
              Get a Quote
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Request for Quotation
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl">
            Fill in your project details and our engineering team will respond within 48 business
            hours.
          </p>
        </div>
      </div>

      <RFQForm />
    </div>
  )
}
