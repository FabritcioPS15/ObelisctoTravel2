"use client";

import { Headset, Users, ShieldCheck, Heart } from "lucide-react"
import { useLang } from "@/lib/store/lang"
import { t } from "@/lib/i18n/translations"

export function BenefitsSection() {
  const { locale } = useLang();
  const translations = t(locale).benefitsSection;

  const benefits = [
    {
      icon: Headset,
      title: translations.items.attention.title,
      description: translations.items.attention.desc,
    },
    {
      icon: Users,
      title: translations.items.guides.title,
      description: translations.items.guides.desc,
    },
    {
      icon: ShieldCheck,
      title: translations.items.security.title,
      description: translations.items.security.desc,
    },
    {
      icon: Heart,
      title: translations.items.authenticity.title,
      description: translations.items.authenticity.desc,
    },
  ]

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {translations.title}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <benefit.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
