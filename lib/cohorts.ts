export interface Cohort {
  id: string
  when: string
  duration: string
  seats: string
  seatsScarce?: boolean
  price: string
  ctaLabel: string
}

export const cohorts: Cohort[] = [
  {
    id: 'tuesday-israel',
    when: 'Tuesday, 19:00 Israel',
    duration: '12 weeks, from 14 October',
    seats: '2 seats',
    seatsScarce: true,
    price: '$— / month',
    ctaLabel: 'Apply',
  },
  {
    id: 'thursday-eastern',
    when: 'Thursday, 08:30 Eastern',
    duration: '12 weeks, from 16 October',
    seats: '4 seats',
    price: '$— / month',
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
