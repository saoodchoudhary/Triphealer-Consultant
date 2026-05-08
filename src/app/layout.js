import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

// Display font — headings, brand name, bold labels
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Body font — all paragraph & UI text
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Triphealer – Medical Tourism & Manpower Consultant",
  description:
    "Triphealer connects Gulf employers with skilled manpower and assists Gulf families seeking medical treatment in India. Complete visa, travel, and support services under one roof.",
  keywords:
    "medical tourism India, Gulf manpower, work visa Gulf, overseas recruitment, hospital India Gulf patients, Triphealer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
