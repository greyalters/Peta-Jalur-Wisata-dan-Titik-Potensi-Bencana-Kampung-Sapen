import { Momo_Trust_Display, Momo_Trust_Sans } from "next/font/google";

export const display = Momo_Trust_Display({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-display",
  adjustFontFallback: false
});

export const sans = Momo_Trust_Sans({ 
  weight: ["400", "600", "800"], 
  subsets: ["latin"], 
  variable: "--font-sans",
  adjustFontFallback: false
});
