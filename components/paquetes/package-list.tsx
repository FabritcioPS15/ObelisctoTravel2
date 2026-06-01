"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useLang, type Locale } from "@/lib/store/lang"
import { packages } from "@/lib/data/packages"

import { ScrollAnimation } from "@/components/ui/scroll-animation"

const ui: Record<Locale, { book: string; perPerson: string }> = {
  es: { book: "Ver detalles del paquete", perPerson: "por persona" },
  en: { book: "View package details", perPerson: "per person" },
  pt: { book: "Ver detalhes do pacote", perPerson: "por pessoa" },
}

export function PackageList() {
  const { locale } = useLang()
  const label = ui[locale]

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {packages.map((pkg, index) => {
        const tr = pkg.translations[locale]
        
        return (
          <ScrollAnimation key={pkg.slug} delay={0.1 * (index + 1)}>
            <Link
              href={`/paquetes/${pkg.slug}`}
              className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                    {tr.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex flex-col items-center justify-center rounded-xl bg-white px-3 py-1.5 shadow-lg ring-1 ring-black/5">
                    <span className="text-sm font-extrabold text-primary">S/ {pkg.price}</span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{label.perPerson}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="rounded-full bg-black/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white shadow-lg border border-white/10">
                    {tr.duration}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                  {tr.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {tr.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {tr.includes.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                  {tr.includes.length > 4 && (
                    <li className="text-xs text-muted-foreground italic mt-2">
                      + {tr.includes.length - 4} más...
                    </li>
                  )}
                </ul>

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
