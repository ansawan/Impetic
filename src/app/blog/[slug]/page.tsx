import React from 'react'
import Metadata from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft, Share2, Tag as TagIcon, Clock, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { blogService } from '@/lib/services/blogService'
import { seoService } from '@/lib/services/seoService'

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { blogs } = await blogService.getPublishedBlogs({ limit: 100 });
  if (blogs.length === 0) {
    return [
      { slug: 'building-production-grade-ai-agents' },
      { slug: 'optimizing-3d-webgl-interfaces' },
      { slug: 'technical-seo-strategies-nextjs' },
    ];
  }
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const blog = await blogService.getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return {
      title: 'Article Not Found — Impetic',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://impetic.com';
  const canonicalUrl = blog.seo?.canonical_url || `${siteUrl}/blog/${blog.slug}`;
  const seoTitle = blog.seo?.seo_title || blog.seo_title || blog.title;
  const seoDesc = blog.seo?.meta_description || blog.seo_description || blog.excerpt;
  const ogTitle = blog.seo?.og_title || seoTitle;
  const ogDesc = blog.seo?.og_description || seoDesc;
  const ogImage = blog.seo?.og_image || blog.featured_image;
  const twitterCard = blog.seo?.twitter_card_type || 'summary_large_image';

  return {
    title: `${seoTitle} | Impetic Insights`,
    description: seoDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !blog.seo?.noindex,
      follow: !blog.seo?.nofollow,
    },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonicalUrl,
      type: 'article',
      publishedTime: blog.published_at || blog.created_at,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: twitterCard,
      title: ogTitle,
      description: ogDesc,
      images: [ogImage],
    },
  };
}

export default async function SingleBlogPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const blog = await blogService.getBlogBySlug(resolvedParams.slug);

  if (!blog || blog.status === 'draft') {
    notFound();
  }

  const { blogs: allBlogs } = await blogService.getPublishedBlogs({ limit: 4 });
  const relatedPosts = allBlogs.filter(b => b.id !== blog.id).slice(0, 3);

  const jsonLd = blog.seo?.custom_schema_json
    ? JSON.parse(blog.seo.custom_schema_json)
    : seoService.generateStructuredData(blog.seo?.schema_type || 'Article', blog);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between pt-24 pb-16">
        <article className="grow w-full max-w-4xl mx-auto px-6 sm:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#4DE8DC] hover:underline uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-6 mb-10 text-center sm:text-left">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#4DE8DC]">
              {blog.category && (
                <span className="px-3.5 py-1 rounded-full bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 uppercase tracking-wider">
                  {blog.category.name}
                </span>
              )}
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1.5 text-white/60">
                <Calendar className="w-3.5 h-3.5 text-[#4DE8DC]" />
                {new Date(blog.published_at || blog.created_at || '').toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1.5 text-white/60">
                <User className="w-3.5 h-3.5 text-[#4DE8DC]" />
                {blog.author}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              {blog.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
              {blog.excerpt}
            </p>
          </header>

          {/* Featured Hero Image */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/15 mb-12 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Body Content */}
          <ContentPanel className="p-8 sm:p-12 mb-12">
            <div
              className="prose prose-invert prose-teal max-w-none text-base sm:text-lg leading-relaxed space-y-6 text-[#EAF6F5]"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags & Social Share Footer */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-white/40 uppercase">Tags:</span>
                {blog.tags && blog.tags.length > 0 ? (
                  blog.tags.map((t) => (
                    <span
                      key={t.id}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 font-mono text-xs text-[#4DE8DC]"
                    >
                      #{t.name}
                    </span>
                  ))
                ) : (
                  <span className="font-mono text-xs text-white/40">General</span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/40 uppercase">Share:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-white hover:text-[#4DE8DC] hover:border-[#4DE8DC]/40 transition-colors"
                >
                  Twitter / X
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://impetic.com/blog/${blog.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-white hover:text-[#4DE8DC] hover:border-[#4DE8DC]/40 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </ContentPanel>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 space-y-8">
              <h3 className="text-2xl font-bold text-white font-mono uppercase tracking-wider">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <ContentPanel
                    key={rel.id}
                    className="p-6 flex flex-col justify-between hover:border-[#4DE8DC]/50 transition-all"
                  >
                    <div className="space-y-3">
                      <div className="font-mono text-[10px] text-[#4DE8DC] uppercase">
                        {rel.category?.name}
                      </div>
                      <h4 className="font-bold text-base text-white hover:text-[#4DE8DC] transition-colors line-clamp-2">
                        <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                      </h4>
                    </div>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="mt-4 font-mono text-xs text-[#4DE8DC] font-bold uppercase tracking-wider"
                    >
                      Read Article →
                    </Link>
                  </ContentPanel>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </>
  )
}
