import { QRCodeSVG } from "qrcode.react";
import { pinpoints, bencanaLainnya, PETA, SITE_URL } from "@/lib/data";

export const metadata = { title: "Versi Cetak | Peta Kampung Sapen", robots: { index: false } };

// QR minimal ~2×2 cm. Di sini 2,5 cm agar aman saat dicetak.
function QR({ p }) {
  return (
    <figure className="qr">
      <QRCodeSVG value={`${SITE_URL}/titik/${p.slug}`} style={{ width: "2.5cm", height: "2.5cm" }} level="M" marginSize={1} />
      <figcaption>{p.nama}</figcaption>
    </figure>
  );
}

export default function Cetak() {
  const dipeta = pinpoints.filter((p) => p.dipeta);
  return (
    <div className="cetak">
      <p className="no-print catatan">
        Halaman ini untuk dicetak (Ctrl+P → simpan PDF, kertas A3/A4 lanskap). QR mengarah ke <b>{SITE_URL}</b>.
        Pastikan NEXT_PUBLIC_SITE_URL di Vercel sudah berisi URL final sebelum mencetak.
      </p>
      <div className="cetak-isi">
        <div className="cetak-peta" style={{ aspectRatio: `${PETA.lebar} / ${PETA.tinggi}` }}>
          <img src={PETA.src} alt="Peta Kampung Sapen" />
          {dipeta.map((p) => {
            const [lat, lng] = p.koordinat;
            const kiri = (lng / PETA.lebar) * 100, atas = ((PETA.tinggi - lat) / PETA.tinggi) * 100;
            return (
              <div key={p.slug} className="cetak-pin" style={{ left: `${kiri}%`, top: `${atas}%` }}>
                <span className={`dot ${p.jenis === "bencana" ? "merah" : "biru"}`} />
                <QR p={p} />
              </div>
            );
          })}
        </div>
        <aside className="kotak-lainnya">
          <h2>Potensi Bencana Lainnya</h2>
          {bencanaLainnya.map((p) => <QR key={p.slug} p={p} />)}
          <div className="legenda">
            <span><i className="dot merah" /> Titik Potensi Bencana</span>
            <span><i className="dot biru" /> Titik Lokasi Wisata</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
