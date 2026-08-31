type MarkProps = {
  className?: string
}

/**
 * Six nodes on a ring; the bottom-left one is filled.
 * The individual among the others.
 */
export default function Mark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="3.6" r="1.4" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="19.3" cy="7.8" r="1.4" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="19.3" cy="16.2" r="1.4" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="20.4" r="1.4" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="4.7" cy="16.2" r="1.4" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="4.7" cy="7.8" r="2.9" fill="currentColor" />
    </svg>
  )
}
