import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'NH66 Fund - Campus Alpha Fund | Student Investment Management',
  description: 'Professional student-run trading & investment fund generating consistent returns through data-driven strategies. AUM ₹1.2 Crore, 15+ student managers, 12.5% average annualized returns.',
  keywords: 'student investment fund, trading, portfolio management, NH66, campus finance, investment management, fintech',
  authors: [{ name: 'NH66 Fund Team' }],
  creator: 'NH66 Fund',
  publisher: 'NH66 Fund',
  metadataBase: new URL('https://nh66fund.com'),
  openGraph: {
    title: 'NH66 Fund - Campus Alpha Fund',
    description: 'Student-run investment fund powered by data-driven strategies',
    url: 'https://nh66fund.com',
    siteName: 'NH66 Fund',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NH66 Fund - Campus Alpha Fund',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NH66 Fund - Campus Alpha Fund',
    description: 'Student-run investment fund powered by data-driven strategies',
    images: ['/twitter-image.png'],
    creator: '@nh66fund',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
} 