# Impetic

Impetic is an AI, digital marketing and software engineering agency website — showcasing our services, blog, and helping businesses grow through AI-powered solutions.

## Services

- AI Solutions — custom AI agents, LLM chatbots, RAG, workflow automation, predictive analytics, MLOps
- Digital Marketing — SEO, paid media / PPC, social media, content & email marketing, CRO, analytics
- Software Engineering — custom web apps, SaaS, mobile apps, API development, legacy modernization
- Virtual Assistants — executive, legal, real estate, home service and marketing agency assistants
- GoHighLevel, CRM automation and lead generation

## Tech Stack

- Next.js (App Router, static export) + TypeScript
- Tailwind CSS
- React Three Fiber / Three.js + GSAP
- Supabase (blog & SEO admin)

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The blog admin lives at `/admin`.

See [SUPABASE_SETUP.md](SUPABASE_SETUP.md) for database schema and setup.

## Build & Deploy

```bash
npm run build
```

The static site is exported to `out/`. Upload its contents (including `.htaccess` from `public/`) to your hosting (e.g. Hostinger `public_html`).

## License

© 2026 Impetic. All rights reserved.
