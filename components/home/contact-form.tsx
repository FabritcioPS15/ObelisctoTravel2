"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Mail } from "lucide-react"

const destinations = [
  "Ayacucho",
  "Cusco",
  "Valle Sagrado",
  "Ausangate",
  "Choquequirao",
  "Otro destino",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("¡Gracias! Nos pondremos en contacto contigo pronto.")
  }

  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl text-balance">
              Tu próxima aventura comienza aquí.
            </h2>
            <p className="mt-6 text-lg text-background/80 leading-relaxed">
              Déjanos tus datos y un especialista se pondrá en contacto contigo para
              diseñar una propuesta a la medida de tus expectativas.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-background/60">
                    BASE DE OPERACIONES
                  </p>
                  <p className="text-background">Ayacucho, Peru</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-background/60">
                    CONTACTO DIRECTO
                  </p>
                  <p className="text-background">concierge@obeliscotravel.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-background/80 mb-2"
                  >
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-background/80 mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-background/80 mb-2"
                  >
                    Destino de Interés
                  </label>
                  <Select name="destination">
                    <SelectTrigger className="bg-background/10 border-background/20 text-background">
                      <SelectValue placeholder="Selecciona un destino" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((dest) => (
                        <SelectItem key={dest} value={dest.toLowerCase()}>
                          {dest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="travelers"
                    className="block text-sm font-medium text-background/80 mb-2"
                  >
                    N° de Viajeros
                  </label>
                  <Input
                    id="travelers"
                    name="travelers"
                    type="number"
                    min="1"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                    placeholder="2"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-background/80 mb-2"
                >
                  Mensaje o Detalles del Viaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary resize-none"
                  placeholder="Cuéntanos sobre tu viaje ideal..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "ENVIANDO..."
                  : "QUIERO MI EXPERIENCIA PERSONALIZADA"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
