'use client'

import React, { useEffect, useCallback } from 'react'
import Link from 'next/link'

// ─── Tab definitions ──────────────────────────────────────────────────────────

const TABS = [
  { id: 'overview',      label: 'Overview' },
  { id: 'materials',     label: 'Materials' },
  { id: 'arch-drawings', label: 'Arch. Drawings' },
  { id: 'shop-drawings', label: 'Shop Drawings' },
  { id: 'finishes',      label: 'Finishes & Colors' },
  { id: 'inputs',        label: 'Project Inputs' },
  { id: 'scope',         label: 'Scope & Deliverables' },
] as const

export type ModalTabId = (typeof TABS)[number]['id']

// ─── Data types ───────────────────────────────────────────────────────────────

export interface ComponentHotspot {
  letter: string
  label: string
  description: string
}

export interface ComponentDetail {
  id: string
  title: string
  shortDescription: string
  tags: string[]
  CardIllustration: () => React.ReactElement
  hotspots: ComponentHotspot[]
  HotspotDiagram?: () => React.ReactElement
  materials: string[]
  architecturalDrawings: string[]
  shopDrawings: string[]
  finishes: string[]
  projectInputs: string[]
  scopeDeliverables: string[]
}

// ─── Modal component ──────────────────────────────────────────────────────────

interface ModalProps {
  component: ComponentDetail | null
  activeTab: ModalTabId
  onTabChange: (tab: ModalTabId) => void
  onClose: () => void
}

function CheckMark() {
  return (
    <div className="w-5 h-5 rounded-full bg-accent/12 border border-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-2.5 h-2.5 text-accent" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

export function ComponentDetailModal({ component, activeTab, onTabChange, onClose }: ModalProps) {
  // Scroll lock
  useEffect(() => {
    if (component) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [component])

  // ESC key close
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() },
    [onClose],
  )
  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [handleKey])

  if (!component) return null

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-end sm:items-center justify-center"
      role="presentation"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#071B3B]/80 backdrop-blur-sm" aria-hidden="true" />

      {/* Panel */}
      <div
        className="relative bg-white w-full sm:max-w-4xl sm:rounded-sm flex flex-col shadow-2xl"
        style={{ maxHeight: 'min(94vh, 840px)' }}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-component-title"
      >
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex items-start gap-4 px-5 sm:px-7 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
          <div className="min-w-0 flex-1">
            <p className="text-accent text-[10px] font-bold tracking-widest uppercase mb-0.5">GFRC/GRC — Component Detail</p>
            <h2 id="modal-component-title" className="text-navy font-bold text-xl leading-tight">
              {component.title}
            </h2>
            <p className="text-gray-500 text-sm mt-1 leading-snug max-w-xl">{component.shortDescription}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {component.tags.map(tag => (
                <span key={tag} className="text-[10px] font-semibold bg-navy/8 text-navy/55 px-2.5 py-0.5 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Close component detail"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Tabs ───────────────────────────────────────────────────────── */}
        <div className="flex-shrink-0 bg-gray-50 border-b border-gray-100 overflow-x-auto">
          <div className="flex min-w-max">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={[
                  'px-4 sm:px-5 py-3 text-[11px] font-bold tracking-wide whitespace-nowrap border-b-2 transition-colors',
                  activeTab === tab.id
                    ? 'border-accent text-accent bg-white'
                    : 'border-transparent text-gray-500 hover:text-navy hover:bg-gray-100/80',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Scrollable body ────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="px-5 sm:px-7 py-6">

            {/* Overview */}
            {activeTab === 'overview' && (
              <div>
                {component.HotspotDiagram && (
                  <div className="bg-[#F4F6F9] border border-gray-200 rounded-sm overflow-hidden mb-6">
                    <component.HotspotDiagram />
                  </div>
                )}
                <h3 className="text-[11px] font-bold text-navy/50 tracking-widest uppercase mb-4">Visual Hotspots</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {component.hotspots.map(h => (
                    <div key={h.letter} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-sm p-3.5">
                      <span className="w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {h.letter}
                      </span>
                      <div>
                        <p className="text-navy font-semibold text-sm leading-snug">{h.label}</p>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{h.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Materials */}
            {activeTab === 'materials' && (
              <div>
                <h3 className="text-[11px] font-bold text-navy/50 tracking-widest uppercase mb-5">Material Composition</h3>
                <ul className="space-y-3">
                  {component.materials.map((m, i) => (
                    <li key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-sm p-4">
                      <CheckMark />
                      <span className="text-gray-700 text-sm leading-relaxed">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Arch. Drawings */}
            {activeTab === 'arch-drawings' && (
              <div>
                <h3 className="text-[11px] font-bold text-navy/50 tracking-widest uppercase mb-5">Architectural Drawing References</h3>
                <ul className="space-y-3">
                  {component.architecturalDrawings.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-sm w-7 flex-shrink-0 tabular-nums mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-gray-700 text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-navy/4 border border-navy/10 rounded-sm">
                  <p className="text-gray-500 text-xs leading-relaxed">
                    All dimensions are confirmed at the technical review stage against approved project drawings. Reference information only.
                  </p>
                </div>
              </div>
            )}

            {/* Shop Drawings */}
            {activeTab === 'shop-drawings' && (
              <div>
                <h3 className="text-[11px] font-bold text-navy/50 tracking-widest uppercase mb-5">Structural & Shop Drawing Notes</h3>
                <ul className="space-y-3">
                  {component.shopDrawings.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-sm w-7 flex-shrink-0 tabular-nums mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-gray-700 text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-accent/5 border border-accent/15 rounded-sm">
                  <p className="text-[11px] text-accent/70 font-semibold leading-relaxed">
                    Detailed fixing systems, connection details, and structural calculations are not published publicly. Shop drawings are prepared during technical review and remain project-confidential.
                  </p>
                </div>
              </div>
            )}

            {/* Finishes */}
            {activeTab === 'finishes' && (
              <div>
                <h3 className="text-[11px] font-bold text-navy/50 tracking-widest uppercase mb-5">Available Finishes & Colors</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {component.finishes.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-sm p-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent/40 flex-shrink-0 mt-1.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-5 leading-relaxed">
                  A project-approved sample is required before manufacture begins. Final finish is confirmed against the approved sample and project specification.
                </p>
              </div>
            )}

            {/* Project Inputs */}
            {activeTab === 'inputs' && (
              <div>
                <h3 className="text-[11px] font-bold text-navy/50 tracking-widest uppercase mb-3">Required Project Inputs</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  Provide the following to enable a thorough technical review and accurate GFRC/GRC scope proposal from Durraka.
                </p>
                <ul className="space-y-2.5">
                  {component.projectInputs.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-sm px-4 py-3">
                      <CheckMark />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Scope & Deliverables */}
            {activeTab === 'scope' && (
              <div>
                <h3 className="text-[11px] font-bold text-navy/50 tracking-widest uppercase mb-5">Scope & Deliverables</h3>
                <div className="space-y-3">
                  {component.scopeDeliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-sm p-4">
                      <span className="text-2xl font-bold text-navy/12 leading-none flex-shrink-0 select-none tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-gray-700 text-sm leading-relaxed pt-0.5">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        <div className="flex-shrink-0 border-t border-gray-100 px-5 sm:px-7 py-4 bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
            Reference content for scope coordination only. Installation and fixing details are excluded.
          </p>
          <Link
            href="/request-quotation"
            onClick={onClose}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-xs font-semibold rounded-sm hover:bg-red-700 transition-colors"
          >
            Request a Quotation
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
