import Link from "next/link"
import { Button } from "@/components/ui/button"

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
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4">Portugal Retreat September 2026</h1>
            <p className="font-body text-xl text-brand-black/80 mb-2">Casa Cales, Loulé, Algarve</p>
            <p className="font-body text-lg text-brand-orange font-medium">13–19 September, 2026</p>
          </header>

          {/* Main Image */}
          <div className="mb-12">
            <img
              src="/praia-do-quinta-do-lago-algarve.jpg"
              alt="Casa Cales retreat venue in Loulé, Algarve, Portugal"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Return to the much-loved Casa Cales for another transformative week-long Iyengar Yoga retreat in
                September 2026. Set in the rolling hills outside the lively market town of Loulé in the beautiful
                Algarve, this retreat combines dedicated yoga practice with the warmth and beauty of late summer in
                Portugal.
              </p>
              <p>
                Casa Cales is nestled in the hills just 15 minutes from some of the Algarve's most stunning beaches and
                the beautiful Ria Formosa Natural Park. The retreat centre offers a peaceful hillside setting with
                panoramic views, a fully equipped yoga studio, comfortable accommodation, and exceptional Portuguese
                hospitality.
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
                  <span>Access to swimming pool and gardens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Optional excursions to local beaches and villages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Airport transfers from Faro airport</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-warm-gray/20 rounded-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">Daily Schedule</h2>
              <div className="space-y-3 font-body text-brand-black/80">
                <div>
                  <p className="font-medium text-brand-black">Morning (7:30 - 9:30)</p>
                  <p className="text-sm">Yoga practice</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Morning (9:30 - 10:30)</p>
                  <p className="text-sm">Breakfast</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Mid-day</p>
                  <p className="text-sm">Free time for pool, beach visits, rest, or exploration</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Afternoon (4:30 - 6:30)</p>
                  <p className="text-sm">Yoga practice</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Evening (7:00 onwards)</p>
                  <p className="text-sm">Dinner and relaxation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-12">
            <div className="bg-brand-warm-gray/20 rounded-lg p-8 text-center">
              <h2 className="font-heading text-3xl text-brand-black mb-6">Pricing</h2>
              <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-heading text-xl text-brand-black mb-2">Shared Room</h3>
                  <p className="font-body text-3xl text-brand-orange font-bold mb-2">€1,100</p>
                  <p className="font-body text-sm text-brand-black/70">per person</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-heading text-xl text-brand-black mb-2">Private Room</h3>
                  <p className="font-body text-3xl text-brand-orange font-bold mb-2">€1,350</p>
                  <p className="font-body text-sm text-brand-black/70">per person</p>
                </div>
              </div>
              <p className="font-body text-sm text-brand-black/70 mt-6">
                A deposit of €400 is required to secure your place
              </p>
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
                The centre features a purpose-built yoga studio with stunning countryside views, comfortable
                accommodation in both shared and private rooms, a refreshing swimming pool, and extensive gardens with
                native plants and shaded areas perfect for quiet reflection.
              </p>
              <p>
                Located just 15 minutes from some of the Algarve's most beautiful beaches—including Praia do Quinta do
                Lago, Praia de Ancão, and the stunning Ria Formosa Natural Park—Casa Cales offers the perfect balance
                between dedicated yoga practice and coastal exploration.
              </p>
              <p>
                All meals are prepared using fresh, seasonal, local ingredients, with a focus on healthy Mediterranean
                and vegetarian cuisine. September is a wonderful time to visit the Algarve—the summer crowds have
                diminished, the weather remains warm and sunny, and the sea is at its warmest for swimming.
              </p>
            </div>
          </section>

          {/* Why September */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">Why September?</h2>
            <div className="space-y-4 font-body text-lg text-brand-black/90 leading-relaxed">
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🌊 Perfect Swimming Conditions</h3>
                <p>
                  September offers the warmest sea temperatures of the year in the Algarve (20-22°C), making it ideal
                  for ocean swimming after yoga practice. The beaches are quieter than in summer, allowing for peaceful
                  coastal walks and relaxation.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">☀️ Comfortable Weather</h3>
                <p>
                  Late summer temperatures (24-28°C) are perfect for yoga practice—warm but not too hot. Clear blue
                  skies, gentle breezes, and pleasant evenings create ideal conditions for both indoor practice and
                  outdoor relaxation.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🍇 Harvest Season</h3>
                <p>
                  September is harvest time in Portugal. Experience the abundance of fresh figs, grapes, tomatoes, and
                  other seasonal produce. The local markets are at their most vibrant, and the countryside is
                  particularly beautiful.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🏘️ Authentic Local Life</h3>
                <p>
                  With the tourist season winding down, you'll experience more authentic Portuguese life. Local
                  festivals, quieter beaches, and a more relaxed pace make September perfect for cultural immersion
                  alongside yoga practice.
                </p>
              </div>
            </div>
          </section>

          {/* Sample Day */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">A Day on Retreat</h2>
            <div className="bg-brand-warm-gray/10 rounded-lg p-8">
              <div className="space-y-6 font-body text-brand-black/90 leading-relaxed">
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">7:30 AM - Morning Practice</p>
                  <p>
                    Start your day with a 2-hour Iyengar yoga class in the beautiful studio overlooking the countryside.
                    Morning sessions often focus on standing poses, inversions, and energizing sequences.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">9:30 AM - Breakfast</p>
                  <p>
                    Enjoy a leisurely breakfast featuring fresh local fruits, homemade breads, Portuguese pastries,
                    yogurt, eggs, and seasonal specialties like fresh figs.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">10:30 AM - Free Time</p>
                  <p>
                    Relax by the pool, rest in your room, read in the gardens, or join an optional excursion to nearby
                    beaches or the charming town of Loulé. September's warm sea makes beach visits particularly
                    appealing.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">1:00 PM - Lunch</p>
                  <p>
                    A light, nourishing lunch with fresh salads, grilled vegetables, Portuguese soups, and Mediterranean
                    dishes. Everything is prepared with seasonal, local ingredients.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">4:30 PM - Afternoon Practice</p>
                  <p>
                    Afternoon sessions typically explore deeper work—restorative poses, backbends, forward bends, or
                    specialised focus on particular aspects of Iyengar practice such as pranayama or arm balances.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">7:00 PM - Dinner & Evening</p>
                  <p>
                    Gather for dinner featuring Portuguese and Mediterranean cuisine with fresh fish, grilled
                    vegetables, and local wines available. Evenings are yours to enjoy the sunset, stargaze, or share
                    conversations with fellow yogis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who Should Attend */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">Who Should Attend</h2>
            <div className="space-y-4 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                This retreat welcomes students of all levels, from complete beginners to experienced practitioners and
                teachers. Georgia's clear, supportive teaching style ensures everyone receives appropriate guidance and
                individual attention throughout the week.
              </p>
              <p>
                The September retreat is particularly suitable for those who prefer quieter beaches, warmer swimming
                conditions, and a more relaxed pace. It's perfect for anyone looking to combine serious yoga practice
                with late summer relaxation in one of Europe's most beautiful coastal regions.
              </p>
              <p>
                Many students return to Casa Cales year after year, drawn by the combination of Georgia's teaching, the
                peaceful setting, and the welcoming atmosphere. Whether this is your first retreat or you're a returning
                student, you'll find a supportive community and an enriching experience.
              </p>
            </div>
          </section>

          {/* Getting There */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">Getting There</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">By Air</h3>
                <p>
                  The nearest airport is Faro (FAO), which is exceptionally well-connected to major European cities with
                  frequent direct flights, especially in September. From Faro airport, Casa Cales is approximately 30
                  minutes by car. Airport transfers are included in the retreat price.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Arrival & Departure</h3>
                <p>
                  The retreat begins with dinner on Day 1 and ends after breakfast on Day 8. We recommend arriving at
                  Faro airport by early afternoon on Day 1 and booking departure flights for mid-morning or later on Day
                  8. Detailed transfer schedules will be provided after booking.
                </p>
              </div>
              <div className="bg-brand-orange/10 border-l-4 border-brand-orange rounded-r-lg p-6">
                <p>
                  <strong>Note:</strong> International flights are not included in the retreat price. Flight prices to
                  Faro are often very competitive in September. Georgia will provide detailed travel information
                  including recommended flight times and group transfer schedules after booking.
                </p>
              </div>
            </div>
          </section>

          {/* What to Bring */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">What to Bring</h2>
            <div className="space-y-4 font-body text-brand-black/90 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Yoga mat (or let Georgia know if you need to borrow one)</li>
                <li>Comfortable clothing for yoga practice (layers recommended for early mornings)</li>
                <li>Casual clothes for leisure time</li>
                <li>Swimwear and beach towel</li>
                <li>Sun protection (hat, sunglasses, sunscreen)</li>
                <li>Light jacket or sweater for evenings (September evenings can be slightly cooler)</li>
                <li>Walking shoes or sandals</li>
                <li>Any personal toiletries or medications</li>
                <li>Reusable water bottle</li>
                <li>Notebook and pen if you like to take notes during sessions</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> All yoga props (blocks, belts, bolsters, blankets, chairs) are provided at Casa
                Cales. The studio is fully equipped for Iyengar practice.
              </p>
            </div>
          </section>

          {/* Local Exploration */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">Exploring the Local Area</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Loulé Market Town</h3>
                <p>
                  The historic town of Loulé is just a short drive away and features a wonderful Saturday market,
                  Moorish architecture, traditional craftsmen, and charming cafes. The town comes alive in September
                  with local festivals celebrating the harvest season.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Beaches & Natural Parks</h3>
                <p>
                  Explore pristine beaches like Praia do Quinta do Lago and Praia de Ancão, or take a boat trip through
                  the Ria Formosa Natural Park—a unique lagoon system and bird sanctuary. September's warm waters make
                  swimming particularly enjoyable.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Villages & Culture</h3>
                <p>
                  Visit traditional whitewashed villages, experience authentic Portuguese cuisine in local restaurants,
                  or explore the nearby city of Faro with its historic old town and beautiful cathedral.
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
                  To reserve your place on this retreat, please contact Georgia directly. Spaces are limited to ensure
                  an intimate and personal experience with individual attention for each student.
                </p>
                <p>
                  <strong>Deposit:</strong> A non-refundable deposit of €400 is required to secure your booking. The
                  remaining balance is due 8 weeks before the retreat start date.
                </p>
                <p>
                  <strong>Cancellation Policy:</strong> Cancellations made more than 8 weeks before the retreat will
                  receive a full refund minus the deposit. Cancellations within 8 weeks are non-refundable unless your
                  place can be filled from the waiting list.
                </p>
                <p>
                  <strong>Travel Insurance:</strong> We strongly recommend purchasing travel insurance that covers trip
                  cancellation and medical emergencies.
                </p>
                <p>
                  <strong>Payment:</strong> Payment can be made via bank transfer. Full payment details will be provided
                  upon booking confirmation.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials from Previous Retreats */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-8 text-center">
              What Students Say About Georgia's Retreats
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-brand-warm-gray rounded-lg p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-brand-gold text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="font-body text-brand-black/90 mb-4">
                  "Georgia's yoga retreats in Portugal are unforgettable. The yoga is challenging yet deeply
                  restorative, and the whole experience is beautifully organised. I can't recommend them enough."
                </blockquote>
                <cite className="font-body text-sm text-brand-black/70">— Emma, UK</cite>
              </div>
              <div className="bg-white border border-brand-warm-gray rounded-lg p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-brand-gold text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="font-body text-brand-black/90 mb-4">
                  "I first met Georgia on a yoga retreat in Portugal and was blown away by her depth of knowledge. Every
                  session left me both energised and peaceful. I return every year."
                </blockquote>
                <cite className="font-body text-sm text-brand-black/70">— João, Portugal</cite>
              </div>
            </div>
          </section>

          {/* Additional Image Gallery */}
          <section className="mt-16">
            <h2 className="font-heading text-3xl text-brand-black mb-8 text-center">Gallery</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <img
                src="/praia-do-quinta-do-lago-algarve.jpg"
                alt="Beautiful Algarve beach in September"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/portugal-algarve-coast.jpg"
                alt="Casa Cales retreat centre and surroundings"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/portugal-yoga-studio-statue.jpg"
                alt="Casa Cales yoga studio with peaceful atmosphere"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
