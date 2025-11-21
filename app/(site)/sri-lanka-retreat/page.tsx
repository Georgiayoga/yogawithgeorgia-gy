import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Sri Lanka Retreat 2026 | Yoga with Georgia",
  description:
    "Join Georgia for a transformative Iyengar Yoga retreat at Ulpotha, Sri Lanka, March 2026. Experience daily yoga practice in one of the world's most renowned yoga centres set in a traditional farming village.",
  keywords:
    "Sri Lanka yoga retreat, Ulpotha retreat, Iyengar yoga Sri Lanka, yoga retreat 2026, Georgia Marnham retreat",
}

export default function SriLankaRetreatPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-centre mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4 text-center">
              Sri Lanka Retreat 2026
            </h1>
            <p className="font-body text-xl text-brand-black/80 mb-2 text-center">Ulpotha, Sri Lanka</p>
            <p className="font-body text-lg text-brand-orange font-medium text-center">March 15–29, 2026</p>
          </header>

          {/* Main Image */}
          <div className="mb-12">
            <img
              src="/sri-lanka-lush-landscape.jpg"
              alt="Ulpotha yoga retreat centre in Sri Lanka"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Join Georgia for an unforgettable two-week Iyengar Yoga retreat at Ulpotha, widely considered one of the
                world&#39;s finest yoga centres. This immersive experience combines daily yoga practice with the natural
                beauty and spiritual richness of Sri Lanka.
              </p>
              <p>
                Ulpotha is based on a traditional Sri Lankan farming village which is run by the local Buddhist
                community. Set in a stunning natural landscape with lush rice paddies, ancient trees, and serene lakes,
                it truly is "Heaven on Earth".
              </p>
            </div>
          </section>

          {/* CTA buttons */}
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
                  <span>Daily Iyengar Yoga classes (morning and afternoon sessions)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>7 nights accommodation in traditional thatched huts</span>
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
                  <span>Use of yoga props and equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Optional Ayurvedic treatments and massages (additional cost)</span>
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
                  <span>Laundry service and the use of bicycles, hot water bathing area, and taxes</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-warm-gray/20 rounded-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">Daily Schedule</h2>
              <div className="space-y-3 font-body text-brand-black/80">
                <div>
                  <p className="font-medium text-brand-black">Tea and Fruit: 7:00 – 7:30</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Yoga practice 8:00 – 9:30</p>
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
                  <p className="text-sm">Meet at the Ambalama</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Free time 14:00 – 16:00</p>
                  <p className="text-sm">Additional free time for exploration or relaxation</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Tea and Snacks 16:00 – 17:00</p>
                  <p className="text-sm">Afternoon refreshments</p>
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

          {/* Pricing */}
          <section className="mb-12">
            <div className="bg-brand-warm-gray/20 rounded-lg p-8 text-centre">
              <h2 className="font-heading text-3xl text-brand-black mb-6">Pricing</h2>
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-heading text-xl text-brand-black mb-2">Full Retreat Package</h3>
                  <p className="font-body text-3xl text-brand-orange font-bold mb-2">€1,650</p>
                  <p className="font-body text-sm text-brand-black/70">per person</p>
                  <p className="font-body text-xs text-brand-black/60 mt-3">
                    (Accommodation in traditional thatched huts)
                  </p>
                </div>
              </div>
              <p className="font-body text-sm text-brand-black/70 mt-6">
                A deposit of €500 is required to secure your place
              </p>
              <p className="font-body text-xs text-brand-black/60 mt-2">
                International flights and visa fees are not included
              </p>
            </div>
          </section>

          {/* About Ulpotha */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">About Ulpotha</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Ulpotha is a living, working Sri Lankan village set in 20 acres of lush tropical landscape in the
                Cultural Triangle of Sri Lanka, approximately 3 hours north of Colombo airport. The retreat centre
                operates for only a few months each year, maintaining its authentic village character and sustainable
                practices.
              </p>
              <p>
                Accommodation is in beautifully crafted traditional thatched huts, each with its own veranda overlooking
                the rice paddies or forest. The huts are simple yet comfortable, with mosquito nets, fans, and ensuite
                bathrooms with hot water. This is eco-luxury at its finest—rustic, authentic, and deeply peaceful.
              </p>
              <p>
                The yoga pavilion is an open-air structure with stunning views across the rice paddies to the distant
                mountains. Practice takes place on wooden platforms with all necessary props provided. The setting
                creates an ideal environment for deep practice and self-reflection.
              </p>
              <p>
                Meals are prepared by the village community using organic vegetables, fruits, and herbs grown on site.
                The food is delicious, nourishing, and completely vegetarian, offering an authentic taste of Sri Lankan
                home cooking.
              </p>
              <p>
                Ulpotha offers optional Ayurvedic treatments, natural swimming in the ancient lake, walks through rice
                paddies and forest trails, and opportunities to participate in village life. The experience is as much
                about cultural immersion and connection to nature as it is about yoga practice.
              </p>
            </div>
          </section>

          {/* What Makes This Special */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">What Makes This Retreat Special</h2>
            <div className="space-y-4 font-body text-lg text-brand-black/90 leading-relaxed">
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🌿 Authentic Village Life</h3>
                <p>
                  Experience genuine Sri Lankan culture in a working village. The retreat supports the local Buddhist
                  community and operates in harmony with traditional farming practices and seasonal rhythms.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🧘 World-Class Yoga Setting</h3>
                <p>
                  Ulpotha has hosted renowned yoga teachers from around the world. The combination of natural beauty,
                  peaceful atmosphere, and excellent facilities creates ideal conditions for deep practice.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🌾 Sustainable & Eco-Conscious</h3>
                <p>
                  All food is organic and locally grown, buildings are made from natural materials, and operations are
                  designed to have minimal environmental impact while supporting local livelihoods.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">💚 Digital Detox</h3>
                <p>
                  There is limited wifi access, encouraging you to truly disconnect from daily life and reconnect with
                  yourself, nature, and the present moment.
                </p>
              </div>
            </div>
          </section>

          {/* Who Should Attend */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">Who Should Attend</h2>
            <div className="space-y-4 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                This retreat is suitable for students with some experience in Iyengar Yoga, though all levels are
                welcome. The setting is rustic and the facilities are simple, making it ideal for those who appreciate
                authentic experiences and are comfortable with basic accommodation.
              </p>
              <p>
                If you're seeking a transformative retreat in a truly unique environment, away from modern distractions,
                this is an exceptional opportunity. Georgia's clear teaching and the magical setting of Ulpotha combine
                to create an unforgettable experience.
              </p>
              <p className="font-medium text-brand-black">
                Please note: This retreat involves basic, eco-friendly accommodation and facilities. It's perfect for
                those who value authenticity and connection to nature over luxury amenities.
              </p>
            </div>
          </section>

          {/* Practical Information */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">Practical Information</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Getting There</h3>
                <p>
                  The retreat begins with a group transfer from Colombo airport (approximately 3 hours). International
                  flights to Colombo are not included in the retreat price. Most participants arrive the day before the
                  retreat begins and depart the day after it ends.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">What to Bring</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your own yoga mat (preferred, though mats are available)</li>
                  <li>Comfortable, light clothing for yoga and warm evenings</li>
                  <li>Insect repellent and sun protection</li>
                  <li>Torch or headlamp for nighttime</li>
                  <li>Any personal medications or toiletries</li>
                  <li>Open mind and adventurous spirit!</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Visa Requirements</h3>
                <p>
                  Most nationalities require a tourist visa for Sri Lanka, which can be obtained online as an Electronic
                  Travel Authorization (ETA). Georgia will provide detailed pre-retreat information including visa
                  guidance.
                </p>
              </div>
            </div>
          </section>

          {/* Booking Information */}
          <section className="mb-12">
            <div className="bg-brand-orange/10 border-l-4 border-brand-orange rounded-r-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">How to Book</h2>
              <div className="space-y-4 font-body text-brand-black/90">
                <p>
                  To reserve your place on this retreat, please contact Georgia directly. Spaces are very limited as
                  Ulpotha is a small, intimate retreat centre, and this retreat fills quickly.
                </p>
                <p>
                  <strong>Important:</strong> A non-refundable deposit of €500 is required to secure your booking. The
                  remaining balance is due 10 weeks before the retreat start date.
                </p>
                <p>
                  <strong>Cancellation Policy:</strong> Cancellations made more than 10 weeks before the retreat will
                  receive a full refund minus the deposit. Cancellations within 10 weeks are non-refundable unless your
                  place can be filled from the waiting list.
                </p>
                <p>
                  <strong>Travel Insurance:</strong> We strongly recommend purchasing comprehensive travel insurance
                  that covers trip cancellation, medical emergencies, and evacuation.
                </p>
              </div>
            </div>
          </section>

          {/* Additional Image Gallery */}
          <section className="mt-16">
            <h2 className="font-heading text-3xl text-brand-black mb-8 text-centre">Gallery</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <img
                src="/sri-lanka-lush-landscape.jpg"
                alt="Ulpotha rice paddies and tropical landscape"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/sri-lanka-lush-landscape.jpg"
                alt="Ulpotha yoga pavilion and accommodation"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
