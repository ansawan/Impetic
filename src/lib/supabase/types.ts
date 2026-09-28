export type BlogStatus = 'draft' | 'published';

export type UserRole = 'admin' | 'editor';

export type SchemaType =
  | 'Article'
  | 'Service'
  | 'FAQPage'
  | 'LocalBusiness'
  | 'Organization'
  | 'WebPage';

export interface SeoData {
  seo_title?: string;
  meta_description?: string;
  slug?: string;
  canonical_url?: string;
  focus_keyword?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_card_type?: 'summary' | 'summary_large_image';
  noindex?: boolean;
  nofollow?: boolean;
  schema_type?: SchemaType;
  custom_schema_json?: string;
}

export interface PageSeoRecord {
  page_slug: string;
  page_name: string;
  seo: SeoData;
  updated_at?: string;
}

export interface SiteSeoSettings {
  id?: string;
  default_title_template: string;
  default_meta_description: string;
  default_og_image: string;
  site_name: string;
  twitter_handle: string;
  organization_schema_json?: string;
  google_site_verification?: string;
  bing_site_verification?: string;
  google_analytics_id?: string;
  gtag_id?: string;
  custom_disallow_rules?: string;
  updated_at?: string;
}

export interface RedirectRule {
  id: string;
  old_path: string;
  new_path: string;
  redirect_type: 301 | 302;
  created_at?: string;
}

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  role: UserRole;
  created_at?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  created_at?: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  author_id?: string;
  category_id?: string;
  category?: Category;
  tags?: Tag[];
  status: BlogStatus;
  seo_title?: string;
  seo_description?: string;
  seo?: SeoData;
  views?: number;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface BlogFilterOptions {
  search?: string;
  categorySlug?: string;
  tagSlug?: string;
  status?: BlogStatus | 'all';
  page?: number;
  limit?: number;
}
