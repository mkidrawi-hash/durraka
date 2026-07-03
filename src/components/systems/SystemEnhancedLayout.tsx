'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { FinishSwatch } from './FinishSwatch'
import { PhotoTagModal, type PhotoTag } from './PhotoTagModal'
import { DEFAULT_FINISHES, DEFAULT_INFO_REQUIRED, type FinishItem } from './SystemPageLayout'
import { whatsappHref } from '@/lib/social-links'
import { getDictionary } from '@/content/dictionaries'
import { localizeHref, type Locale } from '@/lib/i18n'
import { Ltr } from '@/components/i18n/Ltr'

export type SystemEnhancedData = {
  title: string
  breadcrumb: string
  heroDescription: string
  heroImage: string
  heroImageAlt: string
  heroObjectPosition?: string
  featureBadges?: string[]
  engineerGuidanceHref?: string
  finishes?: FinishItem[]
  photoTags: PhotoTag[]
  quickRead: { text: string }[]
  systemIntent: string
  commonApplications: string
  keyDesignConsiderations: string[]
  importantNote: string
  infoRequiredCustom?: string[]
  designGuidance: { label: string; desc: string }[]
  ctaTitle: string
  ctaBody?: string
}

const QUICK_ICONS = [
  <svg key="a" viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M10 3 L13 8 L18 8.5 L14 12 L15 17 L10 14.5 L5 17 L6 12 L2 8.5 L7 8 Z" strokeLinejoin="round" /></svg>,
  <svg key="b" viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="10" cy="10" r="7" /><circle cx="10" cy="10" r="2" /><line x1="10" y1="3" x2="10" y2="1" /><line x1="10" y1="17" x2="10" y2="19" /><line x1="3" y1="10" x2="1" y2="10" /><line x1="17" y1="10" x2="19" y2="10" /></svg>,
  <svg key="c" viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 17 L10 3 L17 17" /><line x1="6" y1="12" x2="14" y2="12" /></svg>,
  <svg key="d" viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="14" height="14" rx="1" /><path d="M8 3v14M3 8h14" strokeOpacity="0.6" /></svg>,
]

function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-px bg-accent flex-shrink-0" />
        <span className="text-accent text-xs font-semibold tracking-widest uppercase">{eyebrow}</span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-navy">{title}</h2>
    </div>
  )
}

export function SystemEnhancedLayout({
  data,
  sampleDrawing,
  systemContext,
  locale = 'en',
}: {
  data: SystemEnhancedData
  sampleDrawing: ReactNode
  systemContext: ReactNode
  locale?: Locale
}) {
  const [modalOpen, setModalOpen] = useState(false)
  const infoRequired = data.infoRequiredCustom ?? DEFAULT_INFO_REQUIRED
  const finishes = data.finishes ?? DEFAULT_FINISHES

  const L = getDictionary(locale).systemLayout
  const cta = getDictionary(locale).common.cta
  const nav = getDictionary(locale).common.nav
  const quoteHref = localizeHref('/request-quotation', locale)

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <div className="bg-[#FAFAF9] border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href={localizeHref('/', locale)} className="text-navy/40 text-xs hover:text-accent transition-colors">{nav.home}</Link>
            <span className="text-navy/25 text-xs">/</span>
            <Link href={localizeHref('/systems', locale)} className="text-navy/40 text-xs hover:text-accent transition-colors">{nav.systems}</Link>
            <span className="text-navy/25 text-xs">/</span>
            <span className="text-accent text-xs font-semibold">{data.breadcrumb}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-10 bg-accent flex-shrink-0 rounded-full" />
                <div>
                  <p className="text-accent text-[10px] font-bold tracking-widest uppercase">{L.systemEyebrow}</p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight leading-tight mt-0.5">
                    {data.title}
                  </h1>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 ps-4">{data.heroDescription}</p>

              {/* Quick Read */}
              <div className="grid grid-cols-2 gap-3 ps-4 mb-8">
                {data.quickRead.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-white border border-navy/10 p-3 rounded-sm hover:border-accent/30 transition-colors">
                    <div className="text-accent/70 flex-shrink-0 mt-0.5">{QUICK_ICONS[i % 4]}</div>
                    <p className="text-navy text-[11px] font-semibold leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 ps-4">
                <Link
                  href={quoteHref}
                  className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
                >
                  {cta.requestQuotation}
                </Link>
                {data.engineerGuidanceHref ? (
                  <Link
                    href={localizeHref(data.engineerGuidanceHref, locale)}
                    className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 border border-navy/30 text-navy font-semibold rounded-sm hover:border-accent hover:text-accent transition-colors text-sm gap-2"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10 2.5 3 6v4c0 3.5 2.8 6.5 7 7.5 4.2-1 7-4 7-7.5V6l-7-3.5z" strokeLinejoin="round" />
                    </svg>
                    {L.hero.requestEngineerGuidance}
                  </Link>
                ) : (
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 border border-navy/30 text-navy font-semibold rounded-sm hover:border-accent hover:text-accent transition-colors text-sm gap-2"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="10" cy="10" r="7" />
                      <path d="M7 10h6M10 7v6" strokeLinecap="round" />
                    </svg>
                    {L.hero.viewSystemDetails}
                  </button>
                )}
              </div>
            </div>

            {/* Right: photo with tags */}
            <div>
              <div
                className="relative overflow-hidden rounded-sm border border-navy/10 cursor-pointer group"
                onClick={() => setModalOpen(true)}
                role="button"
                aria-label={L.hero.imageAria}
                style={{ aspectRatio: '16/10' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: data.heroObjectPosition ?? 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent pointer-events-none" />
                {data.photoTags.map((tag) => (
                  <div
                    key={tag.n}
                    className="absolute pointer-events-none"
                    style={{ left: `${tag.xPct}%`, top: `${tag.yPct}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent border-2 border-white/80 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                      {tag.n}
                    </div>
                  </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-navy/70 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-sm flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="10" cy="10" r="3" />
                      <path d="M1.5 10C3 6 6 3.5 10 3.5S17 6 18.5 10 14 16.5 10 16.5 3 14 1.5 10z" />
                    </svg>
                    {L.hero.viewSystemDetails}
                  </div>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 px-1">
                {data.photoTags.map((tag) => (
                  <div key={tag.n} className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-accent text-white text-[8px] font-bold flex items-center justify-center flex-shrink-0">{tag.n}</span>
                    <span className="text-navy/55 text-[10px]">{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURE BADGES ROW ───────────────────────────────────────────────── */}
      {data.featureBadges && data.featureBadges.length > 0 && (
        <div className="bg-navy border-t border-white/[0.06] px-4 sm:px-6 py-5 sm:py-6">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {data.featureBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-white text-xs sm:text-sm font-semibold"
              >
                <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M4 10.5l3.5 3.5L16 5.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── REQUEST MORE INFORMATION ─────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/[0.08] px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <h3 className="text-navy font-bold text-lg sm:text-xl mb-1">{L.requestMoreInfo.title}</h3>
            <p className="text-navy/60 text-sm leading-relaxed max-w-xl">
              {L.requestMoreInfo.body}
            </p>
          </div>
          <Link
            href={quoteHref}
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm flex-shrink-0"
          >
            {cta.requestQuotation}
          </Link>
        </div>
      </div>

      {/* ── SYSTEM GUIDANCE OVERVIEW ─────────────────────────────────────────── */}
      <div className="bg-white border-t border-navy/[0.08] px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <SectionLabel eyebrow={L.guidance.eyebrow} title={L.guidance.title} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-[#F8F9FA] border border-navy/10 p-6 rounded-sm hover:border-accent/30 transition-colors md:col-span-2 lg:col-span-1">
              <p className="text-[9px] font-bold tracking-widest uppercase text-accent mb-3">{L.guidance.systemIntent}</p>
              <p className="text-navy text-sm leading-relaxed">{data.systemIntent}</p>
            </div>
            <div className="bg-[#F8F9FA] border border-navy/10 p-6 rounded-sm hover:border-accent/30 transition-colors">
              <p className="text-[9px] font-bold tracking-widest uppercase text-accent mb-3">{L.guidance.commonApplications}</p>
              <p className="text-navy/70 text-sm leading-relaxed">{data.commonApplications}</p>
            </div>
            <div className="bg-[#F8F9FA] border border-navy/10 p-6 rounded-sm hover:border-accent/30 transition-colors">
              <p className="text-[9px] font-bold tracking-widest uppercase text-accent mb-3">{L.guidance.keyDesign}</p>
              <ul className="space-y-2">
                {data.keyDesignConsiderations.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-navy/70 text-xs leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8F9FA] border border-navy/10 p-6 rounded-sm hover:border-accent/30 transition-colors">
              <p className="text-[9px] font-bold tracking-widest uppercase text-accent mb-3">{L.guidance.finishDirections}</p>
              <div className="grid grid-cols-4 gap-1.5">
                {['smooth','sandblasted','textured','stone','concrete','colour','heritage','project'].map(t => (
                  <div key={t} className="rounded-sm overflow-hidden aspect-[2/1]">
                    <FinishSwatch type={t} />
                  </div>
                ))}
              </div>
              <p className="text-navy/50 text-[10px] mt-2 leading-relaxed">{L.guidance.finishDirectionsBlurb}</p>
            </div>
            <div className="bg-[#F8F9FA] border border-navy/10 p-6 rounded-sm hover:border-accent/30 transition-colors">
              <p className="text-[9px] font-bold tracking-widest uppercase text-accent mb-3">{L.guidance.infoRequired}</p>
              <ul className="space-y-1.5">
                {infoRequired.slice(0, 6).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-navy/70 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
                {infoRequired.length > 6 && (
                  <li className="text-navy/40 text-[10px] ps-3.5"><Ltr>+{infoRequired.length - 6}</Ltr> {L.guidance.moreItemsSuffix}</li>
                )}
              </ul>
            </div>
            <div className="bg-navy/[0.03] border border-navy/15 p-6 rounded-sm">
              <div className="flex items-start gap-2 mb-3">
                <svg className="w-4 h-4 text-navy/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[9px] font-bold tracking-widest uppercase text-navy/50">{L.guidance.importantNote}</p>
              </div>
              <p className="text-navy/60 text-xs leading-relaxed">{data.importantNote}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FINISH OPTIONS ───────────────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/[0.08] px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <SectionLabel eyebrow={L.finishesSection.eyebrow} title={L.finishesSection.title} />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {finishes.map((f) => (
              <div key={f.type} className="group">
                <div className="h-14 rounded-sm overflow-hidden border border-navy/10 group-hover:border-accent/40 transition-colors">
                  <FinishSwatch type={f.type} />
                </div>
                <p className="text-navy text-[10px] font-semibold mt-2 leading-tight">{f.label}</p>
                <p className="text-navy/50 text-[9px] mt-0.5 leading-relaxed line-clamp-2">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-navy/40 text-xs mt-6 leading-relaxed max-w-2xl">
            {L.finishesSection.blurb}
          </p>
        </div>
      </div>

      {/* ── SAMPLE DRAWING PREVIEW ───────────────────────────────────────────── */}
      <div className="bg-white border-t border-navy/[0.08] px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel eyebrow={L.sampleDrawing.eyebrow} title={L.sampleDrawing.title} />
              <p className="text-gray-500 text-sm leading-relaxed mb-6 -mt-4">
                {L.sampleDrawing.body}
              </p>
              <div className="flex items-start gap-2 bg-[#F8F9FA] border border-navy/10 p-4 rounded-sm">
                <svg className="w-4 h-4 text-navy/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-navy/55 text-xs leading-relaxed">
                  {L.sampleDrawing.note}
                </p>
              </div>
            </div>
            <div className="bg-[#F8F9FA] border border-navy/10 rounded-sm p-6">
              <p className="text-[9px] font-bold tracking-widest uppercase text-navy/40 mb-4">{L.sampleDrawing.caption}</p>
              <div className="bg-white border border-navy/[0.08] rounded-sm p-4">
                {sampleDrawing}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SYSTEM CONTEXT PREVIEW ───────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/[0.08] px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-white border border-navy/10 rounded-sm p-6">
              <p className="text-[9px] font-bold tracking-widest uppercase text-navy/40 mb-4">{L.systemContext.caption}</p>
              <div className="bg-[#F8F9FA] border border-navy/[0.08] rounded-sm p-4">
                {systemContext}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionLabel eyebrow={L.systemContext.eyebrow} title={L.systemContext.title} />
              <p className="text-gray-500 text-sm leading-relaxed mb-6 -mt-4">
                {L.systemContext.body}
              </p>
              <div className="space-y-3">
                {L.systemContext.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-navy/10 p-4 rounded-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    <p className="text-navy/70 text-xs leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESIGN GUIDANCE ──────────────────────────────────────────────────── */}
      <div className="bg-white border-t border-navy/[0.08] px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <SectionLabel eyebrow={L.designGuidanceSection.eyebrow} title={L.designGuidanceSection.title} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.designGuidance.map((g, i) => (
              <div key={g.label} className="bg-[#F8F9FA] border border-navy/10 p-6 rounded-sm hover:border-accent/40 hover:shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent text-[10px] font-bold font-mono tracking-widest">
                    <Ltr>{String(i + 1).padStart(2, '0')}</Ltr>
                  </span>
                  <div className="flex-1 h-px bg-navy/10" />
                </div>
                <h3 className="text-navy font-bold text-sm mb-2 leading-snug">{g.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INFORMATION REQUIRED ─────────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/[0.08] px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel eyebrow={L.infoReviewSection.eyebrow} title={L.infoReviewSection.title} />
              <p className="text-gray-500 text-sm leading-relaxed mb-8 -mt-4">
                {L.infoReviewSection.body}
              </p>
              <Link
                href={quoteHref}
                className="inline-flex items-center gap-2 min-h-[50px] px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
              >
                {cta.requestQuotation}
                <svg className="w-4 h-4 rtl:-scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {infoRequired.map((item) => (
                <div key={item} className="flex items-start gap-2.5 bg-white border border-navy/[0.08] p-4 rounded-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                  <p className="text-navy/70 text-xs leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── TECHNICAL NOTE ───────────────────────────────────────────────────── */}
      <div className="bg-white border-t border-navy/10 px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="border border-navy/15 bg-[#F8F9FA] p-6 rounded-sm">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-navy/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-navy/55 text-xs leading-relaxed">
                <span className="font-semibold text-navy/70">{L.technicalNote.label} </span>
                {L.technicalNote.body}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── TALK TO A SPECIALIST ─────────────────────────────────────────────── */}
      <div className="bg-navy/[0.03] border-t border-navy/10 px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-accent" />
                <span className="text-accent text-[10px] font-bold tracking-widest uppercase">{L.specialist.eyebrow}</span>
              </div>
              <h3 className="text-navy font-bold text-lg mb-2">{L.specialist.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                {L.specialist.body}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 bg-white border border-navy/10 p-4 rounded-sm">
                <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-navy font-semibold text-xs mb-0.5">{L.specialist.sendBriefTitle}</p>
                  <p className="text-navy/50 text-[10px]">{L.specialist.sendBriefBody}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-navy/10 p-4 rounded-sm">
                <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <div>
                  <p className="text-navy font-semibold text-xs mb-0.5">{L.specialist.whatsappTitle}</p>
                  <p className="text-navy/50 text-[10px]">{L.specialist.whatsappBody}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <a
                href={whatsappHref(locale)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={L.specialist.title}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                </svg>
                {L.specialist.title}
              </a>
              <Link
                href={quoteHref}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 border border-navy/25 text-navy font-semibold rounded-sm hover:border-accent hover:text-accent transition-colors text-sm"
              >
                {cta.requestQuotation}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <div className="bg-navy px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">{L.finalCta.eyebrow}</span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{data.ctaTitle}</h2>
          <p className="text-white/65 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            {data.ctaBody ?? L.finalCta.bodyFallback}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={quoteHref}
              className="inline-flex items-center justify-center min-h-[52px] px-10 py-3.5 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
            >
              {cta.requestQuotation}
            </Link>
            <Link
              href={localizeHref('/contact', locale)}
              className="inline-flex items-center justify-center min-h-[52px] px-10 py-3.5 border border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm"
            >
              {L.finalCta.speakToEngineer}
            </Link>
          </div>
        </div>
      </div>

      {/* Photo tag modal */}
      <PhotoTagModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        src={data.heroImage}
        alt={data.heroImageAlt}
        tags={data.photoTags}
      />

    </div>
  )
}
