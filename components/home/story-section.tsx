export function StorySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Headline */}
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              No vendemos tours. Creamos historias que recordarás toda la vida.
            </h2>
          </div>

          {/* Right Column - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Obelisco Travel, creemos que el verdadero lujo no se encuentra en las
              comodidades prefabricadas, sino en la profundidad de la conexión. Guiados
              por &quot;Master Guides&quot; locales, cada expedición es una inmersión cuidadosa
              en la geografía, la historia y el alma de los Andes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestra misión es llevarte más allá de los senderos convencionales,
              asegurando en cada paso el equilibrio perfecto entre la energía cruda de
              la exploración y la confiabilidad de una curaduría experta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
