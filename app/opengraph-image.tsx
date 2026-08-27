import { ImageResponse } from 'next/og'

export const alt = 'Carlos Miguel Torres — Technical Support & Quality Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#070910',
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
            background: 'radial-gradient(circle, rgba(104,221,255,0.26), transparent 70%)',
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
          <span style={{ color: '#9cecff', fontSize: 14, letterSpacing: '0.12em' }}>
            TECHNICAL SUPPORT ENGINEER · GROWSARI
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
          Torres
        </div>

        {/* Role */}
        <div style={{ fontSize: 24, color: '#8888a8', fontWeight: 300, marginBottom: 48 }}>
          Technical Support · Software Quality · IT Operations
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
            CMT<span style={{ color: '#68ddff' }}>.</span>
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
