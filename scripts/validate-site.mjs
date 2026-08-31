import { readFileSync } from 'node:fs'

const requiredRoutes = ['/', '/the-question', '/services', '/where-it-applies', '/about', '/writing', '/faq', '/pricing', '/contact', '/privacy']
const sitemap = readFileSync('public/sitemap.xml', 'utf8')
const header = readFileSync('components/Header.tsx', 'utf8')
const layout = readFileSync('app/layout.tsx', 'utf8')
const contained = ['app/our-approach/page.tsx', 'app/values/page.tsx']

const failures = []

for (const route of requiredRoutes) {
  const url = `https://www.cohortlearninglabs.org${route === '/' ? '/' : route}`
  if (!sitemap.includes(`<loc>${url}</loc>`)) failures.push(`sitemap is missing ${route}`)
  const footerOnly = ['/faq', '/privacy', '/pricing', '/contact']
  if (route !== '/' && !footerOnly.includes(route) && !header.includes(`href: '${route}'`)) failures.push(`navigation is missing ${route}`)
}

if (!layout.includes('href="#main-content"') || !layout.includes('id="main-content"')) {
  failures.push('skip link and semantic main target must remain present')
}

for (const file of contained) {
  const source = readFileSync(file, 'utf8')
  if (!source.includes('notFound()') || !source.includes('index: false')) {
    failures.push(`${file} must remain contained and unindexed`)
  }
}

for (const legacy of ['/our-approach', '/values']) {
  if (sitemap.includes(legacy) || header.includes(`href: '${legacy}'`)) {
    failures.push(`${legacy} must not appear in navigation or sitemap`)
  }
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'))
  process.exit(1)
}

console.log('Site structure validation passed.')
