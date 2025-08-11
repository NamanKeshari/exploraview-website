import {
  CheckCircle,
  Building2,
  Factory,
  Banknote,
  Home,
  GraduationCap,
  CreditCard,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Finance Consultancy Services & Facilities",
  description:
    "Comprehensive corporate finance consultancy services including corporate loans, industrial project loans, machinery loans, business loans, home loans, cash credit, overdraft facilities, and financial planning services.",
  keywords: [
    "corporate finance consultancy services",
    "corporate loans India",
    "industrial project loans",
    "machinery financing",
    "business loan consultancy",
    "home loan services",
    "cash credit facility",
    "overdraft services",
    "loan against property",
    "financial planning services",
    "equipment financing",
    "working capital solutions",
    "term loan facility",
    "balance transfer services",
    "education loan planning",
    "marriage financial planning",
  ],
  openGraph: {
    title: "Corporate Finance Consultancy Services & Facilities - Exploraview",
    description:
      "Expert corporate finance consultancy services including corporate loans, industrial financing, machinery loans, business loans, and comprehensive financial planning solutions.",
    url: "https://exploraview.vercel.app/facilities",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://exploraview.vercel.app/facilities",
  },
};

export default function FacilitiesPage() {
  const services = [
    {
      icon: Building2,
      title: "Corporate & Industrial Financing",
      description:
        "Comprehensive financing solutions for corporate expansion and industrial projects.",
      services: [
        "Corporate Loan",
        "Industrial Project Loan",
        "Equity Financing",
        "Working Capital Solutions",
      ],
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Factory,
      title: "Machinery & Equipment Financing",
      description:
        "Specialized funding for machinery acquisition and equipment upgrades.",
      services: [
        "Machinery Loan",
        "Equipment Financing",
        "Technology Upgrades",
        "Manufacturing Equipment",
      ],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: CreditCard,
      title: "Credit Facilities & Overdrafts",
      description:
        "Flexible credit solutions to manage your cash flow requirements.",
      services: [
        "Cash Credit",
        "Overdraft Facility",
        "Dropline Overdraft",
        "Term Loan Facility",
      ],
      color: "from-green-600 to-green-700",
    },
    {
      icon: Home,
      title: "Property & Asset Financing",
      description:
        "Leverage your property and assets for business growth and personal needs.",
      services: [
        "Loan Against Property",
        "Asset-Based Lending",
        "Commercial Property Loans",
        "Mortgage Solutions",
      ],
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: Banknote,
      title: "Business & Personal Loans",
      description:
        "Tailored loan solutions for business expansion and personal financial needs.",
      services: [
        "Business Loan",
        "Personal Loan",
        "Unsecured Business Funding",
        "Quick Approval Loans",
      ],
      color: "from-red-600 to-red-700",
    },
    {
      icon: Home,
      title: "Home Loans & Transfers",
      description:
        "Complete home financing solutions with competitive rates and flexible terms.",
      services: [
        "Home Loan",
        "Balance Transfer",
        "Home Construction Loan",
        "Plot Purchase Financing",
      ],
      color: "from-indigo-600 to-indigo-700",
    },
    {
      icon: GraduationCap,
      title: "Life Event Financial Planning",
      description:
        "Strategic financial planning for major life milestones and family goals.",
      services: [
        "Children Higher Education Planning",
        "Marriage Financial Planning",
        "Education Loans",
        "Family Goal Planning",
      ],
      color: "from-teal-600 to-teal-700",
    },
  ];

  const whyChooseUs = [
    "Expert Financial Consultation",
    "Competitive Interest Rates",
    "Quick Approval Process",
    "Flexible Repayment Options",
    "Minimal Documentation",
    "End-to-End Support",
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="Exploraview Logo" className="h-20 w-20" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Corporate Finance Consultancy Services
          </h1>
          <p className="text-2xl text-yellow-600 font-semibold mb-6">
            Accomplish Financial Growth
          </p>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to fuel your business
            growth and achieve your personal financial goals through expert
            consultation and tailored funding options.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${service.color} mr-4`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-blue-900 leading-tight">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-sm text-slate-700"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 mb-20 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Exploraview?
            </h2>
            <p className="text-xl text-blue-100">
              Your trusted partner for comprehensive financial solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-blue-800/50 rounded-lg p-4"
              >
                <CheckCircle className="h-6 w-6 text-yellow-400 mr-4 flex-shrink-0" />
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Our Simple Process
            </h2>
            <p className="text-lg text-slate-600">
              From application to approval - we make financing simple and
              efficient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Share Requirements",
                description:
                  "Drop your fund requirements via WhatsApp or email",
              },
              {
                step: "02",
                title: "Documentation",
                description:
                  "Submit minimal required documents for quick processing",
              },
              {
                step: "03",
                title: "Evaluation",
                description:
                  "Our experts evaluate and structure the best solution",
              },
              {
                step: "04",
                title: "Approval & Disbursal",
                description:
                  "Quick approval and fund disbursal to meet your timeline",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-blue-900 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Drop Your Fund Requirements
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with our financial experts to discuss your funding
            needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-800/50 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-400 mb-2">WhatsApp</h3>
              <p className="text-lg">7428320045</p>
            </div>
            <div className="bg-blue-800/50 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-400 mb-2">Email</h3>
              <p className="text-lg">exploraview.wes@gmail.com</p>
            </div>
            <div className="bg-blue-800/50 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-400 mb-2">
                Quick Response
              </h3>
              <p className="text-lg">24-48 Hours</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 font-semibold"
            >
              <a
                href="https://wa.me/917428320045"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 bg-transparent"
              asChild
            >
              <Link href="/contact">Send Email Inquiry</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
