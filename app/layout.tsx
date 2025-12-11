import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";

const notoSans = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Rich Dad Poor Dad - सारांश",
  description:
    "रॉबर्ट कियोसाकी की पुस्तक 'रिच डैड पुअर डैड' का संक्षिप्त लेकिन गहन हिंदी सारांश।"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className={notoSans.variable}>{children}</body>
    </html>
  );
}
