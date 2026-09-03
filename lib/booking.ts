/**
 * 30-minute consultation booking.
 *
 * Slot availability lives in Calendly. Connect Google Calendar on that
 * Calendly event so busy times never appear as open. The site only embeds
 * the event URL; it does not talk to Google directly.
 *
 * Override with NEXT_PUBLIC_CALENDLY_URL in .env.local or Vercel if the
 * event URL changes.
 */
const DEFAULT_CALENDLY_URL =
  'https://calendly.com/andrea-schulman-coaching/consultation-with-elie'

// Empty and whitespace-only values must fall through: `??` only treats
// null/undefined as missing, so a copied `.env.local.example` or a blank
// Vercel var would skip the embed and show the email fallback instead.
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || DEFAULT_CALENDLY_URL

export const consultationHref = '/contact#book'

export function calendlyEmbedUrl(url: string): string {
  const parsed = new URL(url)
  parsed.searchParams.set('hide_gdpr_banner', '1')
  parsed.searchParams.set('background_color', 'ede9e0')
  parsed.searchParams.set('text_color', '171a1c')
  parsed.searchParams.set('primary_color', '9a4f36')
  return parsed.toString()
}
