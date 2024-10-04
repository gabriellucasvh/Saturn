import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Red_Hat_Display } from "next/font/google";

const redHat = Red_Hat_Display({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat-display",
  weight: '400',
 });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Saturn",
  description:
    "A melhor IA para transformar dados complexos em insights valiosos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${redHat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
