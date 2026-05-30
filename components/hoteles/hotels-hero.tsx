export function HotelsHero() {
  return (
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance">
          Refugios y Hospedajes Premium
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 leading-relaxed">
          Descansa en ubicaciones privilegiadas. Desde lodges de montaña hasta
          haciendas coloniales, cada alojamiento ha sido seleccionado por su
          autenticidad y confort.
        </p>
      </div>
    </section>
  )
}
