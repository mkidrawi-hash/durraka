import { getDictionary } from '@/content/dictionaries'
import type { Locale } from '@/lib/i18n'

// Shared About page body — same markup for both locales, copy from the dictionary.
// dir is handled by ArLayout on the /ar subtree.
export default function AboutView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).about

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">{t.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{t.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">{t.h2}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {t.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-8 border-l-4 border-accent rounded-sm">
              <h3 className="text-navy font-bold text-lg mb-3">{t.mission.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.mission.body}</p>
            </div>

            <div className="bg-gray-50 p-8 border-l-4 border-navy rounded-sm">
              <h3 className="text-navy font-bold text-lg mb-4">{t.values.title}</h3>
              <ul className="text-gray-600 text-sm space-y-3">
                {t.values.items.map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {t.stats.map((stat) => (
                <div key={stat.label} className="bg-navy p-6 rounded-sm text-center">
                  <div className="text-accent font-bold text-xl mb-1">{stat.value}</div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
