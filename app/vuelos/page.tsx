"use client"

import { useState } from "react"
import { FlightsHero } from "@/components/vuelos/flights-hero"
import { FlightSearchForm } from "@/components/vuelos/flight-search-form"
import { FlightResults } from "@/components/vuelos/flight-results"
import { FlightInfo } from "@/components/vuelos/flight-info"
import { mockFlights, type Flight } from "@/lib/data/flights"

export default function VuelosPage() {
  const [searchResults, setSearchResults] = useState<Flight[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (params: {
    origin: string
    destination: string
    departureDate: string
    returnDate: string
    passengers: number
  }) => {
    setIsSearching(true)
    setHasSearched(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Filter mock flights based on search params
    const filtered = mockFlights.filter(
      (flight) =>
        flight.originCode === params.origin &&
        flight.destinationCode === params.destination
    )

    setSearchResults(filtered)
    setIsSearching(false)
  }

  return (
    <>
      <FlightsHero />

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FlightSearchForm onSearch={handleSearch} />
          
          {hasSearched && (
            <FlightResults flights={searchResults} isSearching={isSearching} />
          )}
        </div>
      </section>

      <FlightInfo />
    </>
  )
}
