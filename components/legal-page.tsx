import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <article className="px-6 pb-32 pt-40 md:px-10 md:pt-48">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">Legal</p>
          <h1 className="mt-6 font-serif text-4xl font-light tracking-tight text-charcoal md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-muted">
            Last updated {updated}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-16 space-y-8 font-sans text-sm font-light leading-relaxed text-graphite [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-light [&_h2]:text-charcoal [&_h2]:tracking-tight">
            {children}
          </div>
        </Reveal>
      </div>
    </article>
  )
}
