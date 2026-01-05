import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BodyF1RST Corporate Wellness | Employee Health & Fitness Programs",
    template: "%s | BodyF1RST Corporate Wellness",
  },
  description:
    "Transform your workforce with AI-powered corporate wellness solutions. Personalized fitness coaching, nutrition guidance, and measurable health outcomes at 40-70% below industry rates.",
  keywords: [
    "corporate wellness",
    "employee wellness program",
    "workplace fitness",
    "AI fitness coaching",
    "employee health",
    "wellness ROI",
    "corporate fitness",
    "BodyF1RST",
  ],
  authors: [{ name: "BodyF1RST" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://corporate.bodyf1rst.com",
    siteName: "BodyF1RST Corporate Wellness",
    title: "BodyF1RST Corporate Wellness | Employee Health & Fitness Programs",
    description:
      "Transform your workforce with AI-powered corporate wellness. Save 40-70% vs industry rates.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BodyF1RST Corporate Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BodyF1RST Corporate Wellness",
    description: "AI-powered employee wellness at 40-70% below market rates.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
