import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request for Quotation',
  description:
    'Submit your project requirements to Durraka Factory for a tailored GFRC/GRC façade quotation.',
}

const SYSTEMS_OPTIONS = [
  'GFRC/GRC Façade Cladding',
  'Mashrabiya Systems',
  'Domes & Vaults',
  'Cornices & Profiles',
  'Columns & Pillars',
  'Custom Decorative Elements',
  'Multiple Systems',
]

export default function RFQPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get a Quote</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Request for Quotation</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Fill in your project details and our engineering team will respond within 48 business hours.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <form className="space-y-10">
          {/* Project Information */}
          <fieldset>
            <legend className="text-navy font-bold text-xl mb-6 pb-3 border-b border-gray-100 w-full">
              Project Information
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Project Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Al Nakheel Tower"
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Project Location *</label>
                <input
                  type="text"
                  required
                  placeholder="City, Saudi Arabia"
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">System Required *</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm bg-white"
                >
                  <option value="">Select a system</option>
                  {SYSTEMS_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Estimated Area (m²)</label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g. 5000"
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Project Type</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm bg-white">
                  <option value="">Select type</option>
                  {['Commercial', 'Residential', 'Government', 'Hospitality', 'Religious', 'Infrastructure'].map(
                    (t) => <option key={t}>{t}</option>
                  )}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Target Delivery Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                />
              </div>
            </div>
          </fieldset>

          {/* Contact Information */}
          <fieldset>
            <legend className="text-navy font-bold text-xl mb-6 pb-3 border-b border-gray-100 w-full">
              Your Details
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Company *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+966 5X XXX XXXX"
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-navy mb-2">Your Role</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm bg-white">
                  <option value="">Select role</option>
                  {[
                    'Architect',
                    'Main Contractor',
                    'Developer / Owner',
                    'Façade Consultant',
                    'Subcontractor',
                  ].map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
            </div>
          </fieldset>

          {/* Notes */}
          <div>
            <label className="block text-sm font-semibold text-navy mb-2">Project Notes / Requirements</label>
            <textarea
              rows={5}
              placeholder="Describe your project, any special requirements, design references, or questions..."
              className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-accent focus:outline-none text-sm resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-10 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-base"
            >
              Submit Request for Quotation
            </button>
            <p className="text-gray-400 text-xs mt-3">
              We will respond within 48 business hours. Your information is kept confidential.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
