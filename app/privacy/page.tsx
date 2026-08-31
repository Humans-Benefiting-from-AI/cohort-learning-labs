import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy | Cohort Learning Labs',
  description: 'How Cohort Learning Labs handles information submitted through its website.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary-50 py-20">
        <div className="container-custom"><p className="eyebrow">Privacy</p><h1 className="text-4xl font-bold text-primary-900 md:text-6xl">Your information.</h1></div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-copy mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-primary-900">Information you choose to provide</h2>
            <p>If you contact Cohort Learning Labs or subscribe to writing, the site may receive information such as your name, email address, organization, role, group size, and the message you provide.</p>
            <p>Please do not submit confidential client information, protected health information, privileged communications, or sensitive personal documents through the website.</p>
            <h2 className="pt-4 text-2xl font-bold text-primary-900">How information may be used</h2>
            <p>Information may be used to respond to your inquiry, evaluate whether an engagement may be appropriate, schedule or administer a conversation, send writing you requested, and maintain the website and its communications.</p>
            <h2 className="pt-4 text-2xl font-bold text-primary-900">Service providers</h2>
            <p>The website may rely on service providers for hosting, email, analytics, or related functions. Those providers may process limited information as necessary to provide their services.</p>
            <h2 className="pt-4 text-2xl font-bold text-primary-900">Contact</h2>
            <p>Questions about privacy may be sent to <a className="font-semibold text-accent underline" href="mailto:elie@cohortlearninglabs.org">elie@cohortlearninglabs.org</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}
