import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#080810',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          fontWeight: 800,
          fontSize: 14,
          color: '#f0eeff',
          letterSpacing: '-0.03em',
        }}
      >
        C<span style={{ color: '#9333ea' }}>.</span>
      </div>
    ),
    { ...size }
  )
}
