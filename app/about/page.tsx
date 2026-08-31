import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Elie Schulman | Cohort Learning Labs',
  description: 'Elie Schulman’s approach to group inquiry, shaped by law, education, sustained group participation, and close attention to language.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="eyebrow">About Elie Schulman</p>
              <h1 className="text-4xl font-bold leading-tight text-primary-900 md:text-6xl">Attorney by training. Educator and group facilitator by vocation.</h1>
              <p className="mt-7 max-w-3xl text-xl leading-8 text-primary-700">Elie founded Cohort Learning Labs to create places where people can investigate what happens between them when they do not see things the same way.</p>
            </div>
            <Image src="/images/elie-schulman.jpg" alt="Elie Schulman" width={560} height={700} className="aspect-[4/5] w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-copy mx-auto max-w-4xl">
            <p>His approach is shaped by several worlds that are rarely held together: legal practice, teaching and textual inquiry, sustained participation in long-term group work, and the practical challenge of helping people respond to technological and social change.</p>
            <p>Elie earned a JD and practiced trusts and estates law for more than eleven years. That work required precision about language, responsibility, family relationships, competing interpretations, and decisions whose human meaning could not be reduced to a technical answer.</p>
            <p>His later work in education and group learning deepened a related conviction: people do not change merely because they receive better information. They change through experience, relationship, reflection, and repeated opportunities to notice themselves in the presence of other people.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Why groups?</p>
            <h2 className="text-3xl font-bold md:text-5xl">A group is always doing more than discussing its stated subject.</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-primary-200">
              <p>Elie’s understanding of groups was shaped not only by studying facilitation, but by spending years as a participant in sustained group processes.</p>
              <p>A discussion about one subject may also be a negotiation over belonging. An argument about facts may contain a difference about authority. A request for efficiency may conceal uncertainty about responsibility. A silence may be an act of agreement, resistance, protection, or exclusion.</p>
              <p>The facilitator’s task is not to impose an interpretation. It is to help the group become curious enough to examine what it is creating together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">The question at the center</p>
            <blockquote className="question-mark">How is each individual in this group communicating a difference of opinion?</blockquote>
            <p className="mt-8 text-xl leading-8 text-primary-700">The question is intentionally inexhaustible. Its answer changes with the people, relationships, subject, stakes, and moment.</p>
            <p className="mt-5 text-2xl font-bold text-primary-900">The repetition is the method.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Elie’s role</p>
              <h2 className="text-3xl font-bold text-primary-900 md:text-5xl">He does not promise to make groups harmonious.</h2>
            </div>
            <div className="prose-copy">
              <p>He helps them become more capable of inquiry.</p>
              <p>He listens closely to language, sequence, omission, reaction, and the ways a group organizes attention.</p>
              <p>The purpose is clearer participation: people becoming more able to say what they think, understand what others are saying, recognize what is happening among them, and make responsible choices from there.</p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-6xl border-l-4 border-accent bg-primary-50 p-6">
            <p className="font-semibold text-primary-900">Cohort Learning Labs provides facilitated learning and group inquiry. It does not provide legal advice, legal representation, psychotherapy, or mental-health treatment.</p>
          </div>
          <div className="mx-auto mt-8 max-w-6xl"><Link href="/contact" className="inline-flex rounded-md bg-accent px-7 py-3 font-semibold text-white hover:bg-accent-hover">Start a Conversation with Elie</Link></div>
        </div>
      </section>
    </>
  )
}
