"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Settings, Target, Brain } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import ContactModal from "./common/ContactModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDesktopMouseEnter = () => {
    setIsDesktopDropdownOpen(true);
  };

  const handleDesktopMouseLeave = () => {
    setIsDesktopDropdownOpen(false);
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg fixed top-0 left-0 right-0 m-3 z-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <Image
                  className="rounded-md"
                  src={logo}
                  width={50}
                  height={50}
                  alt="Logo"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8 ml-8">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-gray-900 font-bold transition-colors"
                >
                  Home
                </Link>

                {/* Desktop Dropdown with Hover */}
                <div
                  className="relative"
                  onMouseEnter={handleDesktopMouseEnter}
                  onMouseLeave={handleDesktopMouseLeave}
                >
                  <DropdownMenu
                    open={isDesktopDropdownOpen}
                    onOpenChange={setIsDesktopDropdownOpen}
                  >
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-bold transition-colors">
                      <Link href="/about">
                        <span>About us</span>
                      </Link>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDesktopDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-[290px] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-200"
                    >
                      <DropdownMenuItem asChild>
                        <a
                          href="#our-process"
                          className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-150 flex items-start space-x-3"
                        >
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Settings className="w-4 h-4 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">
                              The process
                            </div>
                            <div className="text-sm text-gray-500">
                              What goes on behind the scenes
                            </div>
                          </div>
                        </a>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <a
                          href="#our-mission"
                          className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-150 flex items-start space-x-3"
                        >
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Target className="w-4 h-4 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">
                              Our mission
                            </div>
                            <div className="text-sm text-gray-500">
                              What we strive for
                            </div>
                          </div>
                        </a>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <a
                          href="#meet-our-team"
                          className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-150 flex items-start space-x-3"
                        >
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Brain className="w-4 h-4 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">
                              Meet our team
                            </div>
                            <div className="text-sm text-gray-500">
                              Who we are
                            </div>
                          </div>
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <Link
                  href="contact"
                  className="text-gray-700 hover:text-gray-900 font-bold transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="faq"
                  className="text-gray-700 hover:text-gray-900 font-bold transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="portal"
                className="bg-gray-100 hover:bg-gray-300 text-gray-700 hover:text-gray-900 font-bold px-4 py-2 rounded transition-colors"
              >
                Client portal
              </Link>
              {/* <a
                href="#"
                className="bg-gray-100 hover:bg-gray-300 text-gray-700 hover:text-gray-900 font-bold px-4 py-2 rounded transition-colors"
              >
                Client portal
              </a> */}
              <Button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Get in touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Home
                </Link>

                {/* Mobile Dropdown (Click-based) */}
                <DropdownMenu
                  open={isMobileDropdownOpen}
                  onOpenChange={setIsMobileDropdownOpen}
                >
                  <DropdownMenuTrigger className="flex items-center justify-between text-gray-700 hover:text-gray-900 font-medium transition-colors w-full text-left">
                    <Link href="about">
                      <span>About us</span>
                    </Link>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-48 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-200"
                  >
                    <DropdownMenuItem asChild>
                      <a
                        href="#our-process"
                        className="w-full transition-colors duration-150 block px-2 py-1"
                        onClick={() => setIsMobileMenuOpen(false)} // Optional: close mobile menu
                      >
                        The process
                      </a>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <a
                        href="#our-mission"
                        className="w-full transition-colors duration-150 block px-2 py-1"
                        onClick={() => setIsMobileMenuOpen(false)} // Optional: close mobile menu
                      >
                        Our mission
                      </a>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <a
                        href="#meet-our-team"
                        className="w-full transition-colors duration-150 block px-2 py-1"
                        onClick={() => setIsMobileMenuOpen(false)} // optional: close mobile menu after click
                      >
                        Meet our team
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  href="contact"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="faq"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  FAQ
                </Link>
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Link
                    href="portal"
                    className="block text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  >
                    Client portal
                  </Link>
                  {/* <a
                    href="#"
                    className="block text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  >
                    Client portal
                  </a> */}
                  <Button className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
