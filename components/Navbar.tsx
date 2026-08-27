'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '#hero', id: 'hero', label: 'Home' },
  { href: '#experience', id: 'experience', label: 'Journey' },
  { href: '#skills', id: 'skills', label: 'Capabilities' },
  { href: '#projects', id: 'projects', label: 'Work' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    links.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-35% 0px -55% 0px' }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach(observer => observer.disconnect())
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="site-nav__inner">
        <Link href="#hero" className="brand-mark" onClick={() => setOpen(false)}>
          <span className="brand-mark__monogram">CMT</span>
          <span className="brand-mark__name">Carlos Torres</span>
        </Link>

        <ul className="site-nav__desktop">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.id ? 'is-active' : ''}
                aria-current={active === link.id ? 'location' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(current => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <ul>
          {links.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.id ? 'is-active' : ''}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                <span>0{index + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p>Technical support · Software quality · IT operations</p>
      </div>
    </nav>
  )
}
