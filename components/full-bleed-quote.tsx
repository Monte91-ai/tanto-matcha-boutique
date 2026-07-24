import { Reveal } from "@/components/reveal"

type FullBleedQuoteProps = {
  src: string
  alt: string
  quote: string
  align?: "center" | "start"
}

export function FullBleedQuote({ src, alt, quote, align = "center" }: FullBleedQuoteProps) {
  return (
    <section className="relative flex h-[90svh] items-end overflow-hidden md:h-screen">
      <img src={src || "/placeholder.svg"} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
      <div
        className={`relative w-full px-6 pb-16 md:px-16 md:pb-24 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        <Reveal
          as="p"
          className={`font-serif text-3xl font-light leading-tight text-ivory md:text-5xl lg:text-6xl ${
            align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl"
          } text-balance`}
        >
          {quote}
        </Reveal>
      </div>
    </section>
  )
}
