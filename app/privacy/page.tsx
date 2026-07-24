import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy — TANTO",
  description: "How TANTO collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy" updated="January 2026">
      <p>
        At TANTO, discretion extends to how we handle your information. This notice explains what we
        collect and how it is used when you visit our maison in Forte dei Marmi or interact with us
        online.
      </p>
      <h2>What we collect</h2>
      <p>
        When you subscribe to our journal or contact us, we collect only what is necessary — your name
        and email address. We do not sell, rent, or trade your information to third parties.
      </p>
      <h2>How we use it</h2>
      <p>
        Your details allow us to share seasonal news, private previews, and invitations. You may
        withdraw at any time through the link included in every message we send.
      </p>
      <h2>Cookies</h2>
      <p>
        Our site uses a small number of essential cookies to function. We do not use them to build
        advertising profiles.
      </p>
      <h2>Contact</h2>
      <p>
        For any request regarding your information, write to us at hello@tanto.it and we will respond
        with care.
      </p>
    </LegalPage>
  )
}
