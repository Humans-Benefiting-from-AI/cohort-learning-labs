/**
 * The site's route inventory, in one place.
 *
 * Everything that needs to know which pages exist reads this file: the header
 * nav, the footer list, the generated sitemap, and scripts/validate-site.mjs.
 * Adding a page means adding one entry here.
 */

export const SITE_URL = 'https://www.cohortlearninglabs.org'

export interface SiteRoute {
  /** Link text wherever the route is listed. */
  name: string
  href: string
  /** Appears in the header navigation. */
  inHeader?: boolean
  /** Appears in the footer page list. */
  inFooter?: boolean
  /** Sitemap priority. */
  priority: number
}

export const siteRoutes: SiteRoute[] = [
  { name: 'Home', href: '/', priority: 1 },
  {
    name: 'The question',
    href: '/the-question',
    inHeader: true,
    inFooter: true,
    priority: 0.9,
  },
  { name: 'A session', href: '/services', inHeader: true, inFooter: true, priority: 0.9 },
  {
    name: 'Ways to join',
    href: '/where-it-applies',
    inHeader: true,
    inFooter: true,
    priority: 0.9,
  },
  { name: 'Elie Schulman', href: '/about', inHeader: true, inFooter: true, priority: 0.8 },
  { name: 'Writing', href: '/writing', inFooter: true, priority: 0.6 },
  { name: 'FAQ', href: '/faq', inFooter: true, priority: 0.6 },
  { name: 'Engagements', href: '/pricing', priority: 0.6 },
  { name: 'Start a conversation', href: '/contact', priority: 0.7 },
  { name: 'Privacy', href: '/privacy', priority: 0.3 },
]

export const headerRoutes = siteRoutes.filter((route) => route.inHeader)
export const footerRoutes = siteRoutes.filter((route) => route.inFooter)

/**
 * Reachable by direct link but deliberately absent from navigation and the
 * sitemap. Their pages call notFound() and set robots index: false;
 * scripts/validate-site.mjs keeps them that way.
 */
export const containedRoutes = ['/our-approach', '/values']
