import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export const metadata = {
  title: "Classes | Yoga with Georgia",
}

export default function ClassesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 space-y-12">
        <header className="max-w-2xl">
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-black">Classes</h1>
          <p className="mt-2 text-black/80">
            {/* Paste the regular classes text (studio, online, private) from Home & Classes pages verbatim. */}
            Paste the regular classes text (studio, online, private) here exactly as on the current site.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-[var(--font-heading)] text-2xl text-black">Schedule</h2>
            <Table>
              <TableCaption className="text-black/60">Update this timetable with your actual class times.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-black/80">Day</TableHead>
                  <TableHead className="text-black/80">Time</TableHead>
                  <TableHead className="text-black/80">Format</TableHead>
                  <TableHead className="text-black/80">Level</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Monday", "18:00–19:30", "Studio", "Open"],
                  ["Wednesday", "18:00–19:30", "Online", "Open"],
                  ["Friday", "09:00–10:15", "Studio", "Gentle / Restorative"],
                ].map((r) => (
                  <TableRow key={r.join("-")}>
                    <TableCell>{r[0]}</TableCell>
                    <TableCell>{r[1]}</TableCell>
                    <TableCell>{r[2]}</TableCell>
                    <TableCell>{r[3]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#CDCDCB]">
            <h3 className="font-[var(--font-heading)] text-xl text-black">Booking</h3>
            <p className="mt-2 text-black/80">
              {/* Preserve the original booking phrasing if present. */}
              Use the “Book a Class” button below to reserve your place.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-(--brand-orange) px-6 text-sm font-medium text-white shadow-sm transition hover:bg-(--brand-gold)"
              >
                Book a Class
              </Link>
            </div>
            <div className="mt-6">
              <img
                src="/schedule-widget-placeholder.png"
                alt="Schedule widget placeholder"
                className="w-full rounded-md object-cover ring-1 ring-[#CDCDCB]"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
