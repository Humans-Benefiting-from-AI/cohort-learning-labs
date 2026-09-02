# Handoff: cohortlearninglabs.org site redesign

## Overview

A restructure and rewrite of the Cohort Learning Labs marketing site. Three things change:

1. **The site shrinks from nine public pages to five.** Home, A session, Elie Schulman, FAQ, Start a conversation (plus Privacy, unchanged).
2. **The method is stated explicitly for the first time.** It is a T-group. Each cohort opens by collectively agreeing on a "stimulus" — always a relationship (marriage, parent to child, child to parent, employee to employer), arriving as a text, a topic or a skill. Members' reactions to the stimulus and to each other are the curriculum.
3. **The voice changes.** Plain, concrete, first-person where possible. The organising idea is Pirkei Avot 2:6 — *לא הביישן למד, ולא הקפדן מלמד*, "A bashful person cannot learn, nor can an impatient person teach" — read as the facilitator's commitment (nobody is hurried) rather than a diagnosis of the visitor. The About page leads with Elie's own account of sitting in a group for two years without speaking.

Target audience: an individual professional considering an open cohort. The site's job is to filter for the right kind of member, not to maximise signups.

## About the design files

The files in `designs/` are **design references created in HTML** — prototypes showing intended layout, type, colour and copy. They are not production code to copy directly.

The task is to **recreate them inside the existing Next.js 16 + TypeScript + Tailwind application** at `Humans-Benefiting-from-AI/cohort-learning-labs`, using its established patterns: `app/` route directories, the shared `components/Header.tsx` and `components/Footer.tsx`, the `lib/routes.ts` route inventory, and the Tailwind theme in `tailwind.config.js`. Every colour in these prototypes already exists as a Tailwind token in that config — use the token, not the hex.

The prototypes are written with inline styles and a small runtime (`designs/support.js`) purely so they render standalone in a browser. Ignore both. Read them for layout, spacing, type and copy.

## Fidelity

**High fidelity** for the five page designs — final colours, typography, spacing and copy, taken from the current site's own design language so they drop into the existing Tailwind theme unchanged.

**Low fidelity** for `designs/Homepage wireframes.dc.html`, which holds the exploration that led here (five rounds, thirteen options, newest at top). Included for context only; do not implement it.

`designs/Homepage - current.dc.html` is a faithful recreation of the live homepage as of this work, for before/after comparison.

## Route changes

`lib/routes.ts` is the single source of truth for the header nav, footer list and sitemap. Rewrite `siteRoutes` to:

| name | href | inHeader | inFooter | priority |
| --- | --- | --- | --- | --- |
| Home | `/` | — | — | 1 |
| A session | `/services` | yes | yes | 0.9 |
| Elie Schulman | `/about` | yes | yes | 0.9 |
| FAQ | `/faq` | yes | yes | 0.7 |
| Start a conversation | `/contact` | — | — | 0.7 |
| Privacy | `/privacy` | — | — | 0.3 |

Removed routes and what to do with them:

- **`/the-question`** — content folded into the homepage hero and into section 05 of A session. Redirect to `/services`.
- **`/where-it-applies`** — content folded into homepage section 05 (Ways to join). Redirect to `/`. Note `/illustrative-engagement` currently redirects here; point it at `/` too.
- **`/pricing`** — deleted. Price now appears in the cohort table on the homepage and contact page. Redirect to `/contact`.
- **`/writing`** — deleted. Redirect to `/`.
- **`/our-approach`** and **`/values`** — already contained (they call `notFound()` and set `robots: { index: false }`, enforced by `scripts/validate-site.mjs`). Delete the stubs and remove the containment assertions from the validator, or leave both exactly as they are. Do not add them to navigation.
- **`/about-elie`** and **`/testimonials`** — keep the existing redirects to `/about`.

`scripts/validate-site.mjs`, `app/sitemap.ts` and `app/robots.ts` all read `lib/routes.ts`, so they follow automatically — but run `npm run check` early, since the validator asserts invariants about the contained routes.

## Global shell

Unchanged from the current site. Both components already exist; only the nav items they render change (via `lib/routes.ts`).

**Header** (`components/Header.tsx`) — `border-b border-rule bg-ground`, inner `container-custom`, row `h-[88px]` with `justify-between`. Left: `<Mark className="h-[30px] w-[30px] shrink-0 text-accent" />` then a two-line lockup — `font-serif text-[23px] font-medium leading-[1.15] tracking-[0.01em] text-ink` over `font-sans text-[10.5px] uppercase tracking-[0.2em] text-faint mt-[3px]` reading "Six to eight people, thinking out loud". Right: `headerRoutes` as `font-sans text-[13px] tracking-[0.02em] text-ink-muted hover:text-accent-hover`, gap `30px`, then the consultation link with `border-b border-accent pb-[3px] text-accent`. Mobile menu behaviour unchanged.

**Footer** (`components/Footer.tsx`) — `bg-ink text-onink`, three columns `md:grid-cols-[2fr_1fr_1.2fr]`, gap 14. Unchanged apart from the shorter page list.

**Body** — `min-h-screen bg-ground`, `font-serif text-ink antialiased`. Fonts stay `EB_Garamond` (serif, normal + italic) and `Space_Grotesk` (sans) via `next/font/google`.

## Page structures

Every page uses the existing `.rail` pattern from `app/globals.css`: `grid gap-y-4 lg:grid-cols-[150px_1fr] lg:gap-x-12`, with a `.rail-label` in the left column (`font-sans text-[11px] uppercase tracking-[0.2em] text-faint`) reading e.g. "01 — What the group agrees on". Sections alternate `bg-ground` / `bg-paper` with `border-b border-rule`, and use `.section-padding` (`py-14 lg:py-[88px]`) unless noted.

Section backgrounds alternate strictly, with exactly two inversions per page at most: one `bg-ink` section and the closing `bg-accent` CTA.

---

### 1. Home — `app/page.tsx`

Replaces the current ten-section homepage with six sections.

**Hero** (`bg-ground`, `py-14 lg:pb-20 lg:pt-24`), rail label "Start here".
- `h1`, `max-w-[20ch] font-serif text-[44px] leading-[0.96] tracking-[-0.015em] text-ink min-[480px]:text-[56px] lg:text-[88px]`: "Most people spend the first few weeks deciding whether to speak."
- Two-column block `mt-11 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14`. Left: `max-w-[46ch] font-serif text-[19px] leading-[1.55] text-ink-soft lg:text-[23px]` — "That is allowed here, and it is not wasted time. Six to eight people meet by video for ninety minutes, week after week, and study the one thing none of us can see on our own: what we are actually like with other people." Right: `border-l border-rule pl-6 pt-1.5 font-sans text-[14px] leading-[1.75] text-muted` — "No curriculum to get through. No agreement to arrive at. The group chooses what it will look at, and nobody is hurried."
- Buttons `mt-12 flex flex-wrap items-center gap-5`: primary `bg-accent px-7 py-[15px] font-sans text-[14px] font-medium text-accent-on hover:bg-accent-hover` → `/contact`, label "Schedule a 30-minute consultation"; secondary `border-b border-[#b9b1a2] pb-0.5 font-sans text-[14px] text-ink-muted hover:text-accent-hover` → `/services`, label "Read what a session looks like".
- Meta line `mt-9 font-sans text-[12.5px] tracking-[0.06em] text-faint`: "Facilitated by Elie Schulman · Groups meet by video · Open cohorts and private groups".

**01 — What the group agrees on** (`bg-paper`). Lead `max-w-[50ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]`: "The first thing you do together is choose a relationship to look at." Two body paragraphs at `text-[19px] lg:text-[21px] leading-[1.62] text-ink-soft`, `max-w-[66ch]`, gap `22px`. Then a four-cell strip: `mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border border-rule`, each cell `bg-ground p-5` holding `font-sans text-[11px] uppercase tracking-[0.16em] text-accent` — Marriage / Parent to child / Child to parent / Employee to employer.

**02 — One hour of one group** (`bg-ink text-paper`, `py-14 lg:py-24`). `h2 max-w-[26ch] font-serif text-[36px] leading-[1.08] tracking-[-0.01em] text-paper lg:text-[52px]`: "Ninety minutes, and nothing we brought in from outside." Then a five-row session note in a `border border-rule-dark` box; each row `grid lg:grid-cols-[88px_1fr_1fr] gap-x-7 items-baseline border-b border-[#262825] last:border-b-0 px-7 py-5` with timestamp `font-sans text-[12px] tracking-[0.08em] text-faint`, event `font-serif text-[20px] leading-[1.5] text-paper`, observation `font-sans text-[13.5px] leading-[1.65] text-onink`. Row three's event text is `text-accent-light`. Rows: 00:12 / 00:19 / 00:28 / 00:37 / 01:14 — copy verbatim from the prototype. Closing paragraph `mt-8 max-w-[58ch] text-[19px] lg:text-[21px] leading-[1.62] text-onink`.

**03 — What is asked of you** (`bg-ground`). Lead line, then six numbered norms as `ul grid md:grid-cols-2 md:gap-x-14`, each `li grid grid-cols-[44px_1fr] items-baseline gap-2 border-t border-rule py-5` with `font-sans text-[12px] tracking-[0.12em] text-accent` numerals. Closing paragraph about half a thought said early.

**04 — Facilitation** (`bg-paper`). `grid items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-12`. Left: `next/image` of `/images/elie-schulman.jpg`, `width={712} height={1083}`, `sizes="(min-width: 1024px) 280px, 100vw"`, `className="h-auto w-full [filter:grayscale(0.15)]"`. Right: `h2 max-w-[26ch] text-[36px] lg:text-[44px] leading-[1.1] tracking-[-0.01em]` — "Elie Schulman sat in a group for two years without speaking." Two paragraphs, then the maxim as a pull quote `max-w-[44ch] border-l border-accent pl-6 font-serif text-[24px] italic leading-[1.4] text-ink` with an attribution line `font-sans text-[11px] uppercase tracking-[0.18em] text-faint pl-[25px]` reading "Pirkei Avot 2:6", then a link to `/about`.

**05 — Ways to join** (`bg-ground`). Two cards `grid gap-12 md:grid-cols-2 md:gap-14`, each `border-t-2 border-ink pt-6` with an `font-sans text-[11px] uppercase tracking-[0.18em] text-accent` eyebrow (Open cohort / Private group), `h2 text-[28px] lg:text-[32px] leading-[1.22]`, and a `text-[19px] lg:text-[20px] leading-[1.6] text-ink-soft` paragraph. Below, the **cohort table** — see "Cohort table" below. Footnote `mt-5 font-sans text-[12.5px] tracking-[0.04em] text-faint`: "Everyone speaks with Elie for thirty minutes before joining a group."

**06 — Begin** (`bg-accent text-accent-on`, `py-14 lg:py-[104px]`), rail label in `text-accent-pale`. `h2 max-w-[22ch] text-[36px] lg:text-[60px] leading-[1.05] tracking-[-0.015em]`: "If it takes you a while to speak, that is allowed here." Paragraph `text-accent-prose`, then a `bg-accent-on px-[30px] py-4 font-sans text-[14px] font-medium text-accent hover:bg-[#efe6dd]` button to `/contact`.

---

### 2. A session — `app/services/page.tsx`

Eight sections. This is the page that carries the method in full.

- **Hero** (`bg-ground`) — `h1 lg:text-[88px]` "Ninety minutes, once a week, with the same six people." Two-column intro as on the homepage; the right column names the method: "The method is a T-group — a training group. It has been practised for decades in psychoanalytic and organisational settings. What follows is what it actually feels like."
- **01 — Session zero** (`bg-paper`) — the agreed stimulus, always a relationship; Elie neither chooses it nor breaks the tie, and reaching agreement is itself the first hour of material. Then a four-cell `grid md:grid-cols-4 gap-px bg-rule border border-rule` where each `bg-ground p-[22px]` cell pairs the eyebrow (Marriage / Parent to child / Child to parent / Employee to employer) with an example line at `font-serif text-[18px] leading-[1.45] text-ink-soft`. Footnote: "Illustrative. Each cohort chooses its own."
- **02 — The ninety minutes** (`bg-ground`) — five-row arc table in a `border border-rule bg-paper` box, rows `grid lg:grid-cols-[74px_minmax(120px,200px)_minmax(0,1fr)] gap-x-5 px-7 py-[22px] border-b border-rule-warm last:border-b-0`: 00:00 Check-in and agreements / 00:10 Whatever is live / 00:35 Trying something / 01:05 What that was like / 01:20 How we learned it. Closing paragraph describes the short repeating cycle (something happens → someone names it → the reading is tested → somebody tries a different move).
- **03 — One hour, in the room** (`bg-ink text-paper`) — six timestamped lines as `grid grid-cols-[72px_1fr] gap-x-6 items-baseline`, event text `font-serif text-[22px] leading-[1.5]`; the 00:28 silence line is `text-accent-light`. Closing paragraph: the text was the occasion; by minute twenty the six people were the subject.
- **04 — What is asked of you** (`bg-paper`) — the instruction ("Put the thoughts and feelings you are having at the time into words") plus six norms as a single-column `ul`, rows `grid grid-cols-[64px_1fr] border-t border-rule py-[22px]`.
- **05 — What keeps coming up** (`bg-ground`) — six recurring questions, `font-serif text-[24px] lg:text-[29px] italic leading-[1.35] text-ink`, in the same `grid-cols-[64px_1fr]` rows. This is the surviving content of the deleted `/the-question` page.
- **06 — The facilitator's part** (`bg-paper`) — photo + text, same geometry as the homepage facilitation block; ends on the maxim and a link to `/about`.
- **07 — Two things it is not** (`bg-ground`) — two `border-t-2 border-ink pt-6` cards: Not therapy (with the standing disclaimer) and Not a debate.
- **08 — Begin** (`bg-accent`) — "The next cohorts start in October." CTA to `/contact`.

---

### 3. Elie Schulman — `app/about/page.tsx`

Leads with authenticity: his own words about the two years of silence, before any credentials.

- **Hero** (`bg-ground`) — `h1 max-w-[22ch] lg:text-[88px]`: "For about two years, I did not open my mouth." Directly beneath, `mt-8 font-sans text-[12.5px] tracking-[0.06em] text-faint`: "Elie Schulman, in conversation with David Bashevkin · 18Forty". Then the two-column intro; the right column reads "This is why nobody in a Cohort Learning Labs group is hurried, called on, or drawn out before they are ready."
- **01 — In his own words** (`bg-paper`) — `grid lg:grid-cols-[280px_1fr] gap-12`, photo left. Right: two verbatim `blockquote`s from the 18Forty interview — the first at `font-serif text-[26px] leading-[1.45] text-ink max-w-[56ch]`, the second at `text-[21px] leading-[1.62] text-ink-soft` with `border-l border-accent pl-6`. **Verify both quotations against the published episode before shipping.**
- **02 — The way in** (`bg-ink text-paper`) — `h2 lg:text-[52px]` "Nobody dragged him out of it. Three of them kept asking." Two more verbatim quotes (the second in `text-onink`). Members' names are deliberately omitted — the quote reads "It was three people …". Closing paragraph in `font-sans text-[14px] leading-[1.8] text-accent-light`.
- **03 — What he took from it** (`bg-ground`) — the instruction he was given, still the instruction; he will not call on you, hurry you or supply your sentence. Ends on the maxim pull quote with the Avot attribution.
- **04 — Where the training comes from** (`bg-paper`) — two `border-t-2 border-ink pt-6` cards: five years with Louis Ormont (Monday mornings 7:45 in midtown until Ormont died at 90; a group of eighteen, Elie twenty-two, next youngest mid-fifties), then twelve more years — six with Michael Brook, six with Sean Grover, both named by Joan Ormont. Credentials sit here, deliberately late.
- **05 — Begin** (`bg-accent`) — "If it takes you two years to speak, that is allowed here."

---

### 4. FAQ — `app/faq/page.tsx`

Fifteen questions in three rail-labelled groups, all in `max-w-[66ch]` single columns. Each item: `border-t border-rule py-[26px]`, question `font-serif text-[26px] leading-[1.35] text-ink`, answer `mt-3 font-serif text-[20px] leading-[1.62] text-ink-soft`. Sections use the shorter `py-[72px]` rather than `.section-padding`.

- **01 — What this is** (`bg-paper`): Is this therapy? / Is it a course? / Is it religious? / What does "stimulus" mean?
- **02 — Being in the room** (`bg-ground`): What if I say nothing for weeks? / What if I talk too much? / What if I dislike someone in the group? / Who else is in it? / Is it confidential?
- **03 — Practicalities** (`bg-paper`): How long is the commitment? / What if I miss a week? / What does it cost? / Can I bring my own team? / Is there an application?
- **Closing** (`bg-accent`): "Bring the question to the consultation."

Answers carry real weight — the silence answer refers to Elie's two years, the confidentiality answer states sessions are not recorded, the application answer says not everyone is placed. Keep them verbatim; they do the filtering.

If it is worth the effort, mark this page up with FAQPage JSON-LD. The current site has no structured data, so this is additive and optional.

---

### 5. Start a conversation — `app/contact/page.tsx`

No form. The current page already uses a `mailto:` link and the contact/newsletter APIs are not implemented; keep it that way.

- **Hero** (`bg-ground`) — `h1 max-w-[20ch] lg:text-[80px]`: "Write a few lines. Elie answers them himself." Intro explains there is no form; the sidebar notes everyone speaks with Elie for thirty minutes first and not everyone is placed. Buttons: primary `mailto:elie@cohortlearninglabs.org?subject=Cohort%20Learning%20Labs` styled as the accent button with the address as its label; secondary `tel:+15162062480`.
- **01 — What happens next** (`bg-paper`) — three rows in a `border border-rule bg-ground` box, `grid lg:grid-cols-[36px_minmax(120px,180px)_minmax(0,1fr)] gap-x-5 px-7 py-6`: 01 You write / 02 Thirty minutes by video / 03 A cohort, or not yet.
- **02 — Cohorts forming** (`bg-ground`) — the cohort table without the Apply column (this *is* the apply page), plus the footnote about Beit Shemesh and members joining from anywhere.
- **Begin** (`bg-accent`) — "Say the thing you would not usually put in a first email." Button "Write to Elie" → the same `mailto:`.

---

## Cohort table

Appears on Home (five columns) and Start a conversation (four — no Apply link). Container `border border-rule bg-paper`; rows `border-b border-rule-warm last:border-b-0`.

Home columns: day/time (`font-serif text-[19px] leading-[1.4] text-ink`) · duration and start date (`font-sans text-[13.5px] text-muted`) · seats remaining (`text-accent` when scarce, `text-muted` otherwise) · monthly price (`text-muted`) · Apply link (`border-b border-rule pb-0.5 text-accent`).

Use a responsive grid rather than fixed pixel tracks. The prototype settled on `grid-cols-[minmax(130px,1fr)_148px_66px_84px_64px]` with `gap-x-[14px]` and `px-5 py-5` at `lg`, stacking to two columns below `lg`. Getting this wrong causes horizontal overflow on ~900px laptops — the fixed tracks plus gaps plus row padding must fit inside `1240px − 80px page padding − 150px rail − 48px rail gap`.

**All figures in the prototypes are placeholders.** Dates read 14 and 16 October, seat counts 2 and 4, prices `$— / month`. Replace with real values, and decide whether they come from a small data file (a `lib/cohorts.ts` array is the natural fit next to `lib/routes.ts`) rather than being hard-coded into two pages.

## Interactions and behaviour

Deliberately almost none. No accordions on the FAQ (all answers visible; better for scanning and for search), no carousels, no scroll-triggered animation, no modals.

- Links and buttons: `transition-colors duration-150` only, matching the existing site.
- Header mobile menu: unchanged (`framer-motion` height/opacity, 0.15s).
- Focus states: unchanged — `:focus-visible` gets `ring-2 ring-accent ring-offset-2` from `globals.css`.
- The `prefers-reduced-motion` block in `globals.css` stays.

## Responsive behaviour

The prototypes are drawn at desktop only. Follow the existing site's breakpoint discipline:

- The rail collapses below `lg` — the label becomes an eyebrow above the content (already handled by `.rail`).
- Hero `h1` scales `44px → 56px (min-[480px]) → 88px (lg)`. Section leads `26px → 30px`. Body `19px → 21px`.
- All two-column blocks (`lg:grid-cols-[1.15fr_0.85fr]`, `[280px_1fr]`, `md:grid-cols-2`) stack.
- The cohort table becomes a stacked card per cohort below `lg`.
- The `bg-ink` session-note rows collapse from three columns to a stacked block, with the observation indented `pl-4` as the current site does.

## Design tokens

All already defined in `tailwind.config.js`. Use the token names.

**Colour** — `ground` `#ede9e0` · `paper` `#f6f4ee` · `ink` `#171a1c`, `ink-soft` `#33312b`, `ink-muted` `#3c3a34` · `muted` `#5c5850` · `faint` `#8a8377` · `rule` `#cfc9bc`, `rule-warm` `#dcd6c9`, `rule-dark` `#383a35` · `onink` `#c9c3b6`, `onink-strong` `#e5e0d5` · `accent` `#9a4f36`, `accent-hover` `#773b29`, `accent-light` `#c98a6f`, `accent-pale` `#e6c4b5`, `accent-prose` `#f0d9cf`, `accent-on` `#f7f2ec`. The `primary` 50–900 ramp is retained for pages outside this redesign.

One raw hex appears in the prototypes and in the current homepage: `#b9b1a2` for the secondary hero link's underline, and `#262825` for row dividers inside `bg-ink` boxes. Promote both to tokens or leave them inline, consistently.

**Type** — serif `var(--font-serif)` (EB Garamond) for all headings and body; sans `var(--font-sans)` (Space Grotesk) for labels, eyebrows, metadata, buttons and links. Sizes in use: display 80/88 · h2 44/52/60 · section lead 26/30 · body 19/21 · secondary body 20 · sans body 13.5/14 · label 11/12/12.5. Tracking: `-0.015em` on display, `-0.01em` on h2, `0.16–0.2em` on uppercase labels.

**Spacing** — page `max-w-container` (1240px) with `px-6 lg:px-10`. Section `py-14 lg:py-[88px]`, hero `lg:pt-24 lg:pb-20`, CTA `lg:py-[104px]`, FAQ groups `py-[72px]`. Rail gap `48px`. Prose stacks use `gap-[22px]`.

**Borders and shadows** — 1px `rule` hairlines, `border-t-2 border-ink` on card tops, no border radius anywhere, no shadows. The design has no rounded corners; do not add any.

## Assets

- `public/images/elie-schulman.jpg` (712 × 1083) — already in the repo; used on Home, A session and Elie Schulman with `[filter:grayscale(0.15)]`. Copy included at `designs/public/images/`.
- The six-node ring mark — `components/Mark.tsx`, already in the repo. Unchanged.
- Icons — `lucide-react`, already a dependency. Only `Menu`, `X` (header) and `Linkedin` (footer) are used.
- Hebrew text — the maxim is set in the serif on the prototypes' wireframe pages using Frank Ruhl Libre. On the five production pages the Hebrew appears only in the FAQ answer and as transliterated English elsewhere, so **no additional font is needed**. If you later set the Hebrew in display type, add a Hebrew face via `next/font/google` rather than relying on a system fallback.

## Copy

Treat the copy in the prototypes as final and lift it verbatim. It was written to filter rather than to persuade, and the specificity is the point — "Nine seconds in which nobody speaks. Nobody fills it." should not be smoothed into "we create space for reflection".

Two items need the client's confirmation before launch: the two 18Forty quotations on the Elie page (check against the published episode), and every number in the cohort tables.

## Files

In `designs/`:

| File | What it is |
| --- | --- |
| `Homepage v2.dc.html` | Home — implement as `app/page.tsx` |
| `A session.dc.html` | Implement as `app/services/page.tsx` |
| `About Elie.dc.html` | Implement as `app/about/page.tsx` |
| `FAQ.dc.html` | Implement as `app/faq/page.tsx` |
| `Start a conversation.dc.html` | Implement as `app/contact/page.tsx` |
| `Homepage - current.dc.html` | Recreation of the live homepage, for comparison |
| `Homepage wireframes.dc.html` | Low-fi exploration, context only — do not implement |
| `support.js` | Prototype runtime. Ignore. |
| `public/images/elie-schulman.jpg` | The photograph, already in the repo |

Open any file directly in a browser.

## Before opening the pull request

`main` is protected by the Protect main ruleset — changes need a pull request and a passing Vercel check. Run the four CI commands in order, as the repo's README specifies:

```bash
npm run check         # structural invariants — will complain first if lib/routes.ts and the validator disagree
npm run lint
npm run format:check
npm run build
```

Do not add static `sitemap.xml` or `robots.txt` files to `public/`; those routes are generated and the validator rejects shadowing files.
