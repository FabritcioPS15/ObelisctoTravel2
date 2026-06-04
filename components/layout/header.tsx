"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Globe, Compass, Car, Map as MapIcon, Building, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLang, type Locale } from "@/lib/store/lang"

const languages: { code: Locale; label: string }[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
]

import { t } from "@/lib/i18n/translations"

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

  const tr = t(locale);
  const navigation = [
    { name: tr.nav.home, href: "/" },
    { name: tr.nav.about, href: "/nosotros" },
    {
      name: tr.nav.services, href: "/servicios",
      megaMenu: true,
      submenu: [
        {
          name: tr.transporte?.heroBadge || "Transporte",
          href: "/servicios/transporte",
          description: locale === "en" ? "Private and group transfers." : locale === "pt" ? "Translados privados." : "Traslados privados y grupales.",
          icon: Car
        },
        {
          name: tr.nav.tours,
          href: "/tours",
          description: locale === "en" ? "Explore our guided excursions." : locale === "pt" ? "Explore nossas excursões." : "Explora nuestras excursiones.",
          icon: MapIcon
        },
        {
          name: locale === "en" ? "Hotels" : locale === "pt" ? "Hotéis" : "Hoteles",
          href: "/hoteles",
          description: locale === "en" ? "Comfortable stays." : locale === "pt" ? "Estadias confortáveis." : "Estancias cómodas y seguras.",
          icon: Building
        },
      ],
    },
    { name: tr.nav.packages, href: "/paquetes" },
    { name: tr.nav.tours, href: "/tours" },
    { name: tr.nav.flights, href: "/vuelos" },
  ];

  const currentLang = languages.find((l) => l.code === locale)!

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/60 backdrop-blur-md shadow-sm py-1.5 border-b border-border/40"
        : "bg-background py-2 border-b border-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 lg:px-8 relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image src="/Logo.png" alt="Obelisco Travel" width={100} height={100} className="h-20 w-auto transition-transform duration-300 group-hover:scale-110" />
          </div>
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
                className="group relative flex items-center gap-1.5 text-base font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:text-primary" />
                )}
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
              </Link>

              {/* Dropdown with animation */}
              <AnimatePresence>
                {item.submenu && openSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 ${item.megaMenu ? "w-[600px]" : "w-[240px]"}`}
                  >
                    {item.megaMenu ? (
                      <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl overflow-hidden flex">
                        {/* Image Side */}
                        <div className="w-1/3 bg-muted relative p-6 flex flex-col justify-end overflow-hidden group/mega">
                          <img
                            src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Services"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/mega:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                          <div className="relative z-10">
                            <h4 className="text-white font-bold text-lg mb-1">{tr.nav.services}</h4>
                            <p className="text-white/80 text-xs mb-3">
                              {locale === "en" ? "Discover all our specialized options." : locale === "pt" ? "Descubra todas as nossas opções." : "Descubre todas nuestras opciones especializadas."}
                            </p>
                            <Link href="/servicios" className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:text-white transition-colors">
                              {locale === "en" ? "View all" : locale === "pt" ? "Ver todos" : "Ver todos"} <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                        {/* List Side */}
                        <div className="w-2/3 p-4 grid gap-2">
                          {item.submenu.map((sub: any) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="group/link flex items-start gap-4 rounded-xl p-3 hover:bg-primary/5 transition-colors"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background shadow-sm border border-border/50 group-hover/link:bg-primary group-hover/link:text-white group-hover/link:border-primary transition-colors text-primary">
                                <sub.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <h5 className="text-sm font-bold text-foreground group-hover/link:text-primary transition-colors">
                                  {sub.name}
                                </h5>
                                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                  {sub.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl py-3 min-w-[240px] overflow-hidden">
                        {item.submenu.map((sub: any) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="relative block px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary hover:pl-6"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
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
              className="flex items-center gap-2 rounded-xl border border-border/50 bg-background/50 px-3.5 py-2 text-sm font-bold text-foreground shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md"
            >
              <Globe className="h-4 w-4 text-primary" />
              <span className="uppercase tracking-widest">{currentLang.code}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Language Dropdown */}
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-3 z-50 w-48"
                >
                  <div className="rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-xl p-1.5">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLocale(lang.code); setLangOpen(false) }}
                        className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${locale === lang.code
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-foreground hover:bg-muted"
                          }`}
                      >
                        <span className="flex-1 text-left">{lang.label}</span>
                        {locale === lang.code && <span className="text-primary-foreground">✓</span>}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contacto">
            <Button className="rounded-xl bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-primary/30">
              {tr.cta.contactUs}
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden relative z-50 inline-flex items-center justify-center rounded-xl p-2.5 text-foreground transition-colors hover:bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Abrir menú</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 right-0 lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl pt-24 pb-6 px-4"
          >
            <div className="space-y-1">
              {navigation.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  key={item.name}
                  className="rounded-xl overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 py-3.5 px-4 text-lg font-bold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                        className="p-3.5 hover:bg-primary/5 rounded-lg transition-colors"
                      >
                        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openSubmenu === item.name ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {item.submenu && openSubmenu === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-muted/20"
                      >
                        <div className="px-6 py-3 space-y-1 border-l-2 border-primary/20 ml-5 my-2">
                          {item.submenu.map((sub) => (
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-6 border-t border-border/50"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2 px-2">
                  <Globe className="h-4 w-4" />
                  {locale === "es" ? "Idioma" : locale === "en" ? "Language" : "Idioma"}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLocale(lang.code); setMobileMenuOpen(false) }}
                      className={`flex items-center justify-center rounded-xl py-3 text-sm font-bold transition-all duration-200 ${locale === lang.code
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted/50 text-foreground hover:bg-muted"
                        }`}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-xl bg-primary py-6 text-base font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-transform active:scale-95">
                    {tr.cta.contactUs}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
