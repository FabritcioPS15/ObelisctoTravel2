import Link from "next/link"

const footerLinks = [
  { name: "Destinations", href: "/destinos" },
  { name: "Safety Protocols", href: "/seguridad" },
  { name: "Sustainability", href: "/sostenibilidad" },
  { name: "Terms of Service", href: "/terminos" },
  { name: "Privacy Policy", href: "/privacidad" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold text-foreground">
              Obelisco Travel
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Obelisco Travel. Ayacucho,
            </p>
            <p className="text-sm text-muted-foreground">
              Peru. Master Guide of the Andes.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
