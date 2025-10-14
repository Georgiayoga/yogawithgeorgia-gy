import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata = {
  title: "About Georgia Marnham | Iyengar Yoga Teacher Portugal & International | Yoga with Georgia",
  description:
    "Georgia Marnham is a certified Iyengar Yoga teacher with over 25 years of international teaching experience. Based in Portugal, she offers studio, online, and retreat classes with a clear, supportive teaching style. Listen to Georgia share her journey, insights, and approach to practice in this featured podcast interview.",
  keywords:
    "Georgia Marnham yoga, Iyengar Yoga Portugal, Iyengar Yoga teacher, Iyengar retreats, online Iyengar Yoga, yoga with Georgia, certified Iyengar Yoga instructor, yoga podcast interview",
}

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] items-start">
            <article className="space-y-8">
              <header>
                <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-6">About Georgia</h1>
              </header>

              <div className="space-y-8 font-body text-lg text-brand-black/90 leading-relaxed">
                <p>
                  Georgia Marnham is a certified Level 3 Iyengar Yoga teacher with over 25 years of international
                  teaching experience and more than 35 years of dedicated practice. She first discovered yoga in 1991
                  and quickly recognised its transformative impact, not only on physical wellbeing but also on focus and
                  self-awareness.
                </p>

                <p>
                  Since qualifying as a teacher in 2002, Georgia has taught students across the world – in Australia,
                  England, Sri Lanka, South Africa, Brazil, and Portugal. Her international perspective brings depth and
                  cultural richness to her teaching approach.
                </p>

                <p>
                  Along the way, she has studied with senior Iyengar teachers from many countries and, on several
                  occasions, at the RIMYI institute in Pune, India, with B.K.S. Iyengar, his daughter Geeta, and son
                  Prashant. This direct lineage connection ensures authenticity in her teaching method.
                </p>

                {/* RIMYI Institute Photo */}
                <div className="my-8">
                  <img
                    src="/rimyi-institute-pune.jpg"
                    alt="The courtyard of RIMYI (Ramamani Iyengar Memorial Yoga Institute) in Pune, India, showing the peaceful garden with traditional yoga props, a statue of B.K.S. Iyengar, and the institute building where Georgia studied with the Iyengar family"
                    className="w-full rounded-lg shadow-md object-cover"
                  />
                  <p className="mt-3 text-sm text-brand-black/60 italic text-center font-body">
                    RIMYI (Ramamani Iyengar Memorial Yoga Institute) in Pune, India
                  </p>
                </div>

                <p>
                  Georgia's teaching reflects her belief in yoga's power to restore and rehabilitate. Her classes
                  emphasise careful alignment and intelligent use of props, ensuring that every student can access the
                  depth of each posture without strain.
                </p>

                <p>
                  She brings a clear and calm teaching style, combined with warmth and encouragement, so that students
                  feel both supported and challenged. This approach has made her classes popular with beginners and
                  experienced practitioners alike.
                </p>

                <p>
                  Having practised yoga through all three of her pregnancies, Georgia also understands the adaptability
                  of the Iyengar method at different stages of life. This personal experience informs her sensitive
                  approach to teaching students of all ages and physical conditions.
                </p>

                <p>
                  She invites her students to cultivate self-observation and reflection within their practice,
                  encouraging them to experience yoga not just as physical postures but as a path towards greater
                  awareness and balance.
                </p>
              </div>
            </article>

            <aside className="space-y-6">
              <img
                src="/georgia-about-coastal-portrait.jpg"
                alt="Georgia Marnham practicing yoga on the Portuguese coast, embodying the joy and freedom of Iyengar Yoga"
                className="w-full rounded-lg object-cover shadow-sm"
              />

              <div className="bg-brand-warm-gray/30 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/images/iyengar-cert-mark.jpg"
                    alt="Iyengar Yoga certification mark"
                    width={60}
                    height={60}
                    className="bg-white p-2 rounded"
                  />
                  <div>
                    <h3 className="font-heading text-lg text-brand-black">Level 3 Certified</h3>
                    <p className="font-body text-sm text-brand-black/70">Iyengar Yoga Teacher</p>
                  </div>
                </div>
                <p className="font-body text-sm text-brand-black/80">
                  Certified by the Iyengar Yoga Association with advanced training at RIMYI, Pune, India.
                </p>
              </div>
            </aside>
          </div>

          {/* Featured Interview Section */}
          <section className="mt-16 bg-white rounded-lg shadow-md border border-brand-warm-gray/30 overflow-hidden">
            <div className="border-b-2 border-brand-orange/20 px-6 pt-6 pb-4">
              <h2 className="font-heading text-2xl text-brand-black mb-3">Featured Interview: Georgia Marnham</h2>
              <p className="font-body text-base text-brand-black/80 leading-relaxed">
                In this podcast, Georgia shares her journey with Iyengar Yoga, her international teaching experience,
                and her approach to practice and teaching.
              </p>
            </div>

            <div className="px-6 py-6">
              {/* Responsive YouTube Embed Container - Smaller */}
              <div className="mx-auto max-w-lg">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/FFpgFAoVD_A"
                    title="Georgia Marnham Iyengar Yoga Interview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Watch on YouTube Button */}
                <div className="mt-4 text-center">
                  <Button
                    asChild
                    size="sm"
                    className="bg-brand-orange hover:bg-brand-gold text-white transition-colors shadow-sm"
                  >
                    <Link href="https://www.youtube.com/watch?v=FFpgFAoVD_A" target="_blank" rel="noopener noreferrer">
                      Watch on YouTube
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
              <Link href="https://momence.com/u/georgia-marnham-TXk2rZ" target="_blank" rel="noopener noreferrer">
                Book a Class
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
