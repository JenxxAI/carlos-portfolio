import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Carlos Miguel V. Torres — Frontend Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080810',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Glow orb */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(147,51,234,0.35), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: '1px solid #581c87',
            background: 'rgba(147,51,234,0.12)',
            borderRadius: 999,
            padding: '6px 16px',
            marginBottom: 32,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#9333ea' }} />
          <span style={{ color: '#c084fc', fontSize: 14, letterSpacing: '0.12em' }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#f0eeff',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 8,
          }}
        >
          Carlos Miguel
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 28,
            background: 'linear-gradient(135deg, #c084fc, #9333ea)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          V. Torres
        </div>

        {/* Role */}
        <div style={{ fontSize: 24, color: '#8888a8', fontWeight: 300, marginBottom: 48 }}>
          Frontend Developer · React · Next.js · TypeScript
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
            CM<span style={{ color: '#9333ea' }}>.</span>Torres
          </div>
          <div style={{ width: 1, height: 20, background: '#1e1e35' }} />
          <div style={{ fontSize: 14, color: '#6b6b8a', letterSpacing: '0.08em' }}>
            carlosmigueltorres20020@gmail.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
