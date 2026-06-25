'use client'

import { useState } from 'react'

interface Props {
  catalogName: string
  catalogType: string
  downloadUrl: string
  pageSource: string
  fileSizeLabel?: string
}

type Status = 'idle' | 'logging' | 'ready' | 'unavailable'

export default function PublicCatalogDownload({
  catalogName,
  catalogType,
  downloadUrl,
  pageSource,
  fileSizeLabel = 'PDF',
}: Props) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleDownload() {
    if (status === 'logging') return
    setStatus('logging')

    // Fire tracking — non-blocking, download proceeds regardless of tracking outcome
    fetch('/api/catalog-download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ catalogName, catalogType, pageSource }),
    }).catch(() => {
      // Silently ignore tracking failures — never block the download
    })

    // Attempt download — open in same tab so browser handles PDF natively
    try {
      const check = await fetch(downloadUrl, { method: 'HEAD' })
      if (check.ok) {
        setStatus('ready')
        window.location.href = downloadUrl
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('unavailable')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      // Network issue — still attempt the redirect
      setStatus('ready')
      window.location.href = downloadUrl
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <button
        onClick={handleDownload}
        disabled={status === 'logging'}
        aria-busy={status === 'logging'}
        className={[
          'inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-sm transition-all duration-200',
          status === 'idle'
            ? 'bg-accent text-white hover:bg-accent-dark'
            : status === 'logging'
              ? 'bg-accent/70 text-white cursor-wait'
              : status === 'ready'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-600 cursor-default',
        ].join(' ')}
      >
        {status === 'idle' && (
          <>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Overview Catalog
          </>
        )}
        {status === 'logging' && (
          <>
            <svg className="w-4 h-4 animate-spin flex-shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Preparing…
          </>
        )}
        {status === 'ready' && (
          <>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Download Started
          </>
        )}
        {status === 'unavailable' && (
          <>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Catalog Being Prepared
          </>
        )}
      </button>

      {status === 'idle' && (
        <span className="text-gray-400 text-xs">
          {fileSizeLabel} &middot; Free &middot; No registration required
        </span>
      )}
      {status === 'unavailable' && (
        <span className="text-gray-500 text-xs">
          The catalog file is not yet uploaded.{' '}
          <a href="/contact" className="text-accent hover:underline">Contact us</a> for a copy.
        </span>
      )}
    </div>
  )
}
