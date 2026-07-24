import Link from "next/link"
import { Reveal } from "@/components/reveal"

export function VisitTeaser() {
  return (
    <section className="grid border-t border-line md:grid-cols-2">
      <div className="relative h-[50svh] overflow-hidden md:h-auto">
        <img
          src="/images/visit.png"
          alt="A quiet travertine facade in Forte dei Marmi"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center bg-background px-6 py-20 md:px-16 md:py-32">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">Visit</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-tight md:text-6xl text-balance">
            Forte dei Marmi
          </h2>
          <p className="mt-8 max-w-md font-sans text-base font-light leading-relaxed text-graphite">
            A room of stone and quiet light, a few steps from the sea. Opening soon.
          </p>
          <Link
            href="/visit"
            className="mt-10 inline-block border border-charcoal px-10 py-3 font-sans text-xs uppercase tracking-[0.3em] transition-colors duration-500 hover:bg-charcoal hover:text-ivory"
          >
            Plan your visit
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
