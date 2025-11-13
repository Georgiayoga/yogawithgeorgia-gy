import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Lake District Retreat 2026 | Yoga with Georgia",
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
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4">Lake District Retreat 2026</h1>
            <p className="font-body text-xl text-brand-black mb-2">Yewfield, Ambleside, UK </p>
            <p className="font-body text-lg text-brand-orange font-medium">July 16–20, 2026</p>
          </header>

          {/* Main Image */}
          <div className="mb-12">
            <img
              src="/yewfield-lake-district.jpg"
              alt="Yewfield retreat venue in Ambleside, Lake District, surrounded by beautiful gardens"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg object-[center_15%]"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                {
                  "In the heart of the English Lake District, Yewfield is ideally situated for walking and enjoying this special region of natural beauty. Set in beautiful gardens, Yewfield offers stylish rooms, stunning views and peaceful ambience."
                }
              </p>
              <p>{""}</p>
            </div>
          </section>

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
                  <span>4 nights accommodation in shared or private rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>
                    Two delicious meals a day featuring locally sourced produce for Yewfield&#39;s vegetarian cuisine.
                    Plus a packed lunch.{" "}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Use of garden yoga studio </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Access to gardens and use of internal common areas. </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Optional excursions to local towns and tourist attractions. </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Option to join the group walks and hikes. </span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-warm-gray/20 rounded-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">Daily Schedule</h2>
              <div className="space-y-3 font-body text-brand-black/80">
                <div>
                  <p className="font-medium text-brand-black">Morning yoga practice 8:00 - 10:30</p>
                  <p className="text-sm">Yoga practice</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">{"Breakfast 10:30 - 11:30"}</p>
                  <p className="text-sm">Continental breakfast with cooked options                      </p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Afternoon</p>
                  <p className="text-sm">
                    Free time for relaxation, exploring, socialising, hiking, visiting the local region.{" "}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Evening yoga practice (17:30 - 19:00)</p>
                  <p className="text-sm">Yoga practice</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Dinner 19:30 onwards</p>
                  <p className="text-sm">Post dinner relaxation</p>
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
                  <p className="font-body text-3xl text-brand-orange font-bold mb-2">£800</p>
                  <p className="font-body text-sm text-brand-black/70">per person</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-heading text-xl text-brand-black mb-2">Private Room</h3>
                  <p className="font-body text-3xl text-brand-orange font-bold mb-2">£980</p>
                  <p className="font-body text-sm text-brand-black/70">per person</p>
                </div>
              </div>
              <p className="font-body text-sm text-brand-black/70 mt-6">
                "A deposit of £100 is required to secure your place"
              </p>
            </div>
          </section>

          {/* About Casa Cales */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">About Yewfield</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Situated in 80 acres of private grounds with lovely walks from the doorstep. Whether it&#39;s a gentle
                stroll or a good hike to the high peaks, Yewfield offers many opportunities for exploring this unique
                national park. The gardens provide a peaceful place to relax and enjoy the stunning views,
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
                <h3 className="font-heading text-xl text-brand-black mb-3">🌳 The Estate</h3>
                <p>
                  The Yewfield Estate covers about 80 acres in total, with 2 acres of gardens around the house, 25 acres
                  of grazing land and the rest is woodland. The land is managed organically and sustainably.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🍲 Fresh and flavourful </h3>
                <p>
                  Yewfield's vegetarian cuisine is fresh, seasonal, and locally sourced, prepared with creativity and
                  care. Every meal is nourishing, beautifully presented, and full of flavour.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🌞 Summer!</h3>
                <p>
                  July is the perfect time to experience the Lake District at its most vibrant, with long days, clear
                  air, and endless opportunities to explore and relax outdoors.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🏞️ Tarn Hows</h3>
                <p>
                  Superb walks from the door lead to Tarn Hows and the surrounding fells which is an area renowned for
                  its beauty, and ideal for picnics, boating, and observing wildlife.
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
                  <p className="font-heading text-lg text-brand-black mb-2">8:00 AM - Morning Practice</p>
                  <p>
                    Begin your day with yoga in the beautiful studio. Morning sessions often focus on energising
                    sequences while having the time for questions and discussion as needed.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">10:30 AM - Breakfast</p>
                  <p>
                    Breakfast is a generous vegetarian buffet, with both continental and cooked options made from fresh,
                    local ingredients.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">Free time </p>
                  <p>
                    Enjoy the afternoons to unwind or explore. Options include local walks and village visits or quiet
                    rest at Yewfield. A freshly prepared vegetarian packed lunch is prepared each day, with the option
                    of a light meal served at the house instead.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">5:30 PM - Afternoon Practice</p>
                  <p>
                    The afternoon session typically focuses on slower sequences and restorative practice including
                    pranayama.
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg text-brand-black mb-2">7:30 PM - Dinner &amp; Evening</p>
                  <p>
                    Dinner at Yewfield is a highlight of the day. Enjoy beautifully cooked vegetarian dishes made with
                    care, followed by a delicious homemade dessert.
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
                This retreat welcomes students with at least one year of Iyengar Yoga experience through to seasoned practitioners. 
              </p>
              <p>
                Georgia’s clear and attentive teaching offers individual guidance and space for personal exploration. It’s an opportunity to deepen your practice, refine technique, and share time with a like-minded community, all within the tranquillity of the Lake District. 
              </p>
              <p>
                With a balanced rhythm of dedicated practice and relaxed free time, the retreat nurtures both focused study and quiet restoration.
              </p>
            </div>
          </section>

          {/* Getting There */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">Getting There</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Car or Public Transport    </h3>
                <p>
                  The nearest town is Ambleside is Faro (FAO), which is well-connected to major European cities with frequent direct flights. From Faro airport, Casa Cales is approximately 30 minutes by car. Airport transfers are included in the retreat price.
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          {/* Additional Image Gallery */}
          <section className="mt-16">
            <h2 className="font-heading text-3xl text-brand-black mb-8 text-center">Gallery</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <img
                src="/yewfield-lake-district.jpg"
                alt="Yewfield retreat venue in Ambleside, Lake District, surrounded by beautiful gardens"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/praia-do-quinta-do-lago-algarve.jpg"
                alt="Casa Cales retreat centre and yoga studio"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
