import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { adventureModalities } from "@/lib/data/experiences"

export function ModalitiesGrid() {
  return (
    <section id="modalidades" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Modalidades de Aventura
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Nuestros Master Guides están preparados para liderar expediciones en
            diversas disciplinas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {adventureModalities.map((modality) => (
            <div
              key={modality.id}
              className="group overflow-hidden rounded-xl border border-border bg-card"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={modality.image}
                  alt={modality.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {modality.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {modality.description}
                </p>
                <Link
                  href="/contacto"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  {modality.id === "campamentos" ? "VER OPCIONES" : "VER RUTAS"}
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
