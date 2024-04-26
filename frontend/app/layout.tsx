// Next stuff
import type { Metadata } from "next";

// Fonts
import { K2D, Caveat } from "next/font/google";

// Styles
import "./globals.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

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
      <body
        className={`${k2d.variable} ${caveat.variable} font-sans min-h-screen flex flex-col`}
      >
        <GoogleOAuthProvider clientId="375974338673-7bq5hv0q8178djj2tjv75k15sr5klhue.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
