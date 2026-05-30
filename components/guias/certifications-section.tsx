import { Mountain, HeartPulse, Leaf, LifeBuoy, CheckCircle } from "lucide-react"
import { certifications, trainingProcess } from "@/lib/data/guides"

const iconMap = {
  Mountain,
  HeartPulse,
  Leaf,
  LifeBuoy,
}

export function CertificationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Estándares de Excelencia
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Nuestros guías cumplen con las certificaciones más exigentes de la industria
            del turismo de aventura.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon as keyof typeof iconMap]
            return (
              <div
                key={cert.name}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{cert.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Training Process */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            Proceso de Formación
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {trainingProcess.map((step, index) => (
                <div key={step.step} className="relative flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <h4 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Checkmark for completed steps */}
                  {index < trainingProcess.length - 1 && (
                    <div className="hidden md:flex absolute left-8 -bottom-4 transform translate-x-[-50%]">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
