import type { Metadata } from 'next'
import { GalleryPage } from '@/components/gallery/GalleryPage'
import { GALLERY_IMAGES, publishedGalleryImages } from '@/data/galleryImages'
import { galleryContentAr } from '@/content/ar/gallery'

export const metadata: Metadata = {
  title: galleryContentAr.metaTitle,
  description: galleryContentAr.metaDescription,
  keywords: [
    'معرض المشاريع',
    'أعمال GFRC',
    'أعمال GRC',
    'واجهات معمارية',
    'مصنع دراكة للصناعة',
    'دُرّاكة',
    'جدة',
    'المملكة العربية السعودية',
  ],
  openGraph: {
    title: galleryContentAr.metaTitle,
    description: galleryContentAr.metaDescription,
  },
}

export default function ArGalleryPage() {
  return <GalleryPage images={publishedGalleryImages(GALLERY_IMAGES)} locale="ar" />
}
