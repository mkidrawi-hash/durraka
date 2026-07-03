import Link from 'next/link'
import type { Metadata } from 'next'

// Arabic preview landing. Serves as the never-404 fallback target for the EN/AR
// toggle when a page has no translated /ar equivalent yet. Inherits dir="rtl",
// the Arabic font, and noindex from ArLayout. Not a launched page — the content
// makes the "under review" status explicit.

export const metadata: Metadata = {
  title: 'معاينة النسخة العربية — قيد المراجعة',
}

// Keep in sync with TRANSLATED_AR_ROUTES in Header.tsx.
const TRANSLATED = [
  { href: '/ar/systems/gfrc-grc-facade-cladding', label: 'نظام تكسية الواجهات (GFRC)' },
]

export default function ArPreviewHome() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
      <span className="inline-flex items-center rounded-sm border border-amber-400 bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
        معاينة — قيد المراجعة
      </span>

      <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-navy leading-tight">
        النسخة العربية قيد الإعداد
      </h1>
      <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
        هذه معاينة داخلية للمراجعة فقط. تُضاف الصفحات العربية تدريجياً بعد اعتماد المصطلحات
        والمحتوى. المحتوى الحالي مسودة أولية وقد يتغيّر.
      </p>

      <div className="mt-10 border-t border-navy/10 pt-8">
        <p className="text-navy/50 text-[11px] font-semibold tracking-widest uppercase mb-4">
          الصفحات المتوفرة للمراجعة
        </p>
        <ul className="flex flex-col items-center gap-3">
          {TRANSLATED.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="text-accent font-semibold hover:underline">
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy-light transition-colors"
        >
          العودة إلى الموقع بالإنجليزية
        </Link>
      </div>
    </main>
  )
}
