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
    <div className="min-h-screen bg-[#F8F0C8] font-[family-name:var(--font-momo-sans)]">
      
      {/* HEADER MERAH */}
      <div className="bg-[#D9534F] py-4 text-center">
        <h1 className="text-white text-[40px] font-[family-name:var(--font-momo-display)]">
          Peta Jalur Wisata dan Titik Potensi Bencana Kampung Sapen
        </h1>
      </div>

      <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-12 mt-10">
        
        {/* KOLOM KIRI (FOTO & TOMBOL) */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          {/* Kotak Foto Abu-abu */}
          <div className="bg-gray-300 w-full aspect-square flex items-center justify-center text-gray-500 text-center p-4">
            {p.foto ? (
              <img src={p.foto} alt={p.nama} className="w-full h-full object-cover" />
            ) : (
              <span className="text-[20px]">Foto akan ditambahkan menyusul</span>
            )}
          </div>

          {/* Tombol Daftar Bencana (Hanya muncul di halaman Posko) */}
          {posko && (
            <Link 
              href="/daftar-potensi-bencana" 
              className="w-full text-center mt-6 bg-[#D9534F] hover:bg-red-700 text-white px-6 py-4 rounded-md text-[35px] font-semibold transition"
            >
              Daftar Potensi Bencana
            </Link>
          )}
        </div>

        {/* KOLOM KANAN (TEKS & KONTAK) */}
        <div className="w-full md:w-2/3 flex flex-col">
          {/* Judul Pinpoint */}
          <h2 className="text-[50px] font-extrabold text-black leading-tight">
            {p.nama}
          </h2>
          
          {/* Lokasi */}
          <p className="text-[25px] font-normal text-black mt-2 mb-8">
            {p.lokasi}
          </p>
          
          {/* Deskripsi */}
          <p className="text-[40px] font-normal text-black leading-snug">
            {p.deskripsi}
          </p>

          {/* Kontak */}
          <div className="mt-8">
            {p.kontak.map((k) => (
              <p key={k.telp} className="text-[35px] font-semibold text-black mt-2">
                {k.nama} - <a href={`tel:${k.telp}`} className="hover:underline">{k.telp}</a>
              </p>
            ))}
          </div>

          {/* Tautan Bencana Lainnya (Khusus Web di Halaman Posko) */}
          {posko && (
            <div className="mt-12">
              <h3 className="text-[30px] font-bold mb-4 text-black">Potensi Bencana Lainnya:</h3>
              <ul className="list-disc pl-6 text-[25px] text-black">
                {bencanaLainnya.map((b) => (
                  <li key={b.slug} className="mb-2">
                    <Link href={`/titik/${b.slug}`} className="text-blue-700 hover:underline">
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
