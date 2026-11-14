# Peta Jalur Wisata dan Titik Potensi Bencana Kampung Sapen

Website peta Kampung Sapen (Kel. Demangan, Kemantren Gondokusuman, Kota Yogyakarta), dibuat sesuai Petunjuk Teknis.

- **Next.js (App Router)** + **Leaflet lewat react-leaflet** (dimuat `dynamic(..., { ssr: false })`)
- Peta memakai **imageOverlay** dari gambar peta jadi (`public/peta-sapen.png`)
- Semua data titik ada di **satu file**: `lib/pinpoints.json`; halaman detail dibuat statis dengan `generateStaticParams`
- Font **Momo Trust Display** dan **Momo Trust Sans** lewat `next/font`
- Hosting: **Vercel**

## Halaman

| Alamat | Isi |
|---|---|
| `/` | Beranda: peta, pin merah (Potensi Bencana) dan biru (Wisata). Klik pin → halaman detail |
| `/titik/<slug>` | Detail titik (8 halaman: 5 bencana, 3 wisata) |
| `/daftar-potensi-bencana` | Daftar 5 potensi bencana (tujuan tombol "Daftar Potensi Bencana") |
| `/cetak` | Versi cetak peta dengan QR Code di samping tiap pin + kotak "Potensi Bencana Lainnya" |

## Cara deploy (GitHub + Vercel), langkah demi langkah

1. **Buat repo GitHub.** Buka github.com → tombol **New** → beri nama `peta-sapen` → **Create repository**.
2. **Unggah file.** Di halaman repo, klik **uploading an existing file**. Seret *isi* folder `peta-sapen` (bukan foldernya) ke browser: `app`, `components`, `lib`, `public`, `package.json`, `package-lock.json`, `next.config.mjs`, `jsconfig.json`, `.gitignore`, `README.md`. **Jangan** unggah folder `node_modules` atau `.next` jika ada. Klik **Commit changes**.
3. **Import ke Vercel.** Buka vercel.com → **Add New… → Project** → pilih repo `peta-sapen` → **Import**. Framework otomatis terdeteksi Next.js. Klik **Deploy** dan tunggu ±1–2 menit.
4. **Catat URL final**, misalnya `https://peta-sapen.vercel.app` (bisa diganti di Settings → Domains).
5. **Isi URL untuk QR Code.** Di Vercel: **Settings → Environment Variables** → tambah
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: URL final dari langkah 4 (tanpa garis miring di akhir)

   Simpan, lalu buka tab **Deployments** → titik tiga di deployment teratas → **Redeploy**.
6. **Cetak peta.** Buka `<URL>/cetak` di Chrome → Ctrl+P → Tujuan "Save as PDF", Layout **Landscape**, centang **Background graphics** → simpan, lalu bawa ke percetakan (A3 disarankan). Scan beberapa QR dengan HP untuk memastikan menuju halaman yang benar.

## Mengubah data (tanpa koding)

Semua isi ada di `lib/pinpoints.json`. Edit langsung di GitHub (klik file → ikon pensil → **Commit changes**); Vercel otomatis membangun ulang.

- **Menambah foto:** unggah foto ke folder `public/foto/` (misal `posko.jpg`), lalu ubah `"foto": null` menjadi `"foto": "/foto/posko.jpg"`.
- **Memindah pin:** `koordinat` adalah `[y, x]` dalam piksel gambar peta, dihitung **dari bawah** untuk y (gambar 611 × 639 px). Contoh: titik 100 px dari kiri dan 200 px dari atas → `[439, 100]`.
- **Mengganti gambar peta:** timpa `public/peta-sapen.png`, lalu sesuaikan `lebar`/`tinggi` di `lib/data.js`.

## Menjalankan di komputer (opsional)
Butuh Node.js 20+. `npm install` lalu `npm run dev`, buka http://localhost:3000.

## Keputusan yang diambil karena petunjuk tidak menyebutkan
- **Peta pakai imageOverlay** dari gambar peta di Petunjuk Teknis (bukan GeoJSON + OpenStreetMap), agar letak pin sama persis dengan desain. Gambar itu sudah memuat pin; pin website ditempatkan tepat di atasnya.
- **Pasangan pin biru ↔ wisata belum pasti**: kiri (dekat RW IX) = Wayang Uwuh, bawah tengah = Malam Batik, dekat RW VIII = Karawitan Eko Manunggal (sesuai catatan, titik dekat RW VIII masih akan dipastikan). Silakan tukar `koordinat` bila salah.
- **Ukuran font** mengikuti petunjuk di layar besar (judul 40px, nama 50px, lokasi 25px, deskripsi 40px, kontak/tombol 35px); di HP dikecilkan agar tetap terbaca.
- **Deskripsi Mitigasi Hewan Berbahaya** memakai teks dari mockup ("ular dan sarang tawon"); mohon dicek.
- Ditambahkan label kecil "Detail Potensi Bencana / Detail Wisata", tombol cepat di bawah peta, nomor telepon bisa diklik, dan daftar tautan 4 bencana di halaman Posko.
- QR berukuran 2,5 × 2,5 cm (di atas minimal 2 × 2 cm) dengan label nama di bawahnya.
- Foto masih kotak abu-abu "Foto akan ditambahkan menyusul".
