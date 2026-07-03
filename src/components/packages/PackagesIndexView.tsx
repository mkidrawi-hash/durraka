import Link from 'next/link'
import Image from 'next/image'
import { getDictionary } from '@/content/dictionaries'
import { localizeHref, type Locale } from '@/lib/i18n'

// Package href → hero image. Copy (title/description/area/components/alt) is
// localized via the packages.index dictionary, keyed by href.
const PACKAGE_IMAGES: { href: string; image: string }[] = [
  { href: '/packages/commercial-facade-package', image: '/images/packages/hospitality-commercial.webp' },
  { href: '/packages/mashrabiya-screen-package', image: '/images/packages/heritage-regional.webp' },
  { href: '/packages/domes-cornices-package', image: '/images/packages/villa-palace-architectural.webp' },
  { href: '/packages/grand-entrance-package', image: '/images/packages/grand-entrance-gate.webp' },
  { href: '/packages/columns-capitals-package', image: '/images/packages/landmark-government-facade.webp' },
  { href: '/packages/custom-decorative-elements-package', image: '/images/packages/custom-architectural-components.webp' },
]

type CardCopy = {
  title: string
  shortDescription: string
  illustrativeArea: string
  visibleComponents: readonly string[]
  imageAlt: string
}

function PackageCard({ href, image, card, viewLabel }: { href: string; image: string; card: CardCopy; viewLabel: string }) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-white rounded-sm overflow-hidden border border-gray-200/70 shadow-sm hover:shadow-lg hover:border-navy/20 transition-all duration-300"
    >
      {/* Package image */}
      <div className="relative overflow-hidden h-48 sm:h-56" style={{ aspectRatio: '16/10' }}>
        <Image
          src={image}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" aria-hidden="true" />
        {/* Area badge */}
        <span className="absolute bottom-3 end-3 text-[9px] font-semibold tracking-wider text-white/70 bg-navy/50 px-2 py-0.5 rounded-sm backdrop-blur-sm">
          {card.illustrativeArea}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h2 className="text-navy font-bold text-[17px] leading-snug mb-2 group-hover:text-accent transition-colors">
          {card.title}
        </h2>
        <p className="text-gray-400 text-[13px] leading-relaxed mb-4 flex-1">
          {card.shortDescription}
        </p>

        {/* Component tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {card.visibleComponents.map((c) => (
            <span
              key={c}
              className="text-[10px] font-medium text-navy/50 bg-navy/5 border border-navy/10 px-2 py-0.5 rounded-sm"
            >
              {c}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-accent text-sm font-semibold">
          {viewLabel}
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function PackagesIndexView({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale).packages.index
  const cards = t.cards as Record<string, CardCopy>

  return (
    <div className="min-h-screen">

      {/* Page header */}
      <div className="bg-navy py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">{t.eyebrow}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
            {t.title}
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            {t.intro}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-white/30 text-[11px] font-semibold tracking-widest uppercase">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t.aiNote}
          </div>
        </div>
      </div>

      {/* Package grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PACKAGE_IMAGES.map(({ href, image }) => {
            const slug = href.replace('/packages/', '')
            return (
              <PackageCard
                key={href}
                href={localizeHref(href, locale)}
                image={image}
                card={cards[slug]}
                viewLabel={t.viewPackage}
              />
            )
          })}
        </div>

        {/* Footer note */}
        <div className="mt-14 border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
            {t.footerNote}
          </p>
          <Link
            href={localizeHref('/request-quotation', locale)}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
          >
            {t.requestQuotation}
          </Link>
        </div>
      </div>

    </div>
  )
}
