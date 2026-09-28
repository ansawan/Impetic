'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard, FileText, PlusCircle, FolderTree, Tags,
  Image as ImageIcon, LogOut, ShieldCheck, Globe, Menu, X, User, Sparkles
} from 'lucide-react'
import { ImpeticLogo } from '@/components/3d/ImpeticLogo'
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userEmail, setUserEmail] = useState<string>('admin@impetic.com')
  const [userRole, setUserRole] = useState<string>('Admin')
  const [userName, setUserName] = useState<string>('Impetic Admin')

  const isLoginPage = pathname?.startsWith('/admin/login') || pathname?.replace(/\/$/, '') === '/admin/login'

  useEffect(() => {
    async function checkAuth() {
      if (isSupabaseConfigured()) {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user && !isLoginPage) {
          router.push('/admin/login')
          return
        }

        if (user) {
          setUserEmail(user.email || 'admin@impetic.com')
          // Fetch profile role from Supabase profiles table
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single()

          if (profile) {
            setUserRole(profile.role === 'admin' ? 'Admin' : 'Editor')
            setUserName(profile.full_name || user.email || 'Impetic User')
          } else {
            setUserName(user.email?.split('@')[0] || 'Impetic Admin')
          }
        }
      }
    }

    if (!isLoginPage) {
      checkAuth()
    }
  }, [pathname, router, isLoginPage])

  // Don't render sidebar shell on login page
  if (isLoginPage) {
    return <>{children}</>
  }

  const handleSignOut = async () => {
    if (isSupabaseConfigured()) {
      await supabase.auth.signOut()
    }
    router.push('/admin/login')
  }

  const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'All Articles', href: '/admin/blogs', icon: FileText },
    { label: 'Create New Post', href: '/admin/blogs/new', icon: PlusCircle },
    { label: 'SEO Settings', href: '/admin/seo', icon: Sparkles },
  ]

  return (
    <div className="min-h-screen w-full bg-[#080D0F] text-[#EAF6F5] flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-black border-b border-white/10 sticky top-0 z-50">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <ImpeticLogo className="w-6 h-6" />
          <span className="font-bold text-base text-white">IMPETIC ADMIN</span>
        </Link>
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 inset-y-0 left-0 z-40 w-64 bg-black border-r border-white/10 flex flex-col justify-between transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } h-screen`}
      >
        <div className="p-6 space-y-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <ImpeticLogo className="w-8 h-8" />
            <div>
              <div className="font-extrabold text-base text-white tracking-tight">IMPETIC</div>
              <div className="font-mono text-[10px] text-[#4DE8DC] uppercase tracking-widest">
                CMS Studio
              </div>
            </div>
          </Link>

          <nav className="space-y-1.5">
            <div className="px-3 pb-2 font-mono text-[10px] text-white/40 uppercase tracking-widest">
              Navigation
            </div>
            {navItems.map((item) => {
              const active = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-xs uppercase tracking-wider transition-all ${
                    active
                      ? 'bg-[#4DE8DC]/15 text-[#4DE8DC] border border-[#4DE8DC]/30 font-bold shadow-[0_0_15px_rgba(77,232,220,0.2)]'
                      : 'text-white/70 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Sidebar Footer User Info */}
        <div className="p-6 border-t border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4DE8DC]/20 border border-[#4DE8DC]/40 flex items-center justify-center text-[#4DE8DC] font-bold text-xs uppercase">
                {userName.charAt(0)}
              </div>
              <div className="truncate max-w-[130px]">
                <div className="font-bold text-xs text-white truncate" title={userName}>{userName}</div>
                <div className="font-mono text-[10px] text-[#4DE8DC]">Role: {userRole}</div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-2 text-xs font-mono text-white/60 hover:text-[#4DE8DC] transition-colors"
            >
              <Globe className="w-3.5 h-3.5" /> View Live Website
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="flex items-center gap-2 text-xs font-mono text-red-400 hover:text-red-300 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="grow p-6 sm:p-10 max-w-7xl mx-auto w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  )
}
