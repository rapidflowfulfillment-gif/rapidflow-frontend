import CtaSection from "@/components/cta-section";
import Features from "@/components/features-section";
import Footer from "@/components/footer-section";
import HexpropLanding from "@/components/hexprep-landing";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials-section";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HexpropLanding />
      <Features />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default HomePage;
