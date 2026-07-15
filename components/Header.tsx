'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone, Mail, Clock, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about',
    dropdown: [
      { name: 'Who We Are', href: '/about/who-we-are' },
      { name: 'Our Approach', href: '/about/our-approach' },
      { name: 'Our Impact', href: '/about/our-impact' },
      { name: 'Our Team', href: '/about/our-team' },
      { name: 'Media & Press', href: '/about/media-press' },
    ]
  },
  {
    name: 'Our Work',
    href: '/work',
    dropdown: [
      { name: 'Events & Opportunities', href: '/work/events-opportunities' },
      { name: 'Our Strategies', href: '/work/our-strategies' },
      { name: 'Trainings', href: '/work/trainings' },
      { name: 'Facilitation & Convening', href: '/work/facilitation-convening' },
      { name: 'Film & Resources', href: '/work/film-resources' },
    ]
  },
  {
    name: 'Sectors',
    href: '/sectors',
    dropdown: [
      { name: 'Why These Sectors', href: '/sectors/why-these-sectors' },
      { name: 'Faith Leaders & Communities', href: '/sectors/faith-leaders-communities' },
      { name: 'Higher Education', href: '/sectors/higher-education' },
    ]
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white">
      {/* Top Tier - Utility Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>(516) 206-2480</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>elie@cohortlearninglabs.org</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>Serving teams internationally</span>
              </div>
            </div>

            {/* Utility Links */}
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                Blog
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-purple-600 transition-colors">
                Resources
              </Link>
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-3 py-1 text-xs font-medium rounded hover:bg-purple-700 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Tier - Primary Navigation */}
      <div className="bg-white">
        <nav className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 text-decoration-none">
              <div className="w-9 h-9 bg-purple-600 rounded-md flex items-center justify-center text-white p-1.5">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  {/* Chair 1 (top) */}
                  <rect x="11" y="2" width="2" height="6" rx="0.5"/>
                  <rect x="10" y="7" width="4" height="1.5" rx="0.3"/>
                  {/* Chair 2 (top-right) */}
                  <rect x="17.5" y="5" width="2" height="6" rx="0.5" transform="rotate(60 18.5 8)"/>
                  <rect x="16.8" y="9.8" width="4" height="1.5" rx="0.3" transform="rotate(60 18.8 10.5)"/>
                  {/* Chair 3 (bottom-right) */}
                  <rect x="17.5" y="13" width="2" height="6" rx="0.5" transform="rotate(120 18.5 16)"/>
                  <rect x="16.8" y="12.7" width="4" height="1.5" rx="0.3" transform="rotate(120 18.8 13.5)"/>
                  {/* Chair 4 (bottom) */}
                  <rect x="11" y="16" width="2" height="6" rx="0.5" transform="rotate(180 12 19)"/>
                  <rect x="10" y="15.5" width="4" height="1.5" rx="0.3" transform="rotate(180 12 16.25)"/>
                  {/* Chair 5 (bottom-left) */}
                  <rect x="4.5" y="13" width="2" height="6" rx="0.5" transform="rotate(240 5.5 16)"/>
                  <rect x="3.8" y="12.7" width="4" height="1.5" rx="0.3" transform="rotate(240 5.8 13.5)"/>
                  {/* Chair 6 (top-left) */}
                  <rect x="4.5" y="5" width="2" height="6" rx="0.5" transform="rotate(300 5.5 8)"/>
                  <rect x="3.8" y="9.8" width="4" height="1.5" rx="0.3" transform="rotate(300 5.8 10.5)"/>
                  {/* Center circle (table) */}
                  <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
                </svg>
              </div>
              <div>
                <div className="text-gray-900 text-xl font-semibold">Cohort Learning Labs</div>
                <span className="text-gray-600 text-xs font-normal block -mt-0.5">Collaborative Learning in the Age of AI</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center space-x-1 text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors duration-150 py-2">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-40"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-150"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors duration-150 py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-purple-700 transition-colors duration-150"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
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

          {/* Mobile Navigation */}
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
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-purple-600 transition-colors duration-150"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-4 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-8 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors duration-150"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-4 pt-4">
                    <Link
                      href="/contact"
                      className="block w-full bg-purple-600 text-white px-4 py-3 text-base font-medium rounded-md text-center hover:bg-purple-700 transition-colors duration-150"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}
