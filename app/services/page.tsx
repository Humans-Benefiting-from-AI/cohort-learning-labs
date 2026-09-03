import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ConsultationLink from '@/components/ConsultationLink'

export const metadata: Metadata = {
  title: 'A session | Cohort Learning Labs',
  description:
    'Ninety minutes, once a week, with the same six people. How a Cohort Learning Labs T-group actually feels.',
}

const stimuli = [
  { label: 'Marriage', example: 'A text on how couples argue.' },
  { label: 'Parent to child', example: 'Authority, and when to spend it.' },
  { label: 'Child to parent', example: 'Obligation you did not choose.' },
  { label: 'Employee to employer', example: 'Saying the unwelcome thing upward.' },
]

const arc = [
  {
    time: '00:00',
    title: 'Check-in and agreements',
    body: 'Short. Who is here, what is carried in from the week, what holds.',
  },
  {
    time: '00:10',
    title: 'Whatever is live',
    body: 'Someone reacts to the stimulus, or to another member, and the room follows it rather than a plan.',
  },
  {
    time: '00:35',
    title: 'Trying something',
    body: 'You say the thing the way you would not say it at work, and watch where it lands.',
  },
  {
    time: '01:05',
    title: 'What that was like',
    body: 'Five other people describe the effect, in specifics, with your consent to hear it.',
  },
  {
    time: '01:20',
    title: 'How we learned it',
    body: 'The group looks at its own hour, and each person names one thing to practise.',
  },
]

const hourNotes = [
  {
    time: '00:12',
    text: 'Two members read the same paragraph in opposite ways. One found it manipulative. One found it moving.',
    accent: false,
  },
  {
    time: '00:19',
    text: 'One of them apologises for disagreeing, before anyone has objected.',
    accent: false,
  },
  {
    time: '00:28',
    text: 'Nine seconds in which nobody speaks. Nobody fills it.',
    accent: true,
  },
  {
    time: '00:37',
    text: 'The member who has not spoken yet says the thing the room was circling.',
    accent: false,
  },
  {
    time: '00:44',
    text: 'Someone tells her what it was like to hear it from her, of all people.',
    accent: false,
  },
  {
    time: '01:14',
    text: 'The group stops and looks at what it just did.',
    accent: false,
  },
]

const norms = [
  'Speak for yourself, not for the room.',
  'Say what you felt, not whether it was justified.',
  'Check the story you are telling yourself about someone before you act on it.',
  'Ask before you give advice.',
  'Describe where something landed, rather than what it proves about the person.',
  'What is said here stays here. That one is not negotiable.',
]

const questions = [
  'What do I do with a difference of opinion when it first appears?',
  'Do I soften what I think, and who taught me to?',
  'Am I heard the way I intend to be heard?',
  'Which people make me quieter, and what is that about?',
  'Can I understand a position without moving toward agreeing with it?',
  'What am I like to be in a group with?',
]

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-rule bg-ground py-14 lg:pb-20 lg:pt-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">A session</p>
            <div>
              <h1 className="max-w-[20ch] font-serif text-[44px] leading-[0.96] tracking-[-0.015em] text-ink min-[480px]:text-[56px] lg:text-[88px]">
                Ninety minutes, once a week, with the same six people.
              </h1>
              <div className="mt-11 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                <p className="max-w-[46ch] font-serif text-[19px] leading-[1.55] text-ink-soft lg:text-[23px]">
                  Twelve weeks, by video. No slides, no reading assigned by us, no exercises.
                  The group agrees on one relationship to look at, and then studies its own
                  reactions to it, as they happen.
                </p>
                <p className="border-l border-rule pl-6 pt-1.5 font-sans text-[14px] leading-[1.75] text-muted">
                  The method is a T-group — a training group. It has been practised for decades
                  in psychoanalytic and organisational settings. What follows is what it
                  actually feels like.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">01 — Session zero</p>
            <div>
              <p className="max-w-[50ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]">
                Before anything else, the six of you agree on what you will react to.
              </p>
              <div className="mt-8 flex max-w-[66ch] flex-col gap-[22px] font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                <p>
                  It is always a relationship. A marriage. A parent and a child. A child and a
                  parent. An employee and an employer. It can arrive as a text you all read, a
                  topic you all care about, or a skill you all want to get better at, but the
                  subject underneath is always two people and what passes between them.
                </p>
                <p>
                  Elie does not choose it and does not break the tie. Reaching that agreement is
                  itself the first hour of material — who proposes, who defers, who waits to see
                  which way the room is going.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 md:grid-cols-4">
                {stimuli.map((item) => (
                  <div key={item.label} className="bg-ground p-[22px]">
                    <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-accent">
                      {item.label}
                    </p>
                    <p className="mt-2.5 font-serif text-[18px] leading-[1.45] text-ink-soft">
                      {item.example}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 font-sans text-[12.5px] tracking-[0.04em] text-faint">
                Illustrative. Each cohort chooses its own.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">02 — The ninety minutes</p>
            <div>
              <p className="max-w-[50ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]">
                It has a shape, but not an agenda.
              </p>
              <div className="mt-10 border border-rule bg-paper">
                {arc.map((row) => (
                  <div
                    key={row.time}
                    className="grid items-baseline gap-x-5 gap-y-1 border-b border-rule-warm px-7 py-[22px] last:border-b-0 lg:grid-cols-[74px_minmax(120px,200px)_minmax(0,1fr)]"
                  >
                    <span className="font-sans text-[12px] tracking-[0.08em] text-faint">
                      {row.time}
                    </span>
                    <span className="font-serif text-[20px] leading-[1.45] text-ink">
                      {row.title}
                    </span>
                    <span className="font-sans text-[13.5px] leading-[1.65] text-muted">
                      {row.body}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-[58ch] font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                The cycle inside all of that is short and repeats many times an hour: something
                happens, someone names it, the reading gets tested, somebody tries a different
                move. Insight arrives as a by-product, not as a conclusion at the end.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule-dark bg-ink py-14 text-paper lg:py-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">03 — One hour, in the room</p>
            <div>
              <h2 className="max-w-[26ch] font-serif text-[36px] leading-[1.08] tracking-[-0.01em] text-paper lg:text-[52px]">
                A note from the sixth week of one cohort.
              </h2>
              <div className="mt-11 flex max-w-[62ch] flex-col gap-[26px]">
                {hourNotes.map((note) => (
                  <div
                    key={note.time}
                    className="grid grid-cols-[72px_1fr] items-baseline gap-x-6"
                  >
                    <span className="font-sans text-[12px] tracking-[0.08em] text-faint">
                      {note.time}
                    </span>
                    <span
                      className={`font-serif text-[22px] leading-[1.5] ${note.accent ? 'text-accent-light' : 'text-paper'}`}
                    >
                      {note.text}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-11 max-w-[58ch] font-serif text-[19px] leading-[1.62] text-onink lg:text-[21px]">
                The text was the occasion. By minute twenty it had stopped being the subject,
                and the six people in the room were the subject. That is not a digression from
                the work. It is the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">04 — What is asked of you</p>
            <div>
              <p className="max-w-[52ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]">
                Put the thoughts and feelings you are having at the time into words. That is the
                whole instruction.
              </p>
              <ul className="mt-10">
                {norms.map((text, index) => (
                  <li
                    key={text}
                    className="grid grid-cols-[64px_1fr] items-baseline gap-2 border-t border-rule py-[22px]"
                  >
                    <span className="font-sans text-[12px] tracking-[0.14em] text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-[19px] leading-[1.5] text-ink-soft lg:text-[21px]">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-9 max-w-[56ch] font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                You are not required to arrive with a clean sentence. Half a thought, said
                early, is worth more to the group than a finished one nobody hears. Nobody is
                called on, and going quiet is itself information rather than a failure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">05 — What keeps coming up</p>
            <div>
              <p className="max-w-[52ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]">
                Different cohorts, different stimuli, and the same questions underneath.
              </p>
              <ul className="mt-10">
                {questions.map((text, index) => (
                  <li
                    key={text}
                    className="grid grid-cols-[64px_1fr] items-baseline gap-2 border-t border-rule py-[22px]"
                  >
                    <span className="font-sans text-[12px] tracking-[0.14em] text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-[24px] italic leading-[1.35] text-ink lg:text-[29px]">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">06 — The facilitator&apos;s part</p>
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
                  Elie works on the process. The group holds the subject.
                </h2>
                <div className="mt-7 flex max-w-[56ch] flex-col gap-[22px] font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                  <p>
                    He notices where the room has drifted from its own agreements, brings people
                    back into direct exchange with each other, and protects the container. He
                    does not lecture, does not rescue, does not conduct therapy, and does not
                    supply the answer.
                  </p>
                  <p>
                    He also will not hurry you. He sat in a group for two years without
                    speaking, and knows precisely what an impatient facilitator costs a quiet
                    person.
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

      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">07 — Two things it is not</p>
            <div className="grid gap-12 md:grid-cols-2 md:gap-14">
              <div className="border-t-2 border-ink pt-6">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-accent">
                  Not therapy
                </p>
                <p className="mt-4 font-serif text-[19px] leading-[1.6] text-ink-soft lg:text-[20px]">
                  Members often find it therapeutic. It is not treatment, and Cohort Learning
                  Labs does not provide psychotherapy, crisis services or mental-health care.
                </p>
              </div>
              <div className="border-t-2 border-ink pt-6">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-accent">
                  Not a debate
                </p>
                <p className="mt-4 font-serif text-[19px] leading-[1.6] text-ink-soft lg:text-[20px]">
                  Nobody is scored, and there is nothing to win. A member who is right and
                  unreachable has learned less than one who was wrong out loud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-14 text-accent-on lg:py-[104px]">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label text-accent-pale">08 — Begin</p>
            <div>
              <h2 className="max-w-[22ch] font-serif text-[36px] leading-[1.05] tracking-[-0.015em] lg:text-[60px]">
                The next cohorts start in October 2026.
              </h2>
              <p className="mt-7 max-w-[52ch] font-serif text-[19px] leading-[1.62] text-accent-prose lg:text-[21px]">
                Thirty minutes with Elie first, always: what you are curious about, what keeps
                recurring, and which group is the right place to look at it.
              </p>
              <ConsultationLink className="mt-10 inline-block bg-accent-on px-[30px] py-4 font-sans text-[14px] font-medium text-accent transition-colors duration-150 hover:bg-[#efe6dd]">
                Schedule a 30-minute consultation
              </ConsultationLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
