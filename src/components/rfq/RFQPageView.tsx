import RFQForm from '@/components/rfq/RFQForm'
import { getDictionary } from '@/content/dictionaries'
import type { Locale } from '@/lib/i18n'

// Shared Request-for-Quotation page body (header + checklist + form), driven by
// the locale dictionary. The English and Arabic routes are thin wrappers around
// this so the two locales never drift.
export default function RFQPageView({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale).rfq

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
                  {t.page.eyebrow}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t.page.title}
              </h1>
              <p className="text-white/70 text-base sm:text-lg mb-6">
                {t.page.intro}
              </p>
              <a
                href="#rfq-form"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
              >
                {t.page.startCta}
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Right: benefits */}
            <div className="lg:pt-2">
              <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-5">
                {t.page.whatToExpect}
              </p>
              <ul className="space-y-4">
                {t.page.benefits.map((benefit) => (
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

      {/* Required Project Information — text-only checklist (no uploads) */}
      <div className="bg-[#F8F9FA] border-b border-navy/[0.08] px-4 sm:px-6 py-12 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">{t.page.beforeYouStart}</span>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-2">{t.checklist.title}</h2>
          <p className="text-navy/60 text-sm mb-6 max-w-2xl">{t.checklist.intro}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.checklist.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 bg-white border border-navy/10 rounded-sm px-4 py-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.4} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-navy/75 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-navy/45 text-xs mt-5 max-w-2xl leading-relaxed">{t.checklist.note}</p>
        </div>
      </div>

      <div id="rfq-form" />
      <RFQForm locale={locale} />
    </div>
  )
}
