import Link from "next/link"

export default function CTA() {
  return (
    <section className="border-y bg-[#CDCDCB] py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl text-black">Ready to begin?</h3>
        <p className="mt-2 text-black/70">{"Reserve your place and start practicing today."}</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="https://momence.com/u/georgia-marnham-TXk2rZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md bg-brand-orange px-6 text-sm font-medium text-white shadow-sm transition hover:bg-brand-gold"
          >
            Book a Class
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-black/10 bg-white px-6 text-sm font-medium text-black shadow-sm transition hover:shadow"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
