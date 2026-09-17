import type { Metadata, Viewport } from 'next'
import { inter } from '@/lib/fonts'
import './globals.css'
import LenisProvider from '@/components/providers/LenisProvider'
import MobileToast from '@/components/ui/MobileToast'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A0A0A',
}

export const metadata: Metadata = {
  title: 'Origin.Co — Not Just A Community. It\'s Our Origin.',
  description:
    'Origin is a Mumbai-based creator community and brand-creator collaboration agency. We connect brands with vetted content creators and run exclusive IRL events. Build. Connect. Grow.',
  keywords: [
    'creator community',
    'brand collaboration',
    'Mumbai creators',
    'influencer marketing',
    'Origin Creator Community',
    'content creators Mumbai',
  ],
  openGraph: {
    title: 'Origin.Co — Creator Community & Brand Collaboration',
    description: 'We Connect. We Create. We Deliver. Mumbai\'s premier creator community.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Origin.Co',
    description: 'Not Just A Community. It\'s Our Origin.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-offwhite antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
        <MobileToast />
      </body>
    </html>
  )
}
