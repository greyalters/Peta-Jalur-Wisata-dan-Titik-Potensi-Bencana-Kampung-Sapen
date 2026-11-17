"use client";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import { useRouter } from "next/navigation";
import { pinpoints } from "@/lib/data"; // Hapus PETA, tidak dipakai lagi
import "leaflet/dist/leaflet.css"; // Pastikan ini ada

// Ikon kustom Anda (tidak perlu diubah)
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
  // Koordinat pusat Kampung Sapen
  const centerPosition = [-7.7867, 110.3918]; 

  return (
    <MapContainer 
      center={centerPosition} 
      zoom={16}
      className="peta"
      // Beri tinggi eksplisit agar tidak 0
      style={{ zIndex: 0 }}
    >
      {/* Ganti ImageOverlay dengan TileLayer OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      
      {pinpoints.filter((p) => p.dipeta).map((p) => (
        <Marker 
          key={p.slug} 
          position={p.koordinat} // Koordinat sudah dalam format [lat, lng]
          icon={p.jenis === "bencana" ? MERAH : BIRU}
          eventHandlers={{ click: () => router.push(`/titik/${p.slug}`) }}
        >
          <Tooltip direction="top" offset={[0, -40]}>{p.nama}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
