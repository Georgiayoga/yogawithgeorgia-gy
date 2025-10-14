import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
                beginners and general levels, with close attention to each student&#39;s needs.
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

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="font-heading text-3xl text-brand-black text-center mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="pricing" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      How are the classes priced?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed space-y-4">
                      <p>
                        There are three pricing options, and you simply choose the one that fits your current financial
                        situation — no questions asked. The aim is to keep classes open to everyone while also allowing
                        those who are able to contribute a little more to do so, supporting students who are financially
                        less able.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <p className="font-medium text-brand-black mb-2">✨ Supporter</p>
                          <p>
                            For those who are financially comfortable and wish to contribute more. This tier supports
                            not just the studio and other students, but also contributes more to my livelihood — helping
                            ensure I can continue to offer these classes in a dedicated and sustainable way.
                          </p>
                        </div>

                        <div>
                          <p className="font-medium text-brand-black mb-2">🌿 Sustainer</p>
                          <p>
                            This is the standard rate that helps cover the essential running costs of the studio and
                            classes. If this tier works for you financially, it's a supportive and valued choice. If
                            you're in a position to give a little more, please consider choosing the Supporter rate to
                            help make the classes sustainable for the long term.
                          </p>
                        </div>

                        <div>
                          <p className="font-medium text-brand-black mb-2">💛 Supported</p>
                          <p>
                            For those with limited income — students, those between work, low income earners or anyone
                            going through a financially challenging time. This rate helps keep yoga accessible for all.
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="font-medium text-brand-black mb-3">Here's how it works:</p>

                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-brand-black">4-class packs:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                              <li>€60 – Supporter</li>
                              <li>€50 – Sustainer</li>
                              <li>€40 – Supported</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-medium text-brand-black">8-class packs:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                              <li>€80 – Supporter</li>
                              <li>€70 – Sustainer</li>
                              <li>€60 – Supported</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-medium text-brand-black">Drop-in classes:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                              <li>€20 – Supporter</li>
                              <li>€17.50 – Sustainer</li>
                              <li>€15 – Supported</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <p className="font-medium text-brand-black">
                        You're always welcome, no matter what rate you choose.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="level" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      What level are the classes?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      Georgia teaches both beginners and experienced practitioners, adapting the class to meet each
                      student's needs.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="props" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      Can I have private classes?<br><br>
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      Props are provided at the studio, but you're welcome to bring your own mat if you prefer.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="booking" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      How do I book a class?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      Studio classes can be booked and paid for directly through Georgia's{" "}
                      <Link
                        href="https://momence.com/u/georgia-marnham-TXk2rZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-orange hover:text-brand-gold underline underline-offset-4 transition-colors"
                      >
                        Momence profile
                      </Link>
                      .
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="location" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      Where is the location?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      After booking for your first time, you will be sent the specific location of the studio and
                      arrival details.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
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
