"use client";

import React from "react";
import { Check } from "lucide-react";

interface HeroProps {
  onEnquireClick: () => void;
}

const statsItems = [
  {
    id: 1,
    title: "Professionals trained for career success",
    value: "10K+",
  },
  {
    id: 2,
    title: "Sessions delivered with learning excellence",
    value: "200+",
  },
  {
    id: 3,
    title: "Active learners engaged in dynamic courses",
    value: "5K+",
  },
];

const checkPoints = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
  "Measurable Impact",
];

export default function Hero({ onEnquireClick }: HeroProps) {
  return (
    <section id="home" className="w-full pt-24 sm:pt-32 xl:px-12 px-4 mb-10">
      <div className="max-w-[85rem] mx-auto">
        {/* HERO CONTAINER CARD */}
        <div className="rounded-2xl md:rounded-[2rem] bg-blue-50/70 border border-blue-100/50 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 p-6 sm:p-10 md:p-12 lg:p-16 shadow-card overflow-visible">
          {/* Text Left */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 sm:gap-6 lg:gap-8">
            <h1 className="text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[4rem] font-bold leading-tight text-gray-900 tracking-tight">
              Next-Gen <span className="text-universal">Expertise</span> for Your{" "}
              <span className="text-universal">Enterprise</span>
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl text-center lg:text-left max-w-lg mx-auto lg:mx-0 font-medium">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Bullets grid */}
            <ul className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {checkPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-gray-800">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="flex justify-center lg:justify-start mt-2">
              <button
                onClick={onEnquireClick}
                className="w-[80%] sm:w-[200px] py-3 text-base sm:text-lg font-semibold text-white bg-universal hover:bg-blue-700 rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/20 active:scale-95"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Image Right */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[480px] lg:max-w-none">
              {/* Decorative Gradients */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl z-0" />
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
                alt="Accredian Corporate Learning"
                className="w-full h-auto object-contain relative z-10 transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div id="stats" className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {statsItems.map((stat) => (
            <div
              key={stat.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-blue-100 group"
            >
              <span className="text-4xl sm:text-5xl font-extrabold text-universal group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <p className="mt-3 text-sm sm:text-base font-semibold text-gray-800 max-w-[240px]">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
