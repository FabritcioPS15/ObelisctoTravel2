import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TourList } from "@/components/tours/tour-list"

export const metadata = {
  title: "Tours en Ayacucho y Perú | Obelisco Travel",
  description:
    "Descubre los mejores tours en Ayacucho, Perú. Wari, Vilcashuamán, Pikimachay, Cascadas, Volcanes y más. Guías expertos, precios transparentes y experiencias únicas.",
  keywords: [
    "tours Ayacucho",
    "Wari Quinua tour",
    "Vilcashuamán",
    "Pikimachay Huanta",
    "Volcán Pachapupum",
    "City Tour Ayacucho",
    "Aguas Turquesas Millpu",
    "Cascadas Ruqruqa",
    "Cascadas Sarhua",
    "Cañones Qorihuillca",
    "turismo Ayacucho",
    "Obelisco Travel",
  ],
}

export default function ToursPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
          <span className="inline-block mb-4 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
            Ayacucho · Perú
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 drop-shadow-md">
            Tours y Experiencias en Ayacucho
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Desde ruinas milenarias hasta cascadas escondidas. Elige tu aventura y déjanos llevarte
            a los rincones más extraordinarios del Perú.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-14 text-base font-bold shadow-lg transition-transform hover:scale-105" asChild>
              <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">
                Reservar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl border-white bg-transparent text-white hover:bg-white/10 px-8 h-14 text-base font-bold transition-transform hover:scale-105" asChild>
              <Link href="/contacto">Consultar disponibilidad</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tours grid */}
      <section className="py-20 lg:py-28 bg-muted/20">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Nuestros Tours Disponibles
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Todos los precios incluyen guía especializado, transporte y seguro de viaje.
              Grupos privados y personalizados.
            </p>
          </div>

          <TourList />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Diseñamos itinerarios a medida. Cuéntanos tu idea y construimos la aventura perfecta para ti.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10" asChild>
            <Link href="/contacto">Diseña tu tour personalizado</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
