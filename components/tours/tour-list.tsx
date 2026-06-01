"use client"

import Link from "next/link"
import { Clock, Users, MapPin, ArrowRight } from "lucide-react"
import { useLang, type Locale } from "@/lib/store/lang"
import { tours } from "@/lib/data/tours"

import { ScrollAnimation } from "@/components/ui/scroll-animation"

const ui: Record<Locale, { book: string; perPerson: string }> = {
  es: { book: "Ver detalles del tour", perPerson: "por persona" },
  en: { book: "View tour details", perPerson: "per person" },
  pt: { book: "Ver detalhes do tour", perPerson: "por pessoa" },
}

export function TourList() {
  const { locale } = useLang()
  const label = ui[locale]

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour, index) => {
        const tr = tour.translations[locale]
        
        return (
          <ScrollAnimation key={tour.slug} delay={0.1 * (index + 1)}>
            <Link
              href={`/tours/${tour.slug}`}
              className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${tour.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-primary/90 backdrop-blur-sm px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-lg">
                    S/ {tour.price.toFixed(2)} <span className="font-normal text-xs opacity-90">{label.perPerson}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                  {tr.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-3">
                  {tr.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-5 text-sm font-medium text-foreground mb-5 p-3 bg-muted/30 rounded-xl border border-border/50">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    {tr.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    {tr.groupSize}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-auto border-t border-border pt-5">
                  <span className="text-sm font-semibold text-primary group-hover:underline">
                    {label.book}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollAnimation>
        )
      })}
    </div>
  )
}
