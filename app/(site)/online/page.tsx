import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
                so you can practise whenever it suits you.
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

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="font-heading text-3xl text-brand-black text-center mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="join" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      How do I join an online class?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      Online classes are hosted live on Zoom. After booking, you'll receive a secure Zoom link.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="experience" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      Do I need experience to join online classes?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      No, beginners are welcome. Georgia adapts her teaching to support all levels.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="equipment" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      What equipment do I need at home?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      Ideally, a yoga mat and a few props (belt, blocks, or household alternatives). Georgia can guide
                      you on substitutions.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="booking" className="border border-brand-warm-gray rounded-lg px-6">
                    <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                      How do I book an online class?
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                      Online classes can be booked directly through Georgia's{" "}
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
