import { Calendar, Gem, Users } from "lucide-react"
import { privateTourBenefits } from "@/lib/data/experiences"

const iconMap = {
  Calendar,
  Gem,
  Users,
}

export function WhyPrivateTour() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ¿Por qué elegir un Tour Privado?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Eleva tu experiencia de viaje con un servicio diseñado meticulosamente a tu medida.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {privateTourBenefits.map((benefit) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap]
            return (
              <div
                key={benefit.title}
                className="rounded-xl border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
