import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Sri Lanka Retreat 2027 | Yoga with Georgia",
  description:
    "Join Georgia for a transformative Iyengar Yoga retreat at Ulpotha, Sri Lanka, January 2027. Experience daily yoga practice in one of the world's most renowned yoga centres set in a traditional farming village.",
  keywords:
    "Sri Lanka yoga retreat, Ulpotha retreat, Iyengar yoga Sri Lanka, yoga retreat 2027, Georgia Marnham retreat",
}

export default function SriLankaRetreat2027Page() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4 text-center">Sri Lanka Retreat 2027</h1>
        <p className="font-body text-xl text-brand-black/80 mb-2 text-center">Ulpotha, Sri Lanka</p>
        <p className="font-body text-lg text-brand-black/70 mb-8 text-center">January 15—29, 2027</p>

        {/* Hero Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src="/sri-lanka-mountain-lake.jpeg"
            alt="Ulpotha yoga retreat centre in Sri Lanka"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Introduction */}
        <div className="mb-12 font-body text-brand-black/80 space-y-4">
          <p>
            Join Georgia for a truly transformative Iyengar Yoga retreat at Ulpotha, one of the world&apos;s most
            renowned yoga retreat centres. This immersive experience combines daily yoga practice with the natural
            beauty and spiritual richness of Sri Lanka.
          </p>
          <p>
            Ulpotha is based on a traditional Sri Lankan farming village which is run by the local Buddhist community.
            Set amidst lush tropical gardens, with daily yoga practice, nourishing vegetarian cuisine, and the
            opportunity to immerse yourself in authentic village life. &quot;It is Heaven on Earth&quot;.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
            <Link href="https://bookwhen.com/georgiamarnhamiyengaryoga" target="_blank" rel="noopener noreferrer">
              Book Now
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-brand-orange text-brand-orange hover:bg-brand-orange/10 bg-transparent"
          >
            <Link href="/retreats">View All Retreats</Link>
          </Button>
        </div>

        {/* What's Included and Daily Schedule Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What's Included */}
          <div className="bg-brand-warm-gray/20 rounded-lg p-6">
            <h2 className="font-heading text-2xl text-brand-black mb-4">Retreat Features</h2>
            <ul className="space-y-3 font-body text-brand-black/80">
              <li className="flex items-start gap-3">
                <span className="text-brand-orange mt-1">•</span>
                <span>Daily Iyengar Yoga classes with Georgia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange mt-1">•</span>
                <span>All meals featuring organic vegetarian Sri Lankan cuisine</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange mt-1">•</span>
                <span>A 1-hour weekly massage per 7-nights stay</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange mt-1">•</span>
                <span>14 nights accommodation in simple, comfortable rooms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange mt-1">•</span>
                <span>Cultural experiences and village activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange mt-1">•</span>
                <span>Transport provided for optional excursions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange mt-1">•</span>
                <span>Laundry service and the use of bicycles, hot water bathing area and taxes</span>
              </li>
            </ul>
          </div>

          {/* Daily Schedule */}
          <div className="bg-brand-warm-gray/20 rounded-lg p-6">
            <h2 className="font-heading text-2xl text-brand-black mb-4">Daily Schedule</h2>
            <div className="space-y-3 font-body text-brand-black/80">
              <div>
                <p className="font-medium text-brand-black">Tea and Fruit: 7:00 – 7:30</p>
              </div>
              <div>
                <p className="font-medium text-brand-black">Yoga practice 8:30 – 10:30</p>
                <p className="text-sm">Morning practice</p>
              </div>
              <div>
                <p className="font-medium text-brand-black">Breakfast 9:30 – 10:00</p>
              </div>
              <div>
                <p className="font-medium text-brand-black">Free time 10.00 – 12.30</p>
                <p className="text-sm">Massage, Ayurveda, swimming or rest</p>
              </div>
              <div>
                <p className="font-medium text-brand-black">Lunch 12:30 – 13:30</p>
              </div>
              <div>
                <p className="font-medium text-brand-black">Free time 10.00 – 12.30</p>
                <p className="text-sm">Massage, Ayurveda, swimming or rest</p>
              </div>
              <div>
                <p className="font-medium text-brand-black">Tea and Snacks 16:00 – 17:00</p>
              </div>
              <div>
                <p className="font-medium text-brand-black">Tea and Snacks 16:00 – 17:00</p>
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
        </div>

        {/* What Makes This Retreat Special */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl text-brand-black mb-8 text-center">What Makes This Retreat Special</h2>

          <div className="space-y-8">
            {/* The Village */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-heading text-2xl text-brand-black mb-4 flex items-center gap-2">
                <span className="text-2xl">🏘️</span> The Village
              </h3>
              <p className="font-body text-brand-black/80">
                Ulpotha is a living, working Sri Lankan village set in 20 acres of lush tropical landscape in the
                Cultural Triangle of Sri Lanka, approximately 3 hours north of Colombo airport. The retreat centre
                preserves traditional building methods and village life while providing comfortable accommodation and
                modern amenities where needed. Solar power, natural spring water, and organic farming practices make
                this a truly sustainable retreat experience.
              </p>
            </div>

            {/* The Food */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-heading text-2xl text-brand-black mb-4 flex items-center gap-2">
                <span className="text-2xl">🍽️</span> Nourishing Cuisine
              </h3>
              <p className="font-body text-brand-black/80">
                The food is delicious, nourishing, and completely vegetarian, offering an authentic taste of Sri Lankan
                cooking with organic ingredients grown on-site or sourced locally. Meals are served buffet-style and
                designed to support your yoga practice and overall wellbeing. Special dietary requirements can be
                accommodated with advance notice.
              </p>
            </div>

            {/* Cultural Experience */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-heading text-2xl text-brand-black mb-4 flex items-center gap-2">
                <span className="text-2xl">🎭</span> Cultural Immersion
              </h3>
              <p className="font-body text-brand-black/80">
                Experience genuine Sri Lankan culture in a working village. The retreat supports the local Buddhist
                community and provides opportunities to participate in village life, traditional ceremonies, and
                optional excursions to nearby ancient sites, elephant safaris, and natural hot springs. This cultural
                immersion adds a profound dimension to your yoga journey.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl text-brand-black mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/sri-lanka-lush-landscape.jpg"
                alt="Lush tropical landscape at Ulpotha"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/sri-lanka-mountain-lake.jpeg"
                alt="Mountain and lake views"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/sri-lanka-traditional-hut.jpg"
                alt="Traditional accommodation at Ulpotha retreat"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl text-brand-black mb-8 text-center">Practical Information</h2>

          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1" className="border-b border-brand-warm-gray/30 px-6">
              <AccordionTrigger className="font-heading text-xl text-brand-black hover:text-brand-orange py-4">
                The price and what&apos;s included
              </AccordionTrigger>
              <AccordionContent className="font-body text-brand-black/80 pb-4">
                <p className="mb-4">The retreat includes:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>14 nights accommodation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>All vegetarian meals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Daily yoga classes with Georgia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>One massage per week of stay</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Cultural activities and excursions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Use of facilities including bicycles and bathing areas</span>
                  </li>
                </ul>
                <p className="font-medium">Pricing details to be confirmed. Please contact for more information.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-brand-warm-gray/30 px-6">
              <AccordionTrigger className="font-heading text-xl text-brand-black hover:text-brand-orange py-4">
                What&apos;s not included
              </AccordionTrigger>
              <AccordionContent className="font-body text-brand-black/80 pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>International flights to Sri Lanka</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Travel insurance (required)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Tourist visa for Sri Lanka</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Airport transfers (available at additional cost)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Additional massages or spa treatments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>Personal expenses and souvenirs</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-brand-warm-gray/30 px-6">
              <AccordionTrigger className="font-heading text-xl text-brand-black hover:text-brand-orange py-4">
                Can I share a room?
              </AccordionTrigger>
              <AccordionContent className="font-body text-brand-black/80 pb-4">
                <p>
                  Yes! Room sharing options are available. If you&apos;re booking with a friend or partner, please let
                  us know when making your reservation. Private rooms are also available at a supplement. Please enquire
                  about specific room types and pricing.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="px-6">
              <AccordionTrigger className="font-heading text-xl text-brand-black hover:text-brand-orange py-4">
                How to get there?
              </AccordionTrigger>
              <AccordionContent className="font-body text-brand-black/80 pb-4">
                <div className="space-y-3">
                  <p>
                    <strong>Flying to Sri Lanka:</strong> You&apos;ll fly into Bandaranaike International Airport (CMB)
                    in Colombo. From there, Ulpotha is approximately a 3-hour drive north into the Cultural Triangle
                    region.
                  </p>
                  <p>
                    <strong>Airport Transfers:</strong> Airport pick-up can be arranged at an additional cost. We can
                    coordinate shared transfers if multiple guests arrive on similar flights.
                  </p>
                  <p>
                    <strong>Arrival Day:</strong> Please plan to arrive on January 15. The retreat officially begins
                    with a yoga class at 17:30 followed by the welcome dinner. Departure is after breakfast on January
                    29th.
                  </p>
                  <p>
                    <strong>Visa Requirements:</strong> Most nationalities require a tourist visa for Sri Lanka, which
                    can be obtained online as an Electronic Travel Authorization (ETA). Please check current
                    requirements for your nationality.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
            <Link href="https://bookwhen.com/georgiamarnhamiyengaryoga" target="_blank" rel="noopener noreferrer">
              Book Now
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-brand-orange text-brand-orange hover:bg-brand-orange/10 bg-transparent"
          >
            <Link href="/retreats">View All Retreats</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
