'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { GalleryImage, GalleryFilter, GalleryProject } from '@/data/galleryImages'
import { GALLERY_FILTERS, GALLERY_PROJECTS } from '@/data/galleryImages'
import type { Locale, Translatable } from '@/lib/i18n'
import { localizeHref } from '@/lib/i18n'
import { Ltr } from '@/components/i18n/Ltr'
import { galleryContent } from '@/content/en/gallery'
import { galleryContentAr } from '@/content/ar/gallery'

// The locale dictionary shape (English source widened to `string`). Both the EN
// and AR dictionaries are assignable to this, so `t` can hold either.
type GalleryDict = Translatable<typeof galleryContent>

// Look up an image's localized display title/alt, falling back to the English
// values baked into the data (the data stays the English source of truth).
function imageMeta(t: GalleryDict, img: GalleryImage): { title: string; alt: string } {
  const m = t.images[img.id as keyof GalleryDict['images']] as { title: string; alt: string } | undefined
  return { title: m?.title ?? img.title, alt: m?.alt ?? img.alt }
}

// Assemble the caption location line. Normalizes the redundant "…, KSA" pattern:
// a known city renders "City, {saudiArabia}"; a generic or empty city renders just
// "{saudiArabia}". The placeholder year "Various" (and empty years) are omitted so
// the caption never shows a vague date. City/year come from the data as-is.
function formatLocation(city: string, year: string, saudiArabia: string): string {
  const c = (city ?? '').trim()
  const place = !c || c.toLowerCase() === 'saudi arabia' ? saudiArabia : `${c}, ${saudiArabia}`
  const y = (year ?? '').trim()
  return y && y.toLowerCase() !== 'various' ? `${place} · ${y}` : place
}

// ─── Filter bar ────────────────────────────────────────────────────────────────

function FilterBar({
  active,
  counts,
  onChange,
  t,
}: {
  active: GalleryFilter
  counts: Record<string, number>
  onChange: (f: GalleryFilter) => void
  t: GalleryDict
}) {
  return (
    <div
      className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 pb-1"
      style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
    >
      <div className="flex items-center gap-2 min-w-max">
        {GALLERY_FILTERS
          // Only show "All" plus categories that currently have ≥ 1 published
          // item. Counts come from the published set, so a future category
          // appears automatically once it has content (and empty ones vanish).
          .filter((filter) => filter === 'All' || (counts[filter] ?? 0) >= 1)
          .map((filter) => {
          const isActive = filter === active
          const count = counts[filter] ?? 0
          return (
            <button
              key={filter}
              onClick={() => onChange(filter)}
              className={[
                'flex-shrink-0 inline-flex items-center gap-1.5 h-8 px-3.5 rounded-sm text-xs font-semibold tracking-wide transition-colors whitespace-nowrap',
                isActive
                  ? 'bg-accent text-white'
                  : 'bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.12] text-gray-600 dark:text-white/65 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent',
              ].join(' ')}
            >
              {filter === 'All' ? t.filterAll : t.categoryLabels[filter]}
              {filter !== 'All' && (
                <span
                  className={[
                    'text-[10px] font-bold tabular-nums rounded-full px-1 min-w-[1.25rem] text-center leading-4',
                    isActive
                      ? 'bg-white/25 text-white'
                      : 'bg-gray-100 dark:bg-white/[0.10] text-gray-400 dark:text-white/45',
                  ].join(' ')}
                >
                  <Ltr>{count}</Ltr>
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Lightbox ──────────────────────────────────────────────────────────────────

function GalleryLightbox({
  images,
  initialIndex,
  onClose,
  t,
}: {
  images: GalleryImage[]
  initialIndex: number
  onClose: () => void
  t: GalleryDict
}) {
  const [index, setIndex] = useState(initialIndex)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })

  const imageAreaRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragStartPos = useRef({ x: 0, y: 0 })
  const panAtDragStart = useRef({ x: 0, y: 0 })
  const touchStartPos = useRef({ x: 0, y: 0 })
  const touchStartTime = useRef(0)
  const touchStartDist = useRef<number | null>(null)
  const zoomAtPinchStart = useRef(1)
  const lastTapTime = useRef(0)

  const current = images[index]
  const total = images.length
  const currentMeta = imageMeta(t, current)

  const clampPan = (x: number, y: number, currentZoom: number) => {
    const area = imageAreaRef.current
    const wrapper = imageWrapperRef.current
    if (!area || !wrapper) return { x, y }
    const maxX = Math.max(0, (wrapper.clientWidth * currentZoom - area.clientWidth) / 2)
    const maxY = Math.max(0, (wrapper.clientHeight * currentZoom - area.clientHeight) / 2)
    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    }
  }

  const updateZoom = useCallback((delta: number, reset = false) => {
    if (reset) { setZoom(1); setPan({ x: 0, y: 0 }); return }
    setZoom((z) => {
      const next = Math.max(1, Math.min(4, z + delta))
      if (next <= 1) setPan({ x: 0, y: 0 })
      return next
    })
  }, [])

  const goTo = useCallback((i: number) => {
    setIndex(i); setZoom(1); setPan({ x: 0, y: 0 })
  }, [])

  const prev = useCallback(() => goTo(index === 0 ? total - 1 : index - 1), [goTo, index, total])
  const next = useCallback(() => goTo(index === total - 1 ? 0 : index + 1), [goTo, index, total])

  useEffect(() => {
    // Lock body scroll while open, and return focus to the trigger on close.
    const was = document.body.style.overflow
    const trigger = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = was
      trigger?.focus?.()
    }
  }, [])

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape': onClose(); break
        case 'ArrowLeft': prev(); break
        case 'ArrowRight': next(); break
        case '+': case '=': updateZoom(0.5); break
        case '-': updateZoom(-0.5); break
        case '0': updateZoom(0, true); break
      }
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [prev, next, onClose, updateZoom])

  useEffect(() => {
    const el = imageAreaRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      setZoom((z) => {
        const next = Math.max(1, Math.min(4, z + (e.deltaY < 0 ? 0.5 : -0.5)))
        if (next <= 1) setPan({ x: 0, y: 0 })
        return next
      })
    }
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length >= 2 || isDragging.current) e.preventDefault()
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  const getTouchDist = (t: React.TouchList) => {
    const dx = t[0].clientX - t[1].clientX
    const dy = t[0].clientY - t[1].clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      isDragging.current = false
      touchStartDist.current = getTouchDist(e.touches)
      zoomAtPinchStart.current = zoom
      panAtDragStart.current = { ...pan }
    } else if (e.touches.length === 1) {
      touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      touchStartTime.current = Date.now()
      if (zoom > 1) {
        isDragging.current = true
        panAtDragStart.current = { ...pan }
      }
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartDist.current !== null) {
      const newZoom = Math.max(1, Math.min(4, zoomAtPinchStart.current * (getTouchDist(e.touches) / touchStartDist.current)))
      setZoom(newZoom)
      setPan(newZoom <= 1 ? { x: 0, y: 0 } : clampPan(panAtDragStart.current.x, panAtDragStart.current.y, newZoom))
    } else if (e.touches.length === 1 && isDragging.current) {
      setPan(clampPan(
        panAtDragStart.current.x + e.touches[0].clientX - touchStartPos.current.x,
        panAtDragStart.current.y + e.touches[0].clientY - touchStartPos.current.y,
        zoom,
      ))
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches.length === 1 && e.touches.length === 0) {
      const dx = e.changedTouches[0].clientX - touchStartPos.current.x
      const dy = e.changedTouches[0].clientY - touchStartPos.current.y
      const isTap = Date.now() - touchStartTime.current < 220 && Math.abs(dx) < 12 && Math.abs(dy) < 12
      if (isDragging.current) {
        isDragging.current = false
      } else if (isTap) {
        const now = Date.now()
        if (now - lastTapTime.current < 400) {
          setZoom(z => { const n = z > 1.05 ? 1 : 2.5; if (n <= 1) setPan({ x: 0, y: 0 }); return n })
          lastTapTime.current = 0
        } else { lastTapTime.current = now }
      } else if (zoom <= 1.05 && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 60) {
        if (dx > 0) prev(); else next()
      }
    }
    if (e.touches.length < 2) touchStartDist.current = null
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return
    e.preventDefault()
    isDragging.current = true
    dragStartPos.current = { x: e.clientX, y: e.clientY }
    panAtDragStart.current = { ...pan }
    document.body.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    setPan(clampPan(
      panAtDragStart.current.x + e.clientX - dragStartPos.current.x,
      panAtDragStart.current.y + e.clientY - dragStartPos.current.y,
      zoom,
    ))
  }

  const handleMouseUp = () => { isDragging.current = false; document.body.style.cursor = '' }

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 flex flex-col"
      style={{ background: 'rgba(4,15,34,0.95)', height: '100dvh' }}
      role="dialog"
      aria-modal="true"
      aria-label={t.lightboxPreview.replace('{title}', currentMeta.title)}
    >
      {/* Header */}
      <div className="flex-shrink-0 bg-[#071B3B] border-b border-white/[0.08] px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-[#D71920] text-[9px] font-bold tracking-widest uppercase mb-0.5">
            {t.lightboxEyebrow}
          </p>
          <h2 className="text-white font-bold text-sm sm:text-base leading-tight truncate">
            {currentMeta.title}
          </h2>
        </div>
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <span className="text-white/30 text-xs tabular-nums hidden sm:block"><Ltr>{index + 1} / {total}</Ltr></span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-sm bg-white/[0.07] hover:bg-white/[0.16] border border-white/[0.12] flex items-center justify-center transition-colors"
            aria-label={t.lightboxClose}
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image area */}
      <div
        ref={imageAreaRef}
        className="flex-1 relative overflow-hidden flex items-center justify-center"
        style={{ cursor: zoom > 1 ? 'grab' : 'default', touchAction: 'none', overscrollBehavior: 'contain' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {total > 1 && (
          <button onClick={prev} className="absolute start-3 sm:start-5 z-10 w-9 h-9 rounded-sm bg-[#071B3B]/90 hover:bg-[#071B3B] border border-white/[0.15] flex items-center justify-center transition-colors" aria-label={t.lightboxPrevious}>
            <svg className="w-4 h-4 text-white rtl:-scale-x-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
        )}

        <div
          ref={imageWrapperRef}
          className="select-none"
          style={{ transform: `translate3d(${pan.x}px,${pan.y}px,0) scale(${zoom})`, transformOrigin: 'center center', transition: isDragging.current ? 'none' : 'transform 0.13s ease', willChange: 'transform' }}
        >
          {current.image ? (
            <Image
              src={current.image}
              alt={currentMeta.alt}
              width={1600}
              height={1200}
              className="block w-auto h-auto rounded-sm shadow-2xl"
              style={{ maxWidth: 'min(92vw, 1200px)', maxHeight: '56vh' }}
              priority
              draggable={false}
            />
          ) : (
            <div
              className="flex flex-col items-center justify-center gap-4 rounded-sm border border-white/[0.10] bg-[#071B3B]/60"
              style={{ width: 'min(88vw, 780px)', aspectRatio: '4/3' }}
            >
              <svg className="w-12 h-12 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1} />
                <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 15l-5-5L5 21" />
              </svg>
              <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase">{t.imageComingSoon}</p>
            </div>
          )}
        </div>

        {total > 1 && (
          <button onClick={next} className="absolute end-3 sm:end-5 z-10 w-9 h-9 rounded-sm bg-[#071B3B]/90 hover:bg-[#071B3B] border border-white/[0.15] flex items-center justify-center transition-colors" aria-label={t.lightboxNext}>
            <svg className="w-4 h-4 text-white rtl:-scale-x-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 bg-[#071B3B] border-t border-white/[0.08]">
        <div className="px-4 sm:px-6 pt-3 pb-2.5 border-b border-white/[0.06]">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 bg-accent/20 border border-accent/30 text-accent rounded-sm">
              {t.categoryLabels[current.category]}
            </span>
            <span className="text-white/35 text-[10px]">
              {formatLocation(current.city, current.year, t.locationSaudiArabia)}
            </span>
          </div>
          <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-2xl">{current.description}</p>
        </div>
        <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          <span className="text-white/25 text-xs tabular-nums"><Ltr>{index + 1} / {total}</Ltr></span>
          <div className="flex items-center gap-1">
            <button onClick={() => updateZoom(-0.5)} disabled={zoom <= 1} className="w-7 h-7 rounded-sm bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.10] flex items-center justify-center transition-colors disabled:opacity-25" aria-label={t.lightboxZoomOut}>
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </button>
            <button onClick={() => updateZoom(0, true)} className="h-7 px-2 rounded-sm bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.10] text-white/50 text-[10px] font-bold tracking-wide tabular-nums min-w-[2.75rem] text-center transition-colors" aria-label={t.lightboxResetZoom}>
              <Ltr>{Math.round(zoom * 100)}%</Ltr>
            </button>
            <button onClick={() => updateZoom(0.5)} disabled={zoom >= 4} className="w-7 h-7 rounded-sm bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.10] flex items-center justify-center transition-colors disabled:opacity-25" aria-label={t.lightboxZoomIn}>
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </button>
          </div>
        </div>
        <p className="px-4 sm:px-6 pb-3 text-white/15 text-[9px] leading-relaxed">
          {t.lightboxDisclosure}
        </p>
      </div>
    </div>
  )
}

// ─── Project card ──────────────────────────────────────────────────────────────
// One card per PROJECT (cover image + title + city · year + system tags + photo
// count). Clicking anywhere opens the existing lightbox scoped to the project's
// photo set. Mobile-first: 16/10 cover, gradient only over the lower text zone.

export interface GalleryProjectView {
  project: GalleryProject
  members: GalleryImage[]
  cover: GalleryImage
  categories: GalleryImage['category'][]
}

// Project meta line: localized city (never raw), year only when set — the data
// never carries "Various" here (registry rule), so nothing vague can render.
function projectMeta(t: GalleryDict, p: GalleryProject): string {
  const city = p.city ? (t.cityLabels[p.city as keyof GalleryDict['cityLabels']] ?? p.city) : ''
  if (city && p.year) return `${city} · ${p.year}`
  return city
}

function ProjectCard({ view, onOpen, t }: { view: GalleryProjectView; onOpen: () => void; t: GalleryDict }) {
  const { project, members, cover, categories } = view
  const entry = t.projects[project.slug as keyof GalleryDict['projects']] as
    | { title: string; chips?: string[] }
    | undefined
  const title = entry?.title ?? project.slug
  // Optional exact-wording chip override from the dictionary (display only —
  // category filters still act on the member images' real categories).
  const chipLabels = entry?.chips ?? categories.map((tag) => t.categoryLabels[tag])
  const coverMeta = imageMeta(t, cover)
  const meta = projectMeta(t, project)
  const count = members.length
  return (
    <article className="bg-white dark:bg-[#0e2e65] border border-gray-100 dark:border-white/[0.08] rounded-sm overflow-hidden shadow-sm hover:shadow-md dark:shadow-none transition-shadow group flex flex-col">
      {/* Cover */}
      <button
        onClick={onOpen}
        className="relative block w-full flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920]"
        style={{ aspectRatio: '16/10' }}
        aria-label={t.cardOpenProject.replace('{title}', title)}
      >
        {cover.image && (
          <Image
            src={cover.image}
            alt={coverMeta.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        {/* Legibility gradient — lower text zone only (keeps the photo bright) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(7,27,59,0.72) 0%, rgba(7,27,59,0.28) 26%, transparent 52%)' }}
          aria-hidden="true"
        />
        {/* Hover view label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 bg-[#071B3B]/90 border border-white/20 text-white rounded-sm px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
            <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {t.cardViewProject}
          </span>
        </div>
        {/* Samples badge (top) */}
        {project.samplesBadge && (
          <div className="absolute top-2.5 start-2.5">
            <span className="text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 bg-accent/90 text-white rounded-sm backdrop-blur-sm">
              {t.samplesBadge}
            </span>
          </div>
        )}
        {/* Photo count chip (bottom end, inside the gradient zone) */}
        <div className="absolute bottom-2.5 end-2.5">
          <span className="inline-flex items-center gap-1 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 bg-[#071B3B]/75 text-white/90 rounded-sm backdrop-blur-sm">
            <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
              <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1.5} />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15l-5-5L5 21" />
            </svg>
            <Ltr>{count}</Ltr> {count === 1 ? t.photoCountSingular : t.photoCountPlural}
          </span>
        </div>
      </button>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-[#071B3B] dark:text-white font-semibold text-sm leading-snug">
          {title}
        </h3>
        {meta && (
          <p className="text-gray-400 dark:text-white/40 text-xs font-medium">
            {meta}
          </p>
        )}
        {chipLabels.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-0.5">
            {chipLabels.map((label) => (
              <span
                key={label}
                className="text-[9px] font-semibold tracking-widest uppercase px-1.5 py-0.5 bg-gray-50 dark:bg-white/[0.06] border border-gray-100 dark:border-white/[0.08] text-gray-400 dark:text-white/40 rounded-sm"
              >
                {label}
              </span>
            ))}
          </div>
        )}
        {/* View Project button */}
        <div className="pt-2 mt-auto border-t border-gray-50 dark:border-white/[0.06]">
          <button
            onClick={onOpen}
            className="w-full py-2 rounded-sm text-[11px] font-bold tracking-widest uppercase text-[#071B3B]/50 dark:text-white/40 border border-[#071B3B]/10 dark:border-white/[0.08] hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors"
          >
            {t.cardViewProject}
          </button>
        </div>
      </div>
    </article>
  )
}

// ─── Empty state ───────────────────────────────────────────────────────────────

function EmptyState({ label, t }: { label: string; t: GalleryDict }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 gap-4">
      <div className="w-14 h-14 rounded-sm border border-gray-100 dark:border-white/[0.08] flex items-center justify-center bg-white dark:bg-white/[0.04]">
        <svg className="w-6 h-6 text-gray-200 dark:text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
          <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-gray-500 dark:text-white/45 text-sm font-semibold mb-1">{t.emptyStateTitle}</p>
        <p className="text-gray-300 dark:text-white/25 text-xs">{t.emptyStateSubtext.replace('{category}', label)}</p>
      </div>
    </div>
  )
}

// ─── Page (exported) ───────────────────────────────────────────────────────────

export function GalleryPage({ images, locale = 'en' }: { images: GalleryImage[]; locale?: Locale }) {
  const t: GalleryDict = locale === 'ar' ? galleryContentAr : galleryContent
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All')
  const [openProject, setOpenProject] = useState<GalleryProjectView | null>(null)

  // Publish gate (unchanged) + grouping layer: only public-safe entries with a
  // real uploaded image AND a projectSlug render. Ungrouped entries stay in the
  // data but never reach the page (see docs/gallery-ungrouped-backlog.md).
  const safeImages = useMemo(
    () =>
      images.filter(
        (img) => img.status === 'Public Safe' && img.approvedForWeb && img.image !== null && img.projectSlug,
      ),
    [images],
  )

  // Assemble project views from the registry, in registry order. A project with
  // zero publishable members simply doesn't render.
  const projects = useMemo<GalleryProjectView[]>(() => {
    return GALLERY_PROJECTS.flatMap((project) => {
      const members = safeImages.filter((img) => img.projectSlug === project.slug)
      if (members.length === 0) return []
      const cover = members.find((img) => img.id === project.coverImageId) ?? members[0]
      const categories = [...new Set(members.map((img) => img.category))]
      return [{ project, members, cover, categories }]
    })
  }, [safeImages])

  // Category filters act on PROJECTS: a project matches a category if any of its
  // photos carries it. Counts are matching-project counts.
  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.categories.includes(activeFilter as GalleryImage['category'])),
    [projects, activeFilter],
  )

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: projects.length }
    for (const p of projects) {
      for (const cat of p.categories) {
        result[cat] = (result[cat] ?? 0) + 1
      }
    }
    return result
  }, [projects])

  const visiblePhotoCount = useMemo(
    () => filtered.reduce((sum, p) => sum + p.members.length, 0),
    [filtered],
  )

  const handleFilterChange = (f: GalleryFilter) => {
    setActiveFilter(f)
    setOpenProject(null)
  }

  const activeLabel = activeFilter === 'All' ? t.filterAll : t.categoryLabels[activeFilter]

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#071B3B] pt-14 sm:pt-20 pb-10 sm:pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 text-xs text-white/40">
            <Link href={localizeHref('/', locale)} className="hover:text-white/70 transition-colors">{t.breadcrumbHome}</Link>
            <span aria-hidden="true" className="rtl:-scale-x-100">›</span>
            <span className="text-white/60">{t.breadcrumbGallery}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" aria-hidden="true" />
            <span className="text-[#D71920] text-xs font-semibold tracking-widest uppercase">{t.eyebrow}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t.title}
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
            {t.intro}
          </p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-[#F6F7F9] dark:bg-[#040f22] py-10 sm:py-16 px-4 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {/* Filters + count */}
          <div className="mb-8 space-y-3">
            <FilterBar active={activeFilter} counts={counts} onChange={handleFilterChange} t={t} />
            <p className="text-gray-400 dark:text-white/35 text-xs tabular-nums">
              {filtered.length === 0
                ? t.countNone
                : (
                  <>
                    <Ltr>{filtered.length}</Ltr> {filtered.length === 1 ? t.projectCountSingular : t.projectCountPlural}
                    {' · '}
                    <Ltr>{visiblePhotoCount}</Ltr> {visiblePhotoCount === 1 ? t.photoCountSingular : t.photoCountPlural}
                  </>
                )}
            </p>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.length > 0
              ? filtered.map((view) => (
                  <ProjectCard key={view.project.slug} view={view} onOpen={() => setOpenProject(view)} t={t} />
                ))
              : <EmptyState label={activeLabel} t={t} />}
          </div>

          {/* Disclosure */}
          <p className="text-gray-300 dark:text-white/20 text-xs mt-10 leading-relaxed max-w-2xl">
            {t.galleryDisclosure}
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#071B3B] dark:bg-[#071B3B] py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
              {t.ctaHeading}
            </h2>
            <p className="text-white/55 text-sm leading-relaxed max-w-lg">
              {t.ctaBody}
            </p>
          </div>
          <Link
            href={localizeHref('/request-quotation', locale)}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors flex-shrink-0 w-full sm:w-auto"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>

      {/* Lightbox — scoped to the opened project's photo set */}
      {openProject !== null && (
        <GalleryLightbox
          images={openProject.members}
          initialIndex={0}
          onClose={() => setOpenProject(null)}
          t={t}
        />
      )}
    </>
  )
}
