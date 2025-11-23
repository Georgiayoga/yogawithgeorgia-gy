import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Portugal Retreat September 2026 | Yoga with Georgia",
  description:
    "Join Georgia for a week-long Iyengar Yoga retreat at Casa Cales in the Algarve, Portugal, September 2026. Experience daily yoga practice in a beautiful hillside setting near stunning beaches.",
  keywords:
    "Portugal yoga retreat, Algarve retreat, Casa Cales, Iyengar yoga Portugal, yoga retreat 2026, Georgia Marnham retreat, Loulé retreat, September retreat",
}

export default function PortugalSeptemberRetreatPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4">Portugal Retreat 2026</h1>
            <p className="font-body text-xl text-brand-black/80 mb-2">Casa Cales, Loulé, Algarve</p>
            <p className="font-body text-lg text-brand-orange font-medium">September 13 – 19, 2026</p>
          </header>

          <div className="mb-12">
            <img
              src="/portugal-yoga-studio-ceiling.jpg"
              alt="Beautiful yoga studio at Casa Cales with stunning radial wooden beam ceiling and panoramic windows"
              className="w-full h-[400px] object-cover object-[center_65%] rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Join Georgia for a transformative week-long Iyengar Yoga retreat at Casa Cales, nestled in the hills
                outside Loulé in the beautiful Algarve region of Portugal. This peaceful retreat combines daily yoga
                practice with the natural beauty and cultural richness of southern Portugal.
              </p>
              <p>
                Casa Cales is just 15 minutes from the coastline with its fabulous beaches, sandy coves, and islands.
                The retreat centre offers a serene hillside setting with stunning views, a fully equipped yoga studio,
                and comfortable accommodation; the perfect environment for deepening your practice.
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
                  <span>7 nights accommodation in shared or private rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>All meals featuring delicious local Portuguese and vegetarian cuisine</span>
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
                    Featuring fresh local fruits, homemade breads, yogurt, eggs, and Portuguese specialties.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Afternoon - free time </p>
                  <p className="text-sm">Rest, walks, coastal visits, excursions, massage etc</p>
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

          {/* About Casa Cales */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">About Casa Cales</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Casa Cales is a beautiful retreat centre set in the rolling hills of the Algarve, just outside the
                historic market town of Loulé. The property combines traditional Portuguese architecture with modern
                comfort, creating an ideal space for yoga practice and relaxation.
              </p>
              <p>
                The centre features a fully equipped yoga studio with stunning views over the countryside, comfortable
                accommodation in both shared and private rooms, a refreshing swimming pool, and extensive gardens
                perfect for quiet reflection or leisurely walks.
              </p>
              <p>
                Located just 15 minutes from some of the Algarve's most beautiful beaches—including Praia do Quinta do
                Lago, Praia de Ancão, and the stunning Ria Formosa Natural Park—Casa Cales offers the perfect balance
                between focused yoga practice and coastal exploration.
              </p>
              <p>
                Meals are prepared using fresh, local ingredients, with a focus on healthy Mediterranean and vegetarian
                cuisine. The Algarve's excellent climate in September—warm sunny days and pleasant evenings—makes this
                an ideal time to visit.
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
                  Just 15 minutes from stunning Algarve beaches and the Ria Formosa Natural Park. Enjoy morning yoga
                  practice followed by afternoon beach visits, combining the best of yoga retreat and coastal holiday.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🧘 Dedicated Yoga Studio</h3>
                <p>
                  Casa Cales features a purpose-built yoga studio with all necessary props, excellent natural light, and
                  beautiful views. The space is designed specifically for Iyengar practice.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🌞 Perfect Climate</h3>
                <p>
                  September in the Algarve offers ideal weather—warm, sunny days averaging 20-24°C, perfect for both
                  yoga practice and outdoor exploration without the summer crowds.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🏘️ Cultural Exploration</h3>
                <p>
                  Explore the charming market town of Loulé, known for its Saturday market, historic architecture, and
                  authentic Portuguese culture. Optional excursions to local villages and coastal towns.
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
                src="/portugal-house-exterior.jpg"
                alt="Charming Casa Cales house exterior with flowering vines, green doors, and stone terrace in sunny Portuguese countryside"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/portugal-pool-evening.jpg"
                alt="Beautiful swimming pool at Casa Cales during evening golden hour with stone terracing, lounge chairs, and Mediterranean gardens"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/portugal-sunset-view.png"
                alt="Stunning sunset view of Portuguese countryside from Casa Cales with yoga studio dome and olive groves"
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
                        <li>• 7 nights accommodation</li>
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
                    <li>• International flights to Faro</li>
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

              <AccordionItem value="travel">
                <AccordionTrigger className="font-body text-lg text-brand-black">
                  How and when to get there?
                </AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Flight:</p>
                      <p>Fly to Faro Airport (FAO). The retreat centre is 45 minutes from the airport.</p>
                    </div>
                    <div>
                      <p className="font-medium">Airport transfer:</p>
                      <p>
                        We can organise airport transfers. Transfer times will be co-ordinated closer to the retreat
                        date to accommodate everyone's arrival times.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Arrival and departure times:</p>
                      <p>
                        You are welcome to arrive at any time on Sunday, September 13; your room will be ready for you.
                        The retreat officially starts at 5pm with the evening class.
                      </p>
                      <p className="mt-2">
                        Departure is after breakfast on the final day, Saturday, September 19; checking out of your room
                        by 10am. You are welcome to use the common areas and keep your bags stored during the day.
                      </p>
                    </div>
                  </div>
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
                    Note: All yoga props (blocks, belts, bolsters, blankets) are provided at Casa Cales.
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
