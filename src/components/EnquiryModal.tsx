"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EnquiryFormInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  courseDomain: string;
  candidates: string;
  mode: string;
  location: string;
}

const domains = [
  { value: "product management", label: "Product Management" },
  { value: "CFO", label: "CFO (Finance)" },
  { value: "data science", label: "Data Science" },
  { value: "artificial intelligence", label: "Artificial Intelligence & Gen-AI" },
  { value: "Human Resource", label: "Human Resource" },
  { value: "strategy & leadership", label: "Strategy & Leadership" },
  { value: "General Management", label: "General Management" },
  { value: "digital Transformation", label: "Digital Transformation" },
  { value: "business management", label: "Business Management" },
  { value: "finance", label: "Finance & Fintech" },
  { value: "project management", label: "Project Management" },
  { value: "senior management", label: "Senior Management" },
  { value: "cybersecurity", label: "Cybersecurity & Cloud" },
];

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormInput>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      courseDomain: "",
      candidates: "",
      mode: "Online",
      location: "",
    },
  });

  if (!isOpen) return null;

  const onSubmit = async (data: EnquiryFormInput) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();
      if (response.ok && resJson.success) {
        setSuccess(true);
        reset();
      } else {
        throw new Error(resJson.error || "Failed to submit enquiry form.");
      }
    } catch (err: any) {
      console.error("Enquiry submission error:", err);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-none border border-gray-150 animate-in zoom-in-95 duration-200">
        
        {/* Left Side: Illustrative Corporate Image (Desktop only) */}
        <div className="hidden md:flex md:w-1/2 bg-blue-100/50 items-center justify-center relative">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp"
            alt="Business Quote Request"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-bold">Empower Your Team</h3>
            <p className="text-sm text-blue-100 mt-2 font-medium">
              Join leading organizations partnering with Accredian to elevate core employee competencies.
            </p>
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div id="scrollbar2" className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto max-h-[85vh] md:max-h-[640px]">
          
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-gray-100">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
              Enquire Now
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 p-1.5 rounded-full transition-all"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Success Dialog */}
          {success ? (
            <div className="flex-1 flex flex-col items-center justify-center py-10 px-4 text-center">
              <span className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 text-green-600">
                <CheckCircle className="w-10 h-10 stroke-[2.5]" />
              </span>
              <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
              <p className="text-sm text-gray-600 mt-3 max-w-sm">
                Your enquiry has been successfully submitted. Our enterprise advisor will contact you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSuccess(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 bg-universal hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex-1 space-y-4">
              {errorMsg && (
                <div className="bg-red-50 text-red-650 text-sm p-3.5 rounded-lg flex items-center gap-2 border border-red-200">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="font-medium">{errorMsg}</p>
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  disabled={loading}
                  className={`mt-1.5 w-full px-3 py-2.5 bg-white border-b-2 outline-none text-sm transition-all focus:border-universal ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="Enter Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs font-semibold mt-1 pl-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                  Corporate Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  disabled={loading}
                  className={`mt-1.5 w-full px-3 py-2.5 bg-white border-b-2 outline-none text-sm transition-all focus:border-universal ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="Enter Corporate Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-semibold mt-1 pl-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[0-9\s-]{10,15}$/,
                      message: "Enter a valid phone number (10+ digits)",
                    },
                  })}
                  disabled={loading}
                  className={`mt-1.5 w-full px-3 py-2.5 bg-white border-b-2 outline-none text-sm transition-all focus:border-universal ${
                    errors.phone ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="Enter Phone Number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs font-semibold mt-1 pl-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  {...register("company", { required: "Company name is required" })}
                  disabled={loading}
                  className={`mt-1.5 w-full px-3 py-2.5 bg-white border-b-2 outline-none text-sm transition-all focus:border-universal ${
                    errors.company ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="Enter Company"
                />
                {errors.company && (
                  <p className="text-red-500 text-xs font-semibold mt-1 pl-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.company.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Course Domain Selection */}
                <div>
                  <label htmlFor="courseDomain" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Domain Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="courseDomain"
                    {...register("courseDomain", { required: "Domain is required" })}
                    disabled={loading}
                    className={`mt-1.5 w-full px-3 py-2.5 bg-white border-b-2 outline-none text-sm transition-all focus:border-universal text-gray-700 ${
                      errors.courseDomain ? "border-red-400" : "border-gray-200"
                    }`}
                  >
                    <option value="" disabled>Select Domain</option>
                    {domains.map((dom) => (
                      <option key={dom.value} value={dom.label}>
                        {dom.label}
                      </option>
                    ))}
                  </select>
                  {errors.courseDomain && (
                    <p className="text-red-500 text-xs font-semibold mt-1 pl-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.courseDomain.message}
                    </p>
                  )}
                </div>

                {/* Candidate Count */}
                <div>
                  <label htmlFor="candidates" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    No of Candidates <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="candidates"
                    {...register("candidates", {
                      required: "Required",
                      min: { value: 1, message: "Must be at least 1" },
                    })}
                    disabled={loading}
                    className={`mt-1.5 w-full px-3 py-2.5 bg-white border-b-2 outline-none text-sm transition-all focus:border-universal ${
                      errors.candidates ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="Enter Candidate Count"
                  />
                  {errors.candidates && (
                    <p className="text-red-500 text-xs font-semibold mt-1 pl-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.candidates.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Training Mode */}
                <div>
                  <label htmlFor="mode" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Training Mode <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="mode"
                    {...register("mode", { required: "Mode is required" })}
                    disabled={loading}
                    className="mt-1.5 w-full px-3 py-2.5 bg-white border-b-2 outline-none text-sm border-gray-200 focus:border-universal text-gray-700"
                  >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    {...register("location", { required: "Location is required" })}
                    disabled={loading}
                    className={`mt-1.5 w-full px-3 py-2.5 bg-white border-b-2 outline-none text-sm transition-all focus:border-universal ${
                      errors.location ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="E.g. Gurugram / Remote"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-xs font-semibold mt-1 pl-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.location.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 py-3 bg-universal hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95 duration-155"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin w-5 h-5" />
                      Submitting Enquiry...
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
