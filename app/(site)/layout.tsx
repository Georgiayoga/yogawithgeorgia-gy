import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { cn } from "@/lib/utils"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Suspense } from "react"

const headingFont = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" })
const bodyFont = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  title: "Yoga with Georgia | Iyengar Yoga Classes in Portugal & Online | Retreats & Workshops",
  description:
    "Join Iyengar Yoga with Georgia Marnham, a certified teacher with over 25 years of international teaching experience. Offering studio classes in Portugal, live online classes, and yoga retreats across Europe.",
  keywords:
    "Iyengar Yoga Portugal, Iyengar Yoga online, Georgia Marnham yoga, Iyengar retreats Europe, Iyengar teacher Portugal, yoga classes Portugal, yoga with Georgia",
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-orange"></div>
        <p className="mt-4 text-brand-black/60 font-body">Loading...</p>
      </div>
    </div>
  )
}

function HeaderFallback() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
      </div>
    </header>
  )
}

function FooterFallback() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-8">
        <div className="h-20 bg-gray-200 rounded animate-pulse" />
      </div>
    </footer>
  )
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Yoga with Georgia",
    image: "https://yogawithgeorgia.com/images/logo.png",
    "@id": "https://yogawithgeorgia.com",
    url: "https://yogawithgeorgia.com",
    telephone: "+351933675722",
    email: "georgia@yogawithgeorgia.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colares, Portugal",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.7169",
      longitude: "-9.1390",
    },
    sameAs: ["https://www.instagram.com/yogawithgeorgia", "https://momence.com/u/georgia-marnham-TXk2rZ"],
    founder: {
      "@type": "Person",
      name: "Georgia Marnham",
      description:
        "Certified Level 3 Iyengar Yoga teacher with over 25 years of international teaching experience and more than 35 years of dedicated practice.",
      image: "https://yogawithgeorgia.com/georgia-portrait.jpg",
      knowsAbout: ["Iyengar Yoga", "Yoga Alignment", "Yoga Props", "Yoga Therapy", "Pranayama"],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Level 3 Iyengar Yoga Teacher Certification",
        credentialCategory: "Professional Certification",
      },
    },
    description:
      "Iyengar Yoga with Georgia Marnham — certified Level 3 teacher offering studio classes in Portugal, live online classes worldwide, and yoga retreats across Europe and internationally.",
    knowsAbout: [
      "Iyengar Yoga",
      "Yoga Retreats",
      "Yoga Workshops",
      "Online Yoga Classes",
      "Yoga Alignment",
      "Yoga Props",
      "Therapeutic Yoga",
    ],
    serviceArea: {
      "@type": "Place",
      name: "Portugal, Europe, Online Worldwide",
    },
    offers: [
      {
        "@type": "Service",
        name: "Studio Yoga Classes in Portugal",
        description: "Regular Iyengar Yoga classes in Colares, near Sintra, Portugal",
        url: "https://yogawithgeorgia.com/classes-portugal",
        provider: {
          "@type": "Person",
          name: "Georgia Marnham",
        },
      },
      {
        "@type": "Service",
        name: "Online Iyengar Yoga Classes",
        description: "Live Zoom classes for students in Europe, UK, Americas, and Brazil",
        url: "https://yogawithgeorgia.com/online",
        provider: {
          "@type": "Person",
          name: "Georgia Marnham",
        },
      },
      {
        "@type": "Service",
        name: "Yoga Retreats & Workshops",
        description:
          "Immersive Iyengar Yoga retreats and workshops in Portugal, Greece, Sri Lanka, and other international locations",
        url: "https://yogawithgeorgia.com/retreats",
        provider: {
          "@type": "Person",
          name: "Georgia Marnham",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Iyengar Yoga?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Iyengar Yoga is a precise method of yoga that uses props to support alignment, improve flexibility, and build strength.",
        },
      },
      {
        "@type": "Question",
        name: "Who is Georgia Marnham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Georgia Marnham is a certified Level 3 Iyengar Yoga teacher with over 25 years of international teaching experience and more than 35 years of practice.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need experience to join?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, beginners are welcome. Georgia teaches both beginners and experienced students with individual feedback and adjustments.",
        },
      },
      {
        "@type": "Question",
        name: "Can I join online classes if I don't live in Portugal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, online classes are available worldwide via Zoom.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a class?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book studio or online classes directly through Georgia's Momence profile at https://momence.com/u/georgia-marnham-TXk2rZ.",
        },
      },
    ],
  }

  return (
    <div className={cn("min-h-dvh bg-white text-brand-black antialiased", headingFont.variable, bodyFont.variable)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:px-3 focus:py-1 focus:ring focus:z-50"
      >
        Skip to content
      </a>
      <Suspense fallback={<HeaderFallback />}>
        <SiteHeader />
      </Suspense>
      <main id="content" className="flex-1">
        <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      </main>
      <Suspense fallback={<FooterFallback />}>
        <SiteFooter />
      </Suspense>
    </div>
  )
}
