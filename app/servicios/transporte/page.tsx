import TransporteClient from "./transporte-client";

export const metadata = {
  title: "Servicio de Transporte Turístico | Obelisco Travel Ayacucho",
  description:
    "Transporte turístico privado en Ayacucho, Perú. Traslados al aeropuerto, rutas de aventura en 4x4, vans privadas y buses para grupos. Conductores bilingües y seguros.",
  keywords: [
    "transporte turístico Ayacucho",
    "traslados aeropuerto Ayacucho",
    "van privada Perú",
    "4x4 aventura Andes",
  ],
};

export default function TransportePage() {
  return <TransporteClient />;
}

