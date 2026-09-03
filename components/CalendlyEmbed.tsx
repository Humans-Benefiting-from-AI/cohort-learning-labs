'use client'

import Script from 'next/script'
import { calendlyEmbedUrl } from '@/lib/booking'

export default function CalendlyEmbed({ url }: { url: string }) {
  return (
    <div className="border border-rule bg-ground">
      <div
        className="calendly-inline-widget w-full"
        data-url={calendlyEmbedUrl(url)}
        style={{ minWidth: '320px', height: '720px' }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  )
}
