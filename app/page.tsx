import { HeroSection } from "@/components/home/hero-section"
import { StorySection } from "@/components/home/story-section"
import { ExperiencesGrid } from "@/components/home/experiences-grid"
import { BenefitsSection } from "@/components/home/benefits-section"
import { ContactForm } from "@/components/home/contact-form"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <ExperiencesGrid />
      <BenefitsSection />
      <ContactForm />
    </>
  )
}
