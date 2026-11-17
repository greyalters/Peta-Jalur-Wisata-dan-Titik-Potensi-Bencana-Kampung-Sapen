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
  
  // Cek apakah halaman ini adalah Posko KTB
  const isPosko = p.slug === "posko-ktb-sapen";

  return (
    <div className="min-h-screen bg-[#F4EA9B] font-['Momo_Trust_Sans',sans-serif] pb-20">
      
      {/* Container Utama (Grid Kiri Kanan) */}
      <div className="max-w-[1100px] mx-auto px-6 pt-12 flex flex-col md:flex-row gap-10">
        
        {/* === KOLOM KIRI (FOTO & TOMBOL) === */}
        <div className="w-full md:w-[400px] flex flex-col gap-6">
          
          {/* Kotak Foto Abu-abu */}
          <div className="w-full aspect-[400/330] bg-[#D9D9D9] flex items-center justify-center text-gray-500 p-4 text-center">
            {p.foto ? (
              <img src={p.foto} alt={p.nama} className="w-full h-full object-cover" />
            ) : (
              <span className="text-[18px]">Foto akan ditambahkan menyusul</span>
            )}
          </div>

          {/* Tombol Merah (Hanya Muncul di Posko KTB) */}
          {isPosko && (
            <Link 
              href="/daftar-potensi-bencana" 
              className="w-full text-center bg-[#D63A3A] hover:bg-red-700 text-white font-bold py-4 rounded-md text-[28px] transition-colors"
            >
              Daftar Potensi Bencana
            </Link>
          )}
        </div>

        {/* === KOLOM KANAN (TEKS) === */}
        <div className="w-full md:flex-1 flex flex-col">
          
          {/* Judul (Momo Trust Sans ExtraBold 50px) */}
          <h1 className="text-[50px] font-extrabold leading-[1.1] text-black m-0">
            {p.nama}
          </h1>
          
          {/* Lokasi (Momo Trust Sans Regular 25px) */}
          <p className="text-[25px] text-black mt-2 mb-8">
            {p.lokasi}
          </p>
          
          {/* Deskripsi (Momo Trust Sans Regular 40px) */}
          <p className="text-[40px] leading-[1.3] text-justify text-black mb-8">
            {p.deskripsi}
          </p>

          {/* Kontak (Momo Trust Sans SemiBold 35px) */}
          <div className="flex flex-col gap-2">
            {p.kontak.map((k) => (
              <p key={k.telp} className="text-[35px] font-semibold text-black m-0">
                {k.nama} - <a href={`tel:${k.telp}`} className="hover:underline">{k.telp}</a>
              </p>
            ))}
          </div>

          {/* List Tautan Bencana Lainnya (Khusus Posko di versi Web) */}
          {isPosko && (
            <div className="mt-10">
              <h3 className="text-[30px] font-bold mb-2 text-black">Potensi Bencana Lainnya:</h3>
              <ul className="list-disc pl-8 text-[25px] text-black">
                {bencanaLainnya.map((b) => (
                  <li key={b.slug} className="mb-1">
                    <Link href={`/titik/${b.slug}`} className="hover:underline">
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
