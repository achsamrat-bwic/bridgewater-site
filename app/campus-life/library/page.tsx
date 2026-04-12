"use client";

import type { ElementType } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen,
  Library,
  Search,
  Laptop,
  GraduationCap,
  Lightbulb,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  BookMarked,
  FileText,
  Globe,
  Users,
  Brain,
  Award
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { CDN_CONFIG } from "@/lib/cdn-config";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const resources = [
  { icon: BookOpen, title: "Books Collection", description: "Comprehensive textbooks, reference materials, and academic literature" },
  { icon: FileText, title: "Journals & Periodicals", description: "Academic journals, research papers, and scholarly periodicals" },
  { icon: Laptop, title: "Digital Resources", description: "E-books, online databases, and educational software" },
  { icon: BookMarked, title: "Study Materials", description: "Study guides, past papers, and exam preparation materials" },
];

const features = [
  { icon: Search, title: "Easy Search System", description: "Efficient cataloging and search system to find resources quickly" },
  { icon: Clock, title: "Extended Hours", description: "Library open during extended hours for student convenience" },
  { icon: Users, title: "Quiet Study Areas", description: "Dedicated quiet zones for focused individual study" },
  { icon: Lightbulb, title: "Research Support", description: "Staff available to assist with research and resource finding" },
  { icon: Globe, title: "Internet Access", description: "High-speed internet for online research and learning" },
  { icon: Brain, title: "Modern Methodologies", description: "Resources supporting innovative teaching approaches" },
];

export default function LibraryPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-[88px] sm:pt-[96px]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#1e3a5f] via-[#243f64] to-[#1a3050] py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="#c9a227" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-pattern)" />
            </svg>
          </div>
          
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a227]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 border border-[#c9a227]/30 rounded-full px-5 py-2 text-[#c9a227] text-sm font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm"
            >
              <Library className="w-4 h-4" />
              Campus Facilities
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">Library</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto">
              A vast collection of books, journals, and digital resources in a serene environment designed to inspire academic excellence and research.
            </p>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
        </div>

        {/* Overview Section with Text + Image */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
                  Library Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                  Gateway to Academic Excellence
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Our library serves as the intellectual heart of Bridgewater International College, providing students with access to a comprehensive collection of academic resources essential for their educational journey.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The serene environment is specifically designed to foster concentration, deep learning, and academic research. Whether you need to prepare for examinations or conduct research for projects, our library has everything you need.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We support modern teaching methodologies with a focus on innovation and practical learning, ensuring our resources complement the classroom experience effectively.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/homegallery/library.jpeg"
                    alt="Library Interior"
                    width={600}
                    height={400}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#c9a227] to-[#d4af37] rounded-2xl p-5 shadow-xl">
                  <BookOpen className="w-8 h-8 text-white mb-2" />
                  <p className="text-white font-bold text-lg">Modern Facility</p>
                  <p className="text-white/80 text-sm">Well Equipped Library</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headerVariants}
              className="text-center mb-12"
            >
              <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
                Resources
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Library Collection
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-[#c9a227]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1e3a5f] text-lg mb-1">{resource.title}</h3>
                        <p className="text-gray-600 text-sm">{resource.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Features Section with Alternating Layout */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headerVariants}
              className="text-center mb-12"
            >
              <span className="inline-block text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
                Amenities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Modern Facilities
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group flex items-start gap-4 p-6 bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl border border-gray-100 hover:border-[#c9a227]/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e3a5f] mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#1e3a5f] via-[#243f64] to-[#1a3050] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="#c9a227" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-pattern)" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headerVariants}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Discover Our Library?
              </h2>
              <p className="text-blue-100/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Visit our campus to experience our library facilities firsthand and discover the resources available to support your academic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#b8921f] hover:to-[#c9a227] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  Schedule a Visit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/campus-life"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm"
                >
                  More Campus Facilities
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
