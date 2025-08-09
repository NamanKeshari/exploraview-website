import { Users, Award, Globe, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const stats = [
    { number: "28+", label: "Years of Experience" },
    { number: "500+", label: "Clients Served" },
    { number: "₹500 Cr+", label: "Fund Raised" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service delivery, ensuring the highest quality outcomes for our clients.",
    },
    {
      icon: Users,
      title: "Integrity",
      description:
        "Our commitment to ethical practices and transparent communication builds lasting trust with our clients and partners.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "We embrace innovative financial solutions and cutting-edge technologies to stay ahead of market trends.",
    },
    {
      icon: Award,
      title: "Results",
      description:
        "Our focus on measurable results ensures that every engagement delivers tangible value and sustainable growth.",
    },
  ];

  const teamMembers = [
    {
      name: "Ram Lal Keshari",
      role: "Founder & CEO",
      experience:
        "28+ years in corporate finance and fudraising for business development",
      image: "/ram-lal-keshari.png",
    },
    {
      name: "Naman Keshari",
      role: "Chief Technical Officer",
      experience: "5+ years in software development and fintech solutions",
      image: "/naman-keshari.png",
    },
    {
      name: "Arsh Keshari",
      role: "Business Head",
      experience: "4+ years in strategic consulting and business development",
      image: "/arsh-keshari.png",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            About Exploraview
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Leading corporate finance consultancy dedicated to enhancing wealth
            and driving financial success for businesses worldwide.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Founded with a vision to transform the corporate finance
                landscape, Exploraview Wealth Enhancement Services has been at
                the forefront of financial innovation for over a decade. Our
                journey began with a simple yet powerful mission: to provide
                businesses with the strategic financial guidance they need to
                thrive in an increasingly complex global economy.
              </p>
              <p>
                What started as a boutique consultancy has evolved into a
                comprehensive financial services firm, serving clients across
                diverse industries and geographies. Our growth has been driven
                by our unwavering commitment to excellence, innovation, and
                client success.
              </p>
              <p>
                Today, we continue to push the boundaries of traditional finance
                consulting, leveraging advanced analytics, market insights, and
                strategic thinking to deliver exceptional value to our clients.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Our Mission
            </h2>
            <div className="bg-slate-50 p-8 rounded-xl">
              <p className="text-lg text-slate-700 mb-4">
                "To empower businesses with strategic financial solutions that
                drive sustainable growth, enhance wealth, and create lasting
                value for all stakeholders."
              </p>
              <p className="text-slate-600">
                We believe that every business has the potential for financial
                excellence. Our role is to unlock that potential through expert
                guidance, innovative strategies, and unwavering support
                throughout the journey.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Measurable results that speak to our commitment and expertise
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Expert Leadership Team
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our leadership team brings together decades of experience in
              corporate finance, fundraising, and strategic consulting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-slate-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-slate-700 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
