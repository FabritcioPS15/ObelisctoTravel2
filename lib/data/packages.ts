import type { Locale } from "@/lib/store/lang"

export interface PackageTranslation {
  name: string
  duration: string
  description: string
  longDescription: string
  includes: string[]
  badge: string
}

export interface Package {
  slug: string
  price: number
  image: string
  images: string[]
  translations: Record<Locale, PackageTranslation>
}

export const packages: Package[] = [
  {
    slug: "paquete-esencial-ayacucho",
    price: 180,
    image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    ],
    translations: {
      es: {
        name: "Paquete Esencial Ayacucho",
        duration: "2 días / 1 noche",
        description: "El paquete perfecto para conocer los principales atractivos de la ciudad en un fin de semana. Ideal para viajeros que buscan una introducción a Ayacucho.",
        longDescription: "Diseñado para aquellos que visitan Ayacucho por primera vez. Tendrás la oportunidad de recorrer el caso histórico de la ciudad de las 33 iglesias y disfrutar de un tour guiado por los lugares más icónicos.",
        includes: ["City Tour Ayacucho", "Traslado al aeropuerto", "1 noche hospedaje 3 estrellas", "Desayuno incluido", "Guía bilingüe"],
        badge: "Más popular",
      },
      en: {
        name: "Ayacucho Essential Package",
        duration: "2 days / 1 night",
        description: "The perfect package to know the main attractions of the city in a weekend. Ideal for travelers looking for an introduction to Ayacucho.",
        longDescription: "Designed for those visiting Ayacucho for the first time. You will have the opportunity to tour the historic center of the city of 33 churches and enjoy a guided tour of the most iconic places.",
        includes: ["Ayacucho City Tour", "Airport transfer", "1 night 3-star hotel", "Breakfast included", "Bilingual guide"],
        badge: "Most popular",
      },
      pt: {
        name: "Pacote Essencial Ayacucho",
        duration: "2 dias / 1 noite",
        description: "O pacote perfeito para conhecer as principais atrações da cidade em um fim de semana. Ideal para viajantes que buscam uma introdução a Ayacucho.",
        longDescription: "Projetado para quem visita Ayacucho pela primeira vez. Você terá a oportunidade de passear pelo centro histórico da cidade de 33 igrejas e desfrutar de uma visita guiada pelos lugares mais icônicos.",
        includes: ["City Tour Ayacucho", "Translado para o aeroporto", "1 noite de hospedagem 3 estrelas", "Café da manhã incluso", "Guia bilíngue"],
        badge: "Mais popular",
      }
    }
  },
  {
    slug: "paquete-historico-cultural",
    price: 320,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    ],
    translations: {
      es: {
        name: "Paquete Histórico Cultural",
        duration: "3 días / 2 noches",
        description: "Descubre la profundidad histórica de Ayacucho: Wari, Quinua, Vilcashuamán y el casco histórico. Un viaje por los milenios que forjaron el Perú.",
        longDescription: "Un viaje en el tiempo. Exploraremos las ruinas del imperio Wari, caminaremos por la Pampa de la Quinua donde se selló la independencia, y visitaremos Vilcashuamán, un importante centro administrativo Inca.",
        includes: ["Tour Wari-Quinua-Pampa", "Tour Vilcashuamán", "City Tour", "2 noches hospedaje 3 estrellas", "Desayunos incluidos", "Transporte privado", "Guía especializado"],
        badge: "Recomendado",
      },
      en: {
        name: "Historical Cultural Package",
        duration: "3 days / 2 nights",
        description: "Discover the historical depth of Ayacucho: Wari, Quinua, Vilcashuaman and the historic center. A journey through the millennia that forged Peru.",
        longDescription: "A journey through time. We will explore the ruins of the Wari empire, walk through the Pampa de la Quinua where independence was sealed, and visit Vilcashuaman, an important Inca administrative center.",
        includes: ["Wari-Quinua-Pampa Tour", "Vilcashuaman Tour", "City Tour", "2 nights 3-star hotel", "Breakfasts included", "Private transport", "Specialized guide"],
        badge: "Recommended",
      },
      pt: {
        name: "Pacote Histórico Cultural",
        duration: "3 dias / 2 noites",
        description: "Descubra a profundidade histórica de Ayacucho: Wari, Quinua, Vilcashuamán e o centro histórico. Uma jornada através dos milênios que forjaram o Peru.",
        longDescription: "Uma viagem no tempo. Exploraremos as ruínas do império Wari, caminharemos pela Pampa de la Quinua, onde a independência foi selada, e visitaremos Vilcashuamán, um importante centro administrativo inca.",
        includes: ["Tour Wari-Quinua-Pampa", "Tour Vilcashuamán", "City Tour", "2 noites de hospedagem 3 estrelas", "Café da manhã", "Transporte privado", "Guia especializado"],
        badge: "Recomendado",
      }
    }
  },
  {
    slug: "paquete-naturaleza-aventura",
    price: 490,
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
    ],
    translations: {
      es: {
        name: "Paquete Naturaleza & Aventura",
        duration: "4 días / 3 noches",
        description: "Para los amantes de la naturaleza: cascadas, aguas turquesas de Millpu, cañones y volcanes. La cara más salvaje y espectacular de la sierra ayacuchana.",
        longDescription: "Aléjate de la ciudad y sumérgete en paisajes impresionantes. Disfrutarás de las hermosas Aguas Turquesas de Millpu, explorarás profundos cañones y te maravillarás con cascadas escondidas en los Andes.",
        includes: ["Aguas Turquesas de Millpu", "Cascadas de Ruqruqa o Cangallo", "Cañones de Qorihuillca", "3 noches alojamiento", "Desayunos y almuerzos", "Transporte 4x4 privado", "Guía de aventura", "Seguro de viaje"],
        badge: "Aventura",
      },
      en: {
        name: "Nature & Adventure Package",
        duration: "4 days / 3 nights",
        description: "For nature lovers: waterfalls, turquoise waters of Millpu, canyons and volcanoes. The wildest and most spectacular face of the Ayacucho highlands.",
        longDescription: "Get away from the city and immerse yourself in breathtaking landscapes. You will enjoy the beautiful Turquoise Waters of Millpu, explore deep canyons and marvel at hidden waterfalls in the Andes.",
        includes: ["Millpu Turquoise Waters", "Ruqruqa or Cangallo Waterfalls", "Qorihuillca Canyons", "3 nights accommodation", "Breakfasts and lunches", "Private 4x4 transport", "Adventure guide", "Travel insurance"],
        badge: "Adventure",
      },
      pt: {
        name: "Pacote Natureza e Aventura",
        duration: "4 dias / 3 noites",
        description: "Para os amantes da natureza: cachoeiras, águas azul-turquesa de Millpu, desfiladeiros e vulcões. A face mais selvagem e espetacular das montanhas de Ayacucho.",
        longDescription: "Fuja da cidade e mergulhe em paisagens deslumbrantes. Você desfrutará das belas águas turquesa de Millpu, explorará cânions profundos e se maravilhará com cachoeiras escondidas nos Andes.",
        includes: ["Águas Turquesas de Millpu", "Cachoeiras de Ruqruqa ou Cangallo", "Cânions de Qorihuillca", "3 noites de alojamento", "Cafés da manhã e almoços", "Transporte 4x4 privado", "Guia de aventura", "Seguro de viagem"],
        badge: "Aventura",
      }
    }
  },
  {
    slug: "paquete-gran-ayacucho",
    price: 850,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    ],
    translations: {
      es: {
        name: "Paquete Gran Ayacucho Completo",
        duration: "6 días / 5 noches",
        description: "La experiencia definitiva de Ayacucho. Historia, cultura, naturaleza y aventura en un solo itinerario diseñado para viajeros que quieren verlo todo.",
        longDescription: "El viaje supremo. No te perderás nada de lo que Ayacucho tiene para ofrecer. Desde la historia preincaica hasta los rincones naturales más impresionantes y menos conocidos.",
        includes: ["Todos los tours históricos", "Tours de naturaleza y cascadas", "Aguas Turquesas de Millpu", "Volcán Pachapupum", "5 noches alojamiento premium", "Pensión completa", "Transporte exclusivo", "Guía Master", "Seguro premium"],
        badge: "Todo incluido",
      },
      en: {
        name: "Grand Ayacucho Complete Package",
        duration: "6 days / 5 nights",
        description: "The ultimate Ayacucho experience. History, culture, nature and adventure in a single itinerary designed for travelers who want to see it all.",
        longDescription: "The supreme journey. You won't miss anything Ayacucho has to offer. From pre-Inca history to the most impressive and lesser-known natural corners.",
        includes: ["All historical tours", "Nature and waterfall tours", "Millpu Turquoise Waters", "Pachapupum Volcano", "5 nights premium accommodation", "Full board", "Exclusive transport", "Master Guide", "Premium insurance"],
        badge: "All inclusive",
      },
      pt: {
        name: "Pacote Grande Ayacucho Completo",
        duration: "6 dias / 5 noites",
        description: "A experiência definitiva de Ayacucho. História, cultura, natureza e aventura em um único itinerário desenhado para viajantes que querem ver tudo.",
        longDescription: "A viagem suprema. Você não perderá nada do que Ayacucho tem a oferecer. Desde a história pré-incaica até os cantos naturais mais impressionantes e menos conhecidos.",
        includes: ["Todos os tours históricos", "Tours de natureza e cachoeiras", "Águas Turquesas de Millpu", "Vulcão Pachapupum", "5 noites em acomodação premium", "Pensão completa", "Transporte exclusivo", "Guia Master", "Seguro premium"],
        badge: "Tudo incluso",
      }
    }
  }
]
