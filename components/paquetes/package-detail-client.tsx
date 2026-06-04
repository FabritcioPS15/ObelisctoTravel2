"use client"

import { useLang, type Locale } from "@/lib/store/lang"
import { Clock, CheckCircle, ArrowLeft, CalendarIcon, Users } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import { useState, useEffect } from "react"
import type { Package } from "@/lib/data/packages"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { es, enUS, ptBR } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const locales = { es, en: enUS, pt: ptBR }

const ui: Record<Locale, {
  back: string; duration: string; includes: string; book: string; gallery: string;
  price: string; perPerson: string; formTitle: string; 
  nameLabel: string; namePlaceholder: string;
  dateLabel: string; datePlaceholder: string;
  paxLabel: string;
}> = {
  es: { back: "Volver a paquetes", duration: "Duración", includes: "¿Qué incluye?", book: "Reservar por WhatsApp", gallery: "Galería de fotos", price: "Precio desde", perPerson: "por persona", formTitle: "Reserva tu paquete", nameLabel: "Nombre completo", namePlaceholder: "Ej. Juan Pérez", dateLabel: "Fecha de viaje", datePlaceholder: "Selecciona una fecha", paxLabel: "Número de personas" },
  en: { back: "Back to packages", duration: "Duration", includes: "What's included?", book: "Book via WhatsApp", gallery: "Photo gallery", price: "Price from", perPerson: "per person", formTitle: "Book your package", nameLabel: "Full name", namePlaceholder: "e.g. John Doe", dateLabel: "Travel date", datePlaceholder: "Select a date", paxLabel: "Number of people" },
  pt: { back: "Voltar para pacotes", duration: "Duração", includes: "O que está incluído?", book: "Reservar pelo WhatsApp", gallery: "Galeria de fotos", price: "Preço a partir de", perPerson: "por pessoa", formTitle: "Reserve seu pacote", nameLabel: "Nome completo", namePlaceholder: "Ex. João Silva", dateLabel: "Data de viagem", datePlaceholder: "Selecione uma data", paxLabel: "Número de pessoas" },
}

import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { DateInfoIcon } from "@/components/ui/date-info-icon"
import { DateRange } from "react-day-picker"

export function PackageDetailClient({ pkg }: { pkg: Package }) {
  const { locale } = useLang()
  const tr = pkg.translations[locale]
  const label = ui[locale]
  
  const [activeImg, setActiveImg] = useState(0)
  
  // Form State
  const [name, setName] = useState("")
  const [date, setDate] = useState<DateRange | undefined>(undefined)
  const [pax, setPax] = useState("2")

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault()
    
    let formattedDate = "No especificada"
    if (date?.from) {
      if (date.to) {
        formattedDate = `${format(date.from, "PPP", { locale: locales[locale] })} - ${format(date.to, "PPP", { locale: locales[locale] })}`
      } else {
        formattedDate = format(date.from, "PPP", { locale: locales[locale] })
      }
    }
    
    let message = ""
    if (locale === "es") {
      message = `Hola, quiero reservar el *${tr.name}*.\n\n👤 Nombre: ${name}\n📅 Fecha: ${formattedDate}\n👥 Personas: ${pax}\n\nPor favor, bríndenme más información.`
    } else if (locale === "en") {
      message = `Hello, I'd like to book the *${tr.name}*.\n\n👤 Name: ${name}\n📅 Date: ${formattedDate}\n👥 People: ${pax}\n\nPlease provide more information.`
    } else {
      message = `Olá, gostaria de reservar o *${tr.name}*.\n\n👤 Nome: ${name}\n📅 Data: ${formattedDate}\n👥 Pessoas: ${pax}\n\nPor favor, me dê mais informações.`
    }

    window.open(`https://wa.me/51999999999?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Image */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${pkg.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-28 left-6 md:left-12 z-10">
          <Link href="/paquetes" className="flex items-center gap-2 rounded-full bg-black/50 px-5 py-2.5 text-sm font-medium text-white hover:bg-black/70 transition-colors backdrop-blur-md border border-white/10">
            <ArrowLeft className="h-4 w-4" />
            {label.back}
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 -mt-20 relative z-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 rounded-3xl bg-background p-8 md:p-12 shadow-2xl border border-border/50">
            {/* Title */}
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary mb-4">
                {tr.badge}
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl mb-6 leading-tight">
                {tr.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground border-b border-border pb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground/70">{label.duration}</span>
                    <span className="text-foreground font-bold">{tr.duration}</span>
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

            {/* Includes */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">{label.includes}</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {tr.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-foreground bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Section */}
            {pkg.images && pkg.images.length > 0 && (
              <div className="pt-8 border-t border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">{label.gallery}</h2>
                <div className="px-12">
                  <Carousel 
                    setApi={setApi} 
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {pkg.images.map((img, idx) => (
                        <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                          <div className="relative aspect-video rounded-2xl overflow-hidden group">
                            <div 
                              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                              style={{ backgroundImage: `url(${img})` }}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  <div className="py-4 flex justify-center gap-2">
                    {Array.from({ length: count }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => api?.scrollTo(i)}
                        className={`h-2 w-2 rounded-full transition-all ${
                          i === current ? "bg-primary w-6" : "bg-primary/30"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar / Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 rounded-3xl border border-border/50 bg-card p-8 shadow-2xl">
              <div className="mb-8 border-b border-border pb-6">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">{label.price}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-foreground">S/ {pkg.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{label.perPerson}</p>
              </div>

              <h3 className="text-xl font-bold mb-6">{label.formTitle}</h3>
              
              <form onSubmit={handleBook} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{label.nameLabel}</label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={label.namePlaceholder}
                    className="flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2 flex flex-col">
                  <label className="flex items-center gap-1.5 text-sm font-medium text-foreground">{label.dateLabel} <DateInfoIcon /></label>
                  <DatePickerWithRange date={date} setDate={setDate} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{label.paxLabel}</label>
                  <Select value={pax} onValueChange={setPax}>
                    <SelectTrigger className="w-full h-11">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "persona" : "personas"}
                        </SelectItem>
                      ))}
                      <SelectItem value="10+">10+ personas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <button
                  type="submit"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-base font-bold text-white hover:bg-[#20b858] transition-all shadow-lg shadow-[#25D366]/20"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  {label.book}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
