/**
 * Structural checks that the type system and the route inventory cannot make
 * on their own. The route list itself lives in lib/routes.ts and feeds the
 * header, the footer and the generated sitemap, so this script no longer
 * compares copies of it — it guards the invariants around it.
 */
import { existsSync, readFileSync } from 'node:fs'

const read = (file) => readFileSync(file, 'utf8')
const failures = []
const fail = (message) => failures.push(message)

const routes = read('lib/routes.ts')
const layout = read('app/layout.tsx')
const header = read('components/Header.tsx')
const footer = read('components/Footer.tsx')

// A static file in public/ shadows the generated route of the same name, which
// would silently pin the sitemap or robots rules to whatever was committed.
for (const shadow of ['public/sitemap.xml', 'public/robots.txt']) {
  if (existsSync(shadow)) {
    fail(`${shadow} would shadow the generated route — delete it`)
  }
}

// The nav and footer must read the inventory rather than keep their own lists.
if (!header.includes("from '@/lib/routes'") || /const navigation = \[/.test(header)) {
  fail('components/Header.tsx must take its navigation from lib/routes.ts')
}
if (!footer.includes("from '@/lib/routes'") || /const pages = \[/.test(footer)) {
  fail('components/Footer.tsx must take its page list from lib/routes.ts')
}

// Contained pages stay reachable by direct link but out of navigation, out of
// the sitemap, and out of the index.
for (const contained of ['/our-approach', '/values']) {
  const file = `app${contained}/page.tsx`
  const source = read(file)
  if (!source.includes('notFound()') || !source.includes('index: false')) {
    fail(`${file} must remain contained and unindexed`)
  }
  if (routes.includes(`href: '${contained}'`)) {
    fail(`${contained} must not be listed as a site route in lib/routes.ts`)
  }
}

// Retired URLs must issue a permanent redirect (308), not redirect()'s 307.
// A temporary redirect leaves the old path as canonical, so crawlers keep it.
const retiredRedirects = [
  ['app/the-question/page.tsx', '/services'],
  ['app/pricing/page.tsx', '/contact'],
  ['app/where-it-applies/page.tsx', '/'],
  ['app/writing/page.tsx', '/'],
  ['app/illustrative-engagement/page.tsx', '/'],
  ['app/about-elie/page.tsx', '/about'],
  ['app/testimonials/page.tsx', '/about'],
]
for (const [file, destination] of retiredRedirects) {
  const source = read(file)
  if (!source.includes('permanentRedirect(') || !source.includes(`'${destination}'`)) {
    fail(`${file} must permanently redirect to ${destination}`)
  }
}

// Keyboard users need the skip link and its target to survive every redesign.
if (!layout.includes('href="#main-content"') || !layout.includes('id="main-content"')) {
  fail('the skip link and its semantic main target must remain present')
}

// Scheduled cohorts close at a real instant. The ISO strings are the source
// of truth; these checks fail if a start is edited onto the wrong clock time
// or enrollment is hardcoded open again.
const cohortsSource = read('lib/cohorts.ts')
if (/seats:\s*'Open'/.test(cohortsSource)) {
  fail("lib/cohorts.ts must not hardcode seats: 'Open'; derive it from startsAt")
}
if (!/return now < Date\.parse\(startsAt\)/.test(cohortsSource)) {
  fail('enrollment must close at startsAt (now < startsAt)')
}

function cohortBlock(id) {
  const after = cohortsSource.split(`id: '${id}'`)[1]
  if (!after) {
    fail(`lib/cohorts.ts is missing cohort ${id}`)
    return ''
  }
  return after.split(/id: '/)[0]
}

function expectLocal(id, tz, hour, minute, day) {
  const block = cohortBlock(id)
  const iso = block.match(/startsAt: '([^']+)'/)?.[1]
  if (!iso) {
    fail(`${id} is missing startsAt`)
    return
  }
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date(iso))
  const get = (type) => parts.find((part) => part.type === type)?.value
  if (get('hour') !== hour || get('minute') !== minute || get('day') !== day) {
    fail(
      `${id} startsAt ${iso} should be ${hour}:${minute} on day ${day} in ${tz}, got day ${get('day')} ${get('hour')}:${get('minute')}`
    )
  }
}

expectLocal('tuesday-israel', 'Asia/Jerusalem', '19', '00', '13')
expectLocal('thursday-eastern', 'America/New_York', '08', '30', '15')

const tuesdayAt = Date.parse(
  cohortBlock('tuesday-israel').match(/startsAt: '([^']+)'/)?.[1] ?? ''
)
const thursdayAt = Date.parse(
  cohortBlock('thursday-eastern').match(/startsAt: '([^']+)'/)?.[1] ?? ''
)
if (Number.isNaN(tuesdayAt) || Number.isNaN(thursdayAt)) {
  fail('cohort startsAt values must be valid instants')
}
if (!(thursdayAt > tuesdayAt)) {
  fail('thursday cohort should start after the tuesday cohort')
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'))
  process.exit(1)
}

console.log('Site structure validation passed.')
