import type { MetadataRoute } from 'next'
import { SITE_URL, siteRoutes } from '@/lib/routes'

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified: it would be the build date on every deploy, telling
  // crawlers every page changed whenever any page did.
  return siteRoutes.map((route) => ({
    url: `${SITE_URL}${route.href}`,
    changeFrequency: 'monthly',
    priority: route.priority,
  }))
}
