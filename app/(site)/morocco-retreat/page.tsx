import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Morocco Retreat 2026 | Yoga with Georgia",
  description:
    "Join Georgia for a transformative Iyengar Yoga retreat in the Atlas Mountains of Morocco, February 2026. Experience daily yoga practice in a stunning setting with local cuisine and cultural immersion.",
  keywords:
    "Morocco yoga retreat, Iyengar yoga Morocco, Atlas Mountains retreat, yoga retreat 2026, Georgia Marnham retreat",
}

export default function MoroccoRetreatPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4">Morocco Retreat 2026</h1>
            <p className="font-body text-xl text-brand-black/80 mb-2">Marrakesh, near Atlas Mountains</p>
            <p className="font-body text-lg text-brand-orange font-medium"> 15—21 February </p>
          </header>

          {/* Main Image */}
          <div className="mb-12">
            <img
              src="/morocco-atlas-mountains-retreat.jpg"
              alt="Bab Zouina retreat venue in the Atlas Mountains, Morocco"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Join Georgia for a week-long Iyengar Yoga retreat in the stunning Atlas Mountains of Morocco. This
                immersive experience combines daily yoga practice with the beauty and culture of this magical location.
              </p>
              <p>
                Bab Zouina's Moroccan architecture and landscaped gardens blend aesthetic beauty with rustic simplicity.
                Including scenic views, local cuisine, and a spacious yoga shala, it offers a peaceful and tranquil
                retreat setting.
              </p>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
              <Link href="/contact">Book Your Place</Link>
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
              <h2 className="font-heading text-2xl text-brand-black mb-4">What's Included</h2>
              <ul className="space-y-3 font-body text-brand-black/80">
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Daily Iyengar Yoga classes in fully equipped studio (morning and afternoon sessions)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>6 nights accommodation in shared or private rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>All meals featuring delicious Moroccan cuisine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Tea, coffee, and snacks available all day</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Use of the extensive gardens, terraces, and facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Use of yoga props and equipment</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Airport transfers from Marrakech</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-warm-gray/20 rounded-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">Daily Schedule</h2>
              <div className="space-y-3 font-body text-brand-black/80">
                <div>
                  <p className="font-medium text-brand-black">Tea, coffee, nuts and dried fruits </p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Yoga practice 8:30 – 10:30</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Brunch 11:00 – 12:00</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Afternoon - free time </p>
                  <p className="text-sm">{"Hammam, massage, walks or excursions, tennis\n or rest"}</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Tea and snacks </p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Yoga practice 17:00 – 18:30</p>
                  <p className="text-sm">Evening practice </p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Dinner 19:00 – 20:00</p>
                  <p className="text-sm">Evening meal and relaxation</p>
                </div>
              </div>
            </div>
          </section>

          {/* About the Venue */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">About Bab Zouina</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Bab Zouina is a beautifully organised retreat centre nestled in the foothills of the Atlas Mountains,
                just 45 minutes from Marrakech. The centre combines traditional Moroccan architecture with modern
                comfort, creating an ideal environment for yoga practice and relaxation.
              </p>
              <p>
                The property features landscaped gardens with fragrant orange and olive trees, a spacious yoga shala
                with mountain views, and comfortable accommodation designed in traditional Moroccan style. The centre's
                commitment to sustainability and local culture creates an authentic and enriching experience.
              </p>
              <p>
                Meals are prepared using organic local ingredients, offering an opportunity to experience the rich
                flavors of Moroccan cuisine. The retreat includes time for cultural excursions, allowing you to explore
                local markets, villages, and the stunning natural landscape of the Atlas Mountains.
              </p>
            </div>
          </section>

          {/* Who Should Attend */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">Who Should Attend</h2>
            <div className="space-y-4 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                This retreat is suitable for students with some experience in Iyengar Yoga, though all levels are
                welcome. Whether you're looking to deepen your practice, experience a new culture, or simply take time
                for rest and reflection, this retreat offers something for everyone.
              </p>
              <p>
                Georgia's clear teaching style and individual attention ensure that each student receives appropriate
                guidance and support throughout the week.
              </p>
            </div>
          </section>

          {/* Booking Information */}
          <section className="mb-12">
            <div className="bg-brand-orange/10 border-l-4 border-brand-orange rounded-r-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">How to Book</h2>
              <div className="space-y-4 font-body text-brand-black/90">
                <p>
                  To reserve your place on this retreat, please contact Georgia directly. Spaces are limited to ensure a
                  intimate and personal experience.
                </p>
                <p>
                  <strong>Important:</strong> A non-refundable deposit of €400 is required to secure your booking. The
                  remaining balance is due 8 weeks before the retreat start date.
                </p>
                <p>
                  <strong>Cancellation Policy:</strong> Cancellations made more than 8 weeks before the retreat will
                  receive a full refund minus the deposit. Cancellations within 8 weeks are non-refundable unless your
                  place can be filled from the waiting list.
                </p>
              </div>
            </div>
          </section>

          {/* Additional Image Gallery */}
          <section className="mt-16">
            <h2 className="font-heading text-3xl text-brand-black mb-8 text-center">Gallery</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <img
                src="/morocco-bedroom-bab-zouina.jpg"
                alt="Cozy bedroom with traditional Moroccan decor at Bab Zouina retreat"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/morocco-food-bab-zouina.jpg"
                alt="Vibrant healthy meal spread with fresh juices and colorful dishes at Bab Zouina"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-12 mb-8">
            <h2 className="font-heading text-2xl text-brand-black mb-6 text-center">Practical Information</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="pricing">
                <AccordionTrigger className="font-body text-lg text-brand-black">
                  The price and what's included
                </AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">Pricing:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Single Room with ensuite: €1,570</li>
                        <li>• Single room with adjacent bathroom: €1,360</li>
                        <li>• Shared room with ensuite bathroom: €1,270</li>
                        <li>• Shared room with adjacent bathroom: €1,180</li>
                        <li>• Triple Room with adjacent: €970</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">What's Included:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Daily Iyengar Yoga classes (morning and afternoon sessions)</li>
                        <li>• 7 nights accommodation in shared or private rooms</li>
                        <li>• All meals featuring delicious Moroccan cuisine</li>
                        <li>• Tea, coffee, and snacks available all day</li>
                        <li>• Use of the extensive gardens, terraces, and facilities</li>
                        <li>• Use of yoga props and equipment</li>
                        <li>• Airport transfers from Marrakech</li>
                      </ul>
                    </div>
                    <p className="text-sm italic text-brand-black/60 mt-4">
                      €400 deposit required to secure your booking / Shared room only available with friends
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="not-included">
                <AccordionTrigger className="font-body text-lg text-brand-black">What's not included</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <ul className="space-y-2 ml-4">
                    <li>• International flights to Marrakech</li>
                    <li>• Travel insurance (required)</li>
                    <li>• Personal expenses and souvenirs</li>
                    <li>• Hammam treatments and additional services</li>
                    <li>{""}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sharing">
                <AccordionTrigger className="font-body text-lg text-brand-black">Can I share a room?</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <p>
                    Yes! Shared rooms are available at €1,200 per person. If you're booking with a friend or partner,
                    please let us know when making your reservation. Private rooms are also available for €1,450 if you
                    prefer your own space.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="getting-there">
                <AccordionTrigger className="font-body text-lg text-brand-black">
                  How and when to get there?
                </AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <div className="space-y-3">
                    <p>
                      <strong>Flight:</strong> Fly into Marrakech Menara Airport (RAK). The retreat centre is
                      approximately 45 minutes from the airport.
                    </p>
                    <p>
                      <strong>Airport Transfer:</strong> We provide complimentary group transfers from Marrakech airport
                      to the retreat centre. Transfer times will be coordinated closer to the retreat date to
                      accommodate everyone's arrival times.
                    </p>
                    <p>
                      <strong>Arrival Day:</strong> Please plan to arrive on February 15th. The retreat officially
                      begins with a yoga class at 17:30 followed by the welcome dinner. Departure is after breakfast on
                      February 21st.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-brand-warm-gray/30">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
              <Link href="/contact">Book Your Place</Link>
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
