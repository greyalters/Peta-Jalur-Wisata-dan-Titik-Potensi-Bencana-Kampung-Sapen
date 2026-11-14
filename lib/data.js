import pinpoints from "./pinpoints.json";
export { pinpoints };
export const getPin = (slug) => pinpoints.find((p) => p.slug === slug);
export const bencanaLainnya = pinpoints.filter((p) => p.jenis === "bencana" && !p.dipeta);
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://peta-sapen.vercel.app").replace(/\/$/, "");
// Ukuran gambar peta (piksel) di public/peta-sapen.png
export const PETA = { src: "/peta-sapen.png", lebar: 611, tinggi: 639 };
