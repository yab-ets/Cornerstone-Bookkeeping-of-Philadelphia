import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { siteConfig } from '@/lib/utils'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.positioningStatement,
  keywords: [
    'bookkeeping',
    'Philadelphia bookkeeper',
    'small business bookkeeping',
    'monthly bookkeeping',
    'bookkeeping services Philadelphia',
    'cleanup bookkeeping',
    'catch-up bookkeeping',
    'PA bookkeeper',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cornerstonebookkeepingphl.com',
    title: siteConfig.name,
    description: siteConfig.positioningStatement,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.positioningStatement,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
