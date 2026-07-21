"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  review: string;
  companyLogo: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Reliance",
    companyLogo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
    review: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
  },
  {
    name: "Bayer",
    companyLogo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
    review: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    name: "ADP",
    companyLogo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    review: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setActiveIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section id="testimonials" className="testimonials w-full mt-16 sm:mt-24 py-4 flex flex-col items-center">
      <div className="max-w-[85rem] w-full px-4 md:px-8 xl:px-12 mx-auto">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Testimonials from <span className="text-universal">Our Partners</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 mt-2">
            What <span className="text-universal">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative w-full max-w-4xl mx-auto bg-blue-50/20 border border-blue-100/50 rounded-2xl p-6 sm:p-12 md:p-16 shadow-sm overflow-hidden flex flex-col items-center">
          <div className="absolute top-6 left-6 text-blue-100 dark:text-blue-50/10">
            <Quote className="w-12 h-12 stroke-[4]" />
          </div>

          {/* Slide item */}
          <div className="w-full flex flex-col items-center text-center relative z-10 animate-fade-in">
            {/* Review text */}
            <p className="text-gray-700 text-base sm:text-xl md:text-2xl font-medium leading-relaxed italic max-w-3xl px-2">
              "{testimonials[activeIndex].review}"
            </p>

            {/* Client detail */}
            <div className="mt-8 flex flex-col items-center">
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm w-36 h-16 flex items-center justify-center mb-3">
                <img
                  src={testimonials[activeIndex].companyLogo}
                  alt={`${testimonials[activeIndex].name} company logo`}
                  className="max-h-[36px] max-w-[100px] object-contain"
                />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm tracking-widest uppercase">
                {testimonials[activeIndex].name} Partner
              </h4>
            </div>
          </div>

          {/* Navigation Buttons (Left/Right Arrows) */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-250 bg-white hover:bg-universal hover:text-white hover:border-universal transition-all flex items-center justify-center text-gray-600 shadow-sm active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5 px-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "bg-universal w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-250 bg-white hover:bg-universal hover:text-white hover:border-universal transition-all flex items-center justify-center text-gray-600 shadow-sm active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
