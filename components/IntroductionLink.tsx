import type { ReactNode } from 'react'
import Link from 'next/link'
import { connection } from 'next/server'
import { isIntroductionOpen } from '@/lib/introduction'

/**
 * Link to the free introduction. Absent once the session has ended, so the
 * homepage, cohorts page, and footer do not keep advertising it. `connection()`
 * reads the clock per request; a build-time date would leave the link up
 * until the next deploy.
 */
export default async function IntroductionLink({
  className,
  children,
  paragraphClassName,
}: {
  className?: string
  children: ReactNode
  paragraphClassName?: string
}) {
  await connection()
  if (!isIntroductionOpen()) return null

  const link = (
    <Link href="/introduction" className={className}>
      {children}
    </Link>
  )

  if (!paragraphClassName) return link
  return <p className={paragraphClassName}>{link}</p>
}

export async function IntroductionFooterLink({ name }: { name: string }) {
  await connection()
  if (!isIntroductionOpen()) return null

  return (
    <li>
      <Link
        href="/introduction"
        className="font-sans text-[13.5px] transition-colors duration-150 hover:text-accent-light"
      >
        {name}
      </Link>
    </li>
  )
}
