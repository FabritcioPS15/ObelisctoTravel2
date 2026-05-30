"use client"

import { MapPin, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLang, type Locale } from "@/lib/store/lang"
import type { Hotel } from "@/lib/data/hotels"

const typeLabel: Record<string, Record<Locale, string>> = {
  hotel:    { es: "Hotel",    en: "Hotel",   pt: "Hotel" },
  lodge:    { es: "Lodge",    en: "Lodge",   pt: "Lodge" },
  refugio:  { es: "Refugio",  en: "Refuge",  pt: "Refúgio" },
  glamping: { es: "Glamping", en: "Glamping",pt: "Glamping" },
}

const btnLabel: Record<Locale, string> = {
  es: "Ver detalles",
  en: "View details",
  pt: "Ver detalhes",
}

const fromLabel: Record<Locale, string> = {
  es: "Desde",
  en: "From",
  pt: "A partir de",
}

const nightLabel: Record<Locale, string> = {
  es: "/noche",
  en: "/night",
  pt: "/noite",
}

interface HotelCardProps {
  hotel: Hotel
}

export function HotelCard({ hotel }: HotelCardProps) {
  const { locale } = useLang()
  const tr = hotel.translations[locale]

  return (
    <Link
      href={`/hoteles/${hotel.id}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${hotel.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            {typeLabel[hotel.type]?.[locale]}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 backdrop-blur-sm">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span className="text-xs font-semibold text-foreground">{hotel.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-foreground leading-tight">{tr.name}</h3>

        <div className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
          <span>{tr.location}</span>
        </div>

        <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {tr.description}
        </p>

        {/* Amenities */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tr.amenities.slice(0, 3).map((a) => (
            <span key={a} className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {a}
            </span>
          ))}
          {tr.amenities.length > 3 && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              +{tr.amenities.length - 3}
            </span>
          )}
        </div>

        {/* Price + CTA */}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <div>
            <p className="text-xs text-muted-foreground">{fromLabel[locale]}</p>
            <p className="text-xl font-bold text-foreground">
              ${hotel.price}
              <span className="text-sm font-normal text-muted-foreground">{nightLabel[locale]}</span>
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90">
            {btnLabel[locale]}
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
