"use client";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import { useRouter } from "next/navigation";
import { pinpoints } from "@/lib/data";
import "leaflet/dist/leaflet.css";

const ikon = (warna) =>
  L.divIcon({
    className: "",
    html: `<svg width="30" height="42" viewBox="0 0 24 34"><path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 22 12 22s12-13 12-22C24 5.4 18.6 0 12 0z" fill="${warna}" stroke="#fff" stroke-width="1.2"/><circle cx="12" cy="12" r="4.2" fill="#fff"/></svg>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
  });
const MERAH = ikon("#e5221f");
const BIRU = ikon("#1a8fe3");

export default function Peta() {
  const router = useRouter();

  const centerPosition = [-7.78806, 110.39361]; 

  return (
    <MapContainer 
      center={centerPosition} 
      zoom={16} 
      style={{ height: "100%", width: "100%", zIndex: 0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      
      {pinpoints.filter((p) => p.dipeta).map((p) => (
        <Marker 
          key={p.slug} 
          position={p.koordinat}
          icon={p.jenis === "bencana" ? MERAH : BIRU}
          eventHandlers={{ click: () => router.push(`/titik/${p.slug}`) }}
        >
          <Tooltip direction="top" offset={[0, -40]}>{p.nama}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
