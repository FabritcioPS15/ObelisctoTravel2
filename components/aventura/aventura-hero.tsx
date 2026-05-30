import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function AventuraHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance italic">
          Desafía tus límites en los Andes.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 leading-relaxed">
          Trekking, Rappel, Senderismo y más. Experiencias diseñadas para quienes
          buscan la adrenalina en los paisajes más remotos.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white/10"
            asChild
          >
            <a href="#modalidades">
              Descubre Rutas
              <ChevronDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
