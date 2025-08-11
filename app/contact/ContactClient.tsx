"use client";

import type React from "react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { bookConsultation } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });

      // Reset success state after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Failed to send message. Please try again or contact us directly."
      );

      // Reset error state after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 7428320045",
      subtitle: "Mon-Sun 10AM-6PM IST",
    },
    {
      icon: Mail,
      title: "Email",
      details: "exploraview.wes@gmail.com",
      subtitle: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Noida, Uttar Pradesh, India",
      subtitle: "By appointment only",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Sunday: 10:00 AM - 6:00 PM",
      subtitle: "Indian Standard Time",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your financial future? Get in touch with our
            expert team to discuss your corporate finance needs and explore how
            we can help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Success State */}
                {status === "success" && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <strong>Message sent successfully!</strong> We'll get back
                      to you within 24 hours.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Error State */}
                {status === "error" && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      <strong>Error:</strong> {errorMessage}
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        disabled={status === "loading"}
                        className={status === "loading" ? "opacity-50" : ""}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        disabled={status === "loading"}
                        className={status === "loading" ? "opacity-50" : ""}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        disabled={status === "loading"}
                        className={status === "loading" ? "opacity-50" : ""}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 7428320045"
                        disabled={status === "loading"}
                        className={status === "loading" ? "opacity-50" : ""}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your financial consulting needs and how we can help your business..."
                      disabled={status === "loading"}
                      className={status === "loading" ? "opacity-50" : ""}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full relative"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 mb-8">
                We're here to help you navigate your financial challenges and
                opportunities. Reach out to us through any of the following
                channels, and our team will respond promptly.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-l-4 border-l-yellow-500">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <info.icon className="h-6 w-6 text-slate-700 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-slate-700 mb-1">{info.details}</p>
                        <p className="text-sm text-slate-500">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="bg-blue-900 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-blue-100 mb-6">
                  Ready to discuss your specific needs? Book a free 30-minute
                  consultation with one of our senior advisors.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-yellow-500 text-blue-900 hover:bg-yellow-400"
                  onClick={bookConsultation}
                >
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
