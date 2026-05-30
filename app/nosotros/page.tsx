import Link from "next/link"
import { ArrowRight, ShieldCheck, Users, Globe, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Quiénes Somos | Obelisco Travel – Agencia de Turismo en Ayacucho",
  description:
    "Conoce Obelisco Travel: agencia de turismo local en Ayacucho, Perú. Más de 10 años llevando viajeros a descubrir la historia, naturaleza y cultura de los Andes.",
  keywords: ["agencia de turismo Ayacucho", "Obelisco Travel historia", "guías turísticos Ayacucho", "turismo responsable Perú"],
}

const values = [
  { icon: Heart, title: "Pasión por el territorio", description: "Nacimos y crecemos en Ayacucho. Conocemos cada cerro, cada comunidad y cada historia que hace única a nuestra región." },
  { icon: ShieldCheck, title: "Seguridad ante todo", description: "Protocolos rigurosos, equipos certificados de alta montaña y seguros de viaje incluidos en todos nuestros servicios." },
  { icon: Users, title: "Guías Master Certificados", description: "Formación técnica, conocimiento cultural profundo y años de experiencia en el campo." },
  { icon: Globe, title: "Turismo sostenible", description: "Trabajamos con comunidades locales y reinvertimos en el desarrollo del destino." },
]

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "500+", label: "Viajeros satisfechos" },
  { value: "11", label: "Tours activos" },
  { value: "100%", label: "Grupos privados" },
]

export default function NosotrosPage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')" }}>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">Nuestra historia</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Quiénes Somos</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">Somos Obelisco Travel, una agencia de turismo local con alma ayacuchana, creada para mostrarle al mundo la magia de los Andes peruanos.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl mb-6">No vendemos tours. Creamos recuerdos que duran toda la vida.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Obelisco Travel nació en Ayacucho con una convicción simple: el turismo debe ser una puerta de conexión genuina entre las personas y el territorio. No somos una oficina de reservas; somos guías, conocedores y apasionados del Perú profundo.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">Cada tour lleva décadas de conocimiento local, el rigor de guías certificados y el compromiso con las comunidades que hacen posible esta experiencia.</p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/tours">Ver nuestros tours <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80')" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-primary-foreground">
                <div className="text-5xl font-bold tracking-tight">{s.value}</div>
                <div className="mt-2 text-sm font-medium opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Nuestros Valores</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Los principios que guían cada expedición.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center bg-card border border-border rounded-2xl p-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">¿Listo para explorar Ayacucho?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Contáctanos y diseñemos juntos la aventura perfecta para ti.</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10" asChild>
            <Link href="/contacto">Contáctenos</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
