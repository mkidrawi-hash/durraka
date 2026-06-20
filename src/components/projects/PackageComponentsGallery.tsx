'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

export interface ComponentCard {
  title: string
  description: string
  image: string | null
  imageAlt?: string
}

// ─── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({
  components,
  initialIndex,
  onClose,
}: {
  components: ComponentCard[]
  initialIndex: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(initialIndex)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })

  const imageAreaRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragStartPos = useRef({ x: 0, y: 0 })
  const panAtDragStart = useRef({ x: 0, y: 0 })
  const touchStartPos = useRef({ x: 0, y: 0 })
  const touchStartDist = useRef<number | null>(null)
  const zoomAtPinchStart = useRef(1)

  const current = components[index]
  const total = components.length

  // Stable zoom updater — uses functional setState to avoid stale closure
  const updateZoom = useCallback((delta: number, reset = false) => {
    if (reset) {
      setZoom(1)
      setPan({ x: 0, y: 0 })
      return
    }
    setZoom((z) => {
      const next = Math.max(1, Math.min(4, z + delta))
      if (next <= 1) setPan({ x: 0, y: 0 })
      return next
    })
  }, [])

  const goTo = useCallback((i: number) => {
    setIndex(i)
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }, [])

  const prev = useCallback(() => goTo(index === 0 ? total - 1 : index - 1), [goTo, index, total])
  const next = useCallback(() => goTo(index === total - 1 ? 0 : index + 1), [goTo, index, total])

  // Body scroll lock
  useEffect(() => {
    const was = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = was
    }
  }, [])

  // Keyboard navigation
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

  // Passive-false wheel + touchmove to allow preventDefault
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

    // Block browser-native pinch-to-zoom
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length >= 2) e.preventDefault()
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  // ── Touch handlers ──────────────────────────────────────────────────────────

  const getTouchDistance = (touches: React.TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX
    const dy = touches[0].clientY - touches[1].clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      touchStartDist.current = getTouchDistance(e.touches)
      zoomAtPinchStart.current = zoom
    } else if (e.touches.length === 1) {
      touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartDist.current !== null) {
      const dist = getTouchDistance(e.touches)
      const newZoom = Math.max(1, Math.min(4, zoomAtPinchStart.current * (dist / touchStartDist.current)))
      setZoom(newZoom)
      if (newZoom <= 1) setPan({ x: 0, y: 0 })
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Swipe to navigate (only when at base zoom)
    if (e.changedTouches.length === 1 && e.touches.length === 0 && zoom <= 1.05) {
      const dx = e.changedTouches[0].clientX - touchStartPos.current.x
      const dy = e.changedTouches[0].clientY - touchStartPos.current.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 60) {
        if (dx > 0) prev()
        else next()
      }
    }
    if (e.touches.length < 2) touchStartDist.current = null
  }

  // ── Mouse drag (pan when zoomed) ────────────────────────────────────────────

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
    setPan({
      x: panAtDragStart.current.x + e.clientX - dragStartPos.current.x,
      y: panAtDragStart.current.y + e.clientY - dragStartPos.current.y,
    })
  }

  const handleMouseUp = () => {
    isDragging.current = false
    document.body.style.cursor = ''
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: 'rgba(0,0,0,0.88)' }}
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${current.title}`}
    >
      {/* Header */}
      <div className="flex-shrink-0 bg-[#071B3B] border-b border-white/[0.08] px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-[#D71920] text-[9px] font-bold tracking-widest uppercase mb-0.5">
            Package Component
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
        style={{ cursor: zoom > 1 ? 'grab' : 'default' }}
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
            aria-label="Previous component"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Zoomable image */}
        <div
          className="select-none"
          style={{
            transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
            transformOrigin: 'center center',
            // Only animate when not actively dragging (checked at render time via ref)
            transition: isDragging.current ? 'none' : 'transform 0.13s ease',
            willChange: 'transform',
          }}
        >
          {current.image ? (
            <Image
              src={current.image}
              alt={current.imageAlt ?? current.title}
              width={1600}
              height={900}
              className="block w-auto h-auto rounded-sm shadow-2xl"
              style={{ maxWidth: 'min(92vw, 1120px)', maxHeight: '58vh' }}
              priority
              draggable={false}
            />
          ) : (
            <div
              className="flex flex-col items-center justify-center gap-3 rounded-sm border border-white/[0.10] bg-[#071B3B]/60"
              style={{ width: 'min(92vw, 640px)', aspectRatio: '16/9' }}
            >
              <svg className="w-10 h-10 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-white/25 text-[10px] font-bold tracking-widest uppercase">
                Preview not yet available
              </p>
            </div>
          )}
        </div>

        {/* Next */}
        {total > 1 && (
          <button
            onClick={next}
            className="absolute right-3 sm:right-5 z-10 w-9 h-9 rounded-sm bg-[#071B3B]/90 hover:bg-[#071B3B] border border-white/[0.15] flex items-center justify-center transition-colors"
            aria-label="Next component"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 bg-[#071B3B] border-t border-white/[0.08]">
        {/* Description */}
        <div className="px-4 sm:px-6 pt-3 pb-2.5 border-b border-white/[0.06]">
          <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-2xl">
            {current.description}
          </p>
        </div>

        {/* Controls */}
        <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          {/* Navigation dots */}
          <div className="flex items-center gap-1.5">
            {components.map((comp, i) => (
              <button
                key={comp.title}
                onClick={() => goTo(i)}
                className="transition-all duration-200 rounded-full"
                style={{
                  width: i === index ? '1rem' : '0.375rem',
                  height: '0.375rem',
                  background: i === index ? '#D71920' : 'rgba(255,255,255,0.2)',
                }}
                aria-label={`Go to ${comp.title}`}
              />
            ))}
          </div>

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
              aria-label="Reset zoom to 100%"
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

        {/* Safety note */}
        <p className="px-4 sm:px-6 pb-3 text-white/18 text-[9px] leading-relaxed">
          For design understanding and early scope coordination only. Detailed fixing, connection,
          and installation information is excluded.
        </p>
      </div>
    </div>
  )
}

// ─── Card ──────────────────────────────────────────────────────────────────────

function ComponentCard({
  component,
  onOpen,
}: {
  component: ComponentCard
  onOpen: () => void
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm">
      {/* Clickable image area */}
      <button
        onClick={onOpen}
        className="relative block w-full h-44 sm:h-48 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920] focus-visible:ring-offset-1"
        aria-label={`Open preview: ${component.title}`}
      >
        {component.image ? (
          <>
            <Image
              src={component.image}
              alt={component.imageAlt ?? component.title}
              fill
              className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.025]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#071B3B]/0 group-hover:bg-[#071B3B]/38 transition-colors duration-300" />
            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex items-center gap-1.5 bg-[#071B3B]/90 border border-white/20 text-white rounded-sm px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span className="hidden sm:inline">View Detail</span>
                <span className="sm:hidden">Preview</span>
              </span>
            </div>
          </>
        ) : (
          /* Placeholder for cards without images */
          <div className="h-full bg-[#071B3B]/[0.04] group-hover:bg-[#071B3B]/[0.08] flex flex-col items-center justify-center gap-2 transition-colors">
            <svg className="w-5 h-5 text-[#071B3B]/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-[9px] font-bold tracking-widest uppercase text-[#071B3B]/25">
              {component.title}
            </p>
          </div>
        )}
      </button>

      {/* Text body */}
      <div className="p-5">
        <h3 className="text-[#071B3B] font-bold text-sm leading-snug mb-2">
          {component.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{component.description}</p>
      </div>
    </div>
  )
}

// ─── Gallery (exported) ────────────────────────────────────────────────────────

export function PackageComponentsGallery({ components }: { components: ComponentCard[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {components.map((component, i) => (
          <ComponentCard
            key={component.title}
            component={component}
            onOpen={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          components={components}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
