"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, Clock, AlertCircle, Mail, Phone } from "lucide-react";
import Footer from "@/app/components/Footer";

interface ApplicationStatus {
  applicationId: string;
  email: string;
  firstName: string;
  lastName: string;
  program: string;
  status: "submitted" | "under-review" | "approved" | "rejected";
  submittedAt: string;
  lastUpdated: string;
  notes?: string;
}

export default function CheckStatusPage() {
  const [applicationId, setApplicationId] = useState("");
  const [email, setEmail] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [applicationData, setApplicationData] = useState<ApplicationStatus | null>(null);
  const [error, setError] = useState("");
  const [searchAttempted, setSearchAttempted] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!applicationId.trim() && !email.trim()) {
      setError("Please fill in either Application ID or Email address");
      return;
    }

    setIsSearching(true);
    setError("");
    setSearchAttempted(true);

    try {
      const response = await fetch("/api/applications/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          applicationId: applicationId.trim() || undefined, 
          email: email.trim() || undefined 
        }),
      });

      if (!response.ok) {
        throw new Error("Application not found. Please check your details.");
      }

      const data = await response.json();
      setApplicationData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch application status");
      setApplicationData(null);
    } finally {
      setIsSearching(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "text-green-600 bg-green-50";
      case "under-review":
        return "text-blue-600 bg-blue-50";
      case "submitted":
        return "text-yellow-600 bg-yellow-50";
      case "rejected":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-6 h-6" />;
      case "under-review":
        return <Clock className="w-6 h-6" />;
      case "rejected":
        return <AlertCircle className="w-6 h-6" />;
      default:
        return <Clock className="w-6 h-6" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "approved":
        return "Approved";
      case "under-review":
        return "Under Review";
      case "submitted":
        return "Submitted";
      case "rejected":
        return "Rejected";
      default:
        return "Unknown";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
            Check Your Application Status
          </h1>
          <p className="text-gray-600 text-lg">
            Enter your Application ID or Email to track your admission status
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application ID <span className="text-gray-500">(or Email)</span>
              </label>
              <input
                type="text"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
                placeholder="e.g., BWH-2026-00001"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227]/20 focus:border-[#c9a227] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-gray-500">(or Application ID)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227]/20 focus:border-[#c9a227] transition-colors"
              />
            </div>
          </div>

          {error && searchAttempted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </div>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isSearching}
            className="w-full bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#b8921f] hover:to-[#c9a227] disabled:opacity-50 disabled:cursor-not-allowed text-[#0a1628] px-6 py-4 rounded-lg font-semibold transition-all shadow-md flex items-center justify-center gap-2"
          >
            {isSearching ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Searching...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Search Status
              </>
            )}
          </button>
        </motion.form>

        {/* Status Result */}
        {applicationData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="mb-8">
              <div className={`flex items-center gap-4 p-6 rounded-xl ${getStatusColor(applicationData.status)}`}>
                {getStatusIcon(applicationData.status)}
                <div>
                  <h2 className="text-2xl font-bold">
                    {getStatusLabel(applicationData.status)}
                  </h2>
                  <p className="text-sm opacity-75 mt-1">
                    Last updated: {new Date(applicationData.lastUpdated).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-[#c9a227] pl-4">
                <p className="text-sm text-gray-600 mb-1">Application ID</p>
                <p className="text-lg font-semibold text-gray-900">
                  {applicationData.applicationId}
                </p>
              </div>

              <div className="border-l-4 border-[#1e3a5f] pl-4">
                <p className="text-sm text-gray-600 mb-1">Applicant Name</p>
                <p className="text-lg font-semibold text-gray-900">
                  {applicationData.firstName} {applicationData.lastName}
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-sm text-gray-600 mb-1">Program Applied</p>
                <p className="text-lg font-semibold text-gray-900">
                  {applicationData.program}
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm text-gray-600 mb-1">Submitted Date</p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(applicationData.submittedAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {applicationData.notes && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-8">
                <p className="text-sm font-semibold text-blue-900 mb-1">Additional Notes</p>
                <p className="text-blue-800">{applicationData.notes}</p>
              </div>
            )}

            <div className="border-t pt-6">
              <p className="text-gray-600 mb-4">Need help with your application?</p>
              <div className="flex gap-4">
                <a
                  href="mailto:admissions@bridgewater.edu.np"
                  className="flex items-center gap-2 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-semibold transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
                <a
                  href="tel:+97714481590"
                  className="flex items-center gap-2 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Info Box */}
        {!applicationData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-gray-200 rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              How to Check Your Status
            </h3>
            <p className="text-gray-700 mb-4">
              You can search by <span className="font-semibold">Application ID</span> or <span className="font-semibold">Email address</span> - just use whichever one you have available.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Application ID</span> is a unique identifier sent to your email after successfully submitting your application. 
              It typically looks like: <span className="font-mono bg-white px-2 py-1 rounded">BWH-2026-00001</span>
            </p>
            <p className="text-gray-700">
              If you don't have your Application ID, simply enter your email address instead. For further assistance, contact us at{" "}
              <a href="mailto:admissions@bridgewater.edu.np" className="text-[#c9a227] hover:underline font-semibold">
                admissions@bridgewater.edu.np
              </a>
            </p>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  );
}
