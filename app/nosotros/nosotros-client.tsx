"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { PageBanner } from "@/components/ui/page-banner";
import { useLang } from "@/lib/store/lang";
import { t } from "@/lib/i18n/translations";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export default function NosotrosClient() {
  const { locale } = useLang();
  const translations = t(locale);
  const { nosotros } = translations;

  const values = [
    { icon: Heart, title: nosotros.values.passion.title, description: nosotros.values.passion.desc },
    { icon: ShieldCheck, title: nosotros.values.security.title, description: nosotros.values.security.desc },
    { icon: Users, title: nosotros.values.guides.title, description: nosotros.values.guides.desc },
    { icon: Globe, title: nosotros.values.sustainability.title, description: nosotros.values.sustainability.desc },
  ];

  const stats = [
    { value: "10+", label: nosotros.stats.exp },
    { value: "500+", label: nosotros.stats.travelers },
    { value: "11", label: nosotros.stats.tours },
    { value: "100%", label: nosotros.stats.private },
  ];

  return (
    <>
      <PageBanner pageKey="nosotros" backgroundImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80" />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <ScrollAnimation delay={0.1}>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl mb-6">
                {nosotros.heroTitle}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {nosotros.heroP1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {nosotros.heroP2}
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/tours">
                  {nosotros.btnTours} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2} className="relative h-96 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80')" }} />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-primary-foreground">
                <div className="text-5xl font-bold tracking-tight">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="mt-2 text-sm font-medium opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {nosotros.valuesTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {nosotros.valuesSubtitle}
              </p>
            </ScrollAnimation>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ScrollAnimation key={v.title} delay={i * 0.1} className="text-center bg-card border border-border rounded-2xl p-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <ScrollAnimation className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
            {nosotros.ctaTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            {nosotros.ctaDesc}
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10" asChild>
            <Link href="/contacto">{nosotros.btnContact}</Link>
          </Button>
        </ScrollAnimation>
      </section>
    </>
  );
}
