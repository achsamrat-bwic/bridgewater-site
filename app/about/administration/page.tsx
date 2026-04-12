"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AdministrationSection from "@/app/components/AdministrationSection";
import { Users, Building } from "lucide-react";
import { motion } from "framer-motion";

export default function AdministrationPage() {
  return (
    <main>
      <Header />

      <section className="relative pt-[88px] sm:pt-[96px]">
        <div className="relative bg-gradient-to-br from-[#1e3a5f] via-[#243f64] to-[#1a3050] py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="admin-hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="#c9a227" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#admin-hero-pattern)" />
            </svg>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 border border-[#c9a227]/30 rounded-full px-5 py-2 text-[#c9a227] text-sm font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Users className="w-4 h-4" />
              Team
            </div>

            <h1 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]"> Teams</span>
            </h1>

            <p className="text-blue-100/80 max-w-3xl mx-auto">The dedicated administration team ensuring excellent student experience and smooth campus operations.</p>
          </div>
        </div>

        <AdministrationSection />
      </section>

      <Footer />
    </main>
  );
}
