import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-accent font-semibold mb-4">Cohort Learning Labs</p>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6">
              Collaborative AI learning and implementation for professional teams
            </h1>
            <p className="text-xl text-primary-700 mb-4">
              Grounded in language, group process, and human judgment.
            </p>
            <p className="text-lg text-primary-600 max-w-3xl mb-8">
              We help law firms, trusts and estates practices, and other professional-services teams
              understand their work, build practical AI workflows, and develop the shared capacity to
              use those systems responsibly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                Start a Conversation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-900 font-semibold rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
              >
                Learn About Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Make the hidden structure of work visible
            </h2>
            <p className="text-lg text-primary-700">
              Effective AI adoption begins by identifying the language, assumptions, decisions, and
              group dynamics already shaping a team&apos;s work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-primary-50 rounded-xl p-7">
              <h3 className="text-xl font-bold text-primary-900 mb-3">AI workflow audits</h3>
              <p className="text-primary-700">
                Map where time goes, identify bottlenecks and hidden assumptions, and determine where
                automation can produce meaningful returns.
              </p>
            </div>
            <div className="bg-primary-50 rounded-xl p-7">
              <h3 className="text-xl font-bold text-primary-900 mb-3">Practical implementation</h3>
              <p className="text-primary-700">
                Build useful systems with Make.com, n8n, LLM pipelines, custom GPTs, and document
                automation.
              </p>
            </div>
            <div className="bg-primary-50 rounded-xl p-7">
              <h3 className="text-xl font-bold text-primary-900 mb-3">Cohort adoption programs</h3>
              <p className="text-primary-700">
                Facilitate small-group learning that helps professionals understand, test, and actually
                use AI.
              </p>
            </div>
            <div className="bg-primary-50 rounded-xl p-7">
              <h3 className="text-xl font-bold text-primary-900 mb-3">Responsible-use practices</h3>
              <p className="text-primary-700">
                Document workflows, decision rights, review points, audit trails, and human-oversight
                processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-5">Technology in the context of professional judgment</h2>
            <p className="text-lg text-primary-200 mb-4">
              Legal and compliance determinations remain with each organization and its qualified counsel.
            </p>
            <p className="font-semibold mb-8">
              Cohort Learning Labs does not provide legal advice or legal services.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Contact Elie Schulman
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
