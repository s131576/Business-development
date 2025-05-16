import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Locale } from "../utils/i18n-config";
import { LanguageProvider } from "./components/provider/LanguageProvider";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { CookieBanner } from "./components/CookieBanner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TabEven",
  description: "Splitting group expenses has never been easier. Scan your receipt – TabEven handles the rest. No arguments. No hassle.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <CookieBanner />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
