import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'Durraka Factory for Industry | GFRC & GRC Façade Solutions',
    template: '%s | Durraka Factory',
  },
  description:
    'Saudi Arabia\'s leading manufacturer of GFRC/GRC façade cladding, mashrabiya systems, domes, cornices, columns, and custom decorative architectural elements.',
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
      <body className={inter.className}>
        <Header />
        <main className="pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
