import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 👈 Asegurate que el path sea correcto

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Eventos Quilmes",
  description: "Creamos experiencias inolvidables. Consultá tu fecha hoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-white antialiased">
        <Navbar /> {/* 👈 Aquí lo insertás */}
        <main className="">{children}</main> {/* Ajuste para navbar fijo */}
      </body>
    </html>
  );
}
