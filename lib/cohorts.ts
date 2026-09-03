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
 * There is no published dollar amount. Until one is set, `price` stays
 * `Quoted` and the FAQ says the fee is given in the consultation. Do not put
 * a dummy `$—` back in the table. When a fee is ready, use e.g. `$X / month`
 * and restore the FAQ line that the home page lists it.
 *
 * October 2026 Tuesdays and Thursdays: the previous 14 / 16 October pair did
 * not fall on those weekdays.
 */
export const cohorts: Cohort[] = [
  {
    id: 'tuesday-israel',
    when: 'Tuesday, 19:00 Israel',
    duration: '12 weeks, from 13 October 2026',
    seats: 'Open',
    price: 'Quoted',
    ctaLabel: 'Apply',
  },
  {
    id: 'thursday-eastern',
    when: 'Thursday, 08:30 Eastern',
    duration: '12 weeks, from 15 October 2026',
    seats: 'Open',
    price: 'Quoted',
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
