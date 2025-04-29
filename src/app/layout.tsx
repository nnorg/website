import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Node Networks',
    default: 'Node Networks - Staking Works for EVERYONE.',
  },
  icons: {
    icon: [
      { url: '/public/logo.png', type: 'image/png' },
      { url: '/public/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/public/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/public/logo.png', type: 'image/png' }],
    shortcut: ['/public/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
