"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const NAV_LINKS = [
  { href: "/matcha", label: "Matcha" },
  { href: "/bakery", label: "Bakery" },
  { href: "/boutique", label: "Boutique" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/visit", label: "Visit" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isHome = pathname === "/"
  const transparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        transparent
          ? "bg-transparent text-ivory"
          : "bg-background/90 text-charcoal backdrop-blur-sm border-b border-line"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:h-20 md:px-10">
        <Link
          href="/"
          className="flex items-baseline gap-2 text-lg tracking-[0.35em] font-sans font-light"
          aria-label="TANTO home"
        >
          TANTO
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-active={pathname === link.href}
              className="nav-underline text-xs font-sans font-light uppercase tracking-[0.22em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-500 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-500 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>

      {/* Fullscreen mobile navigation — top-level sibling so no fixed/backdrop ancestor breaks it */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-background text-charcoal transition-opacity duration-500 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="text-lg font-sans font-light tracking-[0.35em] text-charcoal">TANTO</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center"
            aria-label="Close menu"
          >
            <span className="relative block h-6 w-6">
              <span className="absolute left-0 top-1/2 block h-px w-6 -translate-y-1/2 rotate-45 bg-charcoal" />
              <span className="absolute left-0 top-1/2 block h-px w-6 -translate-y-1/2 -rotate-45 bg-charcoal" />
            </span>
          </button>
        </div>
        <nav
          className="flex flex-1 flex-col items-center justify-center gap-8"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-4xl font-light tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="pb-16 text-center text-xs uppercase tracking-[0.3em] text-muted">
          Take Your Time
        </p>
      </div>
    </>
  )
}
