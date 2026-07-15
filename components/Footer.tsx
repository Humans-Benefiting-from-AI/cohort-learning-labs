import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CL</span>
              </div>
              <span className="font-bold text-xl">Cohort Learning Labs</span>
            </div>
            <p className="text-primary-300 mb-4">
              Collaborative AI learning and implementation for professional teams, grounded in human judgment.
            </p>
            <a
              href="https://www.linkedin.com/company/cohort-learning-labs/"
              className="inline-flex items-center text-primary-300 hover:text-accent transition-colors"
              aria-label="Cohort Learning Labs on LinkedIn"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-primary-300 hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/services" className="text-primary-300 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-primary-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5" />
                <a href="mailto:elie@cohortlearninglabs.org" className="text-primary-300 hover:text-accent">
                  elie@cohortlearninglabs.org
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5" />
                <a href="tel:+15162062480" className="text-primary-300 hover:text-accent">
                  US phone / Google Voice: +1 (516) 206-2480
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-primary-300">Based in Beit Shemesh, Israel<br />Serving teams internationally</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center space-y-2">
          <p className="text-primary-400">Cohort Learning Labs does not provide legal advice or legal services.</p>
          <p className="text-primary-400">© {currentYear} Cohort Learning Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
