export interface Cohort {
  id: string
  when: string
  duration: string
  seats: string
  seatsScarce?: boolean
  price: string
  ctaLabel: string
}

/**
 * Operational cohort data. Edit this file — not page copy — when dates, seats,
 * or a monthly fee change.
 *
 * Open-cohort `price` is the published monthly fee per member. Private groups
 * stay `Quoted`. October 2026 Tuesdays and Thursdays: the previous 14 / 16
 * October pair did not fall on those weekdays.
 */
export const cohorts: Cohort[] = [
  {
    id: 'tuesday-israel',
    when: 'Tuesday, 19:00 Israel',
    duration: '12 weeks, from 13 October 2026',
    seats: 'Open',
    price: '$199 / month',
    ctaLabel: 'Apply',
  },
  {
    id: 'thursday-eastern',
    when: 'Thursday, 08:30 Eastern',
    duration: '12 weeks, from 15 October 2026',
    seats: 'Open',
    price: '$199 / month',
    ctaLabel: 'Apply',
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
