'use client'

import { useCallback, useEffect, useReducer, useRef } from 'react'

export type PhotoTag = { n: number; label: string; xPct: number; yPct: number }

type State = {
  scale: number
  panX: number
  panY: number
  isDragging: boolean
  lastX: number
  lastY: number
  pinchDist: number
}

type Action =
  | { type: 'ZOOM_DELTA'; delta: number }
  | { type: 'ZOOM_SET'; scale: number }
  | { type: 'DRAG_START'; x: number; y: number }
  | { type: 'DRAG_MOVE'; x: number; y: number }
  | { type: 'DRAG_END' }
  | { type: 'PINCH_START'; dist: number }
  | { type: 'PINCH_MOVE'; dist: number }
  | { type: 'RESET' }

const MIN_SCALE = 1
const MAX_SCALE = 4

function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)) }

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case 'ZOOM_DELTA': {
      const scale = clamp(s.scale * Math.pow(0.999, a.delta), MIN_SCALE, MAX_SCALE)
      if (scale <= MIN_SCALE) return { ...s, scale: MIN_SCALE, panX: 0, panY: 0 }
      return { ...s, scale }
    }
    case 'ZOOM_SET': {
      const scale = clamp(a.scale, MIN_SCALE, MAX_SCALE)
      if (scale <= MIN_SCALE) return { ...s, scale: MIN_SCALE, panX: 0, panY: 0 }
      return { ...s, scale }
    }
    case 'DRAG_START':
      if (s.scale <= MIN_SCALE) return s
      return { ...s, isDragging: true, lastX: a.x, lastY: a.y }
    case 'DRAG_MOVE': {
      if (!s.isDragging) return s
      return { ...s, panX: s.panX + (a.x - s.lastX), panY: s.panY + (a.y - s.lastY), lastX: a.x, lastY: a.y }
    }
    case 'DRAG_END':
      return { ...s, isDragging: false }
    case 'PINCH_START':
      return { ...s, pinchDist: a.dist }
    case 'PINCH_MOVE': {
      if (!s.pinchDist) return s
      const scale = clamp(s.scale * (a.dist / s.pinchDist), MIN_SCALE, MAX_SCALE)
      const panX = scale <= MIN_SCALE ? 0 : s.panX
      const panY = scale <= MIN_SCALE ? 0 : s.panY
      return { ...s, scale, panX, panY, pinchDist: a.dist }
    }
    case 'RESET':
      return { scale: 1, panX: 0, panY: 0, isDragging: false, lastX: 0, lastY: 0, pinchDist: 0 }
    default:
      return s
  }
}

const INIT: State = { scale: 1, panX: 0, panY: 0, isDragging: false, lastX: 0, lastY: 0, pinchDist: 0 }

export function PhotoTagModal({
  isOpen,
  onClose,
  src,
  alt,
  tags,
}: {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
  tags: PhotoTag[]
}) {
  const [s, dispatch] = useReducer(reducer, INIT)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) { dispatch({ type: 'RESET' }); return }
    document.body.classList.add('diagram-modal-open')
    return () => document.body.classList.remove('diagram-modal-open')
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    dispatch({ type: 'ZOOM_DELTA', delta: e.deltaY })
  }, [])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    dispatch({ type: 'DRAG_START', x: e.clientX, y: e.clientY })
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!s.isDragging) return
    dispatch({ type: 'DRAG_MOVE', x: e.clientX, y: e.clientY })
  }, [s.isDragging])

  const onMouseUp = useCallback(() => dispatch({ type: 'DRAG_END' }), [])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      dispatch({ type: 'PINCH_START', dist: Math.hypot(dx, dy) })
    } else if (e.touches.length === 1) {
      dispatch({ type: 'DRAG_START', x: e.touches[0].clientX, y: e.touches[0].clientY })
    }
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      dispatch({ type: 'PINCH_MOVE', dist: Math.hypot(dx, dy) })
    } else if (e.touches.length === 1) {
      dispatch({ type: 'DRAG_MOVE', x: e.touches[0].clientX, y: e.touches[0].clientY })
    }
  }, [])

  const onTouchEnd = useCallback(() => dispatch({ type: 'DRAG_END' }), [])

  if (!isOpen) return null

  const zoomed = s.scale > 1.05
  const tagSize = Math.max(20, Math.round(22 / s.scale))

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex flex-col"
      role="dialog"
      aria-modal
      aria-label="System visual details"
    >
      {/* Header */}
      <div className="flex-none flex items-center justify-between px-4 py-3 bg-navy/80 border-b border-white/10">
        <span className="text-white/50 text-[10px] tracking-widest uppercase font-semibold">
          System Visual Details
        </span>
        <div className="flex items-center gap-4">
          {zoomed && (
            <button
              onClick={() => dispatch({ type: 'RESET' })}
              className="text-white/60 text-[11px] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8z" />
                <path d="M6.5 8h3M8 6.5v3" />
              </svg>
              Reset zoom
            </button>
          )}
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image area */}
      <div
        className={`flex-1 overflow-hidden relative select-none ${zoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
        ref={imgRef}
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onDoubleClick={() => dispatch({ type: 'ZOOM_SET', scale: zoomed ? 1 : 2.5 })}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `scale(${s.scale}) translate(${s.panX / s.scale}px, ${s.panY / s.scale}px)`,
            transformOrigin: 'center',
            transition: s.isDragging ? 'none' : 'transform 0.15s ease-out',
          }}
        >
          <div className="relative w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-contain pointer-events-none"
              draggable={false}
            />
            {/* Numbered tags */}
            {tags.map((tag) => (
              <div
                key={tag.n}
                className="absolute pointer-events-none"
                style={{
                  left: `${tag.xPct}%`,
                  top: `${tag.yPct}%`,
                  transform: `translate(-50%, -50%) scale(${1 / s.scale})`,
                  transformOrigin: 'center',
                }}
              >
                <div
                  className="rounded-full bg-accent text-white font-bold flex items-center justify-center border-2 border-white/80 shadow-lg"
                  style={{ width: tagSize, height: tagSize, fontSize: Math.max(9, tagSize * 0.42) }}
                >
                  {tag.n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tag list footer */}
      <div className="flex-none bg-navy/90 border-t border-white/10 px-4 py-3 overflow-x-auto">
        <div className="flex flex-wrap gap-x-5 gap-y-2 min-w-max sm:min-w-0">
          {tags.map((tag) => (
            <div key={tag.n} className="flex items-center gap-2">
              <span
                className="w-5 h-5 rounded-full bg-accent text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0"
              >
                {tag.n}
              </span>
              <span className="text-white/70 text-[11px] whitespace-nowrap">{tag.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
