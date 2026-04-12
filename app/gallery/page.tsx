"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera, GraduationCap, Users, Trophy, Building, PartyPopper } from "lucide-react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/homegallery/maincampus.jpg",
    title: "Main Campus",
    category: "Campus"
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/homegallery/event-1.jpg",
    title: "Annual Event",
    category: "Events"
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/homegallery/classroomsession.jpg",
    title: "Classroom",
    category: "Academics"
  },
  {
    id: 4,
    src: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/gallery/library.jpg",
    title: "Library",
    category: "Facilities"
  },
  {
    id: 5,
    src: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/gallery/student-life.jpg",
    title: "Student Activities",
    category: "Student Life"
  },
  {
    id: 6,
    src: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/gallery/sports.jpg",
    title: "Sports Day",
    category: "Events"
  },
  {
    id: 7,
    src: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/gallery/auditorium.jpg",
    title: "Auditorium",
    category: "Campus"
  },
  {
    id: 8,
    src: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/gallery/lab.jpg",
    title: "Science Lab",
    category: "Academics"
  },
];

const categories = [
  { id: "all", name: "All", icon: Camera },
  { id: "Campus", name: "Campus", icon: Building },
  { id: "Events", name: "Events", icon: PartyPopper },
  { id: "Academics", name: "Academics", icon: GraduationCap },
  { id: "Facilities", name: "Facilities", icon: Building },
  { id: "Student Life", name: "Student Life", icon: Users },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    if (direction === "prev") {
      const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
      setSelectedImage(filteredItems[newIndex].id);
    } else {
      const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(filteredItems[newIndex].id);
    }
  };

  return (
    <>
      <MainNavBar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] py-20">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Capturing moments and memories at BWIC
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#c9a227] text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item.id)}
                  className="group relative aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-white/70 text-sm capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No images found in this category</p>
              </div>
            )}
          </div>
        </section>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[80vh] mx-4">
              <div className="bg-gray-800 aspect-video rounded-lg overflow-hidden">
                {filteredItems.find(item => item.id === selectedImage) && (
                  <Image
                    src={filteredItems.find(item => item.id === selectedImage)?.src || ""}
                    alt={filteredItems.find(item => item.id === selectedImage)?.title || ""}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
