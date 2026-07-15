import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Cohort Learning Labs',
  description:
    'Learn how Cohort Learning Labs combines collaborative learning, practical AI implementation, group process, and human judgment.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            About <span className="gradient-text">Cohort Learning Labs</span>
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl">
            Collaborative AI learning and implementation for professional teams, grounded in human judgment.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">What We Do</h2>
              <p className="text-lg text-primary-700 mb-4">
                Cohort Learning Labs helps law firms, trusts and estates practices, and other
                professional-services teams adopt AI thoughtfully and effectively through practical
                implementation and collaborative learning.
              </p>
              <p className="text-lg text-primary-700">
                We help teams make the hidden structures beneath professional work visible: the language
                used to define a task, assumptions embedded in a workflow, group dynamics that shape
                adoption, and decision points where human judgment remains essential.
              </p>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-primary-900 mb-5">How We Help</h2>
              <ul className="space-y-4 text-primary-700">
                <li><strong>AI workflow audits:</strong> Map where time goes, identify bottlenecks and hidden assumptions, and determine where automation can produce meaningful returns.</li>
                <li><strong>Implementation:</strong> Build practical systems using Make.com, n8n, LLM pipelines, custom GPTs, and document automation.</li>
                <li><strong>Cohort adoption programs:</strong> Facilitate small-group learning that helps professionals understand, test, and actually use AI.</li>
                <li><strong>Responsible-use practices:</strong> Help teams document workflows, decision rights, review points, audit trails, and human-oversight processes. Legal and compliance determinations remain with each organization and its qualified counsel.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Founder</h2>
              <p className="text-lg text-primary-700 mb-4">
                Cohort Learning Labs was founded by Elie Schulman, an educator whose approach draws on a
                JD, more than 11 years of prior trusts and estates practice, and experience in group
                process and professional learning.
              </p>
              <p className="text-lg text-primary-700">
                His work centers on a practical question: How do people and groups make sound judgments
                when the language, systems, and technologies shaping a decision are difficult to see?
              </p>
            </div>

            <div className="border-l-4 border-accent bg-primary-50 p-6">
              <p className="font-semibold text-primary-900">
                Cohort Learning Labs does not provide legal advice or legal services.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
