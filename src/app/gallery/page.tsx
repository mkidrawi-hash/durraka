import type { Metadata } from 'next'
import { GalleryPage } from '@/components/gallery/GalleryPage'
import { GALLERY_IMAGES } from '@/data/galleryImages'

export const metadata: Metadata = {
  title: 'Project Gallery | Durraka Factory for Industry',
  description:
    'Explore selected GRC / GFRC architectural works, facade components, textures, and project-based visual references.',
}

export default function GalleryRoute() {
  return <GalleryPage images={GALLERY_IMAGES} />
}
