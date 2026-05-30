"use client"

import { useLang, type Locale } from "@/lib/store/lang"
import { Star, MapPin, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"
import type { Hotel } from "@/lib/data/hotels"

const typeLabel: Record<string, Record<Locale, string>> = {
  hotel:   { es: "Hotel",    en: "Hotel",   pt: "Hotel" },
  lodge:   { es: "Lodge",    en: "Lodge",   pt: "Lodge" },
  refugio: { es: "Refugio",  en: "Refuge",  pt: "Refúgio" },
  glamping:{ es: "Glamping", en: "Glamping",pt: "Glamping" },
}

const ui: Record<Locale, {
  back: string; from: string; night: string; amenities: string;
  includes: string; book: string; gallery: string; rating: string;
}> = {
  es: { back: "Volver a hospedajes", from: "Desde", night: "/noche", amenities: "Comodidades", includes: "¿Qué incluye?", book: "Reservar por WhatsApp", gallery: "Galería de fotos", rating: "Calificación" },
  en: { back: "Back to accommodations", from: "From", night: "/night", amenities: "Amenities", includes: "What's included?", book: "Book via WhatsApp", gallery: "Photo gallery", rating: "Rating" },
  pt: { back: "Voltar para hospedagens", from: "A partir de", night: "/noite", amenities: "Comodidades", includes: "O que está incluído?", book: "Reservar pelo WhatsApp", gallery: "Galeria de fotos", rating: "Avaliação" },
}

export function HotelDetailClient({ hotel }: { hotel: Hotel }) {
  const { locale } = useLang()
  const tr = hotel.translations[locale]
  const label = ui[locale]
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${hotel.images[activeImg]})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {hotel.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`h-2 w-8 rounded-full transition-all ${i === activeImg ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
        <div className="absolute top-6 left-6">
          <Link href="/hoteles" className="flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm text-white hover:bg-black/70 transition-colors backdrop-blur-sm">
            <ArrowLeft className="h-4 w-4" />
            {label.back}
          </Link>
        </div>
        <div className="absolute top-6 right-6">
          <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
            {typeLabel[hotel.type]?.[locale]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            {/* Title */}
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                {tr.location}
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-3">{tr.name}</h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.round(hotel.rating) ? "fill-primary text-primary" : "text-border"}`} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">{hotel.rating}</span>
                <span className="text-sm text-muted-foreground">({hotel.reviewCount} {locale === "es" ? "reseñas" : locale === "en" ? "reviews" : "avaliações"})</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-base text-muted-foreground leading-relaxed">{tr.longDescription}</p>
            </div>

            {/* Gallery thumbnails */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">{label.gallery}</h2>
              <div className="grid grid-cols-3 gap-3">
                {hotel.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative h-28 overflow-hidden rounded-xl border-2 transition-all ${i === activeImg ? "border-primary" : "border-transparent"}`}
                  >
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">{label.amenities}</h2>
              <div className="flex flex-wrap gap-2">
                {tr.amenities.map((a) => (
                  <span key={a} className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-foreground">{a}</span>
                ))}
              </div>
            </div>

            {/* Includes */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">{label.includes}</h2>
              <ul className="space-y-2">
                {tr.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-lg">
              <div className="mb-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{label.from}</p>
                <p className="text-3xl font-bold text-foreground">${hotel.price}<span className="text-base font-normal text-muted-foreground">{label.night}</span></p>
              </div>

              <a
                href={`https://wa.me/51999999999?text=${encodeURIComponent(hotel.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#20b858] transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
                {label.book}
              </a>

              <div className="mt-4 flex items-center gap-2 justify-center">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium text-foreground">{hotel.rating} {label.rating}</span>
                <span className="text-xs text-muted-foreground">· {hotel.reviewCount} {locale === "es" ? "reseñas" : locale === "en" ? "reviews" : "avaliações"}</span>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Link href="/contacto" className="flex items-center justify-center gap-2 text-sm text-primary hover:underline">
                  {locale === "es" ? "Consultar disponibilidad" : locale === "en" ? "Check availability" : "Verificar disponibilidade"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
