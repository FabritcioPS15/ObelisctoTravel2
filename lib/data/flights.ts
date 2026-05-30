export interface Flight {
  id: string
  airline: string
  airlineLogo: string
  origin: string
  originCode: string
  destination: string
  destinationCode: string
  departureTime: string
  arrivalTime: string
  duration: string
  price: number
  stops: number
  aircraft: string
}

export const airlines = [
  { name: "LATAM", code: "LA", logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&q=80" },
  { name: "Avianca", code: "AV", logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&q=80" },
  { name: "Sky Airline", code: "H2", logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&q=80" },
  { name: "Star Perú", code: "2I", logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&q=80" },
]

export const cities = [
  { name: "Lima", code: "LIM" },
  { name: "Cusco", code: "CUZ" },
  { name: "Arequipa", code: "AQP" },
  { name: "Ayacucho", code: "AYP" },
  { name: "Trujillo", code: "TRU" },
  { name: "Piura", code: "PIU" },
  { name: "Iquitos", code: "IQT" },
  { name: "Tacna", code: "TCQ" },
]

export const mockFlights: Flight[] = [
  {
    id: "la-001",
    airline: "LATAM",
    airlineLogo: "/airlines/latam.png",
    origin: "Lima",
    originCode: "LIM",
    destination: "Ayacucho",
    destinationCode: "AYP",
    departureTime: "06:30",
    arrivalTime: "07:45",
    duration: "1h 15m",
    price: 89,
    stops: 0,
    aircraft: "Airbus A319",
  },
  {
    id: "la-002",
    airline: "LATAM",
    airlineLogo: "/airlines/latam.png",
    origin: "Lima",
    originCode: "LIM",
    destination: "Ayacucho",
    destinationCode: "AYP",
    departureTime: "14:00",
    arrivalTime: "15:15",
    duration: "1h 15m",
    price: 105,
    stops: 0,
    aircraft: "Airbus A319",
  },
  {
    id: "2i-001",
    airline: "Star Perú",
    airlineLogo: "/airlines/star-peru.png",
    origin: "Lima",
    originCode: "LIM",
    destination: "Ayacucho",
    destinationCode: "AYP",
    departureTime: "08:00",
    arrivalTime: "09:20",
    duration: "1h 20m",
    price: 75,
    stops: 0,
    aircraft: "BAe 146",
  },
  {
    id: "la-003",
    airline: "LATAM",
    airlineLogo: "/airlines/latam.png",
    origin: "Lima",
    originCode: "LIM",
    destination: "Ayacucho",
    destinationCode: "AYP",
    departureTime: "18:30",
    arrivalTime: "19:45",
    duration: "1h 15m",
    price: 95,
    stops: 0,
    aircraft: "Airbus A320",
  },
  {
    id: "av-001",
    airline: "Avianca",
    airlineLogo: "/airlines/avianca.png",
    origin: "Cusco",
    originCode: "CUZ",
    destination: "Ayacucho",
    destinationCode: "AYP",
    departureTime: "10:00",
    arrivalTime: "12:30",
    duration: "2h 30m",
    price: 145,
    stops: 1,
    aircraft: "Airbus A320",
  },
]

export const flightInfo = {
  mainAirport: {
    name: "Aeropuerto Coronel FAP Alfredo Mendívil Duarte",
    code: "AYP",
    city: "Ayacucho",
    distance: "4 km del centro",
    services: ["Taxi", "Transfer privado", "Alquiler de autos"],
  },
  tips: [
    "Los vuelos desde Lima duran aproximadamente 1 hora 15 minutos",
    "Recomendamos reservar con al menos 2 semanas de anticipación en temporada alta (Semana Santa, Fiestas Patrias)",
    "El aeropuerto está a 2,761 msnm - toma precauciones para la altura",
    "Podemos coordinar tu transfer desde el aeropuerto a tu hotel",
  ],
  operators: [
    {
      name: "LATAM",
      routes: "Lima - Ayacucho (diario)",
      frequency: "2-3 vuelos diarios",
    },
    {
      name: "Star Perú",
      routes: "Lima - Ayacucho",
      frequency: "1-2 vuelos diarios",
    },
  ],
}
