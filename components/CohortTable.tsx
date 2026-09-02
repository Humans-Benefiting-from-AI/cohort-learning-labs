import Link from 'next/link'
import { cohorts } from '@/lib/cohorts'

export default function CohortTable({ showApply = true }: { showApply?: boolean }) {
  return (
    <div className="border border-rule bg-paper">
      {cohorts.map((cohort) => (
        <div
          key={cohort.id}
          className={
            showApply
              ? 'grid items-baseline gap-x-[14px] gap-y-2 border-b border-rule-warm px-5 py-5 last:border-b-0 lg:grid-cols-[minmax(130px,1fr)_148px_66px_84px_64px]'
              : 'grid items-baseline gap-x-[14px] gap-y-2 border-b border-rule-warm px-5 py-5 last:border-b-0 lg:grid-cols-[minmax(130px,1fr)_148px_66px_84px]'
          }
        >
          <span className="font-serif text-[19px] leading-[1.4] text-ink">{cohort.when}</span>
          <span className="font-sans text-[13.5px] text-muted">{cohort.duration}</span>
          <span
            className={`font-sans text-[13.5px] ${cohort.seatsScarce ? 'text-accent' : 'text-muted'}`}
          >
            {cohort.seats}
          </span>
          <span className="font-sans text-[13.5px] text-muted">{cohort.price}</span>
          {showApply ? (
            <Link
              href="/contact"
              className="w-fit border-b border-rule pb-0.5 font-sans text-[13.5px] text-accent transition-colors duration-150 hover:text-accent-hover"
            >
              {cohort.ctaLabel}
            </Link>
          ) : null}
        </div>
      ))}
    </div>
  )
}
