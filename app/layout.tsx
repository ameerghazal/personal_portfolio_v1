import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });
const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });

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
      <body className={darkerGrotesque.className}>{children}</body>
    </html>
  );
}
