import type { Metadata } from 'next'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import CohortTable from '@/components/CohortTable'
import { CALENDLY_URL } from '@/lib/booking'
import { campaignQuery, type CampaignParams } from '@/lib/campaign'
import { OPEN_COHORT_PRICE } from '@/lib/cohorts'

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Start a conversation | Cohort Learning Labs',
  description:
    'Pick an open time. Elie meets you for thirty minutes before anyone joins a group.',
}

const mailto = 'mailto:elie@cohortlearninglabs.org?subject=Cohort%20Learning%20Labs'

const steps = [
  {
    n: '01',
    title: 'You pick a time',
    body: 'Choose an available time in the booking calendar and complete the booking. Your confirmation includes the joining details.',
  },
  {
    n: '02',
    title: 'Thirty minutes by video',
    body: 'Talk about what brings you here, how the group works, and whether the four-session commitment fits. You do not need a prepared account of yourself.',
  },
  {
    n: '03',
    title: 'A cohort, or not yet',
    body: `If you both decide to proceed, Elie confirms the group, dates, attendance and cancellation terms, and sends the payment instructions. Pay the ${OPEN_COHORT_PRICE} fee after that agreement; joining details follow confirmation.`,
  },
]

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<CampaignParams>
}) {
  const tags = campaignQuery(await searchParams)
  const bookingUrl = new URL(CALENDLY_URL)
  new URLSearchParams(tags).forEach((value, key) => bookingUrl.searchParams.set(key, value))
  return (
    <>
      <section className="border-b border-rule bg-ground py-14 lg:pb-20 lg:pt-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">Start a conversation</p>
            <div>
              <h1 className="max-w-[20ch] font-serif text-[44px] leading-none tracking-[-0.015em] text-ink min-[480px]:text-[56px] lg:text-[80px]">
                Pick an open time. Elie meets you there.
              </h1>
              <div className="mt-11 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                <p className="max-w-[46ch] font-serif text-[19px] leading-[1.55] text-ink-soft lg:text-[23px]">
                  Everyone speaks with him for thirty minutes before joining a group. Choose an
                  available time below. Prefer to write first? A paragraph by email is still
                  plenty.
                </p>
                <p className="border-l border-rule pl-6 pt-1.5 font-sans text-[14px] leading-[1.75] text-muted">
                  Not everyone is placed. Composition matters more here than filling a seat.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-5">
                <a
                  href="#book"
                  className="bg-accent px-7 py-[15px] font-sans text-[14px] font-medium text-accent-on transition-colors duration-150 hover:bg-accent-hover"
                >
                  Book a 30-minute conversation
                </a>
                <a
                  href="tel:+15162062480"
                  className="border-b border-[#b9b1a2] pb-0.5 font-sans text-[14px] text-ink-muted transition-colors duration-150 hover:text-accent-hover"
                >
                  +1 (516) 206-2480
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="section-padding scroll-mt-8 border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">01 — Book a time</p>
            <div>
              <CalendlyEmbed url={bookingUrl.toString()} />
              <p className="mt-5 font-sans text-[12.5px] tracking-[0.04em] text-faint">
                Prefer email?{' '}
                <a
                  href={mailto}
                  className="border-b border-rule pb-0.5 text-ink-muted hover:text-accent-hover"
                >
                  elie@cohortlearninglabs.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">02 — What happens next</p>
            <div className="border border-rule bg-paper">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="grid items-baseline gap-x-5 gap-y-1 border-b border-rule-warm px-7 py-6 last:border-b-0 lg:grid-cols-[36px_minmax(120px,180px)_minmax(0,1fr)]"
                >
                  <span className="font-sans text-[12px] tracking-[0.14em] text-accent">
                    {step.n}
                  </span>
                  <span className="font-serif text-[22px] leading-[1.45] text-ink">
                    {step.title}
                  </span>
                  <span className="font-serif text-[19px] leading-[1.62] text-ink-soft">
                    {step.body}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">03 — Cohorts forming</p>
            <div>
              <CohortTable showApply={false} />
              <p className="mt-5 font-sans text-[12.5px] tracking-[0.04em] text-faint">
                Groups meet by video. Elie is based in Beit Shemesh, Israel; members join from
                wherever they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-14 text-accent-on lg:py-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label text-accent-pale">Begin</p>
            <div>
              <h2 className="max-w-[22ch] font-serif text-[36px] leading-[1.06] tracking-[-0.015em] lg:text-[56px]">
                Say the thing you would not usually put in a first conversation.
              </h2>
              <p className="mt-7 max-w-[52ch] font-serif text-[19px] leading-[1.62] text-accent-prose lg:text-[21px]">
                Begin with what you are curious about, including any uncertainty about joining.
              </p>
              <a
                href="#book"
                className="mt-10 inline-block bg-accent-on px-[30px] py-4 font-sans text-[14px] font-medium text-accent transition-colors duration-150 hover:bg-[#efe6dd]"
              >
                Book a 30-minute conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
