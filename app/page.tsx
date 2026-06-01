import { HeroSection } from "@/components/home/hero-section"
import { StorySection } from "@/components/home/story-section"
import { ExperiencesGrid } from "@/components/home/experiences-grid"
import { BenefitsSection } from "@/components/home/benefits-section"
import { ContactForm } from "@/components/home/contact-form"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollAnimation delay={0.1}>
        <StorySection />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <ExperiencesGrid />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <BenefitsSection />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <ContactForm />
      </ScrollAnimation>
    </>
  )
}
