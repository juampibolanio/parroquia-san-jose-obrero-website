import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.parroquiasanjoseobrero.site'),
  title: {
    default: "Parroquia San José Obrero | Resistencia, Chaco",
    template: "%s | San José Obrero"
  },
  description: "Parroquia en Resistencia, Chaco. ¡Bienvenidos a nuestra comunidad parroquial!",
  keywords: ["Parroquia", "San José Obrero", "Resistencia", "Chaco", "Donaciones", "Iglesia Católica", "Horarios de Misa", "Bono Contribución", "Iglesia", "Comunidad"],
  authors: [{ name: "Parroquia San José Obrero" }],
  creator: "Parroquia San José Obrero",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.parroquiasanjoseobrero.site",
    title: "Parroquia San José Obrero - Resistencia",
    description: "Parroquia en Resistencia, Chaco. ¡Bienvenidos a nuestra comunidad parroquial! ",
    siteName: "Parroquia San José Obrero",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parroquia San José Obrero - Resistencia",
    description: "Parroquia en Resistencia, Chaco. ¡Bienvenidos a nuestra comunidad parroquial! ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
