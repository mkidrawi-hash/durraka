import Link from 'next/link'
import EngineerGuidanceForm from '@/components/systems/EngineerGuidanceForm'
import { getDictionary } from '@/content/dictionaries'
import { localizeHref, type Locale } from '@/lib/i18n'

// Controlled Engineer Guidance request flow (Phase 2). Shared by both locales.
export default function EngineerGuidanceView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).engineerGuidance
  const nav = getDictionary(locale).common.nav
  const facadeBreadcrumb = getDictionary(locale).facadeCladding.breadcrumb

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-navy px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs mb-5" aria-label="Breadcrumb">
            <Link href={localizeHref('/', locale)} className="text-white/45 hover:text-white transition-colors">{nav.home}</Link>
            <span className="text-white/30">›</span>
            <Link href={localizeHref('/systems', locale)} className="text-white/45 hover:text-white transition-colors">{nav.systems}</Link>
            <span className="text-white/30">›</span>
            <Link href={localizeHref('/systems/gfrc-grc-facade-cladding', locale)} className="text-white/45 hover:text-white transition-colors">
              {facadeBreadcrumb}
            </Link>
            <span className="text-white/30">›</span>
            <span className="text-accent font-semibold">{t.breadcrumbLast}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">{t.eyebrow}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl">{t.intro}</p>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-sm p-6 sm:p-8 shadow-sm">
            <h2 className="text-base font-bold text-navy mb-1">{t.page.requestDetails}</h2>
            <p className="text-gray-400 text-xs mb-6">
              {t.page.requiredNotePre} <span className="text-accent">*</span> {t.page.requiredNotePost}
            </p>
            <EngineerGuidanceForm locale={locale} />
          </div>
        </div>
      </div>
    </div>
  )
}
