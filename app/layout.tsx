import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp'
import './globals.css'

const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'Obelisco Travel | Tours Privados y Aventura en Perú',
  description: 'Experiencias de viaje auténticas en Ayacucho y el Perú. Tours privados, trekking, aventura y conexión con la cultura andina. Master Guides certificados.',
  keywords: ['Ayacucho', 'Perú', 'tours privados', 'trekking', 'aventura', 'andes', 'viajes'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        type: 'image/png',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
