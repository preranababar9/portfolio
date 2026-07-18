import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AOSInit from "./components/AOSInit";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prerana Babar | Full Stack Developer",
  description:
    "Full Stack Developer specializing in building fast, scalable web applications for startups and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth overflow-x-hidden`}>
      <body className="h-full flex flex-col overflow-x-hidden antialiased bg-page text-heading" suppressHydrationWarning>
        <AOSInit />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
