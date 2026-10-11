export interface Cohort {
  id: string
  when: string
  duration: string
  /**
   * Shown for a row that does not open and close on a clock, such as a
   * private group. Scheduled cohorts derive Open / Started from `startsAt`.
   */
  seats?: string
  price: string
  ctaLabel: string
  dates?: string[]
  timeZone?: string
  scheduleStatus?: string
  /** First-session calendar date, written the way the site shows it. */
  startDateLabel?: string
  /**
   * Absolute instant the first session begins. New members are accepted only
   * while `now < startsAt`. After that the cohort has started and is closed.
   */
  startsAt?: string
}

/**
 * Operational cohort data. Edit this file — not page copy — when dates, the
 * start instant, or the four-session package fee changes.
 *
 * A scheduled cohort stays open until `startsAt`. Pages compare that instant
 * with the clock in the browser, so a cached or statically rendered page
 * still flips when the session begins, without making every route dynamic.
 * When none are open, the listings offer an email waitlist. Do not invent
 * the next round's dates or price.
 *
 * `price` on a scheduled cohort is the total USD fee per member for all four
 * sessions. Private groups stay `Quoted`. October 2026 meets on Tuesday 13
 * and Thursday 15; an earlier 14 / 16 pair did not fall on those weekdays.
 */
export const OPEN_COHORT_PRICE = '$500 USD total'

export const ENROLLMENT_OPEN_LABEL = 'Open'
export const ENROLLMENT_STARTED_LABEL = 'Started'

/** Replaces a join link once that cohort's first session has begun. */
export const ENROLLMENT_CLOSED_NOTE = 'Closed to new members'

export const COHORT_STARTED_NOTE = 'This group has started. It is closed to new members.'

export const WAITLIST_SENTENCE =
  'These groups have started, and they are closed to new members.'

export const WAITLIST_LINK_LABEL = 'Join the waitlist'

export const WAITLIST_HREF =
  'mailto:elie@cohortlearninglabs.org?subject=Waitlist%20for%20the%20next%20round&body=Hi%20Elie%2C%0A%0AI%20would%20like%20to%20join%20the%20waitlist%20for%20the%20next%20round.%0A%0AMy%20name%3A%0A'

const TUESDAY_START_LABEL = '13 October 2026'
const THURSDAY_START_LABEL = '15 October 2026'

export const cohorts: Cohort[] = [
  {
    id: 'tuesday-israel',
    when: 'Tuesday, 19:00 Israel',
    duration: `4 weekly sessions, from ${TUESDAY_START_LABEL}`,
    price: OPEN_COHORT_PRICE,
    ctaLabel: 'Book a conversation',
    dates: ['13 October', '20 October', '27 October', '3 November'],
    timeZone: 'Asia/Jerusalem',
    scheduleStatus: '19:00–20:30 Israel each Tuesday.',
    startDateLabel: TUESDAY_START_LABEL,
    // 19:00 Israel on 13 October 2026 (IDT, UTC+3).
    startsAt: '2026-10-13T16:00:00.000Z',
  },
  {
    id: 'thursday-eastern',
    when: 'Thursday, 08:30 Eastern',
    duration: `4 weekly sessions, from ${THURSDAY_START_LABEL}`,
    price: OPEN_COHORT_PRICE,
    ctaLabel: 'Book a conversation',
    dates: ['15 October', '22 October', '29 October', '5 November'],
    timeZone: 'America/New_York',
    scheduleStatus: '08:30–10:00 US Eastern each Thursday.',
    startDateLabel: THURSDAY_START_LABEL,
    // 08:30 US Eastern on 15 October 2026 (EDT, UTC−4). 15:30 in Israel.
    startsAt: '2026-10-15T12:30:00.000Z',
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

export function isScheduledCohort(
  cohort: Cohort
): cohort is Cohort & { startsAt: string; startDateLabel: string } {
  return typeof cohort.startsAt === 'string' && typeof cohort.startDateLabel === 'string'
}

/**
 * Server render time, passed to the client clock as the hydration snapshot.
 * The browser clock in `components/enrollment.tsx` replaces it after load, so
 * a cached page still flips at `startsAt`.
 */
export function enrollmentClock(): number {
  return Date.now()
}

/** True until the first session begins. Equal to `startsAt` counts as closed. */
export function isEnrollmentOpen(startsAt: string, now = enrollmentClock()): boolean {
  return now < Date.parse(startsAt)
}

export function openCohorts(
  now = enrollmentClock(),
  list: readonly Cohort[] = cohorts
): Cohort[] {
  return list.filter(
    (cohort) => cohort.startsAt !== undefined && isEnrollmentOpen(cohort.startsAt, now)
  )
}

export function hasOpenEnrollment(
  now = enrollmentClock(),
  list: readonly Cohort[] = cohorts
): boolean {
  return openCohorts(now, list).length > 0
}

export function enrollmentLabel(cohort: Cohort, now = enrollmentClock()): string {
  if (!cohort.startsAt) return cohort.seats ?? '—'
  return isEnrollmentOpen(cohort.startsAt, now)
    ? ENROLLMENT_OPEN_LABEL
    : ENROLLMENT_STARTED_LABEL
}

/**
 * Services-page line. While these October cohorts are still ahead it stays
 * "The next cohorts start in October 2026." After they have all begun it
 * stops naming that month.
 */
export function nextCohortsHeading(now = enrollmentClock()): string {
  const open = openCohorts(now)
  if (open.length === 0) return 'These cohorts have started.'
  if (open.length === 1) {
    const when = open[0].startDateLabel
    return when ? `The next cohort starts on ${when}.` : 'The next cohort is still open.'
  }
  const months = new Set<string>()
  for (const cohort of open) {
    const month = cohort.startDateLabel?.match(/[A-Za-z]+ \d{4}$/)?.[0]
    if (month) months.add(month)
  }
  if (months.size === 1) {
    const month = months.values().next().value
    return `The next cohorts start in ${month}.`
  }
  return 'The next cohorts are open.'
}
