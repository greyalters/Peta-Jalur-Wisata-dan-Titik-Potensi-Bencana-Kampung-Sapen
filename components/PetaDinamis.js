"use client";
import dynamic from "next/dynamic";
// Leaflet butuh `window`, jadi dimuat hanya di browser (ssr: false)
const Peta = dynamic(() => import("./Peta"), { ssr: false, loading: () => <div className="peta peta-loading">Memuat peta…</div> });
export default Peta;
