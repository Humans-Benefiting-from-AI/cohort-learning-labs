import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — Cohort Learning Labs',
  description: 'Collaborative AI learning and implementation for professional teams, grounded in human judgment.',
}

const offerings = [
  {
    title: 'AI workflow audits',
    description:
      'Map where time goes, identify bottlenecks and hidden assumptions, and determine where automation can produce meaningful returns.',
  },
  {
    title: 'Implementation',
    description:
      'Turn selected opportunities into practical, maintainable workflows and systems that fit how the team actually works.',
  },
  {
    title: 'Cohort adoption programs',
    description:
      'Facilitate small-group learning that helps professionals understand, test, and actually use AI.',
  },
  {
    title: 'Responsible-use practices',
    description:
      'Help teams document workflows, decision rights, review points, audit trails, and human-oversight processes. Legal and compliance determinations remain with each organization and its qualified counsel.',
  },
]

const engagementSteps = [
  {
    title: '1. Understand the work',
    description:
      'Begin with the team’s goals, responsibilities, existing workflows, constraints, and current experience with AI.',
  },
  {
    title: '2. Choose a useful starting point',
    description:
      'Identify a bounded workflow or learning need where practical testing can clarify what is—and is not—worth pursuing.',
  },
  {
    title: '3. Build and learn together',
    description:
      'Combine implementation with collaborative learning so the people responsible for the work can understand and evaluate the system.',
  },
  {
    title: '4. Define review and ownership',
    description:
      'Document responsibilities, human review points, maintenance needs, and the decisions that remain with the organization.',
  },
]

const audienceNeeds = [
  'AI tools are appearing faster than the team can establish shared review practices.',
  'A recurring knowledge-work process feels slow, repetitive, or difficult to evaluate.',
  'Responsibility between professionals, support staff, and AI-assisted systems is unclear.',
  'The team needs to learn together rather than receive one-time tool training.',
]

const engagementFormats = [
  {
    title: 'Discovery and workflow assessment',
    problem: 'For teams that need to understand the work before choosing a tool or project.',
    activities: 'Map a bounded workflow, its language, decisions, handoffs, constraints, and review points.',
    output: 'A documented view of the current process and a reasoned set of possible next steps.',
  },
  {
    title: 'Facilitated team learning and experimentation',
    problem: 'For teams that need shared experience evaluating what AI can and cannot do in their context.',
    activities: 'Work through selected examples together, compare results, and identify practical standards for use.',
    output: 'A shared vocabulary, documented observations, and a bounded direction for further testing.',
  },
  {
    title: 'Implementation and review support',
    problem: 'For teams with a selected workflow that are ready to develop and test a practical system.',
    activities: 'Build iteratively with the people responsible for the work and define ownership and human review.',
    output: 'A tested workflow, operating documentation, and clearly assigned review and maintenance responsibilities.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Collaborative AI learning and implementation
            </h1>
            <p className="text-xl text-primary-700">
              Cohort Learning Labs helps law firms, trusts and estates practices, and other
              professional-services teams adopt AI thoughtfully and effectively through practical
              implementation and collaborative learning.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {offerings.map((offering) => (
              <article key={offering.title} className="bg-primary-50 rounded-xl p-7">
                <h2 className="text-xl font-bold text-primary-900 mb-3">{offering.title}</h2>
                <p className="text-primary-700">{offering.description}</p>
              </article>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-10 border-l-4 border-accent bg-primary-50 p-6">
            <p className="font-semibold text-primary-900">
              Cohort Learning Labs does not provide legal advice or legal services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white" aria-labelledby="who-this-is-for-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-10">
            <h2 id="who-this-is-for-heading" className="text-3xl md:text-4xl font-bold mb-4">Who this work is for</h2>
            <p className="text-lg text-primary-200">
              Cohort Learning Labs works with professional teams whose work depends on context,
              responsibility, and judgment—not simply faster output.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {audienceNeeds.map((need) => (
              <li key={need} className="rounded-xl border border-primary-700 bg-primary-800 p-6 text-primary-100">{need}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-primary-50" aria-labelledby="engagement-process-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-10">
            <h2 id="engagement-process-heading" className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              How an engagement develops
            </h2>
            <p className="text-lg text-primary-700">
              The sequence is designed to keep the work grounded in a real team, a real workflow,
              and clearly assigned human judgment.
            </p>
          </div>
          <ol className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {engagementSteps.map((step) => (
              <li key={step.title} className="bg-white rounded-xl p-7 border border-primary-100">
                <h3 className="text-xl font-bold text-primary-900 mb-3">{step.title}</h3>
                <p className="text-primary-700">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="max-w-5xl mx-auto mt-8 text-center">
            <Link href="/pricing" className="font-semibold text-accent hover:text-accent-hover underline underline-offset-4">
              Learn how engagements are scoped
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="illustrative-engagement-heading">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto border-l-4 border-accent bg-primary-50 p-8">
            <p className="text-accent font-semibold mb-3">Illustrative engagement</p>
            <h2 id="illustrative-engagement-heading" className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              The workflow is not the workflow.
            </h2>
            <p className="text-lg text-primary-700 mb-5">
              A team may ask for help introducing AI into a recurring process. The harder work is often
              naming how the group actually decides what counts as good work, who owns review, and where
              responsibility has become too vague.
            </p>
            <Link
              href="/illustrative-engagement"
              className="inline-flex items-center font-semibold text-accent hover:text-accent-hover underline underline-offset-4"
            >
              Read the clearly labeled illustrative example
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="engagement-formats-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-10">
            <h2 id="engagement-formats-heading" className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Ways to begin</h2>
            <p className="text-lg text-primary-700">
              These are starting patterns, not fixed packages. Scope follows the team’s actual work,
              constraints, responsibilities, and learning needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {engagementFormats.map((format) => (
              <article key={format.title} className="rounded-xl border border-primary-100 bg-primary-50 p-7">
                <h3 className="text-xl font-bold text-primary-900 mb-4">{format.title}</h3>
                <p className="text-primary-700 mb-4"><strong className="text-primary-900">Useful when: </strong>{format.problem}</p>
                <p className="text-primary-700 mb-4"><strong className="text-primary-900">Work may include: </strong>{format.activities}</p>
                <p className="text-primary-700"><strong className="text-primary-900">Possible output: </strong>{format.output}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Start a conversation</h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Tell us about your team, its work, and where AI adoption currently feels difficult or
            unclear.
          </p>
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
