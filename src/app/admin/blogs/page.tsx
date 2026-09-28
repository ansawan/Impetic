'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Search, PlusCircle, Filter, Edit3, Trash2, Eye, EyeOff,
  AlertTriangle, Check, RefreshCw
} from 'lucide-react'
import { blogService } from '@/lib/services/blogService'
import { Blog, BlogStatus } from '@/lib/supabase/types'

export default function AdminBlogsListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<BlogStatus | 'all'>('all')
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [confirmDeleteBlog, setConfirmDeleteBlog] = useState<Blog | null>(null)

  const loadBlogs = async () => {
    try {
      setLoading(true)
      const { blogs: data } = await blogService.getAllBlogs({
        search: search.trim() || undefined,
        status: statusFilter,
      })
      setBlogs(data)
    } catch (err) {
      console.error('Failed loading blogs', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBlogs()
  }, [search, statusFilter])

  const handleToggleStatus = async (blog: Blog) => {
    const newStatus: BlogStatus = blog.status === 'published' ? 'draft' : 'published'
    try {
      await blogService.updateBlog(blog.id, { status: newStatus })
      setBlogs(blogs.map(b => (b.id === blog.id ? { ...b, status: newStatus } : b)))
    } catch (err) {
      alert('Failed updating status')
    }
  }

  const handleDelete = async () => {
    if (!confirmDeleteBlog) return
    try {
      setDeletingId(confirmDeleteBlog.id)
      await blogService.deleteBlog(confirmDeleteBlog.id)
      setBlogs(blogs.filter(b => b.id !== confirmDeleteBlog.id))
      setConfirmDeleteBlog(null)
    } catch (err) {
      alert('Failed deleting article')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Article Management</h1>
          <p className="text-sm text-white/60 font-mono mt-1">
            Create, edit, publish, or remove blog posts
          </p>
        </div>

        <Link
          href="/admin/blogs/new"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(77,232,220,0.4)] transition-all"
        >
          <PlusCircle className="w-4 h-4" /> New Article
        </Link>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or slug..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#4DE8DC]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          {(['all', 'published', 'draft'] as const).map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setStatusFilter(st)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all ${
                statusFilter === st
                  ? 'bg-[#4DE8DC] text-black font-bold'
                  : 'bg-white/[0.04] border border-white/10 text-white hover:border-white/30'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Blogs Table */}
      <div className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-xs font-mono text-white/40">
            Fetching article data...
          </div>
        ) : blogs.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <div className="text-sm font-semibold text-white">No articles found</div>
            <p className="text-xs text-white/50 font-mono">Try adjusting your filters or create a new blog post.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 font-mono text-xs text-white/40 uppercase bg-white/[0.02]">
                  <th className="py-4 px-6">Article</th>
                  <th className="py-4 px-4">Category</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-4">Date</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={blog.featured_image}
                          alt={blog.title}
                          className="w-14 h-10 rounded-lg object-cover border border-white/10 shrink-0"
                        />
                        <div>
                          <Link
                            href={`/admin/blogs/edit/${blog.id}`}
                            className="font-bold text-white hover:text-[#4DE8DC] transition-colors line-clamp-1"
                          >
                            {blog.title}
                          </Link>
                          <div className="font-mono text-xs text-white/40">/blog/{blog.slug}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 font-mono text-xs text-white/60">
                      {blog.category?.name || 'General'}
                    </td>

                    <td className="py-4 px-4">
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(blog)}
                        title="Click to toggle Draft / Published"
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all ${
                          blog.status === 'published'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20'
                        }`}
                      >
                        {blog.status === 'published' ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        {blog.status}
                      </button>
                    </td>

                    <td className="py-4 px-4 font-mono text-xs text-white/40">
                      {new Date(blog.created_at || '').toLocaleDateString()}
                    </td>

                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                          title="View Live Article"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/blogs/edit/${blog.id}`}
                          className="p-2 rounded-lg text-white/70 hover:text-[#4DE8DC] hover:bg-white/5 transition-colors"
                          title="Edit Post"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteBlog(blog)}
                          className="p-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                          title="Delete Post"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {confirmDeleteBlog && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="w-full max-w-md p-8 rounded-3xl border border-red-500/30 bg-[#0D1417] space-y-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Delete Article?</h3>
              <p className="text-xs text-white/60">
                Are you sure you want to permanently delete <strong className="text-white">&ldquo;{confirmDeleteBlog.title}&rdquo;</strong>? This action cannot be undone.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setConfirmDeleteBlog(null)}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 font-mono text-xs uppercase tracking-wider text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={!!deletingId}
                className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 font-mono text-xs uppercase tracking-wider text-white font-bold transition-colors"
              >
                {deletingId ? 'Deleting...' : 'Confirm Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
