export interface Guide {
  id: string
  name: string
  role: string
  specialties: string[]
  experience: number
  languages: string[]
  bio: string
  image: string
  certifications: string[]
}

export const guides: Guide[] = [
  {
    id: "carlos-quispe",
    name: "Carlos Quispe Huamán",
    role: "Master Guide - Director de Expediciones",
    specialties: ["Alta montaña", "Trekking técnico", "Rescate en montaña"],
    experience: 18,
    languages: ["Español", "Inglés", "Quechua"],
    bio: "Nacido en Ayacucho, Carlos ha dedicado su vida a la montaña. Con más de 200 ascensos al nevado Ausangate y certificaciones internacionales, lidera las expediciones más exigentes de Obelisco Travel.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    certifications: ["UIAGM/IFMGA", "Wilderness First Responder", "Avalanche Safety Level 2"],
  },
  {
    id: "maria-condori",
    name: "María Elena Condori",
    role: "Master Guide - Especialista Cultural",
    specialties: ["Historia andina", "Arqueología", "Turismo vivencial"],
    experience: 12,
    languages: ["Español", "Inglés", "Francés", "Quechua"],
    bio: "Historiadora de profesión y guía de corazón. María conecta a los viajeros con las comunidades locales y transmite la riqueza cultural de los Andes con pasión y profundidad académica.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    certifications: ["Licenciada en Historia UNSCH", "Guía Oficial de Turismo", "Interprete de Patrimonio"],
  },
  {
    id: "juan-flores",
    name: "Juan Pablo Flores",
    role: "Guide - Aventura y Deportes Extremos",
    specialties: ["Rappel", "Escalada en roca", "Canyoning"],
    experience: 8,
    languages: ["Español", "Inglés"],
    bio: "Especialista en deportes de aventura con entrenamiento en Chile y Estados Unidos. Juan hace que cada descenso y cada pared sean una experiencia segura e inolvidable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    certifications: ["AMGA Single Pitch Instructor", "Rescue 3 Swiftwater", "WFR"],
  },
  {
    id: "rosa-mamani",
    name: "Rosa Mamani Paredes",
    role: "Guide - Naturaleza y Observación de Aves",
    specialties: ["Ornitología", "Flora andina", "Fotografía de naturaleza"],
    experience: 10,
    languages: ["Español", "Inglés", "Portugués"],
    bio: "Bióloga especializada en ecosistemas de alta montaña. Rosa ha identificado más de 300 especies de aves en la región y guía expediciones de observación de vida silvestre.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    certifications: ["Bióloga UNMSM", "Certificación Ornitológica CORBIDI", "Guía de Naturaleza"],
  },
  {
    id: "pedro-huanca",
    name: "Pedro Huanca Ramos",
    role: "Guide - Trekking y Campamentos",
    specialties: ["Trekking de larga distancia", "Supervivencia", "Cocina de expedición"],
    experience: 15,
    languages: ["Español", "Inglés", "Quechua"],
    bio: "Pedro conoce cada sendero de los Andes peruanos. Su experiencia en logística de expediciones y cocina de campo hace que los campamentos sean cómodos incluso en los lugares más remotos.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    certifications: ["Leave No Trace Master Educator", "Wilderness First Responder", "Guía de Montaña"],
  },
  {
    id: "lucia-torres",
    name: "Lucía Torres Mendoza",
    role: "Guide - Wellness y Experiencias Místicas",
    specialties: ["Ceremonias tradicionales", "Meditación andina", "Medicina tradicional"],
    experience: 7,
    languages: ["Español", "Inglés", "Italiano"],
    bio: "Lucía combina su formación en turismo con el conocimiento ancestral de su familia. Guía experiencias de conexión espiritual y retiros de bienestar en lugares sagrados de los Andes.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    certifications: ["Facilitadora de Ceremonias", "Yoga Instructor RYT-200", "Guía de Turismo"],
  },
]

export const certifications = [
  {
    name: "UIAGM/IFMGA",
    description: "Unión Internacional de Asociaciones de Guías de Montaña - El estándar más alto a nivel mundial para guías de montaña.",
    icon: "Mountain",
  },
  {
    name: "Wilderness First Responder",
    description: "Certificación de primeros auxilios en áreas remotas de 80+ horas. Todos nuestros guías mantienen esta certificación activa.",
    icon: "HeartPulse",
  },
  {
    name: "Leave No Trace",
    description: "Principios de mínimo impacto ambiental. Practicamos y enseñamos turismo sostenible en cada expedición.",
    icon: "Leaf",
  },
  {
    name: "Rescue 3 International",
    description: "Certificación en rescate técnico para ambientes de agua, altura y terrenos difíciles.",
    icon: "LifeBuoy",
  },
]

export const trainingProcess = [
  {
    step: 1,
    title: "Selección Rigurosa",
    description: "Evaluamos experiencia previa, conocimiento local y habilidades de comunicación. Solo el 10% de los candidatos pasan esta etapa.",
  },
  {
    step: 2,
    title: "Entrenamiento Intensivo",
    description: "6 meses de formación en primeros auxilios, técnicas de guiado, gestión de grupos y protocolos de seguridad.",
  },
  {
    step: 3,
    title: "Mentoría en Campo",
    description: "1 año asistiendo a guías senior en expediciones reales antes de liderar grupos de forma independiente.",
  },
  {
    step: 4,
    title: "Certificación Continua",
    description: "Actualizaciones anuales obligatorias y evaluaciones de desempeño basadas en feedback de clientes.",
  },
]
