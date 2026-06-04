import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { PageBanner } from "@/components/ui/page-banner"
import { ContactoForm } from "@/components/contacto/contacto-form"

export const metadata = {
  title: "Contáctenos | Obelisco Travel – Tours en Ayacucho, Perú",
  description:
    "Comunícate con Obelisco Travel para reservar tours, paquetes turísticos y servicios de transporte en Ayacucho, Perú. Respondemos por WhatsApp, email y teléfono.",
  keywords: ["contacto Obelisco Travel", "reservar tour Ayacucho", "agencia turismo Ayacucho contacto", "WhatsApp turismo Perú"],
}

const contactInfo = [
  { icon: Phone, label: "Teléfono / WhatsApp", value: "+51 999 999 999", href: "https://wa.me/51999999999" },
  { icon: Mail, label: "Email", value: "info@obeliscotravel.pe", href: "mailto:info@obeliscotravel.pe" },
  { icon: MapPin, label: "Dirección", value: "Jr. Lima 123, Ayacucho, Perú", href: "#" },
  { icon: Clock, label: "Horario de atención", value: "Lun–Sáb: 8:00 am – 7:00 pm", href: "#" },
]

export default function ContactoPage() {
  return (
    <>
      <PageBanner pageKey="contacto" backgroundImage="https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1920&q=80" className="h-[45vh] min-h-[350px]" />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <ScrollAnimation delay={0.1}>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">Envíanos un mensaje</h2>
              <p className="text-muted-foreground mb-8">Cuéntanos sobre tu viaje ideal y te respondemos con una propuesta personalizada.</p>

              <ContactoForm />
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation delay={0.2} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">Información de contacto</h2>
                <p className="text-muted-foreground">También puedes contactarnos directamente por cualquiera de estos medios.</p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a key={item.label} href={item.href} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary transition-colors group">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">¿Prefieres WhatsApp?</h3>
                <p className="text-sm text-muted-foreground mb-4">Escríbenos directamente y te respondemos al instante. ¡Es el método más rápido!</p>
                <a
                  href="https://wa.me/51999999999?text=Hola, quiero información sobre sus tours y servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#20b858] transition-colors"
                >
                  Escribir por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}
