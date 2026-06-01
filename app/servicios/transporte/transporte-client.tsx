"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/store/lang";
import { t } from "@/lib/i18n/translations";

const vehicles = [
  {
    name: "Sedán Privado",
    capacity: "1–3 pasajeros",
    ideal: "City tour, traslados cortos",
    image: "/images/transport/sedan.jpg",
  },
  {
    name: "Van Privada",
    capacity: "4–8 pasajeros",
    ideal: "Tours familiares, grupos pequeños",
    image: "/images/transport/van.jpg",
  },
  {
    name: "4x4 Todo Terreno",
    capacity: "1–5 pasajeros",
    ideal: "Rutas de aventura, montaña, cascadas",
    image: "/images/transport/4x4.jpg",
  },
  {
    name: "Bus Turístico",
    capacity: "9–20 pasajeros",
    ideal: "Grupos, corporativos, escolares",
    image: "/images/transport/bus.jpg",
  },
];

const features = [
  "Conductores con licencia profesional y experiencia en rutas andinas",
  "Vehículos con seguro vehicular y seguro de pasajeros",
  "GPS en tiempo real y monitoreo de ruta",
  "Servicio 24/7 para emergencias",
  "Agua embotellada y botiquín de primeros auxilios",
  "Coordinación con guías turísticos certificados",
];

export default function TransporteClient() {
  const { locale } = useLang();
  const tr = t(locale).transporte;
  return (
    <>
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
            {tr.heroBadge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {tr.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            {tr.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                {tr.sectionTitle}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {tr.sectionDescription}
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a
                  href="https://wa.me/51999999999?text=Hola, necesito información sobre transporte turístico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tr.ctaButton} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {vehicles.map((v) => (
                <div key={v.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <Image src={v.image} alt={v.name} width={200} height={150} className="object-cover rounded-md mb-3" />
                  <h3 className="text-base font-bold text-foreground mb-1">{v.name}</h3>
                  <p className="text-xs font-medium text-primary mb-2">{v.capacity}</p>
                  <p className="text-sm text-muted-foreground">{v.ideal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
            {tr.ctaTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            {tr.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10" asChild>
              <Link href="/contacto">{tr.ctaQuote}</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-10" asChild>
              <Link href="/tours">{tr.ctaTours}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
