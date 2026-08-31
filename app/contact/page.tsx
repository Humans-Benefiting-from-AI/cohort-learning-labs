import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Start a Conversation | Cohort Learning Labs',
  description: 'Tell Elie Schulman about your group, the difference it is encountering, and what you hope the group might learn.',
}

const context = [
  'Who is in the group and what brings them together.',
  'What question, difference, decision, or pattern keeps returning.',
  'What happens when people try to discuss it.',
  'What the group has already attempted.',
  'Whether the group must make a decision or is primarily seeking to learn.',
  'Any relevant timing, privacy, authority, or participation constraints.',
]

export default function ContactPage() {
  const subject = encodeURIComponent('Conversation about a group inquiry')
  const body = encodeURIComponent('Who is in the group?\n\nWhat difference, question, or recurring situation would you like the group to examine?\n\nWhat would you hope the group becomes more able to do?\n')

  return (
    <>
      <section className="bg-primary-50 py-20 md:py-28">
        <div className="container-custom">
          <p className="eyebrow">Start a conversation</p>
          <h1 className="max-w-5xl text-4xl font-bold text-primary-900 md:text-6xl">What does your group keep encountering without fully examining?</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-primary-700">A first conversation is an opportunity to understand the people involved, what is happening among them, and whether a facilitated group inquiry would be useful.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-lg leading-8 text-primary-700">You do not need to diagnose the group or arrive with a finished description. Begin with a concrete situation, recurring difficulty, consequential difference, or change the group is trying to navigate.</p>
              <h2 className="mt-10 text-3xl font-bold text-primary-900">Helpful context</h2>
              <ul className="mt-6 space-y-4">
                {context.map((item) => <li key={item} className="border-l-2 border-primary-300 pl-5 leading-7 text-primary-700">{item}</li>)}
              </ul>
              <a href={`mailto:elie@cohortlearninglabs.org?subject=${subject}&body=${body}`} className="mt-10 inline-flex rounded-md bg-accent px-7 py-3 font-semibold text-white hover:bg-accent-hover">Email Elie about your group</a>
              <p className="mt-5 text-sm leading-6 text-primary-600">Please do not include confidential client information, protected health information, or sensitive personal documents in an initial message.</p>
            </div>

            <aside className="bg-primary-50 p-8">
              <h2 className="text-2xl font-bold text-primary-900">Contact Elie Schulman</h2>
              <ul className="mt-7 space-y-6">
                <li className="flex gap-4"><Mail className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><div><p className="font-semibold text-primary-900">Email</p><a className="text-primary-700 hover:text-accent" href="mailto:elie@cohortlearninglabs.org">elie@cohortlearninglabs.org</a></div></li>
                <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><div><p className="font-semibold text-primary-900">US phone / Google Voice</p><a className="text-primary-700 hover:text-accent" href="tel:+15162062480">+1 (516) 206-2480</a></div></li>
                <li className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><div><p className="font-semibold text-primary-900">Location</p><p className="text-primary-700">Based in Beit Shemesh, Israel<br />Serving groups internationally</p></div></li>
              </ul>
            </aside>
          </div>
          <div className="mx-auto mt-12 max-w-6xl border-l-4 border-accent bg-primary-50 p-6">
            <p className="font-semibold text-primary-900">Cohort Learning Labs provides facilitated learning and group inquiry. It does not provide legal advice, legal representation, psychotherapy, crisis services, or mental-health treatment.</p>
          </div>
        </div>
      </section>
    </>
  )
}
