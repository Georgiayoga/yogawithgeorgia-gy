import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { cn } from "@/lib/utils"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollToTop from "@/components/scroll-to-top"

const headingFont = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" })
const bodyFont = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  title: "Yoga with Georgia | Iyengar Yoga Classes in Sintra, Colares & Online",
  description:
    "Iyengar Yoga classes in Colares, Sintra — within easy reach of Cascais and Ericeira. Georgia Marnham, Level 3 certified, 25 years of international teaching experience. All levels welcome. Book now.",
  keywords:
    "Iyengar Yoga Portugal, Iyengar Yoga online, Georgia Marnham yoga, Iyengar retreats Europe, Iyengar teacher Portugal, yoga classes Portugal, yoga with Georgia",
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Yoga with Georgia",
    alternateName: "Yoga Bahia Centre Colares",
    description:
      "Iyengar Yoga classes in Colares, Sintra, Portugal. Weekly morning and evening classes suitable for all levels. Also available online via Zoom. Taught by Georgia Marnham, Level 3 certified Iyengar Yoga teacher with 25 years of international teaching experience.",
    url: "https://yogawithgeorgia.com",
    telephone: "+351933675722",
    email: "info@yogawithgeorgia.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Covão",
      addressLocality: "Colares",
      addressRegion: "Sintra",
      postalCode: "2705",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.808,
      longitude: -9.467,
    },
    openingHours: ["Tu 09:30-11:00", "Tu 18:00-19:30", "Th 18:00-19:30", "Sa 09:30-11:00"],
    priceRange: "££",
    areaServed: ["Colares", "Sintra", "Cascais", "Ericeira", "Lisbon"],
    serviceType: "Iyengar Yoga Classes",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
      bestRating: "5",
    },
    sameAs: ["https://yogabahia.com", "https://www.instagram.com/yogawithgeorgia"],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={cn("min-h-dvh bg-white text-brand-black antialiased", headingFont.variable, bodyFont.variable)}>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:px-3 focus:py-1 focus:ring"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
