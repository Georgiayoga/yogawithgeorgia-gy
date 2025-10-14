import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Video, Users, Package, Calendar, HelpCircle } from "lucide-react"

export const metadata = {
  title: "Online with Georgia | Yoga with Georgia",
  description:
    "Georgia Marnham is a Level 3 Iyengar Yoga teacher with 25 years of international teaching experience, known for her clear, supportive style and personalised approach.",
}

export default function OnlinePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I join an online class?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Online classes are hosted live on Zoom. After booking, you'll receive a secure Zoom link.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need experience to join online classes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, beginners are welcome. Georgia adapts her teaching to support all levels.",
        },
      },
      {
        "@type": "Question",
        name: "What equipment do I need at home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ideally, a yoga mat and a few props (belt, blocks, or household alternatives). Georgia can guide you on substitutions.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book an online class?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Online classes can be booked directly through Georgia's Momence profile at https://momence.com/u/georgia-marnham-TXk2rZ.",
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
              <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-6">Online with Georgia</h1>
              <p className="font-body text-lg text-brand-black/80 max-w-2xl mx-auto">
                Enjoy the convenience of practising Iyengar Yoga from home with Georgia's live Zoom classes. Each
                session combines clear, supportive teaching with precise guidance — and class recordings are available
                so you can practise whenever it suits you. Private online classes also available.
              </p>
            </header>

            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              <div>
                <img
                  src="/georgia-online-teaching-setup.jpg"
                  alt="Georgia teaching an online Iyengar Yoga class from her studio in Portugal, sitting in meditation pose on a green mat while students join via Zoom on a tablet screen, showing the authentic online teaching setup"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h2 className="font-heading text-2xl text-brand-black mb-4">Why Online?</h2>
                <div className="font-body text-brand-black/80 leading-relaxed space-y-3">
                  <p>1. "Your yoga practice, wherever you are."</p>
                  <p>2. "Live teaching, from Georgia's studio to your home."</p>
                  <p>3. "Clear, supportive Iyengar Yoga — online and on demand."</p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-brand-warm-gray">
                  <CardHeader>
                    <CardTitle className="font-heading text-lg text-brand-black">What You Need</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="font-body text-brand-black/80 space-y-2">
                      <li>• Stable internet connection</li>
                      <li>• Zoom app installed</li>
                      <li>• Yoga mat and quiet space</li>
                      <li>• Basic props (blocks, belt, blanket)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-brand-warm-gray">
                  <CardHeader>
                    <CardTitle className="font-heading text-lg text-brand-black">Time Zones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-body text-brand-black/80 space-y-2 text-sm">
                      <p>Classes scheduled for:</p>
                      <p>• Europe & UK</p>
                      <p>• Americas (East & West Coast)</p>
                      <p>• Brazil</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section - Redesigned */}
            <section className="mb-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 mb-4">
                  <HelpCircle className="w-8 h-8 text-brand-orange" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-brand-black mb-3">Frequently Asked Questions</h2>
                <p className="font-body text-brand-black/70 max-w-2xl mx-auto">
                  Everything you need to know about joining online classes with Georgia
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {/* Join FAQ */}
                  <AccordionItem
                    value="join"
                    className="border-2 border-brand-warm-gray/30 rounded-2xl px-6 overflow-hidden hover:border-brand-orange/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  >
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors py-5 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                          <Video className="w-5 h-5 text-brand-orange" />
                        </div>
                        <span className="text-left">How do I join an online class?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed pb-6 pt-2">
                      Online classes are hosted live on Zoom. After booking, you'll receive a secure Zoom link via
                      email. Simply click the link at the scheduled class time to join. Make sure you have the Zoom app
                      installed on your device beforehand for the best experience.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Experience FAQ */}
                  <AccordionItem
                    value="experience"
                    className="border-2 border-brand-warm-gray/30 rounded-2xl px-6 overflow-hidden hover:border-brand-orange/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  >
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors py-5 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-brand-orange" />
                        </div>
                        <span className="text-left">Do I need experience to join online classes?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed pb-6 pt-2">
                      No, beginners are welcome. Georgia adapts her teaching to support all levels, providing clear
                      instructions and modifications throughout the class. Whether you're completely new to yoga or have
                      years of experience, you'll find a supportive and accessible practice.
                    </AccordionContent>
                  </AccordionItem>

                  {/* Equipment FAQ */}
                  <AccordionItem
                    value="equipment"
                    className="border-2 border-brand-warm-gray/30 rounded-2xl px-6 overflow-hidden hover:border-brand-orange/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  >
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors py-5 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                          <Package className="w-5 h-5 text-brand-orange" />
                        </div>
                        <span className="text-left">What equipment do I need at home?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed pb-6 pt-2">
                      Ideally, a yoga mat and a few props (belt, blocks, or household alternatives). Georgia can guide
                      you on substitutions — for example, books can replace blocks, and a belt or scarf can work as a
                      yoga strap. A quiet space where you can move freely is also helpful.
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
                        <span className="text-left">How do I book an online class?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed pb-6 pt-2">
                      <p className="mb-3">
                        Online classes can be booked directly through Georgia's Momence profile. The booking system is
                        simple and secure, and you'll receive immediate confirmation along with your Zoom link and class
                        details.
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
