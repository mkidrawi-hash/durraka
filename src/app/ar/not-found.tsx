import Link from 'next/link'
import { commonAr as t } from '@/content/ar/common'

export default function ArNotFound() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-24 sm:py-32 text-center">
      <p className="text-accent text-5xl sm:text-6xl font-bold" dir="ltr">{t.notFound.code}</p>
      <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-navy">{t.notFound.title}</h1>
      <p className="mt-3 text-gray-500 leading-relaxed">{t.notFound.body}</p>
      <Link
        href="/ar"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy-light transition-colors"
      >
        {t.notFound.backHome}
      </Link>
    </main>
  )
}
