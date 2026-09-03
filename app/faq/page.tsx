import type { Metadata } from 'next'
import ConsultationLink from '@/components/ConsultationLink'

export const metadata: Metadata = {
  title: 'FAQ | Cohort Learning Labs',
  description:
    'The things people ask before they apply: what a Cohort Learning Labs group is, what being in the room is like, and the practicalities.',
}

const groups = [
  {
    label: '01 — What this is',
    items: [
      [
        'Is this therapy?',
        'No. Members frequently find it therapeutic, which is not the same thing. Cohort Learning Labs provides facilitated learning and group inquiry, not psychotherapy, crisis services or mental-health treatment. If you are in acute distress, this is not the right room, and Elie will say so in the consultation.',
      ],
      [
        'Is it a course?',
        'No. There is no syllabus and nothing to complete. The group agrees on one relationship to examine, and then studies its own reactions to it. Your material is the hour you are in.',
      ],
      [
        'Is it religious?',
        'No. The line from Pirkei Avot on these pages describes how the room is run — a bashful person cannot learn, an impatient person cannot teach. Groups are mixed, and no text is treated as authoritative.',
      ],
      [
        'What does “stimulus” mean?',
        'Whatever the cohort agrees to react to. It arrives as a text, a topic or a skill, and it is always about a relationship: a marriage, a parent and a child, an employee and an employer. Your reactions to it, and to each other, become the curriculum.',
      ],
    ],
  },
  {
    label: '02 — Being in the room',
    items: [
      [
        'What if I say nothing for weeks?',
        'Then you say nothing for weeks. Elie sat in a group for two years without speaking, and nobody dragged him out of it. You will not be called on or drawn out. Your silence is information the group can work with, not a debt you owe it.',
      ],
      [
        'What if I talk too much?',
        'You will hear about it, in specifics, from people with no reason to flatter you. That is one of the more valuable hours available to a person who is used to being the quickest in the room.',
      ],
      [
        'What if I dislike someone in the group?',
        'Say so, in the room, to them. That is not a breach of the method; it is the method. What you do with the person you find difficult is the most useful thing you will learn there.',
      ],
      [
        'Who else is in it?',
        'In an open cohort, six to eight people who do not share an employer, a history or a stake in each other’s next promotion. Elie composes each group after speaking with everyone in it.',
      ],
      [
        'Is it confidential?',
        'Yes, and it is the one rule with no flexibility in it. What is said in the group stays in the group. Sessions are not recorded, and no notes leave the room.',
      ],
    ],
  },
  {
    label: '03 — Practicalities',
    items: [
      [
        'How long is the commitment?',
        'Twelve weeks, ninety minutes a week, at the same time. The recurrence is what makes a new behaviour ordinary rather than an experiment you did once. Many members continue past twelve weeks.',
      ],
      [
        'What if I miss a week?',
        'Tell the group in advance. An absence is felt by five other people, so it belongs to the room rather than to your calendar alone. Repeated absence changes what the group can do, and Elie will raise it.',
      ],
      [
        'What does it cost?',
        'The monthly fee for each open cohort is listed beside its start date on the home page. Private groups are quoted after a conversation about scope.',
      ],
      [
        'Can I bring my own team?',
        'Yes, as a private group. The differences in an intact team are live and the consequences real, which makes the work different from an open cohort — more careful, and often more consequential. Say so when you book the consultation.',
      ],
      [
        'Is there an application?',
        'Pick an open time on the consultation calendar, then thirty minutes with Elie. Not everyone is placed. Composition matters more here than filling a seat, and being turned down is usually about the fit of a particular group rather than about you.',
      ],
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-rule bg-ground py-14 lg:pb-[72px] lg:pt-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">Questions</p>
            <div>
              <h1 className="max-w-[20ch] font-serif text-[44px] leading-none tracking-[-0.015em] text-ink min-[480px]:text-[56px] lg:text-[76px]">
                The things people ask before they apply.
              </h1>
              <p className="mt-9 max-w-[46ch] font-serif text-[19px] leading-[1.55] text-ink-soft lg:text-[23px]">
                If yours is not here, ask Elie directly. Nothing about this is meant to be
                worked out from a website alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {groups.map((group, index) => (
        <section
          key={group.label}
          className={`border-b border-rule py-[72px] ${index % 2 === 0 ? 'bg-paper' : 'bg-ground'}`}
        >
          <div className="container-custom">
            <div className="rail">
              <p className="rail-label">{group.label}</p>
              <div className="flex max-w-[66ch] flex-col">
                {group.items.map(([question, answer]) => (
                  <div key={question} className="border-t border-rule py-[26px]">
                    <h2 className="font-serif text-[26px] leading-[1.35] text-ink">
                      {question}
                    </h2>
                    <p className="mt-3 font-serif text-[20px] leading-[1.62] text-ink-soft">
                      {answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-accent py-14 text-accent-on lg:py-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label text-accent-pale">Still unsure</p>
            <div>
              <h2 className="max-w-[24ch] font-serif text-[36px] leading-[1.06] tracking-[-0.015em] lg:text-[56px]">
                Bring the question to the consultation.
              </h2>
              <p className="mt-7 max-w-[52ch] font-serif text-[19px] leading-[1.62] text-accent-prose lg:text-[21px]">
                Thirty minutes with Elie, no obligation either way. Half of that conversation is
                usually him working out whether this is the right room for you at all.
              </p>
              <ConsultationLink className="mt-10 inline-block bg-accent-on px-[30px] py-4 font-sans text-[14px] font-medium text-accent transition-colors duration-150 hover:bg-[#efe6dd]">
                Schedule a 30-minute consultation
              </ConsultationLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
