import { AventuraHero } from "@/components/aventura/aventura-hero"
import { ModalitiesGrid } from "@/components/aventura/modalities-grid"

export const metadata = {
  title: "Aventura | Obelisco Travel",
  description:
    "Trekking, rappel, senderismo y campamentos en los Andes peruanos. Desafía tus límites con guías expertos certificados.",
}

export default function AventuraPage() {
  return (
    <>
      <AventuraHero />
      <ModalitiesGrid />
    </>
  )
}
