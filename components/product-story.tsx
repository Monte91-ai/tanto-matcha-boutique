import { Reveal } from "@/components/reveal"

export type ProductDetail = { label: string; value: string }

export type Product = {
  name: string
  src: string
  alt: string
  description: string
  details?: ProductDetail[]
  price?: string
  index: number
}

export function ProductStory({ product }: { product: Product }) {
  const flip = product.index % 2 === 1

  return (
    <section className="grid items-stretch border-b border-line md:grid-cols-2">
      <div className={`relative h-[70svh] overflow-hidden md:h-[92svh] ${flip ? "md:order-2" : ""}`}>
        <img
          src={product.src || "/placeholder.svg"}
          alt={product.alt}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-center bg-background px-6 py-16 md:px-16 md:py-24">
        <Reveal className="w-full max-w-lg">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">
            {String(product.index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-tight md:text-6xl text-balance">
            {product.name}
          </h2>
          <p className="mt-6 font-sans text-base font-light leading-relaxed text-graphite">
            {product.description}
          </p>

          {product.details ? (
            <dl className="mt-10 space-y-5 border-t border-line pt-8">
              {product.details.map((detail) => (
                <div key={detail.label} className="grid grid-cols-[8rem_1fr] gap-4">
                  <dt className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                    {detail.label}
                  </dt>
                  <dd className="font-sans text-sm font-light leading-relaxed text-graphite">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          {product.price ? (
            <p className="mt-8 font-sans text-xs font-light tracking-[0.15em] text-muted">
              {product.price}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}
