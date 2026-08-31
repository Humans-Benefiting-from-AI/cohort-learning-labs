import Link from 'next/link'

const practices = [
  'Say what they actually think without pretending to speak for everyone.',
  'Identify the precise point of difference rather than opposing an entire person.',
  'Represent another person’s view accurately before responding to it.',
  'Notice their own reactions while remaining present to the group.',
  'Distinguish understanding from agreement.',
  'Make decisions without erasing what remains unresolved.',
]

const settings = [
  { title: 'Professional teams', description: 'Where judgment, responsibility, handoffs, and consequential differences must remain visible.' },
  { title: 'Leadership groups and boards', description: 'Where dissent and competing responsibilities must survive the pressure to decide.' },
  { title: 'Educators and learning communities', description: 'Where learning involves inquiry, encounter, and judgment—not only information transfer.' },
  { title: 'Families and communities', description: 'Where belonging matters deeply and difference can therefore become difficult to express honestly.' },
  { title: 'AI and organizational change', description: 'Where technology alters roles, authority, risk, and the meaning of good work faster than a group can absorb.' },
]

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-50 py-24 md:py-32">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full border border-primary-200" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-12 -top-8 h-80 w-80 rounded-full border border-accent/30" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-5xl">
            <p className="eyebrow">Cohort Learning Labs</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] text-primary-900 md:text-6xl lg:text-7xl">
              What happens between us when we do not see things the same way?
            </h1>
            <div className="mt-8 max-w-3xl space-y-4 text-xl leading-8 text-primary-700">
              <p>Cohort Learning Labs creates recurring groups in which people learn from the differences already present among them.</p>
              <p>We do not begin by trying to eliminate disagreement. We begin by asking how each person communicates difference—and what happens in the group when they do.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center rounded-md bg-accent px-7 py-3 font-semibold text-white transition-colors hover:bg-accent-hover">Start a Conversation</Link>
              <Link href="/the-question" className="inline-flex items-center rounded-md border border-primary-300 bg-white px-7 py-3 font-semibold text-primary-900 transition-colors hover:bg-primary-100">Explore the Question</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">The central practice</p>
              <h2 className="text-3xl font-bold leading-tight text-primary-900 md:text-5xl">Difference is not an interruption of the work.</h2>
              <p className="mt-5 text-2xl font-semibold text-accent">It is the material of the work.</p>
            </div>
            <div className="prose-copy">
              <p>Every group contains differences: differences of judgment, experience, language, desire, responsibility, risk, timing, and power.</p>
              <p>Some are stated directly. Some are softened until they are difficult to recognize. Some appear as silence, compliance, persuasion, withdrawal, irritation, humor, or the formation of sides.</p>
              <p>Cohort Learning Labs helps a group pause inside those moments and examine what each person thinks, where the views differ, how the difference is being communicated, and what becomes possible once it appears.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Why a group?</p>
            <h2 className="text-3xl font-bold md:text-5xl">A third person changes the conversation.</h2>
            <div className="mt-8 grid gap-8 text-lg leading-8 text-primary-200 md:grid-cols-2">
              <p>Between two people, disagreement can look like a contest between opposing positions. With three or more people, the fuller structure becomes visible.</p>
              <p>One person speaks. Another agrees for a different reason. A third remains quiet. A majority begins to form. The person in the minority decides whether it is still safe—or worthwhile—to speak.</p>
            </div>
            <p className="mt-10 border-l-4 border-accent pl-6 text-2xl font-semibold leading-relaxed">The group reveals patterns that no individual can produce or examine alone.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">What happens in the room</p>
            <h2 className="text-3xl font-bold text-primary-900 md:text-5xl">The group slows down enough to study itself.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-700">Participants bring real questions, recurring situations, decisions, texts, work, and relationships. The content matters. But so does what begins happening among the people trying to engage with it.</p>
            <blockquote className="question-mark mt-10">How is each individual communicating a difference of opinion right now?</blockquote>
            <p className="mt-8 text-lg leading-8 text-primary-700">Nothing artificial needs to be introduced. The group itself supplies the material.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">What participants practice</p>
            <h2 className="max-w-3xl text-3xl font-bold text-primary-900 md:text-5xl">Not a formula for agreement. A greater capacity for relationship and judgment.</h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {practices.map((practice, index) => (
                <li key={practice} className="flex gap-4 border-t border-primary-200 py-5 text-lg leading-7 text-primary-700">
                  <span className="font-semibold text-accent">0{index + 1}</span><span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Where the work applies</p>
            <h2 className="text-3xl font-bold text-primary-900 md:text-5xl">Wherever people must think together without becoming the same.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {settings.map((setting) => (
                <article key={setting.title} className="border border-primary-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-primary-900">{setting.title}</h3>
                  <p className="mt-3 leading-7 text-primary-700">{setting.description}</p>
                </article>
              ))}
            </div>
            <Link href="/where-it-applies" className="mt-8 inline-flex font-semibold text-accent underline decoration-primary-300 underline-offset-4 hover:text-accent-hover">See where the work applies</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">The facilitator’s role</p>
              <h2 className="text-3xl font-bold text-primary-900 md:text-5xl">Elie does not resolve the group’s differences for it.</h2>
            </div>
            <div className="prose-copy">
              <p>His role is to protect the conditions in which the group can encounter and investigate them.</p>
              <p>He listens for what has been said, what has not been said, and what the group is doing with the difference as it emerges.</p>
              <p>The facilitator is responsible for the inquiry. The participants remain responsible for their positions, choices, relationships, and decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">Begin here</p>
            <h2 className="text-3xl font-bold md:text-5xl">What difference does your group keep encountering without fully examining?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-200">A first conversation will explore who is in the group, what keeps returning, and whether a recurring inquiry process would be useful.</p>
            <Link href="/contact" className="mt-8 inline-flex rounded-md bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-hover">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
