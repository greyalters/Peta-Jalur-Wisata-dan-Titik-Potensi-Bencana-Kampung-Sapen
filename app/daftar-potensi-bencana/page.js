import Link from "next/link";
import { pinpoints } from "@/lib/data";

export const metadata = { title: "Daftar Potensi Bencana | Peta Kampung Sapen" };

export default function Daftar() {
  return (
    <div className="min-h-screen bg-[#F4EA9B] flex flex-col items-center pt-16 px-4 font-['Momo_Trust_Sans',sans-serif]">
      
      {/* Judul (ExtraBold 50px) */}
      <h1 className="text-[50px] font-extrabold text-black mb-12 text-center">
        Daftar Potensi Bencana
      </h1>
      
      {/* Container Kotak Merah */}
      <div className="flex flex-col gap-5 w-full max-w-[700px]">
        {pinpoints
          // Saring: Hanya tampilkan yang jenisnya "bencana" dan BUKAN posko
          .filter((p) => p.jenis === "bencana" && p.slug !== "posko-ktb-sapen")
          .map((p) => (
            <Link 
              key={p.slug} 
              href={`/titik/${p.slug}`} 
              className="block w-full bg-[#D63A3A] hover:bg-red-700 text-white text-center py-4 rounded-md text-[35px] font-semibold transition-colors"
            >
              {p.nama}
            </Link>
        ))}
      </div>
      
    </div>
  );
}
