"use client"

import Link from "next/link"
import { useLang } from "@/lib/store/lang"
import { t } from "@/lib/i18n/translations"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const { locale } = useLang()
  const tr = t(locale)

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 mt-auto">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-secondary">
              Obelisco Travel
            </Link>
            <p className="text-white/80 leading-relaxed text-sm">
              {tr.footer.description}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-white mb-4">{tr.footer.explore}</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-secondary transition-colors text-sm">{tr.nav.home}</Link></li>
              <li><Link href="/nosotros" className="text-white/70 hover:text-secondary transition-colors text-sm">{tr.nav.about}</Link></li>
              <li><Link href="/tours" className="text-white/70 hover:text-secondary transition-colors text-sm">{tr.nav.tours}</Link></li>
              <li><Link href="/paquetes" className="text-white/70 hover:text-secondary transition-colors text-sm">{tr.nav.packages}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">{tr.footer.support}</h3>
            <ul className="space-y-3">
              <li><Link href="/contacto" className="text-white/70 hover:text-secondary transition-colors text-sm">{tr.nav.contact}</Link></li>
              <li><Link href="/seguridad" className="text-white/70 hover:text-secondary transition-colors text-sm">{tr.footer.safety}</Link></li>
              <li><Link href="/sostenibilidad" className="text-white/70 hover:text-secondary transition-colors text-sm">{tr.footer.sustainability}</Link></li>
              <li><Link href="/terminos" className="text-white/70 hover:text-secondary transition-colors text-sm">{tr.footer.terms}</Link></li>
              <li><Link href="/privacidad" className="text-white/70 hover:text-secondary transition-colors text-sm">{tr.footer.privacy}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">{tr.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>Jr. Lima 123, Ayacucho, Perú</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>+51 999 999 999</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>info@obeliscotravel.pe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} Obelisco Travel. {tr.footer.rights}.
          </p>
          <p className="text-sm font-medium text-secondary">
            {tr.footer.masterGuide}
          </p>
        </div>
      </div>
    </footer>
  )
}
