'use client'

import React, { useState, useEffect } from 'react'
import {
  Sparkles,
  Save,
  Globe,
  ShieldAlert,
  Search,
  ArrowRight,
  Code,
  Sliders,
  FileText,
  CheckCircle2,
  Layers,
} from 'lucide-react'
import { seoService, STATIC_PAGES_LIST } from '@/lib/services/seoService'
import { publishSiteChanges } from '@/lib/publishSite'
import { SiteSeoSettings, RedirectRule, PageSeoRecord, SeoData } from '@/lib/supabase/types'
import { ImageUploader } from '@/components/admin/ImageUploader'
import { SeoFormSection } from '@/components/admin/SeoFormSection'

export default function AdminSeoSettingsPage() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<'pages' | 'defaults' | 'org' | 'verifications' | 'redirects'>('pages')

  // State for Page-by-Page SEO
  const [pagesSeoList, setPagesSeoList] = useState<PageSeoRecord[]>([])
  const [selectedPageSlug, setSelectedPageSlug] = useState<string>('/')
  const [selectedPageSeo, setSelectedPageSeo] = useState<SeoData>({})

  // Form State for Global Settings
  const [settings, setSettings] = useState<SiteSeoSettings>({
    default_title_template: '%page_title% | Impetic',
    default_meta_description: '',
    default_og_image: '',
    site_name: 'IMPETIC',
    twitter_handle: '@impetic',
    organization_schema_json: '',
    google_site_verification: '',
    bing_site_verification: '',
    google_analytics_id: '',
    gtag_id: '',
    custom_disallow_rules: '',
  })

  // State for Redirect Rules
  const [redirects, setRedirects] = useState<RedirectRule[]>([])

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const [seo, reds, pList] = await Promise.all([
          seoService.getSiteSeoSettings(),
          seoService.getRedirects(),
          seoService.getAllPagesSeo(),
        ])
        if (seo) setSettings(seo)
        if (reds) setRedirects(reds)
        if (pList) {
          setPagesSeoList(pList)
          const homePage = pList.find((p) => p.page_slug === '/') || pList[0]
          if (homePage) {
            setSelectedPageSlug(homePage.page_slug)
            setSelectedPageSeo(homePage.seo || {})
          }
        }
      } catch (err) {
        console.error('Failed loading SEO settings', err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  // Handle Page Selection Change
  const handleSelectPage = (slug: string) => {
    setSelectedPageSlug(slug)
    const pageRec = pagesSeoList.find((p) => p.page_slug === slug)
    if (pageRec) {
      setSelectedPageSeo(pageRec.seo || {})
    } else {
      const defaultInfo = STATIC_PAGES_LIST.find((p) => p.slug === slug)
      setSelectedPageSeo({
        seo_title: defaultInfo?.defaultTitle || '',
        meta_description: defaultInfo?.defaultDesc || '',
        slug: slug,
      })
    }
  }

  // Handle Save Page SEO
  const handleSavePageSeo = async () => {
    const pageInfo = STATIC_PAGES_LIST.find((p) => p.slug === selectedPageSlug)
    const pageName = pageInfo?.name || selectedPageSlug
    try {
      setSaving(true)
      const updatedRecord = await seoService.updatePageSeo(selectedPageSlug, pageName, selectedPageSeo)
      setPagesSeoList(
        pagesSeoList.map((p) => (p.page_slug === selectedPageSlug ? updatedRecord : p))
      )
      alert(`SEO settings saved for ${pageName}. ${await publishSiteChanges()}`)
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed saving page SEO settings')
    } finally {
      setSaving(false)
    }
  }

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setSaving(true)
      await seoService.updateSiteSeoSettings(settings)
      alert('Global SEO Settings updated successfully!')
    } catch (err) {
      alert('Failed saving SEO settings')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center font-mono text-xs text-white/40">
        Loading Global SEO Engine &amp; Page Metadata...
      </div>
    )
  }

  const currentPageInfo = STATIC_PAGES_LIST.find((p) => p.slug === selectedPageSlug)

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#4DE8DC] uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Yoast / RankMath Style Engine
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            SEO &amp; Meta Suite Center
          </h1>
        </div>

        {activeTab === 'pages' ? (
          <button
            type="button"
            onClick={handleSavePageSeo}
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(77,232,220,0.4)] transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> {saving ? 'Saving Page...' : `Save SEO for ${currentPageInfo?.name || 'Page'}`}
          </button>
        ) : (
          <button
            type="submit"
            form="site-seo-form"
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(77,232,220,0.4)] transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save Global SEO Settings'}
          </button>
        )}
      </div>

      {/* Main Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10">
        <button
          type="button"
          onClick={() => setActiveTab('pages')}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'pages'
              ? 'bg-[#4DE8DC]/20 text-[#4DE8DC] border border-[#4DE8DC]/40 font-bold shadow-[0_0_15px_rgba(77,232,220,0.2)]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <FileText className="w-4 h-4" /> Page-by-Page SEO Manager ({STATIC_PAGES_LIST.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('defaults')}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'defaults'
              ? 'bg-[#4DE8DC]/20 text-[#4DE8DC] border border-[#4DE8DC]/40 font-bold'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <Globe className="w-4 h-4" /> Sitewide Defaults
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('org')}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'org'
              ? 'bg-[#4DE8DC]/20 text-[#4DE8DC] border border-[#4DE8DC]/40 font-bold'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <Code className="w-4 h-4" /> Organization Schema
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('verifications')}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'verifications'
              ? 'bg-[#4DE8DC]/20 text-[#4DE8DC] border border-[#4DE8DC]/40 font-bold'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <ShieldAlert className="w-4 h-4" /> Verifications &amp; Analytics
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('redirects')}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'redirects'
              ? 'bg-[#4DE8DC]/20 text-[#4DE8DC] border border-[#4DE8DC]/40 font-bold'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <Sliders className="w-4 h-4" /> 301 Redirects ({redirects.length})
        </button>
      </div>

      {/* TAB 1: PAGE-BY-PAGE SEO MANAGER */}
      {activeTab === 'pages' && (
        <div className="space-y-6">
          {/* Select Target Page Dropdown & Pill List */}
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider mb-1">
                  Select Target Website Page
                </label>
                <div className="text-xs text-white/60">
                  Select any website page below to edit its custom SEO title, description, OG image, search preview, and schema markup.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {STATIC_PAGES_LIST.map((page) => {
                const isSelected = selectedPageSlug === page.slug
                const hasCustomSeo = !!pagesSeoList.find((p) => p.page_slug === page.slug)?.seo?.seo_title
                return (
                  <button
                    key={page.slug}
                    type="button"
                    onClick={() => handleSelectPage(page.slug)}
                    className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#4DE8DC]/15 border-[#4DE8DC] text-white shadow-[0_0_15px_rgba(77,232,220,0.2)]'
                        : 'bg-white/[0.03] border-white/10 text-white/80 hover:bg-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm flex items-center justify-between gap-2">
                        <span className="truncate">{page.name}</span>
                        {hasCustomSeo && (
                          <span className="w-2 h-2 rounded-full bg-[#4DE8DC] shrink-0" title="Custom SEO Saved" />
                        )}
                      </div>
                      <div className="font-mono text-[11px] text-[#4DE8DC] truncate mt-0.5">
                        {page.slug}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Render Full Yoast SEO Suite Component for Selected Page */}
          <div className="space-y-4">
            <div className="px-2 font-mono text-xs text-[#4DE8DC] uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4" /> Editing SEO Settings for: <span className="text-white font-bold">{currentPageInfo?.name} ({selectedPageSlug})</span>
            </div>

            <SeoFormSection
              seoData={selectedPageSeo}
              onChange={setSelectedPageSeo}
              defaultTitle={currentPageInfo?.defaultTitle || ''}
              defaultExcerpt={currentPageInfo?.defaultDesc || ''}
              defaultSlug={selectedPageSlug.replace(/^\//, '') || 'home'}
            />
          </div>
        </div>
      )}

      {/* FORM FOR GLOBAL SETTINGS */}
      <form id="site-seo-form" onSubmit={handleSaveSettings} className="space-y-8">
        {/* TAB 2: SITEWIDE DEFAULTS */}
        {activeTab === 'defaults' && (
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                Title Template Tag
              </label>
              <input
                type="text"
                value={settings.default_title_template}
                onChange={(e) => setSettings({ ...settings, default_title_template: e.target.value })}
                placeholder="%page_title% | Impetic"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-white focus:outline-none focus:border-[#4DE8DC]"
              />
              <p className="text-[11px] text-white/50">
                Use <code className="text-[#4DE8DC]">%page_title%</code> as the dynamic placeholder for each page title.
              </p>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                Default Meta Description (Fallback)
              </label>
              <textarea
                rows={3}
                value={settings.default_meta_description}
                onChange={(e) => setSettings({ ...settings, default_meta_description: e.target.value })}
                placeholder="Fallback site meta description for pages without custom metadata..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Site Brand Name
                </label>
                <input
                  type="text"
                  value={settings.site_name}
                  onChange={(e) => setSettings({ ...settings, site_name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Twitter / X Handle
                </label>
                <input
                  type="text"
                  value={settings.twitter_handle}
                  onChange={(e) => setSettings({ ...settings, twitter_handle: e.target.value })}
                  placeholder="@impetic"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
                />
              </div>
            </div>

            <ImageUploader
              value={settings.default_og_image}
              onChange={(url) => setSettings({ ...settings, default_og_image: url })}
              label="Default OpenGraph / Social Share Image (1200x630)"
            />
          </div>
        )}

        {/* TAB 3: ORGANIZATION SCHEMA */}
        {activeTab === 'org' && (
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Global Organization Schema (JSON-LD)
                </label>
                <span className="text-[11px] font-mono text-[#4DE8DC]">Injected Sitewide</span>
              </div>
              <textarea
                rows={10}
                value={settings.organization_schema_json || ''}
                onChange={(e) => setSettings({ ...settings, organization_schema_json: e.target.value })}
                className="w-full p-4 rounded-xl bg-[#080D0F] border border-white/10 font-mono text-xs text-[#4DE8DC] focus:outline-none focus:border-[#4DE8DC]"
              />
            </div>
          </div>
        )}

        {/* TAB 4: VERIFICATIONS & ANALYTICS */}
        {activeTab === 'verifications' && (
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Google Site Verification Code
                </label>
                <input
                  type="text"
                  value={settings.google_site_verification || ''}
                  onChange={(e) => setSettings({ ...settings, google_site_verification: e.target.value })}
                  placeholder="e.g. google-site-verification=abc123xyz"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Bing Site Verification Code
                </label>
                <input
                  type="text"
                  value={settings.bing_site_verification || ''}
                  onChange={(e) => setSettings({ ...settings, bing_site_verification: e.target.value })}
                  placeholder="e.g. msvalidate.01=12345"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Google Analytics Measurement ID (GA4)
                </label>
                <input
                  type="text"
                  value={settings.google_analytics_id || ''}
                  onChange={(e) => setSettings({ ...settings, google_analytics_id: e.target.value })}
                  placeholder="G-XXXXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                  Google Tag Manager ID (GTM)
                </label>
                <input
                  type="text"
                  value={settings.gtag_id || ''}
                  onChange={(e) => setSettings({ ...settings, gtag_id: e.target.value })}
                  placeholder="GTM-XXXXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4DE8DC]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
                Custom Robots.txt Disallow Rules
              </label>
              <textarea
                rows={3}
                value={settings.custom_disallow_rules || ''}
                onChange={(e) => setSettings({ ...settings, custom_disallow_rules: e.target.value })}
                placeholder="Disallow: /admin/&#10;Disallow: /tmp/"
                className="w-full px-4 py-3 rounded-xl bg-[#080D0F] border border-white/10 font-mono text-xs text-white focus:outline-none focus:border-[#4DE8DC]"
              />
            </div>
          </div>
        )}
      </form>

      {/* TAB 5: 301 REDIRECTS MANAGEMENT */}
      {activeTab === 'redirects' && (
        <div className="space-y-8">
          {/* Redirects are served by the host, not stored in the database */}
          <div className="p-6 rounded-3xl bg-[#4DE8DC]/[0.04] border border-[#4DE8DC]/20 space-y-2 font-mono text-xs text-white/70 leading-relaxed">
            <div className="text-[#4DE8DC] uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" /> Live server redirects (read-only)
            </div>
            <p>
              The site is a static export hosted on Hostinger, so redirects are applied by <span className="text-white">public/.htaccess</span>,
              not by this panel or Supabase. This list mirrors those rules exactly. To add or change a redirect, edit
              <span className="text-white"> public/.htaccess</span> and <span className="text-white">src/lib/redirects.ts</span>, then rebuild and redeploy.
            </p>
          </div>

          {/* Active Redirect Rules Table */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
            <h4 className="font-mono text-xs text-[#4DE8DC] uppercase tracking-wider">
              Active 301 Redirects on impetic.com ({redirects.length})
            </h4>

            {redirects.length === 0 ? (
              <div className="py-8 text-center font-mono text-xs text-white/40">
                No redirects configured.
              </div>
            ) : (
              <div className="divide-y divide-white/5 overflow-x-auto">
                {redirects.map((r) => (
                  <div key={r.id} className="py-3.5 flex items-center justify-between gap-4 font-mono text-xs">
                    <div className="flex items-center gap-3 truncate">
                      <span className="px-2 py-0.5 rounded bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 font-bold shrink-0">
                        {r.redirect_type}
                      </span>
                      <span className="text-white truncate">{r.old_path}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white/40 shrink-0" />
                      <span className="text-[#4DE8DC] truncate">{r.new_path}</span>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
