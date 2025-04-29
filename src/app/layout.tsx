import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Node Networks - Staking Services',
  description:
    'Professional Cardano staking services and consultancy. Maximize your staking rewards with our global team of experts. Secure, reliable, and community-driven staking pools.',
  keywords: [
    'Cardano staking',
    'dPoS',
    'delegated proof of stake',
    'staking pools',
    'Cardano delegation',
    'staking rewards',
    'Cardano validator',
    'staking services',
    'cryptocurrency staking',
    'blockchain staking',
    'Node Networks',
    'Cardano pool',
    'staking consultancy',
    'crypto staking',
    'ADA staking',
  ].join(', '),
  openGraph: {
    title: 'Node Networks - Professional Cardano Staking Services',
    description:
      'Maximize your Cardano staking rewards with our secure, reliable, and community-driven staking pools. Expert staking services and consultancy.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Node Networks',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Node Networks - Staking Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Node Networks - Staking Services',
    description:
      'Professional Cardano staking services and consultancy. Maximize your staking rewards with our global team of experts.',
    images: ['/logo.png'],
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
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://nodenetworks.org',
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  )
}
