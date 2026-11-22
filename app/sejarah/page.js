import Link from "next/link";
import { pinpoints } from "@/lib/data";

export const metadata = { title: "Sejarah Kampung Sapen | Peta Kampung Sapen" };

const LINI = [
  { tahun: "1810-an", teks: "Serat Centhini menggambarkan pedati yang ditarik sapi sapèn, gerobak, serta pedagang kuda dan kerbau (belantik)." },
  { tahun: "1898", teks: "Bauwarna karya Padmasusastra mencatat aturan bahwa sapi angkut tidak boleh masuk ke gerbang kori gapit keraton: “sapi sapèn ora kêna malêbu ing kori gapit”." },
  { tahun: "1903", teks: "Jarwa Kawi (Padmasusastra) memasukkan sapen sebagai salah satu sinonim untuk lembu." },
  { tahun: "1927", teks: "Majalah Kajawèn memberitakan rombongan ketoprak yang menuju “Kampung Demangan”, catatan tertua tentang kampung tetangga Sapen." },
  { tahun: "1939", teks: "Bausastra Jawa karya Poerwadarminta mencatat “lêmbu sapèn (sapi momotan)”, yaitu sapi angkut." },
  { tahun: "1956", teks: "Jalan Demangan berganti nama menjadi Jalan Solo." },
  { tahun: "1966", teks: "Jalan Solo berganti nama menjadi Jalan Laksda Adisucipto." },
  { tahun: "2006", teks: "Malam Batik didirikan oleh Theresa Naumi." },
  { tahun: "2013", teks: "Iskandar Harjodimulyo mulai membuat Wayang Uwuh dari sampah." },
  { tahun: "2019", teks: "Sapen diusulkan menjadi Kampung Inggris, dan juga dikenal sebagai Kampung Baca." },
  { tahun: "2021", teks: "Sapen masuk daftar kampung yang ditetapkan sebagai Kampung Tangguh Bencana." },
];

export default function Sejarah() {
  const titik = pinpoints.filter((p) => p.dipeta);
  return (
    <article className="sejarah-halaman">
      <h1 className="judul-detail">Sejarah Kampung Sapen</h1>
      <p className="sejarah-lead">
        Kampung Sapen adalah satu dari tiga kampung di Kelurahan Demangan, bersama Kampung Demangan dan Kampung Pengok,
        di Kemantren Gondokusuman, Kota Yogyakarta.
      </p>

      <section className="sejarah-titik">
        <h2>Asal-usul nama</h2>
        <p className="sejarah-paragraf">
          Menurut ingatan warga, nama Sapen berhubungan erat dengan dunia hewan. Dalam bahasa Jawa lama, <i>sapèn</i> adalah
          sapi yang dipakai untuk menarik pedati pembawa barang berat, misalnya hasil panen padi. Kampung ini dulu menjadi tempat
          sapi-sapi itu berhenti dan menunggu, sehingga warga menamai tempat tersebut Sapen.
        </p>
        <blockquote className="sejarah-kutip">
          “Istilah sapen merujuk pada ternak sapi yang dipakai sebagai penarik pedati yang digunakan untuk membawa barang berat.”
          <cite>Toponim Kota Yogyakarta, bab Kecamatan Gondokusuman</cite>
        </blockquote>
        <p className="sejarah-paragraf">
          Nama tetangganya juga punya cerita. <b>Demangan</b> berasal dari kata <i>demang</i>, pejabat tingkat bawah dalam
          pemerintahan Kasultanan Yogyakarta. <b>Pengok</b> dikaitkan dengan bunyi peluit uap “ngook” para pekerja kereta api.
        </p>
      </section>

      <section className="sejarah-titik">
        <h2>Lini masa</h2>
        <ol className="sejarah-lini">
          {LINI.map((l) => (
            <li key={l.tahun + l.teks}>
              <span className="sejarah-tahun">{l.tahun}</span>
              <p>{l.teks}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sejarah-titik">
        <h2>Sejarah titik di peta</h2>
        <div className="sejarah-kartu">
          {titik.map((p) => (
            <Link key={p.slug} href={`/titik/${p.slug}`} className={`kartu ${p.jenis}`}>
              <b>{p.nama}</b>
              <span>{p.jenis === "bencana" ? "Titik Potensi Bencana" : "Titik Wisata"} · baca sejarahnya →</span>
            </Link>
          ))}
        </div>
      </section>

      <p className="sejarah-sumber">
        Sumber:{" "}
        <a href="https://gondokusumankec.jogjakota.go.id/assets/instansi/gondokusumankec/files/sejarah-gondokusuman-7387.pdf" target="_blank" rel="noopener noreferrer">
          Toponim Kota Yogyakarta, Kemantren Gondokusuman
        </a>{" · "}
        <a href="https://demangankel.jogjakota.go.id/assets/instansi/demangankel/files/sejarah-kelurahan-demangan-9689.pdf" target="_blank" rel="noopener noreferrer">
          Sejarah Kelurahan Demangan
        </a>
        . Sumber tiap titik tercantum di halaman titik masing-masing.
      </p>
    </article>
  );
}
