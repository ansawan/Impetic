'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Trash2, Sparkles } from 'lucide-react'
import { RichTextEditor } from '@/components/admin/RichTextEditor'
import { ImageUploader } from '@/components/admin/ImageUploader'
import { SeoFormSection } from '@/components/admin/SeoFormSection'
import { blogService } from '@/lib/services/blogService'
import { seoService } from '@/lib/services/seoService'
import { Category, BlogStatus, Blog, SeoData } from '@/lib/supabase/types'

interface EditBlogFormProps {
  id: string;
}

export function EditBlogForm({ id }: EditBlogFormProps) {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [blog, setBlog] = useState<Blog | null>(null)

  // Form Fields
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [featuredImage, setFeaturedImage] = useState('')
  const [author, setAuthor] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [status, setStatus] = useState<BlogStatus>('draft')
  const [seoData, setSeoData] = useState<SeoData>({})
  const [originalSlug, setOriginalSlug] = useState('')

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const [cats, post] = await Promise.all([
          blogService.getCategories(),
          blogService.getBlogById(id),
        ])
        setCategories(cats)
        if (post) {
          setBlog(post)
          setTitle(post.title)
          setSlug(post.slug)
          setOriginalSlug(post.slug)
          setExcerpt(post.excerpt || '')
          setContent(post.content || '')
          setFeaturedImage(post.featured_image || '')
          setAuthor(post.author || 'Impetic Team')
          setCategoryId(post.category_id || cats[0]?.id || '')
          setStatus(post.status)
          setSeoData(
            post.seo || {
              seo_title: post.seo_title || post.title,
              meta_description: post.seo_description || post.excerpt || '',
              slug: post.slug,
              schema_type: 'Article',
            }
          )
        }
      } catch (err) {
        console.error('Failed loading post', err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !content) {
      alert('Please fill out Title and Content')
      return
    }

    try {
      setSaving(true)

      const finalSlug = seoData.slug || slug || originalSlug
      const updatedSeo: SeoData = {
        ...seoData,
        seo_title: seoData.seo_title || title,
        meta_description: seoData.meta_description || excerpt,
        slug: finalSlug,
      }

      // Check if slug changed on a published post and prompt for 301 redirect
      if (status === 'published' && originalSlug && finalSlug !== originalSlug) {
        const createRedirect = confirm(
          `You changed the URL slug of a published article from "/blog/${originalSlug}" to "/blog/${finalSlug}".\n\nWould you like to automatically create a 301 redirect to prevent broken links and lost SEO authority?`
        )
        if (createRedirect) {
          await seoService.addRedirect({
            old_path: `/blog/${originalSlug}`,
            new_path: `/blog/${finalSlug}`,
            redirect_type: 301,
          })
        }
      }

      await blogService.updateBlog(id, {
        title,
        slug: finalSlug,
        excerpt,
        content,
        featured_image: featuredImage,
        author,
        category_id: categoryId,
        status,
        seo_title: updatedSeo.seo_title,
        seo_description: updatedSeo.meta_description,
        seo: updatedSeo,
      })
      router.push('/admin/blogs')
    } catch (err) {
      alert('Failed to update article')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (confirm(`Permanently delete "${title}"?`)) {
      await blogService.deleteBlog(id)
      router.push('/admin/blogs')
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center text-xs font-mono text-white/40">
        Loading article data...
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Article Not Found</h2>
        <Link href="/admin/blogs" className="font-mono text-xs text-[#4DE8DC] underline uppercase">
          Back to all blogs
        </Link>
      </div>
    )
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
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Edit Article</h1>
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
            type="button"
            onClick={handleDelete}
            className="p-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 transition-colors"
            title="Delete Article"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <button
            type="submit"
            form="edit-blog-form"
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(77,232,220,0.4)] transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Update Article'}
          </button>
        </div>
      </div>

      <form id="edit-blog-form" onSubmit={handleSubmit} className="space-y-8">
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
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Article title..."
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
              onChange={(e) => setExcerpt(e.target.value)}
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
