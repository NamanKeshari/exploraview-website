import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default:
      "Exploraview Wealth Enhancement Services - Corporate Finance Consultancy",
    template: "%s | Exploraview Wealth Enhancement Services",
  },
  description:
    "Professional corporate finance consultancy services including corporate loans, industrial project loans, machinery loans, business loans, home loans, and financial planning. Expert wealth enhancement solutions.",
  keywords: [
    "corporate finance consultancy",
    "wealth enhancement services",
    "corporate loans",
    "industrial project loans",
    "machinery loans",
    "business loans",
    "home loans",
    "financial planning",
    "loan against property",
    "cash credit",
    "overdraft facility",
    "balance transfer",
    "financial consultancy",
    "investment advisory",
    "exploraview",
  ],
  authors: [{ name: "Exploraview Wealth Enhancement Services" }],
  creator: "Exploraview Wealth Enhancement Services",
  publisher: "Exploraview Wealth Enhancement Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://exploraview.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Exploraview Wealth Enhancement Services - Corporate Finance Consultancy",
    description:
      "Professional corporate finance consultancy services including corporate loans, industrial project loans, machinery loans, and comprehensive financial planning solutions.",
    url: "https://exploraview.vercel.app",
    siteName: "Exploraview Wealth Enhancement Services",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Exploraview Wealth Enhancement Services Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Exploraview Wealth Enhancement Services - Corporate Finance Consultancy",
    description:
      "Professional corporate finance consultancy services including corporate loans, industrial project loans, machinery loans, and comprehensive financial planning solutions.",
    images: ["/logo.png"],
    creator: "@exploraview",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Exploraview Wealth Enhancement Services",
              description:
                "Professional corporate finance consultancy services including corporate loans, industrial project loans, machinery loans, business loans, home loans, and financial planning.",
              url: "https://exploraview.vercel.app",
              logo: "https://exploraview.vercel.app/logo.png",
              image: "https://exploraview.vercel.app/logo.png",
              telephone: "+91-7428320045",
              email: "exploraview.wes@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              serviceType: [
                "Corporate Finance Consultancy",
                "Wealth Enhancement Services",
                "Corporate Loans",
                "Industrial Project Loans",
                "Machinery Loans",
                "Business Loans",
                "Home Loans",
                "Financial Planning",
              ],
              areaServed: "India",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Financial Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Corporate Loans",
                      description:
                        "Corporate loan, industrial project loan, and equity financing solutions",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Loans",
                      description:
                        "Business loans and personal loan solutions for entrepreneurs",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Home Loans",
                      description: "Home loans and balance transfer services",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
