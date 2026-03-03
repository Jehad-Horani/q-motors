import type { Metadata } from "next";
import { Playfair_Display, Work_Sans, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingLanguageToggle } from "@/components/FloatingLanguageToggle";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "500", "600", "700", "800", "900"] });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans", weight: ["300", "400", "500", "600", "700"] });
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${playfair.variable} ${workSans.variable} ${cairo.variable} font-body bg-[#0A1E24] text-white antialiased selection:bg-[#C6A75E] selection:text-[#0A1E24]`}
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
