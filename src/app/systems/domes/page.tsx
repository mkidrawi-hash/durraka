import type { Metadata } from 'next'
import DomesPageContent from './DomesPageContent'
import { PackageGallery } from '@/components/systems/PackageGallery'
import type { LightboxImage } from '@/components/systems/ImageLightbox'

export const metadata: Metadata = {
  title: 'Domes & Vaults — Durraka',
  description:
    'Architectural GFRC / GRC dome and vault systems for building crowns, feature rooftops, and heritage-inspired structures across Saudi Arabia.',
}

const domesGallery: LightboxImage[] = [
  { src: '/images/projects/dome-vault-gfrc.png', alt: 'GFRC dome and vault architectural elements', scope: 'Domes & Vaults', status: 'Completed' },
  { src: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-domes-001.jpg', alt: 'GFRC architectural domes on religious facility', caption: 'Architectural dome elements', location: 'Makkah, Saudi Arabia', year: '2023', scope: 'Domes & Vaults', status: 'Completed' },
  { src: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-aerial-masterplan-001.jpg', alt: 'Aerial view of resort development with GFRC facade scope', caption: 'Aerial masterplan view', location: 'KAEC, Saudi Arabia', year: '2025', scope: 'Domes & Vaults', status: 'Completed' },
]

export default function DomesPage() {
  return (
    <>
      <DomesPageContent />
      <PackageGallery
        id="gallery"
        title="Project Gallery"
        eyebrow="Selected GFRC/GRC Works"
        entries={domesGallery}
      />
    </>
  )
}
