import Image from 'next/image'
import Link from 'next/link'

const questions = [
  { n: '01', text: 'What do I do with a difference of opinion when it first appears?' },
  { n: '02', text: 'Do I soften what I think, and who taught me to?' },
  { n: '03', text: 'Am I heard the way I intend to be heard?' },
  { n: '04', text: 'What happens in me when someone disagrees and does not back down?' },
  { n: '05', text: 'Which people make me quieter, and what is that about?' },
  { n: '06', text: 'Can I understand a position without moving toward agreeing with it?' },
  { n: '07', text: 'What do I do when the group starts forming a side?' },
  { n: '08', text: 'What am I like to be in a group with?' },
]

const lab = [
  {
    title: 'Observation',
    body: 'You watch it happen while it is happening, instead of reconstructing it afterward from memory.',
  },
  {
    title: 'Experiment',
    body: 'You try a way of speaking you would not risk at work, and find out what it actually does to people.',
  },
  {
    title: 'Evidence',
    body: 'Five other people notice things about you that you cannot generate on your own, in any quantity.',
  },
  {
    title: 'Practice',
    body: 'The same faces, week after week, so a new behavior has somewhere to become ordinary.',
  },
  {
    title: 'Container',
    body: 'Consequences are suspended. Nothing said here has to be managed for the rest of the week.',
  },
]

const sessionNotes = [
  {
    time: '00:07',
    event: 'Someone raises a decision they are stuck on.',
    observation: 'Two people answer immediately. Three do not.',
  },
  {
    time: '00:19',
    event: 'A second member disagrees, then apologizes for disagreeing.',
    observation: 'The apology arrives before anyone objected.',
  },
  {
    time: '00:31',
    event: 'A third agrees with the first — for an entirely different reason.',
    observation: 'Now it looks like a majority. It is not one.',
  },
  {
    time: '00:48',
    event: 'The quietest member says the thing everyone was circling.',
    observation: 'The room reorganizes around it.',
  },
  {
    time: '01:14',
    event: 'The group notices what it just did.',
    observation: 'This is the part that does not happen alone.',
  },
]

const practices = [
  { n: '01', text: 'Say what you actually think, without pretending to speak for everyone.' },
  { n: '02', text: 'Name the precise point of difference instead of opposing an entire person.' },
  { n: '03', text: 'Represent someone else’s view accurately before you answer it.' },
  { n: '04', text: 'Notice your own reaction and stay in the room anyway.' },
  { n: '05', text: 'Tell the difference between understanding someone and agreeing with them.' },
  { n: '06', text: 'Reach a decision without erasing what is still unresolved.' },
]

export default function Home() {
  return (
    <>
      {/* Hero — Start here */}
      <section className="border-b border-rule bg-ground py-14 lg:pb-20 lg:pt-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">Start here</p>
            <div>
              <h1 className="max-w-[15ch] font-serif text-[44px] leading-[0.96] tracking-[-0.015em] text-ink min-[480px]:text-[56px] lg:text-[104px]">
                What am I <em className="italic text-accent">actually</em> like to think with?
              </h1>

              <div className="mt-11 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                <p className="max-w-[44ch] font-serif text-[19px] leading-[1.55] text-ink-soft lg:text-[23px]">
                  You want to learn about yourself and others. We organize virtual meetings of
                  six to eight members, where the goal is an environment that encourages
                  learning about ourselves and others, experimentation with new behaviors, and
                  interpersonal freedom.
                </p>
                <p className="border-l border-rule pl-6 pt-1.5 font-sans text-[14px] leading-[1.75] text-muted">
                  No curriculum to get through. No agreement to arrive at. A recurring group, a
                  facilitator who keeps the inquiry open, and whatever the six of you turn out
                  to be like together.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="bg-accent px-7 py-[15px] font-sans text-[14px] font-medium text-accent-on transition-colors duration-150 hover:bg-accent-hover"
                >
                  Schedule a 30-minute consultation
                </Link>
                <Link
                  href="/services"
                  className="border-b border-[#b9b1a2] pb-0.5 font-sans text-[14px] text-ink-muted transition-colors duration-150 hover:text-accent-hover"
                >
                  Read what a session looks like
                </Link>
              </div>

              <p className="mt-9 font-sans text-[12.5px] tracking-[0.06em] text-faint">
                Facilitated by Elie Schulman · Groups meet by video · Open cohorts and private
                groups
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — The individual */}
      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">01 — The individual</p>
            <div>
              <p className="max-w-[52ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]">
                You are the one thing in the room you cannot see from the outside.
              </p>
              <div className="mt-8 flex max-w-[66ch] flex-col gap-[22px] font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                <p>
                  You already have positions, reactions, a rhythm of speaking, and a particular
                  way of going quiet. You have been doing all of it for years. Almost none of it
                  is visible to you, because you are the one doing it.
                </p>
                <p>
                  Reading about it changes nothing. One person’s feedback is easy to file away.
                  What actually moves is watching it happen, live, among people curious enough to
                  say what they noticed and unattached enough to be honest about it.
                </p>
                <p>
                  So the work starts with you and your own difference of opinion. The group is
                  how you get to see it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Open questions */}
      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">02 — Open questions</p>
            <div>
              <p className="max-w-[52ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]">
                These are the questions a group keeps returning to. None of them have a settled
                answer.
              </p>
              <ul className="mt-10">
                {questions.map((question) => (
                  <li
                    key={question.n}
                    className="grid grid-cols-[44px_1fr] items-baseline gap-2 border-t border-rule py-[22px] lg:grid-cols-[64px_1fr]"
                  >
                    <span className="font-sans text-[12px] tracking-[0.14em] text-accent">
                      {question.n}
                    </span>
                    <span className="font-serif text-[24px] italic leading-[1.35] text-ink lg:text-[29px]">
                      {question.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — The laboratory */}
      <section className="border-b border-rule-dark bg-ink py-14 text-paper lg:py-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">03 — The laboratory</p>
            <div>
              <h2 className="max-w-[26ch] font-serif text-[36px] leading-[1.08] tracking-[-0.01em] text-paper lg:text-[56px]">
                A group of six is the smallest place where all of it shows.
              </h2>
              <p className="mt-7 max-w-[58ch] font-serif text-[19px] leading-[1.62] text-onink lg:text-[21px]">
                Between two people, a disagreement looks like a contest. Add a third and the
                structure appears: someone agrees for a different reason, someone waits, a
                majority forms, and the person left in the minority decides whether it is still
                worth saying. Nothing has to be invented. The group is already producing the
                material.
              </p>
              <ul className="mt-10 lg:mt-[52px]">
                {lab.map((item) => (
                  <li
                    key={item.title}
                    className="grid items-baseline gap-2 border-t border-rule-dark py-6 lg:grid-cols-[190px_1fr] lg:gap-8"
                  >
                    <span className="font-sans text-[12px] uppercase tracking-[0.18em] text-accent-light">
                      {item.title}
                    </span>
                    <span className="max-w-[60ch] font-serif text-[19px] leading-[1.55] text-onink-strong lg:text-[22px]">
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — A session */}
      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">04 — A session</p>
            <div>
              <p className="max-w-[44ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]">
                Ninety minutes. No exercise, no material we brought in. A note from one hour of
                one group:
              </p>

              <div className="mt-9 border border-rule bg-ground">
                {sessionNotes.map((note) => (
                  <div
                    key={note.time}
                    className="grid items-baseline gap-x-7 gap-y-1 border-b border-rule-warm px-6 py-5 last:border-b-0 lg:grid-cols-[80px_1fr_1fr] lg:px-7"
                  >
                    <span className="font-sans text-[12px] tracking-[0.08em] text-faint">
                      {note.time}
                    </span>
                    <span className="font-serif text-[19px] leading-[1.5] text-ink lg:text-[20px]">
                      {note.event}
                    </span>
                    <span className="pl-4 font-sans text-[13.5px] leading-[1.65] text-muted lg:pl-0">
                      {note.observation}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-7 max-w-[60ch] font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                The question the facilitator is holding the whole time is not what the group
                should decide. It is how each person is communicating a difference of opinion
                right now, and what that is doing to everyone else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — What changes */}
      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">05 — What changes</p>
            <div>
              <p className="max-w-[44ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]">
                Not a technique for winning agreement. A wider range of things you are able to do
                with people.
              </p>
              <ul className="mt-10 grid md:grid-cols-2 md:gap-x-14">
                {practices.map((practice) => (
                  <li
                    key={practice.n}
                    className="grid grid-cols-[44px_1fr] items-baseline gap-2 border-t border-rule py-5"
                  >
                    <span className="font-sans text-[12px] tracking-[0.12em] text-accent">
                      {practice.n}
                    </span>
                    <span className="font-serif text-[19px] leading-[1.5] text-ink-soft lg:text-[21px]">
                      {practice.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Facilitation */}
      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">06 — Facilitation</p>
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
                  Elie Schulman does not resolve the group’s differences for it.
                </h2>
                <div className="mt-7 flex max-w-[56ch] flex-col gap-[22px] font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                  <p>
                    His work is to protect the conditions in which a group can meet its
                    differences and stay curious about them a little longer than is comfortable —
                    including the ones nobody planned to raise.
                  </p>
                  <p>
                    He listens for what was said, what was avoided, and what the group is doing
                    with a difference as it appears. He is responsible for the inquiry. You stay
                    responsible for your positions, your choices, and your relationships.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="mt-7 inline-block border-b border-rule pb-0.5 font-sans text-[14px] text-accent transition-colors duration-150 hover:border-accent-hover hover:text-accent-hover"
                >
                  More about Elie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Ways to join */}
      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">07 — Ways to join</p>
            <div className="grid gap-12 md:grid-cols-2 md:gap-14">
              <div className="border-t-2 border-ink pt-6">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-accent">
                  Open cohort
                </p>
                <h2 className="mt-4 font-serif text-[28px] leading-[1.22] text-ink lg:text-[32px]">
                  You join six or seven people you have never met.
                </h2>
                <p className="mt-4 font-serif text-[19px] leading-[1.6] text-ink-soft lg:text-[20px]">
                  No shared employer, no shared history, no stake in each other’s next promotion.
                  Nothing you try has to be managed for the rest of the week, which is precisely
                  what makes trying anything possible.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block border-b border-rule pb-0.5 font-sans text-[14px] text-accent transition-colors duration-150 hover:border-accent-hover hover:text-accent-hover"
                >
                  Schedule a consultation
                </Link>
              </div>

              <div className="border-t-2 border-ink pt-6">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-accent">
                  Private group
                </p>
                <h2 className="mt-4 font-serif text-[28px] leading-[1.22] text-ink lg:text-[32px]">
                  Or you bring the group you are already in.
                </h2>
                <p className="mt-4 font-serif text-[19px] leading-[1.6] text-ink-soft lg:text-[20px]">
                  A team, a leadership group, a board, a faculty. The differences are live and the
                  consequences are real, so the work is making what already happens between you
                  examinable instead of only survivable.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block border-b border-rule pb-0.5 font-sans text-[14px] text-accent transition-colors duration-150 hover:border-accent-hover hover:text-accent-hover"
                >
                  Discuss a private group
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — Begin */}
      <section className="bg-accent py-14 text-accent-on lg:py-[104px]">
        <div className="container-custom">
          <div className="rail">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-accent-pale">
              08 — Begin
            </p>
            <div>
              <h2 className="max-w-[20ch] font-serif text-[36px] leading-[1.05] tracking-[-0.015em] text-accent-on lg:text-[64px]">
                What would you want to find out about yourself, if a group could show you?
              </h2>
              <p className="mt-7 max-w-[52ch] font-serif text-[19px] leading-[1.62] text-accent-prose lg:text-[21px]">
                Thirty minutes with Elie: what you are curious about, what keeps recurring, and
                whether an open cohort or a private group is the right place to look at it.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-block bg-accent-on px-[30px] py-4 font-sans text-[14px] font-medium text-accent transition-colors duration-150 hover:bg-[#efe6dd]"
              >
                Schedule a 30-minute consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
