import { GuidesHero } from "@/components/guias/guides-hero"
import { GuideCard } from "@/components/guias/guide-card"
import { CertificationsSection } from "@/components/guias/certifications-section"
import { guides } from "@/lib/data/guides"

export const metadata = {
  title: "Nuestros Guías | Obelisco Travel",
  description:
    "Conoce a los Master Guides de Obelisco Travel. Expertos locales certificados internacionalmente para guiar tus aventuras en los Andes.",
}

export default function GuiasPage() {
  return (
    <>
      <GuidesHero />

      {/* Guides Grid */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      <CertificationsSection />
    </>
  )
}
