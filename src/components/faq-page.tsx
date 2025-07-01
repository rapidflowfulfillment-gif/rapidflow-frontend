"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import ContactModal from "./common/ContactModal";

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqData = [
    {
      id: 1,
      category: "General",
      question: "What is HexPrep and what services do you offer?",
      answer:
        "HexPrep is a professional Amazon FBA prep service provider. We offer comprehensive prep services including receiving, inspecting, prepping, packaging, and shipping your products to Amazon fulfillment centers. We also provide storage solutions and handle both FBA and FBM orders.",
    },
    {
      id: 2,
      category: "General",
      question: "Where are your warehouses located?",
      answer:
        "We operate from two strategic locations: our main warehouse in Hillsboro, Oregon (which offers tax-free advantages), and our secondary facility in Chicago, Illinois for faster shipping to central and eastern markets.",
    },
    {
      id: 3,
      category: "Pricing",
      question: "How much do your services cost?",
      answer:
        "Our pricing is competitive and varies based on the type and volume of services required. We offer transparent pricing with no hidden fees. Contact us for a customized quote based on your specific needs and volume requirements.",
    },
    {
      id: 4,
      category: "Pricing",
      question: "Do you offer volume discounts?",
      answer:
        "Yes, we offer volume discounts for larger shipments and long-term partnerships. The more you ship with us, the better rates you'll receive. Contact our team to discuss volume pricing options.",
    },
    {
      id: 5,
      category: "Process",
      question: "What is your turnaround time?",
      answer:
        "Our standard turnaround time is 48 hours from when we receive your inventory. This includes receiving, inspecting, prepping, and shipping to Amazon. For urgent orders, we may be able to accommodate faster processing.",
    },
    {
      id: 6,
      category: "Process",
      question: "What prep services do you provide?",
      answer:
        "We provide all standard Amazon FBA prep services including: labeling, bagging, bundling, bubble wrapping, taping, removal of existing labels, quality inspections, and custom prep work as needed to meet Amazon's requirements.",
    },
    {
      id: 7,
      category: "Process",
      question: "How do you handle damaged or defective items?",
      answer:
        "During our inspection process, we identify any damaged or defective items and immediately notify you with photos and details. We can either return these items to you, dispose of them per your instructions, or attempt repairs if feasible.",
    },
    {
      id: 8,
      category: "Shipping",
      question: "How do I send my products to your warehouse?",
      answer:
        "You can ship your products directly to our warehouse addresses. We'll provide you with specific shipping instructions and our warehouse address once you become a client. We accept shipments via all major carriers.",
    },
    {
      id: 9,
      category: "Shipping",
      question: "Do you provide tracking information?",
      answer:
        "Yes, we provide full tracking information for all shipments. You'll receive notifications when we receive your inventory, when prep work is completed, and when items are shipped to Amazon with tracking numbers.",
    },
    {
      id: 10,
      category: "Shipping",
      question: "Can you handle LTL and FTL shipments?",
      answer:
        "We have loading docks available at both locations to handle LTL (Less Than Truckload) and FTL (Full Truckload) shipments efficiently.",
    },
    {
      id: 11,
      category: "Account",
      question: "How do I get started with HexPrep?",
      answer:
        "Getting started is easy! Contact us through our website, phone, or email. We'll discuss your needs, provide pricing, and set up your account. Once approved, we'll provide warehouse addresses and shipping instructions.",
    },
    {
      id: 12,
      category: "Account",
      question: "Do you require a minimum order volume?",
      answer:
        "We work with businesses of all sizes, from small sellers to large enterprises. While we don't have a strict minimum, our services are most cost-effective for regular shipments. Contact us to discuss your specific situation.",
    },
    {
      id: 13,
      category: "Account",
      question: "How do I access the client portal?",
      answer:
        "Once you become a client, we'll provide you with login credentials for our client portal where you can track shipments, view invoices, and manage your account. The portal is accessible 24/7 from our website.",
    },
    {
      id: 14,
      category: "Support",
      question: "What are your business hours?",
      answer:
        "Our business hours are Monday-Friday 8:00 AM - 6:00 PM PST, and Saturday 9:00 AM - 4:00 PM PST. We're closed on Sundays. However, you can always reach us via email, and we'll respond during business hours.",
    },
    {
      id: 15,
      category: "Support",
      question: "How can I contact customer support?",
      answer:
        "You can reach our support team via email at contact@hexprep.com, phone at (503) 313-1528, or through our website contact form. We typically respond to emails within 24 hours during business days.",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(faqData.map((item) => item.category))),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our Amazon FBA prep services,
            pricing, and processes.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-6 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <Card
                  key={item.id}
                  className="shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {item.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openItems.includes(item.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </button>

                    {openItems.includes(item.id) && (
                      <div className="px-6 pb-6">
                        <div className="border-t pt-4">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can&apos;t find what you&apos;re looking for? Our team is here to
            help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </a>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="border border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Email Support
            </Button>
          </div>
        </div>
        {/* Contact Modal */}
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </div>
  );
}
