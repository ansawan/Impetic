// Canonical site origin (no trailing slash). The site is exported with
// `trailingSlash: true`, so every public page URL must end with "/".
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://impetic.com').replace(/\/+$/, '')

// Normalizes a route path to the trailing-slash form Hostinger serves with a 200.
export function canonicalPath(path: string): string {
  const clean = `/${path.replace(/^\/+|\/+$/g, '')}`
  return clean === '/' ? '/' : `${clean}/`
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${canonicalPath(path)}`
}
