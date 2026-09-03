import type { Metadata } from 'next'
import CohortTable from '@/components/CohortTable'

export const metadata: Metadata = {
  title: 'Start a conversation | Cohort Learning Labs',
  description:
    'Write a few lines. Elie answers them himself. Everyone speaks with him for thirty minutes before joining a group.',
}

const mailto = 'mailto:elie@cohortlearninglabs.org?subject=Cohort%20Learning%20Labs'

const steps = [
  {
    n: '01',
    title: 'You write',
    body: 'A paragraph is enough. He usually replies within two days.',
  },
  {
    n: '02',
    title: 'Thirty minutes by video',
    body: 'Half of it is him working out whether this is the right room for you at all. It is a conversation, not a screening call, and there is nothing to prepare.',
  },
  {
    n: '03',
    title: 'A cohort, or not yet',
    body: 'If the composition is right you are placed in a group and it starts on the listed date. If it is not, he will say so and tell you what he would suggest instead.',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-rule bg-ground py-14 lg:pb-20 lg:pt-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">Start a conversation</p>
            <div>
              <h1 className="max-w-[20ch] font-serif text-[44px] leading-none tracking-[-0.015em] text-ink min-[480px]:text-[56px] lg:text-[80px]">
                Write a few lines. Elie answers them himself.
              </h1>
              <div className="mt-11 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                <p className="max-w-[46ch] font-serif text-[19px] leading-[1.55] text-ink-soft lg:text-[23px]">
                  There is no form to fill in. Say what you are curious about, or what keeps
                  recurring, and whether you are asking for yourself or for a group you are
                  already in. A paragraph is plenty.
                </p>
                <p className="border-l border-rule pl-6 pt-1.5 font-sans text-[14px] leading-[1.75] text-muted">
                  Everyone speaks with Elie for thirty minutes before joining a group. Not
                  everyone is placed.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-5">
                <a
                  href={mailto}
                  className="bg-accent px-7 py-[15px] font-sans text-[14px] font-medium text-accent-on transition-colors duration-150 hover:bg-accent-hover"
                >
                  elie@cohortlearninglabs.org
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

      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">01 — What happens next</p>
            <div className="border border-rule bg-ground">
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

      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">02 — Cohorts forming</p>
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
                Say the thing you would not usually put in a first email.
              </h2>
              <p className="mt-7 max-w-[52ch] font-serif text-[19px] leading-[1.62] text-accent-prose lg:text-[21px]">
                It is the same instruction as the group, and it saves both of you a month.
              </p>
              <a
                href={mailto}
                className="mt-10 inline-block bg-accent-on px-[30px] py-4 font-sans text-[14px] font-medium text-accent transition-colors duration-150 hover:bg-[#efe6dd]"
              >
                Write to Elie
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
