"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        "Exceptional teaching. Georgia leads with deep knowledge and care. Attention to the subtleties of each posture creates an advanced experience.",
      author: "Tim",
      location: "Portugal",
      rating: 5,
    },
    {
      quote:
        "Before joining her classes I had never been to a yoga class before – she was incredibly welcoming, and took time to understand any ailments or injuries I had.",
      author: "Richard",
      location: "UK",
      rating: 5,
    },
    {
      quote:
        "Georgia is a really wonderful Iyengar yoga teacher – not only does she have exceptional knowledge about yoga and anatomy but her kindness in imparting and sharing that knowledge is something quite special.",
      author: "Suzi",
      location: "France",
      rating: 5,
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`text-lg ${i < rating ? "text-brand-gold" : "text-brand-warm-gray"}`}>
          ★
        </span>
      ))}
    </div>
  )

  return (
    <div>
      {/* Full-Bleed Hero Image with Text Overlay */}
      <section className="relative w-full overflow-hidden">
        <div
          className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] max-h-[520px] sm:max-h-[720px] lg:max-h-[900px] relative"
          style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw" }}
        >
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/georgia-coastal-path.jpg"
              alt="Georgia Marnham teaching Iyengar Yoga in Portugal"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 35%" }}
              loading="eager"
              width={1200}
              height={800}
            />
            <div className="absolute inset-0 w-full h-full bg-black/10" />
          </div>

          {/* Text Overlay - Top Area */}
          <div className="absolute top-0 left-0 right-0 pt-16 pb-8 px-4 z-10">
            <div className="container mx-auto text-center text-black">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-4">Iyengar Yoga with Georgia</h1>
              <p className="font-body text-xl md:text-2xl mb-8">Precise · Supportive · Transformative</p>
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-gold text-white text-lg px-8 py-3 transition-colors"
              >
                <Link href="https://momence.com/u/georgia-marnham-TXk2rZ" target="_blank" rel="noopener noreferrer">
                  Book a Class
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Removed top padding */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-4 font-body text-lg text-brand-black/90 leading-relaxed">
            <p>
              Georgia Marnham is a certified Level 3 Iyengar Yoga teacher with over 25 years of international teaching
              experience and more than 35 years of dedicated practice.
            </p>
            <p>
              Based in Portugal and teaching worldwide, she is known for her clear, supportive teaching style that makes
              Iyengar Yoga accessible to practitioners of all levels and abilities.
            </p>
            <p>
              {
                "Her classes emphasise alignment with the use of props, and individual attention to help each student safely develop strength, flexibility, and awareness."
              }
            </p>
          </div>
          <div className="mt-8">
            <Button
              asChild
              variant="outline"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors bg-transparent"
            >
              <Link href="/about">Read More About Georgia</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3 Pathways Section */}
      <section id="pathways" className="py-16 bg-brand-warm-gray/20">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-black mb-4">Ways to Learn with Georgia</h2>
            <p className="font-body text-lg text-brand-black/80 max-w-2xl mx-auto">
              Discover the options that suit you best
            </p>
          </header>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-brand-warm-gray">
              <CardHeader>
                <img
                  src="/georgia-studio-class-in-session.jpg"
                  alt="Georgia teaching an Iyengar Yoga class in her rustic wooden studio in Colares, Portugal, with students practising restorative poses on green and blue mats, showing the authentic studio atmosphere with exposed beams and traditional rope props"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="font-heading text-xl text-brand-black">Studio Classes in Portugal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-brand-black/80">
                  Regular Iyengar Yoga classes in Georgia&#39;s studio in Colares, near Sintra. Classes limited to 12
                  students so individual attention is provided for all. Private classes are also popular.
                </p>
                <p className="font-body text-sm text-brand-black/70">
                  Perfect for beginners and experienced practitioners seeking hands-on instruction and community
                  connection.
                </p>
                <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                  <Link href="https://momence.com/u/georgia-marnham-TXk2rZ" target="_blank" rel="noopener noreferrer">
                    Book a Class
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-brand-warm-gray">
              <CardHeader>
                <img
                  src="/georgia-online-teaching-setup.jpg"
                  alt="Georgia teaching an online Iyengar Yoga class from her studio in Portugal, sitting in meditation pose on a green mat while students join via Zoom on a tablet screen, showing the authentic online teaching setup"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="font-heading text-xl text-brand-black">Convenient Online Classes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-brand-black/80">
                  Practise from the comfort of home, or wherever you are, with live online classes that bring Iyengar
                  Yoga to you. Some experience and basic equipment is helpful. Private classes available.
                </p>
                <p className="font-body text-sm text-brand-black/70">
                  Join from anywhere with personalised instruction, real-time feedback, and connection to a global yoga
                  community.
                </p>
                <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                  <Link href="https://momence.com/u/georgia-marnham-TXk2rZ" target="_blank" rel="noopener noreferrer">
                    Book a Class
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-brand-warm-gray">
              <CardHeader>
                <img
                  src="/retreat-workshop-studio-practice.jpg"
                  alt="Students practising Iyengar Yoga in a beautiful retreat studio with floor-to-ceiling windows overlooking rolling countryside, using traditional props like chairs and blocks in a spacious, light-filled room with exposed wooden beams"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="font-heading text-xl text-brand-black">Retreats & Workshops</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-brand-black/80">
                  Immersive Iyengar Yoga retreats and workshops in Portugal, Greece, Sri Lanka, and other inspiring
                  locations. Deepen your practice through intensive study and community.
                </p>
                <p className="font-body text-sm text-brand-black/70">
                  Transform your understanding of yoga through daily practice, rest, and reflection in beautiful
                  destinations.
                </p>
                <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                  <Link href="/retreats">Explore Retreats</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Iyengar Yoga Special */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-black mb-4">
              What Makes Iyengar Yoga Special?
            </h2>
            <p className="font-body text-lg text-brand-black/80 max-w-2xl mx-auto">
              Discover the unique approach that makes Iyengar Yoga accessible, safe, and transformative for all bodies
            </p>
          </header>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Precision & Alignment</h3>
                <p className="font-body text-brand-black/80">
                  Focus on correct alignment and precise technique ensures safe, effective practice that builds strength
                  and awareness for all body types and abilities.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Intelligent Use of Props</h3>
                <p className="font-body text-brand-black/80">
                  Blocks, belts, bolsters, and other props make poses accessible while supporting proper alignment and
                  gradual development of strength and flexibility.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Individual Attention</h3>
                <p className="font-body text-brand-black/80">
                  Personal guidance and modifications ensure each student practices safely at their own level, with
                  adjustments tailored to individual needs and abilities.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-brand-black mb-3">Therapeutic Benefits</h3>
                <p className="font-body text-brand-black/80">
                  Systematic approach helps address physical limitations, promotes healing, and supports overall
                  wellbeing through mindful, progressive practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Highlight */}
      <section className="py-16 bg-brand-warm-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 items-center">
            <div>
              <img
                src="/georgia-coastal-path.jpg"
                alt="Georgia Marnham in the beautiful natural landscape of Portugal where she leads transformative Iyengar Yoga retreats and workshops"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-heading text-3xl text-brand-black">Upcoming International Retreats</h2>
              <div className="space-y-4 font-body text-lg text-brand-black/80">
                <p>
                  Join Georgia for transformative Iyengar Yoga retreats in stunning locations across Europe and beyond.
                </p>
                <p>
                  Experience daily practice sessions, guidelines on breathing techniques and time for rest and
                  reflection in inspiring natural settings.
                </p>
                <p>
                  Connect with like-minded practitioners while deepening your understanding of Iyengar Yoga in a
                  supportive, nurturing environment.
                </p>
              </div>
              <Button asChild className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                <Link href="/retreats">View All Retreats</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Preview */}
      <section className="py-16 bg-brand-warm-gray/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-brand-black mb-4">What Students Say</h2>
              <p className="font-body text-lg text-brand-black/80 italic">
                Trusted by yoga students across Europe and beyond.
              </p>
            </header>

            <div className="relative">
              {/* Testimonial Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-2xl border border-brand-warm-gray">
                <div className="text-center">
                  <StarRating rating={testimonials[currentTestimonial].rating} />
                  <blockquote className="font-body text-lg text-brand-black/90 leading-relaxed mt-6 mb-6">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <cite className="font-body text-brand-black font-medium not-italic">
                    — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].location}
                  </cite>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-brand-warm-gray/20 border border-brand-warm-gray rounded-full p-3 shadow-md transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-brand-black" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-brand-warm-gray/20 border border-brand-warm-gray rounded-full p-3 shadow-md transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-brand-black" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-brand-orange" : "bg-brand-warm-gray"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Read More Button */}
            <div className="text-center mt-8">
              <Button
                asChild
                variant="outline"
                className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors bg-transparent"
              >
                <Link href="/testimonials">Read More Reviews</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Georgia's Teaching Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-black mb-6">Georgia's Teaching Approach</h2>
          <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
            <p>
              With over 25 years of teaching experience across six countries, Georgia brings a wealth of knowledge and
              cultural understanding to her classes.
            </p>
            <p>
              She has studied directly with the Iyengar family at RIMYI in Pune, India, ensuring authentic transmission
              of this powerful yoga method.
            </p>
            <p>
              Georgia's classes are known for their clarity, warmth, and attention to individual needs, creating an
              environment where all students can learn and grow safely.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
              <Link href="/about">Learn More About Georgia</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-brand-warm-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-brand-black mb-4">FAQs</h2>
              <p className="font-body text-lg text-brand-black/80">
                Common questions about Iyengar Yoga and Georgia's classes
              </p>
            </header>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="what-is-iyengar" className="border border-brand-warm-gray rounded-lg px-6">
                <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                  What is Iyengar Yoga?
                </AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                  Iyengar Yoga is a precise method of yoga that uses props to support alignment, improve flexibility,
                  and build strength.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="who-is-georgia" className="border border-brand-warm-gray rounded-lg px-6">
                <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                  Who is Georgia Marnham?
                </AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                  Georgia Marnham is a certified Level 3 Iyengar Yoga teacher with over 25 years of international
                  teaching experience and more than 35 years of practice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="need-experience" className="border border-brand-warm-gray rounded-lg px-6">
                <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                  Do I need experience to join?
                </AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                  No, beginners are welcome. Georgia teaches both beginners and experienced students with individual
                  feedback and adjustments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="online-worldwide" className="border border-brand-warm-gray rounded-lg px-6">
                <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                  Can I join online classes if I don't live in Portugal?
                </AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                  Yes, online classes are available worldwide via Zoom.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-to-book" className="border border-brand-warm-gray rounded-lg px-6">
                <AccordionTrigger className="font-body text-lg text-brand-black hover:text-brand-orange transition-colors">
                  How do I book a class?
                </AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80 leading-relaxed">
                  You can book studio or online classes directly through Georgia's{" "}
                  <Link
                    href="https://momence.com/u/georgia-marnham-TXk2rZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-orange hover:text-brand-gold underline underline-offset-4 transition-colors"
                  >
                    Momence profile
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Mailing List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-3xl text-brand-black mb-4">Stay Connected</h2>
          <div className="space-y-4 font-body text-lg text-brand-black/80 mb-8">
            <p>
              Join Georgia's mailing list for updates on studio classes in Portugal, live online sessions, and
              international retreats.
            </p>
            <p className="text-base">
              Choose from Studio Classes, Online Classes, or Retreats & Workshops mailing lists to receive only the
              updates that interest you most.
            </p>
          </div>
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
            <Link href="/mailing-list-signup">Sign Up to Mailing List</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
