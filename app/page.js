import Link from "next/link";
import PetaDinamis from "@/components/PetaDinamis";
import { pinpoints } from "@/lib/data";

export default function Beranda() {
  return (
    <div className="beranda">
      <PetaDinamis />
      <div className="legenda">
        <span><i className="dot merah" /> Titik Potensi Bencana</span>
        <span><i className="dot biru" /> Titik Lokasi Wisata</span>
      </div>
      <nav className="daftar-cepat" aria-label="Daftar titik">
        {pinpoints.filter((p) => p.dipeta).map((p) => (
          <Link key={p.slug} href={`/titik/${p.slug}`} className={p.jenis}>{p.nama}</Link>
        ))}
      </nav>
    </div>
  );
}
