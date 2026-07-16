# Cohort Learning Labs

Cohort Learning Labs helps professional teams adopt AI thoughtfully through collaborative learning, practical implementation, and responsible human oversight.

Production: [https://www.cohortlearninglabs.org](https://www.cohortlearninglabs.org)

## Application

This repository contains the Cohort Learning Labs website, built as a Next.js 15 application with TypeScript and Tailwind CSS.

Live route inventory:

Primary public routes:

- `/`
- `/about`
- `/services`
- `/pricing`
- `/contact`

Retained direct-access routes that are intentionally omitted from the site navigation and sitemap:

- `/our-approach`
- `/values`

Legacy redirect routes:

- `/about-elie` redirects to `/about`
- `/testimonials` redirects to `/about`

The previous Blog and ebook materials are intentionally unavailable while their content and publishing details are reviewed. Contact and newsletter APIs are not implemented.

## Local development

Requirements: a current Node.js release supported by Next.js 15 and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npx tsc --noEmit
npm run build
```

## Deployment

The GitHub repository is connected to Vercel. Pull requests may receive automatic preview deployments. Changes merged to `main` are deployed through the connected production workflow.

Do not trigger a manual production deployment for ordinary content changes.
