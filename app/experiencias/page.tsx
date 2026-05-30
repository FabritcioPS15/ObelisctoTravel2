import { ToursHero } from "@/components/tours/tours-hero"
import { WhyPrivateTour } from "@/components/tours/why-private-tour"
import { DesignProcess } from "@/components/tours/design-process"
import { InspirationCards } from "@/components/tours/inspiration-cards"
import { ToursContactForm } from "@/components/tours/tours-contact-form"

export const metadata = {
  title: "Tours Privados | Obelisco Travel",
  description:
    "Diseñamos itinerarios exclusivos a tu medida. Tours privados en Perú con guías expertos, flexibilidad total y experiencias VIP.",
}

export default function ExperienciasPage() {
  return (
    <>
      <ToursHero />
      <WhyPrivateTour />
      <DesignProcess />
      <InspirationCards />
      <ToursContactForm />
    </>
  )
}
