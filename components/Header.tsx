'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ConsultationLink from '@/components/ConsultationLink'
import Mark from '@/components/Mark'
import { headerRoutes } from '@/lib/routes'

function visibleFocusable(root: HTMLElement) {
  return Array.from(
    root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
  ).filter((element) => element.getClientRects().length > 0)
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!mobileMenuOpen) return
    const nav = navRef.current
    if (!nav) return

    document.getElementById('mobile-navigation')?.querySelector<HTMLElement>('a[href]')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const items = visibleFocusable(nav)
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen])

  return (
    <header className="border-b border-rule bg-ground">
      <nav
        ref={navRef}
        className="container-custom"
        aria-label="Primary navigation"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && mobileMenuOpen) {
            setMobileMenuOpen(false)
            toggleRef.current?.focus()
          }
        }}
      >
        <div className="flex h-[88px] items-center justify-between">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-[14px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Mark className="h-[30px] w-[30px] shrink-0 text-accent" />
            <div>
              <div className="font-serif text-[20px] sm:text-[23px] font-medium leading-[1.15] tracking-[0.01em] text-ink">
                Cohort Learning Labs
              </div>
              <span className="mt-[3px] block font-sans text-[9px] sm:text-[10.5px] uppercase tracking-[0.12em] sm:tracking-[0.2em] text-faint">
                Six to eight people, thinking out loud
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-[30px] lg:flex">
            {headerRoutes.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="font-sans text-[13px] tracking-[0.02em] text-ink-muted transition-colors duration-150 hover:text-accent-hover"
              >
                {item.name}
              </Link>
            ))}
            <ConsultationLink className="border-b border-accent pb-[3px] font-sans text-[13px] tracking-[0.02em] text-accent transition-colors duration-150 hover:border-accent-hover hover:text-accent-hover">
              Schedule a consultation
            </ConsultationLink>
          </div>

          <button
            ref={toggleRef}
            type="button"
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="ml-2 min-h-11 min-w-11 shrink-0 p-2 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-ink" />
            ) : (
              <Menu className="h-5 w-5 text-ink" />
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          hidden={!mobileMenuOpen}
          role={mobileMenuOpen ? 'dialog' : undefined}
          aria-modal={mobileMenuOpen || undefined}
          aria-label={mobileMenuOpen ? 'Navigation menu' : undefined}
          className="border-t border-rule lg:hidden"
        >
          <div className="space-y-1 py-4">
            {headerRoutes.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="block px-4 py-3 font-sans text-[15px] text-ink-muted transition-colors duration-150 hover:text-accent-hover"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <ConsultationLink
                className="block w-full bg-accent px-4 py-3 text-center font-sans text-[15px] font-medium text-accent-on transition-colors duration-150 hover:bg-accent-hover"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule a consultation
              </ConsultationLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
