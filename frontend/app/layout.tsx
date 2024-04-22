import type { Metadata } from "next";
import { K2D, Caveat } from "next/font/google";
import "./globals.css";

const k2d = K2D({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-k2d",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Vibe",
  description:
    "An immersive social media website where you can be yourself and connect with others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${k2d.variable} ${caveat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
