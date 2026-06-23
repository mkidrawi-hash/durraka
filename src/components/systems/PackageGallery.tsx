'use client'

import { useState } from 'react'
import { ImageLightbox } from './ImageLightbox'
import type { LightboxImage } from './ImageLightbox'

export type { LightboxImage }

interface PackageGalleryProps {
  id?: string
  title?: string
  eyebrow?: string
  entries: LightboxImage[]
}

// ─── Status badge colors ──────────────────────────────────────────────────────

function statusBadge(status: string | undefined, scope: string | undefined) {
  // AI Concept Reference
  if (scope?.toLowerCase().includes('ai concept')) {
    return { label: 'Concept Visual', className: 'bg-purple-50 text-purple-700 border border-purple-200' }
  }
  if (!status) return null
  switch (status) {
    case 'Completed':
      return { label: 'Completed', className: 'bg-green-50 text-green-700 border border-green-200' }
    case 'Under Execution':
      return { label: 'Under Execution', className: 'bg-blue-50 text-blue-700 border border-blue-200' }
    case 'Manufacturing Stage':
      return { label: 'Manufacturing Stage', className: 'bg-amber-50 text-amber-700 border border-amber-200' }
    case 'Detail View':
      return { label: 'Detail View', className: 'bg-[#071B3B]/10 text-[#071B3B] border border-[#071B3B]/20' }
    case 'Mockup':
      return { label: 'Mockup', className: 'bg-gray-100 text-gray-600 border border-gray-200' }
    default:
      return { label: status, className: 'bg-gray-100 text-gray-600 border border-gray-200' }
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export function PackageGallery({ id, title = 'Project Gallery', eyebrow = 'Selected GFRC/GRC Works', entries }: PackageGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Build unique scope filters
  const scopes = ['All', ...Array.from(new Set(entries.map(e => e.scope).filter(Boolean) as string[]))]

  // Filtered entries
  const filtered = activeFilter === 'All' ? entries : entries.filter(e => e.scope === activeFilter)

  return (
    <>
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={filtered}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* Gallery section */}
      <section id={id} className="bg-white border-t border-navy/8 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">{eyebrow}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-navy">{title}</h2>

            {/* Filter chips */}
            {scopes.length > 2 && (
              <div className="flex flex-wrap gap-2">
                {scopes.map(scope => (
                  <button
                    key={scope}
                    onClick={() => { setActiveFilter(scope); setLightboxIndex(null) }}
                    className={`text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full border transition-all ${
                      activeFilter === scope
                        ? 'bg-[#071B3B] text-white border-[#071B3B]'
                        : 'bg-white text-[#071B3B]/70 border-[#071B3B]/20 hover:border-[#071B3B]/50 hover:text-[#071B3B]'
                    }`}
                  >
                    {scope}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((entry, i) => {
              const badge = statusBadge(entry.status, entry.scope)
              const isAiConcept = entry.scope?.toLowerCase().includes('ai concept')

              return (
                <button
                  key={`${entry.src}-${i}`}
                  onClick={() => setLightboxIndex(i)}
                  className="group text-left bg-white border border-navy/10 rounded-sm overflow-hidden hover:border-accent/40 hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={`View image: ${entry.alt}`}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={entry.src}
                      alt={entry.alt}
                      loading={i < 3 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#071B3B]/0 group-hover:bg-[#071B3B]/40 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Metadata below image */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        {entry.location && (
                          <p className="text-navy/70 text-xs font-semibold leading-snug truncate">{entry.location}</p>
                        )}
                        {entry.year && (
                          <p className="text-navy/40 text-[11px] mt-0.5">{entry.year}</p>
                        )}
                      </div>
                      {/* Concept Visual or Status badge */}
                      {isAiConcept ? (
                        <span className="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                          Concept Visual
                        </span>
                      ) : badge && (
                        <span className={`flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${badge.className}`}>
                          {badge.label}
                        </span>
                      )}
                    </div>
                    {entry.scope && !isAiConcept && (
                      <span className="inline-block text-[10px] font-semibold tracking-wide text-navy/50 bg-navy/5 px-2 py-0.5 rounded-full">
                        {entry.scope}
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-navy/40 text-sm text-center py-12">No images in this category.</p>
          )}
        </div>
      </section>
    </>
  )
}
