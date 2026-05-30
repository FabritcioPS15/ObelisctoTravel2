import { Headset, Users, ShieldCheck, Heart } from "lucide-react"

const benefits = [
  {
    icon: Headset,
    title: "Atención Personalizada",
    description:
      "Diseño de itinerarios desde cero, adaptados a tus expectativas.",
  },
  {
    icon: Users,
    title: "Guías Expertos",
    description:
      "Master Guides con profundo conocimiento técnico y cultural del territorio.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Intransigente",
    description:
      "Protocolos rigurosos y equipos de alta montaña para tu tranquilidad.",
  },
  {
    icon: Heart,
    title: "Autenticidad",
    description:
      "Conexiones reales con comunidades locales y turismo sostenible.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ¿Por qué viajar con Obelisco Travel?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <benefit.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
