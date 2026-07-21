"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import SupportCTA from "@/components/SupportCTA";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleOpenEnquiry = () => {
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden">
      {/* Dynamic Header navbar */}
      <Navbar onEnquireClick={handleOpenEnquiry} />

      {/* Main Core Landing Sections */}
      <main className="flex flex-col w-full">
        {/* Hero section & Stats cards */}
        <Hero onEnquireClick={handleOpenEnquiry} />

        {/* Corporate Client logos marquee & grid */}
        <Clients />

        {/* The Accredian Edge USP list & CAT Framework diagram */}
        <AccredianEdge />

        {/* How We Deliver details */}
        <HowItWorks />

        {/* Testimonials social-proof slider */}
        <Testimonials />

        {/* Accordions FAQs sections */}
        <FAQs />

        {/* CTA help info banner */}
        <SupportCTA onEnquireClick={handleOpenEnquiry} />
      </main>

      {/* Footer info panels */}
      <Footer onEnquireClick={handleOpenEnquiry} />

      {/* Lead capture popup modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={handleCloseEnquiry} />
    </div>
  );
}
