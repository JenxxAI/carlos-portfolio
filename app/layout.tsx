/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://carlos-portfolio-sand.vercel.app'),
  title: 'Carlos Miguel Torres — Technical Support & Quality Engineer',
  description:
    'Technical Support Engineer at Growsari with a foundation in software quality, IT operations, troubleshooting, automation, and web development.',
  keywords: [
    'Technical Support Engineer',
    'Quality Assurance Engineer',
    'IT Support',
    'Software Testing',
    'Playwright',
    'n8n',
    'Carlos Miguel Torres',
  ],
  authors: [{ name: 'Carlos Miguel V. Torres' }],
  openGraph: {
    title: 'Carlos Miguel Torres — Technical Support & Quality Engineer',
    description:
      'From QA intern to QA engineer to Technical Support Engineer — solving technical problems with an evidence-first mindset.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Miguel Torres — Technical Support & Quality Engineer',
    description: 'Technical support, software quality, IT operations, and practical automation.',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=Outfit:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-white font-outfit overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
