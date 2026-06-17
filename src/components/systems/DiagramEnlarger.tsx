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
        Modal architecture:
        ┌─────────────────────────────────────────┐ ← fixed inset-0 (z-index 99999)
        │  dark semi-transparent backdrop         │
        │  (clicking backdrop closes modal)       │
        │                                         │
        │  ┌───────────────────────────────────┐  │
        │  │  PANEL — auto height, NOT full    │  │
        │  │  screen. Wraps content only.      │  │
        │  │  ─────────────────────────────    │  │
        │  │  drag handle (mobile only)        │  │
        │  │  header with close button         │  │
        │  │  ─────────────────────────────    │  │
        │  │  scrollable body (auto height,    │  │
        │  │  caps at 90dvh - header height)   │  │
        │  │    • diagram SVG                  │  │
        │  │    • note (16px below diagram)    │  │
        │  │  ← END OF PANEL, no blank space → │  │
        │  └───────────────────────────────────┘  │
        └─────────────────────────────────────────┘

        Mobile: panel sits at bottom (items-end), rounded-t-2xl
        Desktop (sm+): panel is centred (items-center), max-w-3xl, rounded-2xl

        The panel uses height:auto — it wraps its content.
        The body uses overflow-y-auto + max-height to cap tall diagrams.
        NO flex:1 / NO flex-grow / NO min-height:100% inside the panel.
        WhatsApp button (z-40) is covered because modal z-index is 99999.
      */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — enlarged diagram`}
          className="fixed inset-0"
          style={{ zIndex: 99999 }}
        >
          {/* Dark backdrop — fills the space above the panel on mobile */}
          <div
            className="absolute inset-0 bg-[#071B3B]/65 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/*
            Flex layer: bottom-aligned on mobile, centred on desktop.
            pointer-events-none so clicks on empty areas reach the backdrop.
          */}
          <div className="absolute inset-0 flex items-end sm:items-center justify-center sm:p-6 pointer-events-none">

            {/*
              Panel — auto height, capped at 90dvh.
              pointer-events-auto restores interactivity for the panel itself.
              Clicks inside the panel don't bubble to the backdrop.
            */}
            <div
              className="pointer-events-auto relative w-full rounded-t-2xl sm:max-w-3xl sm:rounded-2xl bg-white shadow-2xl"
              style={{ maxHeight: '90dvh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag handle — mobile only */}
              <div className="sm:hidden flex justify-center pt-2.5 pb-0.5" aria-hidden="true">
                <div className="w-8 h-1 rounded-full bg-gray-200" />
              </div>

              {/* Header */}
              <div className="px-4 sm:px-6 py-3.5 border-b border-gray-100 flex items-center justify-between">
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
                Body:
                – No flex-1, no flex-grow, no min-height, no justify-content.
                – overflow-y-auto: scrolls only when content exceeds max-height.
                – max-height = 90dvh minus handle (~16px) minus header (~57px) minus buffer
                  ≈ calc(90dvh - 90px)
                – When content is SHORT (normal SVG diagram): body height = content height.
                  Panel wraps tightly. NO blank space below the note.
                – When content is TALL (unlikely): body scrolls internally.
              */}
              <div
                className="overflow-y-auto"
                style={{ maxHeight: 'calc(90dvh - 90px)' }}
              >
                <div className="px-4 sm:px-6 py-5 sm:py-8 max-w-2xl mx-auto">
                  {/* Diagram at full container width */}
                  <div className="w-full">
                    {children}
                  </div>
                  {/* Note sits 16px below diagram — plain margin, no spacer, no flex */}
                  <p
                    className="text-gray-400 text-[11px] leading-relaxed"
                    style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #f3f4f6' }}
                  >
                    Note: Diagram is simplified for presentation purposes only.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  )
}
