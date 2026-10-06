import type { Metadata } from 'next'
import Link from 'next/link'
import { connection } from 'next/server'
import ConsultationLink from '@/components/ConsultationLink'
import { OPEN_COHORT_PRICE } from '@/lib/cohorts'
import { introduction, isIntroductionOpen } from '@/lib/introduction'

export async function generateMetadata(): Promise<Metadata> {
  await connection()

  if (!isIntroductionOpen()) {
    return {
      title: 'Introduction | Cohort Learning Labs',
      description:
        'The free introduction on 8 October 2026 has ended. October cohorts are still forming.',
      alternates: { canonical: '/introduction' },
      robots: { index: false, follow: true },
    }
  }

  return {
    title: 'Free introduction · 8 October | Cohort Learning Labs',
    description:
      'A free 45-minute online introduction with Elie Schulman. Experience a short reading, different reactions, and group inquiry. RSVP by email.',
    alternates: { canonical: '/introduction' },
  }
}

export default async function IntroductionPage() {
  await connection()
  if (!isIntroductionOpen()) return <IntroductionClosed />
  return <IntroductionOpen />
}

function IntroductionOpen() {
  return (
    <section className="section-padding bg-ground">
      <div className="container-custom">
        <div className="rail">
          <p className="rail-label">A free introduction</p>
          <div>
            <h1 className="max-w-[24ch] font-serif text-5xl leading-tight lg:text-6xl">
              {introduction.title}
            </h1>
            <p className="mt-8 max-w-[55ch] font-serif text-xl leading-relaxed text-ink-soft">
              We begin with a short passage. You hear it one way; someone else hears something
              different. What happens next? In forty-five minutes, you can experience a little
              of how I work with a group.
            </p>
            <p className="mt-6 font-serif text-xl">Elie Schulman</p>
            <div className="mt-8 border-y border-rule py-6 font-sans text-sm leading-loose">
              <p>{introduction.dateLabel}</p>
              <p>{introduction.timeLabel}</p>
              <p>Online · No fee · No preparation required</p>
            </div>
            <h2 className="mt-9 font-serif text-3xl">What we will do</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-6 font-serif text-lg leading-relaxed">
              <li>Begin with agreements about confidentiality and participation.</li>
              <li>Read a short passage and hear different reactions.</li>
              <li>Pause to examine something that happens in our exchange.</li>
              <li>
                Reflect on the experience and ask questions about the four-session cohort.
              </li>
            </ol>
            <p className="mt-7 max-w-[60ch] font-serif text-lg leading-relaxed">
              You can participate without sharing private details. The session will not be
              recorded. Attending does not commit you to the paid cohort.
            </p>
            <a
              href={introduction.rsvpHref}
              className="mt-8 inline-block bg-accent px-7 py-4 font-sans text-sm text-accent-on"
            >
              RSVP by email
            </a>
            <p className="mt-4 max-w-[60ch] font-sans text-sm leading-relaxed text-muted">
              This opens an email for you to send. Elie will reply with confirmation and the
              video link. If your email app does not open, write to{' '}
              <a href="mailto:elie@cohortlearninglabs.org" className="text-accent underline">
                elie@cohortlearninglabs.org
              </a>{' '}
              with “October 8 introduction” in the subject.
            </p>
            <p className="mt-8">
              <Link
                href="/cohorts?utm_source=introduction&utm_medium=website&utm_campaign=october_2026"
                className="font-sans text-sm text-accent underline"
              >
                Explore the four-session cohort · {OPEN_COHORT_PRICE}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntroductionClosed() {
  return (
    <section className="border-b border-rule bg-ground py-14 lg:pb-20 lg:pt-24">
      <div className="container-custom">
        <div className="rail">
          <p className="rail-label">A free introduction</p>
          <div>
            <h1 className="max-w-[16ch] font-serif text-[44px] leading-[0.96] tracking-[-0.015em] text-ink min-[480px]:text-[56px] lg:text-[72px]">
              This introduction has passed.
            </h1>
            <p className="mt-8 max-w-[46ch] font-serif text-[19px] leading-[1.55] text-ink-soft lg:text-[23px]">
              The free session on Thursday, 8 October 2026 has ended. October cohorts are still
              forming. A thirty-minute conversation with Elie is how you join.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link
                href="/cohorts"
                className="bg-accent px-7 py-[15px] font-sans text-[14px] font-medium text-accent-on transition-colors duration-150 hover:bg-accent-hover"
              >
                See the October cohorts
              </Link>
              <ConsultationLink className="border-b border-[#b9b1a2] pb-0.5 font-sans text-[14px] text-ink-muted transition-colors duration-150 hover:text-accent-hover">
                Schedule a consultation
              </ConsultationLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
