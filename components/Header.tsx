'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Mark from '@/components/Mark'

const navigation = [
  { name: 'The question', href: '/the-question' },
  { name: 'A session', href: '/services' },
  { name: 'Ways to join', href: '/where-it-applies' },
  { name: 'Elie Schulman', href: '/about' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-rule bg-ground">
      <nav className="container-custom">
        <div className="flex h-[88px] items-center justify-between">
          <Link href="/" className="flex items-center gap-[14px]">
            <Mark className="h-[30px] w-[30px] shrink-0 text-accent" />
            <div>
              <div className="font-serif text-[23px] font-medium leading-[1.15] tracking-[0.01em] text-ink">
                Cohort Learning Labs
              </div>
              <span className="mt-[3px] block font-sans text-[10.5px] uppercase tracking-[0.2em] text-faint">
                Six to eight people, thinking out loud
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-[30px] lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-sans text-[13px] tracking-[0.02em] text-ink-muted transition-colors duration-150 hover:text-accent-hover"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="border-b border-accent pb-[3px] font-sans text-[13px] tracking-[0.02em] text-accent transition-colors duration-150 hover:border-accent-hover hover:text-accent-hover"
            >
              Schedule a consultation
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="p-2 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-ink" />
            ) : (
              <Menu className="h-5 w-5 text-ink" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="overflow-hidden border-t border-rule lg:hidden"
            >
              <div className="space-y-1 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 font-sans text-[15px] text-ink-muted transition-colors duration-150 hover:text-accent-hover"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <Link
                    href="/contact"
                    className="block w-full bg-accent px-4 py-3 text-center font-sans text-[15px] font-medium text-accent-on transition-colors duration-150 hover:bg-accent-hover"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Schedule a consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
