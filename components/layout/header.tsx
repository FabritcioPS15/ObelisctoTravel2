"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Globe, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLang, type Locale } from "@/lib/store/lang"

const languages: { code: Locale; label: string }[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
]

const navItems: Record<Locale, { name: string; href: string; submenu?: { name: string; href: string }[] }[]> = {
  es: [
    { name: "Inicio", href: "/" },
    { name: "Quiénes Somos", href: "/nosotros" },
    {
      name: "Servicios", href: "/servicios",
      submenu: [
        { name: "Servicio de transporte", href: "/servicios/transporte" },
        { name: "Tours", href: "/tours" },
        { name: "Reservas de hoteles", href: "/hoteles" },
      ],
    },
    { name: "Paquetes Turísticos", href: "/paquetes" },
    { name: "Tours", href: "/tours" },
    { name: "Vuelos", href: "/vuelos" },
  ],
  en: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/nosotros" },
    {
      name: "Services", href: "/servicios",
      submenu: [
        { name: "Transport service", href: "/servicios/transporte" },
        { name: "Tours", href: "/tours" },
        { name: "Hotel reservations", href: "/hoteles" },
      ],
    },
    { name: "Tour Packages", href: "/paquetes" },
    { name: "Tours", href: "/tours" },
    { name: "Flights", href: "/vuelos" },
  ],
  pt: [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/nosotros" },
    {
      name: "Serviços", href: "/servicios",
      submenu: [
        { name: "Serviço de transporte", href: "/servicios/transporte" },
        { name: "Tours", href: "/tours" },
        { name: "Reservas de hotéis", href: "/hoteles" },
      ],
    },
    { name: "Pacotes Turísticos", href: "/paquetes" },
    { name: "Tours", href: "/tours" },
    { name: "Voos", href: "/vuelos" },
  ],
}

const contactLabel: Record<Locale, string> = {
  es: "Contáctenos",
  en: "Contact Us",
  pt: "Fale Conosco",
}

export function Header() {
  const { locale, setLocale } = useLang()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll effect for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = navItems[locale]
  const currentLang = languages.find((l) => l.code === locale)!

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md py-2 border-b border-border/40" 
          : "bg-background/80 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
            <Compass className="h-6 w-6" />
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Obelisco Travel
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative py-2"
              onMouseEnter={() => item.submenu && setOpenSubmenu(item.name)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <Link
                href={item.href}
                className="group relative flex items-center gap-1.5 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:text-primary" />
                )}
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
              </Link>

              {/* Dropdown with animation */}
              {item.submenu && openSubmenu === item.name && (
                <div className="absolute left-0 top-full pt-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                  <div className="bg-background/95 backdrop-blur-lg border border-border/50 rounded-2xl shadow-xl py-3 min-w-[220px] overflow-hidden">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="relative block px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary hover:pl-6"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-5">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              onBlur={() => setTimeout(() => setLangOpen(false), 200)}
              className="flex items-center gap-2 rounded-xl border border-border/50 bg-background/50 px-3.5 py-2 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md"
            >
              <Globe className="h-4 w-4 text-primary" />
              <span className="uppercase tracking-widest">{currentLang.code}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Language Dropdown */}
            {langOpen && (
              <div className="absolute right-0 top-full mt-3 z-50 w-48 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="rounded-2xl border border-border/50 bg-background/95 backdrop-blur-lg shadow-xl p-1.5">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLocale(lang.code); setLangOpen(false) }}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                        locale === lang.code 
                          ? "bg-primary text-primary-foreground shadow-md" 
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span className="flex-1 text-left">{lang.label}</span>
                      {locale === lang.code && <span className="text-primary-foreground">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/contacto">
            <Button className="rounded-xl bg-primary px-6 py-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-primary/30">
              {contactLabel[locale]}
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 text-foreground transition-colors hover:bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Abrir menú</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[800px] opacity-100 border-t border-border/50" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md px-4 py-6 shadow-inner">
          <div className="space-y-2">
            {navigation.map((item) => (
              <div key={item.name} className="rounded-xl overflow-hidden">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="flex-1 py-3 px-4 text-base font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button 
                      onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)} 
                      className="p-3 hover:bg-primary/5 rounded-lg transition-colors"
                    >
                      <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openSubmenu === item.name ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Submenu */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-muted/30 ${
                    openSubmenu === item.name ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-2 space-y-1 border-l-2 border-primary/20 ml-4 my-2">
                    {item.submenu?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile Language Switcher */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2 px-2">
                <Globe className="h-4 w-4" />
                {locale === "es" ? "Idioma" : locale === "en" ? "Language" : "Idioma"}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLocale(lang.code); setMobileMenuOpen(false) }}
                    className={`flex items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${
                      locale === lang.code 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "bg-muted/50 text-foreground hover:bg-muted"
                    }`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full rounded-xl bg-primary py-6 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:scale-95">
                  {contactLabel[locale]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
