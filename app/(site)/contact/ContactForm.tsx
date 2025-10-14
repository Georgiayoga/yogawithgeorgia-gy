"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <form action="https://formspree.io/f/xblzylrw" method="POST" className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block font-body text-sm text-brand-black mb-2">
            Name *
          </label>
          <Input id="name" name="name" required className="border-brand-warm-gray focus:ring-brand-orange" />
        </div>
        <div>
          <label htmlFor="email" className="block font-body text-sm text-brand-black mb-2">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="border-brand-warm-gray focus:ring-brand-orange"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block font-body text-sm text-brand-black mb-2">
          {"How did you hear about me?"}
        </label>
        <Input id="subject" name="subject" className="border-brand-warm-gray focus:ring-brand-orange" />
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-sm text-brand-black mb-2">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          required
          className="border-brand-warm-gray focus:ring-brand-orange resize-none"
        />
      </div>

      <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-gold text-white transition-colors">
        Send Message
      </Button>
    </form>
  )
}
