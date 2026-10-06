export const introduction = {
  title: 'What happens when someone reads it differently?',
  dateLabel: 'Thursday, 8 October 2026',
  timeLabel: '19:00–19:45 Israel · 12:00–12:45 US Eastern',
  rsvpHref:
    'mailto:elie@cohortlearninglabs.org?subject=October%208%20introduction%20RSVP&body=Hi%20Elie%2C%0A%0AI%20would%20like%20to%20join%20the%20free%20introduction%20on%20October%208.%0A%0AMy%20name%3A%0AHow%20I%20heard%20about%20it%3A%0A%0APlease%20send%20me%20the%20joining%20details.',
}

/**
 * End of the free introduction: 19:45 Israel (IDT, UTC+3) and 12:45 US Eastern
 * (EDT, UTC−4) on 8 October 2026. After this instant the page says the
 * session has passed, search engines are told not to index it, and the
 * sitemap drops it.
 */
export const INTRODUCTION_ENDS_AT = '2026-10-08T16:45:00.000Z'

export function isIntroductionOpen(now = Date.now()): boolean {
  return now < Date.parse(INTRODUCTION_ENDS_AT)
}
