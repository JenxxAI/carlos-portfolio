'use client'

import { useEffect, useState } from 'react'

export default function Splash() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400)
    const hideTimer = setTimeout(() => setVisible(false), 1900)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: '#080810',
        transition: 'opacity 0.5s ease',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <span
          className="font-syne font-extrabold text-3xl tracking-tight text-white animate-fade-up"
          style={{ letterSpacing: '-0.03em' }}
        >
          CM<span style={{ color: '#9333ea' }}>.</span>Torres
        </span>
        {/* Loading bar */}
        <div className="w-32 h-px overflow-hidden rounded-full" style={{ background: '#1e1e35' }}>
          <div
            className="h-px rounded-full"
            style={{
              background: 'linear-gradient(90deg, #9333ea, #c084fc)',
              animation: 'loadBar 1.4s ease forwards',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loadBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}
