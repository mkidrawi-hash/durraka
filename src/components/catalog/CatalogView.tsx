import Link from 'next/link'
import PublicCatalogDownload from '@/components/catalog/PublicCatalogDownload'
import DetailedCatalogRequestForm from '@/components/catalog/DetailedCatalogRequestForm'
import { localizeHref, type Locale } from '@/lib/i18n'
import { catalogContent } from '@/content/en/catalog'
import { catalogContentAr } from '@/content/ar/catalog'

// Non-translatable identifiers — PDF path and the analytics page source. Kept
// out of the dictionaries so they stay stable across locales.
const PUBLIC_CATALOG_URL = '/catalogs/durraka-public-simple-catalog.pdf'
const PAGE_SOURCE = '/catalog'

// Shared Product Catalog page body, driven by the locale dictionary. The English
// and Arabic routes are thin wrappers. Public-catalog identifiers stored to the
// download log stay English (see PublicCatalogDownload); the detailed request
// form stores English option values regardless of locale.
export default function CatalogView({ locale = 'en' }: { locale?: Locale }) {
  const t = locale === 'ar' ? catalogContentAr : catalogContent

  return (
    <div className="min-h-screen">

      {/* Page header */}
      <div className="bg-navy py-20 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              {t.header.eyebrow}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.header.title}</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            {t.header.intro}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-20">

        {/* ── Section 1: Public Overview Catalog ──────────────────────────── */}
        <section aria-labelledby="public-catalog-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent" aria-hidden="true" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              {t.publicSection.eyebrow}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

            {/* Left: info + download */}
            <div>
              <h2
                id="public-catalog-heading"
                className="text-2xl sm:text-3xl font-bold text-navy mb-3 leading-snug"
              >
                {t.publicSection.name}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {t.publicSection.intro}
              </p>

              <PublicCatalogDownload
                catalogName={catalogContent.publicSection.name}
                catalogType={catalogContent.publicSection.trackingType}
                downloadUrl={PUBLIC_CATALOG_URL}
                pageSource={PAGE_SOURCE}
                locale={locale}
              />

              {/* CTA bridge to detailed catalog */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">
                  {t.publicSection.bridgeQuestion}
                </p>
                <a
                  href="#detailed-catalog"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                >
                  {t.publicSection.bridgeCta}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: what's covered */}
            <div className="bg-gray-50 border border-gray-100 rounded-sm p-6 sm:p-8">
              <h3 className="text-navy font-semibold text-sm tracking-wide mb-4">
                {t.publicSection.coversHeading}
              </h3>
              <ul className="space-y-2.5 mb-6">
                {t.publicSection.covers.map((item) => (
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
                  {t.publicSection.notCoveredHeading}
                </p>
                <ul className="space-y-1.5">
                  {t.publicSection.notCovered.map((item) => (
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

        {/* ── Section 2: Detailed Technical Catalog ───────────────────────── */}
        <section id="detailed-catalog" aria-labelledby="detailed-catalog-heading">

          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent" aria-hidden="true" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              {t.detailedSection.eyebrow}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* Left: what's inside (2/5 width on lg) */}
            <div className="lg:col-span-2">
              <h2
                id="detailed-catalog-heading"
                className="text-2xl sm:text-3xl font-bold text-navy mb-3 leading-snug"
              >
                {t.detailedSection.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {t.detailedSection.intro}
              </p>

              <div className="bg-navy rounded-sm p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-px bg-accent" aria-hidden="true" />
                  <span className="text-accent text-[10px] font-bold tracking-widest uppercase">
                    {t.detailedSection.includedHeading}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {t.detailedSection.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg
                        className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/70 text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/10 mt-5 pt-4">
                  <p className="text-white/30 text-[10px] leading-relaxed">
                    {t.detailedSection.slaNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form (3/5 width on lg) */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-sm p-6 sm:p-8">
                <h3 className="text-base font-bold text-navy mb-1">
                  {t.detailedSection.requestAccessHeading}
                </h3>
                <p className="text-gray-400 text-xs mb-6">
                  {t.detailedSection.requestAccessIntroPre}
                  <span className="text-accent">*</span>
                  {t.detailedSection.requestAccessIntroPost}
                </p>
                <DetailedCatalogRequestForm locale={locale} />
              </div>
            </div>

          </div>
        </section>

        {/* ── Footer note ─────────────────────────────────────────────────── */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
            {t.footer.note}
          </p>
          <Link
            href={localizeHref('/request-quotation', locale)}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
          >
            {t.footer.requestQuotationCta}
          </Link>
        </div>

      </div>
    </div>
  )
}
