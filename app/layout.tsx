import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./component/navbar";
import Footer from "./component/footer";

import { Google_Sans, Inter, Roboto, Playfair_Display } from "next/font/google";

const roboto = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Shiva Institute of Nursing | Basic B.Sc Nursing in Karnataka",
    template: "%s | Shiva Institute of Nursing",
  },
  description:
    "Shiva Institute of Nursing offers a 4-year Basic B.Sc Nursing program in Karnataka with modern facilities, clinical training, and academic excellence.",
  keywords: [
    "B.Sc Nursing Karnataka",
    "Nursing College in Karnataka",
    "Basic BSc Nursing",
    "Shiva Institute of Nursing",
    "Nursing Admission 2026",
  ],
  openGraph: {
    title: "Shiva Institute of Nursing",
    description:
      "Empowering future nurses with knowledge, skill, and compassion.",
    url: "https://yourdomain.com",
    siteName: "Shiva Institute of Nursing",
    locale: "en_IN",
    type: "website",
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} bg-white text-[#0B2C6B] antialiased`}
      >

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
