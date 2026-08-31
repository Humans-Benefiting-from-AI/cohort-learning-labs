import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Engagements | Cohort Learning Labs',
  description: 'Engagements shaped around the people, purpose, recurring differences, and responsibilities of each group.',
}

const considerations = [
  'The people who will participate and what brings them together.',
  'The difference, question, decision, or recurring pattern they want to examine.',
  'Whether the group is responsible for producing a decision or deliverable.',
  'Existing roles, authority, and relationships among participants.',
  'Meeting frequency, duration, and expected period of participation.',
  'Relevant confidentiality, legal, professional, or organizational constraints.',
]

const structures = [
  ['Experience the work', 'A single facilitated group session followed by a conversation about what became visible and whether a recurring engagement would be useful.'],
  ['Bounded cohort', 'A defined series of meetings organized around a real question, transition, learning need, or recurring problem.'],
  ['Ongoing group', 'A continuing practice for participants who want to develop their capacity for inquiry through repeated work together.'],
  ['Organizational engagement', 'A group process designed around a professional team, leadership challenge, AI-adoption question, or consequential change.'],
]

export default function EngagementsPage() {
  return (
    <>
      <section className="bg-primary-50 py-20 md:py-28">
        <div className="container-custom">
          <p className="eyebrow">Engagements</p>
          <h1 className="max-w-5xl text-4xl font-bold text-primary-900 md:text-6xl">Engagements shaped around the actual group.</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-primary-700">There is no useful generic package for a group whose members, relationships, authority, history, and responsibilities are particular. We begin with a conversation before recommending a format.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">What informs the scope</p>
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {considerations.map((item) => <li key={item} className="border border-primary-200 bg-primary-50 p-6 leading-7 text-primary-700">{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Possible starting structures</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {structures.map(([title, description]) => (
                <article key={title} className="border border-primary-700 bg-primary-800 p-7">
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <p className="mt-4 leading-7 text-primary-200">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Fees</p>
            <h2 className="text-3xl font-bold text-primary-900 md:text-5xl">Scope, timing, deliverables, and fees are defined after the initial conversation.</h2>
            <Link href="/contact" className="mt-8 inline-flex rounded-md bg-accent px-7 py-3 font-semibold text-white hover:bg-accent-hover">Discuss an Engagement</Link>
          </div>
        </div>
      </section>
    </>
  )
}
