'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Eye, Sparkles, CheckCircle2 } from 'lucide-react'
import { RichTextEditor } from '@/components/admin/RichTextEditor'
import { ImageUploader } from '@/components/admin/ImageUploader'
import { SeoFormSection } from '@/components/admin/SeoFormSection'
import { blogService } from '@/lib/services/blogService'
import { Category, BlogStatus, SeoData } from '@/lib/supabase/types'

export default function AdminNewBlogPage() {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)

  // Form Fields
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [featuredImage, setFeaturedImage] = useState('')
  const [author, setAuthor] = useState('Sarah Chen')
  const [categoryId, setCategoryId] = useState('')
  const [status, setStatus] = useState<BlogStatus>('draft')
  const [seoTitle, setSeoTitle] = useState('')
  const [seoDescription, setSeoDescription] = useState('')
  const [seoData, setSeoData] = useState<SeoData>({})

  useEffect(() => {
    async function fetchCats() {
      const data = await blogService.getCategories()
      setCategories(data)
      if (data.length > 0) setCategoryId(data[0].id)
    }
    fetchCats()
  }, [])

  // Auto-generate URL slug from Title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setTitle(val)
    const generatedSlug = val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
    setSlug(generatedSlug)
    if (!seoTitle) setSeoTitle(val)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !content) {
      alert('Please fill out Title and Content')
      return
    }

    try {
      setSaving(true)
      const finalSlug = seoData.slug || slug || `post-${Date.now()}`
      const finalSeo: SeoData = {
        ...seoData,
        seo_title: seoData.seo_title || seoTitle || title,
        meta_description: seoData.meta_description || seoDescription || excerpt,
        slug: finalSlug,
      }

      await blogService.createBlog({
        title,
        slug: finalSlug,
        excerpt,
        content,
        featured_image: featuredImage,
        author,
        category_id: categoryId,
        status,
        seo_title: finalSeo.seo_title,
        seo_description: finalSeo.meta_description,
        seo: finalSeo,
      })
      router.push('/admin/blogs')
    } catch (err) {
      alert('Failed to save article')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Link
            href="/admin/blogs"
            className="inline-flex items-center gap-1 font-mono text-xs text-[#4DE8DC] hover:underline uppercase"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Posts
          </Link>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Create New Article</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setStatus(status === 'published' ? 'draft' : 'published')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all ${
              status === 'published'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
            }`}
          >
            Status: {status}
          </button>

          <button
            type="submit"
            form="new-blog-form"
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(77,232,220,0.4)] transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save Article'}
          </button>
        </div>
      </div>

      <form id="new-blog-form" onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Article Info */}
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
          <div className="space-y-2">
            <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
              Article Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={handleTitleChange}
              placeholder="e.g. Building Scalable WebGL Applications with Next.js"
              className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-lg font-bold text-white focus:outline-none focus:border-[#4DE8DC]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                URL Slug
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="building-scalable-webgl-applications"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-white focus:outline-none focus:border-[#4DE8DC]"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                Category
              </label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1417] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
              Short Excerpt / Summary
            </label>
            <textarea
              rows={2}
              value={excerpt}
              onChange={(e) => {
                setExcerpt(e.target.value)
                if (!seoDescription) setSeoDescription(e.target.value)
              }}
              placeholder="A brief 1-2 sentence overview shown in blog cards and search results..."
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                Author Name
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Sarah Chen"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
              />
            </div>

            <ImageUploader
              value={featuredImage}
              onChange={setFeaturedImage}
              label="Featured Cover Image"
            />
          </div>
        </div>

        {/* Rich Text Editor */}
        <div className="space-y-2">
          <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
            Rich Body Content *
          </label>
          <RichTextEditor value={content} onChange={setContent} />
        </div>

        {/* Yoast-Style SEO & Meta Suite Section */}
        <SeoFormSection
          seoData={seoData}
          onChange={setSeoData}
          defaultTitle={title}
          defaultExcerpt={excerpt}
          defaultSlug={slug}
          defaultImage={featuredImage}
        />
      </form>
    </div>
  )
}
