import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Package, Users, Calendar, HelpCircle, ChevronRight } from "lucide-react"

export const metadata = {
  title: "Retreats & Workshops | Yoga with Georgia",
  description:
    "Georgia Marnham is a Level 3 Iyengar Yoga teacher with 25 years of international teaching experience, known for her clear, supportive style and personalised approach.",
}

export default function RetreatsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where are the retreats held?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retreats are hosted in Portugal and occasionally in other international locations. Each retreat page includes venue details.",
        },
      },
      {
        "@type": "Question",
        name: "What do retreats include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retreats typically include daily yoga classes, accommodation, meals, and opportunities for rest and reflection.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to be an experienced yogi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, retreats are suitable for all levels, from beginners to teachers in training.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a retreat or workshop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retreats and workshops are booked directly through Georgia, with details available on the Retreats and Workshops page.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-6">Retreats & Workshops</h1>
              <p className="font-body text-lg text-brand-black/80 max-w-2xl mx-auto">
                Georgia leads retreats and workshops in Portugal, the UK, and international locations such as Paros and
                Sri Lanka. These immersive experiences allow students to deepen their Iyengar practice while enjoying
                rest, reflection, and community.
              </p>
            </header>

            <section className="mb-16">
              <h2 className="font-heading text-3xl text-brand-black text-center mb-8">Retreats in 2026 &amp; 2027 </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Morocco Retreat Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/morocco-atlas-mountains-retreat.jpg"
                    alt="Morocco Retreat venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Morocco Retreat</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Atlas Mountains, Morocco</p>
                      <p>February 15—21, 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      Bab Zouina&#39;s Moroccan architecture and landscaped gardens blend aesthetic beauty with rustic
                      simplicity. Including scenic views, local cuisine, and a spacious and well-equipped yoga studio,
                      it offers a peaceful and tranquil retreat.
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/morocco-retreat">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Sri Lanka Retreat Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/sri-lanka-lush-landscape.jpg"
                    alt="Sri Lanka Retreat venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Sri Lanka Retreat</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Sri Lanka</p>
                      <p>March 15—29, 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      Considered one of the world&#39;s best yoga centres, Ulpotha, is an Ayurvedic retreat centre,
                      based on a traditional Sri Lankan farming village which is run by the local Buddhist community.
                      &quot;It is Heaven on Earth&quot;.
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/sri-lanka-retreat">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Portugal Retreat Card - April */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/portugal-algarve-coast.jpg"
                    alt="Portugal Retreat venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Portugal Retreat</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Loulé, Algarve</p>
                      <p>April 26—May 2, 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      {
                        "Enjoy Spring in Portugal and come to the lovely Casa Cales, nestled in the hills outside Loulé and just 15 minutes from the coastline of fabulous beaches and sandy coves. A family home converted to peaceful retreat centre surrounded by nature."
                      }
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/portugal-retreat">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Greece Retreat Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/greece-evia-bay.png"
                    alt="Greece Retreat - Evia Bay with turquoise waters"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Greece Retreat</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Evia Bay, Northern Evia </p>
                      <p>June 21—27, 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      {
                        "Experience early-summer tranquillity at Evia Bay — before the tourist rush. Practise overlooking the Aegean, swim in crystal waters, and unwind among olive groves and healing hot springs in a serene, sun-warmed coastal haven."
                      }
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/greece-retreat">Details to come</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* UK Retreat Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/uk-lake-district-yewfield.jpg"
                    alt="UK Retreat venue in Lake District"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">UK Retreat</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Ambleside, Lake District</p>
                      <p>July 16—20, 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      {
                        "Experience the beauty of the Lake District with daily yoga classes and peaceful walks or invigorating hikes through valleys, lakes, and fells — a perfect summer retreat in one of England’s most breathtaking landscapes."
                      }
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/uk-retreat">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Portugal September Retreat Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/praia-do-quinta-do-lago-algarve.jpg"
                    alt="Portugal September Retreat venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Portugal Retreat</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Loulé, Algarve</p>
                      <p>September 13—19, 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      {
                        "Join us once again at the much-loved Casa Cales near the market town of Loulé, surrounded by the beauty of the Algarve coast, for a rejuvenating week of yoga and relaxation. The perfect end-of-summer getaway."
                      }
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/portugal-september-retreat">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Updated Sri Lanka Retreat Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/sri-lanka-mountain-lake.jpeg"
                    alt="Sri Lanka Retreat - mountain and lake landscape"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Sri Lanka Retreat</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Uloptha, Sri Lanka</p>
                      <p>January 15—29, 2027</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      {
                        "Ulpotha offers an immersive retreat into nature and tradition. Enjoy authentic Sri Lankan hospitality, nourishing Ayurvedic meals, and deeply restorative yoga in a setting that feels timeless and sacred."
                      }
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/sri-lanka-retreat-2027">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Azores, Portugal Retreat Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/azores-volcanic-crater.png"
                    alt="Azores, Portugal Retreat - aerial view of volcanic crater with lush green fields"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Azores, Portugal</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Xhale Resort, Teceira Island</p>
                      <p>September 12—18, 2027</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      {
                        "Surrounded by ocean views and volcanic landscapes, practise yoga amidst nature's elements. Savour locally sourced plant-based meals, explore coastal trails and natural pools, and unwind in this peaceful eco-retreat."
                      }
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/azores-portugal-retreat">Details to come</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-heading text-3xl text-brand-black text-center mb-8">Upcoming Workshops</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Scotland Workshop Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/comrie-scotland-village.jpg"
                    alt="Weekend Workshop - Scotland venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Weekend Workshop - Scotland</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Comrie, nr Edinburgh</p>
                      <p>November, 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      A weekend of in-depth learning sessions focusing on a variety of asanas for students with a
                      regular yoga practice.
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/contact">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Portugal Workshop Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/sidmouth-devon-yoga-studio.png"
                    alt="Weekend Workshop - Portugal venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Weekend Workshop - Portugal</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Loulé, Algarve</p>
                      <p>November 29—30, 2025</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      Join us for a weekend of learning and practice in Casa Cales's fully equipped studio, offering
                      stunning views.
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/contact">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* England Workshop Card */}
                <Card className="border-brand-warm-gray overflow-hidden">
                  <img
                    src="/sidmouth-devon-coastal-view.png"
                    alt="Weekend Workshop - England venue"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-brand-black">Weekend Workshop - England</CardTitle>
                    <div className="font-body text-sm text-brand-black/70">
                      <p>Sidmouth, Devon</p>
                      <p>October 2026</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-brand-black/80 text-sm">
                      Immerse yourself in a weekend of yoga, featuring a series of classes that build into a
                      full-weekend course.
                    </p>
                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                      <Link href="/contact">Dates to be confirmed</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12 bg-gradient-to-br from-brand-warm-gray/20 via-brand-orange/5 to-brand-gold/10 rounded-3xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <div className="inline-block bg-white rounded-2xl p-4 shadow-lg mb-6">
                    <HelpCircle className="h-10 w-10 text-brand-orange" strokeWidth={2} />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl text-brand-black mb-4">
                    Questions About Our Retreats?
                  </h2>
                  <p className="text-brand-black/70 text-lg max-w-2xl mx-auto">
                    Find answers to the most common questions about joining a yoga retreat with Georgia
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* FAQ Card 1 - MapPin */}
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-brand-warm-gray/20 hover:border-brand-orange/30 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-6 w-6 text-brand-orange" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-brand-black mb-2 group-hover:text-brand-orange transition-colors">
                          Where are the retreats held?
                        </h3>
                        <p className="text-brand-black/70 leading-relaxed text-sm">
                          Retreats take place in stunning locations including Portugal, Sri Lanka, Greece and Morocco.
                          Each venue is carefully selected for its natural beauty, peaceful atmosphere, and excellent
                          facilities.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Card 2 - Package */}
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-brand-warm-gray/20 hover:border-brand-orange/30 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Package className="h-6 w-6 text-brand-orange" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-brand-black mb-2 group-hover:text-brand-orange transition-colors">
                          What's included?
                        </h3>
                        <p className="text-brand-black/70 leading-relaxed text-sm">
                          All retreats include daily yoga classes (morning and afternoon), accommodation, vegetarian
                          meals, and free time for rest and exploration. Some retreats also feature excursions and
                          cultural activities.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Card 3 - Users */}
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-brand-warm-gray/20 hover:border-brand-orange/30 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="h-6 w-6 text-brand-orange" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-brand-black mb-2 group-hover:text-brand-orange transition-colors">
                          Do I need experience?
                        </h3>
                        <p className="text-brand-black/70 leading-relaxed text-sm">
                          No prior experience necessary! Our retreats welcome everyone from complete beginners to
                          experienced practitioners. Georgia provides clear guidance and offers modifications to suit
                          all levels.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Card 4 - Calendar */}
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-brand-warm-gray/20 hover:border-brand-orange/30 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="h-6 w-6 text-brand-orange" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-brand-black mb-2 group-hover:text-brand-orange transition-colors">
                          How do I book?
                        </h3>
                        <p className="text-brand-black/70 leading-relaxed text-sm mb-4">
                          Booking is simple! Click &quot;View Details&quot; on any retreat above, or contact Georgia
                          directly to discuss which retreat would be best for you.
                        </p>
                        <Button
                          asChild
                          className="bg-brand-orange hover:bg-brand-gold text-white transition-colors text-sm px-4 py-2 h-auto"
                        >
                          <Link href="/contact" className="inline-flex items-center gap-2">
                            Get in Touch
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info Banner */}
                <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-brand-orange/20">
                  <p className="text-center text-brand-black/80 leading-relaxed">
                    <span className="font-semibold text-brand-black">Still have questions?</span> Georgia is happy to
                    discuss any aspect of the retreats with you. Each retreat page also includes detailed information
                    about the venue, schedule, and pricing.
                  </p>
                </div>
              </div>
            </section>

            <div className="text-center">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                <Link href="/contact">Reserve Your Place</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
