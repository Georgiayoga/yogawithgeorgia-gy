import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] w-full overflow-hidden" aria-label="Hero banner placeholder">
        <img src="/outdoor-yoga-teacher.png" alt="Placeholder hero banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-block rounded-md bg-[--brand-warm-gray]/80 px-6 py-6 shadow">
              <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl leading-tight text-black">
                {"Iyengar Yoga brings a healthy body, a clear mind and pure emotions"}
              </h1>
              <div className="mt-6 flex justify-center">
                <Button asChild size="lg" className="bg-[--brand-orange] hover:bg-[--brand-gold] text-white shadow-md">
                  <Link href="/classes">Start Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
