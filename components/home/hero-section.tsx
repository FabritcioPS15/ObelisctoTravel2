"use client";

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useLang } from "@/lib/store/lang"
import { t } from "@/lib/i18n/translations"

export function HeroSection() {
  const { locale } = useLang();
  const translations = t(locale).homeHero;

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance">
          {translations.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl leading-relaxed">
          {translations.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            asChild
          >
            <Link href="/contacto">
              {translations.planButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white/10 px-8"
            asChild
          >
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {translations.whatsappButton}
            </a>
          </Button>
        </div>
      </div>

      {/* Decorative climber image overlay positioned on the right */}
      <div
        className="absolute right-0 top-0 h-full w-1/3 bg-cover bg-right hidden lg:block"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80')",
          maskImage: "linear-gradient(to left, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 50%, transparent 100%)",
        }}
      />
    </section>
  )
}
