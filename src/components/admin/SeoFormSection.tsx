'use client'

import React, { useState } from 'react'
import {
  Sparkles,
  Globe,
  Share2,
  Shield,
  FileCode,
  CheckCircle2,
  AlertTriangle,
  Info,
  HelpCircle,
} from 'lucide-react'
import { SeoData, SchemaType } from '@/lib/supabase/types'
import { ImageUploader } from '@/components/admin/ImageUploader'

interface SeoFormSectionProps {
  seoData: SeoData
  onChange: (updated: SeoData) => void
  defaultTitle?: string
  defaultExcerpt?: string
  defaultSlug?: string
  defaultImage?: string
}

export function SeoFormSection({
  seoData,
  onChange,
  defaultTitle = '',
  defaultExcerpt = '',
  defaultSlug = '',
  defaultImage = '',
}: SeoFormSectionProps) {
  const [activeTab, setActiveTab] = useState<'general' | 'social' | 'robots' | 'schema'>('general')

  // Helper getters with defaults
  const currentSeoTitle = seoData.seo_title || defaultTitle
  const currentMetaDescription = seoData.meta_description || defaultExcerpt
  const currentSlug = seoData.slug || defaultSlug
  const currentOgTitle = seoData.og_title || currentSeoTitle
  const currentOgDescription = seoData.og_description || currentMetaDescription
  const currentOgImage = seoData.og_image || defaultImage
  const currentTwitterCard = seoData.twitter_card_type || 'summary_large_image'
  const currentSchemaType: SchemaType = seoData.schema_type || 'Article'

  const updateField = (field: keyof SeoData, value: any) => {
    onChange({
      ...seoData,
      [field]: value,
    })
  }

  // Traffic Light Indicator Helpers
  const getTitleQuality = (len: number) => {
    if (len === 0) return { label: 'Empty', color: 'bg-[#8FA6A3]/30 text-white/60 border-white/10' }
    if (len >= 45 && len <= 65) return { label: 'Good length', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' }
    if ((len >= 30 && len < 45) || (len > 65 && len <= 75)) return { label: 'Acceptable', color: 'bg-amber-500/20 text-amber-400 border-amber-500/40' }
    return { label: len > 75 ? 'Too Long' : 'Too Short', color: 'bg-rose-500/20 text-rose-400 border-rose-500/40' }
  }

  const getDescQuality = (len: number) => {
    if (len === 0) return { label: 'Empty', color: 'bg-[#8FA6A3]/30 text-white/60 border-white/10' }
    if (len >= 140 && len <= 165) return { label: 'Good length', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' }
    if ((len >= 100 && len < 140) || (len > 165 && len <= 180)) return { label: 'Acceptable', color: 'bg-amber-500/20 text-amber-400 border-amber-500/40' }
    return { label: len > 180 ? 'Too Long' : 'Too Short', color: 'bg-rose-500/20 text-rose-400 border-rose-500/40' }
  }

  const titleQuality = getTitleQuality(currentSeoTitle.length)
  const descQuality = getDescQuality(currentMetaDescription.length)

  // Generate Sample JSON-LD Preview
  const sampleJsonLd = {
    '@context': 'https://schema.org',
    '@type': currentSchemaType === 'Article' ? 'BlogPosting' : currentSchemaType,
    headline: currentSeoTitle || 'Sample Page Title',
    description: currentMetaDescription || 'Sample Page Description',
    image: currentOgImage || 'https://impetic.com/impetic.svg',
    url: `https://impetic.com/${currentSlug}`,
  }

  return (
    <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              On-Page SEO &amp; Meta Suite
            </h3>
            <p className="text-xs text-white/60">
              Yoast/RankMath style search snippet optimization &amp; JSON-LD schema controls
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('general')}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeTab === 'general'
                ? 'bg-[#4DE8DC]/20 text-[#4DE8DC] border border-[#4DE8DC]/40 font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" /> Search Snippet
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('social')}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeTab === 'social'
                ? 'bg-[#4DE8DC]/20 text-[#4DE8DC] border border-[#4DE8DC]/40 font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" /> Social Cards
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('robots')}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeTab === 'robots'
                ? 'bg-[#4DE8DC]/20 text-[#4DE8DC] border border-[#4DE8DC]/40 font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <Shield className="w-3.5 h-3.5" /> Robots
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('schema')}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeTab === 'schema'
                ? 'bg-[#4DE8DC]/20 text-[#4DE8DC] border border-[#4DE8DC]/40 font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" /> Schema
          </button>
        </div>
      </div>

      {/* TAB 1: GENERAL SEARCH SNIPPET */}
      {activeTab === 'general' && (
        <div className="space-y-6">
          {/* Live Google Search Preview Box */}
          <div className="p-6 rounded-2xl bg-[#12181B] border border-white/10 space-y-2">
            <div className="font-mono text-[10px] text-[#4DE8DC] uppercase tracking-widest flex items-center gap-1.5 mb-1">
              <Globe className="w-3 h-3" /> Live Google Search Snippet Preview
            </div>
            <div className="space-y-1">
              <div className="text-xs text-[#8FA6A3] truncate">
                https://impetic.com &gt; {currentSlug || 'page-slug'}
              </div>
              <div className="text-lg font-semibold text-[#8AB4F8] hover:underline cursor-pointer truncate">
                {currentSeoTitle || 'Page Title Tag Will Appear Here'}
              </div>
              <div className="text-xs text-[#BDC1C6] leading-relaxed line-clamp-2">
                {currentMetaDescription || 'Page meta description snippet will appear here...'}
              </div>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="space-y-5">
            {/* SEO Title Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  SEO Title Tag
                </label>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${titleQuality.color}`}>
                    {titleQuality.label}
                  </span>
                  <span className="font-mono text-xs text-white/60">
                    {currentSeoTitle.length} / 60 chars
                  </span>
                </div>
              </div>
              <input
                type="text"
                value={seoData.seo_title || ''}
                onChange={(e) => updateField('seo_title', e.target.value)}
                placeholder={defaultTitle || 'Title tag for Google search results...'}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
              />
            </div>

            {/* Meta Description Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Meta Description
                </label>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${descQuality.color}`}>
                    {descQuality.label}
                  </span>
                  <span className="font-mono text-xs text-white/60">
                    {currentMetaDescription.length} / 160 chars
                  </span>
                </div>
              </div>
              <textarea
                rows={3}
                value={seoData.meta_description || ''}
                onChange={(e) => updateField('meta_description', e.target.value)}
                placeholder={defaultExcerpt || '1-2 sentence meta description for search snippets...'}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Focus Keyword */}
              <div className="space-y-2">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Focus Keyword (Reference)
                </label>
                <input
                  type="text"
                  value={seoData.focus_keyword || ''}
                  onChange={(e) => updateField('focus_keyword', e.target.value)}
                  placeholder="e.g. AI Virtual Assistant"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
                />
              </div>

              {/* Canonical URL */}
              <div className="space-y-2">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Canonical URL Override
                </label>
                <input
                  type="text"
                  value={seoData.canonical_url || ''}
                  onChange={(e) => updateField('canonical_url', e.target.value)}
                  placeholder="https://impetic.com/custom-canonical"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SOCIAL CARDS PREVIEW */}
      {activeTab === 'social' && (
        <div className="space-y-6">
          {/* Social Card Preview Box */}
          <div className="p-6 rounded-2xl bg-[#12181B] border border-white/10 space-y-4">
            <div className="font-mono text-[10px] text-[#4DE8DC] uppercase tracking-widest flex items-center gap-1.5">
              <Share2 className="w-3 h-3" /> Live Open Graph / Social Media Card Preview
            </div>

            <div className="max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0D1417] shadow-lg">
              <div className="aspect-video w-full bg-white/5 relative overflow-hidden">
                {currentOgImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={currentOgImage}
                    alt="Social Card Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white/40 font-mono text-xs">
                    No OpenGraph Image Uploaded
                  </div>
                )}
              </div>
              <div className="p-4 space-y-1">
                <div className="font-mono text-[10px] text-white/40 uppercase">impetic.com</div>
                <div className="font-bold text-sm text-white truncate">{currentOgTitle}</div>
                <div className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                  {currentOgDescription}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  OpenGraph Title (OG:Title)
                </label>
                <input
                  type="text"
                  value={seoData.og_title || ''}
                  onChange={(e) => updateField('og_title', e.target.value)}
                  placeholder={currentSeoTitle}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Twitter Card Type
                </label>
                <select
                  value={currentTwitterCard}
                  onChange={(e) => updateField('twitter_card_type', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0D1417] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
                >
                  <option value="summary_large_image">Summary Large Image (Recommended)</option>
                  <option value="summary">Summary Small Card</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                OpenGraph Description (OG:Description)
              </label>
              <textarea
                rows={2}
                value={seoData.og_description || ''}
                onChange={(e) => updateField('og_description', e.target.value)}
                placeholder={currentMetaDescription}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
              />
            </div>

            <ImageUploader
              value={seoData.og_image || ''}
              onChange={(url) => updateField('og_image', url)}
              label="OpenGraph Social Image (1200x630)"
            />
          </div>
        </div>
      )}

      {/* TAB 3: ROBOTS & INDEXING */}
      {activeTab === 'robots' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#12181B] border border-white/10 space-y-4">
            <h4 className="font-mono text-xs text-[#4DE8DC] uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4 h-4" /> Crawling &amp; Indexing Controls
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Control whether search engine spiders (Googlebot, Bingbot) should index this page or follow internal links on this page.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <label className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer hover:border-[#4DE8DC]/40 transition-all">
                <div>
                  <div className="font-bold text-sm text-white">Noindex</div>
                  <div className="text-[11px] text-white/60">Hide page from search results</div>
                </div>
                <input
                  type="checkbox"
                  checked={!!seoData.noindex}
                  onChange={(e) => updateField('noindex', e.target.checked)}
                  className="w-5 h-5 rounded accent-[#4DE8DC]"
                />
              </label>

              <label className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer hover:border-[#4DE8DC]/40 transition-all">
                <div>
                  <div className="font-bold text-sm text-white">Nofollow</div>
                  <div className="text-[11px] text-white/60">Do not pass search authority to links</div>
                </div>
                <input
                  type="checkbox"
                  checked={!!seoData.nofollow}
                  onChange={(e) => updateField('nofollow', e.target.checked)}
                  className="w-5 h-5 rounded accent-[#4DE8DC]"
                />
              </label>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs text-[#4DE8DC] flex items-center gap-2">
              <Info className="w-4 h-4 shrink-0" />
              Generated Tag: &lt;meta name=&quot;robots&quot; content=&quot;
              {seoData.noindex ? 'noindex' : 'index'}, {seoData.nofollow ? 'nofollow' : 'follow'}&quot; /&gt;
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SCHEMA & STRUCTURED DATA */}
      {activeTab === 'schema' && (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                Schema Type (JSON-LD)
              </label>
              <select
                value={currentSchemaType}
                onChange={(e) => updateField('schema_type', e.target.value as SchemaType)}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1417] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
              >
                <option value="Article">Article / BlogPosting Schema</option>
                <option value="Service">Service Schema</option>
                <option value="FAQPage">FAQPage Schema</option>
                <option value="LocalBusiness">LocalBusiness Schema</option>
                <option value="Organization">Organization Schema</option>
                <option value="WebPage">WebPage Schema</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Auto-Generated JSON-LD Preview
                </label>
                <span className="text-[11px] font-mono text-white/40">Read-Only</span>
              </div>
              <pre className="p-4 rounded-xl bg-[#080D0F] border border-white/10 font-mono text-xs text-[#4DE8DC] overflow-x-auto max-h-48">
                {JSON.stringify(sampleJsonLd, null, 2)}
              </pre>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Custom Schema Override (Advanced JSON-LD)
              </label>
              <textarea
                rows={4}
                value={seoData.custom_schema_json || ''}
                onChange={(e) => updateField('custom_schema_json', e.target.value)}
                placeholder='Optional custom JSON-LD payload (e.g. {"@context": "https://schema.org", ...})'
                className="w-full px-4 py-3 rounded-xl bg-[#080D0F] border border-amber-500/30 font-mono text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
