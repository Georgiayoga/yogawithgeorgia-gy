import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Greece Retreat 2026 | Yoga with Georgia",
  description:
    "Join Georgia for a week-long Iyengar Yoga retreat at Evia Bay in Northern Evia, Greece, June 2026. Experience daily yoga practice overlooking the Aegean Sea in a serene coastal setting.",
  keywords:
    "Greece yoga retreat, Evia retreat, Aegean yoga, Iyengar yoga Greece, yoga retreat 2026, Georgia Marnham retreat, Northern Evia retreat",
}

export default function GreeceRetreatPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4">Greece Retreat 2026</h1>
            <p className="font-body text-xl text-brand-black/80 mb-2">Evia Bay, Northern Evia</p>
            <p className="font-body text-lg text-brand-orange font-medium">June 21 – 27, 2026</p>
          </header>

          <div className="mb-12">
            <img
              src="/portugal-yoga-studio-statue.jpg"
              alt="Yoga studio at retreat venue with traditional Buddha statue and panoramic views"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Join Georgia for a transformative week-long Iyengar Yoga retreat at Evia Bay, nestled in the hills of
                Northern Evia in beautiful Greece. This peaceful retreat combines daily yoga practice with the natural
                beauty and cultural richness of the Aegean coast.
              </p>
              <p>
                Evia Bay is just minutes from the coastline with its fabulous beaches, sandy coves, and crystal-clear
                waters. The retreat centre offers a serene hillside setting with stunning views, a fully equipped yoga
                studio, and comfortable accommodation; the perfect environment for deepening your practice.
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
              <h2 className="font-heading text-2xl text-brand-black mb-4">Retreat Features</h2>
              <ul className="space-y-3 font-body text-brand-black/80">
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Daily Iyengar Yoga classes (morning and afternoon sessions)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>6 nights accommodation in shared or private rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>All meals featuring delicious local Greek and vegetarian cuisine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Use of fully equipped yoga studio with all props</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Use of living room, terraces and all common areas </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Access to swimming pool and gardens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Optional excursions to local beaches and towns </span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-warm-gray/20 rounded-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">Daily Schedule</h2>
              <div className="space-y-3 font-body text-brand-black/80">
                <div>
                  <p className="font-medium text-brand-black">Yoga practice 8:30 – 10:30</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Brunch 11:00 – 12:00</p>
                  <p className="text-sm">
                    Featuring fresh local fruits, homemade breads, yogurt, eggs, and Greek specialties.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Afternoon - free time</p>
                  <p className="text-sm">Rest, walks, coastal visits, excursions, massage etc</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Tea and snacks</p>
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

          {/* About Venue */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">About the Retreat Centre</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                The retreat centre is a beautiful property set in the rolling hills of Northern Evia, overlooking the
                stunning Aegean Sea. The property combines traditional Greek architecture with modern comfort, creating
                an ideal space for yoga practice and relaxation.
              </p>
              <p>
                The centre features a fully equipped yoga studio with stunning views over the sea, comfortable
                accommodation in both shared and private rooms, a refreshing swimming pool, and extensive gardens
                perfect for quiet reflection or leisurely walks.
              </p>
              <p>
                Located just minutes from some of Greece's most beautiful beaches and the crystal-clear waters of the
                Aegean, the retreat offers the perfect balance between focused yoga practice and coastal exploration.
              </p>
              <p>
                Meals are prepared using fresh, local ingredients, with a focus on healthy Mediterranean and vegetarian
                cuisine. The Greek climate in June—warm sunny days and pleasant evenings—makes this an ideal time to
                visit.
              </p>
            </div>
          </section>

          {/* What Makes This Special */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">What Makes This Retreat Special</h2>
            <div className="space-y-4 font-body text-lg text-brand-black/90 leading-relaxed">
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🏖️ Beach Access</h3>
                <p>
                  Just minutes from stunning Aegean beaches and crystal-clear waters. Enjoy morning yoga practice
                  followed by afternoon beach visits, combining the best of yoga retreat and coastal holiday.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🧘 Dedicated Yoga Studio</h3>
                <p>
                  The retreat features a purpose-built yoga studio with all necessary props, excellent natural light,
                  and beautiful views. The space is designed specifically for Iyengar practice.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🌞 Perfect Climate</h3>
                <p>
                  June in Greece offers ideal weather—warm, sunny days averaging 25-28°C, perfect for both yoga practice
                  and outdoor exploration.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🏘️ Cultural Exploration</h3>
                <p>
                  Explore charming local villages, ancient sites, and authentic Greek culture. Optional excursions to
                  nearby coastal towns and historical landmarks.
                </p>
              </div>
            </div>
          </section>

          {/* Who Should Attend */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">Who Should Attend</h2>
            <div className="space-y-4 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>This retreat is perfect for:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Anyone seeking a restorative break and a deeper connection to their yoga practice</li>
                <li>Both experienced practitioners and those newer to yoga who are curious to explore further</li>
                <li>Those interested in Iyengar yoga's focus on alignment, precision, and mindful awareness</li>
                <li>Solo travelers, couples, or friends looking for a peaceful retreat in beautiful surroundings</li>
              </ul>
            </div>
          </section>

          {/* Additional Image Gallery */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-8 text-center">Gallery</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <img
                src="/portugal-pool-evening.jpeg"
                alt="Beautiful swimming pool at retreat centre in evening light with stone terracing and lush Mediterranean gardens"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/portugal-bedroom-interior.jpg"
                alt="Serene bedroom with canopy bed and terrace doors at retreat centre"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/portugal-food-spread.jpg"
                alt="Delicious healthy vegetarian meal spread with fresh salad, flatbreads, and accompaniments"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Practical Information */}
          <section className="mb-12">
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
                        <li>• Shared room: €1,100 per person</li>
                        <li>• Private room: €1,325 per person</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">What's Included:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Daily Iyengar Yoga classes (morning and afternoon sessions)</li>
                        <li>• 6 nights accommodation</li>
                        <li>• All meals featuring fresh local cuisine</li>
                        <li>• Tea, coffee, and snacks available throughout the day</li>
                        <li>• Access to swimming pool and gardens</li>
                        <li>• Use of yoga props and equipment</li>
                      </ul>
                    </div>
                    <p className="text-sm italic text-brand-black/60 mt-4">
                      €400 deposit required to secure your booking
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="not-included">
                <AccordionTrigger className="font-body text-lg text-brand-black">What's not included</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <ul className="space-y-2 ml-4">
                    <li>• International flights to Athens</li>
                    <li>• Travel insurance (required)</li>
                    <li>• Personal expenses and souvenirs</li>
                    <li>• Optional excursions</li>
                    <li>• Airport transfers</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sharing">
                <AccordionTrigger className="font-body text-lg text-brand-black">Can I share a room?</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <p>
                    Yes! Shared rooms are available at €1,100 per person. If you're booking with a friend or partner,
                    please let us know when making your reservation. Private rooms are also available for €1,325 if you
                    prefer your own space.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="booking-process">
                <AccordionTrigger className="font-body text-lg text-brand-black">Booking process</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <div className="space-y-3">
                    <p>Spaces are limited to ensure a personal experience and individual attention for each student.</p>
                    <p>
                      <strong>Important:</strong> A non-refundable deposit of €400 is required to secure your booking.
                      The remaining balance is due 8 weeks before the retreat start date.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="what-to-bring">
                <AccordionTrigger className="font-body text-lg text-brand-black">What to bring</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <ul className="space-y-2 ml-4">
                    <li>• Comfortable clothing for yoga practice (layers recommended)</li>
                    <li>• Casual clothes for leisure time</li>
                    <li>• Swimwear and beach towel</li>
                    <li>• Sun protection (hat, sunglasses, sunscreen)</li>
                    <li>• Light jacket or sweater for cooler evenings</li>
                    <li>• Walking shoes or sandals</li>
                    <li>• Any personal toiletries or medications</li>
                    <li>• Reusable water bottle</li>
                    <li>• Notebook and pen if you like to take notes</li>
                  </ul>
                  <p className="text-sm italic text-brand-black/60 mt-4">
                    Note: All yoga props (blocks, belts, bolsters, blankets) are provided at the retreat centre.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
        </div>
      </div>
    </div>
  )
}
