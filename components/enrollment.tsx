'use client'

import { useSyncExternalStore, type ReactNode } from 'react'
import {
  cohorts,
  ENROLLMENT_OPEN_LABEL,
  ENROLLMENT_STARTED_LABEL,
  hasOpenEnrollment,
  isEnrollmentOpen,
  nextCohortsHeading,
  WAITLIST_HREF,
  WAITLIST_LINK_LABEL,
  WAITLIST_SENTENCE,
} from '@/lib/cohorts'

/**
 * Cohort status has to change at `startsAt` even when the HTML was cached or
 * prerendered. Reading the clock here does that without `connection()`, so
 * the route can stay static. `serverNow` is only the hydration snapshot;
 * after that the browser clock wins, including a timeout aimed at the next
 * start instant.
 */
let clientNow = 0
const listeners = new Set<() => void>()
let timer: ReturnType<typeof setTimeout> | undefined
let armed = false

function nextStart(now: number): number | null {
  let next: number | null = null
  for (const cohort of cohorts) {
    if (!cohort.startsAt) continue
    const at = Date.parse(cohort.startsAt)
    if (at > now && (next === null || at < next)) next = at
  }
  return next
}

function notify() {
  listeners.forEach((listener) => listener())
}

function arm() {
  if (timer !== undefined) clearTimeout(timer)
  const next = nextStart(Date.now())
  // setTimeout delay is a 32-bit signed int. Re-arm if the next start is further out.
  const delay =
    next === null ? 60 * 60 * 1000 : Math.min(Math.max(next - Date.now(), 0), 2_147_483_647)
  timer = setTimeout(() => {
    clientNow = Date.now()
    notify()
    arm()
  }, delay)
}

function onVisible() {
  if (document.visibilityState !== 'visible') return
  clientNow = Date.now()
  notify()
  arm()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  // Refresh on mount so a page opened after the start does not keep a stale module cache.
  clientNow = Date.now()
  if (!armed) {
    armed = true
    arm()
    document.addEventListener('visibilitychange', onVisible)
  }
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0 && armed) {
      armed = false
      if (timer !== undefined) clearTimeout(timer)
      timer = undefined
      document.removeEventListener('visibilitychange', onVisible)
    }
  }
}

function getClientNow() {
  if (clientNow === 0) clientNow = Date.now()
  return clientNow
}

export function useEnrollmentNow(serverNow: number): number {
  return useSyncExternalStore(subscribe, getClientNow, () => serverNow)
}

export function EnrollmentLabel({
  startsAt,
  serverNow,
  cohortId,
  openClassName,
  closedClassName,
}: {
  startsAt: string
  serverNow: number
  cohortId?: string
  openClassName?: string
  closedClassName?: string
}) {
  const now = useEnrollmentNow(serverNow)
  const open = isEnrollmentOpen(startsAt, now)
  return (
    <span
      className={open ? openClassName : closedClassName}
      data-cohort={cohortId}
      data-enrollment={open ? 'open' : 'started'}
    >
      {open ? ENROLLMENT_OPEN_LABEL : ENROLLMENT_STARTED_LABEL}
    </span>
  )
}

export function WhenCohortOpen({
  startsAt,
  serverNow,
  open,
  closed,
}: {
  startsAt: string
  serverNow: number
  open: ReactNode
  closed: ReactNode
}) {
  const now = useEnrollmentNow(serverNow)
  return isEnrollmentOpen(startsAt, now) ? open : closed
}

export function WhenEnrollment({
  serverNow,
  phase,
  children,
}: {
  serverNow: number
  phase: 'open' | 'closed'
  children: ReactNode
}) {
  const now = useEnrollmentNow(serverNow)
  const open = hasOpenEnrollment(now)
  if (phase === 'open' ? !open : open) return null
  return children
}

export function WaitlistNote({
  serverNow,
  className,
}: {
  serverNow: number
  className?: string
}) {
  const now = useEnrollmentNow(serverNow)
  if (hasOpenEnrollment(now)) return null
  return (
    <p className={className}>
      {WAITLIST_SENTENCE}{' '}
      <a href={WAITLIST_HREF} className="text-accent underline">
        {WAITLIST_LINK_LABEL}
      </a>{' '}
      for the next round.
    </p>
  )
}

export function NextCohortsHeading({
  serverNow,
  className,
}: {
  serverNow: number
  className?: string
}) {
  const now = useEnrollmentNow(serverNow)
  const heading = nextCohortsHeading(now)
  return (
    <h2 className={className} data-cohort-heading={heading}>
      {heading}
    </h2>
  )
}

export function CohortsFormingLabel({ serverNow }: { serverNow: number }) {
  const now = useEnrollmentNow(serverNow)
  return hasOpenEnrollment(now) ? '03 — Cohorts forming' : '03 — Cohorts'
}

export function WaitlistButton({ className }: { className?: string }) {
  return (
    <a href={WAITLIST_HREF} className={className}>
      {WAITLIST_LINK_LABEL}
    </a>
  )
}
