import Link from 'next/link'
import { getDictionary } from '@/content/dictionaries'
import { localizeHref, type Locale } from '@/lib/i18n'

export default function RfqCTA({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale).home.rfqCta
  const cta = getDictionary(locale).common.cta

  return (
    <section
      className="bg-navy pt-20 sm:py-24"
      style={{ paddingBottom: 'calc(96px + env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent flex-shrink-0" />
          <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase whitespace-nowrap">{t.eyebrow}</span>
          <div className="w-8 h-px bg-accent flex-shrink-0" />
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
          {t.title}
        </h2>

        <p className="text-white/90 text-sm sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.body}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href={localizeHref('/request-quotation', locale)}
            className="min-h-[56px] flex items-center justify-center px-10 py-3.5 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-base"
          >
            {cta.requestQuotation}
          </Link>
          <Link
            href={localizeHref('/contact', locale)}
            className="min-h-[56px] flex items-center justify-center px-10 py-3.5 border border-white/50 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-base"
          >
            {cta.contactUs}
          </Link>
        </div>
      </div>
    </section>
  )
}
