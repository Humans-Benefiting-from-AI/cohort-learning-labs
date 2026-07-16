import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Cohort Learning Labs — Collaborative AI Learning and Implementation',
  description: 'Cohort Learning Labs helps professional teams adopt AI thoughtfully through collaborative learning, practical implementation, and responsible human oversight.',
  keywords: 'collaborative AI learning, AI implementation, AI adoption, professional learning, workflow design, human-centered AI, professional services',
  authors: [{ name: 'Cohort Learning Labs' }],
  openGraph: {
    title: 'Cohort Learning Labs — Collaborative AI Learning and Implementation',
    description: 'Cohort Learning Labs helps professional teams adopt AI thoughtfully through collaborative learning, practical implementation, and responsible human oversight.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cohort Learning Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cohort Learning Labs — Collaborative AI Learning and Implementation',
    description: 'Cohort Learning Labs helps professional teams adopt AI thoughtfully through collaborative learning, practical implementation, and responsible human oversight.',
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
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
