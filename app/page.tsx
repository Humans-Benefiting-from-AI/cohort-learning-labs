import Link from 'next/link'

const settings = [
  {
    title: 'Businesses and professional teams',
    description:
      'When implementation keeps failing, authority is unclear, or AI exposes how the work is actually done.',
  },
  {
    title: 'Organizations and educational institutions',
    description:
      'When new structures and programs are repeatedly absorbed into old patterns.',
  },
  {
    title: 'Families and family enterprises',
    description:
      'When practical decisions carry histories, roles, loyalties, and meanings that cannot be addressed as logistics alone.',
  },
  {
    title: 'Leaders and facilitators',
    description:
      'When the person responsible for the group wants to become more precise about authority, resistance, participation, and intervention.',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-accent font-semibold mb-4">Cohort Learning Labs</p>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6">
              You have probably already tried to solve the problem.
            </h1>
            <div className="space-y-4 text-lg text-primary-700 max-w-3xl mb-8">
              <p>
                You clarified the roles. Changed the structure. Held the retreat. Introduced the
                technology. Hired the consultant. Everyone agreed that something needed to change.
              </p>
              <p>And eventually, the group found its way back to the same place.</p>
              <p>
                Cohort Learning Labs works with leaders and groups ready to ask a harder question:
                not merely “What should we do differently?” but “What are we repeatedly doing
                together that makes change so difficult?”
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                Start a fit conversation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-900 font-semibold rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
              >
                See how the work develops
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <p className="text-accent font-semibold mb-4">Our point of view</p>
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
                The group may not need another answer.
              </h2>
              <div className="space-y-5 text-lg text-primary-700">
                <p>
                  Intelligent groups rarely remain stuck because nobody can explain the solution.
                  They remain stuck when the patterns shaping authority, conflict, responsibility,
                  expertise, and learning are difficult to see from inside the group.
                </p>
                <p>
                  Our work is slow, deliberate, and participatory. We help groups examine what keeps
                  recurring without pretending that the facilitator already knows the hidden truth—or
                  that one difficult person explains the whole system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <p className="text-accent font-semibold mb-4">The urgent current application</p>
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
              <h2 className="text-3xl md:text-4xl font-bold">
                AI is moving faster than groups know how to change.
              </h2>
              <div className="space-y-5 text-lg text-primary-200">
                <p>
                  Artificial intelligence is forcing businesses, institutions, families, and
                  professional groups to adapt at an unprecedented pace. Buying tools is the easy
                  part. The harder work is revising how people learn, distribute authority, exercise
                  judgment, and respond when familiar expertise no longer feels secure.
                </p>
                <p className="font-semibold text-white">
                  When resistance appears, we do not begin by asking how to defeat it. We ask what
                  the resistance has been protecting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Different settings. The same difficult question.
            </h2>
            <p className="text-lg text-primary-700">
              Cohort Learning Labs works wherever recurring group problems and rapid change require
              more than a packaged answer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {settings.map((setting) => (
              <article key={setting.title} className="bg-primary-50 rounded-xl p-7">
                <h3 className="text-xl font-bold text-primary-900 mb-3">{setting.title}</h3>
                <p className="text-primary-700">{setting.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              This work is not for every group.
            </h2>
            <div className="space-y-5 text-lg text-primary-700">
              <p>
                It is for groups that suspect the stated problem is not the whole problem—and whose
                leaders are willing to examine their own participation in what keeps recurring.
              </p>
              <p>
                It is not a motivational event, a packaged training, or a process for proving that
                one difficult person is to blame. It is not designed for leaders who want everyone
                else examined while their own authority remains outside the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-5">Start a fit conversation.</h2>
            <p className="text-lg text-primary-200 mb-8">
              Tell us about a problem your group has tried to solve before—and what keeps returning.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Start a fit conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
