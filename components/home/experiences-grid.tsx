import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { experiences } from "@/lib/data/experiences"

export function ExperiencesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Colección de Experiencias
            </h2>
            <p className="mt-2 text-muted-foreground">
              Diseñadas para el explorador exigente.
            </p>
          </div>
          <Link
            href="/experiencias"
            className="hidden sm:flex items-center text-sm font-medium text-primary hover:underline"
          >
            VER TODAS
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Grid - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Card - Tours Privados */}
          <div className="lg:row-span-2 group relative overflow-hidden rounded-xl bg-foreground">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${experiences[0].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="relative flex h-full min-h-[400px] lg:min-h-[500px] flex-col justify-end p-6">
              <span className="mb-2 inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                {experiences[0].category}
              </span>
              <h3 className="text-2xl font-bold text-white">{experiences[0].title}</h3>
              <p className="mt-2 text-sm text-white/80">{experiences[0].description}</p>
              <Link
                href={experiences[0].href}
                className="mt-4 flex items-center text-sm font-medium text-primary hover:underline"
              >
                VER MÁS
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Aventura */}
          <div className="group relative overflow-hidden rounded-xl bg-foreground">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${experiences[1].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="relative flex h-full min-h-[240px] flex-col justify-end p-6">
              <span className="mb-2 inline-block w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                {experiences[1].category}
              </span>
              <h3 className="text-xl font-bold text-white">{experiences[1].title}</h3>
              <Link
                href={experiences[1].href}
                className="mt-3 flex items-center text-sm font-medium text-primary hover:underline"
              >
                VER MÁS
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Cultura Viva */}
          <div className="group relative overflow-hidden rounded-xl bg-foreground">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${experiences[2].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="relative flex h-full min-h-[240px] flex-col justify-end p-6">
              <span className="mb-2 inline-block w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                {experiences[2].category}
              </span>
              <h3 className="text-xl font-bold text-white">{experiences[2].title}</h3>
              <Link
                href={experiences[2].href}
                className="mt-3 flex items-center text-sm font-medium text-primary hover:underline"
              >
                VER MÁS
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Refugios - Spans 2 columns on large screens */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-foreground">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${experiences[3].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6">
              <span className="mb-2 inline-block w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                {experiences[3].category}
              </span>
              <h3 className="text-2xl font-bold text-white">{experiences[3].title}</h3>
              <p className="mt-2 max-w-md text-sm text-white/80">
                {experiences[3].description}
              </p>
              <Link
                href={experiences[3].href}
                className="mt-4 flex items-center text-sm font-medium text-primary hover:underline"
              >
                VER MÁS
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile "Ver todas" link */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/experiencias"
            className="flex items-center justify-center text-sm font-medium text-primary hover:underline"
          >
            VER TODAS
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
