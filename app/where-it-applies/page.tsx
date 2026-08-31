import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Where Group Inquiry Applies | Cohort Learning Labs',
  description: 'Applications of facilitated group inquiry for teams, leaders, educators, families, communities, and AI-driven change.',
}

const applications = [
  {
    title: 'Professional teams',
    body: 'Professional work depends on distinctions: good enough and not good enough, urgent and merely important, delegation and abandonment, efficiency and unacceptable risk. Group inquiry helps teams examine how concerns are raised, how judgments diverge, and how responsibility is assigned across handoffs.',
  },
  {
    title: 'Leadership groups and boards',
    body: 'Leadership requires action before complete certainty is available. Group inquiry helps leaders preserve dissent, examine the pressures that create premature unanimity, and make decisions without rewriting the history of the disagreement.',
  },
  {
    title: 'Educators and learning communities',
    body: 'A text or question becomes common material through which participants examine how they encounter different interpretations and different minds. The aim is attention, language, judgment, curiosity, and the capacity to be changed without surrendering one’s own perception.',
  },
  {
    title: 'Families and communities',
    body: 'The more belonging matters, the more costly difference can feel. Families and communities may confuse agreement with loyalty or rely on familiar members to translate between people who no longer speak directly to one another.',
  },
]

export default function WhereItAppliesPage() {
  return (
    <>
      <section className="bg-primary-50 py-20 md:py-28">
        <div className="container-custom">
          <p className="eyebrow">Where it applies</p>
          <h1 className="max-w-5xl text-4xl font-bold text-primary-900 md:text-6xl">Different settings. The same human question.</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-primary-700">Every group develops informal rules about who may differ, how difference may be expressed, and what happens to a person who does not join the emerging consensus.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {applications.map((application) => (
              <article key={application.title} className="border-t-4 border-accent bg-primary-50 p-8">
                <h2 className="text-2xl font-bold text-primary-900">{application.title}</h2>
                <p className="mt-5 text-lg leading-8 text-primary-700">{application.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">AI and organizational change</p>
            <h2 className="text-3xl font-bold md:text-5xl">AI does not enter an organization as a tool alone.</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-primary-200">
              <p>It changes conversations about expertise, authorship, judgment, efficiency, supervision, status, and responsibility.</p>
              <p>One person sees an opportunity. Another sees a threat to quality. A third worries about confidentiality. Someone fears becoming unnecessary. Someone else fears the organization will become irrelevant if it moves too slowly.</p>
              <p>The technical question—what can the system do?—cannot answer the group question: how will these people decide what they are willing to delegate, what they must review, and what good work now means?</p>
            </div>
            <p className="mt-8 border-l-4 border-accent pl-6 text-xl font-semibold">AI is one setting for the work. The deeper subject remains how people learn and decide together when consequential differences emerge.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Recurring problems</p>
            <h2 className="text-3xl font-bold text-primary-900 md:text-5xl">What keeps returning may be what the group has not yet learned.</h2>
            <div className="prose-copy mt-7">
              <p>Some problems return because the proposed solution addressed the visible event but left the group’s way of relating to the problem untouched.</p>
              <p>The names and circumstances change. The same structures recur: who may speak, who must carry uncertainty, who is expected to accommodate, who decides, and what the group does with information it does not want.</p>
            </div>
            <Link href="/contact" className="mt-8 inline-flex rounded-md bg-accent px-7 py-3 font-semibold text-white hover:bg-accent-hover">Discuss Your Group</Link>
          </div>
        </div>
      </section>
    </>
  )
}
