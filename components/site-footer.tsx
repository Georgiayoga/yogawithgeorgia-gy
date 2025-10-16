import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-brand-warm-gray/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg text-brand-black mb-4">Contact Georgia</h3>
            <div className="space-y-3 text-sm font-body text-brand-black/80">
              <div className="flex items-center gap-3">
                <MessageCircle className="size-4 text-brand-earth flex-shrink-0" />
                <a
                  href="https://wa.me/351933675722"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-black hover:underline underline-offset-4 decoration-brand-gold transition-colors"
                >
                  WhatsApp: +351 933 675 722
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-brand-earth flex-shrink-0" />
                <a
                  href="tel:+351933675722"
                  className="hover:text-brand-black hover:underline underline-offset-4 decoration-brand-gold transition-colors"
                >
                  Phone: +351 933 675 722
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-brand-earth flex-shrink-0" />
                <a
                  href="mailto:georgia@yogawithgeorgia.com"
                  className="hover:text-brand-black hover:underline underline-offset-4 decoration-brand-gold transition-colors"
                >
                  georgiamarnham@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-brand-earth flex-shrink-0" />
                <span>Colares, Portugal</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg text-brand-black mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm font-body">
              <Link
                href="/about"
                className="block text-brand-black/80 hover:text-brand-black hover:underline underline-offset-4 decoration-brand-gold transition-colors"
              >
                About Georgia
              </Link>
              <Link
                href="/classes-portugal"
                className="block text-brand-black/80 hover:text-brand-black hover:underline underline-offset-4 decoration-brand-gold transition-colors"
              >
                Classes in Portugal
              </Link>
              <Link
                href="/online"
                className="block text-brand-black/80 hover:text-brand-black hover:underline underline-offset-4 decoration-brand-gold transition-colors"
              >
                Online Classes
              </Link>
              <Link
                href="/retreats"
                className="block text-brand-black/80 hover:text-brand-black hover:underline underline-offset-4 decoration-brand-gold transition-colors"
              >
                Retreats & Workshops
              </Link>
              <Link
                href="https://momence.com/u/georgia-marnham-TXk2rZ"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-brand-orange hover:text-brand-gold hover:underline underline-offset-4 font-medium transition-colors"
              >
                Book a Class →
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg text-brand-black mb-4">Certification</h3>
            <div className="flex items-center gap-3">
              <Image
                src="/images/iyengar-cert-mark.jpg"
                alt="Iyengar Yoga certification mark"
                width={48}
                height={48}
                className="h-12 w-auto bg-white p-1 rounded"
              />
              <div className="text-xs font-body text-brand-black/70">
                <div>Level 3 Certified</div>
                <div>Iyengar Yoga Teacher</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-warm-gray text-center text-sm font-body text-brand-black/60">
          <p>
            &copy; {new Date().getFullYear()} Yoga with Georgia. All rights reserved. Powered by{" "}
            <a
              href="https://oliverjensenmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:text-brand-gold hover:underline underline-offset-4 transition-colors"
            >
              Jensen Media
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
