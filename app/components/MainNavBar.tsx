"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Home, Info, GraduationCap, FileText, Building2, Phone, ChevronRight } from "lucide-react";
import { CDN_CONFIG } from "@/lib/cdn-config";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "About",
    href: "/about",
    icon: Info,
    dropdown: [
      { name: "Our History", href: "/about/history" },
      { name: "Mission & Vision", href: "/about/mission" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Our Team", href: "/about/administration" },
      { name: "Campus Life", href: "/campus-life" },
    ]
  },
  {
    name: "Academics",
    href: "/academics",
    icon: GraduationCap,
    dropdown: [
      { name: "+2 Science", href: "/academics/plus2-science" },
      { name: "+2 Management", href: "/academics/plus2-management" },
      { name: "+2 Humanities", href: "/academics/plus2-humanities" },
      { name: "+2 Law", href: "/academics/plus2-law" },
      { name: "BCA Program", href: "/academics/bca" },
      { name: "BBS Program", href: "/academics/bbs" },
      { name: "CA Coaching", href: "/academics/ca" },
    ]
  },
  {
    name: "Admissions",
    href: "/admissions",
    icon: FileText,
    dropdown: [
      { name: "Apply Now", href: "/admissions/apply" },
      { name: "Requirements", href: "/admissions/requirements" },
      { name: "Scholarships", href: "/admissions/scholarships" },
      { name: "Fee Structure", href: "/admissions/fees" },
      { name: "FAQs", href: "/admissions/faqs" },
    ]
  },
  {
    name: "Campus Life",
    href: "/campus-life",
    icon: Building2,
    dropdown: [
      { name: "Hostel & Boarding", href: "/campus-life/hostel" },
      { name: "Cafeteria", href: "/campus-life/cafeteria" },
      { name: "Library", href: "/campus-life/library" },
      { name: "Events & Activities", href: "/campus-life/events" },
    ]
  },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function MainNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileSection = (name: string) => {
    setExpandedMobileSection(expandedMobileSection === name ? null : name);
  };

  return (
    <nav className="bg-white shadow-sm overflow-visible">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-3 md:gap-4">
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0 min-w-0">
            <Image
              src={CDN_CONFIG.getCdnUrl("logo.png")}
              alt="BWIC Logo"
              width={48}
              height={48}
              priority
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain flex-shrink-0"
            />
            <div className="hidden sm:block min-w-0">
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-[#1e3a5f] leading-tight">Bridgewater</h1>
              <p className="text-[0.65rem] sm:text-xs text-gray-500 leading-tight">International College</p>
            </div>
            <Image
              src={CDN_CONFIG.getCdnUrl("danfe.png")}
              alt="Additional Logo"
              width={100}
              height={140}
              priority
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain flex-shrink-0"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1 flex-nowrap flex-1 justify-center px-2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group whitespace-nowrap"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className="px-2 md:px-2.5 lg:px-3 py-2 text-xs md:text-sm lg:text-base text-gray-700 hover:text-[#1e3a5f] font-medium transition-colors flex items-center"
                  >
                    {item.name}
                    <ChevronDown className={`w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 ml-0.5 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-2 md:px-2.5 lg:px-3 py-2 text-xs md:text-sm lg:text-base text-gray-700 hover:text-[#1e3a5f] font-medium transition-colors flex items-center"
                  >
                    {item.name}
                  </Link>
                )}
                {item.dropdown && (
                  <div className={`absolute top-full left-0 pt-2 z-[100] transition-all duration-200 ${openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="w-40 md:w-48 lg:w-56 bg-white shadow-lg rounded-md py-2 border border-gray-100 overflow-visible">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 md:px-4 py-1.5 md:py-2 lg:py-2.5 text-xs md:text-xs lg:text-sm text-gray-700 hover:bg-[#1e3a5f] hover:text-white transition-colors whitespace-nowrap"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden sm:flex items-center space-x-1.5 sm:space-x-2 md:space-x-2 flex-shrink-0">
            <Link
              href="/admissions/apply"
              className="bg-[#c9a227] hover:bg-[#b8921f] text-[#0a1628] px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2 md:py-2.5 rounded-md font-semibold transition-colors shadow-sm text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              Apply Now
            </Link>
{/* <Link
              href="/admissions/check-status"
              className="bg-white hover:bg-gray-100 text-[#1e3a5f] px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2 md:py-2.5 rounded-md font-semibold transition-colors shadow-sm border-2 border-[#1e3a5f] text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              Check Status
            </Link> */}
          </div>

          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-[#1e3a5f] rounded-full transform transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`} />
              <span className={`block h-0.5 bg-[#c9a227] rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                }`} />
              <span className={`block h-0.5 bg-[#1e3a5f] rounded-full transform transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[100] transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] sm:w-[75%] max-w-md bg-gradient-to-b from-white to-gray-50 shadow-2xl transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] px-5 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 min-w-0">
                <Image
                  src={CDN_CONFIG.getCdnUrl("logo.png")}
                  alt="BWIC Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain rounded-lg bg-white/10 p-1 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h2 className="text-white font-bold text-base truncate">Bridgewater</h2>
                  <p className="text-white/60 text-xs truncate">International College</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="px-3 py-4 overflow-y-auto max-h-[calc(100vh-240px)]">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isExpanded = expandedMobileSection === item.name;

              return (
                <div key={item.name} className="mb-1">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileSection(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 ${isExpanded
                            ? 'bg-[#1e3a5f] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${isExpanded ? 'bg-white/20' : 'bg-[#1e3a5f]/10'
                            }`}>
                            <IconComponent className={`w-5 h-5 ${isExpanded ? 'text-white' : 'text-[#1e3a5f]'}`} />
                          </div>
                          <span className="font-medium text-base">{item.name}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''
                          } ${isExpanded ? 'text-white/70' : 'text-gray-400'}`} />
                      </button>

                      {/* Dropdown Items */}
                      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="mt-1 ml-6 pl-4 border-l-2 border-[#c9a227]/30 space-y-0.5">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center space-x-2 px-3 py-2.5 text-gray-600 hover:text-[#1e3a5f] hover:bg-[#1e3a5f]/5 rounded-lg transition-colors text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <ChevronRight className="w-3 h-3 text-[#c9a227] flex-shrink-0" />
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3.5 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-9 h-9 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-[#1e3a5f]" />
                      </div>
                      <span className="font-medium text-base">{item.name}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent border-t border-gray-100">
            <div className="space-y-2.5">
              <Link
                href="/admissions/apply"
                className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#b8921f] hover:to-[#c9a227] text-[#0a1628] px-5 py-3 rounded-xl font-semibold transition-all shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Apply Now</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
{/* <Link
                href="/admissions/check-status"
                className="flex items-center justify-center space-x-2 w-full bg-white hover:bg-gray-100 text-[#1e3a5f] px-5 py-3 rounded-xl font-semibold transition-all border-2 border-[#1e3a5f]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Check Status</span>
                <ChevronRight className="w-4 h-4" />
              </Link> */}
              <Link
                href="/contact"
                className="flex items-center justify-center space-x-2 w-full bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white px-5 py-3 rounded-xl font-semibold transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
