"use client"

import { useState } from "react"

export function NewsletterForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const border = tone === "light" ? "border-ivory/40" : "border-charcoal/30"
  const placeholder = tone === "light" ? "placeholder:text-ivory/50" : "placeholder:text-muted"
  const text = tone === "light" ? "text-ivory" : "text-charcoal"

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
  }

  if (submitted) {
    return (
      <p className={`font-serif text-xl italic ${text}`}>
        Thank you. We will write to you before we open.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md items-end gap-4">
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`w-full border-b bg-transparent pb-2 font-sans text-sm font-light tracking-wide outline-none transition-colors focus:border-matcha ${border} ${placeholder} ${text}`}
        />
      </div>
      <button
        type="submit"
        className={`pb-2 font-sans text-xs uppercase tracking-[0.22em] transition-opacity hover:opacity-60 ${text}`}
      >
        Subscribe
      </button>
    </form>
  )
}
