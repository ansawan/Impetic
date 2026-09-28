'use client'

interface PlatformLogo {
  name: string
  icon: (props: { className?: string }) => React.ReactElement
}

const PLATFORMS: PlatformLogo[] = [
  {
    name: 'GoHighLevel',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19 8v8l-7 3.5L5 16V8l7-3.2zM12 9l-4 2v4l4 2 4-2v-4l-4-2z" />
      </svg>
    ),
  },
  {
    name: 'WordPress',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 1.25a8.73 8.73 0 015.65 2.08L14.4 14.1l-2.4-7.2-2.4 7.2L6.35 5.33A8.73 8.73 0 0112 3.25zM3.25 12c0-1.84.57-3.55 1.55-4.96l4.4 12.83A8.72 8.72 0 013.25 12zm8.75 8.75a8.68 8.68 0 01-2.91-.5l2.25-6.52 2.29 6.51a8.68 8.68 0 01-2.63.51zm2.84-.71l4.28-12.44A8.72 8.72 0 0120.75 12a8.72 8.72 0 01-5.91 8.04z" />
      </svg>
    ),
  },
  {
    name: 'Shopify',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 4.2c-.1-.1-.3-.1-.4 0l-2.3 1.2-1.2-2.3c-.1-.2-.3-.2-.4-.1L12.3 4 10 2.2c-.2-.1-.4-.1-.5.1L8.3 4.6l-2.3-.9c-.2-.1-.4 0-.5.2L4.2 6.5c-.1.2 0 .4.2.5l2.1 1.4-1.4 2.1c-.1.2 0 .4.2.5l2.4 1.3.9 2.3c.1.2.3.3.5.2l2.2-1.2 2.3 1.2c.2.1.4 0 .5-.2l1.3-2.4 2.3-.9c.2-.1.3-.3.2-.5l-1.3-2.2 1.4-2.1c.1-.2 0-.4-.2-.5l-2.3-1.3zM12 15a3 3 0 110-6 3 3 0 010 6z" />
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.4 10.8V7.5a2.2 2.2 0 00-1.3-2 2.2 2.2 0 00-2.5.5L12 8.7 9.4 6a2.2 2.2 0 00-2.5-.5 2.2 2.2 0 00-1.3 2v3.3a4.5 4.5 0 00-2.6 4 4.5 4.5 0 007.8 3.1l1.2 1.2a1.5 1.5 0 002.2 0l1.2-1.2a4.5 4.5 0 007.8-3.1 4.5 4.5 0 00-2.6-4zM12 16.5a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04A7.49 7.49 0 0012 4a7.48 7.48 0 00-6.84 4.47A5.98 5.98 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.49 5.49 0 0112 6c2.42 0 4.52 1.56 5.24 3.86l.33 1.05 1.1.13c1.78.21 3.13 1.72 3.13 3.51 0 1.93-1.57 3.45-3.8 3.45z" />
      </svg>
    ),
  },
  {
    name: 'Zapier',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h7v8l10-12h-7V2z" />
      </svg>
    ),
  },
  {
    name: 'Make',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
      </svg>
    ),
  },
  {
    name: 'ActiveCampaign',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z" />
      </svg>
    ),
  },
  {
    name: 'Slack',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 15a2 2 0 11-2-2h2v2zm1 0a2 2 0 114 0v-2H7v2zm0-5a2 2 0 11-2-2v2h2zm0 1a2 2 0 110 4V11H7zm7-7a2 2 0 112 2h-2V4zm-1 0a2 2 0 11-4 0v2h4V4zm0 5a2 2 0 112 2V9h-2zm0-1a2 2 0 110-4v4h0z" />
      </svg>
    ),
  },
  {
    name: 'Notion',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.46 3.42l14.44-1.2a1.76 1.76 0 011.89 1.63v15.22a1.76 1.76 0 01-1.63 1.89L4.72 22a1.76 1.76 0 01-1.89-1.63V5.15a1.76 1.76 0 011.63-1.73zM6.5 6v12l3.5-6V6H6.5zm5 0v12h2.5V6H11.5zm4 0v12H18V6h-2.5z" />
      </svg>
    ),
  },
  {
    name: 'Asana',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="7" r="3.5" />
        <circle cx="6" cy="16.5" r="3.5" />
        <circle cx="18" cy="16.5" r="3.5" />
      </svg>
    ),
  },
  {
    name: 'Google Workspace',
    icon: ({ className = 'w-6 h-6' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 110 12 6 6 0 010-12z" />
      </svg>
    ),
  },
]

export function LogoMarquee() {
  const loop = [...PLATFORMS, ...PLATFORMS]

  return (
    <div className="relative overflow-hidden py-8 my-6 border-y border-white/8 bg-black/40 backdrop-blur-md select-none w-full flex items-center min-h-[90px]">
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex gap-8 w-max animate-carousel-scroll hover:[animation-play-state:paused] items-center">
        {loop.map((platform, i) => {
          const IconComp = platform.icon
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs sm:text-sm font-mono text-[#8FA6A3] hover:text-[#4DE8DC] hover:border-[#4DE8DC]/50 hover:bg-white/[0.06] transition-all cursor-default shrink-0 group"
            >
              <span className="text-[#8FA6A3] group-hover:text-[#4DE8DC] transition-colors">
                <IconComp className="w-4 h-4" />
              </span>
              <span className="tracking-wide text-white group-hover:text-[#4DE8DC] transition-colors">
                {platform.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default LogoMarquee
