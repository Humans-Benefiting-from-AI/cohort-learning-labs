import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import Mark from '@/components/Mark'
import { footerRoutes } from '@/lib/routes'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-onink">
      <div className="mx-auto max-w-container px-6 pb-10 pt-16 lg:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[2fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-[14px]">
              <Mark className="h-[26px] w-[26px] shrink-0 text-accent-light" />
              <span className="font-serif text-[22px] font-medium leading-[1.15] text-paper">
                Cohort Learning Labs
              </span>
            </div>
            <p className="mt-6 max-w-[38ch] font-serif text-[19px] leading-[1.6]">
              Learning about yourself, in the presence of others. Virtual groups of six to
              eight, facilitated by Elie Schulman.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.18em] text-faint">
              Pages
            </h2>
            <ul className="mt-6 space-y-3">
              {footerRoutes.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className="font-sans text-[13.5px] transition-colors duration-150 hover:text-accent-light"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.18em] text-faint">
              Contact
            </h2>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="mailto:elie@cohortlearninglabs.org"
                  className="font-sans text-[13.5px] transition-colors duration-150 hover:text-accent-light"
                >
                  elie@cohortlearninglabs.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+15162062480"
                  className="font-sans text-[13.5px] transition-colors duration-150 hover:text-accent-light"
                >
                  +1 (516) 206-2480
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/cohort-learning-labs/"
                  className="inline-flex items-center gap-2 font-sans text-[13.5px] transition-colors duration-150 hover:text-accent-light"
                  aria-label="Cohort Learning Labs on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li className="max-w-[30ch] pt-1 font-sans text-[13.5px] leading-[1.6] text-faint">
                Beit Shemesh, Israel · groups meet by video, worldwide
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-rule-dark pt-6 font-sans text-[12px] text-faint sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-[70ch]">
            Cohort Learning Labs provides facilitated learning and group inquiry. It does not
            provide legal advice, legal representation, psychotherapy, crisis services, or
            mental-health treatment.
          </p>
          <div className="flex gap-5 whitespace-nowrap">
            <Link
              href="/privacy"
              className="transition-colors duration-150 hover:text-accent-light"
            >
              Privacy
            </Link>
            <span>© {currentYear} Cohort Learning Labs</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
