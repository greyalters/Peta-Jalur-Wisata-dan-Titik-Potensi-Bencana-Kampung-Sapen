import "leaflet/dist/leaflet.css";
import "./globals.css";
import { display, sans } from "@/lib/fonts";
import Header from "@/components/Header";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Peta Jalur Wisata dan Titik Potensi Bencana Kampung Sapen",
  description: "Peta Kampung Sapen, Kelurahan Demangan, Kemantren Gondokusuman, Kota Yogyakarta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>
          <BackButton />
          {children}
        </main>
        <footer className="footer" />
      </body>
    </html>
  );
}
