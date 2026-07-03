'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/social-links'
import { packagesContent as PKG } from '@/content/en/packages'
import { DesignIntentDiagram, type DesignDiagram } from './DesignIntentDiagram'
export type { DesignDiagram } from './DesignIntentDiagram'
import {
  ComponentDetailModal,
  COMPONENT_FINISHES,
  type ComponentDetail,
  type FinishId,
  type ModalTabId,
} from './ComponentDetailModal'

// Single controlled engineer-guidance flow (Phase 2). The package slug is passed
// as a query param so the team can see which package prompted the request; the
// route already logs the referer, so the source page is captured either way.
const ENGINEER_GUIDANCE_PATH = '/systems/gfrc-grc-facade-cladding/engineer-guidance'

// ─── Types ────────────────────────────────────────────────────────────────────

export type { ComponentDetail }

export interface InfographicBoard {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface ReviewStep {
  n: string
  title: string
  description: string
}

export interface PremiumPackageData {
  title: string
  eyebrow: string
  subtitle: string
  heroDescription: string
  illustrativeArea: string
  visibleComponents: string[]
  HeroIllustration: () => React.ReactElement
  packageIntent: string
  suitableApplications: string[]
  componentDetails: ComponentDetail[]
  infographics?: InfographicBoard[]
  reviewSteps: ReviewStep[]
  // Package slug — passed to the engineer-guidance CTA as context.
  slug: string
  // Schematic 2D design-intent diagram (arrangement only; no dimensions/sections).
  designDiagram: DesignDiagram
  // Optional real 3D render. When absent, a branded placeholder is shown.
  conceptImageSrc?: string
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-accent flex-shrink-0" aria-hidden="true" />
      <span className="text-accent text-xs font-semibold tracking-widest uppercase">{label}</span>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg className="w-3 h-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const QUICK_READ = [
  { icon: '◈', text: 'Custom architectural expression, matched to your design intent' },
  { icon: '◈', text: 'Precision-engineered GFRC/GRC — manufactured in Saudi Arabia' },
  { icon: '◈', text: 'Suitable for modern, heritage, and contemporary projects' },
  { icon: '◈', text: 'Project-specific scope — engineered from your drawings' },
  { icon: '◈', text: 'Technical review required before final quotation' },
]

const FINISH_DIRECTIONS = [
  { label: 'Smooth Architectural Finish', description: 'Fine-textured, paint-ready surface for clean contemporary facades.' },
  { label: 'Sandblasted Finish', description: 'Lightly abraded surface revealing the aggregate character.' },
  { label: 'Stone-Like Texture', description: 'Aggregate and pigment combination to replicate natural stone.' },
  { label: 'Textured / Cast Finish', description: 'Ribbed, board-formed, or custom cast texture from mould.' },
  { label: 'Heritage Warm Tone', description: 'Warm-toned, hand-textured surface for classical heritage projects.' },
  { label: 'Custom Colour Match', description: 'Integral pigment matched to RAL, NCS, or project specification.' },
]

const INFORMATION_REQUIRED = [
  'Architectural elevations and drawings',
  'Sections through key elements',
  'BOQ / quantity schedule',
  'Structural drawings',
  'Finish and color references',
  'Available reference images',
  'Project location and timeline',
  'Site constraints or special requirements',
]

// ─── Component card ───────────────────────────────────────────────────────────

function ComponentCard({
  comp,
  onOpen,
}: {
  comp: ComponentDetail
  onOpen: (comp: ComponentDetail, finish: FinishId) => void
}) {
  const [finish, setFinish] = useState<FinishId>('white')
  const overlay = COMPONENT_FINISHES.find(f => f.id === finish)?.overlay ?? ''

  return (
    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm flex flex-col group">
      {comp.image ? (
        <div className="relative overflow-hidden" style={{ height: '192px' }}>
          <Image
            src={comp.image}
            alt={comp.imageAlt ?? comp.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" aria-hidden="true" />
          {/* Finish colour overlay */}
          <div
            className="absolute inset-0 pointer-events-none transition-colors duration-300"
            style={{ backgroundColor: overlay }}
            aria-hidden="true"
          />
          {/* Finish swatches */}
          <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5">
            {COMPONENT_FINISHES.map(f => (
              <button
                key={f.id}
                onClick={e => { e.stopPropagation(); setFinish(f.id) }}
                title={f.label}
                className={[
                  'w-4 h-4 rounded-full border-2 transition-all duration-200',
                  finish === f.id
                    ? 'border-white shadow-md scale-110'
                    : 'border-white/40 hover:border-white/80',
                ].join(' ')}
                style={{ backgroundColor: f.swatch }}
                aria-label={`${f.label} finish`}
                aria-pressed={finish === f.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-[#EEF0F5] px-6 py-5 flex items-center justify-center" style={{ minHeight: '150px' }}>
          <comp.CardIllustration />
        </div>
      )}

      <div className="flex-1 p-5 flex flex-col">
        {comp.image && (
          <p className="text-[9px] font-semibold text-navy/35 uppercase tracking-widest mb-1.5">
            {COMPONENT_FINISHES.find(f => f.id === finish)?.label} Finish
          </p>
        )}
        <h3 className="text-navy font-bold text-base leading-snug mb-2">{comp.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{comp.shortDescription}</p>
        <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
          {comp.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-semibold bg-navy/6 text-navy/55 px-2 py-0.5 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onOpen(comp, finish)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-navy/20 text-navy text-xs font-bold tracking-wide rounded-sm hover:bg-navy hover:text-white hover:border-navy transition-colors"
        >
          View Details
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// ─── Main layout ──────────────────────────────────────────────────────────────

export function PremiumPackageLayout({ data }: { data: PremiumPackageData }) {
  const {
    title,
    eyebrow,
    subtitle,
    heroDescription,
    illustrativeArea,
    visibleComponents,
    HeroIllustration,
    packageIntent,
    suitableApplications,
    componentDetails,
    infographics,
    reviewSteps,
    slug,
    designDiagram,
    conceptImageSrc,
  } = data

  const [selectedComponent, setSelectedComponent] = useState<ComponentDetail | null>(null)
  const [activeTab, setActiveTab] = useState<ModalTabId>('overview')
  const [cardFinish, setCardFinish] = useState<FinishId>('white')

  const openModal = (component: ComponentDetail, finish: FinishId = 'white') => {
    setSelectedComponent(component)
    setCardFinish(finish)
    setActiveTab('overview')
  }

  const closeModal = () => setSelectedComponent(null)

  return (
    <div className="min-h-screen">

      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <HeroIllustration />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/55 to-navy" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-16 sm:pb-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 text-xs text-white/40">
            <Link href="/packages" className="hover:text-white/70 transition-colors">Packages</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/60">{title}</span>
          </nav>
          <div className="max-w-3xl">
            <Eyebrow label={eyebrow} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{title}</h1>
            <p className="text-white/80 text-lg sm:text-xl font-light mb-3 leading-relaxed">{subtitle}</p>
            <p className="text-white/60 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">{heroDescription}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-white/8 border border-white/15 rounded-sm px-4 py-3">
                <p className="text-white/40 text-[9px] font-semibold tracking-widest uppercase mb-0.5">Illustrative Area</p>
                <p className="text-white font-semibold text-sm">{illustrativeArea}</p>
              </div>
              <div className="bg-white/8 border border-white/15 rounded-sm px-4 py-3">
                <p className="text-white/40 text-[9px] font-semibold tracking-widest uppercase mb-1">Visible Components</p>
                <div className="flex flex-wrap gap-1.5">
                  {visibleComponents.map(c => (
                    <span key={c} className="text-white/70 text-[10px] font-medium bg-white/10 px-2 py-0.5 rounded-sm">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link
                href="/request-quotation"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-red-700 transition-colors"
              >
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#components"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/25 text-white text-sm font-semibold rounded-sm hover:bg-white/20 transition-colors"
              >
                What&apos;s Included
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Quick highlights ───────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {QUICK_READ.map(({ icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <span className="text-accent text-base leading-none flex-shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
                <p className="text-navy/70 text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Package overview ───────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Package Overview" />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6 leading-tight">What This Package Is Designed To Achieve</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{packageIntent}</p>
            </div>
            <div className="bg-navy/4 border border-navy/10 rounded-sm p-6">
              <p className="text-navy/40 text-[10px] font-semibold tracking-widest uppercase mb-4">Suitable For</p>
              <ul className="space-y-3">
                {suitableApplications.map(app => (
                  <li key={app} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-navy/80 text-sm leading-snug">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Component cards ───────────────────────────────────────────── */}
      <section id="components" className="bg-[#F4F6F9] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Package Components" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">What&apos;s Included in This Package</h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
            Each component is precision-manufactured to project drawings. Click <strong className="text-navy font-semibold">View Details</strong> to explore materials, architectural references, finishes, and scope.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {componentDetails.map(comp => (
              <ComponentCard key={comp.id} comp={comp} onOpen={openModal} />
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-8 leading-relaxed max-w-2xl">
            All component details are for sales-engineering reference only. Fixing methods, structural connections, and proprietary manufacturing details are not disclosed publicly.
          </p>
        </div>
      </section>

      {/* ── 4b. Design intent — 2D schematic + 3D concept slot ───────────── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label={PKG.designIntent.eyebrow} />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">{PKG.designIntent.heading}</h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">{PKG.designIntent.intro}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* PART 1 — schematic 2D diagram */}
            <DesignIntentDiagram diagram={designDiagram} title={title} />

            {/* PART 2 — 3D concept slot: real image if provided, else branded placeholder */}
            <div>
              {conceptImageSrc ? (
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-navy/10">
                  <Image
                    src={conceptImageSrc}
                    alt={`${title} — 3D concept render`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[4/3] rounded-sm border border-white/10 bg-gradient-to-br from-navy via-[#0a2247] to-[#05122a] flex flex-col items-center justify-center text-center px-6">
                  <div className="w-14 h-14 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm tracking-wide">{PKG.concept3D.label}</p>
                  <p className="text-white/45 text-xs mt-1.5 max-w-xs leading-relaxed">{PKG.concept3D.sublabel}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4c. Package scope & estimated quantities (controlled — no numbers) ── */}
      <section className="bg-[#F4F6F9] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label={PKG.scope.eyebrow} />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">{PKG.scope.heading}</h2>
          <p className="text-gray-500 text-base mb-8 max-w-2xl leading-relaxed">{PKG.scope.intro}</p>

          {/* Descriptive component list ONLY — no quantities, areas, or counts */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-10 max-w-3xl">
            {componentDetails.map((comp) => (
              <li key={comp.id} className="flex items-center gap-2.5 text-sm text-gray-700">
                <CheckIcon />
                {comp.title}
              </li>
            ))}
          </ul>

          {/* Bordered BOQ callout — represented by a CTA, never by numbers */}
          <div className="border border-navy/15 rounded-sm bg-white p-6 sm:p-7 max-w-3xl">
            <div className="flex items-start gap-3 mb-5">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-600 text-sm leading-relaxed">{PKG.scope.boqCallout}</p>
            </div>
            <Link
              href={`${ENGINEER_GUIDANCE_PATH}?package=${slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy-light transition-colors"
            >
              {PKG.scope.ctaLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Architecture Reference Boards ─────────────────────────────── */}
      {infographics && infographics.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Eyebrow label="Architecture Reference Boards" />
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Component Architecture Boards</h2>
            <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
              Detailed architecture reference boards for the GFRC/GRC components in this package.
            </p>
            <div className="space-y-8">
              {infographics.map(board => (
                <div key={board.image} className="bg-gray-50 border border-gray-100 rounded-sm overflow-hidden shadow-sm">
                  <div className="px-5 py-4 border-b border-gray-100">
                    <h3 className="text-navy font-bold text-base leading-snug">{board.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{board.description}</p>
                  </div>
                  <div className="relative w-full bg-[#F4F6F9]" style={{ aspectRatio: '16/9', minHeight: '300px' }}>
                    <Image
                      src={board.image}
                      alt={board.imageAlt}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-8 leading-relaxed max-w-2xl">
              For design understanding and early scope coordination only. Detailed fixing, connection, and installation information is excluded.
            </p>
          </div>
        </section>
      )}

      {/* ── 6. How a project is reviewed ─────────────────────────────────── */}
      <section className="bg-navy py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Our Process" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">How a Project Is Reviewed</h2>
          <p className="text-white/55 text-base mb-12 max-w-2xl leading-relaxed">
            From drawing submission to manufactured component — a clear, coordinated technical process.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {reviewSteps.map((step, i) => (
              <div
                key={step.n}
                className="relative flex flex-col p-6 border-b border-white/10 sm:border-r last:border-r-0"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {step.n}
                  </span>
                  <div className="h-px flex-1 bg-white/15" aria-hidden="true" />
                  {i < reviewSteps.length - 1 && (
                    <svg className="w-4 h-4 text-white/20 flex-shrink-0 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{step.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Available finishes ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Finishes" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10">Available Finish Directions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {FINISH_DIRECTIONS.map(finish => (
              <div key={finish.label} className="bg-white border border-gray-100 rounded-sm p-5 shadow-sm">
                <div className="w-6 h-1 bg-accent/40 rounded-full mb-3" aria-hidden="true" />
                <p className="text-navy font-semibold text-sm mb-1.5">{finish.label}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{finish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Information required ───────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Before We Can Quote" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Information Required for Technical Review</h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
            Submit the following for an accurate GFRC/GRC scope and pricing proposal. Our engineering team will review and follow up promptly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {INFORMATION_REQUIRED.map(item => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/12 border border-accent/25 flex items-center justify-center flex-shrink-0">
                  <CheckIcon />
                </div>
                <span className="text-navy/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Premium dark CTA ───────────────────────────────────────────── */}
      <section className="bg-navy py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-xs font-bold tracking-widest uppercase mb-4">Have a project to review?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Ready to discuss your GFRC/GRC scope?
            </h2>
            <p className="text-white/55 text-base sm:text-lg mb-10 leading-relaxed">
              Share your drawings with our team. We will review the scope, confirm the components, and prepare a precise technical proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/request-quotation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-red-700 transition-colors"
              >
                Request a Quotation
              </Link>
              <Link
                href={SOCIAL_LINKS.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white text-sm font-semibold rounded-sm hover:bg-white/20 transition-colors"
              >
                <WhatsAppIcon />
                Contact Durraka
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Disclaimer ────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="border border-navy/10 rounded-sm p-5 max-w-3xl">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-navy/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-400 text-xs leading-relaxed">
                <span className="text-navy/60 font-semibold">Important Note — </span>
                {PKG.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ─────────────────────────────────────────────────────────── */}
      <ComponentDetailModal
        component={selectedComponent}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onClose={closeModal}
        initialFinish={cardFinish}
      />

    </div>
  )
}
