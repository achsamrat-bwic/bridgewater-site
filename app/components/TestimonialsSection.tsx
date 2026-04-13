"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { CDN_CONFIG } from "@/lib/cdn-config";

interface Testimonial {
  name: string;
  course: string;
  image: string;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const testimonials: Testimonial[] = [
  {
    name: "Pritila Gautam",
    course: "+2 Management-CSMath",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/whatourstudentsay/pritila.jpeg",
    quote: "This college prepared me for life beyond education. With supportive teachers, a positive environment, and countless opportunities, it helped me grow both academically and personally."
  },
  {
    name: "Rahul Adhikari",
    course: "BCA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "Bridgewater gave me the technical skills and confidence I needed. The computer labs are world-class, and the internship opportunities opened doors to my dream career."
  },
  {
    name: "Anisha Thapa",
    course: "BBS",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "The business program here is exceptional. From case studies to real-world projects, every aspect of my education has been practical and industry-relevant."
  },
  {
    name: "Sanjay Poudel",
    course: "Law",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    quote: "The moot court sessions and legal workshops gave me invaluable courtroom experience. I feel completely prepared for my legal career ahead."
  },
  {
    name: "Kritika Basnet",
    course: "+2 Management",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    quote: "The supportive environment and dedicated teachers helped me achieve distinction in my board exams. I couldn't have asked for a better college experience."
  },
  {
    name: "Arun Maharjan",
    course: "+2 Humanities",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "The diverse curriculum and thought-provoking discussions expanded my worldview. Bridgewater truly nurtures critical thinking and creativity."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative bg-white rounded-2xl p-6 md:p-8
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        hover:shadow-[0_16px_40px_rgba(30,58,95,0.12)]
        border border-gray-100/80 hover:border-[#c9a227]/30
        transition-all duration-300 ease-out"
    >
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote className="w-12 h-12 text-[#1e3a5f]" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-5">
          <div className="relative">
            <img
              src={testimonial.image.startsWith("http") ? testimonial.image : CDN_CONFIG.getCdnUrl(testimonial.image.replace(/^\/images/, "images"))}
              alt={testimonial.name}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover
                ring-2 ring-[#1e3a5f]/10 group-hover:ring-[#c9a227]/40
                transition-all duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-[#c9a227] to-[#d4af37] 
              rounded-full flex items-center justify-center
              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-lg md:text-xl font-bold text-[#1e3a5f] group-hover:text-[#1e3a5f] transition-colors duration-300">
              {testimonial.name}
            </p>
            <p className="text-sm md:text-base text-[#c9a227] font-medium">
              {testimonial.course}
            </p>
          </div>
        </div>

        <blockquote className="text-gray-600 leading-relaxed text-sm md:text-base italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1
        bg-gradient-to-r from-[#1e3a5f] via-[#c9a227] to-[#1e3a5f]
        opacity-0 group-hover:opacity-100
        transform scale-x-0 group-hover:scale-x-100
        transition-all duration-500 origin-center rounded-b-2xl" />
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-[#c9a227] font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
            Student Voices
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            What Our Students Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from our accomplished students about their transformative journey
            and how Bridgewater shaped their path to success.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
