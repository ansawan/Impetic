import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { seoService } from '@/lib/services/seoService'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip static assets, _next, icons, api routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/admin') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  try {
    const redirects = await seoService.getRedirects()
    const match = redirects.find(
      (r) => r.old_path.toLowerCase().replace(/\/$/, '') === pathname.toLowerCase().replace(/\/$/, '')
    )

    if (match) {
      const destination = match.new_path.startsWith('http')
        ? match.new_path
        : new URL(match.new_path, request.url)
      return NextResponse.redirect(destination, match.redirect_type || 301)
    }
  } catch (e) {
    // Silent fail if middleware redirect check fails
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
