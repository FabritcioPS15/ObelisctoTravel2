"use client";

import { useLang } from "@/lib/store/lang";
import { t } from "@/lib/i18n/translations";

interface PageBannerProps {
  pageKey: "nosotros" | "servicios" | "paquetes" | "tours" | "contacto" | "hoteles" | "vuelos";
  backgroundImage: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageBanner({ pageKey, backgroundImage, className = "h-[55vh] min-h-[400px]", children }: PageBannerProps) {
  const { locale } = useLang();
  const banner = t(locale).banners[pageKey];

  return (
    <section className={`relative flex items-center justify-center overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto mt-16">
        {"badge" in banner && banner.badge && (
          <span className="inline-block mb-4 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
            {banner.badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 drop-shadow-md">
          {banner.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow">
          {banner.subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
