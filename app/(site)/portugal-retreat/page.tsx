import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Portugal Retreat 2026 | Yoga with Georgia",
  description:
    "Join Georgia for a week-long Iyengar Yoga retreat at Casa Cales in the Algarve, Portugal, April 2026. Experience daily yoga practice in a beautiful hillside setting near stunning beaches.",
  keywords:
    "Portugal yoga retreat, Algarve retreat, Casa Cales, Iyengar yoga Portugal, yoga retreat 2026, Georgia Marnham retreat, Loulé retreat",
}

export default function PortugalRetreatPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4">Portugal Retreat 2026</h1>
            <p className="font-body text-xl text-brand-black/80 mb-2">Casa Cales, Loulé, Algarve</p>
            <p className="font-body text-lg text-brand-orange font-medium">April 26 – May 2, 2026</p>
          </header>

          <div className="mb-12">
            <img
              src="/portugal-yoga-studio-statue.jpg"
              alt="Yoga studio at Casa Cales retreat venue with traditional Buddha statue and panoramic views"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
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
              <h2 className="font-heading text-2xl text-brand-black mb-4">What's Included</h2>
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
                  <span>All meals featuring delicious local Portuguese and vegetarian cuisine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Use of fully equipped yoga studio with all props</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Use of living room, terraces and all common areas     </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>{"Acess to swimming pool and gardens"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Optional excursions to local beaches and towns    </span>
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
                cuisine. The Algarve's excellent climate in April—warm sunny days and pleasant evenings—makes this an
                ideal time to visit.
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
                  April in the Algarve offers ideal weather—warm, sunny days averaging 20-24°C, perfect for both yoga
                  practice and outdoor exploration without the summer crowds.
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

          {/* Sample Day */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">A Day on Retreat</h2>
            <div className="bg-brand-warm-gray/10 rounded-lg p-8">
              <div className="space-y-6 font-body text-brand-black/90 leading-relaxed">
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">7:30 AM - Morning Practice</p>
                  <p>
                    Begin your day with a 2-hour Iyengar yoga class in the beautiful studio. Morning sessions often
                    focus on standing poses, inversions, and energizing sequences to awaken the body.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">9:30 AM - Breakfast</p>
                  <p>
                    Enjoy a healthy breakfast featuring fresh local fruits, homemade breads, yogurt, eggs, and
                    Portuguese specialties.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">10:30 AM - Free Time</p>
                  <p>
                    Relax by the pool, take a siesta, read in the gardens, or join an optional excursion to the beach or
                    local villages. Some days include organised trips to nearby attractions.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">1:00 PM - Lunch</p>
                  <p>
                    A light, nourishing lunch with salads, grilled vegetables, soups, and Mediterranean dishes. Fresh,
                    seasonal, and mostly vegetarian.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">4:30 PM - Afternoon Practice</p>
                  <p>
                    The afternoon session typically focuses on deeper work—restorative poses, backbends, forward bends,
                    or specialised workshops on particular aspects of Iyengar practice.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">7:00 PM - Dinner & Evening</p>
                  <p>
                    Gather for dinner featuring Portuguese and Mediterranean cuisine. Evenings are free to relax, share
                    conversations with fellow students, or enjoy the peaceful surroundings under the stars.
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
                This retreat is suitable for students of all levels, from beginners to experienced practitioners.
                Georgia's clear teaching style ensures everyone receives appropriate guidance and individual attention.
              </p>
              <p>
                Whether you're looking to deepen your existing practice, learn Iyengar Yoga properly from the beginning,
                or simply enjoy a week of yoga combined with the beauty of the Algarve, this retreat offers something
                for everyone.
              </p>
              <p>
                The combination of dedicated practice time and leisure activities makes this retreat ideal for both
                serious students and those seeking a more balanced yoga holiday experience.
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
                  The nearest airport is Faro (FAO), which is well-connected to major European cities with frequent
                  direct flights. From Faro airport, Casa Cales is approximately 30 minutes by car. Airport transfers
                  are included in the retreat price.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Arrival & Departure</h3>
                <p>
                  The retreat begins with dinner on Day 1 and ends after breakfast on Day 8. We recommend arriving at
                  Faro airport by early afternoon on Day 1 and booking departure flights for mid-morning or later on Day
                  8.
                </p>
              </div>
              <div className="bg-brand-orange/10 border-l-4 border-brand-orange rounded-r-lg p-6">
                <p>
                  <strong>Note:</strong> International flights are not included in the retreat price. Georgia will
                  provide detailed travel information including recommended flight times and group transfer schedules
                  after booking.
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
                <li>Comfortable clothing for yoga practice (layers recommended)</li>
                <li>Casual clothes for leisure time</li>
                <li>Swimwear and beach towel</li>
                <li>Sun protection (hat, sunglasses, sunscreen)</li>
                <li>Light jacket or sweater for cooler evenings</li>
                <li>Walking shoes or sandals</li>
                <li>Any personal toiletries or medications</li>
                <li>Reusable water bottle</li>
                <li>Notebook and pen if you like to take notes</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> All yoga props (blocks, belts, bolsters, blankets) are provided at Casa Cales.
              </p>
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
                  "I first met Georgia on a yoga retreat in Portugal and was blown away by her depth of knowledge. Every
                  session left me both energised and peaceful. I return every year."
                </blockquote>
                <cite className="font-body text-sm text-brand-black/70">— João, Portugal</cite>
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
                  "Georgia's yoga retreats in Portugal are unforgettable. The yoga is challenging yet deeply
                  restorative, and the whole experience is beautifully organised. I can't recommend them enough."
                </blockquote>
                <cite className="font-body text-sm text-brand-black/70">— Emma, UK</cite>
              </div>
            </div>
          </section>

          {/* Additional Image Gallery */}
          <section className="mt-16">
            <h2 className="font-heading text-3xl text-brand-black mb-8 text-center">Gallery</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <img
                src="/portugal-terrace-view.jpg"
                alt="Peaceful terrace with countryside views at Casa Cales"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/portugal-bedroom-interior.jpg"
                alt="Serene bedroom with canopy bed and terrace doors at Casa Cales"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
