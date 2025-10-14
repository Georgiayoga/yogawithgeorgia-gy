import Link from "next/link"

export const metadata = {
  title: "Retreats & Workshops | Yoga with Georgia",
}

const items = [
  {
    place: "Sri Lanka",
    img: "/sri-lanka-yoga-retreat-beach.png",
    summary: "Paste the exact Sri Lanka retreat description here, including dates.",
  },
  {
    place: "Paros",
    img: "/paros-yoga-retreat.png",
    summary: "Paste the exact Paros retreat description here, including dates.",
  },
  {
    place: "Morocco",
    img: "/morocco-desert-yoga.png",
    summary: "Paste the exact Morocco retreat description here, including dates.",
  },
  {
    place: "Algarve",
    img: "/algarve-yoga-retreat.png",
    summary: "Paste the exact Algarve retreat description here, including dates.",
  },
  {
    place: "UK",
    img: "/uk-yoga-retreat.png",
    summary: "Paste the exact UK retreat/workshop description here, including dates.",
  },
  {
    place: "Scotland",
    img: "/placeholder.svg?height=300&width=520",
    summary: "Paste the exact Scotland retreat/workshop description here, including dates.",
  },
]

export default function RetreatsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-black">Retreats & Workshops</h1>
          <p className="mt-2 text-black/80">
            Paste all retreat descriptions exactly as they appear on your site. Maintain dates and destination
            formatting.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <article key={i.place} className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-[#CDCDCB]">
              <img
                src={i.img || "/placeholder.svg"}
                alt={`${i.place} retreat placeholder`}
                className="w-full rounded-md object-cover"
              />
              <h3 className="mt-4 font-[var(--font-heading)] text-xl text-black">{i.place}</h3>
              <p className="mt-2 text-sm text-black/80">{i.summary}</p>
              <div className="mt-3">
                <Link
                  href="/contact"
                  className="text-black hover:underline underline-offset-8 decoration-(--brand-gold)"
                >
                  Find out more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
