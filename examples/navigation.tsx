// NDS-Style Navigation Component
// Minimal, transparent navigation

import Link from 'next/link'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
}

interface NavigationProps {
  logo?: string
  siteName: string
  items: NavItem[]
  variant?: 'transparent' | 'solid'
}

export function Navigation({
  logo,
  siteName,
  items,
  variant = 'transparent'
}: NavigationProps) {
  const bgClass = variant === 'transparent'
    ? 'bg-transparent'
    : 'bg-black'

  return (
    <nav className={`${bgClass} fixed top-0 left-0 right-0 z-50`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Site Name */}
        <Link href="/" className="flex items-center gap-3 text-white">
          {logo && (
            <Image
              src={logo}
              alt=""
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          )}
          <span className="font-serif text-xl md:text-2xl">
            {siteName}
          </span>
        </Link>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
