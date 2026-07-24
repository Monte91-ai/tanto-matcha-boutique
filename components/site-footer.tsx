import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ivory px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-sans text-lg font-light tracking-[0.35em] text-charcoal">TANTO</p>
            <p className="mt-4 font-serif text-xl font-light italic text-muted">Take your time.</p>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-muted">Explore</p>
            <ul className="mt-6 space-y-3 font-sans text-sm font-light text-graphite">
              <li><Link href="/matcha" className="nav-underline">Matcha</Link></li>
              <li><Link href="/bakery" className="nav-underline">Bakery</Link></li>
              <li><Link href="/boutique" className="nav-underline">Boutique</Link></li>
              <li><Link href="/philosophy" className="nav-underline">Philosophy</Link></li>
              <li><Link href="/visit" className="nav-underline">Visit</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-muted">Contact</p>
            <ul className="mt-6 space-y-3 font-sans text-sm font-light text-graphite">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="nav-underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:hello@tanto.it" className="nav-underline">hello@tanto.it</a>
              </li>
              <li className="text-muted">Forte dei Marmi</li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-muted">Newsletter</p>
            <div className="mt-6">
              <NewsletterForm tone="dark" />
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-line pt-8 text-xs font-light uppercase tracking-[0.18em] text-muted md:flex-row">
          <p>&copy; {new Date().getFullYear()} TANTO</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="nav-underline">Privacy</Link>
            <Link href="/terms" className="nav-underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
