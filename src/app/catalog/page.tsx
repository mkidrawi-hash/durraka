import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Catalog',
  description:
    'Request access to Durraka Factory technical catalogs, datasheets, and product specifications for GFRC/GRC architectural systems.',
}

const CATALOG_ITEMS = [
  { title: 'GFRC Façade Cladding Systems', pages: '24 pages' },
  { title: 'Mashrabiya Technical Guide', pages: '18 pages' },
  { title: 'Domes & Vaults Catalog', pages: '12 pages' },
  { title: 'Cornices & Profiles Reference', pages: '20 pages' },
  { title: 'Columns & Pillars Specification', pages: '16 pages' },
  { title: 'Material & Testing Data Sheets', pages: '8 pages' },
]

export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Technical Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Product Catalog</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Technical specifications, system data sheets, and product catalogs for our complete
            GFRC/GRC range. Access is available upon request.
          </p>
        </div>
      </div>

      {/* Catalog grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Access notice */}
        <div className="bg-navy/5 border border-navy/10 rounded-sm p-5 mb-10 text-sm text-gray-600 leading-relaxed">
          <strong className="text-navy">Access Note:</strong> Detailed technical documents,
          datasheets, and project-specific information may require technical review or project
          qualification before release. Please contact our technical team to request the
          relevant documents for your project.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CATALOG_ITEMS.map((doc) => (
            <div
              key={doc.title}
              className="group border border-gray-100 rounded-sm p-6 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-12 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <svg
                    className="w-5 h-6 text-accent group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-navy font-semibold text-sm mb-1 group-hover:text-accent transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-gray-400 text-xs">{doc.pages} &middot; PDF</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full py-2.5 border border-gray-200 text-navy text-xs font-semibold rounded-sm text-center hover:bg-navy hover:text-white hover:border-navy transition-all"
              >
                Request Access
              </Link>
            </div>
          ))}
        </div>

        {/* Full catalog CTA */}
        <div className="bg-gray-50 rounded-sm p-8 sm:p-12 text-center border border-gray-100">
          <h2 className="text-2xl font-bold text-navy mb-4">Request Catalog Access</h2>
          <p className="text-gray-500 mb-4 max-w-lg mx-auto text-sm leading-relaxed">
            Contact our technical team to receive the complete Durraka catalog set, including
            product datasheets, installation guidelines, and structural specifications.
          </p>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-xs leading-relaxed">
            Detailed technical documents may require project qualification or technical review
            before release. Our team will respond to all catalog requests.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-navy text-white font-semibold rounded-sm hover:bg-navy-light transition-colors"
            >
              Contact Technical Team
            </Link>
            <Link
              href="/request-quotation"
              className="inline-block px-8 py-4 border border-navy/30 text-navy font-semibold rounded-sm hover:border-accent hover:text-accent transition-colors"
            >
              Request a Quotation
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
