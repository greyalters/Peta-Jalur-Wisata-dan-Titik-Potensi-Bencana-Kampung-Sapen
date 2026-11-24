import Peta from "@/components/PetaDinamis";
import Link from "next/link";

export default function Beranda() {
  return (
    <div className="beranda" style={{ maxWidth: '1100px', margin: '0 auto', padding: '12px 16px 0' }}>

      {/* Komponen Peta */}
      <Peta />

      {/* Area sisa ruang: legenda + tombol dipusatkan di tengahnya */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 0' }}>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', fontSize: '18px' }}>
          <div>
            <span style={{ display: 'inline-block', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#e5221f', marginRight: '8px', border: '2px solid #fff' }}></span>
            Titik Potensi Bencana
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#1a8fe3', marginRight: '8px', border: '2px solid #fff' }}></span>
            Titik Lokasi Wisata
          </div>
          <Link href="/sejarah" className="sejarah-link" style={{ marginTop: 0, padding: '8px 18px' }}>Sejarah Kampung Sapen →</Link>
        </div>
      </div>
    </div>
  );
}
