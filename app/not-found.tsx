import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-padding border-b border-rule bg-ground">
      <div className="container-custom">
        <div className="rail">
          <p className="rail-label">404</p>
          <div>
            <h1 className="max-w-[14ch] font-serif text-[44px] leading-[0.96] tracking-[-0.015em] text-ink min-[480px]:text-[56px] lg:text-[72px]">
              This page is not here.
            </h1>
            <p className="mt-8 max-w-[42ch] font-serif text-[19px] leading-[1.55] text-ink-soft lg:text-[23px]">
              The page you were following may have moved. Return home, or read what a session is
              like.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link
                href="/"
                className="bg-accent px-7 py-[15px] font-sans text-[14px] font-medium text-accent-on transition-colors duration-150 hover:bg-accent-hover"
              >
                Return home
              </Link>
              <Link
                href="/services"
                className="border-b border-[#b9b1a2] pb-0.5 font-sans text-[14px] text-ink-muted transition-colors duration-150 hover:text-accent-hover"
              >
                A session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
