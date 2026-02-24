'use client'

import ScrollReveal from './ScrollReveal'
import { useState } from 'react'

const EMAIL = 'carlosmigueltorres20020@gmail.com'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/JenxxAI',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/carlos-miguel-torres-2644a9332/',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <section id="contact" className="py-32 px-4 sm:px-8 lg:px-16 text-center" style={{ background: '#080810' }}>
      <div className="max-w-xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-purple tracking-[0.15em] uppercase mb-2">
            // Let&apos;s Connect
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2
            className="font-syne font-bold mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Got a <span className="text-purple-light">Project in Mind?</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="leading-relaxed mb-10 font-light" style={{ color: '#8888a8', fontSize: '1.05rem' }}>
            Whether you want to collaborate, have a project idea, or just want to say hi —
            my inbox is always open. Let&apos;s build something great together.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg text-white font-medium text-lg transition-all duration-200"
            style={{
              background: '#9333ea',
              boxShadow: '0 0 20px rgba(147,51,234,0.4)',
            }}
          >
            Say Hello 👋
          </a>
        </ScrollReveal>

        {/* Copy email */}
        <ScrollReveal delay={180}>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 mt-4 font-mono text-xs tracking-widest transition-colors duration-200"
            style={{ color: copied ? '#c084fc' : '#6b6b8a' }}
          >
            {copied ? (
              <><CheckIcon /> Copied!</>
            ) : (
              <><CopyIcon /> {EMAIL}</>
            )}
          </button>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex justify-center flex-wrap gap-3 mt-8">
            {socials.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs tracking-widest transition-all duration-200"
                style={{
                  border: '1px solid #1e1e35',
                  color: '#6b6b8a',
                }}
              >
                {social.icon}
                {social.label}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function CopyIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}
