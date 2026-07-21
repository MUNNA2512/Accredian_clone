"use client";

import React from "react";

const clientLogos = [
  {
    id: "client-1",
    name: "Reliance",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
  },
  {
    id: "client-3",
    name: "HCL",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
  },
  {
    id: "client-4",
    name: "IBM",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",
  },
  {
    id: "client-5",
    name: "CRIF",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png",
  },
  {
    id: "client-6",
    name: "ADP",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
  },
  {
    id: "client-2",
    name: "Bayer",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="mt-16 sm:mt-24 xl:px-12 px-4 text-center">
      <div className="max-w-[85rem] mx-auto">
        {/* Title */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Our Proven <span className="text-universal">Partnerships</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 mt-2">
            Successful Collaborations With the <span className="text-universal">Industry's Best</span>
          </p>
        </div>

        {/* LOGO GRID (Desktop) / MARQUEE (Mobile) */}
        <div className="w-full flex justify-center items-center mt-6">
          {/* Desktop Grid Layout */}
          <ul className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 w-full justify-items-center items-center">
            {clientLogos.map((logo) => (
              <li
                key={logo.id}
                className="flex justify-center items-center p-3 sm:p-4 bg-gray-50/50 hover:bg-gray-50 border border-gray-100 rounded-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-[140px] aspect-square sm:aspect-video"
              >
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  className={`object-contain max-h-[48px] sm:max-h-[64px] filter grayscale hover:grayscale-0 transition-all duration-500 ${
                    logo.id === "client-3" ? "max-h-[64px]" : ""
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Mobile CSS Marquee Loop Layout */}
          <div className="sm:hidden overflow-hidden relative w-full border-y border-gray-100 py-6">
            <div className="flex whitespace-nowrap animate-marquee">
              {/* Render client logotypes list twice for seamless looped scroll animation */}
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={`${logo.id}-marquee-${index}`}
                  className="flex justify-center items-center px-8 flex-shrink-0"
                >
                  <img
                    src={logo.logo}
                    alt={`${logo.name} logo marquee`}
                    className="h-10 w-24 object-contain filter grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
