"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onEnquireClick: () => void;
}

const navItems = [
  { id: "home", title: "Home" },
  { id: "stats", title: "Stats" },
  { id: "clients", title: "Clients" },
  { id: "accredianEdge", title: "Accredian Edge" },
  { id: "cat", title: "CAT" },
  { id: "howItWorks", title: "How It Works" },
  { id: "faqs", title: "FAQs" },
  { id: "testimonials", title: "Testimonials" },
];

export default function Navbar({ onEnquireClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6 md:px-14">
      <div className="max-w-[85rem] mx-auto flex justify-between items-center">
        {/* LOGO */}
        <a href="#home" className="flex items-center">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
            alt="Accredian Logo"
            className="w-[124px] h-[32px] object-contain"
          />
        </a>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden xl:flex justify-end items-center flex-1 space-x-6 xl:space-x-8 pr-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-[15px] font-sans font-medium transition-colors hover:text-universal py-1 ${
                  activeSection === item.id
                    ? "text-universal font-semibold border-b-2 border-universal"
                    : "text-gray-700"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden xl:block">
          <button
            onClick={onEnquireClick}
            className="px-5 py-2 bg-universal hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors shadow-sm"
          >
            Enquire Now
          </button>
        </div>

        {/* MOBILE INTERACTION */}
        <div className="xl:hidden flex items-center gap-4">
          <button
            onClick={onEnquireClick}
            className="px-3 py-1.5 bg-universal hover:bg-blue-700 text-white font-medium text-xs rounded-md transition-colors shadow-sm"
          >
            Enquire
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-gray-700 hover:text-universal"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {isOpen && (
        <div className="absolute top-[68px] left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 xl:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-[16px] font-sans font-medium block py-2 px-3 rounded-lg hover:bg-blue-50 hover:text-universal transition-colors ${
                    activeSection === item.id
                      ? "text-universal bg-blue-50/50 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
