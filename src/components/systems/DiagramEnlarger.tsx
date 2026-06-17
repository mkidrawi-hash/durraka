'use client'

import { useState, useEffect, useCallback } from 'react'

interface DiagramEnlargerProps {
  title: string
  children: React.ReactNode
}

export function DiagramEnlarger({ title, children }: DiagramEnlargerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close])

  return (
    <>
      {/* Inline diagram + enlarge trigger */}
      <div>
        {children}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="View larger system diagram"
          className="mt-2 flex items-center gap-1.5 text-[#071B3B]/40 hover:text-[#D71920] text-[11px] font-medium transition-colors group"
        >
          <svg
            className="w-3.5 h-3.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
          {/* "Tap to enlarge" on mobile, "View Larger Diagram" on desktop */}
          <span className="sm:hidden group-hover:underline underline-offset-2">Tap to enlarge</span>
          <span className="hidden sm:inline group-hover:underline underline-offset-2">View Larger Diagram</span>
        </button>
      </div>

      {/* Modal — bottom sheet on mobile, centred card on desktop */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — enlarged diagram`}
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#071B3B]/70 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/*
            Panel:
            – Mobile: full-width bottom sheet, rounded top corners, max 90dvh so it
              never overflows the viewport. Content scrolls internally.
            – Desktop (sm+): centred card, max-w-3xl, fully rounded.
          */}
          <div className="relative z-10 w-full max-h-[90dvh] rounded-t-2xl sm:max-w-3xl sm:max-h-[90vh] sm:rounded-2xl bg-white shadow-2xl flex flex-col overflow-hidden">

            {/* Drag handle (mobile only) */}
            <div className="sm:hidden flex justify-center pt-2.5 pb-1 flex-shrink-0">
              <div className="w-8 h-1 rounded-full bg-[#071B3B]/20" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#071B3B]/[0.08] flex-shrink-0">
              <div>
                <p className="text-[#071B3B] font-bold text-sm leading-tight">{title}</p>
                <p className="text-[#071B3B]/40 text-[10px] font-mono tracking-widest uppercase mt-0.5">
                  System Diagram
                </p>
              </div>
              <button
                onClick={close}
                aria-label="Close diagram"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#071B3B]/50 hover:bg-[#071B3B]/10 hover:text-[#071B3B] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/*
              Content: flex-1 + min-h-0 lets the area shrink rather than overflow.
              overflow-auto adds scrollbars only when the diagram exceeds available height.
              The SVG renders at full modal width — much larger than the inline version.
            */}
            <div className="flex-1 min-h-0 overflow-auto p-3 sm:p-8">
              <div className="w-full">
                {children}
              </div>
            </div>

            {/* Footer note */}
            <div className="px-4 sm:px-6 py-2.5 border-t border-[#071B3B]/[0.06] flex-shrink-0 bg-[#F8F9FA]">
              <p className="text-[#071B3B]/35 text-[10px] leading-relaxed">
                Note: Diagram is simplified for presentation purposes only.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
