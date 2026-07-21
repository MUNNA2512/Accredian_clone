"use client";

import React from "react";

export default function AccredianEdge() {
  return (
    <>
      {/* ACCREDIAN EDGE SECTION */}
      <section id="accredianEdge" className="mt-16 px-4 md:px-8 xl:px-12">
        <div className="max-w-[85rem] mx-auto">
          {/* Header */}
          <div className="text-center pb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              The <span className="text-universal">Accredian Edge</span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 mt-2">
              Key Aspects of <span className="text-universal">Our Strategic Training</span>
            </p>
          </div>

          {/* Desktop Image */}
          <div className="w-full hidden sm:flex justify-center items-center mb-8">
            <div className="relative w-[95%] xl:w-[90%]">
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
                alt="Our Custom Training Solutions"
                className="w-full h-auto rounded-xl shadow-md border border-gray-100/50 hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="flex sm:hidden w-full justify-center items-center mb-8 px-2">
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-mobile.svg"
              alt="Our Custom Training Solutions Mobile"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </section>

      {/* CAT FRAMEWORK SECTION */}
      <section id="cat" className="w-full mt-16 sm:mt-24 py-12 flex flex-col items-center second-bg-grad border-y border-blue-50/50">
        <div className="max-w-[85rem] mx-auto w-full px-4 md:px-8 xl:px-12 flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              The <span className="text-universal">CAT Framework</span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 mt-2">
              Our Proven Approach to <span className="text-universal">Learning Excellence</span>
            </p>
          </div>

          {/* Diagram Image */}
          <div className="w-full flex justify-center items-center">
            <div className="relative w-full sm:w-[85%] md:w-[70%] max-w-4xl">
              {/* Decorative radial behind the graphic */}
              <div className="absolute inset-0 bg-blue-100/35 blur-3xl rounded-full -z-10" />
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
                alt="CAT framework diagram"
                className="w-full h-auto rounded-xl hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
