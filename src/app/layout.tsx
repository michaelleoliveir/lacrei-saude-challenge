import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
