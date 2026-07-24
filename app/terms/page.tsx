import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms — TANTO",
  description: "The terms that govern your use of the TANTO website and services.",
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms" updated="January 2026">
      <p>
        These terms govern your use of the TANTO website. By browsing our pages, you agree to the
        principles set out below, offered in the same spirit of clarity that defines our maison.
      </p>
      <h2>Use of the site</h2>
      <p>
        The content, photography, and design of this site belong to TANTO and are shared for your
        personal enjoyment. They may not be reproduced for commercial purposes without our written
        consent.
      </p>
      <h2>Products &amp; availability</h2>
      <p>
        Our matcha, pastries, and boutique objects are prepared in limited quantities and offered
        while supplies last. Descriptions are provided in good faith and may vary by season.
      </p>
      <h2>Liability</h2>
      <p>
        We take great care with the information presented here, yet we cannot guarantee it is free of
        every error. The site is provided as is, without warranty of any kind.
      </p>
      <h2>Contact</h2>
      <p>For any question regarding these terms, write to us at hello@tanto.it.</p>
    </LegalPage>
  )
}
