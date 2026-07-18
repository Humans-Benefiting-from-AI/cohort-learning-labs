'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Engagements', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <Link href="/" className="flex items-center gap-3 text-decoration-none">
            <div className="w-9 h-9 bg-purple-600 rounded-md flex items-center justify-center text-white p-1.5">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="11" y="2" width="2" height="6" rx="0.5" />
                <rect x="10" y="7" width="4" height="1.5" rx="0.3" />
                <rect x="17.5" y="5" width="2" height="6" rx="0.5" transform="rotate(60 18.5 8)" />
                <rect x="16.8" y="9.8" width="4" height="1.5" rx="0.3" transform="rotate(60 18.8 10.5)" />
                <rect x="17.5" y="13" width="2" height="6" rx="0.5" transform="rotate(120 18.5 16)" />
                <rect x="16.8" y="12.7" width="4" height="1.5" rx="0.3" transform="rotate(120 18.8 13.5)" />
                <rect x="11" y="16" width="2" height="6" rx="0.5" transform="rotate(180 12 19)" />
                <rect x="10" y="15.5" width="4" height="1.5" rx="0.3" transform="rotate(180 12 16.25)" />
                <rect x="4.5" y="13" width="2" height="6" rx="0.5" transform="rotate(240 5.5 16)" />
                <rect x="3.8" y="12.7" width="4" height="1.5" rx="0.3" transform="rotate(240 5.8 13.5)" />
                <rect x="4.5" y="5" width="2" height="6" rx="0.5" transform="rotate(300 5.5 8)" />
                <rect x="3.8" y="9.8" width="4" height="1.5" rx="0.3" transform="rotate(300 5.8 10.5)" />
                <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              </svg>
            </div>
            <div>
              <div className="text-gray-900 text-xl font-semibold">Cohort Learning Labs</div>
              <span className="text-gray-600 text-xs font-normal block -mt-0.5">
                Group learning for problems that keep returning
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors duration-150 py-2"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-purple-700 transition-colors duration-150"
            >
              Start a fit conversation
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-900" />
            ) : (
              <Menu className="w-5 h-5 text-gray-900" />
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
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-purple-600 transition-colors duration-150"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <Link
                    href="/contact"
                    className="block w-full bg-purple-600 text-white px-4 py-3 text-base font-medium rounded-md text-center hover:bg-purple-700 transition-colors duration-150"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Start a fit conversation
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
