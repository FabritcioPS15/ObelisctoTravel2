import { ToursHero } from "@/components/tours/tours-hero"
import { WhyPrivateTour } from "@/components/tours/why-private-tour"
import { DesignProcess } from "@/components/tours/design-process"
import { InspirationCards } from "@/components/tours/inspiration-cards"
import { ToursContactForm } from "@/components/tours/tours-contact-form"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export const metadata = {
  title: "Tours Privados | Obelisco Travel",
  description:
    "Diseñamos itinerarios exclusivos a tu medida. Tours privados en Perú con guías expertos, flexibilidad total y experiencias VIP.",
}

export default function ExperienciasPage() {
  return (
    <>
      <ToursHero />
      <ScrollAnimation delay={0.1}>
        <WhyPrivateTour />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <DesignProcess />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <InspirationCards />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <ToursContactForm />
      </ScrollAnimation>
    </>
  )
}
