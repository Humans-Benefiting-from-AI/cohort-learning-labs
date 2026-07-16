import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Engagements — Cohort Learning Labs',
  description: 'Engagements are scoped around each professional team’s work, goals, constraints, and learning needs.',
}

const scopingConsiderations = [
  'The people who will participate and the responsibilities they carry',
  'The workflows and decision points the team wants to examine',
  'The team’s goals and practical constraints',
  'The review and human-oversight requirements surrounding the work',
  'The team’s current experience and learning needs',
  'The timeframe in which the work needs to take place',
]

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Engagements shaped around your team
            </h1>
            <p className="text-xl text-primary-700">
              Every professional team has different workflows, responsibilities, constraints, and
              levels of experience with AI. We begin with a conversation to understand the work
              before recommending an engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">What informs the scope</h2>
            <ul className="grid md:grid-cols-2 gap-4 mb-10">
              {scopingConsiderations.map((consideration) => (
                <li key={consideration} className="bg-primary-50 rounded-xl p-5 text-primary-700">
                  {consideration}
                </li>
              ))}
            </ul>

            <div className="border-l-4 border-accent bg-primary-50 p-6 mb-6">
              <p className="text-lg font-semibold text-primary-900">
                Scope, timing, deliverables, and fees are defined in a written proposal after an
                initial conversation.
              </p>
            </div>

            <div className="border-l-4 border-accent bg-primary-50 p-6">
              <p className="font-semibold text-primary-900">
                Cohort Learning Labs does not provide legal advice or legal services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Start a conversation</h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
