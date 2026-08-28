import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export const metadata = {
  title: "Weekend Yoga Workshop - Portugal 2026 | Yoga with Georgia",
  description:
    "Join Georgia Marnham for a weekend Iyengar Yoga workshop at Casa Cales, Loulé, Algarve, 28–29 November 2026. Two days of in-depth practice in a fully equipped studio. €120, booking required.",
  keywords:
    "Portugal yoga workshop, Loulé yoga, Algarve yoga, Iyengar yoga Portugal, weekend workshop 2026, Georgia Marnham workshop, Casa Cales",
}

export default function PortugalWorkshopPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4">Weekend Yoga Workshop — Portugal</h1>
            <p className="font-body text-xl text-brand-black/80 mb-2">Casa Cales, Cabanita, Loulé, Algarve</p>
            <p className="font-body text-lg text-brand-orange font-medium">November 28–29, 2026</p>
          </header>

          <div className="mb-12">
            <img
              src="/casa-cales-weekend-workshop-2026.jpg"
              alt="Weekend Yoga Workshop with Georgia Marnham flyer, Casa Cales, Loulé, Algarve, 28-29 November 2026"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Join Georgia Marnham, a Level 3 qualified Iyengar Yoga teacher, for a weekend of in-depth learning in
                the beautiful Algarve hills. Over two days you&apos;ll explore a variety of asanas through carefully
                structured sessions designed to deepen your understanding of alignment, precision, and the benefits
                gained through sustained, attentive practice.
              </p>
              <p>
                This workshop is ideally suited to students with a regular yoga practice who wish to refine their
                technique in a supportive, welcoming environment. Held at Casa Cales near Loulé, the weekend combines
                focused practice with time to rest and connect over a shared break.
              </p>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
              <a href="mailto:info@yogawithgeorgia.com?subject=Portugal%20Weekend%20Workshop%20Booking">
                Register for the Workshop
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors bg-transparent"
            >
              <Link href="/retreats">View All Retreats</Link>
            </Button>
          </div>

          {/* Key Details Grid */}
          <section className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="bg-brand-warm-gray/20 rounded-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">Schedule</h2>
              <div className="space-y-3 font-body text-brand-black/80">
                <div>
                  <p className="font-medium text-brand-black">Saturday 28 November</p>
                  <p className="text-sm">10:00am – 3:30pm (including a break)</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Sunday 29 November</p>
                  <p className="text-sm">10:00am – 12:30pm</p>
                </div>
                <div>
                  <p className="text-sm italic">
                    Bring your own lunch for the Saturday break — tea and coffee are provided.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-warm-gray/20 rounded-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">Workshop Details</h2>
              <ul className="space-y-3 font-body text-brand-black/80">
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Price: €120 for the weekend (booking required)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Reserve your place with a €50 non-refundable deposit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>In-depth sessions across a variety of asanas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Suitable for students with a regular yoga practice</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Venue */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">The Venue</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                The workshop takes place at Casa Cales in Cabanita, near Loulé in the Algarve, Portugal. Nestled in the
                hills, Casa Cales offers a fully equipped studio with stunning views — a peaceful and inspiring setting
                for a focused weekend of practice.
              </p>
            </div>
          </section>

          {/* Practical Information */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl text-brand-black mb-6 text-center">Practical Information</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="pricing">
                <AccordionTrigger className="font-body text-lg text-brand-black">Price and booking</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <div className="space-y-3">
                    <p>The workshop costs €120 for the full weekend. Bookings are required in advance.</p>
                    <p>
                      Reserve your place with a €50 non-refundable deposit, with the balance due before the workshop
                      begins.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="who-for">
                <AccordionTrigger className="font-body text-lg text-brand-black">Who is it for?</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <p>
                    This weekend is designed for students with a regular yoga practice who want to deepen their
                    understanding through in-depth, focused sessions. If you&apos;re unsure whether it&apos;s right for
                    you, please get in touch.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="register">
                <AccordionTrigger className="font-body text-lg text-brand-black">How to register</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <div className="space-y-2">
                    <p>To register for the workshop, please contact:</p>
                    <ul className="space-y-1 ml-4">
                      <li>
                        • Georgia:{" "}
              <a href="mailto:info@yogawithgeorgia.com" className="text-brand-orange underline">
                info@yogawithgeorgia.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="what-to-bring">
                <AccordionTrigger className="font-body text-lg text-brand-black">What to bring</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <ul className="space-y-2 ml-4">
                    <li>• Your own lunch for the Saturday break (tea and coffee provided)</li>
                    <li>• Comfortable clothing for yoga practice</li>
                    <li>• Notebook and pen if you like to take notes</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* More about Georgia */}
          <section className="mb-12">
            <div className="bg-brand-warm-gray/10 rounded-lg p-6 font-body text-brand-black/90 leading-relaxed space-y-3">
              <p>
                Georgia is a Level 3 qualified Iyengar Yoga teacher. You can learn more about her teaching on the{" "}
                <Link href="/about" className="text-brand-orange underline">
                  about page
                </Link>{" "}
                and read student recommendations on the{" "}
                <Link href="/testimonials" className="text-brand-orange underline">
                  testimonials page
                </Link>
                .
              </p>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
              <a href="mailto:info@yogawithgeorgia.com?subject=Portugal%20Weekend%20Workshop%20Booking">
                Register for the Workshop
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors bg-transparent"
            >
              <Link href="/retreats">View All Retreats</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
