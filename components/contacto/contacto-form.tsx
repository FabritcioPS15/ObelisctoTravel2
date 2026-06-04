"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { DateRange } from "react-day-picker"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { DateInfoIcon } from "@/components/ui/date-info-icon"

export function ContactoForm() {
  const [date, setDate] = useState<DateRange | undefined>(undefined)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    alert("Mensaje enviado (simulación)")
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">Nombre completo *</label>
          <input type="text" id="nombre" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
          <input type="email" id="email" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" placeholder="tu@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1.5">Teléfono / WhatsApp</label>
        <input type="tel" id="telefono" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" placeholder="+51 999 999 999" />
      </div>
      <div>
        <label htmlFor="servicio" className="block text-sm font-medium text-foreground mb-1.5">Servicio de interés</label>
        <select id="servicio" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition">
          <option value="">Selecciona una opción</option>
          <option value="tour">Tour específico</option>
          <option value="paquete">Paquete turístico</option>
          <option value="transporte">Servicio de transporte</option>
          <option value="hotel">Reserva de hotel</option>
          <option value="personalizado">Itinerario personalizado</option>
        </select>
      </div>
      <div>
        <label className="flex items-center gap-1.5 text-sm font-medium text-foreground mb-1.5">Fechas de viaje tentativas <DateInfoIcon /></label>
        <DatePickerWithRange date={date} setDate={setDate} />
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1.5">Mensaje *</label>
        <textarea id="mensaje" rows={4} required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none" placeholder="Cuéntanos sobre tu viaje ideal: destinos de interés, número de personas, preferencias especiales..." />
      </div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
        Enviar mensaje
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  )
}
