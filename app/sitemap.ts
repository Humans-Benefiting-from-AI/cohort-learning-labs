import type { MetadataRoute } from 'next'
import { connection } from 'next/server'
import { isIntroductionOpen } from '@/lib/introduction'
import { SITE_URL, siteRoutes } from '@/lib/routes'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Request time, not build time: /introduction leaves the sitemap once the
  // session has ended, without waiting for another deploy.
  await connection()

  const routes = siteRoutes.filter(
    (route) => route.href !== '/introduction' || isIntroductionOpen()
  )

  // No lastModified: it would be the request date on every fetch, telling
  // crawlers every page changed whenever the sitemap was read.
  return routes.map((route) => ({
    url: `${SITE_URL}${route.href}`,
    changeFrequency: 'monthly',
    priority: route.priority,
  }))
}
