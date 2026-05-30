import Link from "next/link"
import { ArrowRight, Car, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Servicio de Transporte Turístico | Obelisco Travel Ayacucho",
  description:
    "Transporte turístico privado en Ayacucho, Perú. Traslados al aeropuerto, rutas de aventura en 4x4, vans privadas y buses para grupos. Conductores bilingües y seguros.",
  keywords: ["transporte turístico Ayacucho", "traslados aeropuerto Ayacucho", "van privada Perú", "4x4 aventura Andes"],
}

const vehicles = [
  { name: "Sedán Privado", capacity: "1–3 pasajeros", ideal: "City tour, traslados cortos", icon: "🚗" },
  { name: "Van Privada", capacity: "4–8 pasajeros", ideal: "Tours familiares, grupos pequeños", icon: "🚐" },
  { name: "4x4 Todo Terreno", capacity: "1–5 pasajeros", ideal: "Rutas de aventura, montaña, cascadas", icon: "🚙" },
  { name: "Bus Turístico", capacity: "9–20 pasajeros", ideal: "Grupos, corporativos, escolares", icon: "🚌" },
]

const features = [
  "Conductores con licencia profesional y experiencia en rutas andinas",
  "Vehículos con seguro vehicular y seguro de pasajeros",
  "GPS en tiempo real y monitoreo de ruta",
  "Servicio 24/7 para emergencias",
  "Agua embotellada y botiquín de primeros auxilios",
  "Coordinación con guías turísticos certificados",
]

export default function TransportePage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80')" }}>
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">Servicio de Transporte</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Viaja Seguro y con Estilo</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">Flota moderna para traslados privados, rutas de aventura y transporte turístico en toda la región de Ayacucho.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Transporte turístico a tu medida</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sabemos que el transporte es la base de una buena experiencia de viaje. Por eso contamos con una flota variada y conductores especializados en rutas turísticas de la región, desde el centro histórico de Ayacucho hasta los destinos más remotos de los Andes.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="https://wa.me/51999999999?text=Hola, necesito información sobre transporte turístico" target="_blank" rel="noopener noreferrer">
                  Solicitar transporte <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {vehicles.map((v) => (
                <div key={v.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="text-4xl mb-3 block">{v.icon}</span>
                  <h3 className="text-base font-bold text-foreground mb-1">{v.name}</h3>
                  <p className="text-xs font-medium text-primary mb-2">{v.capacity}</p>
                  <p className="text-sm text-muted-foreground">{v.ideal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">¿A dónde quieres llegar?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Cuéntanos tu itinerario y te preparamos un presupuesto sin compromiso.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10" asChild>
              <Link href="/contacto">Obtener cotización</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-10" asChild>
              <Link href="/tours">Ver tours disponibles</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
