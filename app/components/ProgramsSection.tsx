"use client";

import { useEffect, useRef, useState } from "react";
import {
  Atom,
  TrendingUp,
  BookOpen,
  Scale,
  Monitor,
  Briefcase,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { programLinks } from "../../seo";

const iconMap: Record<string, typeof Atom> = {
  Beaker: Atom,
  TrendingUp,
  BookOpen,
  Scale,
  Monitor,
  Briefcase,
  Calculator,
};

const programs = [
  { id: 'plus2-science',     icon: iconMap['Beaker'],     title: '+2 Science',     affiliation: 'NEB',  duration: '2 Years', description: 'NEB-affiliated +2 Science program with Physics, Chemistry, Biology and Mathematics.' },
  { id: 'plus2-management', icon: iconMap['TrendingUp'],  title: '+2 Management',  affiliation: 'NEB',  duration: '2 Years', description: 'NEB-affiliated +2 Management program covering Economics, Accountancy and Business Studies.' },
  { id: 'plus2-law',        icon: iconMap['Scale'],       title: '+2 Law',         affiliation: 'NEB',  duration: '2 Years', description: 'NEB-affiliated +2 Law program providing foundation in constitutional and procedural law.' },
  { id: 'plus2-humanities', icon: iconMap['BookOpen'],    title: '+2 Humanities',  affiliation: 'NEB',  duration: '2 Years', description: 'NEB-affiliated +2 Humanities program covering Social Studies, English and optional subjects.' },
  { id: 'bbs',              icon: iconMap['Briefcase'],   title: 'BBS',            affiliation: 'TU',   duration: '4 Years', description: 'TU-affiliated Bachelor of Business Studies program.' },
  { id: 'bca',              icon: iconMap['Monitor'],     title: 'BCA',            affiliation: 'TU',   duration: '4 Years', description: 'TU-affiliated Bachelor of Computer Applications program.' },
  { id: 'ca',               icon: iconMap['Calculator'],  title: 'CA',             affiliation: 'ICAN', duration: '3 Years', description: 'Chartered Accountancy program affiliated with ICAN Nepal.' },
].map((p) => ({ ...p, icon: p.icon || Atom, seoId: p.id }));

function useRevealOnScroll(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, hasEntered };
}

interface ProgramCardProps {
  program: typeof programs[0];
  index: number;
}

function ProgramCard({ program, index }: ProgramCardProps) {
  const { ref, hasEntered } = useRevealOnScroll(0.1);
  const IconComponent = program.icon;
  const seoLink = programLinks.find(link => link.id === program.seoId);

  return (
    <div
      ref={ref}
      tabIndex={0}
      className={`group bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl border border-gray-100 
        transition-all duration-300 ease-out transform-gpu focus:outline-none focus:ring-4 focus:ring-[#c9a227]/20
        hover:-translate-y-1 hover:border-[#c9a227]/30
        flex flex-col h-full
        ${hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      style={{ transitionDelay: hasEntered ? "0ms" : `${index * 80}ms` }}
      role="button"
      aria-pressed="false"
    >
      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:from-[#c9a227] group-hover:to-[#d4af37] transition-all duration-300">
        <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="inline-block px-2.5 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] text-xs font-semibold rounded-full">
          {program.affiliation}
        </span>
        <span className="inline-block px-2.5 py-1 bg-[#c9a227]/10 text-[#c9a227] text-xs font-semibold rounded-full">
          {program.duration}
        </span>
      </div>

      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1e3a5f] mb-2 md:mb-3 group-hover:text-[#c9a227] transition-colors duration-300">
        {program.title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4 flex-1">
        {program.description}
      </p>

      <a
        href={seoLink?.href || `/academics/${program.title.toLowerCase().replace(/\+|\s/g, "-")}`}
        className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold text-sm md:text-base group-hover:text-[#c9a227] transition-colors duration-300 mt-4 md:mt-6"
        aria-label={seoLink?.ariaLabel || `Learn more about ${program.title} program`}
      >
        {seoLink?.linkText || `Learn more about ${program.title}`}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
}

export default function ProgramsSection() {
  const { ref: sectionRef, hasEntered: sectionVisible } = useRevealOnScroll(0.05);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-500 ease-out
            ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
            Academic Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Our Academic Programs
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            NEB and Tribhuvan University affiliated programs designed to unlock your potential 
            and prepare you for a successful future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>

        <div
          className={`mt-12 md:mt-16 text-center transition-all duration-500 delay-300
            ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <a
            href="/academics"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#c9a227] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a227]/20"
            aria-label="View all academic programs at Bridgewater International College"
          >
            View All Programs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
