import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingWhatsAppButton from '@/components/social/FloatingWhatsAppButton'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Durraka Factory for Industry | GFRC & GRC Façade Solutions',
    template: '%s | Durraka Factory',
  },
  description:
    'Durraka Factory for Industry — specialist manufacturer of GFRC/GRC façade cladding, mashrabiya systems, domes, cornices, columns, and custom decorative architectural elements for projects across Saudi Arabia.',
  keywords: [
    'GFRC',
    'GRC',
    'façade cladding',
    'mashrabiya',
    'architectural precast',
    'Saudi Arabia',
    'domes',
    'cornices',
    'columns',
    'factory',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Durraka Factory for Industry',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={poppins.className}>
        <Header />
        {/* pt matches fixed header height: 84px mobile, 80px (h-20) sm+ */}
        <main className="pt-[84px] sm:pt-20">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
