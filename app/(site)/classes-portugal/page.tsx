import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Users, Euro, Calendar, HelpCircle, Package } from "lucide-react"

export const metadata = {
  title: "Classes in Portugal | Yoga with Georgia",
  description:
    "Georgia Marnham is a Level 3 Iyengar Yoga teacher with 25 years of international teaching experience, known for her clear, supportive style and personalised approach.",
}

export default function ClassesPortugalPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How are the classes priced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There are three pricing options to choose from based on your financial situation: Supporter (€60/€80/€20), Sustainer (€50/€70/€17.50), and Supported (€40/€60/€15) for 4-class packs, 8-class packs, and drop-in classes respectively.",
        },
      },
      {
        "@type": "Question",
        name: "What level are the classes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Georgia teaches both beginners and experienced practitioners, adapting the class to meet each student's needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to bring props?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Props are provided at the studio, but you're welcome to bring your own mat if you prefer.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a class?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Studio classes can be booked and paid for directly through Georgia's Momence profile at https://momence.com/u/georgia-marnham-TXk2rZ.",
        },
      },
      {
        "@type": "Question",
        name: "Where is the location?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After booking for your first time, you will be sent the specific location of the studio and arrival details.",
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
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-6">Classes in Portugal</h1>
              <p className="font-body text-lg text-brand-black/80 max-w-2xl mx-auto">
                Georgia teaches group and private Iyengar yoga classes in Colares, near Sintra. Classes are suitable for
                beginners and general levels, with close attention to each student&apos;s needs.
              </p>
            </header>

            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              <div>
                <img
                  src="/authentic-portugal-studio-class.jpg"
                  alt="Students practicing legs-up-the-wall pose in Georgia's rustic wooden studio in Colares, Portugal, with exposed beams and traditional Iyengar yoga rope props on the walls"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  style={{ objectPosition: "center bottom" }}
                />
                <h2 className="font-heading text-2xl text-brand-black mb-4">Iyengar Yoga Teaching Style</h2>
                <p className="font-body text-brand-black/80 leading-relaxed">
                  Iyengar Yoga is a method of yoga that emphasises precision, alignment, and accessibility. Postures are
                  taught step-by-step with clear instructions, using props such as blocks, belts, or ropes so that
                  students of all ages and levels can practise safely. Classes combine strength, stability, and
                  flexibility with a focus on awareness and self-observation. This approach makes Iyengar Yoga both
                  therapeutic and transformative, offering tools that support lifelong practice.
                </p>
              </div>

              <Card className="border-brand-warm-gray">
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-4">
                    <h3 className="font-heading text-brand-black text-2xl">Class Schedule – Autumn</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-brand-warm-gray/30">
                        <span className="font-medium font-body text-brand-black">Tuesday morning</span>
                        <span className="font-body text-brand-black/80">09:30–11:00</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-brand-warm-gray/30">
                        <span className="font-medium font-body text-brand-black">Tuesday evening</span>
                        <span className="font-body text-brand-black/80">18:00–19:30</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-brand-warm-gray/30">
                        <span className="font-medium font-body text-brand-black">Thursday morning</span>
                        <span className="font-body text-brand-black/80">09:30–11:00</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-brand-warm-gray/30">
                        <span className="font-medium font-body text-brand-black">Thursday evening</span>
                        <span className="font-body text-brand-black/80">18:00–19:30</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium font-body text-brand-black">Saturday morning</span>
                        <span className="font-body text-brand-black/80">09:30–11:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-warm-gray/10 rounded-lg p-4">
                    <p className="font-body text-sm text-brand-black/70 leading-relaxed">
                      <strong>Note:</strong> Classes are suitable for all levels. Please arrive 10 minutes early for
                      your first class. Mats and props are provided, though you are welcome to bring your own mat.
                      Bookings are essential, and class sizes are limited to 12 students.
                    </p>
                  </div>

                  <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                    <Link href="https://momence.com/u/georgia-marnham-TXk2rZ" target="_blank" rel="noopener noreferrer">
                      Book a Class
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12">
              <h3 className="font-heading text-2xl text-brand-black mb-4">Location</h3>
              <p className="font-body text-brand-black/80 mb-6">
                Classes are held in Covão, Colares, near Sintra, Portugal - a peaceful setting surrounded by nature.
              </p>

              <div className="border border-brand-warm-gray rounded-2xl overflow-hidden shadow-sm bg-white">
                <div className="relative w-full aspect-[32/9] min-h-[160px] lg:min-h-[210px]">
                  <iframe
                    title="Map – Covão, Colares, Sintra, Portugal"
                    aria-label="Interactive map showing Covão in Colares, Sintra, Portugal"
                    src="https://www.google.com/maps?q=Cov%C3%A3o%2C+Colares%2C+Sintra%2C+Portugal&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>

              <p className="mt-2">
                <Link
                  href="https://maps.google.com/?q=Cov%C3%A3o%2C+Colares%2C+Sintra%2C+Portugal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-brand-black hover:text-brand-orange transition-colors no-underline"
                >
                  Open in Google Maps →
                </Link>
              </p>
            </div>

            {/* FAQ Section - Redesigned */}
            <section className="mb-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 mb-4">
                  <HelpCircle className="w-8 h-8 text-brand-orange" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-brand-black mb-3">Frequently Asked Questions</h2>
                <p className="font-body text-brand-black/70 max-w-2xl mx-auto">
                  Everything you need to know about joining our classes in Portugal
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {/* Pricing FAQ */}
                  <AccordionItem
                    value="pricing"
                    className="border-2 border-brand-warm-gray/30 rounded-2xl px-6 overflow-hidden hover:border-brand-orange/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  >
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors py-5 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                          <Euro className="w-5 h-5 text-brand-orange" />
                        </div>
                        <span className="text-left">How are the classes priced?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed space-y-4 pb-6 pt-2">
                      <p>
                        There are three pricing options, and you simply choose the one that fits your current financial
                        situation — no questions asked. The aim is to keep classes open to everyone while also allowing
                        those who are able to contribute a little more to do so, supporting students who are financially
                        less able.
                      </p>

                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-brand-orange/5 to-brand-gold/5 rounded-xl p-4 border-l-4 border-brand-orange">
                          <p className="font-medium text-brand-black mb-2 flex items-center gap-2">
                            <span className="text-xl">✨</span> Supporter
                          </p>
                          <p className="text-sm">
                            For those who are financially comfortable and wish to contribute more. This tier supports
                            not just the studio and other students, but also contributes more to my livelihood — helping
                            ensure I can continue to offer these classes in a dedicated and sustainable way.
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-brand-warm-gray/10 to-brand-warm-gray/5 rounded-xl p-4 border-l-4 border-brand-earth">
                          <p className="font-medium text-brand-black mb-2 flex items-center gap-2">
                            <span className="text-xl">🌿</span> Sustainer
                          </p>
                          <p className="text-sm">
                            This is the standard rate that helps cover the essential running costs of the studio and
                            classes. If this tier works for you financially, it&apos;s a supportive and valued choice.
                            If you&apos;re in a position to give a little more, please consider choosing the Supporter
                            rate to help make the classes sustainable for the long term.
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-brand-gold/5 to-brand-gold/10 rounded-xl p-4 border-l-4 border-brand-gold">
                          <p className="font-medium text-brand-black mb-2 flex items-center gap-2">
                            <span className="text-xl">💛</span> Supported
                          </p>
                          <p className="text-sm">
                            For those with limited income — students, those between work, low income earners or anyone
                            going through a financially challenging time. This rate helps keep yoga accessible for all.
                          </p>
                        </div>
                      </div>

                      <div className="bg-brand-warm-gray/5 rounded-xl p-5 mt-4">
                        <p className="font-medium text-brand-black mb-4">Here&apos;s how it works:</p>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                            <p className="font-semibold text-brand-black text-lg mb-2">4-class packs</p>
                            <div className="space-y-1 text-sm">
                              <p className="text-brand-orange font-medium">€60 – Supporter</p>
                              <p className="text-brand-earth">€50 – Sustainer</p>
                              <p className="text-brand-black/70">€40 – Supported</p>
                            </div>
                          </div>

                          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                            <p className="font-semibold text-brand-black text-lg mb-2">8-class packs</p>
                            <div className="space-y-1 text-sm">
                              <p className="text-brand-orange font-medium">€80 – Supporter</p>
                              <p className="text-brand-earth">€70 – Sustainer</p>
                              <p className="text-brand-black/70">€60 – Supported</p>
                            </div>
                          </div>

                          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                            <p className="font-semibold text-brand-black text-lg mb-2">Drop-in</p>
                            <div className="space-y-1 text-sm">
                              <p className="text-brand-orange font-medium">€20 – Supporter</p>
                              <p className="text-brand-earth">€17.50 – Sustainer</p>
                              <p className="text-brand-black/70">€15 – Supported</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="font-medium text-brand-black text-center pt-2">
                        You&apos;re always welcome, no matter what rate you choose.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Level FAQ */}
                  <AccordionItem
                    value="level"
                    className="border-2 border-brand-warm-gray/30 rounded-2xl px-6 overflow-hidden hover:border-brand-orange/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  >
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors py-5 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-brand-orange" />
                        </div>
                        <span className="text-left">What level are the classes?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed pb-6 pt-2">
                      Georgia teaches both beginners and experienced practitioners, adapting the class to meet each
                      student&apos;s needs. Whether you&apos;re completely new to yoga or have years of experience,
                      you&apos;ll find a supportive and challenging practice.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Props FAQ */}
                  <AccordionItem
                    value="props"
                    className="border-2 border-brand-warm-gray/30 rounded-2xl px-6 overflow-hidden hover:border-brand-orange/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  >
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors py-5 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                          <Package className="w-5 h-5 text-brand-orange" />
                        </div>
                        <span className="text-left">Do I need to bring props?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed pb-6 pt-2">
                      Props are provided at the studio, but you&apos;re welcome to bring your own mat if you prefer. The
                      studio is fully equipped with blocks, belts, bolsters, blankets, and other props you may need for
                      your practice.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Booking FAQ */}
                  <AccordionItem
                    value="booking"
                    className="border-2 border-brand-warm-gray/30 rounded-2xl px-6 overflow-hidden hover:border-brand-orange/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  >
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors py-5 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-brand-orange" />
                        </div>
                        <span className="text-left">How do I book a class?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed pb-6 pt-2">
                      <p className="mb-3">
                        {"Studio classes can be booked and paid for directly through Georgia\'s Momence profile. The booking system is simple and secure, and you\'ll receive immediate confirmation.\n Private class request are through the contact page."}
                      </p>
                      <Button asChild size="sm" className="bg-brand-orange hover:bg-brand-gold text-white">
                        <Link
                          href="https://momence.com/u/georgia-marnham-TXk2rZ"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book Now on Momence
                        </Link>
                      </Button>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Location FAQ */}
                  <AccordionItem
                    value="location"
                    className="border-2 border-brand-warm-gray/30 rounded-2xl px-6 overflow-hidden hover:border-brand-orange/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  >
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors py-5 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-brand-orange" />
                        </div>
                        <span className="text-left">Where is the location?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed pb-6 pt-2">
                      After booking for your first time, you will be sent the specific location of the studio and
                      arrival details. The studio is located in the peaceful area of Covão, Colares, near Sintra – a
                      tranquil setting perfect for your yoga practice.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="h-12" />
            </section>

            <div className="text-center">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                <Link href="https://momence.com/u/georgia-marnham-TXk2rZ" target="_blank" rel="noopener noreferrer">
                  Book a Class
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
