'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface DiagramEnlargerProps {
  title: string
  children: React.ReactNode
}

export function DiagramEnlarger({ title, children }: DiagramEnlargerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setTimeout(() => triggerRef.current?.focus(), 0)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('diagram-modal-open')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.classList.remove('diagram-modal-open')
      document.body.style.overflow = ''
    }
    return () => {
      document.body.classList.remove('diagram-modal-open')
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // ESC key closes modal on desktop
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  return (
    <>
      {/* Inline diagram + tap-to-enlarge button */}
      <div>
        {children}
        <button
          ref={triggerRef}
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

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — enlarged diagram`}
          className="fixed inset-0"
          style={{ zIndex: 99999 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#071B3B]/65 backdrop-blur-[6px]"
            onClick={close}
            aria-hidden="true"
          />

          {/* Position wrapper — bottom on mobile, centred on desktop */}
          <div className="absolute inset-0 flex items-end sm:items-center justify-center sm:p-6 pointer-events-none">

            {/* Panel: height:auto, capped at 90vh. No flex-col — block layout only. */}
            <div
              className="pointer-events-auto relative w-full sm:max-w-3xl bg-white shadow-2xl overflow-hidden rounded-t-[24px] sm:rounded-2xl max-h-[90vh] sm:max-h-[90dvh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag handle — mobile only */}
              <div className="sm:hidden flex justify-center pt-3 pb-0" aria-hidden="true">
                <div className="w-12 h-[5px] rounded-full bg-gray-200" />
              </div>

              {/* Header */}
              <div className="relative px-4 sm:px-6 pt-5 sm:pt-3.5 pb-4 border-b border-gray-100">
                <p className="text-[#071B3B] font-bold text-[22px] sm:text-sm leading-tight pr-14">
                  {title}
                </p>
                <p className="text-gray-400 text-[13px] sm:text-[10px] tracking-[0.22em] uppercase mt-1.5 sm:mt-0.5">
                  System Diagram
                </p>
                <button
                  onClick={close}
                  aria-label="Close diagram"
                  className="absolute top-1/2 -translate-y-1/2 right-4 w-11 h-11 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body — display:block prevents flex stretching; max-height caps scroll */}
              <div
                className="overflow-y-auto"
                style={{
                  display: 'block',
                  maxHeight: 'calc(90vh - 112px)',
                  WebkitOverflowScrolling: 'touch' as const,
                } as React.CSSProperties}
              >
                <div
                  className="px-4 sm:px-6 pt-5 sm:pt-8 max-w-2xl mx-auto"
                  style={{ paddingBottom: 'calc(24px + env(safe-area-inset-bottom))' }}
                >
                  <div className="w-full">{children}</div>
                  <p
                    className="text-gray-400 text-[12px] leading-relaxed"
                    style={{
                      marginTop: '18px',
                      paddingTop: '16px',
                      borderTop: '1px solid #eef0f3',
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
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
