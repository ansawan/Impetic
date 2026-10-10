import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

const disallow = ['/admin/', '/api/admin/']

// Search and AI crawlers we explicitly welcome. Listing them makes the opt-in
// unambiguous for tools that look for a bot-specific group (e.g. Google-Extended).
const aiAndSearchBots = [
  'Googlebot',
  'Google-Extended',
  'GoogleOther',
  'Bingbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'meta-externalagent',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      { userAgent: aiAndSearchBots, allow: '/', disallow },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
