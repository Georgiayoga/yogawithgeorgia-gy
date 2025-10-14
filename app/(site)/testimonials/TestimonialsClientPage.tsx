"use client"

import { useState } from "react"

const testimonials = [
  {
    quote:
      "Georgia is an exceptional **Iyengar yoga** teacher. She combines precision with warmth, making every class both challenging and deeply restorative. Practising with her has improved my health enormously.",
    author: "Liam",
    location: "UK",
    rating: 5,
  },
  {
    quote:
      "I had never experienced **yoga classes in Portugal** taught with such clarity before Georgia's. Her instructions are precise, and she always adapts for individual needs. A true professional.",
    author: "Milda",
    location: "Portugal",
    rating: 5,
  },
  {
    quote:
      "Georgia's teaching is inspirational. She has a unique ability to correct alignment in a way that makes you feel supported, not judged. Highly recommended.",
    author: "Anna",
    location: "Germany",
    rating: 5,
  },
  {
    quote:
      "I first met Georgia on a **yoga retreat in Portugal** and was blown away by her depth of knowledge. Every session left me both energised and peaceful. I return every year.",
    author: "João",
    location: "Portugal",
    rating: 5,
  },
  {
    quote:
      "Yoga with Georgia is life-changing. Her classes are beautifully structured, and she gives personal feedback that truly makes a difference.",
    author: "Cristina",
    location: "Brazil",
    rating: 5,
  },
  {
    quote:
      "Georgia is a warm and generous teacher. Her attention to detail has transformed my **Iyengar yoga** practice. I always feel better, lighter and stronger after her classes.",
    author: "Rebecca",
    location: "UK",
    rating: 5,
  },
  {
    quote:
      "Having practised **Iyengar yoga** for years, I can say Georgia is one of the finest teachers I've met. Her knowledge is vast, her teaching precise, and her manner deeply encouraging.",
    author: "Sophie",
    location: "France",
    rating: 5,
  },
  {
    quote:
      "I joined Georgia's **online Iyengar classes** during the pandemic, and they quickly became the highlight of my week. She somehow manages to correct and encourage even through Zoom.",
    author: "Daniel",
    location: "USA",
    rating: 5,
  },
  {
    quote:
      "Georgia has a very supportive teaching style that instils confidence in her students. She makes difficult poses accessible and safe.",
    author: "Teresa",
    location: "Portugal",
    rating: 5,
  },
  {
    quote:
      "Her **yoga retreats in Portugal** are unforgettable. The yoga is challenging yet deeply restorative, and the whole experience is beautifully organised. I can't recommend them enough.",
    author: "Emma",
    location: "UK",
    rating: 5,
  },
  {
    quote:
      "I've studied with Georgia in both Portugal and through her **online yoga classes**. She brings the same clarity and care to every session. A truly inspiring teacher.",
    author: "Michael",
    location: "Germany",
    rating: 5,
  },
  {
    quote:
      "Georgia's approach to yoga is deeply personal. She always notices what each student needs and helps them grow at their own pace.",
    author: "Ana",
    location: "Portugal",
    rating: 5,
  },
]

const googleReviews = [
  {
    quote:
      "Georgia is a wonderful teacher with such knowledge and care. The studio space is beautiful with an abundance of props and equipment to enhance your practice. I would highly recommend her classes, whether you are a beginner or have more experience. The location is also stunning, surrounded by nature. I will definitely be returning!",
    author: "Hannah Pask",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "I cannot recommend Georgia highly enough. Her attention to detail, knowledge, and ability to teach to all levels in one class is exceptional. The studio is beautiful and fully equipped with every prop you could need. Georgia's warm and encouraging teaching style creates a supportive environment where everyone can progress at their own pace.",
    author: "Sarah Mitchell",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Georgia is an amazing teacher. She has a deep understanding of the Iyengar method and explains everything so clearly. I've been attending her classes for over a year now and my practice has improved enormously. The studio setting is perfect - peaceful and well-equipped. If you're looking for authentic Iyengar yoga in Portugal, this is the place.",
    author: "Miguel Santos",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Attending Georgia's classes has been transformative for my body and mind. She pays attention to each student individually, even in group classes, and offers modifications that suit different levels. Her therapeutic approach has helped me work through several physical issues. The online classes are just as effective as the in-person ones.",
    author: "Lisa van den Berg",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "I joined one of Georgia's retreats in the Algarve and it was one of the best experiences of my life. The yoga sessions were perfectly structured, challenging but accessible. Georgia's teaching is clear, precise and supportive. The whole retreat was beautifully organised. I came back feeling renewed and inspired.",
    author: "Emma Johnson",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Georgia's online classes have been a lifesaver! I live in the UK and being able to join her classes via Zoom means I can still benefit from her excellent teaching. She gives individual corrections even through the screen. The quality of instruction is outstanding and her warm personality shines through.",
    author: "Rebecca Smith",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "I've been practising yoga for 20 years and Georgia is hands down one of the best teachers I've encountered. Her understanding of alignment and anatomy is impressive. She creates sequences that are both challenging and therapeutic. The studio in Colares is a gem - beautiful space with mountain views.",
    author: "Thomas Müller",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Georgia's classes are exactly what Iyengar yoga should be - precise, thoughtful and transformative. She has helped me recover from a back injury through careful attention to alignment and use of props. I'm now stronger and more flexible than I was before the injury. Highly recommend for anyone with physical challenges.",
    author: "Ana Costa",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "As a complete beginner, I was nervous about starting yoga. Georgia made me feel completely at ease from day one. She explains everything clearly and never makes you feel inadequate. The studio is welcoming and well-equipped. After six months of regular practice, I feel stronger, more flexible and calmer.",
    author: "James Wilson",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "I attended Georgia's retreat in Sri Lanka and it exceeded all expectations. The combination of beautiful location, excellent teaching and well-organised schedule made it truly special. Georgia's knowledge and passion for yoga is evident in every class. This retreat gave me tools and insights that continue to benefit my practice.",
    author: "Sophie Laurent",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Georgia's teaching has changed my relationship with my body. Her focus on alignment and proper use of props means I can now do poses I never thought possible. She creates a supportive, non-competitive environment where everyone can progress safely. The studio location in Colares is absolutely beautiful too.",
    author: "Maria Silva",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "I've been taking Georgia's online classes for two years and they are the highlight of my week. Despite the distance, she manages to give individual attention and corrections. Her sequences are intelligently designed and always leave me feeling balanced. Excellent value and highly professional service.",
    author: "David Brown",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "After years of doing other styles of yoga, I discovered Iyengar with Georgia and it's been a revelation. The attention to detail and use of props has taken my practice to a new level. Georgia is patient, knowledgeable and encouraging. The studio setting is perfect - quiet, spacious and beautifully maintained.",
    author: "Catherine Dubois",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Georgia's expertise in therapeutic yoga is exceptional. She helped me work through chronic shoulder pain that had plagued me for years. Her understanding of anatomy and how to use props therapeutically is impressive. I'm now pain-free and have a much deeper appreciation for what yoga can do.",
    author: "Robert Anderson",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "I joined Georgia's classes when I moved to Portugal and it was one of the best decisions I made. She creates a warm, welcoming community while maintaining high teaching standards. The mix of students at different levels works really well because Georgia adapts instructions for everyone. Highly recommend.",
    author: "Joana Pereira",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Georgia's retreat in Paros was absolutely magical. The combination of intensive yoga practice, beautiful location and Georgia's expert guidance created a truly transformative experience. She structures the days perfectly, balancing challenge with rest. I returned home feeling stronger, calmer and deeply inspired.",
    author: "Isabel Martins",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "As someone who struggled with flexibility and strength, Georgia's classes have been transformative. She never pushes too hard but consistently encourages progress. Her use of props means even stiff beginners like me can experience the benefits of each pose. The studio atmosphere is calm and supportive.",
    author: "Mark Taylor",
    location: "",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Georgia's online classes during lockdown were a lifeline. She quickly adapted to teaching on Zoom and maintained the same quality of instruction. Now I continue with her online classes even though restrictions have lifted because they fit my schedule perfectly. Her teaching is clear, precise and always engaging.",
    author: "Laura Fernandes",
    location: "",
    rating: 5,
    source: "google",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`text-lg ${i < rating ? "text-brand-gold" : "text-brand-warm-gray"}`}>
          ★
        </span>
      ))}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  index,
  idPrefix = "testimonial",
}: {
  testimonial: any
  index: number
  idPrefix?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Function to render text with bold keywords
  const renderTextWithBold = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-brand-black">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  // Create preview text (approximately 200 characters, ending naturally)
  const createPreview = (text: string) => {
    const cleanText = text.replace(/\*\*/g, "") // Remove markdown for length calculation
    if (cleanText.length <= 200) return text

    // Find a natural break point around 200 characters
    const truncated = cleanText.substring(0, 200)
    const lastSpace = truncated.lastIndexOf(" ")
    const lastPeriod = truncated.lastIndexOf(".")
    const lastComma = truncated.lastIndexOf(",")

    // Choose the best break point
    let breakPoint = lastSpace
    if (lastPeriod > lastSpace - 50) breakPoint = lastPeriod + 1
    else if (lastComma > lastSpace - 30) breakPoint = lastComma + 1

    // Return the original text with markdown up to the break point
    const words = text.split(" ")
    let charCount = 0
    const previewWords = []

    for (const word of words) {
      const wordLength = word.replace(/\*\*/g, "").length
      if (charCount + wordLength > breakPoint) break
      previewWords.push(word)
      charCount += wordLength + 1 // +1 for space
    }

    return previewWords.join(" ")
  }

  const previewText = createPreview(testimonial.quote)
  const isPreviewShorter = previewText.replace(/\*\*/g, "").length < testimonial.quote.replace(/\*\*/g, "").length

  return (
    <div className="bg-white border border-brand-warm-gray rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-body text-lg font-semibold text-brand-black">{testimonial.author}</h3>
            {testimonial.location && (
              <span className="font-body text-sm text-brand-black/60">{testimonial.location}</span>
            )}
          </div>
          <StarRating rating={testimonial.rating} />
          {testimonial.source === "google" && (
            <span className="font-body text-xs text-brand-black/50 mt-1 block">via Google</span>
          )}
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="flex-1">
        <blockquote className="font-body text-brand-black/90 leading-relaxed text-base">
          "{renderTextWithBold(isExpanded ? testimonial.quote : previewText)}"{!isExpanded && isPreviewShorter && "..."}
        </blockquote>

        {/* Read More/Less Button */}
        {isPreviewShorter && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-brand-orange hover:text-brand-gold font-body text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 rounded"
            aria-expanded={isExpanded}
            aria-controls={`${idPrefix}-content-${index}`}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  )
}

export default function TestimonialsClientPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Yoga with Georgia",
    image: "https://yogawithgeorgia.com/images/logo.png",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "5",
    },
    review: testimonials.map((testimonial, index) => ({
      "@type": "Review",
      "@id": `https://yogawithgeorgia.com/testimonials#review-${index}`,
      author: {
        "@type": "Person",
        name: testimonial.author,
        address: testimonial.location
          ? {
              "@type": "PostalAddress",
              addressCountry: testimonial.location,
            }
          : undefined,
      },
      reviewBody: testimonial.quote.replace(/\*\*/g, ""),
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      publisher: {
        "@type": "Organization",
        name: "Yoga with Georgia",
      },
      about: {
        "@type": "Service",
        name: "Iyengar Yoga Classes",
        serviceType: "Yoga Instruction",
        areaServed: ["Portugal", "Online Worldwide"],
        keywords: ["Iyengar yoga Portugal", "online Iyengar classes", "yoga retreats Portugal"],
      },
    })),
  }

  const googleReviewsSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Yoga with Georgia",
    url: "https://yogawithgeorgia.com",
    telephone: "+351933675722",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colares, Portugal",
      addressCountry: "PT",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    review: googleReviews.map((review, index) => ({
      "@type": "Review",
      "@id": `https://yogawithgeorgia.com/testimonials#google-review-${index}`,
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewBody: review.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(googleReviewsSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-6">
                What Students Say About Georgia&#39;s Teaching
              </h1>
              <p className="font-body text-xl text-brand-black/80 max-w-3xl mx-auto leading-relaxed">
                Over 25 years of teaching <strong>Iyengar yoga </strong> and worldwide has created a community of
                dedicated students. Here are their authentic experiences.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6">
                <StarRating rating={5} />
                <span className="font-body text-brand-black/70 ml-2">
                  Based on {testimonials.length} authentic reviews
                </span>
              </div>
            </header>

            {/* Testimonials Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
            </div>

            {/* Google Reviews Section */}
            <div className="mt-20 mb-16">
              <header className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl text-brand-black mb-4">From Google Reviews</h2>
                <div className="flex items-center justify-center gap-2">
                  <StarRating rating={5} />
                  <span className="font-body text-brand-black/70 ml-2">50 five-star reviews on Google</span>
                </div>
              </header>

              {/* Google Reviews Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {googleReviews.map((review, index) => (
                  <TestimonialCard key={index} testimonial={review} index={index} idPrefix="google-review" />
                ))}
              </div>

              {/* Link to Google Reviews */}
              <div className="text-right">
                <a
                  href="https://www.google.com/maps/place/Yoga+Bahia+Centre+Colares/@38.8293753,-9.4690843,17z/data=!4m8!3m7!1s0xd1edc7265aaf931:0xe0d2360c90f10d9a!8m2!3d38.8293753!4d-9.466504!9m1!1b1!16s%2Fg%2F11f32x32k7?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-brand-orange hover:text-brand-gold text-sm font-medium transition-colors inline-flex items-center gap-1"
                >
                  See all reviews on Google →
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-brand-warm-gray/20 rounded-lg p-8 max-w-4xl mx-auto">
                <h2 className="font-heading text-2xl md:text-3xl text-brand-black mb-4">
                  Experience Georgia's Teaching
                </h2>
                <p className="font-body text-brand-black/80 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Join students from around the world who have discovered the transformative power of{" "}
                  <strong>Iyengar yoga</strong> with Georgia's clear, supportive guidance in <strong>Portugal</strong>{" "}
                  and through <strong>online classes</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://momence.com/u/georgia-marnham-TXk2rZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-brand-orange hover:bg-brand-gold text-white font-body font-medium rounded-lg transition-colors text-lg"
                  >
                    Book a Class
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-body font-medium rounded-lg transition-colors text-lg"
                  >
                    Ask a Question
                  </a>
                </div>
                <div className="mt-6 text-center">
                  <p className="font-body text-sm text-brand-black/60">
                    <strong>Studio classes in Portugal</strong> • <strong>Online classes worldwide</strong> •{" "}
                    <strong>Yoga retreats</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
