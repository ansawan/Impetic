'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Lock, Mail, Key, ShieldCheck, ArrowRight } from 'lucide-react'
import { ImpeticLogo } from '@/components/3d/ImpeticLogo'
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    if (isSupabaseConfigured()) {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) {
          setErrorMsg(error.message)
          setLoading(false)
          return
        }
      } catch (err: any) {
        setErrorMsg(err.message || 'Authentication failed')
        setLoading(false)
        return
      }
    } else {
      // Demo / Setup mode fallback login
      console.log('Demo login mode active')
    }

    setLoading(false)
    router.push('/admin/dashboard')
  }

  return (
    <div className="min-h-screen w-full bg-[#000000] text-[#EAF6F5] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-[#4DE8DC]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-8">
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2 group mb-2">
            <ImpeticLogo className="w-10 h-10" />
            <span className="text-2xl font-bold tracking-tight text-[#EAF6F5]">
              IMPETIC
            </span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Portal Security
          </div>
          <h1 className="text-3xl font-extrabold text-white">Admin Portal Sign In</h1>
          <p className="text-sm text-white/60">
            Authorized Content Editors & System Administrators
          </p>
        </div>

        {!isSupabaseConfigured() && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-mono leading-relaxed">
            ⚠️ <strong>Setup Mode Active:</strong> Supabase environment variables are not yet configured in `.env.local`. You can click <strong>Sign In</strong> to explore the Admin Dashboard preview.
          </div>
        )}

        <form onSubmit={handleLogin} className="p-8 rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl space-y-6 shadow-2xl">
          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono">
              {errorMsg}
            </div>
          )}

          <div className="space-y-2">
            <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@impetic.com"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC] transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC] transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all flex items-center justify-center gap-2"
          >
            {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <div className="text-center">
          <Link href="/" className="font-mono text-xs text-white/40 hover:text-[#4DE8DC] transition-colors">
            ← Return to Impetic Main Site
          </Link>
        </div>
      </div>
    </div>
  )
}
