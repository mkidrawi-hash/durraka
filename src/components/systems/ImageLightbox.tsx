'use client'

import { useEffect, useReducer, useRef, useCallback } from 'react'

export interface LightboxImage {
  src: string
  alt: string
  caption?: string
  location?: string
  year?: string
  scope?: string
  status?: string
}

export interface ImageLightboxProps {
  images: LightboxImage[]
  initialIndex?: number
  onClose: () => void
}

// ─── State ────────────────────────────────────────────────────────────────────

interface State {
  index: number
  scale: number
  translateX: number
  translateY: number
  isDragging: boolean
  isTransitioning: boolean
}

type Action =
  | { type: 'PREV' }
  | { type: 'NEXT'; total: number }
  | { type: 'SET_INDEX'; index: number }
  | { type: 'ZOOM_WHEEL'; delta: number }
  | { type: 'ZOOM_PINCH'; newScale: number }
  | { type: 'RESET_ZOOM' }
  | { type: 'TOGGLE_ZOOM' }
  | { type: 'PAN'; dx: number; dy: number }
  | { type: 'DRAG_START' }
  | { type: 'DRAG_END' }
  | { type: 'TRANSITION_START' }
  | { type: 'TRANSITION_END' }

const MIN_SCALE = 1
const MAX_SCALE = 5
const DOUBLE_TAP_ZOOM = 2.5

function clamp(val: number, min: number, max: number) {
  return Math.min(max, Math.max(min, val))
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'PREV':
      return { ...state, index: state.index > 0 ? state.index - 1 : state.index, scale: 1, translateX: 0, translateY: 0, isTransitioning: false }
    case 'NEXT':
      return { ...state, index: state.index < action.total - 1 ? state.index + 1 : state.index, scale: 1, translateX: 0, translateY: 0, isTransitioning: false }
    case 'SET_INDEX':
      return { ...state, index: action.index, scale: 1, translateX: 0, translateY: 0 }
    case 'ZOOM_WHEEL': {
      const newScale = clamp(state.scale - action.delta * 0.001, MIN_SCALE, MAX_SCALE)
      const ratio = newScale / state.scale
      return {
        ...state,
        scale: newScale,
        translateX: newScale === 1 ? 0 : state.translateX * ratio,
        translateY: newScale === 1 ? 0 : state.translateY * ratio,
      }
    }
    case 'ZOOM_PINCH': {
      const newScale = clamp(action.newScale, MIN_SCALE, MAX_SCALE)
      return {
        ...state,
        scale: newScale,
        translateX: newScale === 1 ? 0 : state.translateX,
        translateY: newScale === 1 ? 0 : state.translateY,
      }
    }
    case 'RESET_ZOOM':
      return { ...state, scale: 1, translateX: 0, translateY: 0 }
    case 'TOGGLE_ZOOM':
      if (state.scale > 1) {
        return { ...state, scale: 1, translateX: 0, translateY: 0 }
      } else {
        return { ...state, scale: DOUBLE_TAP_ZOOM }
      }
    case 'PAN': {
      if (state.scale <= 1) return state
      // Clamp pan so image stays partially visible
      const maxPan = 400 // generous clamp; real image boundaries handled by overflow
      return {
        ...state,
        translateX: clamp(state.translateX + action.dx, -maxPan, maxPan),
        translateY: clamp(state.translateY + action.dy, -maxPan, maxPan),
      }
    }
    case 'DRAG_START':
      return { ...state, isDragging: true }
    case 'DRAG_END':
      return { ...state, isDragging: false }
    case 'TRANSITION_START':
      return { ...state, isTransitioning: true }
    case 'TRANSITION_END':
      return { ...state, isTransitioning: false }
    default:
      return state
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ImageLightbox({ images, initialIndex = 0, onClose }: ImageLightboxProps) {
  const [state, dispatch] = useReducer(reducer, {
    index: initialIndex,
    scale: 1,
    translateX: 0,
    translateY: 0,
    isDragging: false,
    isTransitioning: false,
  })

  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  // Mouse drag state (not in reducer — too granular)
  const dragStart = useRef<{ x: number; y: number } | null>(null)

  // Touch state
  const lastTap = useRef<number>(0)
  const pinchStartDist = useRef<number | null>(null)
  const pinchStartScale = useRef<number>(1)
  const touchDragStart = useRef<{ x: number; y: number } | null>(null)

  const image = images[state.index]
  const total = images.length

  // Lock body scroll on mount
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  // Focus close button on open
  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [])

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        dispatch({ type: 'PREV' })
      } else if (e.key === 'ArrowRight') {
        dispatch({ type: 'NEXT', total })
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [total, onClose])

  // Mouse wheel zoom
  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    dispatch({ type: 'ZOOM_WHEEL', delta: e.deltaY })
  }, [])

  // Mouse drag
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (state.scale <= 1) return
    e.preventDefault()
    dragStart.current = { x: e.clientX, y: e.clientY }
    dispatch({ type: 'DRAG_START' })
  }, [state.scale])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragStart.current) return
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    dragStart.current = { x: e.clientX, y: e.clientY }
    dispatch({ type: 'PAN', dx, dy })
  }, [])

  const onMouseUp = useCallback(() => {
    if (!dragStart.current) return
    dragStart.current = null
    dispatch({ type: 'DRAG_END' })
  }, [])

  // Touch handlers
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch start
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      pinchStartDist.current = Math.sqrt(dx * dx + dy * dy)
      pinchStartScale.current = state.scale
      touchDragStart.current = null
    } else if (e.touches.length === 1) {
      // Double-tap detection
      const now = Date.now()
      if (now - lastTap.current < 300) {
        e.preventDefault()
        dispatch({ type: 'TOGGLE_ZOOM' })
        lastTap.current = 0
        return
      }
      lastTap.current = now
      // Single-finger drag
      if (state.scale > 1) {
        touchDragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }
  }, [state.scale])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    if (e.touches.length === 2 && pinchStartDist.current !== null) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const newScale = pinchStartScale.current * (dist / pinchStartDist.current)
      dispatch({ type: 'ZOOM_PINCH', newScale })
    } else if (e.touches.length === 1 && touchDragStart.current) {
      const dx = e.touches[0].clientX - touchDragStart.current.x
      const dy = e.touches[0].clientY - touchDragStart.current.y
      touchDragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      dispatch({ type: 'PAN', dx, dy })
    }
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      pinchStartDist.current = null
    }
    if (e.touches.length === 0) {
      touchDragStart.current = null
    }
  }, [])

  // Backdrop click — close only when at 1x scale
  const onBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current && state.scale === 1) {
      onClose()
    }
  }, [state.scale, onClose])

  const isZoomed = state.scale > 1.01
  const showArrows = total > 1

  // CSS transition: enabled when not dragging
  const transition = state.isDragging
    ? 'none'
    : 'transform 0.15s ease'

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onBackdropClick}
      className="fixed inset-0 bg-black/92 flex flex-col"
      style={{ zIndex: 99999 }}
    >
      {/* ── Top bar ────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-3 flex-shrink-0">
        {/* Counter */}
        <span className="text-white/60 text-xs font-mono tabular-nums">
          {state.index + 1} / {total}
        </span>

        {/* Scale pill + Reset zoom */}
        <div className="flex items-center gap-2">
          {isZoomed && (
            <>
              <span className="text-white/60 text-xs font-mono bg-white/10 px-2 py-0.5 rounded-full">
                {state.scale.toFixed(1)}×
              </span>
              <button
                onClick={() => dispatch({ type: 'RESET_ZOOM' })}
                className="text-white/60 hover:text-white text-xs px-3 py-1 border border-white/20 rounded-full transition-colors"
              >
                Reset zoom
              </button>
            </>
          )}
        </div>

        {/* Close */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close lightbox"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* ── Image area ─────────────────────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden min-h-0">
        {/* Prev arrow */}
        {showArrows && (
          <button
            onClick={() => dispatch({ type: 'PREV' })}
            disabled={state.index === 0}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Image container */}
        <div
          ref={imageContainerRef}
          className="w-full h-full flex items-center justify-center overflow-hidden select-none"
          style={{ cursor: isZoomed ? (state.isDragging ? 'grabbing' : 'grab') : 'default' }}
          onWheel={onWheel}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            draggable={false}
            className="max-w-full max-h-full object-contain pointer-events-none"
            style={{
              transform: `scale(${state.scale}) translate(${state.translateX / state.scale}px, ${state.translateY / state.scale}px)`,
              transition,
            }}
          />
        </div>

        {/* Next arrow */}
        {showArrows && (
          <button
            onClick={() => dispatch({ type: 'NEXT', total })}
            disabled={state.index === total - 1}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Caption / metadata ─────────────────────────────────────────────── */}
      {(image.caption || image.location || image.year || image.scope || image.status) && (
        <div className="flex-shrink-0 px-4 py-3 border-t border-white/10 bg-black/40">
          <div className="max-w-3xl mx-auto">
            {image.caption && (
              <p className="text-white/85 text-sm mb-1.5 leading-snug">{image.caption}</p>
            )}
            <div className="flex flex-wrap items-center gap-2">
              {image.location && (
                <span className="text-white/50 text-xs">
                  <svg className="w-3 h-3 inline mr-1 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {image.location}
                </span>
              )}
              {image.year && (
                <span className="text-white/50 text-xs">{image.year}</span>
              )}
              {image.scope && (
                <span className="text-white/40 text-xs border border-white/15 px-2 py-0.5 rounded-full">
                  {image.scope}
                </span>
              )}
              {image.status && (
                <span className="text-white/40 text-xs">{image.status}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
