'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const EMAIL = 'carlosmigueltorres20020@gmail.com'

const socials = [
  { label: 'GitHub', href: 'https://github.com/JenxxAI' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/carlos-miguel-torres-2644a9332/' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="contact-section section-shell">
      <div className="contact-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <ScrollReveal>
        <div className="contact-card">
          <p className="section-kicker">{'// Open channel'}</p>
          <h2>Have a technical problem, a role, or an idea worth exploring?</h2>
          <p>
            I&apos;m always glad to connect with people working on support, quality, operations,
            automation, or useful products.
          </p>

          <div className="contact-actions">
            <a href={`mailto:${EMAIL}`} className="button button--primary">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
            <button type="button" className="button button--secondary" onClick={copyEmail}>
              {copied ? 'Email copied' : 'Copy email'}
              <CopyIcon checked={copied} />
            </button>
          </div>

          <div className="contact-footer">
            <p aria-live="polite">{copied ? 'Email address copied to your clipboard.' : EMAIL}</p>
            <div>
              {socials.map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

function CopyIcon({ checked }: { checked: boolean }) {
  return checked ? (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  ) : (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  )
}
