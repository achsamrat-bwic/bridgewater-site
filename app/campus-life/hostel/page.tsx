"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Home,
  Bed,
  Shield,
  Wifi,
  Droplets,
  BookOpen,
  Users,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Ban,
  Heart,
  ChevronRight,
  Coffee,
  UtensilsCrossed,
  Phone,
  GraduationCap
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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

const roomTypes = [
  {
    type: "Deluxe Room",
    beds: "Single Sharing",
    description: "Premium individual space with high-end furniture and extra privacy for dedicated scholars.",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/facilities/hostel-1.jpg",
    icon: Bed,
    color: "from-[#c9a227] to-[#d4af37]",
    features: ["Private Study Desk", "Premium Bedding", "More Space"],
  },
  {
    type: "Standard Room",
    beds: "Double Sharing",
    description: "Well-appointed shared space with individual study units and ample personal storage.",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/facilities/hostel-2.jpg",
    icon: Users,
    color: "from-[#1e3a5f] to-[#2a4a6f]",
    features: ["Individual Storage", "Comfortable Twin Beds", "Study Corner"],
  },
  {
    type: "Normal Room",
    beds: "Quad Sharing",
    description: "Affordable community living with basic necessities in a social environment.",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/facilities/hostel-3.jpg",
    icon: Home,
    color: "from-emerald-600 to-emerald-700",
    features: ["Core Campus Access", "Basic Amenities", "Social Living"],
  },
];

const stats = [
  { label: "Total Capacity", value: "200+", icon: Users },
  { label: "Daily Meals", value: "4 Times", icon: UtensilsCrossed },
  { label: "Security Guard", value: "24/7", icon: ShieldCheck },
  { label: "WiFi Speed", value: "100 Mbps", icon: Wifi },
];

export default function HostelPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-[88px] sm:pt-[96px]">
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
            variants={containerVariants}
            className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full px-5 py-2 text-[#c9a227] text-sm font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Home className="w-4 h-4" />
              Residential Life
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hostel & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4af37]">Boarding</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto mb-10">
              A secure and professional residential community providing a "Home Away From Home" environment for Bridgewater students.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions/apply"
                className="bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#c9a227]/20 flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                Apply for Hostel
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl text-white text-sm font-semibold">
                <Phone className="w-4 h-4 text-[#c9a227]" />
                <span>Admission: +977-9802344649</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-10 sm:-mt-14 z-10 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1e3a5f] transition-all">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3a5f] group-hover:text-white transition-all" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#1e3a5f]">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-3 py-1 bg-[#1e3a5f]/5 text-[#1e3a5f] rounded-lg text-xs font-bold uppercase tracking-widest mb-4">Quality Living</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6 leading-tight">Separate Secure <br /><span className="text-[#c9a227]">Accommodation</span></h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We take immense pride in providing a professional residential environment. Our separate hostels for boys and girls ensure privacy, security, and a focused atmosphere for learning.
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-4">
                {["Separate Warden Support", "Daily Health Monitoring", "CCTV Surveillance", "Organic Student Meals"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a227]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Academic Excellence</p>
                    <p className="text-white/60 text-sm">Dedicated study hours monitored by teachers.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-video sm:aspect-square md:aspect-video lg:aspect-square rounded-[2rem] sm:rounded-[4rem] overflow-hidden shadow-2xl">
                <Image 
                  src="https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/facilities/hostel-4.jpg" 
                  alt="Study Hall" 
                  fill 
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover" 
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white shadow-2xl rounded-2xl p-6 hidden sm:block border border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center text-white font-bold">24</div>
                  <div>
                    <p className="font-bold text-[#1e3a5f] leading-none">Hours Support</p>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-widest">Warden Presence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Room Options with specific Colors */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">Choose Your Environment</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Different room tiers designed to cater to various student needs and preferences.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image 
                  src={room.image} 
                  alt={room.type} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#1e3a5f]">
                  {room.beds}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${room.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <room.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#c9a227] transition-colors">{room.type}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">{room.description}</p>
                <div className="pt-6 border-t border-gray-50 space-y-3">
                  {room.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs font-bold text-gray-400">
                      <div className="w-1 h-1 rounded-full bg-[#c9a227]" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Amenities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a5f]">Modern Campus Amenities</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {[
              { i: Wifi, t: "Free WiFi" },
              { i: Droplets, t: "Hot Water" },
              { i: UtensilsCrossed, t: "Organic Food" },
              { i: BookOpen, t: "Reading Hall" },
              { i: Shield, t: "Secured" },
              { i: Sparkles, t: "Laundry" }
            ].map((a, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c9a227] transition-colors border border-gray-100">
                  <a.i className="w-6 h-6 text-[#1e3a5f] group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm font-bold text-[#1e3a5f] uppercase tracking-tighter">{a.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-20 bg-[#1e3a5f] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a227] rounded-full blur-[120px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-none">Life Interior</h2>
              <div className="h-1 w-20 bg-[#c9a227] rounded-full" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-2xl sm:rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <Image 
                src="https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images@main/hostel/hostel1.jpeg" 
                alt="Hostel Life 1" 
                fill 
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="relative aspect-square rounded-2xl sm:rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <Image 
                src="https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images@main/hostel/hostel2.jpeg" 
                alt="Hostel Life 2" 
                fill 
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="relative aspect-square rounded-2xl sm:rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <Image 
                src="https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images@main/hostel/hostel3.jpeg" 
                alt="Hostel Life 3" 
                fill 
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="relative aspect-square rounded-2xl sm:rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <Image 
                src="https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images@main/hostel/hostel4.jpeg" 
                alt="Hostel Life 4" 
                fill 
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          <div className="w-16 h-1 bg-[#c9a227] mb-8" />
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1e3a5f] mb-8 tracking-tight">Visit the Campus Premises</h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl leading-relaxed">
            We encourage parents and students to visit the hostel premises in Sinamangal to see our facilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="bg-[#1e3a5f] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#c9a227] transition-all transform hover:-translate-y-1 text-center"
            >
              Book a Visit
            </Link>
            <Link 
               href="/admissions/apply" 
               className="border-2 border-[#1e3a5f] text-[#1e3a5f] px-10 py-5 rounded-2xl font-bold hover:bg-[#1e3a5f] hover:text-white transition-all transform hover:-translate-y-1 text-center"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
