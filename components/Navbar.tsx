'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '#hero',       id: 'hero',       label: 'Home' },
  { href: '#skills',     id: 'skills',     label: 'Skills' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#projects',   id: 'projects',   label: 'Projects' },
  { href: '#about',      id: 'about',      label: 'About' },
  { href: '#contact',    id: 'contact',    label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{
        backdropFilter: 'blur(20px)',
        background: 'rgba(8,8,16,0.7)',
        borderBottom: '1px solid #1e1e35',
      }}
    >
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-5">
        <Link href="/" className="font-syne font-extrabold text-xl tracking-tight text-white">
          CM<span className="text-purple">.</span>Torres
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-mono text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: active === link.id ? '#c084fc' : '#6b6b8a' }}
              >
                {link.label}
                {active === link.id && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ background: '#9333ea' }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? (
            <>
              <span className="w-5 h-px bg-muted block rotate-45 translate-y-[6.5px] transition-transform duration-200" />
              <span className="w-5 h-px bg-muted block -rotate-45 transition-transform duration-200" />
            </>
          ) : (
            <>
              <span className="w-5 h-px bg-muted block transition-transform duration-200" />
              <span className="w-5 h-px bg-muted block transition-transform duration-200" />
              <span className="w-3 h-px bg-muted block transition-transform duration-200" />
            </>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <ul
          className="md:hidden flex flex-col list-none px-4 pb-5 gap-4"
          style={{ borderTop: '1px solid #1e1e35' }}
        >
          {links.map(link => (
            <li key={link.href} className="pt-3">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: active === link.id ? '#c084fc' : '#6b6b8a' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
