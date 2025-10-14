import ContactForm from "./ContactForm"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact | Yoga with Georgia",
  description: "Contact Georgia for class bookings, retreat enquiries, or general questions about Iyengar Yoga.",
}

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-6">Contact Georgia</h1>
            <p className="font-body text-lg text-brand-black/80">
              For class bookings, retreat enquiries, or general questions, please use the form below or contact Georgia
              directly.
            </p>
          </header>

          <div className="grid gap-12 lg:grid-cols-2">
            <ContactForm />

            <div className="space-y-8">
              <div className="overflow-hidden rounded-lg border border-brand-warm-gray shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.03]">
                <img
                  src="/georgia-coastal-yoga-contact.jpg"
                  alt="Georgia Marnham — Iyengar Yoga Teacher, Portugal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>

              <div className="bg-brand-warm-gray/20 rounded-lg p-6">
                <h3 className="font-heading text-xl text-brand-black mb-4">Direct Contact</h3>
                <div className="space-y-3 font-body text-brand-black/80">
                  <div>
                    <strong>Email:</strong> georgiamarnham@gmail.com
                  </div>
                  <div>
                    <strong>WhatsApp:</strong> +351 933 675 722
                  </div>
                  <div>
                    <strong>Location:</strong> Colares, Portugal
                  </div>
                </div>
              </div>

              <div className="bg-brand-warm-gray/20 rounded-lg p-6 text-center">
                <h3 className="font-heading text-xl text-brand-black mb-3">Join the Mailing List</h3>
                <p className="font-body text-brand-black/80 mb-4">
                  Stay connected with Yoga with Georgia for updates on studio classes, online sessions, and retreats.
                </p>
                <Button asChild className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                  <Link href="/mailing-list-signup">Sign Up to Mailing List</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
