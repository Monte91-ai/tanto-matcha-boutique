import { Reveal } from "@/components/reveal"

type PageHeroProps = {
  eyebrow: string
  title: string
  intro?: string
  src: string
  alt: string
}

export function PageHero({ eyebrow, title, intro, src, alt }: PageHeroProps) {
  return (
    <section className="relative flex h-[80svh] items-end overflow-hidden md:h-[90svh]">
      <img src={src || "/placeholder.svg"} alt={alt} className="slow-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/10" />
      <div className="relative w-full px-6 pb-16 text-ivory md:px-16 md:pb-24">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-ivory/70">{eyebrow}</p>
          <h1 className="mt-6 font-serif text-5xl font-light leading-none md:text-8xl text-balance">
            {title}
          </h1>
          {intro ? (
            <p className="mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-ivory/85">
              {intro}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}
