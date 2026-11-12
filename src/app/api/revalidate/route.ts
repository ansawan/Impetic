import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Vercel only (the *.server.ts extension keeps it out of the Hostinger static export).
// Called by /admin after a save: refreshes every cached page so blog posts, meta tags
// and the sitemap show the new content on the next visit, with no rebuild.
export async function POST(request: Request) {
  const token = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '')
  if (!token) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } }
  )
  const { data, error } = await supabase.auth.getUser(token)
  if (error || !data.user) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 })
  }

  revalidatePath('/', 'layout')
  return NextResponse.json({ revalidated: true, at: new Date().toISOString() })
}
