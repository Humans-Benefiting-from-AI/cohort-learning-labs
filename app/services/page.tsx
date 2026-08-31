import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Group Inquiry Works | Cohort Learning Labs',
  description: 'How recurring facilitated groups use live differences, reflection, and repeated inquiry to develop shared understanding and judgment.',
}

const steps = [
  ['Begin with three or more people', 'A group begins when more than two minds are present. The third person introduces audience, alliance, majority, minority, representation, and multiple relationships operating at once.'],
  ['Bring real material', 'The group may begin with a decision, text, question, recurring conflict, professional problem, organizational change, or participant’s experience.'],
  ['Notice what happens', 'As participants respond to the material and to one another, differences emerge. The facilitator helps the group slow down enough to see how they are communicated and received.'],
  ['Inquire before resolving', 'The group examines what each person said, what others heard, where the precise difference lies, and which reactions are shaping the conversation.'],
  ['Return', 'The group meets again. Patterns become visible through recurrence, and participants receive another opportunity to make different choices.'],
]

const formats = [
  ['Ongoing inquiry group', 'A recurring group for people who want sustained practice examining difference, responsibility, authority, and relationship.'],
  ['Team learning cohort', 'A time-bounded series centered on a real organizational challenge, recurring workflow, or period of change.'],
  ['Leadership or board inquiry', 'A facilitated process for groups that need to preserve dissent, clarify assumptions, and make decisions without manufacturing agreement.'],
  ['Learning community or text-based cohort', 'A group organized around a shared text, question, or field of practice, where differences in interpretation become material for learning.'],
  ['Initial group session', 'A first meeting to experience the method and determine whether a recurring process would be useful.'],
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-primary-50 py-20 md:py-28">
        <div className="container-custom">
          <p className="eyebrow">How it works</p>
          <h1 className="max-w-5xl text-4xl font-bold text-primary-900 md:text-6xl">A recurring practice, not a one-time performance.</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-primary-700">Groups do not transform because someone explains communication to them. They learn by examining what they actually do together—and returning to that inquiry over time.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">The basic structure</p>
            <div className="mt-8 space-y-2">
              {steps.map(([title, description], index) => (
                <article key={title} className="grid gap-3 border-t border-primary-200 py-7 md:grid-cols-[5rem_1fr_1.5fr] md:gap-8">
                  <p className="font-semibold text-accent">0{index + 1}</p>
                  <h2 className="text-xl font-bold text-primary-900">{title}</h2>
                  <p className="leading-7 text-primary-700">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">A typical moment</p>
            <h2 className="text-3xl font-bold md:text-5xl">The group is learning how it tries to answer questions together.</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-primary-200">
              <p>One participant proposes a course of action. A second immediately offers reasons it will not work. A third says nothing.</p>
              <p>The group could debate the proposal, vote, or move on. The facilitator may instead ask what the second person heard, what the response was trying to accomplish, what kept the third person from entering, and which forms of disagreement receive attention.</p>
              <p>The original question remains important. The group is now also able to examine how it thinks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">The facilitator’s responsibility</p>
              <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">Sustain the inquiry without becoming the authority on what each person means.</h2>
            </div>
            <div className="prose-copy">
              <p>Elie may return to a phrase that passed too quickly, ask someone to distinguish observation from interpretation, invite a participant to state a view in their own name, or make a forming coalition visible.</p>
              <p>The purpose is for participants to become more able to speak for themselves, hear one another accurately, and observe the group they are creating together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Possible engagement formats</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {formats.map(([title, description]) => (
                <article key={title} className="border border-primary-200 bg-primary-50 p-7">
                  <h2 className="text-xl font-bold text-primary-900">{title}</h2>
                  <p className="mt-3 leading-7 text-primary-700">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 border-l-4 border-accent bg-primary-50 p-7">
              <h2 className="text-2xl font-bold text-primary-900">Scope and expectations</h2>
              <p className="mt-3 leading-7 text-primary-700">Before an engagement begins, the group clarifies its purpose, participation, decision responsibilities, meeting rhythm, confidentiality expectations, and the limits of the facilitator’s role. Scope, timing, and fees are defined after an initial conversation.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/pricing" className="inline-flex rounded-md border border-primary-300 bg-white px-7 py-3 font-semibold text-primary-900 hover:bg-primary-100">Explore Engagements</Link>
              <Link href="/contact" className="inline-flex rounded-md bg-accent px-7 py-3 font-semibold text-white hover:bg-accent-hover">Start a Conversation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
