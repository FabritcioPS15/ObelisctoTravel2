import Link from "next/link"
import { ArrowRight, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Paquetes Turísticos Ayacucho | Obelisco Travel – Todo Incluido",
  description:
    "Paquetes turísticos completos en Ayacucho, Perú. Incluyen transporte, alojamiento, tours guiados y más. Perfectos para familias, parejas y grupos. Reserva ya.",
  keywords: ["paquetes turísticos Ayacucho", "viaje todo incluido Perú", "paquetes de viaje Ayacucho", "turismo Andes Perú"],
}

import { PackageList } from "@/components/paquetes/package-list"

export default function PaquetesPage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80')" }}>
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">Paquetes completos</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Paquetes Turísticos</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">Combinaciones curadas de tours, transporte y alojamiento para que solo te preocupes de disfrutar.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Elige tu Aventura</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Todos los paquetes incluyen asistencia permanente y pueden personalizarse a tus necesidades.</p>
          </div>

          <PackageList />
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">¿Quieres un paquete personalizado?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Diseñamos itinerarios a medida para grupos, familias, luna de miel y viajes corporativos.</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10" asChild>
            <Link href="/contacto">Solicitar paquete personalizado</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
