"use client";

import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Clock, Shield } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    serviceType: "",
    budget: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Check if all required fields are filled
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "company",
      "serviceType",
      "budget",
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    if (missingFields.length > 0) {
      console.log("Missing required fields:", missingFields);
      alert(
        `Please fill in the following required fields: ${missingFields.join(
          ", "
        )}`
      );
      return;
    }

    console.log("All fields completed!");
    alert("Form submitted successfully! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-black relative overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/20 via-transparent to-red-600/20 animate-pulse"></div>
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-red-400/10 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}

        {/* Large Geometric Shapes */}
        <div
          className="absolute top-10 left-10 w-64 h-64 border border-red-500/20 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-red-400/30 rotate-45 animate-pulse"></div>
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-red-600/25 animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>

        {/* Flowing Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="rgb(239, 68, 68)"
                stopOpacity="0.1"
              />
              <stop
                offset="50%"
                stopColor="rgb(239, 68, 68)"
                stopOpacity="0.3"
              />
              <stop
                offset="100%"
                stopColor="rgb(239, 68, 68)"
                stopOpacity="0.1"
              />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z"
            fill="url(#lineGradient)"
            className="animate-pulse"
          />
          <path
            d="M0,300 Q300,250 600,300 T1200,300 L1200,200 L0,200 Z"
            fill="url(#lineGradient)"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </svg>

        {/* Glowing Orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-20 h-20 bg-red-500 rounded-full opacity-20 blur-xl animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-red-400 rounded-full opacity-25 blur-lg animate-ping"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/3 w-24 h-24 bg-red-600 rounded-full opacity-15 blur-2xl animate-ping"
          style={{ animationDelay: "2.5s", animationDuration: "5s" }}
        ></div>

        {/* Matrix-like falling elements */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute w-px bg-gradient-to-b from-red-500/50 to-transparent opacity-40"
            style={{
              left: `${i * 5}%`,
              height: "100px",
              animation: `fall ${2 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}

        {/* Hexagonal Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={`hex-${i}`}
                className="w-4 h-4 border border-red-500/30 transform rotate-45 animate-pulse"
                style={{ animationDelay: `${(i * 0.1) % 5}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes fall {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Logo */}
        <div className="mb-16 text-center">
          <div className="items-center justify-center">
            <Image
              className="w-[300px] h-[150px] drop-shadow-2xl"
              src={logo}
              width={300}
              height={150}
              alt="Logo"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                Matthew&apos;s Professional Services
              </h1>
              <p className="text-xl text-red-300 leading-relaxed font-medium drop-shadow-md">
                Expert solutions in web development, design, and digital
                consulting services
              </p>
            </div>

            {/* Enhanced Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Proven Expertise
                  </h3>
                  <p className="text-gray-300">
                    Custom solutions tailored for your unique requirements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Efficient Delivery
                  </h3>
                  <p className="text-gray-300">
                    Reliable and timely project completion
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Scalable Solutions
                  </h3>
                  <p className="text-gray-300">
                    Grows and adapts with your business needs
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 drop-shadow-lg">
                  500+
                </div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 drop-shadow-lg">
                  98%
                </div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 drop-shadow-lg">
                  5+
                </div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md">
                Let Matthew handle the technical complexities so you can focus
                on your core business objectives.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-2xl hover:shadow-red-500/25 hover:scale-110 border border-red-400/50"
              >
                Get Started Today!
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:sticky lg:top-8">
            <Card className="bg-white/10 backdrop-blur-xl shadow-2xl border border-white/30 overflow-hidden hover:bg-white/15 transition-all duration-500 hover:scale-105">
              <CardHeader className="pb-6 bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-sm text-white border-b border-white/20">
                <CardTitle className="text-2xl font-bold text-center drop-shadow-lg">
                  Get a Quote for Services
                </CardTitle>
                <p className="text-center text-red-100 mt-2 drop-shadow-md">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-white"
                      >
                        First name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        required
                        className="border-white/30 focus:border-red-400 focus:ring-red-400 bg-white/10 text-white placeholder:text-gray-300 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-white"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        required
                        className="border-white/30 focus:border-red-400 focus:ring-red-400 bg-white/10 text-white placeholder:text-gray-300 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-white"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                        className="border-white/30 focus:border-red-400 focus:ring-red-400 bg-white/10 text-white placeholder:text-gray-300 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-white"
                      >
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                        className="border-white/30 focus:border-red-400 focus:ring-red-400 bg-white/10 text-white placeholder:text-gray-300 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="company"
                        className="text-sm font-medium text-white"
                      >
                        Company name
                      </Label>
                      <Input
                        id="company"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        required
                        className="border-white/30 focus:border-red-400 focus:ring-red-400 bg-white/10 text-white placeholder:text-gray-300 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="website"
                        className="text-sm font-medium text-white"
                      >
                        Company website
                      </Label>
                      <Input
                        id="website"
                        placeholder="Company website"
                        value={formData.website}
                        onChange={(e) =>
                          handleInputChange("website", e.target.value)
                        }
                        className="border-white/30 focus:border-red-400 focus:ring-red-400 bg-white/10 text-white placeholder:text-gray-300 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="serviceType"
                      className="text-sm font-medium text-white"
                    >
                      Service Type
                    </Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) =>
                        handleInputChange("serviceType", value)
                      }
                      required
                    >
                      <SelectTrigger className="border-white/30 focus:border-red-400 focus:ring-red-400 bg-white/10 text-white backdrop-blur-sm">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800/95 border-white/30 backdrop-blur-xl">
                        <SelectItem
                          value="ecommerce-platform"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          ECommerce Platform
                        </SelectItem>
                        <SelectItem
                          value="web-design"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          Web Design
                        </SelectItem>
                        <SelectItem
                          value="amazon"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          Amazon
                        </SelectItem>
                        <SelectItem
                          value="bigcommerce"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          BigCommerce
                        </SelectItem>
                        <SelectItem
                          value="magento"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          Magento
                        </SelectItem>
                        <SelectItem
                          value="other"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          None/Other
                        </SelectItem>
                        <SelectItem
                          value="salesforce"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          SalesForce
                        </SelectItem>
                        <SelectItem
                          value="shopify"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          Shopify
                        </SelectItem>
                        <SelectItem
                          value="square"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          Square
                        </SelectItem>
                        <SelectItem
                          value="squarespace"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          Squarespace
                        </SelectItem>
                        <SelectItem
                          value="tiktok"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          TikTok
                        </SelectItem>
                        <SelectItem
                          value="walmart"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          Walmart
                        </SelectItem>
                        <SelectItem
                          value="wix"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          Wix
                        </SelectItem>
                        <SelectItem
                          value="woocommerce"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          WooCommerce
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="budget"
                      className="text-sm font-medium text-white"
                    >
                      Project Budget Range
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        handleInputChange("budget", value)
                      }
                      required
                    >
                      <SelectTrigger className="border-white/30 focus:border-red-400 focus:ring-red-400 bg-white/10 text-white backdrop-blur-sm">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800/95 border-white/30 backdrop-blur-xl">
                        <SelectItem
                          value="500"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          Monthly Order Volume (Min req - 500/mo)
                        </SelectItem>
                        <SelectItem
                          value="500-1000"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          500-1000
                        </SelectItem>
                        <SelectItem
                          value="1001-5000"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          1001-5000
                        </SelectItem>
                        <SelectItem
                          value="5001-10k"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          5001-10,000
                        </SelectItem>
                        <SelectItem
                          value="10k+"
                          className="hover:bg-red-500/20 focus:bg-red-500/20 text-white"
                        >
                          10,000+
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Link href="/home">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-black-500 to-black-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 rounded-xl transition-all mt-6 shadow-2xl hover:shadow-red-500/25 hover:scale-105 border border-red-400/50"
                      size="lg"
                    >
                      Send Quote Request
                    </Button>
                  </Link>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mt-4">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Free consultation included</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
