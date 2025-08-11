import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Exploraview - Corporate Finance Consultancy Services",
  description:
    "Contact Exploraview Wealth Enhancement Services for expert corporate finance consultancy. Get in touch via phone: 7428320045, 9818524145 or email: exploraview.wes@gmail.com for business loans, corporate loans, and financial planning.",
  keywords: [
    "contact exploraview",
    "corporate finance consultancy contact",
    "business loan inquiry",
    "corporate loan consultation",
    "financial planning consultation",
    "wealth enhancement services contact",
    "exploraview phone number",
    "exploraview email",
    "financial consultancy inquiry",
    "business finance consultation",
  ],
  openGraph: {
    title: "Contact Exploraview - Corporate Finance Consultancy Services",
    description:
      "Get in touch with Exploraview for expert corporate finance consultancy services. Contact us for business loans, corporate loans, and comprehensive financial planning solutions.",
    url: "https://exploraview.vercel.app/contact",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://exploraview.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
