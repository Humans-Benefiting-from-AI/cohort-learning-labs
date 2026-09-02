import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing and Questions | Cohort Learning Labs',
  description:
    'Essays and working questions about groups, difference, language, judgment, learning, and technological change.',
}

const questions = [
  'What makes another person’s difference difficult to hear?',
  'What does a group do before anyone formally decides what it will do?',
  'How does language reveal or conceal responsibility?',
  'When does agreement become a defense against inquiry?',
  'What can a recurring problem teach that a solved problem cannot?',
  'How does AI change not only what people do, but how they understand their own work?',
]

export default function WritingPage() {
  return (
    <>
      <section className="bg-primary-50 py-20 md:py-28">
        <div className="container-custom">
          <p className="eyebrow">Writing and questions</p>
          <h1 className="max-w-5xl text-4xl font-bold text-primary-900 md:text-6xl">
            Questions worth returning to.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-primary-700">
            Essays and working materials concerned with how people learn, differ, interpret,
            decide, and change together.
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-bold text-primary-900">
                The writing stays with questions that remain alive across settings.
              </h2>
              <p className="mt-6 text-lg leading-8 text-primary-700">
                It does not offer a library of communication tips. It examines the structures
                through which people meet one another, work, texts, and change.
              </p>
            </div>
            <ul className="space-y-3">
              {questions.map((question) => (
                <li
                  key={question}
                  className="border-l-4 border-accent bg-primary-50 px-6 py-5 text-lg font-semibold leading-7 text-primary-900"
                >
                  {question}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto mt-14 max-w-6xl border border-primary-200 bg-primary-50 p-8">
            <p className="eyebrow">In preparation</p>
            <h2 className="text-2xl font-bold text-primary-900">
              The first essays are being prepared.
            </h2>
            <p className="mt-3 leading-7 text-primary-700">
              Future writing will explore group life, difference and relationship, learning and
              teaching, language and interpretation, AI and human judgment, and recurring
              problems.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
