import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageBanner } from "@/components/ui/page-banner"

export const metadata = {
  title: "Servicios de Turismo | Obelisco Travel – Transporte, Tours y Hoteles en Ayacucho",
  description:
    "Ofrecemos transporte privado, tours guiados y reservas de hoteles en Ayacucho, Perú. Servicios integrales de turismo con atención personalizada y guías certificados.",
  keywords: ["servicios turísticos Ayacucho", "transporte turístico Perú", "reservas hoteles Ayacucho", "tours guiados"],
}

const services = [
  {
    title: "Servicio de Transporte",
    description: "Traslados seguros y confortables en vehículos modernos con conductor especializado. Recogemos en tu hotel, aeropuerto o terminal. Contamos con vans privadas, camionetas 4x4 y buses para grupos.",
    features: ["Traslados aeropuerto", "Traslados interprovinciales", "Vehículos 4x4 para rutas de aventura", "Conductor guía bilingüe"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    cta: "Reservar transporte",
    href: "/servicios/transporte",
  },
  {
    title: "Tours Guiados",
    description: "Experiencias culturales, históricas y de aventura por los destinos más increíbles de Ayacucho y el Perú. Grupos pequeños y privados para garantizar la máxima atención.",
    features: ["11 tours disponibles", "Grupos privados", "Guías Master certificados", "Seguro de viaje incluido"],
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    cta: "Ver todos los tours",
    href: "/tours",
  },
  {
    title: "Reservas de Hoteles",
    description: "Te ayudamos a encontrar y reservar el alojamiento ideal según tu presupuesto y preferencias. Trabajamos con una red de hoteles, hostales y alojamientos boutique en toda la región.",
    features: ["Hoteles boutique", "Hostales céntricos", "Lodges de aventura", "Negociamos la mejor tarifa"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    cta: "Ver hospedajes",
    href: "/hoteles",
  },
]

export default function ServiciosPage() {
  return (
    <>
      <PageBanner pageKey="servicios" backgroundImage="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1920&q=80" />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={service.title} className={`grid gap-12 lg:grid-cols-2 items-center ${index % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href={service.href}>{service.cta} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className={`relative h-80 rounded-2xl overflow-hidden shadow-lg ${index % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105" style={{ backgroundImage: `url(${service.image})` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl mb-4">¿Necesitas un servicio a medida?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">Diseñamos paquetes completos con transporte, alojamiento y tours personalizados para grupos, familias y viajeros corporativos.</p>
          <Button size="lg" variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-10" asChild>
            <Link href="/contacto">Solicitar cotización</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
