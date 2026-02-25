import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-8 lg:px-20 pt-32 pb-16"
    >
      {/* Grid background */}
      <div className="hero-grid" />

      {/* Orbs */}
      <div
        className="animate-float pointer-events-none absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(147,51,234,0.25), transparent 70%)',
          filter: 'blur(80px)',
          top: -100,
          right: -100,
        }}
      />
      <div
        className="animate-float-reverse pointer-events-none absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(192,132,252,0.12), transparent 70%)',
          filter: 'blur(80px)',
          bottom: 0,
          left: '10%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full mx-auto sm:mx-0 text-center sm:text-left">
        {/* Badge */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-purple-light font-mono text-xs tracking-widest"
          style={{
            border: '1px solid #581c87',
            background: 'rgba(147,51,234,0.08)',
          }}
        >
          <span
            className="animate-pulse-dot w-1.5 h-1.5 rounded-full"
            style={{ background: '#9333ea' }}
          />
          Available for opportunities
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-up delay-100 font-syne font-extrabold leading-none tracking-tight mb-6 text-4xl sm:text-6xl lg:text-8xl"
          style={{ letterSpacing: '-0.03em' }}
        >
          Frontend
          <br />
          <span className="gradient-text block">Developer</span>
        </h1>

        {/* Bio */}
        <p
          className="animate-fade-up delay-200 text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto sm:mx-0"
          style={{ color: '#a0a0c0' }}
        >
          I&apos;m{' '}
          <strong className="text-white font-medium">Carlos Miguel V. Torres</strong> — a
          passionate Frontend Developer who turns ideas into clean, interactive web
          experiences. I write code that not only works — it impresses. 🚀
        </p>

        {/* CTA */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-3 rounded-lg font-medium text-white transition-all duration-200 w-full sm:w-auto"
            style={{
              background: '#9333ea',
              boxShadow: '0 0 20px rgba(147,51,234,0.4)',
            }}
          >
            <GitIcon />
            View Projects
          </Link>
          <a
            href="/Carlos_Torres_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-3 rounded-lg font-medium text-white transition-all duration-200 w-full sm:w-auto"
            style={{
              border: '1px solid #581c87',
              background: 'rgba(147,51,234,0.1)',
            }}
          >
            <DownloadIcon />
            Download CV
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-3 rounded-lg font-normal text-white transition-all duration-200 w-full sm:w-auto"
            style={{
              border: '1px solid #1e1e35',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            <MailIcon />
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="animate-fade-in delay-1000 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-xs tracking-widest"
        style={{ color: '#6b6b8a' }}
      >
        <div
          className="animate-scroll-line w-px"
          style={{
            height: 40,
            background: 'linear-gradient(to bottom, #9333ea, transparent)',
          }}
        />
        SCROLL
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
    </svg>
  )
}

function GitIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 7l9 6 9-6M3 17l9 6 9-6" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 4h16v16H4z" /><path d="M4 4l8 8 8-8" />
    </svg>
  )
}
