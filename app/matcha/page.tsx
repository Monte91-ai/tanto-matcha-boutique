import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { ProductStory, type Product } from "@/components/product-story"

export const metadata: Metadata = {
  title: "Matcha",
  description:
    "Ceremonial matcha, koicha, usucha and signature preparations. Stone-ground and whisked by hand at TANTO.",
}

const PRODUCTS: Omit<Product, "index">[] = [
  {
    name: "Ceremonial",
    src: "/images/product-ceremonial.png",
    alt: "A dark ceramic bowl of freshly whisked ceremonial matcha",
    description:
      "The first harvest, shade-grown and stone-milled. Whisked with warm water until a fine jade foam settles.",
    details: [
      { label: "Origin", value: "Uji, Kyoto" },
      { label: "Preparation", value: "Whisked, 70°C" },
      { label: "Notes", value: "Sweet grass, cream, a long green finish" },
      { label: "Pairing", value: "Alone, in the morning" },
    ],
    price: "8",
  },
  {
    name: "Koicha",
    src: "/images/product-koicha.png",
    alt: "A small raku bowl of thick concentrated koicha matcha",
    description:
      "Thick tea. A concentrated bowl reserved for the finest leaves, kneaded slowly into a deep, velvet green.",
    details: [
      { label: "Origin", value: "Uji, Kyoto" },
      { label: "Preparation", value: "Kneaded, 70°C" },
      { label: "Notes", value: "Umami, dark chocolate, stone fruit" },
      { label: "Pairing", value: "A single wagashi" },
    ],
    price: "12",
  },
  {
    name: "Usucha",
    src: "/images/product-usucha.png",
    alt: "A pale celadon bowl of light frothy usucha matcha",
    description:
      "Thin tea. Bright and airy, whisked to a light foam. The everyday bowl, quietly perfect.",
    details: [
      { label: "Origin", value: "Nishio, Aichi" },
      { label: "Preparation", value: "Whisked, 75°C" },
      { label: "Notes", value: "Fresh greens, citrus zest" },
      { label: "Pairing", value: "Financier" },
    ],
    price: "7",
  },
  {
    name: "Matcha Latte",
    src: "/images/product-latte.png",
    alt: "A tall ceramic cup of matcha latte with soft steam",
    description:
      "Ceremonial matcha folded into steamed milk. Softer, rounder, still unmistakably green.",
    details: [
      { label: "Milk", value: "Whole, oat or almond" },
      { label: "Served", value: "Warm" },
      { label: "Notes", value: "Malt, vanilla, matcha" },
    ],
    price: "6",
  },
  {
    name: "Iced Matcha",
    src: "/images/product-iced.png",
    alt: "A glass of layered iced matcha over ice",
    description:
      "Cold-whisked and poured over clear ice. Cut with milk or left as it is, for warm afternoons.",
    details: [
      { label: "Served", value: "Over ice" },
      { label: "Notes", value: "Crisp, green, cooling" },
    ],
    price: "6",
  },
  {
    name: "Sparkling Matcha",
    src: "/images/product-sparkling.png",
    alt: "A tall glass of sparkling matcha tonic with citrus",
    description:
      "Matcha lengthened with sparkling water and a twist of citrus. Bright, dry, effervescent.",
    details: [
      { label: "Served", value: "Sparkling, over ice" },
      { label: "Notes", value: "Yuzu, green tea, tonic" },
    ],
    price: "7",
  },
  {
    name: "Hojicha Latte",
    src: "/images/product-hojicha.png",
    alt: "A ceramic cup of warm hojicha latte with steam",
    description:
      "Roasted green tea, low in caffeine, steamed with milk into something toasty and calm.",
    details: [
      { label: "Served", value: "Warm" },
      { label: "Notes", value: "Toasted rice, caramel, oak" },
    ],
    price: "6",
  },
  {
    name: "Seasonal",
    src: "/images/product-seasonal.png",
    alt: "A seasonal matcha drink garnished with a delicate botanical",
    description:
      "A single preparation that changes with the season. Ask what we are pouring today.",
    details: [
      { label: "Served", value: "As the season asks" },
      { label: "Notes", value: "Cherry blossom, yuzu, chestnut" },
    ],
  },
]

export default function MatchaPage() {
  return (
    <>
      <PageHero
        eyebrow="The Bar"
        title="Matcha"
        intro="Eight preparations of a single leaf. Ground between stone, whisked by hand, poured with care."
        src="/images/matcha-hero.png"
        alt="Ceremonial matcha powder and a bamboo whisk on travertine"
      />
      <div>
        {PRODUCTS.map((product, index) => (
          <ProductStory key={product.name} product={{ ...product, index }} />
        ))}
      </div>
      <p className="px-6 py-16 text-center font-sans text-xs font-light uppercase tracking-[0.25em] text-muted md:py-24">
        Prices in euro. Served from morning until dusk.
      </p>
    </>
  )
}
