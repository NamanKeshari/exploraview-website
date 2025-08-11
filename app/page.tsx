import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Finance Consultancy & Wealth Enhancement Services",
  description:
    "Exploraview offers professional corporate finance consultancy services including corporate loans, industrial project loans, machinery loans, business loans, home loans, and comprehensive financial planning solutions.",
  keywords: [
    "corporate finance consultancy",
    "wealth enhancement services",
    "corporate loans India",
    "industrial project loans",
    "machinery financing",
    "business loan consultancy",
    "financial planning services",
    "loan against property",
    "cash credit facility",
    "overdraft services",
  ],
  openGraph: {
    title: "Corporate Finance Consultancy & Wealth Enhancement Services",
    description:
      "Professional corporate finance consultancy services to enhance your wealth and drive business growth. Expert financial solutions tailored to your needs.",
    url: "https://exploraview.com",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://exploraview.com",
  },
};

export default function HomePage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Strategic Financial Planning",
      description:
        "Comprehensive financial strategies tailored to your business objectives and market conditions.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description:
        "Advanced risk assessment and mitigation strategies to protect your investments and assets.",
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description:
        "Access to seasoned financial professionals with decades of industry experience.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Track record of successful financial transformations and wealth enhancement for our clients.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-6">
              Enhance Your Wealth with
              <span className="text-yellow-600 block">
                Strategic Finance Solutions
              </span>
            </h1>
            <p className="text-xl text-blue-600 mb-8 max-w-3xl mx-auto">
              Professional corporate finance consultancy services designed to
              optimize your financial performance and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/facilities">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Why Choose Exploraview?
            </h2>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto">
              We combine deep industry expertise with innovative financial
              strategies to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our expert team help you navigate complex financial challenges
            and unlock new opportunities for growth.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 text-blue-900 hover:bg-yellow-400"
            asChild
          >
            <Link href="https://cal.com/exploraview" target="_blank">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
