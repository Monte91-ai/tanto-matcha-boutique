import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { NewsletterForm } from "@/components/newsletter-form"

export const metadata: Metadata = {
  title: "Visit",
  description:
    "TANTO — Matcha Bar & Boutique in Forte dei Marmi. Opening soon. Address, hours and contact.",
}

export default function VisitPage() {
  return (
    <>
      <section className="relative flex h-[70svh] items-end overflow-hidden md:h-[80svh]">
        <img
          src="/images/visit.png"
          alt="A quiet travertine facade in Forte dei Marmi"
          className="slow-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        <div className="relative w-full px-6 pb-16 text-ivory md:px-16 md:pb-24">
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-ivory/70">Visit</p>
            <h1 className="mt-6 font-serif text-5xl font-light leading-none md:text-8xl text-balance">
              Forte dei Marmi
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="space-y-14">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">Address</p>
                <p className="mt-5 font-serif text-2xl font-light leading-snug md:text-3xl">
                  Via Carducci 12
                  <br />
                  55042 Forte dei Marmi (LU)
                  <br />
                  Toscana, Italia
                </p>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">Hours</p>
                <dl className="mt-5 space-y-2 font-sans text-sm font-light text-graphite">
                  <div className="flex justify-between border-b border-line pb-2">
                    <dt>Monday — Friday</dt>
                    <dd>8:00 — 19:00</dd>
                  </div>
                  <div className="flex justify-between border-b border-line pb-2">
                    <dt>Saturday — Sunday</dt>
                    <dd>8:00 — 20:00</dd>
                  </div>
                </dl>
                <p className="mt-5 font-serif text-lg font-light italic text-muted">
                  Opening soon.
                </p>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">Contact</p>
                <ul className="mt-5 space-y-2 font-sans text-sm font-light text-graphite">
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="nav-underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@tanto.it" className="nav-underline">
                      hello@tanto.it
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">
                  Newsletter
                </p>
                <p className="mt-5 max-w-sm font-sans text-sm font-light leading-relaxed text-graphite">
                  We will write once, when the doors open.
                </p>
                <div className="mt-6">
                  <NewsletterForm tone="dark" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative aspect-[3/4] overflow-hidden border border-line">
              <iframe
                title="Map of TANTO in Forte dei Marmi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=10.15%2C43.94%2C10.20%2C43.97&layer=mapnik&marker=43.958%2C10.171"
                className="h-full w-full grayscale-[0.5] contrast-[0.95]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
