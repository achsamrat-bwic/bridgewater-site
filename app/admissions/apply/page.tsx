"use client";

import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  GraduationCap,
  FileText,
  Send,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  ChevronDown,
  Users,
  ClipboardCheck
} from "lucide-react";
import Footer from "@/app/components/Footer";
import GoogleForm from "@/app/components/form";


const programs = [
  { value: "plus2-science", label: "+2 Science (NEB)" },
  { value: "plus2-management", label: "+2 Management (NEB)" },
  { value: "plus2-humanities", label: "+2 Humanities (NEB)" },
  { value: "plus2-law", label: "+2 Law (NEB)" },
  { value: "bca", label: "BCA - Bachelor of Computer Application (TU)" },
  { value: "bbs", label: "BBS - Bachelor of Business Studies (TU)" },
  { value: "ca", label: "CA Coaching (ICAN)" },
];

const steps = [
  { id: 1, title: "Personal Info", icon: User, description: "Your basic details" },
  { id: 2, title: "Academic Info", icon: GraduationCap, description: "Educational background" },
  { id: 3, title: "Guardian Info", icon: Users, description: "Parent/Guardian details" },
  { id: 4, title: "Review & Submit", icon: ClipboardCheck, description: "Confirm your application" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

// Memoized Input Field Component
const InputField = memo(({ 
  label, 
  name, 
  type = "text", 
  placeholder, 
  icon: Icon,
  required = true,
  value,
  onChange,
  error,
  autoComplete
}: { 
  label: string; 
  name: string; 
  type?: string; 
  placeholder?: string;
  icon?: React.ElementType;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete || "off"}
        className={`w-full ${Icon ? 'pl-12' : 'px-4'} pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#c9a227]/20 focus:border-[#c9a227] transition-colors ${
          error ? 'border-red-300 bg-red-50' : 'border-gray-200'
        }`}
        placeholder={placeholder}
      />
    </div>
    {error && (
      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
        <AlertCircle className="w-4 h-4" />
        {error}
      </p>
    )}
  </div>
));

InputField.displayName = 'InputField';

// Memoized Select Field Component
const SelectField = memo(({ 
  label, 
  name, 
  options,
  placeholder,
  icon: Icon,
  required = true,
  value,
  onChange,
  error
}: { 
  label: string; 
  name: string; 
  options: { value: string; label: string }[];
  placeholder: string;
  icon?: React.ElementType;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full ${Icon ? 'pl-12' : 'px-4'} pr-10 py-3 border rounded-xl focus:ring-2 focus:ring-[#c9a227]/20 focus:border-[#c9a227] transition-colors appearance-none bg-white ${
          error ? 'border-red-300 bg-red-50' : 'border-gray-200'
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    </div>
    {error && (
      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
        <AlertCircle className="w-4 h-4" />
        {error}
      </p>
    )}
  </div>
));

SelectField.displayName = 'SelectField';


export default function ApplyPage() {
  /*
  // Existing manual form logic commented out
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({ ... });
  // ... and so on
  */

  return (
    <main className="pt-[80px] md:pt-[104px] bg-white min-h-screen">
      <div className="w-full relative z-10 scrollbar-hide -mt-[2px]">
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        <GoogleForm />
      </div>

      <Footer />
    </main>
  );
}

