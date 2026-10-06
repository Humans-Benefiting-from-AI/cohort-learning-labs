import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/privacy' },
  title: 'Privacy | Cohort Learning Labs',
  description: 'How Cohort Learning Labs handles information submitted through its website.',
}

const sections = [
  {
    title: 'Information you choose to provide',
    paragraphs: [
      'If you contact Cohort Learning Labs or book a consultation, the site may receive information such as your name, email address, organization, role, group size, and the message you provide.',
      'Please do not submit confidential client information, protected health information, privileged communications, or sensitive personal documents through the website.',
    ],
  },
  {
    title: 'How information may be used',
    paragraphs: [
      'Information may be used to respond to your inquiry, evaluate whether an engagement may be appropriate, schedule or administer a conversation, and maintain the website and its communications.',
    ],
  },
  {
    title: 'Service providers',
    paragraphs: [
      'The website may rely on service providers for hosting, email, analytics, scheduling, or related functions. Consultation times are booked through Calendly, which may sync with Google Calendar. Those providers may process limited information as necessary to provide their services.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <section className="border-b border-rule bg-ground py-14 lg:pb-20 lg:pt-24">
      <div className="container-custom">
        <div className="rail">
          <p className="rail-label">Privacy</p>
          <div>
            <h1 className="max-w-[14ch] font-serif text-[44px] leading-[0.96] tracking-[-0.015em] text-ink min-[480px]:text-[56px] lg:text-[80px]">
              Your information.
            </h1>
            <div className="mt-12 max-w-[62ch]">
              {sections.map((section) => (
                <div key={section.title} className="border-t border-rule py-8">
                  <h2 className="font-serif text-[28px] leading-[1.22] text-ink lg:text-[32px]">
                    {section.title}
                  </h2>
                  <div className="mt-4 flex flex-col gap-5 font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
              <div className="border-t border-rule py-8">
                <h2 className="font-serif text-[28px] leading-[1.22] text-ink lg:text-[32px]">
                  Contact
                </h2>
                <p className="mt-4 font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                  Questions about privacy may be sent to{' '}
                  <a
                    className="border-b border-rule pb-0.5 text-accent transition-colors duration-150 hover:text-accent-hover"
                    href="mailto:elie@cohortlearninglabs.org"
                  >
                    elie@cohortlearninglabs.org
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
