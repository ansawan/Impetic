'use client'

import { useState, useSyncExternalStore } from 'react'
import { Pause, Play } from 'lucide-react'

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'
function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

// Wraps one or more auto-scrolling `.marquee-track` elements. Tracks pause while the
// region is hovered or keyboard-focused, and the button pauses them until resumed.
// Visitors who prefer reduced motion start paused.
export function MarqueeRegion({
  label,
  className = '',
  buttonClassName = 'absolute left-3 top-1/2 -translate-y-1/2',
  children,
}: {
  label: string
  className?: string
  buttonClassName?: string
  children: React.ReactNode
}) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  )
  const [userPaused, setUserPaused] = useState<boolean | null>(null)
  const paused = userPaused ?? reducedMotion

  return (
    <div className={`marquee-region ${className}`} data-paused={paused}>
      {children}
      <button
        type="button"
        onClick={() => setUserPaused(!paused)}
        aria-pressed={paused}
        aria-label={`${paused ? 'Play' : 'Pause'} ${label}`}
        title={paused ? 'Play' : 'Pause'}
        className={`${buttonClassName} z-20 inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#4DE8DC]/40 bg-black/70 backdrop-blur-md text-[#4DE8DC] hover:bg-[#4DE8DC]/15 hover:border-[#4DE8DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4DE8DC] transition-colors`}
      >
        {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
      </button>
    </div>
  )
}

export default MarqueeRegion
