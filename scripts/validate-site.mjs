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

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'))
  process.exit(1)
}

console.log('Site structure validation passed.')
