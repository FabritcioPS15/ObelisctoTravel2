import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { inspirationItineraries } from "@/lib/data/experiences"

export function InspirationCards() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Inspiración Privada
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Ejemplos de itinerarios diseñados para nuestros clientes más exigentes.
            Cada viaje es único.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {inspirationItineraries.map((itinerary) => (
            <div
              key={itinerary.id}
              className="group overflow-hidden rounded-xl border border-border bg-card"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground">
                    {itinerary.type}
                  </span>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {itinerary.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {itinerary.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {itinerary.description}
                </p>
                <Link
                  href="/contacto"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  VER ITINERARIO BASE
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
