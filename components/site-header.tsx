"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

const mainLinks = [
  { href: "/classes-portugal", label: "Classes in Portugal" },
  { href: "/online", label: "Online with Georgia" },
  { href: "/retreats", label: "Retreats & Workshops" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

const aboutLinks = [
  { href: "/about", label: "About Georgia" },
  { href: "/about-bks-iyengar", label: "About B.K.S. Iyengar" },
]

const allLinks = [
  { href: "/about", label: "About Georgia" },
  { href: "/about-bks-iyengar", label: "About B.K.S. Iyengar" },
  { href: "/classes-portugal", label: "Classes in Portugal" },
  { href: "/online", label: "Online with Georgia" },
  { href: "/retreats", label: "Retreats & Workshops" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" aria-label="Yoga with Georgia home" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Yoga with Georgia logo"
            width={120}
            height={68}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-body text-brand-black/80 hover:text-brand-black transition-colors">
              About
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border border-brand-warm-gray">
              {aboutLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-brand-black/80 hover:text-brand-black hover:bg-brand-warm-gray/20 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {mainLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-body text-brand-black/80 hover:text-brand-black hover:underline underline-offset-8 decoration-brand-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}

          <Button asChild className="bg-brand-orange hover:bg-brand-gold text-white shadow-sm transition-colors">
            <Link href="https://momence.com/u/georgia-marnham-TXk2rZ" target="_blank" rel="noopener noreferrer">
              Book a Class
            </Link>
          </Button>
        </nav>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5 text-brand-black" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <SheetHeader>
                <SheetTitle className="font-heading">Yoga with Georgia</SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-4">
                {allLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-base font-body text-brand-black/80 hover:text-brand-black hover:underline underline-offset-8 decoration-brand-gold transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <Button asChild className="bg-brand-orange hover:bg-brand-gold text-white transition-colors">
                  <Link
                    href="https://momence.com/u/georgia-marnham-TXk2rZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    Book a Class
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
