import type { Locale } from "@/lib/store/lang"

export interface HotelTranslation {
  name: string
  location: string
  description: string
  longDescription: string
  amenities: string[]
  includes: string[]
}

export interface Hotel {
  id: string
  type: "lodge" | "hotel" | "refugio" | "glamping"
  price: number
  rating: number
  reviewCount: number
  image: string
  images: string[]
  zone: string
  whatsappMsg: string
  translations: Record<Locale, HotelTranslation>
}

export const hotels: Hotel[] = [
  {
    id: "hotel-wari",
    type: "hotel",
    price: 120,
    rating: 4.7,
    reviewCount: 148,
    zone: "Ayacucho",
    whatsappMsg: "Hola, quiero reservar el Hotel Wari",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    ],
    translations: {
      es: {
        name: "Hotel Wari",
        location: "Centro Histórico, Ayacucho",
        description: "Hotel boutique en casona colonial del siglo XVII. Ubicación perfecta para explorar el centro histórico.",
        longDescription: "Enclavado en una auténtica casona colonial restaurada del siglo XVII, el Hotel Wari combina la arquitectura patrimonial de Ayacucho con el confort moderno. Sus habitaciones, decoradas con arte local y textiles artesanales, rodean un patio empedrado lleno de plantas andinas. A pasos de la Plaza Mayor, la Catedral y los talleres de retablistas y orfebres, es el punto de partida ideal para descubrir la riqueza cultural de la Ciudad de las 33 Iglesias.",
        amenities: ["Wi-Fi", "Desayuno incluido", "Patio colonial", "Bar", "City tour walking gratuito"],
        includes: ["Desayuno buffet andino", "Wi-Fi de alta velocidad", "Tour walking por el centro histórico", "Maletero 24h", "Información turística personalizada"],
      },
      en: {
        name: "Hotel Wari",
        location: "Historic Center, Ayacucho",
        description: "Boutique hotel in a 17th-century colonial mansion. Perfect location to explore the historic center.",
        longDescription: "Nestled in an authentic restored 17th-century colonial mansion, Hotel Wari blends Ayacucho's heritage architecture with modern comfort. Its rooms, decorated with local art and handcrafted textiles, surround a cobblestone courtyard filled with Andean plants. Steps from the main square, the Cathedral, and the workshops of retablo artists and silversmiths, it is the ideal starting point to discover the cultural richness of the City of 33 Churches.",
        amenities: ["Wi-Fi", "Breakfast included", "Colonial courtyard", "Bar", "Free walking city tour"],
        includes: ["Andean buffet breakfast", "High-speed Wi-Fi", "Historic center walking tour", "24h luggage storage", "Personalized tourist information"],
      },
      pt: {
        name: "Hotel Wari",
        location: "Centro Histórico, Ayacucho",
        description: "Hotel boutique em casarão colonial do século XVII. Localização perfeita para explorar o centro histórico.",
        longDescription: "Instalado em um autêntico casarão colonial restaurado do século XVII, o Hotel Wari combina a arquitetura patrimonial de Ayacucho com o conforto moderno. Seus quartos, decorados com arte local e têxteis artesanais, rodeiam um pátio de pedra cheio de plantas andinas. A passos da Plaza Mayor, da Catedral e das oficinas de retablistas e ourives, é o ponto de partida ideal para descobrir a riqueza cultural da Cidade das 33 Igrejas.",
        amenities: ["Wi-Fi", "Café da manhã incluído", "Pátio colonial", "Bar", "City tour a pé gratuito"],
        includes: ["Café da manhã buffet andino", "Wi-Fi de alta velocidade", "Tour a pé pelo centro histórico", "Bagageiro 24h", "Informações turísticas personalizadas"],
      },
    },
  },
  {
    id: "lodge-ausangate",
    type: "lodge",
    price: 280,
    rating: 4.9,
    reviewCount: 93,
    zone: "Cordillera Vilcanota",
    whatsappMsg: "Hola, quiero reservar el Lodge Ausangate",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
    ],
    translations: {
      es: {
        name: "Lodge Ausangate",
        location: "Cusipata, Cusco",
        description: "Lodge de montaña con vistas privilegiadas al nevado Ausangate y restaurante de cocina andina gourmet.",
        longDescription: "El Lodge Ausangate es un refugio de montaña de lujo situado a los pies del imponente nevado Ausangate (6,372 msnm), el Apu más sagrado de los Andes del sur. Las habitaciones cuentan con calefacción central, agua caliente solar y ventanas panorámicas que enmarcan el glaciar. El restaurante del lodge sirve cocina andina gourmet elaborada con ingredientes locales: chuño, quinua, truchas del río y plantas medicinales de la puna. El lugar perfecto para el trekking al Ausangate o la Montaña de Colores.",
        amenities: ["Wi-Fi", "Restaurante gourmet", "Calefacción", "Agua caliente", "Guías locales", "Alquiler de equipo"],
        includes: ["Desayuno y cena", "Calefacción incluida", "Guía de bienvenida", "Mapa de rutas de trekking", "Botiquín de altura"],
      },
      en: {
        name: "Ausangate Lodge",
        location: "Cusipata, Cusco",
        description: "Mountain lodge with privileged views of Ausangate snowcap and Andean gourmet cuisine restaurant.",
        longDescription: "Ausangate Lodge is a luxury mountain retreat located at the foot of the imposing Ausangate glacier (6,372 m), the most sacred Apu of the southern Andes. The rooms feature central heating, solar hot water, and panoramic windows framing the glacier. The lodge restaurant serves gourmet Andean cuisine made with local ingredients: chuño, quinoa, river trout, and medicinal plants from the puna. The perfect place for trekking to Ausangate or the Rainbow Mountain.",
        amenities: ["Wi-Fi", "Gourmet restaurant", "Heating", "Hot water", "Local guides", "Equipment rental"],
        includes: ["Breakfast and dinner", "Heating included", "Welcome guide", "Trekking route map", "Altitude first aid kit"],
      },
      pt: {
        name: "Lodge Ausangate",
        location: "Cusipata, Cusco",
        description: "Lodge de montanha com vistas privilegiadas ao nevado Ausangate e restaurante de cozinha andina gourmet.",
        longDescription: "O Lodge Ausangate é um refúgio de montanha de luxo localizado aos pés do imponente nevado Ausangate (6.372 m), o Apu mais sagrado dos Andes do sul. Os quartos têm aquecimento central, água quente solar e janelas panorâmicas emoldurando a geleira. O restaurante serve cozinha andina gourmet com ingredientes locais: chuño, quinoa, trutas do rio e plantas medicinais da puna. O lugar perfeito para trekking ao Ausangate ou à Montanha Arco-Íris.",
        amenities: ["Wi-Fi", "Restaurante gourmet", "Aquecimento", "Água quente", "Guias locais", "Aluguel de equipamento"],
        includes: ["Café da manhã e jantar", "Aquecimento incluído", "Guia de boas-vindas", "Mapa de rotas de trekking", "Kit de primeiros socorros de altitude"],
      },
    },
  },
  {
    id: "glamping-vinicunca",
    type: "glamping",
    price: 350,
    rating: 4.8,
    reviewCount: 61,
    zone: "Vinicunca",
    whatsappMsg: "Hola, quiero reservar el Glamping Montaña de Colores",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
    ],
    translations: {
      es: {
        name: "Glamping Montaña de Colores",
        location: "Pitumarca, Cusco",
        description: "Domos geodésicos a 4,300 msnm con vistas a la Montaña de los 7 Colores y observación de estrellas.",
        longDescription: "Una experiencia única e irrepetible: dormir bajo las estrellas en un domo geodésico transparente a 4,300 msnm, con la Montaña de los 7 Colores iluminada por la luna. Cada domo privado cuenta con cama king, calefacción radial, baño privado con ducha caliente y telescopio para astronomía. El chef privado prepara cenas gourmet al pie del domo con productos de la comunidad local. La experiencia de glamping más exclusiva de los Andes peruanos.",
        amenities: ["Domos privados", "Baño privado", "Calefacción", "Chef privado", "Telescopio", "Cama king"],
        includes: ["Cena y desayuno gourmet", "Traslado desde Cusco", "Chef privado", "Telescopio", "Guía de astronomía andina"],
      },
      en: {
        name: "Rainbow Mountain Glamping",
        location: "Pitumarca, Cusco",
        description: "Geodesic domes at 4,300m with views of the 7-Color Mountain and stargazing experience.",
        longDescription: "A unique and unrepeatable experience: sleeping under the stars in a transparent geodesic dome at 4,300m, with the Rainbow Mountain illuminated by the moon. Each private dome features a king bed, radiant heating, a private bathroom with hot shower, and a telescope for astronomy. The private chef prepares gourmet dinners at the foot of the dome using local community products. The most exclusive glamping experience in the Peruvian Andes.",
        amenities: ["Private domes", "Private bathroom", "Heating", "Private chef", "Telescope", "King bed"],
        includes: ["Gourmet dinner and breakfast", "Transfer from Cusco", "Private chef", "Telescope", "Andean astronomy guide"],
      },
      pt: {
        name: "Glamping Montanha das Cores",
        location: "Pitumarca, Cusco",
        description: "Domos geodésicos a 4.300m com vistas à Montanha das 7 Cores e observação de estrelas.",
        longDescription: "Uma experiência única e irrepetível: dormir sob as estrelas em um domo geodésico transparente a 4.300m, com a Montanha das 7 Cores iluminada pela lua. Cada domo privativo tem cama king, aquecimento radiante, banheiro privativo com chuveiro quente e telescópio para astronomia. O chef privado prepara jantares gourmet ao pé do domo com produtos da comunidade local. A experiência de glamping mais exclusiva dos Andes peruanos.",
        amenities: ["Domos privativos", "Banheiro privativo", "Aquecimento", "Chef privado", "Telescópio", "Cama king"],
        includes: ["Jantar e café da manhã gourmet", "Transfer desde Cusco", "Chef privado", "Telescópio", "Guia de astronomia andina"],
      },
    },
  },
  {
    id: "hacienda-urubamba",
    type: "hotel",
    price: 420,
    rating: 5.0,
    reviewCount: 207,
    zone: "Valle Sagrado",
    whatsappMsg: "Hola, quiero reservar la Hacienda del Valle",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    ],
    translations: {
      es: {
        name: "Hacienda del Valle",
        location: "Urubamba, Cusco",
        description: "Hacienda de lujo con spa, piscina temperada y restaurante de alta cocina peruana en el Valle Sagrado.",
        longDescription: "La Hacienda del Valle es uno de los alojamientos más exclusivos del Valle Sagrado de los Incas. Rodeada de jardines con flora andina y vistas a los picos nevados, la hacienda ofrece suites de lujo con terrazas privadas, spa con tratamientos de terapias andinas, piscina temperada y restaurante de alta cocina peruana a cargo de un chef reconocido internacionalmente. Ubicada estratégicamente entre Ollantaytambo y Pisac, es la base perfecta para explorar el Valle Sagrado.",
        amenities: ["Spa", "Piscina temperada", "Restaurante gourmet", "Jardines andinos", "Transporte privado", "Yoga deck"],
        includes: ["Desayuno gourmet", "Acceso ilimitado al spa", "Piscina temperada", "Traslado a/desde Cusco", "Concierge turístico"],
      },
      en: {
        name: "Hacienda del Valle",
        location: "Urubamba, Cusco",
        description: "Luxury hacienda with spa, heated pool and high-end Peruvian cuisine restaurant in the Sacred Valley.",
        longDescription: "Hacienda del Valle is one of the most exclusive accommodations in the Sacred Valley of the Incas. Surrounded by gardens with Andean flora and views of snow-capped peaks, the hacienda offers luxury suites with private terraces, a spa with Andean therapy treatments, a heated pool, and a fine Peruvian cuisine restaurant led by an internationally recognized chef. Strategically located between Ollantaytambo and Pisac, it is the perfect base to explore the Sacred Valley.",
        amenities: ["Spa", "Heated pool", "Gourmet restaurant", "Andean gardens", "Private transport", "Yoga deck"],
        includes: ["Gourmet breakfast", "Unlimited spa access", "Heated pool", "Transfer to/from Cusco", "Tourist concierge"],
      },
      pt: {
        name: "Hacienda del Valle",
        location: "Urubamba, Cusco",
        description: "Hacienda de luxo com spa, piscina aquecida e restaurante de alta gastronomia peruana no Vale Sagrado.",
        longDescription: "A Hacienda del Valle é uma das hospedagens mais exclusivas do Vale Sagrado dos Incas. Cercada de jardins com flora andina e vistas aos picos nevados, a hacienda oferece suítes de luxo com terraços privativos, spa com tratamentos de terapias andinas, piscina aquecida e restaurante de alta gastronomia peruana comandado por um chef reconhecido internacionalmente. Localizada estrategicamente entre Ollantaytambo e Pisac, é a base perfeita para explorar o Vale Sagrado.",
        amenities: ["Spa", "Piscina aquecida", "Restaurante gourmet", "Jardins andinos", "Transporte privado", "Deck de yoga"],
        includes: ["Café da manhã gourmet", "Acesso ilimitado ao spa", "Piscina aquecida", "Transfer para/de Cusco", "Concierge turístico"],
      },
    },
  },
  {
    id: "refugio-salcantay",
    type: "refugio",
    price: 180,
    rating: 4.6,
    reviewCount: 84,
    zone: "Cordillera Vilcabamba",
    whatsappMsg: "Hola, quiero reservar el Refugio Salkantay",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
    ],
    translations: {
      es: {
        name: "Refugio Salkantay",
        location: "Mollepata, Cusco",
        description: "Refugio de alta montaña en la ruta del Salkantay Trek con comedor comunal y fogata nocturna.",
        longDescription: "El Refugio Salkantay es el punto de descanso obligado en el mítico Salkantay Trek, la alternativa más popular al Camino Inca. Ubicado a 3,900 msnm, a la sombra del nevado Salkantay (6,271 msnm), el refugio ofrece habitaciones rústicas pero cómodas con colchones de espuma de alta densidad y bolsas de dormir de plumas. El comedor comunal sirve sopas reconstituyentes, platos calientes de cocina de montaña y mate de coca ilimitado. Las noches de cielo despejado, la fogata exterior es el lugar perfecto para compartir historias de trail.",
        amenities: ["Comedor comunal", "Duchas calientes", "Fogata exterior", "Equipamiento trekking", "Mulas de carga", "Mate de coca"],
        includes: ["Cena y desayuno", "Mate de coca ilimitado", "Bolsa de dormir", "Guía de ruta del día", "Primeros auxilios"],
      },
      en: {
        name: "Salkantay Refuge",
        location: "Mollepata, Cusco",
        description: "High-altitude mountain refuge on the Salkantay Trek route with communal dining room and nightly bonfire.",
        longDescription: "Salkantay Refuge is the essential rest stop on the mythical Salkantay Trek, the most popular alternative to the Inca Trail. Located at 3,900m, in the shadow of Salkantay glacier (6,271m), the refuge offers rustic but comfortable rooms with high-density foam mattresses and down sleeping bags. The communal dining room serves restorative soups, hot mountain cuisine dishes, and unlimited coca tea. On clear nights, the outdoor bonfire is the perfect place to share trail stories.",
        amenities: ["Communal dining room", "Hot showers", "Outdoor bonfire", "Trekking equipment", "Pack mules", "Coca tea"],
        includes: ["Dinner and breakfast", "Unlimited coca tea", "Sleeping bag", "Daily route guide", "First aid"],
      },
      pt: {
        name: "Refúgio Salkantay",
        location: "Mollepata, Cusco",
        description: "Refúgio de alta montanha na rota do Salkantay Trek com refeitório comunitário e fogueira noturna.",
        longDescription: "O Refúgio Salkantay é o ponto de descanso obrigatório no mítico Salkantay Trek, a alternativa mais popular ao Caminho Inca. Localizado a 3.900m, à sombra do nevado Salkantay (6.271m), o refúgio oferece quartos rústicos mas confortáveis com colchões de espuma de alta densidade e sacos de dormir de plumas. O refeitório comunitário serve sopas reconstitutivas, pratos quentes de culinária de montanha e chá de coca ilimitado. Nas noites de céu limpo, a fogueira exterior é o lugar perfeito para compartilhar histórias de trilha.",
        amenities: ["Refeitório comunitário", "Chuveiros quentes", "Fogueira exterior", "Equipamento de trekking", "Mulas de carga", "Chá de coca"],
        includes: ["Jantar e café da manhã", "Chá de coca ilimitado", "Saco de dormir", "Guia de rota diário", "Primeiros socorros"],
      },
    },
  },
  {
    id: "lodge-choquequirao",
    type: "lodge",
    price: 220,
    rating: 4.5,
    reviewCount: 42,
    zone: "Choquequirao",
    whatsappMsg: "Hola, quiero reservar el Lodge Choquequirao",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
    ],
    translations: {
      es: {
        name: "Lodge Choquequirao",
        location: "Cachora, Apurímac",
        description: "El único lodge en la ruta a Choquequirao, con vistas espectaculares al cañón del Apurímac.",
        longDescription: "El Lodge Choquequirao es el único alojamiento estructurado en la ruta de trekking hacia Choquequirao, la ciudadela inca más remota y menos visitada del Perú. Desde sus terrazas se domina el impresionante cañón del río Apurímac a más de 1,500 metros de profundidad. Las cabañas de madera y piedra están integradas al paisaje, con vistas 360° a los picos de la cordillera de Vilcabamba. El lodge organiza visitas guiadas exclusivas al sitio arqueológico con acceso temprano antes de los grupos de día.",
        amenities: ["Restaurante", "Agua caliente", "Guías locales", "Mulas", "Primeros auxilios", "Terraza panorámica"],
        includes: ["Desayuno y cena", "Guía de ruta", "Acceso temprano a Choquequirao", "Transporte de equipaje con mula", "Mapa arqueológico"],
      },
      en: {
        name: "Choquequirao Lodge",
        location: "Cachora, Apurímac",
        description: "The only lodge on the route to Choquequirao, with spectacular views of the Apurímac canyon.",
        longDescription: "Choquequirao Lodge is the only structured accommodation on the trekking route to Choquequirao, the most remote and least visited Inca citadel in Peru. From its terraces, you overlook the impressive Apurímac River canyon over 1,500 meters deep. The wooden and stone cabins are integrated into the landscape, with 360° views of the Vilcabamba mountain range peaks. The lodge organizes exclusive guided visits to the archaeological site with early access before day groups.",
        amenities: ["Restaurant", "Hot water", "Local guides", "Pack mules", "First aid", "Panoramic terrace"],
        includes: ["Breakfast and dinner", "Route guide", "Early access to Choquequirao", "Mule luggage transport", "Archaeological map"],
      },
      pt: {
        name: "Lodge Choquequirao",
        location: "Cachora, Apurímac",
        description: "O único lodge na rota para Choquequirao, com vistas espetaculares ao cânion do Apurímac.",
        longDescription: "O Lodge Choquequirao é a única hospedagem estruturada na rota de trekking para Choquequirao, a cidadela inca mais remota e menos visitada do Peru. De seus terraços, domina-se o impressionante cânion do rio Apurímac a mais de 1.500 metros de profundidade. As cabanas de madeira e pedra estão integradas à paisagem, com vistas 360° aos picos da Cordilheira de Vilcabamba. O lodge organiza visitas guiadas exclusivas ao sítio arqueológico com acesso antecipado antes dos grupos diurnos.",
        amenities: ["Restaurante", "Água quente", "Guias locais", "Mulas", "Primeiros socorros", "Terraço panorâmico"],
        includes: ["Café da manhã e jantar", "Guia de rota", "Acesso antecipado a Choquequirao", "Transporte de bagagem com mula", "Mapa arqueológico"],
      },
    },
  },
]

export const hotelZones = ["Todos", "Ayacucho", "Valle Sagrado", "Cordillera Vilcanota", "Cordillera Vilcabamba", "Vinicunca", "Choquequirao"]

export const hotelTypes = [
  { value: "all", label: "Todos los tipos" },
  { value: "hotel", label: "Hotel" },
  { value: "lodge", label: "Lodge" },
  { value: "refugio", label: "Refugio" },
  { value: "glamping", label: "Glamping" },
]
