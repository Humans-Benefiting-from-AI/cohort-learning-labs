import Link from 'next/link'
import { consultationHref } from '@/lib/booking'

export default function ConsultationLink({
  className,
  children,
  onClick,
}: {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link href={consultationHref} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}
