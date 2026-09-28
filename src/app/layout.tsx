import type { Metadata } from 'next'
import Script from 'next/script'
import { CanvasWrapper } from '@/components/3d/CanvasWrapper'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickySocials } from '@/components/layout/StickySocials'
import './globals.css'

const inter = { variable: 'font-sans' }
const jetbrainsMono = { variable: 'font-mono' }

export const metadata: Metadata = {
  title: 'IMPETIC — 3D WebGL Software Studio',
  description: 'Engineering high-performance WebGL web applications, intelligent AI systems, cloud infrastructure, and digital growth platforms.',
  keywords: ['Software Studio', 'Three.js', 'React Three Fiber', 'Next.js 15', 'AI Integration', 'WebGL 3D', 'Digital Marketing'],
  icons: {
    icon: [
      { url: '/impetic.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/impetic.svg',
    apple: '/impetic.svg',
  },
  openGraph: {
    title: 'IMPETIC — 3D WebGL Software Studio',
    description: 'Engineering the continuous digital current that moves your product forward.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Impetic',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://impetic.com',
    logo: 'https://impetic.com/impetic.svg',
    sameAs: [
      'https://x.com/Impeticagency',
      'https://www.instagram.com/impeticmarketing/',
      'https://www.linkedin.com/company/impetic/',
      'https://www.facebook.com/people/Impetic/61594256379381/',
      'https://www.youtube.com/channel/UC5gMU2nnEgJcvqSISq-D9sQ',
      'https://www.pinterest.com/impetic/',
    ],
    description: 'Empowering modern businesses through strategic Digital Marketing, AI-driven Automation, and Scalable Software Solutions.',
  }

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DKP22QLPX6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DKP22QLPX6');
          `}
        </Script>
      </head>
      <body className="bg-[#000000] text-[#EAF6F5] font-sans antialiased selection:bg-[#4DE8DC] selection:text-black min-h-screen" suppressHydrationWarning>
        <LenisProvider>
          {/* Dynamic 3D Scene Canvas */}
          <CanvasWrapper />

          {/* Persistent Global Header */}
          <Header />

          {/* Sticky Social Icons on Right Mid Side */}
          <StickySocials />

          {/* Main Route Content & Footer */}
          <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
            <main className="grow w-full">{children}</main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  )
}
