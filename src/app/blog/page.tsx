'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Search, Tag, Calendar, User, Clock, ArrowRight, Sparkles, Filter, AlertCircle } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { blogService } from '@/lib/services/blogService'
import { Blog, Category, Tag as TagType } from '@/lib/supabase/types'

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [tags, setTags] = useState<TagType[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')

  useEffect(() => {
    async function loadInitialData() {
      try {
        setLoading(true)
        const [catsData, tagsData] = await Promise.all([
          blogService.getCategories(),
          blogService.getTags(),
        ])
        setCategories(catsData)
        setTags(tagsData)
      } catch (err) {
        console.error('Failed loading categories/tags', err)
      }
    }
    loadInitialData()
  }, [])

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true)
        const { blogs: data } = await blogService.getPublishedBlogs({
          search: search.trim() || undefined,
          categorySlug: selectedCategory !== 'all' ? selectedCategory : undefined,
          tagSlug: selectedTag !== 'all' ? selectedTag : undefined,
        })
        setBlogs(data)
      } catch (err) {
        console.error('Failed fetching blogs', err)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [search, selectedCategory, selectedTag])

  const featuredPost = blogs.length > 0 ? blogs[0] : null
  const regularPosts = blogs.length > 1 ? blogs.slice(1) : blogs

  return (
    <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between pt-20">
      <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <PageHero
          eyebrow="Insights & Architecture"
          title="Engineering Blog"
          description="Technical deep-dives on WebGL, Three.js, production AI systems, and digital growth engineering."
        />

        {/* Filter Controls Bar */}
        <div className="my-10 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles & topics..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#4DE8DC] transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'bg-[#4DE8DC] text-black font-bold shadow-[0_0_15px_rgba(77,232,220,0.4)]'
                    : 'bg-white/[0.04] border border-white/10 text-white hover:border-white/30'
                }`}
              >
                All Posts
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
                    selectedCategory === cat.slug
                      ? 'bg-[#4DE8DC] text-black font-bold shadow-[0_0_15px_rgba(77,232,220,0.4)]'
                      : 'bg-white/[0.04] border border-white/10 text-white hover:border-white/30'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post Card (When no filter active) */}
        {!loading && featuredPost && selectedCategory === 'all' && !search && (
          <section className="mb-16">
            <div className="group relative rounded-3xl border border-white/15 bg-white/[0.02] backdrop-blur-md overflow-hidden hover:border-[#4DE8DC]/50 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredPost.featured_image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent lg:hidden" />
                </div>
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 font-mono text-xs text-[#4DE8DC]">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" /> Featured Article
                      </span>
                      {featuredPost.category && <span>{featuredPost.category.name}</span>}
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-extrabold text-white group-hover:text-[#4DE8DC] transition-colors leading-tight">
                      <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                    </h2>

                    <p className="text-sm sm:text-base text-white/70 leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#4DE8DC]" /> {featuredPost.author}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#4DE8DC]" /> {new Date(featuredPost.published_at || featuredPost.created_at || '').toLocaleDateString()}</span>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-[#4DE8DC] font-bold uppercase tracking-wider hover:translate-x-1 transition-transform"
                    >
                      Read Story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4 animate-pulse">
                <div className="w-full h-48 bg-white/5 rounded-xl" />
                <div className="w-1/3 h-4 bg-[#4DE8DC]/20 rounded" />
                <div className="w-3/4 h-6 bg-white/10 rounded" />
                <div className="w-full h-12 bg-white/5 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && blogs.length === 0 && (
          <div className="my-16 p-12 text-center rounded-3xl border border-white/10 bg-white/[0.02] max-w-lg mx-auto space-y-4">
            <AlertCircle className="w-12 h-12 text-[#4DE8DC] mx-auto opacity-70" />
            <h3 className="text-xl font-bold text-white">No articles found</h3>
            <p className="text-sm text-white/60">
              No published posts matched your search criteria. Try adjusting your query or category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch('')
                setSelectedCategory('all')
                setSelectedTag('all')
              }}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && blogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'all' && !search ? regularPosts : blogs).map((blog) => (
              <ContentPanel
                key={blog.id}
                className="group flex flex-col justify-between h-full hover:border-[#4DE8DC]/50 transition-all duration-300 p-0 overflow-hidden"
              >
                <div>
                  <div className="relative w-full h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={blog.featured_image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {blog.category && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#4DE8DC]/30 text-[#4DE8DC] font-mono text-[10px] uppercase tracking-wider">
                        {blog.category.name}
                      </span>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs font-mono text-white/50">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-[#4DE8DC]" /> {new Date(blog.published_at || blog.created_at || '').toLocaleDateString()}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3 h-3 text-[#4DE8DC]" /> {blog.author}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#4DE8DC] transition-colors leading-snug line-clamp-2">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>

                    <p className="text-sm text-white/60 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4 border-t border-white/8 flex items-center justify-between">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#4DE8DC] font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    Read Post <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ContentPanel>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
