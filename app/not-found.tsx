import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">404</p>
          <h1 className="text-4xl font-bold text-primary-900 md:text-6xl">
            This page is not here.
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-700">
            The question you were following may have moved. Return to the central inquiry or
            begin again from the homepage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex rounded-md bg-accent px-7 py-3 font-semibold text-white hover:bg-accent-hover"
            >
              Return Home
            </Link>
            <Link
              href="/the-question"
              className="inline-flex rounded-md border border-primary-300 bg-white px-7 py-3 font-semibold text-primary-900 hover:bg-primary-100"
            >
              Explore the Question
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
