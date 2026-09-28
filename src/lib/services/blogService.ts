import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';
import { Blog, Category, Tag, BlogFilterOptions, BlogStatus } from '@/lib/supabase/types';

// Mock initial data used when Supabase credentials are not set yet
let MOCK_CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'AI & Automation', slug: 'ai-automation', description: 'Insights on LLMs, RAG, custom agents and AI infrastructure' },
  { id: 'cat-2', name: 'Engineering & WebGL', slug: 'engineering-webgl', description: 'High-performance web architecture, Three.js, and frontend design' },
  { id: 'cat-3', name: 'Digital Marketing', slug: 'digital-marketing', description: 'Technical SEO, growth funnels, PPC and conversion optimization' },
];

let MOCK_TAGS: Tag[] = [
  { id: 'tag-1', name: 'Next.js', slug: 'nextjs' },
  { id: 'tag-2', name: 'AI', slug: 'ai' },
  { id: 'tag-3', name: 'Three.js', slug: 'threejs' },
  { id: 'tag-4', name: 'SEO', slug: 'seo' },
  { id: 'tag-5', name: 'Growth', slug: 'growth' },
];

let MOCK_BLOGS: Blog[] = [
  {
    id: 'blog-1',
    title: 'Building Production-Grade AI Agents with Custom RAG Architecture',
    slug: 'building-production-grade-ai-agents',
    excerpt: 'Explore how we engineer autonomous AI agents with retrieval-augmented generation, memory pipelines, and strict execution guardrails.',
    content: `<h2>The Evolution of AI Systems</h2>
<p>Modern enterprise applications demand intelligent AI agents that go beyond surface-level chatbots. By integrating Retrieval-Augmented Generation (RAG) directly into your data pipelines, products can synthesize real-time contextual awareness with deterministic outputs.</p>

<h3>Core Pillars of Enterprise RAG</h3>
<ul>
  <li><strong>Vector Embeddings:</strong> Indexing structured and unstructured knowledge bases into high-dimensional vector spaces.</li>
  <li><strong>Semantic Retrieval:</strong> Querying hybrid dense-sparse vector stores for ultra-low latency context extraction.</li>
  <li><strong>Autonomous Execution:</strong> Utilizing tool calling and structured function outputs for multi-step agent actions.</li>
</ul>

<blockquote>"AI shouldn't just respond to prompts; it should actively orchestrate business operations with zero hallucinations."</blockquote>

<h3>Implementation Best Practices</h3>
<p>When deploying production RAG workflows, always implement streaming responses, token usage telemetry, and evaluation benchmarks from day one.</p>`,
    featured_image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    author: 'Sarah Chen',
    category_id: 'cat-1',
    category: MOCK_CATEGORIES[0],
    tags: [MOCK_TAGS[0], MOCK_TAGS[1]],
    status: 'published',
    seo_title: 'Building Production AI Agents | Impetic Insights',
    seo_description: 'Discover how to engineer high-throughput AI agents and custom RAG architectures for modern web platforms.',
    views: 1420,
    published_at: '2026-08-15T10:00:00Z',
    created_at: '2026-08-10T10:00:00Z',
    updated_at: '2026-08-15T10:00:00Z',
  },
  {
    id: 'blog-2',
    title: 'Optimizing 3D WebGL Interfaces for Sub-Second Initial Load',
    slug: 'optimizing-3d-webgl-interfaces',
    excerpt: 'A technical deep-dive into Shader optimization, Draco compression, and dynamic Asset Streaming in React Three Fiber.',
    content: `<h2>Making the Spatial Web Ultra Fast</h2>
<p>3D visuals elevate brand identity, but unoptimized WebGL assets ruin initial page loads and Core Web Vitals score. Here is how we maintain 60 FPS performance while keeping initial bundle size minimal.</p>

<h3>Key Optimization Techniques</h3>
<ul>
  <li><strong>Draco & Basis Compression:</strong> Compressing 3D mesh geometry and textures by up to 85% without visual loss.</li>
  <li><strong>Instanced Meshes:</strong> Rendering thousands of complex shapes in a single GPU draw call.</li>
  <li><strong>Deferred Canvas Hydration:</strong> Loading the 3D WebGL scene progressively after critical UI interactivity.</li>
</ul>

<pre><code>// Example: Dynamic Canvas Component Hydration
const DynamicScene = dynamic(() => import('./Scene'), { ssr: false });
</code></pre>`,
    featured_image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    author: 'Marcus Reyes',
    category_id: 'cat-2',
    category: MOCK_CATEGORIES[1],
    tags: [MOCK_TAGS[0], MOCK_TAGS[2]],
    status: 'published',
    seo_title: 'WebGL Performance Optimization | Impetic',
    seo_description: 'Learn Three.js and React Three Fiber performance techniques for fast 60 FPS web applications.',
    views: 980,
    published_at: '2026-08-20T14:30:00Z',
    created_at: '2026-08-18T12:00:00Z',
    updated_at: '2026-08-20T14:30:00Z',
  },
  {
    id: 'blog-3',
    title: 'Technical SEO Strategies for Single Page & Next.js App Router Platforms',
    slug: 'technical-seo-strategies-nextjs',
    excerpt: 'How to structure canonical metadata, dynamic open-graph images, and server-rendered schemas to maximize search authority.',
    content: `<h2>Engineering Organic Growth</h2>
<p>Modern web engineering and SEO must operate as one cohesive discipline. By leveraging Next.js App Router static generation and dynamic metadata API, search crawlers index every page with precise context.</p>

<h3>Essential Technical Checklist</h3>
<ul>
  <li><strong>Semantic JSON-LD:</strong> Embedding structured Article & Organization schemas for rich snippets.</li>
  <li><strong>Dynamic OG Cards:</strong> Automated OpenGraph image generation matching every blog title.</li>
  <li><strong>Clean Canonical URLs:</strong> Preventing duplicate content issues across URL parameters.</li>
</ul>`,
    featured_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    author: 'Amara Odeh',
    category_id: 'cat-3',
    category: MOCK_CATEGORIES[2],
    tags: [MOCK_TAGS[0], MOCK_TAGS[3], MOCK_TAGS[4]],
    status: 'published',
    seo_title: 'Technical SEO for Next.js | Impetic Guide',
    seo_description: 'Complete guide to Next.js App Router technical SEO, canonical metadata, and schema markup.',
    views: 1150,
    published_at: '2026-08-28T09:15:00Z',
    created_at: '2026-08-25T11:00:00Z',
    updated_at: '2026-08-28T09:15:00Z',
  },
];

export const blogService = {
  // Get all categories
  async getCategories(): Promise<Category[]> {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('categories').select('*').order('name');
        if (!error && data) return data;
      } catch (e) {
        console.warn('Supabase fetch failed, falling back to mock categories', e);
      }
    }
    return MOCK_CATEGORIES;
  },

  // Get all tags
  async getTags(): Promise<Tag[]> {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('tags').select('*').order('name');
        if (!error && data) return data;
      } catch (e) {
        console.warn('Supabase fetch failed, falling back to mock tags', e);
      }
    }
    return MOCK_TAGS;
  },

  // Get published blogs (Public)
  async getPublishedBlogs(options: BlogFilterOptions = {}): Promise<{ blogs: Blog[]; total: number }> {
    if (isSupabaseConfigured()) {
      try {
        let query = supabase
          .from('blogs')
          .select('*, category:categories(*)', { count: 'exact' })
          .eq('status', 'published')
          .order('published_at', { ascending: false });

        if (options.search) {
          query = query.or(`title.ilike.%${options.search}%,excerpt.ilike.%${options.search}%`);
        }

        if (options.categorySlug) {
          const { data: cat } = await supabase.from('categories').select('id').eq('slug', options.categorySlug).single();
          if (cat) {
            query = query.eq('category_id', cat.id);
          }
        }

        const page = options.page || 1;
        const limit = options.limit || 10;
        const from = (page - 1) * limit;
        const to = from + limit - 1;
        query = query.range(from, to);

        const { data, count, error } = await query;
        if (!error && data) {
          return { blogs: data as Blog[], total: count || data.length };
        }
      } catch (e) {
        console.warn('Supabase query error, using mock data fallback', e);
      }
    }

    // Mock filtering logic
    let filtered = MOCK_BLOGS.filter(b => b.status === 'published');

    if (options.search) {
      const q = options.search.toLowerCase();
      filtered = filtered.filter(b => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q));
    }

    if (options.categorySlug) {
      filtered = filtered.filter(b => b.category?.slug === options.categorySlug);
    }

    if (options.tagSlug) {
      filtered = filtered.filter(b => b.tags?.some(t => t.slug === options.tagSlug));
    }

    return { blogs: filtered, total: filtered.length };
  },

  // Get single blog by slug
  async getBlogBySlug(slug: string): Promise<Blog | null> {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*, category:categories(*)')
          .eq('slug', slug)
          .single();

        if (!error && data) {
          // increment view count silently
          await supabase.from('blogs').update({ views: (data.views || 0) + 1 }).eq('id', data.id);
          return data as Blog;
        }
      } catch (e) {
        console.warn('Supabase getBlogBySlug error', e);
      }
    }

    const found = MOCK_BLOGS.find(b => b.slug === slug);
    return found || null;
  },

  // Get all blogs (Admin view: draft + published)
  async getAllBlogs(options: BlogFilterOptions = {}): Promise<{ blogs: Blog[]; total: number }> {
    if (isSupabaseConfigured()) {
      try {
        let query = supabase
          .from('blogs')
          .select('*, category:categories(*)', { count: 'exact' })
          .order('created_at', { ascending: false });

        if (options.status && options.status !== 'all') {
          query = query.eq('status', options.status);
        }

        if (options.search) {
          query = query.or(`title.ilike.%${options.search}%,slug.ilike.%${options.search}%`);
        }

        const { data, count, error } = await query;
        if (!error && data) {
          return { blogs: data as Blog[], total: count || data.length };
        }
      } catch (e) {
        console.warn('Supabase getAllBlogs error', e);
      }
    }

    let filtered = [...MOCK_BLOGS];
    if (options.status && options.status !== 'all') {
      filtered = filtered.filter(b => b.status === options.status);
    }
    if (options.search) {
      const q = options.search.toLowerCase();
      filtered = filtered.filter(b => b.title.toLowerCase().includes(q) || b.slug.toLowerCase().includes(q));
    }

    return { blogs: filtered, total: filtered.length };
  },

  // Get single blog by ID (Admin edit)
  async getBlogById(id: string): Promise<Blog | null> {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('blogs').select('*, category:categories(*)').eq('id', id).single();
        if (!error && data) return data as Blog;
      } catch (e) {
        console.warn('Supabase getBlogById error', e);
      }
    }

    return MOCK_BLOGS.find(b => b.id === id) || null;
  },

  // Create Blog
  async createBlog(blog: Partial<Blog>): Promise<Blog> {
    const newBlog: Blog = {
      id: blog.id || `blog-${Date.now()}`,
      title: blog.title || 'Untitled Post',
      slug: blog.slug || `post-${Date.now()}`,
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      featured_image: blog.featured_image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      author: blog.author || 'Impetic Team',
      category_id: blog.category_id,
      category: MOCK_CATEGORIES.find(c => c.id === blog.category_id) || MOCK_CATEGORIES[0],
      status: blog.status || 'draft',
      seo_title: blog.seo_title || blog.seo?.seo_title || blog.title,
      seo_description: blog.seo_description || blog.seo?.meta_description || blog.excerpt,
      seo: blog.seo || {
        seo_title: blog.seo_title || blog.title,
        meta_description: blog.seo_description || blog.excerpt,
        slug: blog.slug,
        schema_type: 'Article',
      },
      views: 0,
      published_at: blog.status === 'published' ? new Date().toISOString() : undefined,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('blogs').insert([{
          title: newBlog.title,
          slug: newBlog.slug,
          excerpt: newBlog.excerpt,
          content: newBlog.content,
          featured_image: newBlog.featured_image,
          author: newBlog.author,
          category_id: newBlog.category_id,
          status: newBlog.status,
          seo_title: newBlog.seo_title,
          seo_description: newBlog.seo_description,
          seo: newBlog.seo,
          published_at: newBlog.published_at,
        }]).select().single();

        if (!error && data) return data as Blog;
      } catch (e) {
        console.warn('Supabase createBlog error', e);
      }
    }

    MOCK_BLOGS.unshift(newBlog);
    return newBlog;
  },

  // Update Blog
  async updateBlog(id: string, updates: Partial<Blog>): Promise<Blog | null> {
    if (isSupabaseConfigured()) {
      try {
        const payload: any = { ...updates, updated_at: new Date().toISOString() };
        if (updates.status === 'published' && !updates.published_at) {
          payload.published_at = new Date().toISOString();
        }

        const { data, error } = await supabase.from('blogs').update(payload).eq('id', id).select().single();
        if (!error && data) return data as Blog;
      } catch (e) {
        console.warn('Supabase updateBlog error', e);
      }
    }

    const idx = MOCK_BLOGS.findIndex(b => b.id === id);
    if (idx !== -1) {
      MOCK_BLOGS[idx] = { ...MOCK_BLOGS[idx], ...updates, updated_at: new Date().toISOString() };
      return MOCK_BLOGS[idx];
    }
    return null;
  },

  // Delete Blog
  async deleteBlog(id: string): Promise<boolean> {
    if (isSupabaseConfigured()) {
      try {
        const { error } = await supabase.from('blogs').delete().eq('id', id);
        if (!error) return true;
      } catch (e) {
        console.warn('Supabase deleteBlog error', e);
      }
    }

    const idx = MOCK_BLOGS.findIndex(b => b.id === id);
    if (idx !== -1) {
      MOCK_BLOGS.splice(idx, 1);
      return true;
    }
    return false;
  },

  // Upload image to Supabase Storage bucket 'blog-images'
  async uploadImage(file: File): Promise<string> {
    if (isSupabaseConfigured()) {
      try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `images/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(filePath, file, { cacheControl: '3600', upsert: true });

        if (!uploadError) {
          const { data } = supabase.storage.from('blog-images').getPublicUrl(filePath);
          if (data.publicUrl) return data.publicUrl;
        }
      } catch (e) {
        console.warn('Supabase image upload failed, using Object URL fallback', e);
      }
    }

    // Fallback: local blob preview URL for demonstration
    return URL.createObjectURL(file);
  },
};
