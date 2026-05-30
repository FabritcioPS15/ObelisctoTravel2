import { Plane, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Flight } from "@/lib/data/flights"

interface FlightResultsProps {
  flights: Flight[]
  isSearching: boolean
}

export function FlightResults({ flights, isSearching }: FlightResultsProps) {
  if (isSearching) {
    return (
      <div className="mt-8 text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Buscando los mejores vuelos...</p>
      </div>
    )
  }

  if (flights.length === 0) {
    return null
  }

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">
        {flights.length} vuelo{flights.length !== 1 ? "s" : ""} encontrado{flights.length !== 1 ? "s" : ""}
      </h3>

      {flights.map((flight) => (
        <div
          key={flight.id}
          className="rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Airline Info */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <Plane className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{flight.airline}</p>
                <p className="text-sm text-muted-foreground">{flight.aircraft}</p>
              </div>
            </div>

            {/* Flight Times */}
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-xl font-bold text-foreground">{flight.departureTime}</p>
                <p className="text-sm text-muted-foreground">{flight.originCode}</p>
              </div>

              <div className="flex flex-col items-center px-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{flight.duration}</span>
                </div>
                <div className="my-2 flex items-center">
                  <div className="h-px w-16 bg-border" />
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <div className="h-px w-16 bg-border" />
                </div>
                <span className="text-xs text-muted-foreground">
                  {flight.stops === 0 ? "Directo" : `${flight.stops} escala${flight.stops > 1 ? "s" : ""}`}
                </span>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-foreground">{flight.arrivalTime}</p>
                <p className="text-sm text-muted-foreground">{flight.destinationCode}</p>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Desde</p>
                <p className="text-2xl font-bold text-foreground">${flight.price}</p>
                <p className="text-xs text-muted-foreground">USD / persona</p>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Seleccionar
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Assistance CTA */}
      <div className="mt-8 rounded-xl bg-muted/50 p-6 text-center">
        <p className="text-muted-foreground">
          ¿Necesitas ayuda para reservar tu vuelo?
        </p>
        <p className="mt-1 text-foreground font-medium">
          Nuestro equipo puede gestionar tu reserva sin costo adicional.
        </p>
        <Button variant="outline" className="mt-4">
          Solicitar Asistencia
        </Button>
      </div>
    </div>
  )
}
