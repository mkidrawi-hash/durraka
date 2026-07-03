import { getDictionary } from '@/content/dictionaries'
import type { Locale } from '@/lib/i18n'

export default function Metrics({ locale = 'en' }: { locale?: Locale }) {
  const metrics = getDictionary(locale).home.metrics
  return (
    <section className="bg-navy-dark py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col text-center p-3 sm:p-5 border border-white/[0.12] rounded-sm hover:border-accent/50 transition-colors group"
            >
              <div>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-accent transition-colors leading-tight break-words">
                    {metric.value}
                  </span>
                </div>
                <div className="text-white font-semibold text-[11px] sm:text-sm leading-snug">{metric.label}</div>
              </div>
              <div className="text-[#B8C0D4] text-xs leading-relaxed mt-auto pt-2.5">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
