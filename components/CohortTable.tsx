'use client'

import ConsultationLink from '@/components/ConsultationLink'
import { useEnrollmentNow } from '@/components/enrollment'
import {
  cohorts,
  enrollmentLabel,
  ENROLLMENT_CLOSED_NOTE,
  isEnrollmentOpen,
} from '@/lib/cohorts'

export default function CohortTable({
  showApply = true,
  serverNow,
}: {
  showApply?: boolean
  serverNow: number
}) {
  const now = useEnrollmentNow(serverNow)
  return (
    <div className="border border-rule bg-paper">
      {cohorts.map((cohort) => {
        const open = cohort.startsAt ? isEnrollmentOpen(cohort.startsAt, now) : true
        return (
          <div
            key={cohort.id}
            className={
              showApply
                ? 'grid items-baseline gap-x-[14px] gap-y-2 border-b border-rule-warm px-5 py-5 last:border-b-0 lg:grid-cols-[minmax(120px,1fr)_140px_100px_100px_130px]'
                : 'grid items-baseline gap-x-[14px] gap-y-2 border-b border-rule-warm px-5 py-5 last:border-b-0 lg:grid-cols-[minmax(130px,1fr)_148px_100px_100px]'
            }
          >
            <span className="font-serif text-[19px] leading-[1.4] text-ink">{cohort.when}</span>
            <span className="font-sans text-[13.5px] text-muted">{cohort.duration}</span>
            <span
              className="font-sans text-[13.5px] text-muted"
              data-cohort={cohort.id}
              {...(cohort.startsAt ? { 'data-enrollment': open ? 'open' : 'started' } : {})}
            >
              {enrollmentLabel(cohort, now)}
            </span>
            <span className="font-sans text-[13.5px] text-muted">{cohort.price}</span>
            {showApply ? (
              cohort.startsAt && !open ? (
                <span className="font-sans text-[13.5px] text-muted">
                  {ENROLLMENT_CLOSED_NOTE}
                </span>
              ) : (
                <ConsultationLink className="w-fit border-b border-rule pb-0.5 font-sans text-[13.5px] text-accent transition-colors duration-150 hover:text-accent-hover">
                  {cohort.ctaLabel}
                </ConsultationLink>
              )
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
