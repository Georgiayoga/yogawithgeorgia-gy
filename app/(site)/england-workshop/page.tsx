import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export const metadata = {
  title: "Weekend Iyengar Yoga Workshop - England 2026 | Yoga with Georgia",
  description:
    "Join Georgia Marnham for a weekend Iyengar Yoga workshop at Stowford Community Centre, Sidmouth, 10–11 October 2026. Two days of in-depth practice with healthy lunches included. £140, bookings open.",
  keywords:
    "England yoga workshop, Sidmouth yoga, Devon yoga, Iyengar yoga England, weekend workshop 2026, Georgia Marnham workshop, Stowford Community Centre",
}

export default function EnglandWorkshopPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4">
              Weekend Iyengar Yoga Workshop — England
            </h1>
            <p className="font-body text-xl text-brand-black/80 mb-2">Stowford Community Centre, Sidmouth, Devon</p>
            <p className="font-body text-lg text-brand-orange font-medium">October 10–11, 2026</p>
          </header>

          <div className="mb-12 rounded-lg border border-brand-orange/30 bg-brand-orange/10 px-6 py-4 text-center">
            <p className="font-body text-base md:text-lg text-brand-black font-medium text-pretty">
              This workshop is now fully booked. Please email to join the waiting list — places often become available
              closer to the date.
            </p>
          </div>

          <div className="mb-12">
            <img
              src="/sidmouth-weekend-workshop-2026.jpg"
              alt="Weekend Iyengar Yoga Workshop with Georgia Marnham flyer, Stowford Community Centre, Sidmouth, 10-11 October 2026"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Join Georgia Marnham, a Level 3 qualified Iyengar Yoga teacher, for a weekend of in-depth practice at
                Stowford Community Centre in Sidmouth. Over two days you&apos;ll deepen your practice and yoga
                understanding through carefully structured sessions focusing on alignment, precision, and the benefits
                of sustained, attentive work.
              </p>
              <p>
                This workshop is ideally suited to students with a regular yoga practice who wish to refine their
                technique in a supportive, welcoming environment — with two delicious, healthy lunches included to keep
                you nourished across the weekend.
              </p>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
              <a href="mailto:jennyhulin1@gmail.com?subject=England%20Weekend%20Workshop%20Waiting%20List">
                Join the Waiting List
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
                  <p className="font-medium text-brand-black">Saturday 10 October</p>
                  <p className="text-sm">10:00am – 3:30pm (with lunch break)</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Sunday 11 October</p>
                  <p className="text-sm">10:00am – 3:30pm (with lunch break)</p>
                </div>
                <div>
                  <p className="text-sm italic">
                    Two delicious, healthy lunches are included — made by Kara from &quot;Cafe Dish&quot;.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-warm-gray/20 rounded-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">Workshop Details</h2>
              <ul className="space-y-3 font-body text-brand-black/80">
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Price: £140 for the weekend, including two healthy lunches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Fully booked — join the waiting list to be notified of cancellations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Final payment due by 10 September</span>
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
                The workshop takes place at Stowford Community Centre in Sidmouth, on the beautiful Devon coast — a
                welcoming and spacious setting for a focused weekend of practice, with the sea and countryside close by.
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
                    <p>
                      The workshop costs £140 for the full weekend, including two delicious, healthy lunches made by
                      Kara from &quot;Cafe Dish&quot;.
                    </p>
                    <p>
                      This workshop is now fully booked. Please email to join the waiting list — places often become
                      available closer to the date. For confirmed places, final payment is due by 10 September.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="who-for">
                <AccordionTrigger className="font-body text-lg text-brand-black">Who is it for?</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <p>
                    This weekend is designed for students with a regular yoga practice who want to deepen their practice
                    and yoga understanding through in-depth, focused sessions. If you&apos;re unsure whether it&apos;s
                    right for you, please get in touch.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="register">
                <AccordionTrigger className="font-body text-lg text-brand-black">How to register</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <div className="space-y-2">
                    <p>To reserve your place, please contact Jenny:</p>
                    <ul className="space-y-1 ml-4">
                      <li>
                        • Email:{" "}
                        <a href="mailto:jennyhulin1@gmail.com" className="text-brand-orange underline">
                          jennyhulin1@gmail.com
                        </a>
                      </li>
                      <li>
                        • Phone:{" "}
                        <a href="tel:07527198299" className="text-brand-orange underline">
                          07527 198299
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
                    <li>• Comfortable clothing for yoga practice</li>
                    <li>• Your yoga props including a mat, belts, blankets, bricks and blocks</li>
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
              <a href="mailto:jennyhulin1@gmail.com?subject=England%20Weekend%20Workshop%20Waiting%20List">
                Join the Waiting List
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
