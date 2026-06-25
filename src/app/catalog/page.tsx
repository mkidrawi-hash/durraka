import type { Metadata } from 'next'
import Link from 'next/link'
import PublicCatalogDownload from '@/components/catalog/PublicCatalogDownload'

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

// ─── Detailed catalog items (gated — PR 2) ────────────────────────────────────

const DETAILED_CATALOGS = [
  { title: 'GFRC Façade Cladding Systems', pages: '24 pages' },
  { title: 'Mashrabiya Technical Guide', pages: '18 pages' },
  { title: 'Domes & Vaults Catalog', pages: '12 pages' },
  { title: 'Cornices & Profiles Reference', pages: '20 pages' },
  { title: 'Columns & Capitals Specification', pages: '16 pages' },
  { title: 'Material & Testing Data Sheets', pages: '8 pages' },
]

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

        {/* ── Section 2: Detailed Technical Catalogs ──────────────────────── */}
        <section aria-labelledby="detailed-catalogs-heading">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-px bg-navy/20" aria-hidden="true" />
            <span className="text-navy/40 text-xs font-semibold tracking-widest uppercase">
              Technical Review Required
            </span>
          </div>
          <h2
            id="detailed-catalogs-heading"
            className="text-2xl font-bold text-navy mb-2"
          >
            Detailed Technical Catalogs
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-xl leading-relaxed">
            System-specific technical catalogs including structural guidance, finish options, and
            dimensional references. Released to qualified project teams upon request.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DETAILED_CATALOGS.map((doc) => (
              <div
                key={doc.title}
                className="group border border-gray-100 rounded-sm p-6 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-12 bg-navy/5 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-6 text-navy/30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-navy font-semibold text-sm mb-1 leading-snug">
                      {doc.title}
                    </h3>
                    <p className="text-gray-400 text-xs">{doc.pages} &middot; PDF</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="block w-full py-2.5 border border-gray-200 text-navy/60 text-xs font-semibold rounded-sm text-center hover:bg-navy hover:text-white hover:border-navy transition-all"
                >
                  Request Access
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: NDA Technical Annex ──────────────────────────────── */}
        <section aria-labelledby="nda-heading">
          <div className="border border-navy/10 rounded-sm p-7 sm:p-10 bg-navy/[0.02]">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-navy/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-navy/50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 id="nda-heading" className="text-navy font-bold text-lg mb-2">
                  NDA Technical Annex
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-1">
                  For qualified projects requiring detailed engineering documentation — including
                  structural data, mix performance summaries, and system-specific technical annexes.
                </p>
                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Release of the NDA Technical Annex requires manual approval by our technical
                  team and execution of a Non-Disclosure Agreement. Available to registered
                  architects, main contractors, and approved project stakeholders only.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-navy/20 text-navy text-sm font-semibold rounded-sm hover:bg-navy hover:text-white hover:border-navy transition-colors"
                >
                  Contact Technical Team
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
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
