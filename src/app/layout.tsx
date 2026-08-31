import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baderunissafoundation.org"),
  title: {
    default: "Baderunissa Foundation | Serving Humanity with Compassion",
    template: "%s | Baderunissa Foundation",
  },
  description:
    "Baderunissa Foundation is a grassroots humanitarian organization in Bengaluru working to support vulnerable communities through dialysis support, healthcare assistance and compassionate public service.",
  keywords: [
    "Baderunissa Foundation",
    "dialysis support",
    "humanitarian NGO",
    "Bengaluru",
    "healthcare support",
    "community welfare",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Baderunissa Foundation",
    description:
      "Serving Humanity with Compassion through community care, healthcare support and human dignity initiatives.",
    url: "https://baderunissafoundation.org",
    siteName: "Baderunissa Foundation",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baderunissa Foundation",
    description:
      "Serving Humanity with Compassion through community care, healthcare support and human dignity initiatives.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fffdfb] text-slate-800">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
