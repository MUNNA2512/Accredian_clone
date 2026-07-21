"use client";

import React from "react";
import { ArrowRight, Headset } from "lucide-react";

interface SupportCTAProps {
  onEnquireClick: () => void;
}

export default function SupportCTA({ onEnquireClick }: SupportCTAProps) {
  return (
    <section id="supportSection" className="cta flex justify-center w-full mt-16 sm:mt-24 xl:px-12 px-4 shadow-sm">
      <div className="cta-grad border border-universal/30 w-full max-w-[85rem] py-10 md:py-16 md:px-12 px-6 bg-universal rounded-2xl flex items-center justify-between flex-col md:flex-row gap-6 shadow-lg shadow-blue-500/10">
        
        {/* Contact info grid */}
        <div className="flex gap-6 md:flex-row flex-col md:items-start items-center">
          <div className="w-16 h-16 flex-shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-0.5 border border-white/20">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <Headset className="w-8 h-8 text-universal" />
            </div>
          </div>
          
          <div className="md:text-left text-center flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="text-sm sm:text-lg mt-2 max-w-xl font-medium text-blue-100">
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onEnquireClick}
          className="w-full md:w-auto px-6 py-3.5 bg-white text-universal hover:bg-blue-50 hover:scale-[1.02] text-lg font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 flex-shrink-0 md:min-w-[200px]"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
}
