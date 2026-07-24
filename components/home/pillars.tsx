import Link from "next/link"
import { Reveal } from "@/components/reveal"

const PILLARS = [
  {
    href: "/matcha",
    label: "Matcha",
    src: "/images/matcha-section.png",
    alt: "Matcha preparation objects arranged on travertine",
    line: "Stone-ground leaves, whisked by hand.",
  },
  {
    href: "/bakery",
    label: "Bakery",
    src: "/images/bakery-section.png",
    alt: "A golden croissant on a pale ceramic plate",
    line: "Baked each morning, before the light.",
  },
  {
    href: "/boutique",
    label: "Boutique",
    src: "/images/boutique-section.png",
    alt: "Handmade ceramic tea bowls on a travertine plinth",
    line: "Objects kept for a lifetime.",
  },
]

export function Pillars() {
  return (
    <section className="border-t border-line">
      {PILLARS.map((pillar, index) => (
        <Link
          key={pillar.href}
          href={pillar.href}
          className="group relative grid items-stretch border-b border-line md:grid-cols-2"
        >
          <div
            className={`relative h-[60svh] overflow-hidden md:h-[80svh] ${
              index % 2 === 1 ? "md:order-2" : ""
            }`}
          >
            <img
              src={pillar.src || "/placeholder.svg"}
              alt={pillar.alt}
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
          </div>
          <div className="flex items-center bg-ivory px-6 py-16 md:px-16">
            <Reveal>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-6 font-serif text-5xl font-light md:text-7xl">{pillar.label}</h2>
              <p className="mt-6 max-w-sm font-sans text-base font-light leading-relaxed text-graphite">
                {pillar.line}
              </p>
              <span className="mt-10 inline-block font-sans text-xs uppercase tracking-[0.25em] text-charcoal nav-underline">
                Discover
              </span>
            </Reveal>
          </div>
        </Link>
      ))}
    </section>
  )
}
