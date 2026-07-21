"use client";

import React from "react";
import { ClipboardCheck, Route, Share2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    color: "bg-blue-100/70 text-blue-600 border-blue-200/50",
  },
  {
    icon: Route,
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    color: "bg-indigo-100/70 text-indigo-600 border-indigo-200/50",
  },
  {
    icon: Share2,
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
    color: "bg-emerald-100/70 text-emerald-600 border-emerald-200/50",
  },
];

export default function HowItWorks() {
  return (
    <section id="howItWorks" className="mt-16 sm:mt-24 px-4 md:px-8 xl:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-xl mx-auto">
          <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight">
            How We <span className="text-universal">Deliver Results</span> That Matter?
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 mt-3 m-auto mx-1">
            A Structured Three-Step Approach to{" "}
            <span className="text-universal">Partner Success</span>
          </p>
        </div>

        {/* 3 Step Card Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector lines inside desktop grid */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gray-150 border-t border-dashed border-gray-300 -z-10 -translate-y-6" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:border-blue-100"
              >
                {/* Step number badge */}
                <span className="text-xs uppercase font-extrabold tracking-wider text-gray-400 bg-gray-100 px-3 py-1 rounded-full mb-6">
                  Step 0{index + 1}
                </span>

                {/* Circle Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform duration-300 ${step.color}`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-universal transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
