import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Matcha, ceramics, bowls, whisks and tea accessories. Objects chosen to be kept, from the TANTO boutique.",
}

const COLLECTIONS = [
  {
    name: "Matcha",
    src: "/images/boutique-matcha.png",
    alt: "A matte tin and vivid matcha powder with a bamboo scoop",
    line: "Single-origin, sealed at harvest.",
    meta: "From 24",
  },
  {
    name: "Ceramics",
    src: "/images/boutique-ceramics.png",
    alt: "A group of handmade stoneware vessels in earth glazes",
    line: "Thrown by hand, glazed in earth.",
    meta: "From 45",
  },
  {
    name: "Bowls",
    src: "/images/boutique-bowls.png",
    alt: "A single sculptural matcha tea bowl with reactive glaze",
    line: "One chawan, kept for a lifetime.",
    meta: "From 68",
  },
  {
    name: "Whisks",
    src: "/images/boutique-whisks.png",
    alt: "A bamboo matcha whisk standing on a ceramic holder",
    line: "Carved from a single cane of bamboo.",
    meta: "From 32",
  },
  {
    name: "Tea Accessories",
    src: "/images/boutique-accessories.png",
    alt: "A bamboo scoop, ceramic sifter and folded linen",
    line: "Scoops, sifters, linens.",
    meta: "From 18",
  },
  {
    name: "Gift Sets",
    src: "/images/boutique-giftset.png",
    alt: "A gift set with tin, bowl and whisk in a linen-lined box",
    line: "The ritual, boxed in linen.",
    meta: "From 120",
  },
]

export default function BoutiquePage() {
  return (
    <>
      <PageHero
        eyebrow="The Boutique"
        title="Boutique"
        intro="The tools of the ritual, chosen to be kept. Considered objects for a slower table."
        src="/images/boutique-section.png"
        alt="Handmade ceramic tea bowls arranged on a travertine plinth"
      />

      <section className="px-6 py-20 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
          {COLLECTIONS.map((item, index) => (
            <Reveal key={item.name} delay={(index % 3) * 120}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <h2 className="font-serif text-2xl font-light md:text-3xl">{item.name}</h2>
                  <span className="font-sans text-xs font-light tracking-[0.15em] text-muted">
                    {item.meta}
                  </span>
                </div>
                <p className="mt-2 font-sans text-sm font-light leading-relaxed text-graphite">
                  {item.line}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          className="mx-auto mt-28 max-w-xl text-center font-serif text-2xl font-light italic leading-relaxed text-graphite md:text-3xl text-balance"
        >
          The boutique opens online with our doors. Join the newsletter to be
          among the first.
        </Reveal>
      </section>
    </>
  )
}
