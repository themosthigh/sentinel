'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'
import Logo from '../shared/logo'
import { routes } from './routes'
import { cn } from '@/lib/utils'

export default function NavigationSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const NavItems = ({ onClick }: { onClick?: () => void }) => (
    <ul className="flex flex-col gap-2">
      {routes.map((route) => {
        const isActive = pathname === route.uri
        return (
          <li key={route.uri}>
            <Link
              href={route.uri}
              onClick={onClick}
              className={`group flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 ${
                isActive
                  ? 'bg-primary text-primary-foreground font-medium shadow-md'
                  : 'text-sidebar-foreground hover:bg-foreground/10'
              }`}
            >
              <span>{route.label}</span>
              <ChevronRight
                className={`h-4 w-4 opacity-0 transition-transform group-hover:translate-x-1 group-hover:opacity-100 ${isActive ? 'opacity-100' : ''}`}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )

  return (
    <>
      {/* Desktop Navigation (Sidebar) */}
      <nav className="border-sidebar-border bg-sidebar-accent text-sidebar-foreground sticky top-0 hidden h-screen w-64 flex-col gap-16 border-r p-4 md:flex">
        <div className="grid place-content-center">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Logo />
          </Link>
        </div>
        <NavItems />
        <div className="border-sidebar-border mt-auto border-t p-4 text-center text-xs opacity-50">
          © {new Date().getFullYear()}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="bg-sidebar-accent/80 sticky top-0 right-0 left-0 z-40 flex h-16 items-center justify-between border-b px-4 backdrop-blur-md md:hidden">
        <div className="-mx-4 h-full py-2">
          <Logo />
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="hover:bg-foreground/10 rounded-md p-2"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`bg-foreground/50 fixed inset-0 z-50 saturate-50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <aside
        className={cn(
          'bg-sidebar-accent fixed inset-y-0 right-0 z-50 w-full max-w-xs gap-16 px-2 py-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="relative grid gap-16 pt-16">
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-foreground/10 absolute top-0 right-4 rounded-full p-2"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="grid place-content-center">
            <Logo />
          </div>

          <NavItems onClick={() => setIsOpen(false)} />
        </div>
      </aside>
    </>
  )
}
