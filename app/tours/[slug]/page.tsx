import { tours } from "@/lib/data/tours"
import { TourDetailClient } from "@/components/tours/tour-detail-client"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const tour = tours.find((t) => t.slug === resolvedParams.slug)
  if (!tour) return {}
  const tr = tour.translations.es
  return {
    title: `${tr.name} | Obelisco Travel`,
    description: tr.description,
  }
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const tour = tours.find((t) => t.slug === resolvedParams.slug)
  if (!tour) notFound()
  return <TourDetailClient tour={tour} />
}
