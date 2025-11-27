import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export const metadata = {
  title: "Lake District Retreat 2026 | Yoga with Georgia",
  description:
    "Join Georgia for an Iyengar Yoga retreat at Yewfield in the Lake District, July 2026. Experience daily yoga practice in a beautiful Victorian estate with stunning mountain views.",
  keywords:
    "Lake District yoga retreat, Yewfield retreat, Iyengar yoga UK, yoga retreat 2026, Georgia Marnham retreat, Ambleside retreat",
}

export default function UKRetreatPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4">Lake District Retreat 2026</h1>
            <p className="font-body text-xl text-brand-black/80 mb-2">Yewfield, Ambleside, UK </p>
            <p className="font-body text-lg text-brand-orange font-medium">July 16–20, 2026</p>
          </header>

          <div className="mb-12">
            <img
              src="/yewfield-lake-district.jpg"
              alt="Aerial view of Yewfield retreat venue nestled in the Lake District mountains and forests"
              className="w-full h-[400px] object-cover object-[center_95%] rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Join Georgia for a transformative Iyengar Yoga retreat at Yewfield, a beautiful Victorian country house
                nestled in 80 acres of private grounds in the heart of the Lake District. This peaceful retreat combines
                daily yoga practice with the natural beauty and tranquillity of England's most celebrated national park.
              </p>
              <p>
                In the heart of the English Lake District, Yewfield is ideally situated for walking and enjoying this
                special region of natural beauty. Set in beautiful gardens with stunning views of the surrounding fells,
                Yewfield offers stylish rooms, peaceful ambience, and the perfect environment for deepening your
                practice.
              </p>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
              <a href="https://forms.gle/DH3Z5SriZ9MvJQFo7" target="_blank" rel="noopener noreferrer">
                Book Your Place
              </a>
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
                  <span>4 nights accommodation in shared or private rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>All meals featuring delicious vegetarian cuisine with locally sourced produce</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Use of dedicated yoga studio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Use of lounges, gardens and all common areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Access to 80 acres of private grounds and woodland walks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Optional excursions to local towns and Lake District attractions</span>
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
                  <p className="font-medium text-brand-black">Breakfast 10:30 – 11:30</p>
                  <p className="text-sm">
                    Continental breakfast with cooked options featuring local and organic ingredients
                  </p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Afternoon - free time</p>
                  <p className="text-sm">Rest, walks, visits to local villages, exploring the Lake District</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Tea and snacks</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Yoga practice 17:30 – 19:00</p>
                  <p className="text-sm">Evening practice</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Dinner 19:30 onwards</p>
                  <p className="text-sm">Evening meal and relaxation</p>
                </div>
              </div>
            </div>
          </section>

          {/* About Yewfield */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">About Yewfield</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Yewfield is a beautifully restored Victorian country house set in 80 acres of private grounds near
                Ambleside in the Lake District. The property combines Victorian elegance with modern comfort, creating
                an ideal space for yoga practice and relaxation.
              </p>
              <p>
                The estate features a dedicated yoga studio with natural light and stunning views, comfortable
                accommodation in both shared and private rooms, extensive gardens perfect for quiet reflection or
                leisurely walks, and direct access to woodland trails and mountain paths.
              </p>
              <p>
                Situated in the heart of the Lake District National Park, Yewfield offers easy access to some of
                England's most beautiful landscapes—including Tarn Hows, the Langdale Pikes, and Lake Windermere—while
                maintaining a peaceful, secluded atmosphere perfect for focused yoga practice.
              </p>
              <p>
                Meals are prepared using fresh, locally sourced ingredients, with a focus on healthy vegetarian cuisine
                that showcases the best of British produce. The Lake District's wonderful climate in July—long summer
                days and mild temperatures—makes this an ideal time to visit.
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
                  80 acres of private grounds with woodland walks from the doorstep. Whether it's a gentle stroll or a
                  hike to the high peaks, Yewfield offers many opportunities for exploring this unique national park.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🌱 Low-Impact Journey</h3>
                <p>
                  For students travelling from Britain, this is a rare chance to join a retreat without flying, making
                  your journey gentler on both you and the environment.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🌞 Summer in the Lakes</h3>
                <p>
                  July in the Lake District offers ideal weather—long summer days, mild temperatures averaging 18-22°C,
                  and the landscape at its most vibrant, perfect for both yoga practice and outdoor exploration.
                </p>
              </div>
              <div className="bg-brand-warm-gray/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-3">🏞️ Natural Beauty</h3>
                <p>
                  Explore the stunning Lake District with its dramatic fells, tranquil tarns, and picturesque villages.
                  Tarn Hows, one of the Lake District's most beautiful spots, is just a short walk from Yewfield.
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
                src="/yewfield-lounge.jpg"
                alt="Elegant Victorian lounge at Yewfield with grand piano, crystal chandelier, and mountain views"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/yewfield-bedroom.jpg"
                alt="Comfortable guest room at Yewfield with blue striped wallpaper and garden views"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/yewfield-yoga-studio.jpg"
                alt="Spacious yoga studio at Yewfield with wooden floors, vaulted ceiling, and panoramic windows"
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
                        <li>• Shared room: £800 per person</li>
                        <li>• Private room: £980 per person</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">What's Included:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Daily Iyengar Yoga classes (morning and afternoon sessions)</li>
                        <li>• 4 nights accommodation</li>
                        <li>• All meals featuring fresh vegetarian cuisine</li>
                        <li>• Tea, coffee, and snacks available throughout the day</li>
                        <li>• Access to gardens and woodland walks</li>
                        <li>• Use of yoga props and equipment</li>
                      </ul>
                    </div>
                    <p className="text-sm italic text-brand-black/60 mt-4">
                      £200 deposit required to secure your booking
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="not-included">
                <AccordionTrigger className="font-body text-lg text-brand-black">What's not included</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <ul className="space-y-2 ml-4">
                    <li>• Travel to Yewfield</li>
                    <li>• Travel insurance (recommended)</li>
                    <li>• Personal expenses and souvenirs</li>
                    <li>• Optional excursions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sharing">
                <AccordionTrigger className="font-body text-lg text-brand-black">Can I share a room?</AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <p>
                    Yes! Shared rooms are available at £800 per person. If you're booking with a friend or partner,
                    please let us know when making your reservation. Private rooms are also available for £980 if you
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
                      <strong>Important:</strong> A non-refundable deposit of £200 is required to secure your booking.
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
                    <li>• Waterproof jacket for walking</li>
                    <li>• Walking boots or sturdy shoes</li>
                    <li>• Light jacket or sweater for cooler evenings</li>
                    <li>• Any personal toiletries or medications</li>
                    <li>• Reusable water bottle</li>
                    <li>• Notebook and pen if you like to take notes</li>
                  </ul>
                  <p className="text-sm italic text-brand-black/60 mt-4">
                    Note: All yoga props (blocks, belts, bolsters, blankets) are provided at Yewfield.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
              <a href="https://forms.gle/DH3Z5SriZ9MvJQFo7" target="_blank" rel="noopener noreferrer">
                Book Your Place
              </a>
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
