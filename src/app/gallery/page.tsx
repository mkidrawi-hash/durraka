import type { Metadata } from 'next'
import { GalleryPage } from '@/components/gallery/GalleryPage'
import { GALLERY_IMAGES } from '@/data/galleryImages'
import { galleryContent } from '@/content/en/gallery'

export const metadata: Metadata = {
  title: galleryContent.metaTitle,
  description: galleryContent.metaDescription,
}

export default function GalleryRoute() {
  return <GalleryPage images={GALLERY_IMAGES} locale="en" />
}
