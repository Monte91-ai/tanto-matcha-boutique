"use client"

export function Hero() {
  function scrollToStory() {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex h-[100svh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="A bowl of freshly whisked matcha resting on travertine in soft daylight"
          className="slow-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/35" />
      </div>

      <div className="relative flex flex-col items-center px-6 text-center text-ivory">
        <h1 className="font-sans text-4xl font-light tracking-[0.5em] md:text-6xl">
          <span className="ml-[0.5em]">TANTO</span>
        </h1>
        <p className="mt-8 font-serif text-xl font-light italic tracking-wide md:text-2xl">
          Take your time.
        </p>
        <button
          type="button"
          onClick={scrollToStory}
          className="mt-14 border border-ivory/60 px-10 py-3 font-sans text-xs uppercase tracking-[0.3em] transition-colors duration-500 hover:bg-ivory hover:text-charcoal"
        >
          Enter
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="block h-12 w-px animate-pulse bg-ivory/50" aria-hidden="true" />
      </div>
    </section>
  )
}
