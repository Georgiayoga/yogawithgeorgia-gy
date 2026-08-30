import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { cn } from "@/lib/utils"
import "./globals.css"

const headingFont = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" })
const bodyFont = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  title: "Yoga with Georgia",
  description: "Iyengar Yoga with Georgia Marnham",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-dvh bg-white text-brand-black antialiased", headingFont.variable, bodyFont.variable)}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
