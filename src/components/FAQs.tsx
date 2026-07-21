"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  title: string;
  content: string[];
}

interface FAQGroup {
  title: string;
  content: FAQItem[];
}

const faqData: FAQGroup[] = [
  {
    title: "About the Course",
    content: [
      {
        title: "What types of corporate training programs does Accredian offer?",
        content: [
          "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
        ],
      },
      {
        title: "What domain specializations are available?",
        content: [
          "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
        ],
      },
    ],
  },
  {
    title: "About the Delivery",
    content: [
      {
        title: "Can the courses be customized for specific industries or teams?",
        content: [
          "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",
        ],
      },
      {
        title: "Who are the instructors for these programs?",
        content: [
          "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
        ],
      },
      {
        title: "What formats are the programs delivered in?",
        content: [
          "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
        ],
      },
    ],
  },
  {
    title: "Miscellaneous",
    content: [
      {
        title: "What is the ideal team size for corporate training?",
        content: [
          "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
        ],
      },
      {
        title: "How do we get started with Accredian?",
        content: [
          "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
        ],
      },
    ],
  },
];

export default function FAQs() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full flex justify-center mt-16 sm:mt-24 md:py-12 xl:px-12 px-4">
      <div className="w-full max-w-[85rem]">
        {/* Header */}
        <div className="w-full mb-10">
          <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight">
            Frequently Asked <span className="text-universal">Questions</span>
          </h2>
        </div>

        {/* Tab & Accordion container */}
        <div className="flex gap-8 md:flex-row flex-col">
          {/* TAB SIDE PANEL */}
          <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-2 border-b md:border-b-0 md:border-r border-gray-150 pb-4 md:pb-0 md:pr-4 overflow-x-auto whitespace-nowrap scrollbar-none">
            {faqData.map((group, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setExpandedIndex(0); // reset open accordion
                }}
                className={`px-4 py-3 rounded-lg text-left text-sm font-semibold transition-all duration-200 ${
                  activeTab === index
                    ? "bg-universal text-white shadow-md shadow-blue-500/10"
                    : "text-gray-600 hover:bg-gray-50 hover:text-universal"
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>

          {/* ACCORDION EXPANSION LIST */}
          <div className="w-full md:w-3/4 flex flex-col gap-4">
            {faqData[activeTab].content.map((item, index) => {
              const isOpen = expandedIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-800 hover:text-universal transition-colors gap-4"
                  >
                    <span className="text-base sm:text-lg">{item.title}</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50/50 flex items-center justify-center text-universal">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {/* Transition content area */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] border-t border-gray-50" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 bg-gray-50/30 text-gray-600 text-sm sm:text-base leading-relaxed space-y-2">
                      {item.content.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
