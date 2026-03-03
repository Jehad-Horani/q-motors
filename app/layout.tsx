import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingLanguageToggle } from "@/components/FloatingLanguageToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: "Q Motors | Automotive Distribution & Mobility Platform",
  description:
    "Kingdom of Saudi Arabia - Automotive Distribution & Mobility Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cairo.variable} font-sans bg-[#0B2E34] text-white antialiased selection:bg-[#C6A75E] selection:text-[#0B2E34]`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingLanguageToggle />
        </LanguageProvider>
      </body>
    </html>
  );
}
