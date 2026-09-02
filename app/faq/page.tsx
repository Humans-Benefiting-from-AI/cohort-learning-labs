import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Cohort Learning Labs',
  description:
    'Answers about participation, disagreement, confidentiality, facilitation, outcomes, and the scope of Cohort Learning Labs.',
}

const faqs = [
  [
    'Does a group need to be in active conflict?',
    'No. Some groups arrive because conflict has become visible. Others function well but recognize that important differences are softened, avoided, or resolved too quickly.',
  ],
  [
    'Is the purpose to reach consensus?',
    'Not necessarily. Consensus is not treated as proof that a group has understood its differences. The immediate purpose is to make relevant positions, assumptions, reactions, and relationships more visible.',
  ],
  [
    'Is this mediation?',
    'Not ordinarily. Mediation centers on a defined dispute or negotiated agreement. This work centers on the group’s capacity to inquire into how its members communicate and respond to difference.',
  ],
  [
    'Is this group therapy?',
    'No. The work may involve emotion and relationship because both are present in human groups, but Cohort Learning Labs does not provide psychotherapy, diagnosis, crisis care, or mental-health treatment.',
  ],
  [
    'What does the facilitator do?',
    'The facilitator helps the group attend to what is happening as members speak, listen, differ, align, withdraw, question, and decide.',
  ],
  [
    'Will Elie tell us who is right?',
    'No. Participants remain responsible for their positions and decisions. Elie may question reasoning, language, assumptions, or process, but he does not become the group’s substitute authority.',
  ],
  [
    'Why must there be at least three people?',
    'The presence of a third person introduces audience, alliance, majority, minority, representation, and multiple relationships operating simultaneously.',
  ],
  [
    'Can meetings take place online?',
    'Yes. Engagements can be conducted virtually for groups in different locations. Format is determined during the initial conversation.',
  ],
  [
    'How many sessions are required?',
    'There is no universal number. A single meeting can reveal meaningful material, but the central capacities develop through recurrence.',
  ],
  [
    'What outcomes should we expect?',
    'The work does not guarantee agreement or harmony. Possible developments include more precise expression, more accurate understanding, greater tolerance for uncertainty, clearer responsibility, and more useful dissent.',
  ],
  [
    'Is the conversation confidential?',
    'Expectations are established before the work begins. A facilitator cannot guarantee what another participant will disclose outside the group, and organizations remain responsible for applicable obligations.',
  ],
  [
    'How are engagements priced?',
    'Scope, meeting frequency, preparation, group size, and organizational needs differ. Fees are set in a written proposal after an initial conversation.',
  ],
]

export default function FAQPage() {
  return (
    <>
      <section className="bg-primary-50 py-20 md:py-28">
        <div className="container-custom">
          <p className="eyebrow">Frequently asked questions</p>
          <h1 className="max-w-5xl text-4xl font-bold text-primary-900 md:text-6xl">
            What the work is—and what it is not.
          </h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl divide-y divide-primary-200">
            {faqs.map(([question, answer]) => (
              <article
                key={question}
                className="grid gap-4 py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10"
              >
                <h2 className="text-xl font-bold text-primary-900">{question}</h2>
                <p className="leading-7 text-primary-700">{answer}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-5xl text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-md bg-accent px-7 py-3 font-semibold text-white hover:bg-accent-hover"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
