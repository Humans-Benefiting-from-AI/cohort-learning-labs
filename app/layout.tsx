import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const title = 'Cohort Learning Labs — Group Learning for Problems That Keep Returning'
const description =
  'Cohort Learning Labs helps leaders and groups examine why recurring problems return—especially when rapid change exposes hidden patterns in authority, responsibility, and learning.'

export const metadata: Metadata = {
  title,
  description,
  keywords:
    'group learning, group inquiry, organizational learning, resistance to change, group process, leadership development, AI adaptation, professional judgment, cohort learning',
  authors: [{ name: 'Cohort Learning Labs' }],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
    siteName: 'Cohort Learning Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className="min-h-screen bg-primary-50">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
