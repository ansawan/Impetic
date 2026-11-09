import { supabase } from '@/lib/supabase/client'

// Called by /admin after any save that changes the public site.
// - Vercel: asks the server to refresh its cached pages, so the change is live right away.
// - Hostinger (static export): there is no API route; the Supabase trigger rebuilds the site instead.
export async function publishSiteChanges(): Promise<string> {
  try {
    const { data } = await supabase.auth.getSession()
    const token = data.session?.access_token
    if (token) {
      const res = await fetch('/api/revalidate/', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.ok) return 'The live website is updated now.'
    }
  } catch {
    // fall through to the rebuild message
  }
  return 'The live website updates automatically in about 5 minutes.'
}
