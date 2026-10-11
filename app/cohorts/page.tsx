import type { Metadata } from 'next'
import Link from 'next/link'
import {
  EnrollmentLabel,
  WaitlistButton,
  WaitlistNote,
  WhenCohortOpen,
  WhenEnrollment,
} from '@/components/enrollment'
import IntroductionLink from '@/components/IntroductionLink'
import {
  COHORT_STARTED_NOTE,
  cohorts,
  enrollmentClock,
  isScheduledCohort,
  OPEN_COHORT_PRICE,
} from '@/lib/cohorts'
import { bookingHref, type CampaignParams } from '@/lib/campaign'

export const metadata: Metadata = {
  title: 'Four sessions to explore how we disagree | Cohort Learning Labs',
  description: `Four weekly 90-minute online sessions with Elie Schulman. Six to eight participants. ${OPEN_COHORT_PRICE} per person. See dates, expectations, and how to join.`,
  alternates: { canonical: '/cohorts' },
}

const practices = [
  [
    'Notice a reaction',
    'Catch the moment you begin to withdraw, defend your position, or speak for someone else.',
  ],
  [
    'Check an assumption',
    'Ask what someone meant before responding to the meaning you supplied.',
  ],
  [
    'Try another response',
    'Put a disagreement into words and hear how it lands with other people.',
  ],
]
const steps = [
  [
    'A conversation first',
    'Book thirty minutes with Elie. Discuss what brings you here, ask questions, and consider whether the group fits.',
  ],
  [
    'Agree on the commitment',
    'Elie confirms the group and dates with you, along with attendance and cancellation terms, before you pay.',
  ],
  [
    'Confirm your place',
    `After you agree to join, Elie sends payment instructions for the ${OPEN_COHORT_PRICE} fee and confirms your place and video joining details.`,
  ],
]

export default async function CohortsPage({
  searchParams,
}: {
  searchParams: Promise<CampaignParams>
}) {
  const href = bookingHref(await searchParams)
  const serverNow = enrollmentClock()
  return (
    <>
      <section className="border-b border-rule bg-ground py-14 lg:py-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">Four sessions · A beginning</p>
            <div>
              <h1 className="max-w-[22ch] font-serif text-5xl leading-none lg:text-7xl">
                What do you do when someone sees it differently?
              </h1>
              <p className="mt-8 max-w-[55ch] font-serif text-xl leading-relaxed text-ink-soft">
                You may explain harder, become quiet, or try to settle the difference before
                anyone feels it. Here, we slow those moments down and explore them together.
              </p>
              <p className="mt-7 font-sans text-sm leading-relaxed text-ink">
                Four weekly 90-minute sessions · six to eight participants · {OPEN_COHORT_PRICE}{' '}
                per person · Online with Elie Schulman
              </p>
              <WhenEnrollment serverNow={serverNow} phase="open">
                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <Link
                    href={href}
                    className="bg-accent px-7 py-4 font-sans text-sm text-accent-on"
                  >
                    Book a 30-minute conversation
                  </Link>
                  <IntroductionLink className="font-sans text-sm text-accent underline">
                    Try a free introduction first
                  </IntroductionLink>
                </div>
              </WhenEnrollment>
              <WhenEnrollment serverNow={serverNow} phase="closed">
                <p className="mt-9 max-w-[55ch] font-sans text-sm leading-relaxed">
                  These groups have started, and they are closed to new members.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-6">
                  <WaitlistButton className="bg-accent px-7 py-4 font-sans text-sm text-accent-on" />
                  <Link href={href} className="font-sans text-sm text-accent underline">
                    Discuss a private group
                  </Link>
                </div>
              </WhenEnrollment>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">What you can practice</p>
            <div>
              <div className="grid gap-8 md:grid-cols-3">
                {practices.map(([title, text]) => (
                  <article key={title} className="border-t-2 border-accent pt-5">
                    <h2 className="font-serif text-2xl">{title}</h2>
                    <p className="mt-4 font-serif text-lg leading-relaxed text-ink-soft">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-8 max-w-[65ch] font-sans text-sm leading-relaxed text-muted">
                The group returns to its own exchanges across four meetings. These are
                opportunities for practice, not guaranteed outcomes or a fixed syllabus. Four
                sessions give you a first experience of the work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">Who this may suit</p>
            <div>
              <h2 className="max-w-[35ch] font-serif text-3xl">
                You spend time helping a conversation happen. What happens in you?
              </h2>
              <p className="mt-6 max-w-[65ch] font-serif text-xl leading-relaxed text-ink-soft">
                Teachers, facilitators, and people who lead groups may recognize the impulse to
                supply an answer, fill a silence, or keep everyone comfortable. This cohort
                offers room to examine your own participation. You are also welcome if the
                question arises in your family, friendships, or work.
              </p>
              <p className="mt-5 max-w-[65ch] font-sans text-sm leading-relaxed text-muted">
                Come willing to notice your reactions and hear that someone else experienced an
                exchange differently. No prior group experience or religious knowledge is
                required. This is facilitated learning; it does not provide professional
                certification or psychotherapy.
              </p>
              <p className="mt-6">
                <Link href="/services" className="font-sans text-sm text-accent underline">
                  See how a session works
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="dates" className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">Dates and commitment</p>
            <div>
              <h2 className="font-serif text-3xl">Choose a time you can return to.</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {cohorts.filter(isScheduledCohort).map((cohort) => (
                  <article key={cohort.id} className="border border-rule bg-ground p-6">
                    <h3 className="font-serif text-2xl">{cohort.when}</h3>
                    <p className="mt-4 font-sans text-sm font-medium">
                      <EnrollmentLabel
                        startsAt={cohort.startsAt}
                        serverNow={serverNow}
                        cohortId={cohort.id}
                        openClassName="text-accent"
                        closedClassName="text-muted"
                      />
                    </p>
                    <p className="mt-4 font-serif text-lg leading-relaxed">
                      {cohort.dates?.join(' · ')} 2026
                    </p>
                    <p className="mt-4 font-sans text-sm leading-relaxed">
                      {cohort.scheduleStatus}
                    </p>
                    <p className="mt-4 font-sans text-sm">
                      {cohort.price} per person for all four sessions.
                    </p>
                    {cohort.id === 'thursday-eastern' && (
                      <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
                        In Israel: 15:30 on 15 and 22 October; 14:30 on 29 October; 15:30 on 5
                        November. The group stays at 08:30 US Eastern when clocks change.
                      </p>
                    )}
                    <WhenCohortOpen
                      startsAt={cohort.startsAt}
                      serverNow={serverNow}
                      open={
                        <Link
                          href={href}
                          className="mt-6 inline-block font-sans text-sm text-accent underline"
                        >
                          Book a conversation about this group
                        </Link>
                      }
                      closed={
                        <p className="mt-6 font-sans text-sm leading-relaxed text-muted">
                          {COHORT_STARTED_NOTE}
                        </p>
                      }
                    />
                  </article>
                ))}
              </div>
              <WaitlistNote
                serverNow={serverNow}
                className="mt-7 max-w-[65ch] font-sans text-sm leading-relaxed"
              />
              <p className="mt-7 max-w-[65ch] font-serif text-lg leading-relaxed">
                Plan to attend all four meetings from a private place. Let Elie know about any
                anticipated absence before joining. Sessions are not recorded. Members agree to
                keep one another’s contributions confidential.
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
                Already have a team or group? Private groups are arranged and quoted separately.{' '}
                <Link href={href} className="text-accent underline">
                  Discuss a private group.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">How to join</p>
            <div>
              <ol className="space-y-7">
                {steps.map(([title, text], i) => (
                  <li key={title} className="border-t border-rule pt-5">
                    <h2 className="font-serif text-2xl">
                      {i + 1}. {title}
                    </h2>
                    <p className="mt-3 max-w-[65ch] font-serif text-lg leading-relaxed text-ink-soft">
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
              <WhenEnrollment serverNow={serverNow} phase="open">
                <Link
                  href={href}
                  className="mt-9 inline-block bg-accent px-7 py-4 font-sans text-sm text-accent-on"
                >
                  Book a 30-minute conversation
                </Link>
              </WhenEnrollment>
              <WhenEnrollment serverNow={serverNow} phase="closed">
                <WaitlistButton className="mt-9 inline-block bg-accent px-7 py-4 font-sans text-sm text-accent-on" />
              </WhenEnrollment>
              <p className="mt-6 font-sans text-sm">
                <Link href="/faq" className="text-accent underline">
                  Questions about speaking, confidentiality, or the commitment?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
