"use client"

import { useState, useMemo } from "react"
import { HotelsHero } from "@/components/hoteles/hotels-hero"
import { HotelsFilters } from "@/components/hoteles/hotels-filters"
import { HotelCard } from "@/components/hoteles/hotel-card"
import { hotels } from "@/lib/data/hotels"

export default function HotelesPage() {
  const [selectedZone, setSelectedZone] = useState("Todos")
  const [selectedType, setSelectedType] = useState("all")

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const matchesZone = selectedZone === "Todos" || hotel.zone === selectedZone
      const matchesType = selectedType === "all" || hotel.type === selectedType
      return matchesZone && matchesType
    })
  }, [selectedZone, selectedType])

  return (
    <>
      <HotelsHero />

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Filters */}
          <HotelsFilters
            selectedZone={selectedZone}
            selectedType={selectedType}
            onZoneChange={setSelectedZone}
            onTypeChange={setSelectedType}
          />

          {/* Results Count */}
          <p className="mt-8 text-sm text-muted-foreground">
            {filteredHotels.length} hospedaje{filteredHotels.length !== 1 ? "s" : ""}{" "}
            encontrado{filteredHotels.length !== 1 ? "s" : ""}
          </p>

          {/* Hotels Grid */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          {/* Empty State */}
          {filteredHotels.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground">
                No se encontraron hospedajes con los filtros seleccionados.
              </p>
              <button
                onClick={() => {
                  setSelectedZone("Todos")
                  setSelectedType("all")
                }}
                className="mt-4 text-primary hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
