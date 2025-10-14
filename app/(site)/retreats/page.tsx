import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Retreats & Workshops | Yoga with Georgia",
  description:
    "Georgia Marnham is a Level 3 Iyengar Yoga teacher with 25 years of international teaching experience, known for her clear, supportive style and personalised approach.",
}

export default function RetreatsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where are the retreats held?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retreats are hosted in Portugal and occasionally in other international locations. Each retreat page includes venue details.",
        },
      },
      {
        "@type": "Question",
        name: "What do retreats include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retreats typically include daily yoga classes, accommodation, meals, and opportunities for rest and reflection.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to be an experienced yogi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, retreats are suitable for all levels, from beginners to teachers in training.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a retreat or workshop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retreats and workshops are booked directly through Georgia, with details available on the Retreats and Workshops page.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-6">Retreats & Workshops</h1>
              <p className="font-body text-lg text-brand-black/80 max-w-2xl mx-auto">
                Georgia leads retreats and workshops in Portugal, the UK, and international locations such as Paros and
                Sri Lanka. These immersive experiences allow students to deepen their Iyengar practice while enjoying
                rest, reflection, and community.
              </p>
            </header>

            <section className="mb-16">
              <h2 className="font-heading text-3xl text-brand-black text-center mb-8">Upcoming Retreats</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Morocco Retreat Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/morocco-atlas-mountains-retreat.jpg"
                    alt="Morocco Retreat venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Morocco Retreat</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Atlas Mountains, Morocco</p>
                      <p>February 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      Bab Zouina's Moroccan architecture and landscaped gardens blend aesthetic beauty with rustic
                      simplicity. Including scenic views, local cuisine, and a spacious yoga shala, it offers a peaceful
                      and tranquil retreat.
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/morocco-retreat">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Sri Lanka Retreat Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/sri-lanka-lush-landscape.jpg"
                    alt="Sri Lanka Retreat venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Sri Lanka Retreat</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Sri Lanka</p>
                      <p>March 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      Considered one of the world's best yoga centres, Ulpotha, is based on a traditional Sri Lankan
                      farming village which is run by the local Buddhist community. "It is Heaven on Earth".
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/sri-lanka-retreat">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Portugal Retreat Card - April */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/portugal-algarve-coast.jpg"
                    alt="Portugal Retreat venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Portugal Retreat</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Loulé, Algarve</p>
                      <p>April 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      Come to the lovely Casa Cales, nestled in the hills outside Loulé and 15 minutes from the
                      coastline of fabulous beaches, sandy coves and islands.
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/portugal-retreat">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Portugal September Retreat Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/praia-do-quinta-do-lago-algarve.jpg"
                    alt="Portugal September Retreat venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Portugal Retreat</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Loulé, Algarve</p>
                      <p>September 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      Returning to the much-loved Casa Cales outside the lively market-town of Loulé and close to
                      stunning beaches, for another week of yoga, rest, and exploration.
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/portugal-september-retreat">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-heading text-3xl text-brand-black text-center mb-8">Upcoming Workshops</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Scotland Workshop Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/comrie-scotland-village.jpg"
                    alt="Weekend Workshop - Scotland venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Weekend Workshop - Scotland</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Comrie, nr Edinburgh</p>
                      <p>November 2025</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      A weekend of in-depth learning sessions focusing on a variety of asanas for students with a
                      regular yoga practice.
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/contact">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Portugal Workshop Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/sidmouth-devon-yoga-studio.png"
                    alt="Weekend Workshop - Portugal venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Weekend Workshop - Portugal</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Loulé, Algarve</p>
                      <p>November 2025</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      Join us for a weekend of learning and practice in Casa Cales's fully equipped studio, offering
                      stunning views.
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/contact">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* England Workshop Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/sidmouth-devon-coastal-view.png"
                    alt="Weekend Workshop - England venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Weekend Workshop - England</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Sidmouth, Devon</p>
                      <p>July 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      Immerse yourself in a transformative weekend of yoga, featuring a series of classes that build
                      into a full-weekend course.
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/contact">Dates to be confirmed</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="font-heading text-3xl text-brand-black text-center mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="locations" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      Where are the retreats held?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      Retreats are hosted in Portugal and occasionally in other international locations. Each retreat
                      page includes venue details.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="included" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      What do retreats include?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      Retreats typically include daily yoga classes, accommodation, meals, and opportunities for rest
                      and reflection.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="experience" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      Do I need to be an experienced yogi?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      No, retreats are suitable for all levels, from beginners to teachers in training.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="booking" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      How do I book a retreat or workshop?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      Retreats and workshops are booked directly through Georgia, with details available on the Retreats
                      and Workshops page.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            <div className="text-center">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                <Link href="/contact">Reserve Your Place</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
