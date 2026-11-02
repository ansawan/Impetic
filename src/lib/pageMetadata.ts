import type { Metadata } from 'next'
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client'
import type { SeoData } from '@/lib/supabase/types'

// Page SEO edited in Admin → SEO lives in the `page_seo` table. The site is a static
// export, so it is read here at build time; every save in the admin triggers a rebuild
// (see supabase/auto-publish.sql), which is how admin edits reach the live pages.

let pageSeoCache: Promise<Map<string, SeoData>> | null = null

function loadPageSeo(): Promise<Map<string, SeoData>> {
  if (!pageSeoCache) {
    pageSeoCache = (async () => {
      const map = new Map<string, SeoData>()
      if (!isSupabaseConfigured()) return map
      try {
        const { data, error } = await supabase.from('page_seo').select('page_slug, seo')
        if (error) {
          console.warn(`page_seo not loaded, using built-in meta tags: ${error.message}`)
          return map
        }
        for (const row of data ?? []) map.set(row.page_slug, (row.seo ?? {}) as SeoData)
      } catch (e) {
        console.warn('page_seo not loaded, using built-in meta tags', e)
      }
      return map
    })()
  }
  return pageSeoCache
}

const text = (v?: string) => (typeof v === 'string' && v.trim() ? v.trim() : undefined)

// Returns the page's built-in metadata with any values the SEO team set in the admin on top.
// Empty admin fields keep the built-in value.
export async function withPageSeo(slug: string, fallback: Metadata): Promise<Metadata> {
  const seo = (await loadPageSeo()).get(slug)
  if (!seo) return fallback

  const title = text(seo.seo_title)
  const description = text(seo.meta_description)
  const canonical = text(seo.canonical_url)
  const ogTitle = text(seo.og_title) ?? title
  const ogDescription = text(seo.og_description) ?? description
  const ogImage = text(seo.og_image)

  const metadata: Metadata = { ...fallback }
  if (title) metadata.title = title
  if (description) metadata.description = description
  if (canonical) metadata.alternates = { ...fallback.alternates, canonical }
  if (ogTitle || ogDescription || ogImage) {
    metadata.openGraph = {
      ...fallback.openGraph,
      ...(ogTitle && { title: ogTitle }),
      ...(ogDescription && { description: ogDescription }),
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    }
  }
  if (ogTitle || ogDescription || ogImage || seo.twitter_card_type) {
    metadata.twitter = {
      card: seo.twitter_card_type || 'summary_large_image',
      ...(ogTitle && { title: ogTitle }),
      ...(ogDescription && { description: ogDescription }),
      ...(ogImage && { images: [ogImage] }),
    }
  }
  if (seo.noindex || seo.nofollow) {
    metadata.robots = { index: !seo.noindex, follow: !seo.nofollow }
  }
  return metadata
}
