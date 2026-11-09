import type { NextConfig } from 'next'
import { execFileSync } from 'node:child_process'
import { LIVE_REDIRECTS } from './src/lib/redirects'

// One codebase, two hosts:
//   npm run build            -> Vercel (server rendering; admin edits go live instantly)
//   npm run build:hostinger  -> Hostinger static export in out/ (redirects come from public/.htaccess)
const isHostinger =
  process.env.DEPLOY_TARGET === 'hostinger' || process.env.npm_lifecycle_event === 'build:hostinger'

// Last git commit date of every file under src/app, captured once at build time so the
// sitemap keeps real lastmod dates even when it is regenerated later on the server.
function pageLastModified(): Record<string, string> {
  const dates: Record<string, string> = {}
  try {
    const log = execFileSync('git', ['log', '--format=@%cI', '--name-only', '--', 'src/app'], {
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    })
    let current = ''
    for (const line of log.split('\n')) {
      if (line.startsWith('@')) current = line.slice(1).trim()
      else if (line.trim() && !dates[line.trim()]) dates[line.trim()] = current
    }
  } catch {}
  return dates
}

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    PAGE_LASTMOD: JSON.stringify(pageLastModified()),
  },
  // Server-only files (e.g. the instant-refresh API) are named *.server.ts and left out of the static export.
  pageExtensions: isHostinger ? ['tsx', 'ts', 'jsx', 'js'] : ['tsx', 'ts', 'jsx', 'js', 'server.ts'],
  ...(isHostinger
    ? { output: 'export' as const }
    : {
        async redirects() {
          return LIVE_REDIRECTS.map((r) => ({
            source: r.from.replace(/\/+$/, ''),
            destination: r.to,
            statusCode: 301 as const,
          }))
        },
      }),
}

export default nextConfig
