"use client"

import { useLang, type Locale } from "@/lib/store/lang"
import { MapPin, Clock, Users, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"
import { format } from "date-fns"
import { es, enUS, ptBR } from "date-fns/locale"
import type { Tour } from "@/lib/data/tours"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarIcon } from "lucide-react"
import type { Tour } from "@/lib/data/tours"

const ui: Record<Locale, {
  back: string; duration: string; group: string; highlights: string;
  includes: string; book: string; gallery: string; price: string; perPerson: string;
}> = {
  es: { back: "Volver a tours", duration: "Duración", group: "Grupo", highlights: "Puntos Destacados", includes: "¿Qué incluye?", book: "Reservar por WhatsApp", gallery: "Galería de fotos", price: "Precio", perPerson: "por persona", nameLabel: "Nombre completo", dateLabel: "Fecha deseada", pickDate: "Seleccionar fecha" },
  en: { back: "Back to tours", duration: "Duration", group: "Group", highlights: "Highlights", includes: "What's included?", book: "Book via WhatsApp", gallery: "Photo gallery", price: "Price", perPerson: "per person", nameLabel: "Full name", dateLabel: "Desired date", pickDate: "Pick a date" },
  pt: { back: "Voltar para tours", duration: "Duração", group: "Grupo", highlights: "Destaques", includes: "O que está incluído?", book: "Reservar pelo WhatsApp", gallery: "Galeria de fotos", price: "Preço", perPerson: "por pessoa", nameLabel: "Nome completo", dateLabel: "Data desejada", pickDate: "Escolha uma data" },
}

export function TourDetailClient({ tour }: { tour: Tour }) {
  const { locale } = useLang()
  const tr = tour.translations[locale]
  const label = ui[locale]
  const [activeImg, setActiveImg] = useState(0)

  const [name, setName] = useState("")
  const [date, setDate] = useState<Date>()

  const dateLocales = { es, en: enUS, pt: ptBR }

  const handleWhatsApp = () => {
    const formattedDate = date ? format(date, "PPP", { locale: dateLocales[locale] }) : "No definida";
    const personalizedMsg = `Hola, me llamo ${name || "un viajero"}. Me interesa reservar el tour "${tr.name}" para la fecha: ${formattedDate}. ¿Me pueden dar más información?`;
    window.open(`https://wa.me/51999999999?text=${encodeURIComponent(personalizedMsg)}`, "_blank");
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Image */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${tour.images[activeImg] || tour.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        {tour.images.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {tour.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`h-2.5 w-10 rounded-full transition-all ${i === activeImg ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        )}
        <div className="absolute top-28 left-6 md:left-12 z-10">
          <Link href="/tours" className="flex items-center gap-2 rounded-full bg-black/50 px-5 py-2.5 text-sm font-medium text-white hover:bg-black/70 transition-colors backdrop-blur-md border border-white/10">
            <ArrowLeft className="h-4 w-4" />
            {label.back}
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 -mt-20 relative z-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <ScrollAnimation delay={0.1} className="lg:col-span-2 space-y-12 rounded-3xl bg-background p-8 md:p-12 shadow-2xl border border-border/50">
            {/* Title */}
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary mb-4">
                Tour Premium
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl mb-6 leading-tight">
                {tr.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground border-b border-border pb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground/70">{label.duration}</span>
                    <span className="text-foreground">{tr.duration}</span>
                  </span>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground/70">{label.group}</span>
                    <span className="text-foreground">{tr.groupSize}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                {tr.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                {label.highlights}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {tr.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 text-base text-foreground font-medium bg-background p-4 rounded-xl border border-border/50 shadow-sm">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

              {/* Includes */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">{label.includes}</h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {tr.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base text-foreground bg-primary/5 p-4 rounded-xl">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
          </ScrollAnimation>

          {/* Booking Sidebar */}
          <ScrollAnimation delay={0.2} className="lg:col-span-1">
            <div className="sticky top-32 rounded-3xl border border-border/50 bg-card p-8 shadow-2xl">
              <div className="mb-8">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">{label.price}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-foreground">S/ {tour.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{label.perPerson}</p>
              </div>

              {/* Booking Form */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{label.nameLabel}</label>
                  <Input 
                    placeholder="Ej. Juan Pérez" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{label.dateLabel}</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full justify-start text-left font-normal rounded-xl bg-background ${!date && "text-muted-foreground"}`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: dateLocales[locale] }) : <span>{label.pickDate}</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white hover:bg-[#20b858] hover:scale-[1.02] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <FaWhatsapp className="h-6 w-6" />
                {label.book}
              </button>

              <div className="mt-8 pt-8 border-t border-border">
                <Link href="/contacto" className="flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:underline">
                  {locale === "es" ? "Diseñar un tour a medida" : locale === "en" ? "Design a custom tour" : "Desenhar um tour sob medida"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
