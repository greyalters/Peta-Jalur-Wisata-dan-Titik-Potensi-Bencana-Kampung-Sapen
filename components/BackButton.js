"use client";
import { usePathname, useRouter } from "next/navigation";

export default function BackButton() {
  const pathname = usePathname();
  const router = useRouter();

  // Tidak tampil di beranda dan di halaman cetak
  if (pathname === "/" || pathname === "/cetak") return null;

  function kembali() {
    // Kalau halaman dibuka langsung (misalnya dari scan QR), tidak ada riwayat, jadi arahkan ke beranda
    if (window.history.length > 1) router.back();
    else router.push("/");
  }

  return (
    <button type="button" onClick={kembali} className="back-btn">
      ← Kembali
    </button>
  );
}
