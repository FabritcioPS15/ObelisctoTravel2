import type { Locale } from "@/lib/store/lang"

// ─── UI Translations ────────────────────────────────────────────────────────────
const es = {
  nav: {
    home: "Inicio",
    about: "Quiénes Somos",
    services: "Servicios",
    packages: "Paquetes Turísticos",
    tours: "Tours",
    flights: "Vuelos",
    contact: "Contáctenos",
  },
  hotel: {
    from: "Desde",
    perNight: "/noche",
    perPerson: "/persona",
    book: "Reservar",
    consult: "Consultar",
    amenities: "Comodidades",
    location: "Ubicación",
    description: "Descripción",
    gallery: "Galería",
    includes: "¿Qué incluye?",
    bookWhatsApp: "Reservar por WhatsApp",
    moreInfo: "Más información",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Huéspedes",
    reviews: "reseñas",
    back: "Volver a hospedajes",
    rating: "Calificación",
    type: { hotel: "Hotel", lodge: "Lodge", refugio: "Refugio", glamping: "Glamping" },
  },
  cta: {
    bookNow: "Reservar ahora",
    contactUs: "Contáctenos",
    viewAll: "Ver todos",
    customize: "Personalizar",
  },

  transporte: {
    heroBadge: "Servicio de Transporte",
    heroTitle: "Viaja Seguro y con Estilo",
    heroSubtitle: "Flota moderna para traslados privados, rutas de aventura y transporte turístico en toda la región de Ayacucho.",
    sectionTitle: "Transporte turístico a tu medida",
    sectionDescription: "Sabemos que el transporte es la base de una buena experiencia de viaje. Por eso contamos con una flota variada y conductores especializados en rutas turísticas de la región, desde el centro histórico de Ayacucho hasta los destinos más remotos de los Andes.",
    ctaButton: "Solicitar transporte",
    ctaTitle: "¿A dónde quieres llegar?",
    ctaDescription: "Cuéntanos tu itinerario y te preparamos un presupuesto sin compromiso.",
    ctaQuote: "Obtener cotización",
    ctaTours: "Ver tours disponibles",
  },
  banners: {
    nosotros: {
      badge: "Nuestra historia",
      title: "Quiénes Somos",
      subtitle: "Somos Obelisco Travel, una agencia de turismo local con alma ayacuchana, creada para mostrarle al mundo la magia de los Andes peruanos.",
    },
    servicios: {
      badge: "Lo que ofrecemos",
      title: "Nuestros Servicios",
      subtitle: "Todo lo que necesitas para una experiencia de viaje completa, segura y memorable en Ayacucho y el Perú.",
    },
    paquetes: {
      badge: "Paquetes completos",
      title: "Paquetes Turísticos",
      subtitle: "Combinaciones curadas de tours, transporte y alojamiento para que solo te preocupes de disfrutar.",
    },
    tours: {
      badge: "Ayacucho · Perú",
      title: "Tours y Experiencias en Ayacucho",
      subtitle: "Desde ruinas milenarias hasta cascadas escondidas. Elige tu aventura y déjanos llevarte a los rincones más extraordinarios del Perú.",
    },
    contacto: {
      badge: "Estamos aquí para ti",
      title: "Contáctenos",
      subtitle: "Planifica tu próxima aventura con nosotros. Respondemos en menos de 2 horas.",
    },
    hoteles: {
      title: "Refugios y Hospedajes Premium",
      subtitle: "Descansa en ubicaciones privilegiadas. Desde lodges de montaña hasta haciendas coloniales, cada alojamiento ha sido seleccionado por su autenticidad y confort.",
    },
    vuelos: {
      title: "Tu puerta de entrada a Ayacucho",
      subtitle: "Encuentra los mejores vuelos para comenzar tu aventura en los Andes. Te ayudamos a planificar tu llegada.",
    },
  },
  footer: {
    description: "Agencia de turismo local con alma ayacuchana, creada para mostrarle al mundo la magia de los Andes peruanos.",
    explore: "Explorar",
    support: "Soporte",
    contact: "Contacto",
    destinations: "Destinos",
    safety: "Protocolos de Seguridad",
    sustainability: "Sostenibilidad",
    terms: "Términos de Servicio",
    privacy: "Política de Privacidad",
    rights: "Todos los derechos reservados",
    masterGuide: "Guía Maestro de los Andes",
  },
  experiencesGrid: {
    title: "Colección de Experiencias",
    subtitle: "Diseñadas para el explorador exigente.",
    viewAll: "VER TODAS",
    viewMore: "VER MÁS",
  },
  nosotros: {
    heroTitle: "No vendemos tours. Creamos recuerdos que duran toda la vida.",
    heroP1: "Obelisco Travel nació en Ayacucho con una convicción simple: el turismo debe ser una puerta de conexión genuina entre las personas y el territorio. No somos una oficina de reservas; somos guías, conocedores y apasionados del Perú profundo.",
    heroP2: "Cada tour lleva décadas de conocimiento local, el rigor de guías certificados y el compromiso con las comunidades que hacen posible esta experiencia.",
    btnTours: "Ver nuestros tours",
    valuesTitle: "Nuestros Valores",
    valuesSubtitle: "Los principios que guían cada expedición.",
    ctaTitle: "¿Listo para explorar Ayacucho?",
    ctaDesc: "Contáctanos y diseñemos juntos la aventura perfecta para ti.",
    btnContact: "Contáctenos",
    stats: {
      exp: "Años de experiencia",
      travelers: "Viajeros satisfechos",
      tours: "Tours activos",
      private: "Grupos privados",
    },
    values: {
      passion: {
        title: "Pasión por el territorio",
        desc: "Nacimos y crecemos en Ayacucho. Conocemos cada cerro, cada comunidad y cada historia que hace única a nuestra región."
      },
      security: {
        title: "Seguridad ante todo",
        desc: "Protocolos rigurosos, equipos certificados de alta montaña y seguros de viaje incluidos en todos nuestros servicios."
      },
      guides: {
        title: "Guías Master Certificados",
        desc: "Formación técnica, conocimiento cultural profundo y años de experiencia en el campo."
      },
      sustainability: {
        title: "Turismo sostenible",
        desc: "Trabajamos con comunidades locales y reinvertimos en el desarrollo del destino."
      }
    }
  },
  homeHero: {
    title: "Tours privados y experiencias de aventura en Ayacucho y el Perú.",
    subtitle: "Explora destinos extraordinarios junto a expertos locales. Vive aventuras auténticas, recorridos privados y experiencias diseñadas para viajeros que buscan mucho más que un simple viaje.",
    planButton: "PLANIFICA TU AVENTURA",
    whatsappButton: "HABLAR POR WHATSAPP"
  },
  benefitsSection: {
    title: "¿Por qué viajar con Obelisco Travel?",
    items: {
      attention: { title: "Atención Personalizada", desc: "Diseño de itinerarios desde cero, adaptados a tus expectativas." },
      guides: { title: "Guías Expertos", desc: "Master Guides con profundo conocimiento técnico y cultural del territorio." },
      security: { title: "Seguridad Intransigente", desc: "Protocolos rigurosos y equipos de alta montaña para tu tranquilidad." },
      authenticity: { title: "Autenticidad", desc: "Conexiones reales con comunidades locales y turismo sostenible." }
    }
  },
}


export const uiT = {
  es,
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      packages: "Tour Packages",
      tours: "Tours",
      flights: "Flights",
      contact: "Contact Us",
    },
    hotel: {
      from: "From",
      perNight: "/night",
      perPerson: "/person",
      book: "Book",
      consult: "Enquire",
      amenities: "Amenities",
      location: "Location",
      description: "Description",
      gallery: "Gallery",
      includes: "What's included?",
      bookWhatsApp: "Book via WhatsApp",
      moreInfo: "More information",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Guests",
      reviews: "reviews",
      back: "Back to accommodations",
      rating: "Rating",
      type: { hotel: "Hotel", lodge: "Lodge", refugio: "Refuge", glamping: "Glamping" },
    },
    cta: {
      bookNow: "Book now",
      contactUs: "Contact us",
      viewAll: "View all",
      customize: "Customize",
    },
    transporte: {
      heroBadge: "Transport Service",
      heroTitle: "Travel Safely and in Style",
      heroSubtitle: "Modern fleet for private transfers, adventure routes, and tourist transportation throughout the Ayacucho region.",
      sectionTitle: "Custom tourist transportation",
      sectionDescription: "We know that transportation is the foundation of a good travel experience. That is why we have a varied fleet and specialized drivers for tourist routes in the region, from the historic center of Ayacucho to the most remote destinations in the Andes.",
      ctaButton: "Request transport",
      ctaTitle: "Where do you want to go?",
      ctaDescription: "Tell us your itinerary and we will prepare a quote without obligation.",
      ctaQuote: "Get a quote",
      ctaTours: "View available tours",
    },
    banners: {
      nosotros: {
        badge: "Our History",
        title: "About Us",
        subtitle: "We are Obelisco Travel, a local tourism agency with an Ayacuchan soul, created to show the world the magic of the Peruvian Andes.",
      },
      servicios: {
        badge: "What We Offer",
        title: "Our Services",
        subtitle: "Everything you need for a complete, safe, and memorable travel experience in Ayacucho and Peru.",
      },
      paquetes: {
        badge: "Complete Packages",
        title: "Tour Packages",
        subtitle: "Curated combinations of tours, transport, and accommodation so you only worry about enjoying yourself.",
      },
      tours: {
        badge: "Ayacucho · Peru",
        title: "Tours and Experiences in Ayacucho",
        subtitle: "From ancient ruins to hidden waterfalls. Choose your adventure and let us take you to the most extraordinary corners of Peru.",
      },
      contacto: {
        badge: "We are here for you",
        title: "Contact Us",
        subtitle: "Plan your next adventure with us. We reply in less than 2 hours.",
      },
      hoteles: {
        title: "Premium Refuges & Accommodation",
        subtitle: "Rest in privileged locations. From mountain lodges to colonial haciendas, each accommodation has been selected for its authenticity and comfort.",
      },
      vuelos: {
        title: "Your gateway to Ayacucho",
        subtitle: "Find the best flights to start your adventure in the Andes. We help you plan your arrival.",
      },
    },
    footer: {
      description: "Local tourism agency with an Ayacuchan soul, created to show the world the magic of the Peruvian Andes.",
      explore: "Explore",
      support: "Support",
      contact: "Contact",
      destinations: "Destinations",
      safety: "Safety Protocols",
      sustainability: "Sustainability",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      rights: "All rights reserved",
      masterGuide: "Master Guide of the Andes",
    },
    experiencesGrid: {
      title: "Experiences Collection",
      subtitle: "Designed for the demanding explorer.",
      viewAll: "VIEW ALL",
      viewMore: "VIEW MORE",
    },
    nosotros: {
      heroTitle: "We don't sell tours. We create memories that last a lifetime.",
      heroP1: "Obelisco Travel was born in Ayacucho with a simple conviction: tourism must be a genuine door of connection between people and the territory. We are not a reservation office; we are guides, connoisseurs, and passionate about deep Peru.",
      heroP2: "Each tour carries decades of local knowledge, the rigor of certified guides, and the commitment to the communities that make this experience possible.",
      btnTours: "View our tours",
      valuesTitle: "Our Values",
      valuesSubtitle: "The principles that guide every expedition.",
      ctaTitle: "Ready to explore Ayacucho?",
      ctaDesc: "Contact us and let's design the perfect adventure for you together.",
      btnContact: "Contact Us",
      stats: {
        exp: "Years of experience",
        travelers: "Satisfied travelers",
        tours: "Active tours",
        private: "Private groups",
      },
      values: {
        passion: {
          title: "Passion for the territory",
          desc: "We were born and raised in Ayacucho. We know every hill, every community, and every story that makes our region unique."
        },
        security: {
          title: "Safety first",
          desc: "Rigorous protocols, certified high mountain equipment, and travel insurance included in all our services."
        },
        guides: {
          title: "Certified Master Guides",
          desc: "Technical training, deep cultural knowledge, and years of field experience."
        },
        sustainability: {
          title: "Sustainable tourism",
          desc: "We work with local communities and reinvest in the development of the destination."
        }
      }
    },
    homeHero: {
      title: "Private tours and adventure experiences in Ayacucho and Peru.",
      subtitle: "Explore extraordinary destinations with local experts. Live authentic adventures, private tours, and experiences designed for travelers seeking much more than just a trip.",
      planButton: "PLAN YOUR ADVENTURE",
      whatsappButton: "TALK VIA WHATSAPP"
    },
    benefitsSection: {
      title: "Why travel with Obelisco Travel?",
      items: {
        attention: { title: "Personalized Attention", desc: "Itinerary design from scratch, adapted to your expectations." },
        guides: { title: "Expert Guides", desc: "Master Guides with deep technical and cultural knowledge of the territory." },
        security: { title: "Uncompromising Security", desc: "Rigorous protocols and high mountain equipment for your peace of mind." },
        authenticity: { title: "Authenticity", desc: "Real connections with local communities and sustainable tourism." }
      }
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Quem Somos",
      services: "Serviços",
      packages: "Pacotes Turísticos",
      tours: "Tours",
      flights: "Voos",
      contact: "Fale Conosco",
    },
    hotel: {
      from: "A partir de",
      perNight: "/noite",
      perPerson: "/pessoa",
      book: "Reservar",
      consult: "Consultar",
      amenities: "Comodidades",
      location: "Localização",
      description: "Descrição",
      gallery: "Galeria",
      includes: "O que está incluído?",
      bookWhatsApp: "Reservar pelo WhatsApp",
      moreInfo: "Mais informações",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Hóspedes",
      reviews: "avaliações",
      back: "Voltar para hospedagens",
      rating: "Avaliação",
      type: { hotel: "Hotel", lodge: "Lodge", refugio: "Refúgio", glamping: "Glamping" },
    },
    cta: {
      bookNow: "Reservar agora",
      contactUs: "Fale conosco",
      viewAll: "Ver todos",
      customize: "Personalizar",
    },
    transporte: {
      heroBadge: "Serviço de Transporte",
      heroTitle: "Viaje Seguro e com Estilo",
      heroSubtitle: "Frota moderna para traslados privados, rotas de aventura e transporte turístico em toda a região de Ayacucho.",
      sectionTitle: "Transporte turístico sob medida",
      sectionDescription: "Sabemos que o transporte é a base de uma boa experiência de viagem. Por isso contamos com uma frota variada e motoristas especializados em rotas turísticas da região, desde o centro histórico de Ayacucho até os destinos mais remotos dos Andes.",
      ctaButton: "Solicitar transporte",
      ctaTitle: "Aonde você quer ir?",
      ctaDescription: "Conte-nos o seu roteiro e preparamos um orçamento sem compromisso.",
      ctaQuote: "Obter orçamento",
      ctaTours: "Ver tours disponíveis",
    },
    banners: {
      nosotros: {
        badge: "Nossa história",
        title: "Quem Somos",
        subtitle: "Somos a Obelisco Travel, uma agência de turismo local com alma ayacuchana, criada para mostrar ao mundo a magia dos Andes peruanos.",
      },
      servicios: {
        badge: "O que oferecemos",
        title: "Nossos Serviços",
        subtitle: "Tudo o que você precisa para uma experiência de viagem completa, segura e memorável em Ayacucho e no Peru.",
      },
      paquetes: {
        badge: "Pacotes completos",
        title: "Pacotes Turísticos",
        subtitle: "Combinações curadas de tours, transporte e acomodação para que você só se preocupe em aproveitar.",
      },
      tours: {
        badge: "Ayacucho · Peru",
        title: "Tours e Experiências em Ayacucho",
        subtitle: "De ruínas antigas a cachoeiras escondidas. Escolha sua aventura e deixe-nos levá-lo aos cantos mais extraordinários do Peru.",
      },
      contacto: {
        badge: "Estamos aqui para você",
        title: "Fale Conosco",
        subtitle: "Planeje sua próxima aventura conosco. Respondemos em menos de 2 horas.",
      },
      hoteles: {
        title: "Refúgios e Acomodações Premium",
        subtitle: "Descanse em locais privilegiados. De chalés nas montanhas a fazendas coloniais, cada acomodação foi selecionada por sua autenticidade e conforto.",
      },
      vuelos: {
        title: "Sua porta de entrada para Ayacucho",
        subtitle: "Encontre os melhores voos para começar sua aventura nos Andes. Ajudamos a planejar sua chegada.",
      },
    },
    footer: {
      description: "Agência de turismo local com alma ayacuchana, criada para mostrar ao mundo a magia dos Andes peruanos.",
      explore: "Explorar",
      support: "Suporte",
      contact: "Contato",
      destinations: "Destinos",
      safety: "Protocolos de Segurança",
      sustainability: "Sustentabilidade",
      terms: "Termos de Serviço",
      privacy: "Política de Privacidade",
      rights: "Todos os direitos reservados",
      masterGuide: "Guia Mestre dos Andes",
    },
    experiencesGrid: {
      title: "Coleção de Experiências",
      subtitle: "Projetadas para o explorador exigente.",
      viewAll: "VER TODAS",
      viewMore: "VER MAIS",
    },
    nosotros: {
      heroTitle: "Não vendemos tours. Criamos memórias que duram a vida toda.",
      heroP1: "A Obelisco Travel nasceu em Ayacucho com uma convicção simples: o turismo deve ser uma porta de conexão genuína entre as pessoas e o território. Não somos um escritório de reservas; somos guias, conhecedores e apaixonados pelo Peru profundo.",
      heroP2: "Cada tour carrega décadas de conhecimento local, o rigor de guias certificados e o compromisso com as comunidades que tornam essa experiência possível.",
      btnTours: "Ver nossos tours",
      valuesTitle: "Nossos Valores",
      valuesSubtitle: "Os princípios que guiam cada expedição.",
      ctaTitle: "Pronto para explorar Ayacucho?",
      ctaDesc: "Contate-nos e vamos projetar juntos a aventura perfeita para você.",
      btnContact: "Fale Conosco",
      stats: {
        exp: "Anos de experiência",
        travelers: "Viajantes satisfeitos",
        tours: "Tours ativos",
        private: "Grupos privados",
      },
      values: {
        passion: {
          title: "Paixão pelo território",
          desc: "Nascemos e crescemos em Ayacucho. Conhecemos cada colina, cada comunidade e cada história que torna nossa região única."
        },
        security: {
          title: "Segurança em primeiro lugar",
          desc: "Protocolos rigorosos, equipamentos certificados de alta montanha e seguro de viagem incluídos em todos os nossos serviços."
        },
        guides: {
          title: "Guias Mestres Certificados",
          desc: "Treinamento técnico, profundo conhecimento cultural e anos de experiência em campo."
        },
        sustainability: {
          title: "Turismo sustentável",
          desc: "Trabalhamos com as comunidades locais e reinvestimos no desenvolvimento do destino."
        }
      }
    },
    homeHero: {
      title: "Tours privados e experiências de aventura em Ayacucho e no Peru.",
      subtitle: "Explore destinos extraordinários com especialistas locais. Viva aventuras autênticas, tours privados e experiências desenhadas para viajantes que buscam muito mais do que apenas uma viagem.",
      planButton: "PLANEJE SUA AVENTURA",
      whatsappButton: "FALAR PELO WHATSAPP"
    },
    benefitsSection: {
      title: "Por que viajar com a Obelisco Travel?",
      items: {
        attention: { title: "Atenção Personalizada", desc: "Desenho de itinerários do zero, adaptados às suas expectativas." },
        guides: { title: "Guias Especialistas", desc: "Guias Mestres com profundo conhecimento técnico e cultural do território." },
        security: { title: "Segurança Intransigente", desc: "Protocolos rigorosos e equipamentos de alta montanha para sua tranquilidade." },
        authenticity: { title: "Autenticidade", desc: "Conexões reais com as comunidades locais e turismo sustentável." }
      }
    },
  },
} satisfies Record<Locale, typeof es>

export function t(locale: Locale) {
  return uiT[locale]
}
