import Link from "next/link";
import { pinpoints } from "@/lib/data";

export const metadata = { title: "Daftar Potensi Bencana | Peta Kampung Sapen" };

export default function Daftar() {
  return (
    <div className="daftar-container">
      <h1 className="judul-daftar">Daftar Potensi Bencana</h1>
      
      <div className="list-tombol">
        {pinpoints
          .filter((p) => p.jenis === "bencana" && p.slug !== "posko-ktb-sapen")
          .map((p) => (
            <Link 
              key={p.slug} 
              href={`/titik/${p.slug}`} 
              className="tombol-bencana"
            >
              {p.nama}
            </Link>
        ))}
      </div>
    </div>
  );
}
