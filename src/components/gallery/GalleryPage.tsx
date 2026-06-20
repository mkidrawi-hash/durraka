'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { GalleryImage, GalleryFilter } from '@/data/galleryImages'
import { GALLERY_FILTERS } from '@/data/galleryImages'

// ─── Filter bar ────────────────────────────────────────────────────────────────

function FilterBar({
  active,
  counts,
  onChange,
}: {
  active: GalleryFilter
  counts: Record<string, number>
  onChange: (f: GalleryFilter) => void
}) {
  return (
    <div
      className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 pb-1"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="flex items-center gap-2 min-w-max">
        {GALLERY_FILTERS.map((filter) => {
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
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent',
              ].join(' ')}
            >
              {filter}
              {filter !== 'All' && (
                <span
                  className={[
                    'text-[10px] font-bold tabular-nums rounded-full px-1 min-w-[1.25rem] text-center leading-4',
                    isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-400',
                  ].join(' ')}
                >
                  {count}
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
}: {
  images: GalleryImage[]
  initialIndex: number
  onClose: () => void
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
    const was = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = was }
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
      const delta = e.deltaY < 0 ? 0.5 : -0.5
      setZoom((z) => {
        const next = Math.max(1, Math.min(4, z + delta))
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

  const getTouchDistance = (touches: React.TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX
    const dy = touches[0].clientY - touches[1].clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      isDragging.current = false
      touchStartDist.current = getTouchDistance(e.touches)
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
      const dist = getTouchDistance(e.touches)
      const newZoom = Math.max(1, Math.min(4, zoomAtPinchStart.current * (dist / touchStartDist.current)))
      setZoom(newZoom)
      setPan(newZoom <= 1 ? { x: 0, y: 0 } : clampPan(panAtDragStart.current.x, panAtDragStart.current.y, newZoom))
    } else if (e.touches.length === 1 && isDragging.current) {
      const dx = e.touches[0].clientX - touchStartPos.current.x
      const dy = e.touches[0].clientY - touchStartPos.current.y
      setPan(clampPan(panAtDragStart.current.x + dx, panAtDragStart.current.y + dy, zoom))
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches.length === 1 && e.touches.length === 0) {
      const dx = e.changedTouches[0].clientX - touchStartPos.current.x
      const dy = e.changedTouches[0].clientY - touchStartPos.current.y
      const elapsed = Date.now() - touchStartTime.current
      const isTap = elapsed < 220 && Math.abs(dx) < 12 && Math.abs(dy) < 12

      if (isDragging.current) {
        isDragging.current = false
      } else if (isTap) {
        const now = Date.now()
        if (now - lastTapTime.current < 400) {
          setZoom(z => {
            const next = z > 1.05 ? 1 : 2.5
            if (next <= 1) setPan({ x: 0, y: 0 })
            return next
          })
          lastTapTime.current = 0
        } else {
          lastTapTime.current = now
        }
      } else if (zoom <= 1.05) {
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 60) {
          if (dx > 0) prev(); else next()
        }
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

  const handleMouseUp = () => {
    isDragging.current = false
    document.body.style.cursor = ''
  }

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 flex flex-col"
      style={{ background: 'rgba(0,0,0,0.92)', height: '100dvh' }}
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery preview: ${current.title}`}
    >
      {/* Header */}
      <div className="flex-shrink-0 bg-[#071B3B] border-b border-white/[0.08] px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-[#D71920] text-[9px] font-bold tracking-widest uppercase mb-0.5">
            Project Gallery
          </p>
          <h2 className="text-white font-bold text-sm sm:text-base leading-tight truncate">
            {current.title}
          </h2>
        </div>
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <span className="text-white/30 text-xs tabular-nums hidden sm:block">
            {index + 1} / {total}
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-sm bg-white/[0.07] hover:bg-white/[0.16] border border-white/[0.12] flex items-center justify-center transition-colors"
            aria-label="Close preview"
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
        style={{
          cursor: zoom > 1 ? 'grab' : 'default',
          touchAction: 'none',
          overscrollBehavior: 'contain',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Prev */}
        {total > 1 && (
          <button
            onClick={prev}
            className="absolute left-3 sm:left-5 z-10 w-9 h-9 rounded-sm bg-[#071B3B]/90 hover:bg-[#071B3B] border border-white/[0.15] flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Zoomable image */}
        <div
          ref={imageWrapperRef}
          className="select-none"
          style={{
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
            transformOrigin: 'center center',
            transition: isDragging.current ? 'none' : 'transform 0.13s ease',
            willChange: 'transform',
          }}
        >
          {current.image ? (
            <Image
              src={current.image}
              alt={current.title}
              width={1600}
              height={1200}
              className="block w-auto h-auto rounded-sm shadow-2xl"
              style={{ maxWidth: 'min(92vw, 1200px)', maxHeight: '56vh' }}
              priority
              draggable={false}
            />
          ) : (
            <div
              className="flex flex-col items-center justify-center gap-3 rounded-sm border border-white/[0.10] bg-[#071B3B]/60"
              style={{ width: 'min(88vw, 780px)', aspectRatio: '4/3' }}
            >
              <svg className="w-10 h-10 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase">
                Image coming soon
              </p>
            </div>
          )}
        </div>

        {/* Next */}
        {total > 1 && (
          <button
            onClick={next}
            className="absolute right-3 sm:right-5 z-10 w-9 h-9 rounded-sm bg-[#071B3B]/90 hover:bg-[#071B3B] border border-white/[0.15] flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 bg-[#071B3B] border-t border-white/[0.08]">
        {/* Meta */}
        <div className="px-4 sm:px-6 pt-3 pb-2.5 border-b border-white/[0.06]">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 bg-accent/20 border border-accent/30 text-accent rounded-sm">
              {current.category}
            </span>
            <span className="text-white/35 text-[10px]">
              {current.city}, KSA &middot; {current.year}
            </span>
          </div>
          <p className="text-white/45 text-xs sm:text-sm leading-relaxed max-w-2xl">
            {current.description}
          </p>
        </div>

        {/* Controls */}
        <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          <span className="text-white/25 text-xs tabular-nums sm:hidden">
            {index + 1} / {total}
          </span>
          <div className="hidden sm:block" />

          {/* Zoom controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => updateZoom(-0.5)}
              disabled={zoom <= 1}
              className="w-7 h-7 rounded-sm bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.10] flex items-center justify-center transition-colors disabled:opacity-25"
              aria-label="Zoom out"
            >
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <button
              onClick={() => updateZoom(0, true)}
              className="h-7 px-2 rounded-sm bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.10] text-white/50 text-[10px] font-bold tracking-wide transition-colors tabular-nums min-w-[2.75rem] text-center"
              aria-label="Reset zoom"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              onClick={() => updateZoom(0.5)}
              disabled={zoom >= 4}
              className="w-7 h-7 rounded-sm bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.10] flex items-center justify-center transition-colors disabled:opacity-25"
              aria-label="Zoom in"
            >
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Disclosure */}
        <p className="px-4 sm:px-6 pb-3 text-white/18 text-[9px] leading-relaxed">
          For design reference only. Client names, exact project identities, quantities, contract values,
          fixing details, and confidential specifications are not disclosed.
        </p>
      </div>
    </div>
  )
}

// ─── Gallery card ──────────────────────────────────────────────────────────────

function GalleryCard({ image, onOpen }: { image: GalleryImage; onOpen: () => void }) {
  return (
    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm group">
      {/* Image */}
      <button
        onClick={onOpen}
        className="relative block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920] focus-visible:ring-offset-1"
        style={{ aspectRatio: '4/3' }}
        aria-label={`Open preview: ${image.title}`}
      >
        {image.image ? (
          <>
            <Image
              src={image.image}
              alt={image.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#071B3B]/0 group-hover:bg-[#071B3B]/28 transition-colors duration-300" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-50 group-hover:bg-gray-100 flex items-center justify-center transition-colors duration-200">
            <svg className="w-8 h-8 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* Hover label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 bg-[#071B3B]/90 border border-white/20 text-white rounded-sm px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
            <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            View
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-2.5 left-2.5">
          <span className="text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 bg-[#071B3B]/80 text-white/80 rounded-sm backdrop-blur-sm">
            {image.category}
          </span>
        </div>
      </button>

      {/* Body */}
      <div className="p-4">
        <p className="text-[#071B3B] font-semibold text-sm leading-snug mb-1">
          {image.title}
        </p>
        <p className="text-gray-400 text-xs mb-3">
          {image.city}, KSA &middot; {image.year}
        </p>
        {image.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {image.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-semibold tracking-widest uppercase px-1.5 py-0.5 bg-gray-50 border border-gray-100 text-gray-400 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Empty state ───────────────────────────────────────────────────────────────

function EmptyState({ filter }: { filter: string }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4">
      <svg className="w-10 h-10 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <div className="text-center">
        <p className="text-gray-400 text-sm font-semibold mb-1">No references in this category yet</p>
        <p className="text-gray-300 text-xs">{filter} images will appear here when published.</p>
      </div>
    </div>
  )
}

// ─── Page (exported) ───────────────────────────────────────────────────────────

export function GalleryPage({ images }: { images: GalleryImage[] }) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const safeImages = useMemo(() => images.filter((img) => img.publicSafe), [images])

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? safeImages
        : safeImages.filter((img) => img.category === activeFilter),
    [safeImages, activeFilter],
  )

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: safeImages.length }
    for (const img of safeImages) {
      result[img.category] = (result[img.category] ?? 0) + 1
    }
    return result
  }, [safeImages])

  const handleFilterChange = (f: GalleryFilter) => {
    setActiveFilter(f)
    setLightboxIndex(null)
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#071B3B] pt-14 sm:pt-20 pb-10 sm:pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/60">Project Gallery</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" aria-hidden="true" />
            <span className="text-[#D71920] text-xs font-semibold tracking-widest uppercase">
              Visual References
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Project Gallery
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
            Explore selected GRC / GFRC architectural works, facade components, textures, and
            project-based visual references.
          </p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-gray-50 py-10 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter bar + count */}
          <div className="mb-8 space-y-3">
            <FilterBar active={activeFilter} counts={counts} onChange={handleFilterChange} />
            <p className="text-gray-400 text-xs">
              {filtered.length === 0
                ? 'No references in this category'
                : `${filtered.length} ${filtered.length === 1 ? 'reference' : 'references'}`}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.length > 0 ? (
              filtered.map((img, i) => (
                <GalleryCard
                  key={img.id}
                  image={img}
                  onOpen={() => setLightboxIndex(i)}
                />
              ))
            ) : (
              <EmptyState filter={activeFilter} />
            )}
          </div>

          {/* Disclosure */}
          <p className="text-gray-300 text-xs mt-10 leading-relaxed max-w-2xl">
            All references are published for design coordination purposes only. Client names, exact project
            identities, contract values, quantities, fixing details, anchors, brackets, installation
            sequences, and confidential specifications are not disclosed. Only public-safe selections are shown.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filtered}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
