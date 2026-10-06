import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nathan Kitching | Systems, Security & the Web",
    template: "%s | Nathan Kitching",
  },
  description:
    "Offering systems, security and web services for individuals and small businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-bg min-h-screen flex flex-col text-fg font-sans antialiased">
        <Header />
        <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
