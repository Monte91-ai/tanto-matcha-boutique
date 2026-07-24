import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { FullBleedQuote } from "@/components/full-bleed-quote"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "A Japanese ritual kept in Italian light. On time, craft, beauty and intentional living at TANTO.",
}

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow="Philosophy"
        title="Take Your Time"
        src="/images/philosophy-ritual.png"
        alt="Hands resting beside a ceramic matcha bowl in quiet light"
      />

      <section className="px-6 py-32 md:px-16 md:py-48">
        <Reveal
          as="h2"
          className="mx-auto max-w-4xl text-center font-serif text-3xl font-light leading-[1.2] md:text-5xl lg:text-6xl text-balance"
        >
          We believe the finest thing we can offer is a slower hour.
        </Reveal>
      </section>

      <FullBleedQuote
        src="/images/philosophy-origin.png"
        alt="A misty tea garden at dawn"
        quote="A leaf grown in shade, kept whole."
        align="start"
      />

      <section className="px-6 py-28 md:px-16 md:py-40">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-3">
          {[
            {
              title: "Ritual",
              body: "The same gestures, each day. In repetition we find a kind of quiet.",
            },
            {
              title: "Craft",
              body: "Stone-ground leaves, hand-thrown bowls, butter folded slowly. Nothing hurried.",
            },
            {
              title: "Hospitality",
              body: "A Japanese ceremony welcomed by Italian warmth. To host is to give time.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 150}>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-serif text-3xl font-light">{item.title}</h3>
              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-graphite">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ivory px-6 py-32 md:px-16 md:py-48">
        <Reveal
          as="p"
          className="mx-auto max-w-3xl text-center font-serif text-2xl font-light italic leading-relaxed md:text-4xl text-balance"
        >
          Beauty lives in what is repeated with care. This is the whole of it.
        </Reveal>
      </section>
    </>
  )
}
