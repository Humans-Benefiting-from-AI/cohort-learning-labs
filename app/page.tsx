import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CohortTable from '@/components/CohortTable'
import ConsultationLink from '@/components/ConsultationLink'
import IntroductionLink from '@/components/IntroductionLink'
import { OPEN_COHORT_PRICE } from '@/lib/cohorts'
import { groupNorms, homeSessionMoments } from '@/lib/session'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const stimuli = ['Partners', 'Parents and children', 'Friends', 'Colleagues']

export default function Home() {
  return (
    <>
      <section className="border-b border-rule bg-ground py-14 lg:pb-20 lg:pt-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">Start here</p>
            <div>
              <h1 className="max-w-[20ch] font-serif text-[44px] leading-[0.96] tracking-[-0.015em] text-ink min-[480px]:text-[56px] lg:text-[88px]">
                What happens between us when we disagree?
              </h1>

              <div className="mt-11 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                <p className="max-w-[46ch] font-serif text-[19px] leading-[1.55] text-ink-soft lg:text-[23px]">
                  When a conversation becomes difficult, do you go quiet, explain harder, or try
                  to smooth things over? In this small group, we slow those moments down and
                  explore what else becomes possible. Four weekly sessions, facilitated by Elie
                  Schulman.
                </p>
                <p className="border-l border-rule pl-6 pt-1.5 font-sans text-[14px] leading-[1.75] text-muted">
                  Practice noticing when you withdraw, checking an assumption about someone, and
                  putting a disagreement into words. These are possibilities to explore
                  together; each person begins somewhere different.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-5">
                <Link
                  href="/cohorts"
                  className="bg-accent px-7 py-[15px] font-sans text-[14px] font-medium text-accent-on transition-colors duration-150 hover:bg-accent-hover"
                >
                  Explore the four-session cohort
                </Link>
                <Link
                  href="/services"
                  className="border-b border-[#b9b1a2] pb-0.5 font-sans text-[14px] text-ink-muted transition-colors duration-150 hover:text-accent-hover"
                >
                  Read what a session looks like
                </Link>
                <a
                  href="#cohorts"
                  className="border-b border-rule pb-0.5 font-sans text-[14px] text-ink-muted hover:text-accent-hover"
                >
                  View times and fees
                </a>
              </div>

              <p className="mt-9 font-sans text-[12.5px] tracking-[0.06em] text-faint">
                Open cohorts: four weekly 90-minute sessions · {OPEN_COHORT_PRICE} per person ·
                Groups meet by video
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">01 — What the group agrees on</p>
            <div>
              <p className="max-w-[50ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]">
                The first thing you do together is choose a relationship to look at.
              </p>
              <div className="mt-8 flex max-w-[66ch] flex-col gap-[22px] font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                <p>
                  Marriage. A parent and a child. A child and a parent. An employee and an
                  employer. It can arrive as a text, a topic, or a skill you want to get better
                  at, but it is always a relationship, and the group agrees on it before
                  anything else happens.
                </p>
                <p>
                  Then you react to it, and to each other, out loud, as it happens. Those
                  reactions become part of the learning. The text gives us a place to begin;
                  what happens between us gives us something to examine.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-px border border-rule bg-rule md:grid-cols-4">
                {stimuli.map((label) => (
                  <div key={label} className="bg-ground p-5">
                    <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-accent">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule-dark bg-ink py-14 text-paper lg:py-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">02 — Inside a session</p>
            <div>
              <h2 className="max-w-[26ch] font-serif text-[36px] leading-[1.08] tracking-[-0.01em] text-paper lg:text-[52px]">
                A paragraph. Different reactions. Something to notice.
              </h2>
              <p className="mt-5 max-w-[58ch] font-sans text-[14px] leading-relaxed text-onink">
                An illustrative session, showing the kinds of moments a group might explore.
              </p>
              <div className="mt-8 border border-rule-dark">
                {homeSessionMoments.map((note) => (
                  <div
                    key={note.time}
                    className="grid items-baseline gap-x-7 gap-y-1 border-b border-[#262825] px-7 py-5 last:border-b-0 lg:grid-cols-[88px_1fr_1fr]"
                  >
                    <span className="font-sans text-[12px] tracking-[0.08em] text-faint">
                      {note.time}
                    </span>
                    <span
                      className={`font-serif text-[20px] leading-[1.5] ${note.accent ? 'text-accent-light' : 'text-paper'}`}
                    >
                      {note.event}
                    </span>
                    <span className="pl-4 font-sans text-[13.5px] leading-[1.65] text-onink lg:pl-0">
                      {note.observation}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-[58ch] font-serif text-[19px] leading-[1.62] text-onink lg:text-[21px]">
                Nobody is asked what the group should decide. The question being held is how
                each person is handling a difference right now, and what that is doing to
                everyone else in the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">03 — What is asked of you</p>
            <div>
              <p className="max-w-[50ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]">
                Say what you are thinking and feeling at the time. That is the whole
                instruction.
              </p>
              <ul className="mt-10 grid md:grid-cols-2 md:gap-x-14">
                {groupNorms.map((text, index) => (
                  <li
                    key={text}
                    className="grid grid-cols-[44px_1fr] items-baseline gap-2 border-t border-rule py-5"
                  >
                    <span className="font-sans text-[12px] tracking-[0.12em] text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-[19px] leading-[1.5] text-ink-soft lg:text-[21px]">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-9 max-w-[56ch] font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                You are not required to have a clean sentence ready. Half a thought, said early,
                is more useful to the group than a finished one nobody hears.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">04 — Facilitation</p>
            <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
              <Image
                src="/images/elie-schulman.jpg"
                alt="Elie Schulman"
                width={712}
                height={1083}
                sizes="(min-width: 1024px) 280px, 100vw"
                className="h-auto w-full [filter:grayscale(0.15)]"
              />
              <div>
                <h2 className="max-w-[26ch] font-serif text-[36px] leading-[1.1] tracking-[-0.01em] text-ink lg:text-[44px]">
                  Enough room to notice. A chance to try again.
                </h2>
                <div className="mt-7 flex max-w-[56ch] flex-col gap-[22px] font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                  <p>
                    Elie helps the group return to an exchange while it is still possible to
                    examine it. What did you hear? What did you assume? What did you want to
                    say, and what happened instead? A short series gives you several chances to
                    return to those questions with the same people.
                  </p>
                  <p>
                    His own long experience of being quiet in groups shapes his patience. He
                    will not force disclosure. He will help members put reactions into words,
                    hear how those words land, and consider another way of responding. Your
                    positions, choices and relationships stay yours.
                  </p>
                </div>
                <p className="mt-7 max-w-[44ch] border-l border-accent pl-6 font-serif text-[24px] italic leading-[1.4] text-ink">
                  A bashful person cannot learn, nor can an impatient person teach.
                </p>
                <p className="mt-2.5 pl-[25px] font-sans text-[11px] uppercase tracking-[0.18em] text-faint">
                  Pirkei Avot 2:6
                </p>
                <Link
                  href="/about"
                  className="mt-7 inline-block border-b border-rule pb-0.5 font-sans text-[14px] text-accent transition-colors duration-150 hover:text-accent-hover"
                >
                  More about Elie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cohorts"
        className="section-padding scroll-mt-8 border-b border-rule bg-ground"
      >
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">05 — Ways to join</p>
            <div>
              <div className="grid gap-12 md:grid-cols-2 md:gap-14">
                <div className="border-t-2 border-ink pt-6">
                  <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-accent">
                    Open cohort
                  </p>
                  <h2 className="mt-4 font-serif text-[28px] leading-[1.22] text-ink lg:text-[32px]">
                    Six to eight people you have never met.
                  </h2>
                  <p className="mt-4 font-serif text-[19px] leading-[1.6] text-ink-soft lg:text-[20px]">
                    No shared employer, no shared history, no stake in each other&apos;s next
                    promotion. Nothing you try in the room has to be managed for the rest of the
                    week, which is what makes trying anything possible.
                  </p>
                </div>
                <div className="border-t-2 border-ink pt-6">
                  <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-accent">
                    Private group
                  </p>
                  <h2 className="mt-4 font-serif text-[28px] leading-[1.22] text-ink lg:text-[32px]">
                    Or the group you are already in.
                  </h2>
                  <p className="mt-4 font-serif text-[19px] leading-[1.6] text-ink-soft lg:text-[20px]">
                    A team, a leadership group, a board, a faculty. The differences are live and
                    the consequences are real, so the work is making what already happens
                    between you examinable instead of only survivable.
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <CohortTable />
                <p className="mt-6 font-sans text-sm">
                  <Link href="/cohorts" className="text-accent underline">
                    See all four dates and how to join
                  </Link>
                </p>
                <IntroductionLink
                  className="text-accent underline"
                  paragraphClassName="mt-4 font-sans text-sm"
                >
                  Try a free 45-minute introduction on 8 October
                </IntroductionLink>
              </div>
              <p className="mt-5 font-sans text-[12.5px] tracking-[0.04em] text-faint">
                Everyone speaks with Elie for thirty minutes before joining a group.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-14 text-accent-on lg:py-[104px]">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label text-accent-pale">06 — Begin</p>
            <div>
              <h2 className="max-w-[22ch] font-serif text-[36px] leading-[1.05] tracking-[-0.015em] lg:text-[60px]">
                If it takes you a while to speak, that is allowed here.
              </h2>
              <p className="mt-7 max-w-[52ch] font-serif text-[19px] leading-[1.62] text-accent-prose lg:text-[21px]">
                Thirty minutes with Elie: what you are curious about, what keeps recurring, and
                whether an open cohort or a private group is the right place to look at it.
              </p>
              <ConsultationLink className="mt-10 inline-block bg-accent-on px-[30px] py-4 font-sans text-[14px] font-medium text-accent transition-colors duration-150 hover:bg-[#efe6dd]">
                Book a 30-minute conversation
              </ConsultationLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
