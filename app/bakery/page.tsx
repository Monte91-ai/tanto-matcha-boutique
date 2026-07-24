import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Bakery",
  description:
    "Croissants, pain suisse, Basque cheesecake and seasonal pastries, baked each morning at TANTO.",
}

const ITEMS = [
  {
    name: "Croissant",
    src: "/images/bakery-croissant.png",
    alt: "A golden flaky croissant on a pale ceramic plate",
    line: "Slow-laminated in French butter.",
    price: "4",
  },
  {
    name: "Pain Suisse",
    src: "/images/bakery-painsuisse.png",
    alt: "A pain suisse pastry with custard and chocolate",
    line: "Vanilla custard, dark chocolate.",
    price: "5",
  },
  {
    name: "Cookies",
    src: "/images/bakery-cookies.png",
    alt: "Two rustic golden cookies, one broken open",
    line: "Brown butter, soft at the centre.",
    price: "4",
  },
  {
    name: "Basque Cheesecake",
    src: "/images/bakery-cheesecake.png",
    alt: "A slice of burnt Basque cheesecake",
    line: "Burnt top, molten within.",
    price: "6",
  },
  {
    name: "Financier",
    src: "/images/bakery-financier.png",
    alt: "Two golden financier cakes on a ceramic plate",
    line: "Brown butter and almond.",
    price: "3",
  },
  {
    name: "Seasonal",
    src: "/images/bakery-seasonal.png",
    alt: "A refined seasonal tart with fruit glaze",
    line: "Whatever the market gives us.",
    price: "6",
  },
]

export default function BakeryPage() {
  return (
    <>
      <PageHero
        eyebrow="The Counter"
        title="Bakery"
        intro="Baked each morning, before the first light reaches the sea."
        src="/images/bakery-section.png"
        alt="A golden croissant resting on a ceramic plate"
      />

      <section className="px-6 py-20 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-x-12 gap-y-24 md:grid-cols-2 lg:gap-x-24">
          {ITEMS.map((item, index) => (
            <Reveal key={item.name} delay={(index % 2) * 120}>
              <article>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between border-t border-line pt-5">
                  <h2 className="font-serif text-3xl font-light md:text-4xl">{item.name}</h2>
                  <span className="font-sans text-xs font-light tracking-[0.2em] text-muted">
                    {`€ ${item.price}`}
                  </span>
                </div>
                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-graphite">
                  {item.line}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
