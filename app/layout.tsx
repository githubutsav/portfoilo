import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono, Instrument_Serif, Space_Grotesk } from 'next/font/google'
import './globals.css'

import { siteConfig } from '@/lib/data'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const fontSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
})

// =============================================================================
// 🌐 DOMAIN CONFIGURATION
// To change domain, site title, keywords, or social links: edit lib/data.ts!
// =============================================================================
const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.trim()) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL && process.env.VERCEL_URL.trim()) {
    return `https://${process.env.VERCEL_URL}`
  }
  if (siteConfig.defaultDomain && siteConfig.defaultDomain.trim()) {
    return `https://${siteConfig.defaultDomain}`
  }
  return 'http://localhost:3000'
}

const siteUrl = getSiteUrl()

export const metadataBase = new URL(siteUrl)

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.social.github }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  verification: {
    google: siteConfig.googleSiteVerification || undefined,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: `${siteConfig.name} Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    site: siteConfig.social.twitterHandle,
    creator: siteConfig.social.twitterHandle,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg' },
    ],
    apple: '/icon.svg',
    shortcut: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: dark)',
      color: '#0a0d0f',
    },
  ],
  colorScheme: 'dark',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      mainEntityOfPage: siteUrl,
      name: siteConfig.name,
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      email: `mailto:${siteConfig.email}`,
      nationality: 'Indian',
      jobTitle: 'Full-Stack Cloud, AI & DevOps Engineer',
      worksFor: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Google Developer Groups on Campus (BBDITM)',
        url: 'https://gdg.community.dev/',
      },
      almaMater: {
        '@type': 'EducationalOrganization',
        name: 'Babu Banarasi Das Institute of Technology and Management (BBDITM)',
      },
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.twitter,
      ],
      knowsAbout: [
        'Full Stack Web Development',
        'Cloud Computing',
        'Google Cloud Platform (GCP)',
        'Amazon Web Services (AWS)',
        'TypeScript',
        'Next.js',
        'Node.js',
        'React',
        'Docker & Kubernetes',
        'Artificial Intelligence & LLMs',
        'Gemini API & Agentic Workflows',
      ],
      description: siteConfig.description,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: `${siteConfig.name} Portfolio`,
      description: siteConfig.description,
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
      inLanguage: 'en-US',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      translate="no"
      className={`notranslate dark bg-background scroll-smooth ${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} ${fontSerif.variable}`}
    >
      <head>
        <meta name="google" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
