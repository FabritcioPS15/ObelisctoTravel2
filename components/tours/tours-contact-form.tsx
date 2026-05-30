"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ToursContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("¡Gracias! Nos pondremos en contacto contigo pronto.")
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-2xl px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Comienza a trazar tu ruta
        </h2>
        <p className="mt-4 text-muted-foreground">
          Déjanos tus datos y uno de nuestros Master Guides se pondrá en contacto
          contigo en las próximas 24 horas para comenzar a diseñar tu experiencia privada.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <Input
            name="name"
            placeholder="Nombre completo"
            required
            className="bg-background"
          />
          <Input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            required
            className="bg-background"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "ENVIANDO..." : "SOLICITA TU ITINERARIO PRIVADO"}
          </Button>
        </form>
      </div>
    </section>
  )
}
