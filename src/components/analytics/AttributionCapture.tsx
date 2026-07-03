'use client'

import { useEffect } from 'react'
import { captureAttribution } from '@/lib/analytics'

// Renders nothing. Records first-touch UTM / referrer / landing page once per
// tab session, as early as possible, so any lead form submitted later carries
// where the visitor came from. Mounted once in the root layout.
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution()
  }, [])
  return null
}
