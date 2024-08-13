import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from 'primereact/api';
import "./globals.css";
import SupabaseProvider from "@/context/supabase";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modular Store",
  description: "App working in progress for a modern e-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <PrimeReactProvider>
        <SupabaseProvider>
          <body className={inter.className}>{children}</body>
        </SupabaseProvider>
      </PrimeReactProvider>
    </html>
  );
}
