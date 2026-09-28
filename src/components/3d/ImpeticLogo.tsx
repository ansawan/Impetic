import React from 'react';

export function ImpeticLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_12px_rgba(77,232,220,0.5)] transition-transform duration-300 group-hover:scale-105">
        <defs>
          <linearGradient id="impetic-grad-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60F5E8"/>
            <stop offset="100%" stopColor="#2FBFB0"/>
          </linearGradient>
          <linearGradient id="impetic-grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2FBFB0"/>
            <stop offset="100%" stopColor="#19736B"/>
          </linearGradient>
          <linearGradient id="impetic-grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4DE8DC"/>
            <stop offset="100%" stopColor="#1F857B"/>
          </linearGradient>
        </defs>
        {/* Top Face */}
        <path d="M50 15 L82 33 L50 51 L18 33 Z" fill="url(#impetic-grad-top)" />
        {/* Left Face */}
        <path d="M18 33 L50 51 L50 85 L18 67 Z" fill="url(#impetic-grad-left)" />
        {/* Right Face */}
        <path d="M50 51 L82 33 L82 67 L50 85 Z" fill="url(#impetic-grad-right)" />
        {/* Core Inner Diamond Accent */}
        <path d="M50 30 L64 38 L50 46 L36 38 Z" fill="#FFFFFF" opacity="0.85" />
      </svg>
    </div>
  );
}

