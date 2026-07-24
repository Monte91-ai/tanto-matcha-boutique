import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tanto.example"),
  title: {
    default: "TANTO — Matcha Bar & Boutique · Forte dei Marmi",
    template: "%s · TANTO",
  },
  description:
    "TANTO is a matcha bar and boutique in Forte dei Marmi. A slower rhythm of life. Take your time.",
  keywords: ["TANTO", "matcha", "Forte dei Marmi", "boutique", "tea", "maison"],
  openGraph: {
    title: "TANTO — Matcha Bar & Boutique",
    description: "A slower rhythm of life. Take your time.",
    type: "website",
    locale: "en",
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: "#f2ede3",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="min-h-screen antialiased">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
