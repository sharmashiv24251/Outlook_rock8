"use client";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import QueryClientProviderWrapper from "@/components/QueryProvider";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const DynamicNav = dynamic(() => import("@/components/Nav"), {
  ssr: false, // This ensures the component is only rendered on the client side
});
const DynamicPage = dynamic(() => import("@/app/page"), {
  ssr: false, // This ensures the component is only rendered on the client side
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProviderWrapper>
      <html lang="en">
        <body
          className={`container mx-auto ${geistSans.variable} ${geistMono.variable} antialiased p-5 md:p-0`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicNav />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicPage />
            </Suspense>
          </ThemeProvider>
        </body>
      </html>
    </QueryClientProviderWrapper>
  );
}
