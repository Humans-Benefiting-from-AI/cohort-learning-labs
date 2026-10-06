# Cohort Learning Labs

Marketing site for [cohortlearninglabs.org](https://www.cohortlearninglabs.org). Next.js 16 App Router, TypeScript, Tailwind CSS. Production deploys from `main` on Vercel; do not trigger a manual production deploy for ordinary content changes.

## Commands

CI (`.github/workflows/quality.yml`, Node 20) runs these in order. Run the same locally before a PR:

```bash
npm ci
npm run check         # scripts/validate-site.mjs
npm run lint          # eslint ., next/core-web-vitals + next/typescript
npm run format:check  # prettier --check .
npm run build
```

- `npm run dev` — local server at http://localhost:3000
- `npm run format` — Prettier rewrite (`.prettierrc`: no semicolons, single quotes, `printWidth` 96)
- One file: `npx eslint path/to/file.tsx`, `npx prettier --write path/to/file.tsx`

There is no unit or e2e test runner.

## Architecture

`lib/routes.ts` is the public route inventory. Header nav, footer page list, and `app/sitemap.ts` all read it. Adding or renaming a public page is one entry there, plus `app/<path>/page.tsx`.

| Role                               | Where                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| Shell                              | `app/layout.tsx` — EB Garamond + Space Grotesk, skip link to `#main-content`, `Header`, `Footer` |
| Consultation CTAs                  | `components/ConsultationLink.tsx` → `/contact#book`                                              |
| Booking widget                     | `components/CalendlyEmbed.tsx` + `lib/booking.ts`                                                |
| Cohort dates/seats/prices          | `lib/cohorts.ts` → `components/CohortTable.tsx`                                                  |
| Illustrative session and norms     | `lib/session.ts` — homepage and `/services`                                                      |
| Introduction sunset                | `lib/introduction.ts` — `INTRODUCTION_ENDS_AT`                                                   |
| Structural invariants              | `scripts/validate-site.mjs` (`npm run check`)                                                    |
| Design prototypes (not production) | `design_handoff_site_redesign/designs/*.dc.html`                                                 |

Public pages: `/`, `/cohorts` (Join a cohort), `/introduction` (free introduction), `/services` (A session), `/about` (Elie Schulman), `/faq`, `/contact` (Start a conversation), plus `/privacy`. The site’s job is to filter for the right member, not to maximise signups.

`/introduction` stays in `siteRoutes` so the footer can list it, but it is time-limited. `INTRODUCTION_ENDS_AT` in `lib/introduction.ts` is 19:45 Israel on 8 October 2026. After that, the page says the session has passed and sets `robots: { index: false }`, the sitemap omits it, and `IntroductionLink` omits the homepage, cohorts, and footer links. Those checks call `connection()` so they run per request; because the footer renders one, pages are server-rendered rather than frozen at build time. Do not advertise the introduction as upcoming after that instant.

`design_handoff_site_redesign/` is layout/copy reference only. Recreate in the Next app with tokens; do not copy inline styles or `support.js`. Prettier ignores that folder.

## Routing rules

- **Contained:** `/our-approach` and `/values` stay reachable, call `notFound()`, set `robots: { index: false }`, and must not appear in `siteRoutes`. The validator fails the build otherwise.
- **Retired:** use `permanentRedirect()` (308), never `redirect()` (307):

  - `/the-question` → `/services`
  - `/pricing` → `/contact`
  - `/where-it-applies`, `/writing`, `/illustrative-engagement` → `/`
  - `/about-elie`, `/testimonials` → `/about`

- Do not add `public/sitemap.xml` or `public/robots.txt`; they would shadow `app/sitemap.ts` and `app/robots.ts`.
- Keep the skip link (`href="#main-content"`) and `id="main-content"` on `<main>`. Keep `data-scroll-behavior="smooth"` on `<html>` so Next 16 does not suppress CSS smooth scroll during route transitions.
- Header/footer must import `@/lib/routes` and must not keep a local `navigation` / `pages` array.

## Page UI

Redesigned pages use `.container-custom`, `.section-padding`, and `.rail` / `.rail-label` from `app/globals.css`. Sections alternate `bg-ground` / `bg-paper` with `border-b border-rule`. At most one `bg-ink` band and a closing `bg-accent` CTA per page.

Use Tailwind tokens from `tailwind.config.js` (`ground`, `paper`, `ink`, `accent`, `rule`, …), not prototype hex. Existing exceptions on the live pages: `#b9b1a2` (secondary underline) and `#efe6dd` (accent-button hover).

FAQ answers are all visible; do not introduce accordions. There is no contact form — Calendly first, `mailto:` fallback.

Consultation buttons and the header “Schedule a consultation” link must use `ConsultationLink`, not a raw `/contact` href.

## Booking

Slot availability lives in Calendly (Google Calendar connected on that event). Default URL is in `lib/booking.ts`; override with `NEXT_PUBLIC_CALENDLY_URL`. Treat blank/whitespace env as missing (`?.trim() || default`), not `??`.

`CalendlyEmbed` must call `Calendly.initInlineWidget` on mount (and after `widget.js` loads). The script’s auto-scan runs once, so a client navigation to `/contact` otherwise leaves an empty box until a full reload. The embed always renders: `CALENDLY_URL` falls back to the default event, and the mailto line under the widget is the email path. Do not add a branch that hides the embed when the URL is missing.

`NEXT_PUBLIC_GA_MEASUREMENT_ID` is optional; `GoogleAnalytics` omits the tag when unset.

## Voice

Plain, concrete copy. Recreate wording from the design handoff rather than inventing marketing language. Cohort table dates, seats, and prices in `lib/cohorts.ts` are operational data — edit that file, not hardcoded page copy. Open cohorts are four weekly 90-minute sessions for $500 USD total per member as a one-time package; private groups stay Quoted. `OPEN_COHORT_PRICE` is the only price string: the table, homepage, FAQ, cohorts page, contact page, and introduction page all read it. Open cohorts are six to eight people — do not write “six or seven” or “the six of you.” The illustrative session and the six norms live in `lib/session.ts` and are shared by the homepage and `/services`. Writing lives at elieschulman.com, not on this site. The mobile menu is not animated: Escape closes it and returns focus to the toggle; opening it moves focus to the first link and traps Tab inside the navigation.
