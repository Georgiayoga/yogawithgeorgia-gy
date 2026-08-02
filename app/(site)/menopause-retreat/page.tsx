import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export const metadata = {
  title: "Menopause - Iyengar Yoga Retreat, Algarve 2026 | Yoga with Georgia",
  description:
    "Join Georgia Marnham for a Menopause Iyengar Yoga Retreat in Silves, Algarve, Portugal, 4–8 November 2026. A dedicated sanctuary blending tailored Iyengar Yoga with expert medical insight into menopausal health.",
  keywords:
    "menopause yoga retreat, Iyengar yoga Algarve, Silves retreat, women's health retreat, Georgia Marnham, menopause wellbeing, Portugal yoga retreat 2026",
}

export default function MenopauseRetreatPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-4">
              Menopause — Iyengar Yoga Retreat
            </h1>
            <p className="font-body text-xl text-brand-black/80 mb-2">Silves, Algarve, Portugal</p>
            <p className="font-body text-lg text-brand-orange font-medium">November 4–8, 2026</p>
          </header>

          <div className="mb-12">
            <img
              src="/menopause-yoga-retreat-silves-algarve.png"
              alt="Menopause Iyengar Yoga Retreat venue in Silves, Algarve, Portugal"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Our Menopause Iyengar Yoga Retreat offers a dedicated sanctuary to bring alignment to your body,
                cultivate mindfulness, and find deep relaxation through tailored physical practice and expert guidance.
              </p>
              <p>
                Designed as a peaceful pause from daily life, this retreat is dedicated entirely to your physical and
                mental well-being. It offers a balanced blend of structured Iyengar Yoga and expert medical insight into
                menopausal health. Through precise physical alignment and supportive guidance, you will discover
                practical ways to nurture your body and sustain your vitality during this transition.
              </p>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
              <a href="https://medinmenohealthcare.com/retreats" target="_blank" rel="noopener noreferrer">
                Book & Full Details
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
              <h2 className="font-heading text-2xl text-brand-black mb-4">The Experience</h2>
              <ul className="space-y-3 font-body text-brand-black/80">
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Tailored Iyengar Yoga sessions for the changing needs of the female body</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Expert lectures and medical insight into menopausal health</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Time for mindfulness, deep relaxation, and restorative practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Optional guided hiking and trail running through scenic Algarve trails</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-warm-gray/20 rounded-lg p-6">
              <h2 className="font-heading text-2xl text-brand-black mb-4">Retreat Details</h2>
              <div className="space-y-3 font-body text-brand-black/80">
                <div>
                  <p className="font-medium text-brand-black">Dates</p>
                  <p className="text-sm">4–8 November 2026</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Location</p>
                  <p className="text-sm">Silves, Algarve, Portugal</p>
                </div>
                <div>
                  <p className="font-medium text-brand-black">Yoga</p>
                  <p className="text-sm">Led by Georgia Marnham, Level 3 certified Iyengar Yoga teacher</p>
                </div>
                <div>
                  <p className="text-sm italic">
                    Booking and full pricing are handled by Medin Menohealthcare — see the booking link above.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hosts */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-brand-black mb-6">Meet Your Hosts</h2>
            <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
              <p>
                Your yoga sessions are guided by Georgia Marnham, a Level 3 certified Iyengar Yoga teacher with over 25
                years of experience teaching internationally and a direct training lineage from Pune, India. Known for
                her warm and precise instruction, she adapts yoga to the individual needs of women at all stages of
                life, ensuring every session provides the ideal space to reconnect with your strength and comfort.
              </p>
              <p>
                Dr Carmen Klink Bartzsch, a specialist physician (Gynaecologist) focusing on female hormones and
                menopause, leads the medical aspect of the retreat, offering expert lectures and professional insight to
                help women navigate their body&apos;s changing needs with confidence. Dr Felix Bartzsch is your primary
                contact for logistics, ensuring the comfort of every guest and leading optional guided hikes and trail
                runs through the region.
              </p>
            </div>
          </section>

          {/* Practical Information */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl text-brand-black mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="booking">
                <AccordionTrigger className="font-body text-lg text-brand-black">
                  How do I book a place?
                </AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <p>
                    Booking, pricing, and accommodation categories are managed by Medin Menohealthcare. You can find full
                    details and reserve your place on the{" "}
                    <a
                      href="https://medinmenohealthcare.com/retreats"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-orange underline"
                    >
                      Medin Menohealthcare retreats page
                    </a>
                    .
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="who-for">
                <AccordionTrigger className="font-body text-lg text-brand-black">
                  Who is this retreat for?
                </AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <p>
                    This retreat is designed for women navigating menopause who wish to nurture their body and wellbeing
                    through Iyengar Yoga and expert medical guidance. Sessions are adapted to individual needs, so all
                    levels of yoga experience are welcome.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="typical-day">
                <AccordionTrigger className="font-body text-lg text-brand-black">
                  What does a typical day look like?
                </AccordionTrigger>
                <AccordionContent className="font-body text-brand-black/80">
                  <p>
                    Each day blends structured Iyengar Yoga practice with time for relaxation, expert talks on
                    menopausal health, and the opportunity to explore the scenic Algarve trails. There is space to rest,
                    reflect, and reconnect throughout the retreat.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* More about Georgia */}
          <section className="mb-12">
            <div className="bg-brand-warm-gray/10 rounded-lg p-6 font-body text-brand-black/90 leading-relaxed space-y-3">
              <p>
                Georgia is a Level 3 qualified Iyengar Yoga teacher. You can learn more about her teaching on the{" "}
                <Link href="/about" className="text-brand-orange underline">
                  about page
                </Link>{" "}
                and read student recommendations on the{" "}
                <Link href="/testimonials" className="text-brand-orange underline">
                  testimonials page
                </Link>
                .
              </p>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
              <a href="https://medinmenohealthcare.com/retreats" target="_blank" rel="noopener noreferrer">
                Book & Full Details
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
