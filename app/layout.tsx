import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "../components/Nav";
import { ThemeProvider } from "../components/theme-provider";
import QueryClientProviderWrapper from "@/components/QueryProvider";

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
  title: "Outlook_rock8",
  description: "assignment 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProviderWrapper>
      <html lang="en">
        <body
          className={`container mx-auto ${geistSans.variable} ${geistMono.variable} antialiased p-5 sm:p-0`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </QueryClientProviderWrapper>
  );
}
