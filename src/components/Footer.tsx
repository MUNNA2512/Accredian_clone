"use client";

import React from "react";

// Inline SVGs for social icons (removed from newer lucide-react versions)
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4l16 16M4 20 20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M3 4h4l14 16h-4Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42C1 8.14 1 11.72 1 11.72s0 3.58.46 5.3a2.78 2.78 0 0 0 1.95 1.96C5.12 19.44 12 19.44 12 19.44s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96C23 15.3 23 11.72 23 11.72s0-3.58-.46-5.3z" />
    <polygon points="9.75 15.02 15.5 11.72 9.75 8.42 9.75 15.02" fill="white" />
  </svg>
);

interface FooterProps {
  onEnquireClick: () => void;
}

export default function Footer({ onEnquireClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-[#1d1d1d] sm:bg-white sm:mt-24 py-10 border-t border-gray-100 sm:border-gray-200">
      <div className="max-w-[85rem] w-full px-6 sm:px-14 mx-auto">
        {/* Top footer row: Logo + Enquiry trigger */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 sm:border-gray-200 pb-8">
          <div>
            {/* White logo for mobile dark footer, dark logo for desktop light footer */}
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
              alt="Accredian Logo"
              className="hidden sm:block w-[140px] h-auto object-contain"
            />
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredainnew.webp"
              alt="Accredian Logo Mobile"
              className="block sm:hidden w-[140px] h-auto object-contain"
            />
            
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com/accredianlearn"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 sm:text-gray-500 hover:text-universal transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/accredianedu/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 sm:text-gray-500 hover:text-universal transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/accredianedu"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 sm:text-gray-500 hover:text-universal transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/accredian_edu"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 sm:text-gray-500 hover:text-universal transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 sm:text-gray-500 hover:text-universal transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end w-full md:w-auto">
            <button
              onClick={onEnquireClick}
              className="w-full sm:w-auto px-6 py-2.5 bg-universal hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm text-center"
            >
              Enquire Now
            </button>
            <p className="text-gray-400 sm:text-gray-500 text-xs mt-2 self-start md:self-end">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Links + Contact section */}
        <div className="grid grid-cols-1 md:grid-cols-2 pb-8 gap-8 mt-8 border-b border-gray-700 sm:border-gray-200">
          <div>
            <h3 className="font-semibold text-lg text-white sm:text-black">
              Accredian
            </h3>
            <ul className="mt-4 text-gray-400 sm:text-gray-600 space-y-3">
              <li>
                <a
                  href="https://accredian.com/About"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-universal transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://blog.accredian.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-universal transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://accredian.com/whyaccredian"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-universal transition-colors"
                >
                  Why Accredian
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-white sm:text-black">
              Contact Us
            </h3>
            <div className="mt-4 text-gray-400 sm:text-gray-600 space-y-3">
              <p>
                Email us:{" "}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-universal hover:underline"
                >
                  enterprise@accredian.com
                </a>
              </p>
              <p className="max-w-lg text-sm leading-relaxed">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="flex justify-center items-center pt-8 text-center text-sm text-gray-400 sm:text-gray-500">
          <p>
            &copy; {currentYear} Accredian A Brand of FullStack Education Pvt Ltd.
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
