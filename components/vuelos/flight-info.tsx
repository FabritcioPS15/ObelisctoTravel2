import { Plane, Info, MapPin } from "lucide-react"
import { flightInfo } from "@/lib/data/flights"

export function FlightInfo() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Airport Info */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Aeropuerto de Destino
              </h3>
            </div>
            <p className="font-medium text-foreground">{flightInfo.mainAirport.name}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Código: {flightInfo.mainAirport.code} | {flightInfo.mainAirport.distance}
            </p>
            <div className="mt-4">
              <p className="text-sm font-medium text-foreground mb-2">Servicios de transporte:</p>
              <div className="flex flex-wrap gap-2">
                {flightInfo.mainAirport.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Operators */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Plane className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Aerolíneas que Operan
              </h3>
            </div>
            <div className="space-y-4">
              {flightInfo.operators.map((operator) => (
                <div key={operator.name} className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-foreground">{operator.name}</p>
                    <p className="text-sm text-muted-foreground">{operator.routes}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {operator.frequency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Info className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Tips para tu Viaje
            </h3>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {flightInfo.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
