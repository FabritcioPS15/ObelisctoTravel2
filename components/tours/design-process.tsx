const steps = [
  {
    number: 1,
    title: "Consulta Inicial",
    description:
      "Conectamos para entender tus intereses, estilo de viaje, preferencias culinarias y ritmo deseado.",
  },
  {
    number: 2,
    title: "Diseño a Medida",
    description:
      "Nuestros Master Guides elaboran una propuesta detallada, refinándola contigo hasta alcanzar la perfección.",
  },
  {
    number: 3,
    title: "La Aventura",
    description:
      "Viaja con total tranquilidad. Nos encargamos de la logística impecable para que solo te dediques a disfrutar.",
  },
]

export function DesignProcess() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl text-balance">
              El arte de diseñar tu viaje
            </h2>

            <div className="mt-10 space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80"
                alt="Planificación de viaje"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative coffee cup image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl overflow-hidden shadow-lg hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&q=80"
                alt="Café"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
