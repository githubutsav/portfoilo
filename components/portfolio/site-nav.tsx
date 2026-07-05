'use client'

import { useEffect, useState } from 'react'
import { Terminal, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/lib/data'

const links = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Achievements', href: '/#achievements' },
  { label: 'Gallery', href: '/#gallery' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)

      // Intersection / position check for scrollspy
      const sectionElements = links
        .map((link) => {
          const id = link.href.includes('#') ? `#${link.href.split('#')[1]}` : null
          return id ? document.querySelector(id) : null
        })
        .filter(Boolean) as HTMLElement[]

      const scrollPosition = window.scrollY + 180

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const sec = sectionElements[i]
        if (sec.offsetTop <= scrollPosition) {
          setActiveSection(`#${sec.id}`)
          break
        }
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-border bg-background/85 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary/15 text-primary">
            <Terminal className="size-4" aria-hidden="true" />
          </span>
          <span className="inline-flex items-center">
            <span>{personalInfo.name}</span>
            <span className="ml-0.5 font-mono text-primary font-bold animate-pulse" aria-hidden="true">
              _
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          <ul className="flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'rounded-md px-3 py-2 font-mono text-sm transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <span className="text-primary">/</span>
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            href="/#contact"
            className="ml-1 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-sm text-primary transition-colors hover:bg-primary/20"
          >
            Get In Touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-2">
            {links.map((link) => {
              const isActive = activeSection === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block py-3 font-mono text-sm transition-colors',
                      isActive ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <span className="text-primary">/</span>
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
