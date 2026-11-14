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
  const posko = p.slug === "posko-ktb-sapen";
  return (
    <article className="detail">
      <div className="kiri">
        <div className="foto">
          {p.foto ? <img src={p.foto} alt={p.nama} /> : <span>Foto akan ditambahkan menyusul</span>}
        </div>
        {posko && <Link href="/daftar-potensi-bencana" className="tombol">Daftar Potensi Bencana</Link>}
      </div>
      <div className="kanan">
        <p className="jenis-label">{p.jenis === "bencana" ? "Detail Potensi Bencana" : "Detail Wisata"}</p>
        <h1>{p.nama}</h1>
        <p className="lokasi">{p.lokasi}</p>
        <p className="deskripsi">{p.deskripsi}</p>
        <div className="kontak">
          {p.kontak.map((k) => (
            <p key={k.telp}>{k.nama} - <a href={`tel:${k.telp}`}>{k.telp}</a></p>
          ))}
        </div>
        {posko && (
          <ul className="tautan-bencana">
            {bencanaLainnya.map((b) => <li key={b.slug}><Link href={`/titik/${b.slug}`}>{b.nama}</Link></li>)}
          </ul>
        )}
      </div>
    </article>
  );
}
