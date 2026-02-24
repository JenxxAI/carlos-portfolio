import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: '#080810' }}
    >
      {/* Orb */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(147,51,234,0.2), transparent 70%)',
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-10">
        <p className="font-mono text-xs text-purple tracking-[0.15em] uppercase mb-4">
          // 404
        </p>
        <h1
          className="font-syne font-extrabold text-white mb-4"
          style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
        >
          4<span className="gradient-text">0</span>4
        </h1>
        <p className="font-light mb-8 max-w-sm mx-auto" style={{ color: '#8888a8' }}>
          This page doesn&apos;t exist — or maybe it&apos;s still in the queue of ideas. 😅
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-medium text-white transition-all duration-200"
          style={{
            background: '#9333ea',
            boxShadow: '0 0 20px rgba(147,51,234,0.4)',
          }}
        >
          ← Back Home
        </Link>
      </div>

      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #c084fc, #9333ea, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </main>
  )
}
