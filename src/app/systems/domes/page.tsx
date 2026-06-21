import type { Metadata } from 'next'
import DomesPageContent from './DomesPageContent'

export const metadata: Metadata = {
  title: 'Domes & Vaults — Durraka',
  description:
    'Architectural GFRC / GRC dome and vault systems for building crowns, feature rooftops, and heritage-inspired structures across Saudi Arabia.',
}

export default function DomesPage() {
  return <DomesPageContent />
}
