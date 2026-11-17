import Peta from "@/components/PetaDinamis";
import Link from "next/link";
import { pinpoints } from "@/lib/data";

export default function Beranda() {
  return (
    <div className="beranda" style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 16px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '16px' }}>Peta Kampung Sapen</h2>
      
      {/* Komponen Peta */}
      <Peta />

      {/* Legenda */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '14px', fontSize: '18px' }}>
        <div>
          <span style={{ display: 'inline-block', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#e5221f', marginRight: '8px', border: '2px solid #fff' }}></span>
          Titik Potensi Bencana
        </div>
        <div>
          <span style={{ display: 'inline-block', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#1a8fe3', marginRight: '8px', border: '2px solid #fff' }}></span>
          Titik Lokasi Wisata
        </div>
      </div>

      {/* Link Cepat (Opsional, boleh dihapus kalau tidak mau) */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
        {pinpoints.filter(p => p.dipeta).map(p => (
           <Link key={p.slug} href={`/titik/${p.slug}`} style={{ padding: '6px 14px', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 'bold', backgroundColor: p.jenis === 'bencana' ? '#e5221f' : '#1a8fe3' }}>
             {p.nama}
           </Link>
        ))}
      </div>
    </div>
  );
}
