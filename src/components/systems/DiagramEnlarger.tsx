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
      {/* Inline: diagram + tap-to-enlarge button */}
      <div>
        {children}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="View larger system diagram"
          className="mt-2 flex items-center gap-1.5 text-[#071B3B]/40 hover:text-[#D71920] text-[11px] font-medium transition-colors group"
        >
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
          <span className="sm:hidden group-hover:underline underline-offset-2">Tap to enlarge</span>
          <span className="hidden sm:inline group-hover:underline underline-offset-2">View Larger Diagram</span>
        </button>
      </div>

      {/*
        Modal — full-screen viewer following the spec exactly:

        .diagram-modal       → fixed inset-0, flex column, overflow hidden, white bg
        .diagram-modal-header → flex: 0 0 auto  (flex-none)
        .diagram-modal-body  → flex: 1 1 auto   (flex-auto), overflow-y auto, display block
        .diagram-modal-content → max-width centered
        .diagram-modal-note  → margin-top 16px, no extra spacing

        No flex centering inside the body — content is plain block flow so the
        note sits directly under the diagram with no blank gap.
      */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — enlarged diagram`}
          className="fixed inset-0 bg-white flex flex-col overflow-hidden"
          style={{ zIndex: 9999 }}
        >
          {/* Header — flex-none = flex: 0 0 auto, never grows or shrinks */}
          <div className="flex-none border-b border-gray-100 px-4 sm:px-6 flex items-center justify-between" style={{ height: '64px' }}>
            <div>
              <p className="text-[#071B3B] font-bold text-sm leading-tight">{title}</p>
              <p className="text-[#071B3B]/40 text-[10px] font-mono tracking-widest uppercase mt-0.5">
                System Diagram
              </p>
            </div>
            <button
              onClick={close}
              aria-label="Close diagram"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#071B3B]/50 hover:bg-[#071B3B]/[0.07] hover:text-[#071B3B] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/*
            Body — flex-auto = flex: 1 1 auto (fills remaining height, shrinks if needed),
            overflow-y: auto for scroll when content is taller than viewport,
            display: block so children flow naturally top-to-bottom with no gap.
          */}
          <div
            className="overflow-y-auto"
            style={{ flex: '1 1 auto', display: 'block' }}
          >
            {/* Content — max-width centred, consistent padding */}
            <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 sm:py-10">
              {/* Diagram renders at full container width */}
              <div className="w-full">
                {children}
              </div>
              {/* Note appears directly below the diagram — no flex gap, no spacer */}
              <p
                className="text-gray-400 text-[11px] leading-relaxed"
                style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f3f4f6' }}
              >
                Note: Diagram is simplified for presentation purposes only.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
