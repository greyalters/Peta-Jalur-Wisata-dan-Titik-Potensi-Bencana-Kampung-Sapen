import Link from "next/link";
import { pinpoints } from "@/lib/data";
export const metadata = { title: "Daftar Potensi Bencana | Peta Kampung Sapen" };

export default function Daftar() {
  return (
    <section className="daftar">
      <h1>Daftar Potensi Bencana</h1>
      <ul>
        {pinpoints.filter((p) => p.jenis === "bencana").map((p) => (
          <li key={p.slug}><Link href={`/titik/${p.slug}`} className="tombol">{p.nama}</Link></li>
        ))}
      </ul>
    </section>
  );
}
