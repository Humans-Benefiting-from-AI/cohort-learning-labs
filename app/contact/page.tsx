import { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Cohort Learning Labs',
  description: 'Contact Cohort Learning Labs about collaborative AI learning and implementation for professional teams.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Start a <span className="gradient-text">Conversation</span>
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl">
            Tell us about your team, its work, and where AI adoption currently feels difficult or unclear.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-8">Contact Elie Schulman</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent mt-0.5 mr-4" />
                  <div>
                    <p className="font-semibold text-primary-900">Email</p>
                    <a href="mailto:elie@cohortlearninglabs.org" className="text-primary-700 hover:text-accent">
                      elie@cohortlearninglabs.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent mt-0.5 mr-4" />
                  <div>
                    <p className="font-semibold text-primary-900">US phone / Google Voice</p>
                    <a href="tel:+15162062480" className="text-primary-700 hover:text-accent">
                      +1 (516) 206-2480
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent mt-0.5 mr-4" />
                  <div>
                    <p className="font-semibold text-primary-900">Location</p>
                    <p className="text-primary-700">Based in Beit Shemesh, Israel</p>
                    <p className="text-primary-700">Serving teams internationally</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-l-4 border-accent bg-white p-5">
                <p className="font-semibold text-primary-900">
                  Cohort Learning Labs does not provide legal advice or legal services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
