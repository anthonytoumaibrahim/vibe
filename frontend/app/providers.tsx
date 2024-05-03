"use client";

import StoreProvider from "./lib/StoreProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId="375974338673-7bq5hv0q8178djj2tjv75k15sr5klhue.apps.googleusercontent.com">
      <StoreProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </StoreProvider>
    </GoogleOAuthProvider>
  );
}
