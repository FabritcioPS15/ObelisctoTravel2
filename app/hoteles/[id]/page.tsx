import { hotels } from "@/lib/data/hotels"
import { HotelDetailClient } from "@/components/hoteles/hotel-detail-client"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return hotels.map((h) => ({ id: h.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const hotel = hotels.find((h) => h.id === resolvedParams.id)
  if (!hotel) return {}
  const tr = hotel.translations.es
  return {
    title: `${tr.name} | Obelisco Travel`,
    description: tr.description,
  }
}

export default async function HotelPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const hotel = hotels.find((h) => h.id === resolvedParams.id)
  if (!hotel) notFound()
  return <HotelDetailClient hotel={hotel} />
}
