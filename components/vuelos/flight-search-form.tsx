"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, ArrowRightLeft, Users, Calendar } from "lucide-react"
import { cities } from "@/lib/data/flights"

import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { DateInfoIcon } from "@/components/ui/date-info-icon"
import { DateRange } from "react-day-picker"

interface FlightSearchFormProps {
  onSearch: (params: {
    origin: string
    destination: string
    departureDate: string
    returnDate: string
    passengers: number
  }) => void
}

export function FlightSearchForm({ onSearch }: FlightSearchFormProps) {
  const [origin, setOrigin] = useState("LIM")
  const [destination, setDestination] = useState("AYP")
  const [date, setDate] = useState<DateRange | undefined>(undefined)
  const [passengers, setPassengers] = useState("2")

  const handleSwap = () => {
    const temp = origin
    setOrigin(destination)
    setDestination(temp)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch({
      origin,
      destination,
      departureDate: date?.from?.toISOString() || "",
      returnDate: date?.to?.toISOString() || "",
      passengers: parseInt(passengers),
    })
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Origin */}
          <div className="relative">
            <label className="mb-2 block text-sm font-medium text-foreground">
              Origen
            </label>
            <Select value={origin} onValueChange={setOrigin}>
              <SelectTrigger>
                <SelectValue placeholder="Ciudad de origen" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.code} value={city.code}>
                    {city.name} ({city.code})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Swap Button - visible on larger screens */}
          <div className="hidden lg:flex items-end justify-center pb-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={handleSwap}
              className="rounded-full"
            >
              <ArrowRightLeft className="h-4 w-4" />
            </Button>
          </div>

          {/* Destination */}
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Destino
            </label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger>
                <SelectValue placeholder="Ciudad de destino" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.code} value={city.code}>
                    {city.name} ({city.code})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Range */}
          <div>
            <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-foreground">
              Fechas de viaje <DateInfoIcon />
            </label>
            <DatePickerWithRange date={date} setDate={setDate} />
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full sm:w-48">
            <label className="mb-2 block text-sm font-medium text-foreground">
              Pasajeros
            </label>
            <div className="relative">
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="pl-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "pasajero" : "pasajeros"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Search className="mr-2 h-4 w-4" />
            Buscar Vuelos
          </Button>
        </div>
      </form>
    </div>
  )
}
