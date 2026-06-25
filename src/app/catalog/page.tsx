import type { Metadata } from 'next'
import Link from 'next/link'
import PublicCatalogDownload from '@/components/catalog/PublicCatalogDownload'
import GatedCatalogSection from '@/components/catalog/GatedCatalogSection'

export const metadata: Metadata = {
  title: 'Product Catalog | Durraka Factory for Industry',
  description:
    'Download the Durraka Factory overview catalog for GFRC/GRC architectural systems — façade cladding, mashrabiya screens, domes, cornices, columns, and bespoke decorative elements.',
}

// ─── Public catalog definition ─────────────────────────────────────────────────

const PUBLIC_CATALOG = {
  name: 'Durraka Overview Catalog',
  type: 'Public',
  url: '/catalogs/durraka-overview-catalog.pdf',
  fileSizeLabel: 'PDF · Overview Edition',
  covers: [
    'GFRC/GRC system categories — what we manufacture',
    'Application sectors: hospitality, commercial, government, residential, religious',
    'Façade cladding, mashrabiya screens, domes, cornices, columns, and decorative elements',
    'General material properties and available surface finishes',
    'AI concept references illustrating design possibilities',
    'How to submit an RFQ and what to expect from the process',
  ],
  notCovered: [
    'Technical mix designs or material formulations',
    'Structural engineering or fixing details',
    'Production capacity figures',
    'Project-specific pricing',
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CatalogPage() {
  return (
    <div className="min-h-screen">

      {/* Page header */}
      <div className="bg-navy py-20 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Technical Resources
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Product Catalog</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            Download the public overview catalog free of charge. Detailed technical catalogs
            and the NDA Technical Annex are available upon request.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-20">

        {/* ── Section 1: Public Overview Catalog ──────────────────────────── */}
        <section aria-labelledby="public-catalog-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent" aria-hidden="true" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              Free Download
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

            {/* Left: info */}
            <div>
              <h2
                id="public-catalog-heading"
                className="text-2xl sm:text-3xl font-bold text-navy mb-3 leading-snug"
              >
                {PUBLIC_CATALOG.name}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                A general introduction to Durraka Factory&rsquo;s GFRC/GRC architectural systems
                — suitable for architects, project managers, developers, and procurement teams
                exploring our capabilities for upcoming projects.
              </p>

              <PublicCatalogDownload
                catalogName={PUBLIC_CATALOG.name}
                catalogType={PUBLIC_CATALOG.type}
                downloadUrl={PUBLIC_CATALOG.url}
                pageSource="/catalog"
                fileSizeLabel={PUBLIC_CATALOG.fileSizeLabel}
              />
            </div>

            {/* Right: what's covered */}
            <div className="bg-gray-50 border border-gray-100 rounded-sm p-6 sm:p-8">
              <h3 className="text-navy font-semibold text-sm tracking-wide mb-4">
                What this catalog covers
              </h3>
              <ul className="space-y-2.5 mb-6">
                {PUBLIC_CATALOG.covers.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-navy/40 text-[10px] font-semibold tracking-widest uppercase mb-2">
                  Not included in public edition
                </p>
                <ul className="space-y-1.5">
                  {PUBLIC_CATALOG.notCovered.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2 & 3: Gated Catalog Request ────────────────────────── */}
        <section aria-labelledby="gated-catalog-heading">
          <GatedCatalogSection />
        </section>

        {/* ── Footer note ─────────────────────────────────────────────────── */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
            All catalog content — including AI concept visuals — is provided for reference
            purposes only. Technical specifications are confirmed during the engineering review
            process. Catalog availability is subject to change without notice.
          </p>
          <Link
            href="/request-quotation"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
          >
            Request a Quotation
          </Link>
        </div>

      </div>
    </div>
  )
}
