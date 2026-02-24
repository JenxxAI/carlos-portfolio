'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-16 py-5"
      style={{
        backdropFilter: 'blur(20px)',
        background: 'rgba(8,8,16,0.7)',
        borderBottom: '1px solid #1e1e35',
      }}
    >
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

      {/* Mobile menu icon */}
      <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
        <span className="w-5 h-px bg-muted block" />
        <span className="w-5 h-px bg-muted block" />
        <span className="w-3 h-px bg-muted block" />
      </button>
    </nav>
  )
}
