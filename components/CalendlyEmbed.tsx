'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'
import { calendlyEmbedUrl } from '@/lib/booking'

type CalendlyApi = {
  initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyApi
  }
}

function mountCalendly(parent: HTMLElement, embedUrl: string) {
  if (!window.Calendly) return
  parent.innerHTML = ''
  window.Calendly.initInlineWidget({
    url: embedUrl,
    parentElement: parent,
  })
}

export default function CalendlyEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const embedUrl = calendlyEmbedUrl(url)

  // widget.js only auto-scans once at script load. Client navigations remount
  // this node after the script is already present, so init explicitly on mount
  // and again when the script finishes loading.
  useEffect(() => {
    const parent = containerRef.current
    if (!parent) return

    mountCalendly(parent, embedUrl)
    return () => {
      parent.innerHTML = ''
    }
  }, [embedUrl])

  return (
    <div className="border border-rule bg-ground">
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full"
        data-auto-load="false"
        style={{ minWidth: '320px', height: '720px' }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          const parent = containerRef.current
          if (parent) mountCalendly(parent, embedUrl)
        }}
      />
    </div>
  )
}
