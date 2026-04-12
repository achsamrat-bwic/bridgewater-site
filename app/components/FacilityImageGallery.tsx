"use client";

import { motion, Variants } from "framer-motion";
import { ImageOff } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

interface FacilityImageGalleryProps {
  facilityName: string;
  images: GalleryImage[];
  description: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

export default function FacilityImageGallery({
  facilityName,
  images,
  description,
}: FacilityImageGalleryProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-3 sm:mb-4">
            {facilityName} Gallery
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            {description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              whileHover="hover"
              className="group relative rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 bg-gray-100 h-40 sm:h-48 md:h-64 lg:h-72"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm sm:text-base">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Empty State - Show if no images */}
          {images.length === 0 && (
            <div className="col-span-full flex items-center justify-center py-12 md:py-20">
              <div className="text-center">
                <ImageOff className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mx-auto mb-3 md:mb-4" />
                <p className="text-gray-500 text-sm md:text-base">
                  Gallery images coming soon. Please check back later!
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
