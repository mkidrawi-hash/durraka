import type { Metadata } from 'next'
import { ColumnsCapitalsPackageClient } from './client'
import { StickyMobileCTA } from '@/components/packages/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Columns & Capitals Package — GFRC/GRC Colonnades & Pilasters',
  description:
    'GFRC/GRC columns, capitals, bases, pilasters, and entrance colonnades for classical, heritage, and contemporary architectural projects. Kingdom-wide delivery.',
}

export default function ColumnsCapitalsPackagePage() {
  return (
    <>
      <ColumnsCapitalsPackageClient locale="en" />
      <StickyMobileCTA locale="en" />
    </>
  )
}
