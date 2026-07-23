import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { clinic } from "@/lib/content";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${clinic.name} | Medical Aesthetics in ${clinic.city}`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.shortDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
