import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Greece Retreat 2026 | Yoga with Georgia",
  description:
    "Join Georgia for a week-long Iyengar Yoga retreat at Evia Bay in Limni, Evia Peninsula, Greece, June-July 2026. Experience daily yoga practice overlooking the Aegean Sea in a serene coastal setting.",
  keywords:
    "Greece yoga retreat, Evia retreat, Aegean yoga, Iyengar yoga Greece, yoga retreat 2026, Georgia Marnham retreat, Limni retreat",
}

export default function GreeceRetreatPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4">Greece Retreat 2026</h1>
            <p className="font-body text-xl text-brand-black/80 mb-2">Limni, Evia Peninsula</p>
            <p className="font-body text-lg text-brand-orange font-medium">June 27 – July 3, 2026</p>
          </header>

          <div className="mb-12">
            <img
              src="/greece-kaminos-hero.jpg"
              alt="Aerial view of Kaminos Resort nestled against dramatic hills with the Aegean Sea coastline, showing terracotta roofs, swimming pool, and pine forests"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Join Georgia for a week of Iyengar Yoga at Kaminos Resort, set between the hills and the Aegean Sea. The
                atmosphere is peaceful and unhurried, creating a comfortable space to focus on practice and enjoy a
                slower pace.
              </p>
              <p>
                From the resort it's an easy walk to quiet swimming spots along the Evia coastline, with clear water and
                gentle views. With a dedicated yoga area, delicious meals, and genuine Greek hospitality, it's an ideal
                early-summer retreat to reconnect and recharge.
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
                  <span>Daily Iyengar Yoga classes (morning and evening sessions)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>6 nights accommodation in standard or junior suites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Meals featuring delicious local Greek and vegetarian cuisine</span>
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
                  <span>Access to swimming pool, gardens, and beach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Organisation of local tours</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-warm-gray/20 rounded-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">Daily Schedule</h2>
              <div className="space-y-3 font-body text-brand-black/80">
                <div>
                  <p className="font-medium text-brand-black">Yoga practice 8:00 – 10:15</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Brunch 10:30 – 11:30</p>
                  <p className="text-sm">
                    Featuring fresh local fruits, homemade breads, yogurt, eggs, and Greek specialties.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Afternoon - free time</p>
                  <p className="text-sm">Rest, walks, coastal visits, excursions, massage etc</p>
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
            <h2 className="font-heading text-3xl text-brand-black mb-6">About Kaminos Resort</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Set on the coast of North Evia, Kaminos Resort lies between pine-clad woods and the gentle Aegean
                shoreline, just outside the village of Limni. Now a serene beachfront retreat, the property occupies the
                site of a former coal-factory complex, re-imagined into a haven where time moves at its own pace.
              </p>
              <p>
                The resort features comfortable rooms and suites with rustic charm: wooden beams, stone floors and soft
                linen accents, thoughtfully designed to feel home-like. Surrounded by nature, you'll find shaded paths
                through the pines, a private stretch of sandy beach just metres away, and a spacious pool area that
                invites quiet afternoons beside the water.
              </p>
              <p>
                Meals at Kaminos Resort focus on local flavours and simple pleasures: breakfast items from nearby
                producers, snack options by the pool, and access to authentic seaside tavernas in the village of Limni.
                The early summer climate here, warm days and gentle sea breezes, provides an ideal backdrop for
                combining yoga sessions and relaxed coastal walks.
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
                <h3 className="font-heading text-xl text-brand-black mb-3">🧘 Equipped Yoga Studio</h3>
                <p>
                  The yoga studio at Kaminos Resort is spacious, comfortable, and set in peaceful natural surroundings.
                  It will be equipped with all the props needed for Iyengar Yoga, offering a calm, uncluttered space to
                  focus on your practice.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🌞 Perfect Climate</h3>
                <p>
                  Late June and early July bring warm, sunny days averaging 25–28°C, ideal for yoga practice, swimming
                  and outdoor exploration.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🏛️ Cultural & Local Exploration</h3>
                <p>
                  Explore nearby villages like Rovies and Limni, known for their relaxed seafronts, cafés, and
                  traditional charm. Optional short trips to coastal towns, thermal springs, and local historical spots
                  offer an easy taste of everyday Greek culture without long travel days.
                </p>
              </div>
            </div>
          </section>

          {/* Who Should Attend */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">Who Should Attend</h2>
            <div className="space-y-4 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>This retreat is ideal for:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Anyone seeking a restorative week with space to deepen their yoga practice</li>
                <li>
                  Both experienced practitioners and those newer to yoga who want to explore Iyengar Yoga more fully
                </li>
                <li>People who appreciate comfortable accommodation, coastal holidays, and time in nature</li>
                <li>
                  Solo travellers, couples, or friends looking for a peaceful early-summer escape in beautiful
                  surroundings
                </li>
              </ul>
            </div>
          </section>

          {/* Additional Image Gallery */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-8 text-center">Gallery</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <img
                src="/greece-modern-bedroom.jpg"
                alt="Modern bedroom at Kaminos Resort with wooden furniture, wicker lighting, and balcony doors opening to views of Mediterranean buildings and hills"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/greece-pool-updated.jpg"
                alt="Large swimming pool at Kaminos Resort with turquoise water, white umbrellas, sun loungers, stone pergolas, and lush green hills in the background"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/greece-paddleboard.jpg"
                alt="Woman paddleboarding on calm Aegean Sea waters during golden hour with distant hills on the horizon"
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
                        <li>• Standard room with ensuite, single: €1,550 per person</li>
                        <li>• Standard room with ensuite, shared: €1,200 per person</li>
                        <li>• Junior suite, single: €1,680 per person</li>
                        <li>• Junior suite, shared: €1,330 per person</li>
                        <li>• Junior suite, triple: €1,260 per person</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">What's included:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Daily Iyengar yoga classes (morning and evening sessions)</li>
                        <li>• 6 nights accommodation</li>
                        <li>• Meals (brunch and dinner) featuring fresh local cuisine</li>
                        <li>• Access to swimming pool, gardens and beach</li>
                        <li>• Use of yoga props and equipment</li>
                        <li>• Organisation of local tours</li>
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
                    Yes! Double and triple rooms are available. Family rooms too. If you're booking with friends, family
                    or a partner, please let us know when making your reservation.
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
                <AccordionTrigger className="font-body text-lg text-brand-black">How to get there</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <div className="space-y-4">
                    <p>
                      If you want to join the group airport transfer service, there will be a mini-bus leaving Athens
                      airport on Saturday, June 27 at 3pm.
                    </p>
                    <p>
                      If you prefer to hire a car and travel separately, you can drive from Athens to Arkitsa Port
                      (approx. 1.5 hrs), take the ferry to Aidipsos (45 mins), and then drive 40 mins to Limni.
                    </p>
                    <p>
                      Alternatively, you can drive through Chalkida on the island itself - the journey takes about 3
                      hours from Athens Airport.
                    </p>
                    <p>
                      There is an airport closer to Limni, with fewer flights: Nea Anchialos (VOL / LGBL) near Volos —
                      approximately 113 km away.
                    </p>
                  </div>
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
