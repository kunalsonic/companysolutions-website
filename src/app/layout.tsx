import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Company Registration & Corporate Legal Compliance Services in India | Company Solutions",
  description:
    "Fast, paperless, and 100% online company registration (Pvt Ltd, LLP, OPC), annual ROC compliance, trademark, and GST filings in Chandigarh, Mohali, Punjab and across India. Trusted by 1,200+ startups. Call +91 73407 43407.",
  keywords: [
    "company registration in india",
    "private limited company registration",
    "llp registration",
    "opc registration",
    "company registration in punjab",
    "company registration in mohali",
    "company registration in chandigarh",
    "annual roc compliance services",
    "company solutions zirakpur",
    "trademark registration india",
  ],
  authors: [{ name: "Company Solutions", url: "https://companysolutions.in" }],
  creator: "Company Solutions",
  publisher: "Company Solutions",
  metadataBase: new URL("https://www.companysolutions.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Company Registration & Corporate Legal Compliance Services in India | Company Solutions",
    description:
      "Register Private Limited, LLP, and OPC companies online with end-to-end guidance from certified Company Secretaries & CAs. 100% paperless.",
    url: "https://companysolutions.in",
    siteName: "Company Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Registration in India | Company Solutions",
    description:
      "Get your Certificate of Incorporation, DSC, DIN, PAN & TAN in 7-10 days. 100% online MCA compliance.",
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization & Local Business Schema for Google SERP
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Company Solutions",
    alternateName: "CompanySolutions.in",
    url: "https://companysolutions.in",
    logo: "https://companysolutions.in/logo.png",
    image: "https://companysolutions.in/og-image.jpg",
    description:
      "Professional corporate legal compliance, company registration, secretarial services, and trademark filing in Punjab and across India.",
    telephone: "+917340743407",
    email: "info@companysolutions.in",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "401, Ground Floor, Savitry Tower, VIP Road",
      addressLocality: "Zirakpur, Mohali",
      addressRegion: "Punjab",
      postalCode: "140603",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.6425,
      longitude: 76.8173,
    },
    areaServed: [
      { "@type": "City", name: "Mohali" },
      { "@type": "City", name: "Chandigarh" },
      { "@type": "City", name: "Panchkula" },
      { "@type": "City", name: "Zirakpur" },
      { "@type": "State", name: "Punjab" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/companysolutions",
      "https://www.linkedin.com/company/company-solutions",
    ],
  };

  return (
    <html lang="en" className={`${dmSans.variable} font-sans scroll-smooth`}>
      <head>
        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CQEKQSJ7QN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CQEKQSJ7QN');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white pb-14 lg:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
