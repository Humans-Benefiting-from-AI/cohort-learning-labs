import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Central Question | Cohort Learning Labs',
  description:
    'How does each person communicate difference, and what happens in the group when they do?',
}

const layers = [
  ['The position', 'What does the person presently think should be believed, chosen, or done?'],
  [
    'What leads the person there',
    'What facts, experiences, assumptions, loyalties, values, fears, or responsibilities inform the position?',
  ],
  [
    'The precise difference',
    'Does the person disagree about the goal, interpretation, method, timing, acceptable risk, or who should decide?',
  ],
  [
    'The person’s relationship to the position',
    'Is the view a conviction, tentative judgment, intuition, warning, or attempt to think aloud?',
  ],
  [
    'What the person wants from the group',
    'Do they want to be understood, persuade, prevent a decision, test an idea, ask for time, or ensure the difference is not erased?',
  ],
]

export default function TheQuestionPage() {
  return (
    <>
      <section className="bg-primary-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-5xl">
            <p className="eyebrow">The central question</p>
            <h1 className="text-4xl font-bold leading-tight text-primary-900 md:text-6xl">
              How does each person in a group communicate a difference of opinion?
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-primary-700">
              The question sounds simple. It is not.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-copy mx-auto max-w-4xl">
            <p>
              A difference of opinion is never communicated only through the position a person
              states. It is also communicated through timing, tone, confidence, hesitation,
              silence, explanation, insistence, humor, deference, withdrawal, and the people to
              whom the person chooses to speak.
            </p>
            <p>
              In a group of three or more, every expression of difference alters the situation
              for everyone else.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Five dimensions</p>
            <h2 className="text-3xl font-bold text-primary-900 md:text-5xl">
              A difference has several layers.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {layers.map(([title, description], index) => (
                <article key={title} className="border border-primary-200 bg-white p-7">
                  <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-primary-900">{title}</h3>
                  <p className="mt-3 leading-7 text-primary-700">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">More than speaking</p>
              <h2 className="text-3xl font-bold text-primary-900 md:text-5xl">
                Communication includes what is not named.
              </h2>
            </div>
            <div className="prose-copy">
              <p>
                A person can communicate disagreement without naming it. They may become quiet,
                agree too quickly, repeat a question, change the subject, speak privately to one
                member afterward, appeal to an absent authority, or withdraw their
                participation.
              </p>
              <p>
                These actions are not meaningless interruptions. They may be the group’s most
                important information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Difference is relational</p>
            <h2 className="text-3xl font-bold md:text-5xl">
              The question must be asked repeatedly.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-primary-200">
              <p>
                A person does not communicate difference in the abstract. They communicate it to
                these particular people, in this particular group, at this particular moment.
              </p>
              <p>
                Someone may disagree openly with one member and cautiously with another. A
                person may speak freely until a majority appears. The same words can carry
                different meanings depending on history, status, trust, and perceived
                consequences.
              </p>
              <p>Yesterday’s answer is not necessarily today’s answer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Understanding is not agreement</p>
            <div className="prose-copy max-w-4xl">
              <p>
                A participant can understand another person’s position accurately without
                adopting it. A decision can be made without pretending the underlying difference
                has disappeared. A relationship can continue without requiring either person to
                surrender their perception.
              </p>
              <p>
                Understanding does not weaken judgment. It makes judgment less dependent on
                distortion.
              </p>
            </div>
            <blockquote className="question-mark mt-12">
              Can I allow another person’s mind to remain distinct from mine without treating
              that difference as abandonment, disloyalty, incompetence, or threat?
            </blockquote>
            <p className="mt-8 text-xl font-semibold text-primary-900">
              That question cannot be answered by a slogan. It can only be explored in
              relationship.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex rounded-md bg-accent px-7 py-3 font-semibold text-white hover:bg-accent-hover"
            >
              See How the Work Happens
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
