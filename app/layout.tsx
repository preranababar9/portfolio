import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",
  description:
    "Full Stack Developer specializing in building fast, scalable web applications for startups and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="h-full flex flex-col antialiased bg-page text-heading" suppressHydrationWarning>
       <Navbar/>
        {children}
      </body>
    </html>
  );
}
