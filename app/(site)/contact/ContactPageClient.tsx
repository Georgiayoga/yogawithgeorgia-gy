"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export default function ContactPageClient() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Placeholder: wire this to your booking/email service later.
    setTimeout(() => setStatus("sent"), 500)
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2">
        <section>
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-black">Contact</h1>
          <p className="mt-2 text-black/80">{"Send me a message…"}</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#CDCDCB]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-black">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-black">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-black">
                Message
              </label>
              <Textarea id="message" name="message" placeholder="How can I help?" className="min-h-28" required />
            </div>
            <Button type="submit" className="bg-(--brand-orange) hover:bg-(--brand-gold) text-white">
              {status === "sent" ? "Sent ✓" : "Send message"}
            </Button>
          </form>
        </section>

        <aside className="space-y-6">
          <div className="rounded-lg bg-[#CDCDCB]/60 p-6 ring-1 ring-[#CDCDCB]">
            <h2 className="font-[var(--font-heading)] text-xl text-black">Get in touch</h2>
            <ul className="mt-4 space-y-3 text-black/80">
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-(--brand-earth)" />
                <span>your-email@example.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-(--brand-earth)" />
                <span>+351 000 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-(--brand-earth)" />
                <span>Colares, near Sintra, Portugal</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="size-4 text-(--brand-earth)" />
                <a href="#" className="hover:underline underline-offset-8 decoration-(--brand-gold)">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <img
            src="/placeholder.svg?height=320&width=640"
            alt="Placeholder of Colares near Sintra"
            className="w-full rounded-md object-cover ring-1 ring-[#CDCDCB]"
          />
        </aside>
      </div>
    </div>
  )
}
