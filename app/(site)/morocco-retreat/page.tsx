import Link from "next/link"
import { Button } from "@/components/ui/button"

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
                  <span>7 nights accommodation in shared or private rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>All meals featuring delicious Moroccan cuisine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Use of yoga props and equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Excursions and cultural experiences</span>
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
                  <p className="font-medium text-brand-black">Morning (7:30 - 9:30)</p>
                  <p className="text-sm">Yoga practice</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Morning (9:30 - 10:30)</p>
                  <p className="text-sm">Breakfast</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Mid-day</p>
                  <p className="text-sm">Free time for rest, exploration, or spa treatments</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Afternoon (4:00 - 6:00)</p>
                  <p className="text-sm">Yoga practice</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Evening</p>
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
                  <p className="font-body text-3xl text-brand-orange font-bold mb-2">€1,200</p>
                  <p className="font-body text-sm text-brand-black/70">per person</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-heading text-xl text-brand-black mb-2">Private Room</h3>
                  <p className="font-body text-3xl text-brand-orange font-bold mb-2">€1,450</p>
                  <p className="font-body text-sm text-brand-black/70">per person</p>
                </div>
              </div>
              <p className="font-body text-sm text-brand-black/70 mt-6">
                A deposit of €400 is required to secure your place
              </p>
            </div>
          </section>

          {/* About the Venue */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">About Bab Zouina</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Bab Zouina is a beautifully organised retreat center nestled in the foothills of the Atlas Mountains,
                just 45 minutes from Marrakech. The center combines traditional Moroccan architecture with modern
                comfort, creating an ideal environment for yoga practice and relaxation.
              </p>
              <p>
                The property features landscaped gardens with fragrant orange and olive trees, a spacious yoga shala
                with mountain views, and comfortable accommodation designed in traditional Moroccan style. The center's
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
                src="/morocco-atlas-mountains-retreat.jpg"
                alt="Morocco retreat venue exterior"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/morocco-atlas-mountains-retreat.jpg"
                alt="Morocco retreat yoga space"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
