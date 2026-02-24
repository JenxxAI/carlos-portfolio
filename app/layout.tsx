import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carlos Miguel V. Torres — Frontend Developer',
  description: "I'm Carlos, a passionate Frontend Developer who turns ideas into clean, interactive web experiences. I write code that not only works — it impresses.",
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Carlos Miguel V. Torres' }],
  openGraph: {
    title: 'Carlos Miguel V. Torres — Frontend Developer',
    description: 'Passionate Frontend Developer building clean, interactive web experiences.',
    type: 'website',
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
