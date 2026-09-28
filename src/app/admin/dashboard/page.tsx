'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  FileText, CheckCircle2, FileClock, FolderTree, Eye, PlusCircle,
  TrendingUp, ArrowUpRight, Edit3, Trash2
} from 'lucide-react'
import { blogService } from '@/lib/services/blogService'
import { Blog } from '@/lib/supabase/types'

export default function AdminDashboardPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [categoriesCount, setCategoriesCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      try {
        setLoading(true)
        const [blogsRes, cats] = await Promise.all([
          blogService.getAllBlogs(),
          blogService.getCategories(),
        ])
        setBlogs(blogsRes.blogs)
        setCategoriesCount(cats.length)
      } catch (err) {
        console.error('Failed loading dashboard stats', err)
      } finally {
        setLoading(false)
      }
    }
    loadStats()
  }, [])

  const totalCount = blogs.length
  const publishedCount = blogs.filter(b => b.status === 'published').length
  const draftCount = blogs.filter(b => b.status === 'draft').length
  const totalViews = blogs.reduce((acc, b) => acc + (b.views || 0), 0)

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">CMS Overview Dashboard</h1>
          <p className="text-sm text-white/60 font-mono mt-1">
            Real-time management for Impetic publishing operations
          </p>
        </div>

        <Link
          href="/admin/blogs/new"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(77,232,220,0.4)] transition-all"
        >
          <PlusCircle className="w-4 h-4" /> Create New Post
        </Link>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/50 uppercase">Total Articles</span>
            <FileText className="w-5 h-5 text-[#4DE8DC]" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white">
            {loading ? '...' : totalCount}
          </div>
          <div className="text-xs text-white/40 font-mono">Published & Drafts</div>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/50 uppercase">Published</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
            {loading ? '...' : publishedCount}
          </div>
          <div className="text-xs text-white/40 font-mono">Live on site</div>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/50 uppercase">Drafts</span>
            <FileClock className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
            {loading ? '...' : draftCount}
          </div>
          <div className="text-xs text-white/40 font-mono">Unpublished edits</div>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-white/50 uppercase">Total Views</span>
            <Eye className="w-5 h-5 text-[#4DE8DC]" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white">
            {loading ? '...' : totalViews.toLocaleString()}
          </div>
          <div className="text-xs text-white/40 font-mono">Cumulative reads</div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Recent Articles</h2>
            <p className="text-xs text-white/50 font-mono mt-0.5">
              Latest post status and content updates
            </p>
          </div>
          <Link
            href="/admin/blogs"
            className="font-mono text-xs text-[#4DE8DC] hover:underline flex items-center gap-1 uppercase"
          >
            View All <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {loading ? (
          <div className="py-12 text-center text-xs font-mono text-white/40">Loading articles...</div>
        ) : blogs.length === 0 ? (
          <div className="py-12 text-center text-xs font-mono text-white/40">No articles created yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 font-mono text-xs text-white/40 uppercase">
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {blogs.slice(0, 5).map((blog) => (
                  <tr key={blog.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">
                      <Link href={`/admin/blogs/edit/${blog.id}`} className="hover:text-[#4DE8DC] transition-colors">
                        {blog.title}
                      </Link>
                    </td>
                    <td className="py-4 px-4 font-mono text-xs text-white/60">
                      {blog.category?.name || 'General'}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider ${
                          blog.status === 'published'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {blog.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-mono text-xs text-white/40">
                      {new Date(blog.created_at || '').toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/admin/blogs/edit/${blog.id}`}
                        className="p-2 inline-flex items-center justify-center rounded-lg text-white/70 hover:text-[#4DE8DC] hover:bg-white/5 transition-colors"
                        title="Edit Article"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
