import type { Locale } from "@/lib/store/lang"

export interface TourTranslation {
  name: string
  duration: string
  groupSize: string
  description: string
  longDescription: string
  highlights: string[]
  includes: string[]
}

export interface Tour {
  slug: string
  price: number
  image: string
  images: string[]
  whatsappMsg: string
  translations: Record<Locale, TourTranslation>
}

export const tours: Tour[] = [
  {
    slug: "wari-quinua-pampa",
    price: 50,
    image: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=800&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    ],
    whatsappMsg: "Hola, me interesa el tour Wari - Quinua",
    translations: {
      es: {
        name: "Wari – Quinua – Pampa de Ayacucho",
        duration: "8 hrs",
        groupSize: "1–12 pax",
        description: "Visita el complejo arqueológico Wari, cuna de la cultura preinca, el Santuario histórico de Quinua y el obelisco.",
        longDescription: "Un viaje completo por la historia de Ayacucho. Visitaremos el Complejo Arqueológico Wari, capital del primer imperio andino, donde observaremos sus impresionantes construcciones en piedra. Luego nos dirigiremos al pueblo de Quinua, famoso por sus retablos y cerámica típica. Finalizaremos en la Pampa de Ayacucho, lugar donde se selló la independencia de Hispanoamérica.",
        highlights: ["Complejo Wari", "Pampa de Quinua", "Obelisco de la Libertad"],
        includes: ["Transporte turístico", "Guía oficial de turismo", "Tickets de ingreso"],
      },
      en: {
        name: "Wari – Quinua – Ayacucho Pampa",
        duration: "8 hrs",
        groupSize: "1–12 pax",
        description: "Visit the Wari archaeological complex, cradle of the pre-Inca culture, the historic Sanctuary of Quinua and the obelisk.",
        longDescription: "A complete journey through the history of Ayacucho. We will visit the Wari Archaeological Complex, capital of the first Andean empire, where we will observe its impressive stone constructions. Then we will head to the town of Quinua, famous for its altarpieces and typical ceramics. We will finish at the Pampa de Ayacucho, where the independence of Spanish America was sealed.",
        highlights: ["Wari Complex", "Quinua Pampa", "Liberty Obelisk"],
        includes: ["Tourist transport", "Official tour guide", "Entrance tickets"],
      },
      pt: {
        name: "Wari – Quinua – Pampa de Ayacucho",
        duration: "8 hrs",
        groupSize: "1–12 pax",
        description: "Visite o complexo arqueológico Wari, berço da cultura pré-inca, o histórico Santuário de Quinua e o obelisco.",
        longDescription: "Uma viagem completa pela história de Ayacucho. Visitaremos o Complexo Arqueológico Wari, capital do primeiro império andino, onde observaremos suas impressionantes construções de pedra. Em seguida, iremos à cidade de Quinua, famosa por seus retábulos e cerâmicas típicas. Terminaremos na Pampa de Ayacucho, onde foi selada a independência da América Espanhola.",
        highlights: ["Complexo Wari", "Pampa de Quinua", "Obelisco da Liberdade"],
        includes: ["Transporte turístico", "Guia oficial de turismo", "Ingressos"],
      }
    }
  },
  {
    slug: "vilcashuaman",
    price: 70,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
      "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=800&q=80",
    ],
    whatsappMsg: "Hola, me interesa el tour a Vilcashuamán",
    translations: {
      es: {
        name: "Vilcashuamán y el Legado Inca",
        duration: "10 hrs",
        groupSize: "1–10 pax",
        description: "Explora el sitio arqueológico inca más importante de Ayacucho. Vilcashuamán fue el centro administrativo del Tahuantinsuyo.",
        longDescription: "Un recorrido fascinante por el principal centro administrativo inca de la región. Admiraremos el Templo del Sol y la Luna, y ascenderemos al imponente Ushnu piramidal, desde donde el Inca dirigía las ceremonias. Además, pasaremos por el bosque de Puyas de Raimondi (Intihuatana) y la laguna de Pomacocha.",
        highlights: ["Templo del Sol y la Luna", "Ushnu Inca", "Bosque de Puyas"],
        includes: ["Transporte turístico", "Guía oficial", "Tickets de ingreso"],
      },
      en: {
        name: "Vilcashuaman and the Inca Legacy",
        duration: "10 hrs",
        groupSize: "1–10 pax",
        description: "Explore the most important Inca archaeological site in Ayacucho. Vilcashuaman was the administrative center of the Tahuantinsuyo.",
        longDescription: "A fascinating tour of the main Inca administrative center in the region. We will admire the Temple of the Sun and the Moon, and ascend to the imposing pyramidal Ushnu, from where the Inca directed ceremonies. In addition, we will pass through the Raimondi Puyas forest (Intihuatana) and the Pomacocha lagoon.",
        highlights: ["Temple of the Sun and Moon", "Inca Ushnu", "Puyas Forest"],
        includes: ["Tourist transport", "Official guide", "Entrance tickets"],
      },
      pt: {
        name: "Vilcashuamán e o Legado Inca",
        duration: "10 hrs",
        groupSize: "1–10 pax",
        description: "Explore o sítio arqueológico inca mais importante de Ayacucho. Vilcashuamán foi o centro administrativo do Tahuantinsuyo.",
        longDescription: "Um passeio fascinante pelo principal centro administrativo inca da região. Admiraremos o Templo do Sol e da Lua e subiremos ao imponente Ushnu piramidal, de onde o Inca dirigia as cerimônias. Além disso, passaremos pela floresta de Puyas de Raimondi (Intihuatana) e pela lagoa de Pomacocha.",
        highlights: ["Templo do Sol e da Lua", "Ushnu Inca", "Floresta de Puyas"],
        includes: ["Transporte turístico", "Guia oficial", "Ingressos"],
      }
    }
  },
  {
    slug: "aguas-turquesas-millpu",
    price: 80,
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
    ],
    whatsappMsg: "Hola, me interesa el tour Aguas Turquesas",
    translations: {
      es: {
        name: "Aguas Turquesas de Millpu",
        duration: "Full day",
        groupSize: "1–12 pax",
        description: "Las famosas piscinas naturales de aguas color turquesa de Millpu son uno de los secretos mejor guardados de Ayacucho.",
        longDescription: "Descubre la joya escondida de Ayacucho. Tras un recorrido escénico, realizaremos una caminata hasta llegar a las cascadas y pozas naturales escalonadas de agua cristalina y color turquesa intenso. Un paisaje espectacular ideal para la fotografía y conectar con la naturaleza pura.",
        highlights: ["Piscinas naturales", "Caminata ecológica", "Miradores naturales"],
        includes: ["Transporte", "Guía de turismo", "Entradas", "Bastones de trekking"],
      },
      en: {
        name: "Millpu Turquoise Waters",
        duration: "Full day",
        groupSize: "1–12 pax",
        description: "The famous natural turquoise water pools of Millpu are one of Ayacucho's best-kept secrets.",
        longDescription: "Discover Ayacucho's hidden gem. After a scenic drive, we will hike to the waterfalls and tiered natural pools of crystal clear, intense turquoise water. A spectacular landscape ideal for photography and connecting with pure nature.",
        highlights: ["Natural pools", "Ecological hike", "Natural viewpoints"],
        includes: ["Transport", "Tour guide", "Entrance fees", "Trekking poles"],
      },
      pt: {
        name: "Águas Turquesas de Millpu",
        duration: "Dia todo",
        groupSize: "1–12 pax",
        description: "As famosas piscinas naturais de águas azul-turquesa de Millpu são um dos segredos mais bem guardados de Ayacucho.",
        longDescription: "Descubra a joia escondida de Ayacucho. Após um passeio panorâmico, faremos uma caminhada até as cachoeiras e piscinas naturais em socalcos de águas cristalinas e azul-turquesa intenso. Uma paisagem espetacular ideal para fotografia e conexão com a natureza pura.",
        highlights: ["Piscinas naturais", "Caminhada ecológica", "Mirantes naturais"],
        includes: ["Transporte", "Guia de turismo", "Taxas de entrada", "Bastões de trekking"],
      }
    }
  }
]
