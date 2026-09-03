/**
 * 30-minute consultation booking.
 *
 * Slot availability lives in Calendly. Connect Google Calendar on that
 * Calendly event so busy times never appear as open. The site only embeds
 * the event URL; it does not talk to Google directly.
 *
 * Set NEXT_PUBLIC_CALENDLY_URL in .env.local and in Vercel, e.g.
 * https://calendly.com/your-handle/30min
 */
export const CALENDLY_URL = (process.env.NEXT_PUBLIC_CALENDLY_URL ?? '').trim()

export const consultationHref = '/contact#book'

export function calendlyEmbedUrl(url: string): string {
  const parsed = new URL(url)
  parsed.searchParams.set('hide_gdpr_banner', '1')
  parsed.searchParams.set('background_color', 'ede9e0')
  parsed.searchParams.set('text_color', '171a1c')
  parsed.searchParams.set('primary_color', '9a4f36')
  return parsed.toString()
}
