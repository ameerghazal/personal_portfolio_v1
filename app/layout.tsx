import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ameer's Portfolio",
  description: "Ameer Ghazal's custom made portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
