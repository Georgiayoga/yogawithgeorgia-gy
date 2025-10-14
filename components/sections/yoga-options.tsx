import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function YogaOptions() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-black">Yoga Options</h2>
          <p className="mt-2 text-black/70">
            {"Studio classes, online sessions, and private instruction with Yoga with Georgia."}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Studio Classes",
              img: "/light-yoga-studio.png",
              desc: "Join our studio classes for a hands-on yoga experience with Georgia.",
            },
            {
              title: "Online Classes",
              img: "/online-yoga-practice-home.png",
              desc: "Enjoy the convenience of online yoga classes with live sessions led by Georgia.",
            },
            {
              title: "Private Sessions",
              img: "/private-yoga-session.png",
              desc: "Get personalized attention with private yoga sessions tailored to your needs.",
            },
          ].map((opt) => (
            <Card key={opt.title} className="border-[#CDCDCB]">
              <CardHeader>
                <CardTitle className="font-[var(--font-heading)] text-black">{opt.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={opt.img || "/placeholder.svg"}
                  alt={`${opt.title} placeholder`}
                  className="w-full rounded-md object-cover"
                />
                <p className="text-sm text-black/80">{opt.desc}</p>
                <Button asChild className="bg-[--brand-orange] hover:bg-[--brand-gold] text-white">
                  <Link href="/classes">Reserve Your Place</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
