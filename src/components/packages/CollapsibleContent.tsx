'use client'

import { useState } from 'react'

interface CollapsibleContentProps {
  label: string
  defaultOpen?: boolean
  children: React.ReactNode
}

export function CollapsibleContent({ label, defaultOpen = false, children }: CollapsibleContentProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <>
      <button
        type="button"
        className="sm:hidden w-full flex items-center justify-between py-2.5 border-b border-gray-100 text-navy/50 hover:text-navy/70 transition-colors"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase">
          {open ? 'Hide' : label}
        </span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? '-rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`${open ? '' : 'hidden'} sm:block`}>
        {children}
      </div>
    </>
  )
}
