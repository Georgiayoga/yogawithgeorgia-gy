export const metadata = {
  title: "Reviews | Yoga with Georgia",
}

const testimonials = [
  { quote: "Paste testimonial #1 exactly as it appears.", name: "— Student name" },
  { quote: "Paste testimonial #2 exactly as it appears.", name: "— Student name" },
  { quote: "Paste testimonial #3 exactly as it appears.", name: "— Student name" },
  { quote: "Paste testimonial #4 exactly as it appears.", name: "— Student name" },
  { quote: "Paste testimonial #5 exactly as it appears.", name: "— Student name" },
  { quote: "Paste testimonial #6 exactly as it appears.", name: "— Student name" },
]

export default function ReviewsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-black">What People Are Saying</h1>
          <p className="mt-2 text-black/80">Bring over all testimonial text and formatting from the current site.</p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#CDCDCB]">
              <blockquote className="text-black/90">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-black/70">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
