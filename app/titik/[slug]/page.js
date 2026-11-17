import Link from "next/link";
import { notFound } from "next/navigation";
import { pinpoints, getPin, bencanaLainnya } from "@/lib/data";

export const dynamicParams = false;
export function generateStaticParams() {
  return pinpoints.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const p = getPin((await params).slug);
  return { title: p ? `${p.nama} | Peta Kampung Sapen` : "Tidak ditemukan" };
}

export default async function Detail({ params }) {
  const p = getPin((await params).slug);
  if (!p) notFound();
  const isPosko = p.slug === "posko-ktb-sapen";

  return (
    <div>
      <div className="detail-container">
        {/* Sisi Kiri */}
        <div className="sisi-kiri">
          <div className="kotak-foto">
            {p.foto ? (
              <img src={p.foto} alt={p.nama} />
            ) : (
              <span>Foto akan ditambahkan menyusul</span>
            )}
          </div>
          {isPosko && (
            <Link href="/daftar-potensi-bencana" className="tombol-daftar">
              Daftar Potensi Bencana
            </Link>
          )}
        </div>

        {/* Sisi Kanan */}
        <div className="sisi-kanan">
          <h1 className="judul-detail">{p.nama}</h1>
          <p className="lokasi-detail">{p.lokasi}</p>
          <p className="deskripsi-detail">{p.deskripsi}</p>
          
          <div>
            {p.kontak.map((k) => (
              <p key={k.telp} className="kontak-detail">
                {k.nama} - <a href={`tel:${k.telp}`}>{k.telp}</a>
              </p>
            ))}
          </div>

          {isPosko && (
            <div className="list-lainnya">
              <h3>Potensi Bencana Lainnya:</h3>
              <ul>
                {bencanaLainnya.map((b) => (
                  <li key={b.slug}>
                    <Link href={`/titik/${b.slug}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                      {b.nama}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
