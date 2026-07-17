import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Illustrative Engagement - Cohort Learning Labs',
  description:
    'A clearly labeled illustrative example of how Cohort Learning Labs examines AI adoption, workflow, group process, and human judgment.',
}

const questions = [
  'What does the written process say?',
  'What does the team actually do?',
  'Where do people hesitate, defer, revise, or quietly work around the official workflow?',
  'Which parts of the friction protect quality, and which parts only protect habit?',
  'Who owns the final judgment when an AI-assisted step is introduced?',
]

const distinctions = [
  'friction that protects quality from friction that wastes attention',
  'professional judgment from inherited habit',
  'delegation from abdication',
  'useful AI assistance from convincing-looking noise',
  'human review as a slogan from human review as an owned, observable practice',
]

const artifacts = [
  'a map of the current workflow and the workflow people actually use',
  'a list of judgment points, review points, and ownership decisions',
  'sample prompts, outputs, and review notes from bounded team experiments',
  'a proposed AI-assisted workflow with explicit human checkpoints',
  'a short operating guide for what the team will test next and who is responsible for it',
]

export default function IllustrativeEngagementPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-accent font-semibold mb-4">Clearly labeled illustrative engagement</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              The workflow is not the workflow.
            </h1>
            <p className="text-xl text-primary-700">
              A professional team says it wants help introducing AI into a recurring workflow. That is
              rarely the whole problem.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="disclosure-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-accent bg-primary-50 p-6 mb-10">
              <h2 id="disclosure-heading" className="text-xl font-bold text-primary-900 mb-3">
                This is an illustrative scenario, not a client case study.
              </h2>
              <p className="text-primary-700">
                It does not describe a specific client, engagement, timeline, deliverable, result,
                metric, quotation, or testimonial. It shows the kind of process Cohort Learning Labs
                can use when AI adoption exposes questions of language, group process, and judgment.
              </p>
            </div>

            <div className="space-y-8 text-lg text-primary-700">
              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-4">Starting situation</h2>
                <p>
                  The written process says one thing. The team does another. People know where the
                  exceptions are, who really decides, what gets cleaned up before anyone sees it, and
                  which steps exist because nobody has been willing to name the real problem.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-4">
                  Why the work requires judgment
                </h2>
                <p>
                  Cohort Learning Labs would not begin by asking, &quot;What can we automate?&quot; The
                  better first question is: &quot;How does this group actually decide what counts as good
                  work?&quot; AI matters here because it exposes hidden assumptions. It does not remove
                  responsibility for deciding what is accurate, useful, appropriate, or ready to rely on.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-4">
                  How the workflow is examined
                </h2>
                <p className="mb-5">
                  The work starts by putting the formal process next to the lived process. The team looks
                  directly at the places where language, authority, hesitation, review, and responsibility
                  show up in practice.
                </p>
                <ul className="grid gap-3">
                  {questions.map((question) => (
                    <li key={question} className="rounded-lg bg-primary-50 p-4 text-primary-800">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-4">
                  How the team learns and tests together
                </h2>
                <p>
                  The cohort format matters because AI adoption is not only a tool decision. It is a
                  group learning problem. In a T-group-informed process, participants learn from what the
                  group is doing in real time: where people defer, where they protect ambiguity, where
                  they over-trust a polished answer, and where they avoid naming who owns the decision.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-4">
                  Human review and ownership decisions
                </h2>
                <p className="mb-5">The team works to distinguish:</p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {distinctions.map((distinction) => (
                    <li key={distinction} className="rounded-lg border border-primary-100 bg-white p-4">
                      {distinction}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-4">Artifacts produced</h2>
                <p className="mb-5">
                  Depending on scope, an engagement like this may produce:
                </p>
                <ul className="grid gap-3">
                  {artifacts.map((artifact) => (
                    <li key={artifact} className="rounded-lg bg-primary-50 p-4 text-primary-800">
                      {artifact}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-4">Limitations</h2>
                <p>
                  This example does not claim a client result or measurable outcome. It is a public
                  explanation of a process stance: AI does not merely change a workflow. It exposes how a
                  group thinks, decides, distributes authority, and avoids responsibility. That exposure
                  is not a side effect of implementation. It is part of the work.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-900 font-semibold rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
              >
                View services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
