import Link from "next/link";
import { pinpoints } from "@/lib/data";

export const metadata = { title: "Daftar Potensi Bencana | Peta Kampung Sapen" };

export default function Daftar() {
  return (
    <div className="min-h-screen bg-[#F8F0C8] flex flex-col items-center pt-20 px-4 font-['Momo_Trust_Sans']">
      
      <h1 className="text-[50px] font-extrabold text-black mb-16 text-center leading-tight">
        Daftar Potensi Bencana
      </h1>
      
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        {pinpoints
          .filter((p) => p.jenis === "bencana" && p.slug !== "posko-ktb-sapen")
          .map((p) => (
            <Link 
              key={p.slug} 
              href={`/titik/${p.slug}`} 
              className="w-full bg-[#D9534F] hover:bg-red-700 text-white text-center py-4 rounded-md text-[35px] font-semibold transition-all duration-200 shadow-sm"
            >
              {p.nama}
            </Link>
        ))}
      </div>
      
    </div>
  );
}
