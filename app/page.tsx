import { Hero } from "@/components/home/hero"
import { FullBleedQuote } from "@/components/full-bleed-quote"
import { Pillars } from "@/components/home/pillars"
import { VisitTeaser } from "@/components/home/visit-teaser"
import { Reveal } from "@/components/reveal"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Editorial statement */}
      <section id="story" className="px-6 py-32 md:px-16 md:py-48">
        <Reveal
          as="h2"
          className="mx-auto max-w-5xl text-center font-serif text-4xl font-light leading-[1.15] md:text-6xl lg:text-7xl text-balance"
        >
          Time has become the ultimate luxury.
        </Reveal>
        <Reveal
          as="p"
          delay={200}
          className="mx-auto mt-12 max-w-xl text-center font-sans text-base font-light leading-relaxed text-graphite"
        >
          We keep a slower hour. One bowl, whisked with attention, in a room made
          of stone and light.
        </Reveal>
      </section>

      <FullBleedQuote
        src="/images/intention.png"
        alt="Hands whisking matcha with a bamboo whisk in a ceramic bowl"
        quote="Every bowl begins with intention."
      />

      <Pillars />

      {/* Philosophy teaser */}
      <section className="grid border-t border-line md:grid-cols-12">
        <div className="flex items-center bg-ivory px-6 py-20 md:col-span-5 md:px-16 md:py-32">
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">Philosophy</p>
            <h2 className="mt-6 font-serif text-4xl font-light leading-tight md:text-5xl text-balance">
              A Japanese ritual, kept in Italian light.
            </h2>
            <p className="mt-8 max-w-md font-sans text-base font-light leading-relaxed text-graphite">
              Beauty in repetition. Silence as hospitality. The same care, given
              each day.
            </p>
            <Link
              href="/philosophy"
              className="mt-10 inline-block font-sans text-xs uppercase tracking-[0.25em] text-charcoal nav-underline"
            >
              Read our philosophy
            </Link>
          </Reveal>
        </div>
        <div className="relative h-[60svh] overflow-hidden md:col-span-7 md:h-auto">
          <img
            src="/images/philosophy.png"
            alt="A travertine shelf holding a single ceramic bowl in warm light"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <VisitTeaser />
    </>
  )
}
