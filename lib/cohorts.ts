export interface Cohort {
  id: string
  when: string
  duration: string
  seats: string
  price: string
  ctaLabel: string
  dates?: string[]
  timeZone?: string
  scheduleStatus?: string
}

/**
 * Operational cohort data. Edit this file — not page copy — when dates, seats,
 * or the four-session package fee changes.
 *
 * Open-cohort `price` is the total USD fee per member for all four sessions. Private groups
 * stay `Quoted`. October 2026 Tuesdays and Thursdays: the previous 14 / 16
 * October pair did not fall on those weekdays.
 */
export const OPEN_COHORT_PRICE = '$500 USD total'

export const cohorts: Cohort[] = [
  {
    id: 'tuesday-israel',
    when: 'Tuesday, 19:00 Israel',
    duration: '4 weekly sessions, from 13 October 2026',
    seats: 'Open',
    price: OPEN_COHORT_PRICE,
    ctaLabel: 'Book a conversation',
    dates: ['13 October', '20 October', '27 October', '3 November'],
    timeZone: 'Asia/Jerusalem',
    scheduleStatus: '19:00–20:30 Israel each Tuesday.',
  },
  {
    id: 'thursday-eastern',
    when: 'Thursday, 08:30 Eastern',
    duration: '4 weekly sessions, from 15 October 2026',
    seats: 'Open',
    price: OPEN_COHORT_PRICE,
    ctaLabel: 'Book a conversation',
    dates: ['15 October', '22 October', '29 October', '5 November'],
    timeZone: 'America/New_York',
    scheduleStatus: '08:30–10:00 US Eastern each Thursday.',
  },
  {
    id: 'private',
    when: 'Private group',
    duration: 'Arranged with you',
    seats: '—',
    price: 'Quoted',
    ctaLabel: 'Discuss',
  },
]
