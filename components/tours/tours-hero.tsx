import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ToursHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance">
          Tours Privados: Tu viaje, a tu ritmo.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 leading-relaxed">
          Diseñamos itinerarios exclusivos que se adaptan a tus preferencias y tiempos.
          Lujo es tener el control total de tu experiencia.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            asChild
          >
            <Link href="#contacto">SOLICITA TU ITINERARIO PRIVADO</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
