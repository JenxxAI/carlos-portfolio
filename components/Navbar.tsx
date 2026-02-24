'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

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

        <ul className="hidden md:flex gap-10 list-none">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs text-muted uppercase tracking-widest hover:text-purple-light transition-colors duration-200"
              >
                {link.label}
              </Link>
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
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs text-muted uppercase tracking-widest hover:text-purple-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
