"use client";

import { motion, Variants } from "framer-motion";
import { Facebook, Phone, MessageCircle } from "lucide-react";

interface Member {
  name: string;
  role: string;
  image: string;
  phone: string;
  whatsapp: string;
  facebook: string;
  position?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const members: Member[] = [
  {
    name: "Krishna Paudel",
    role: "Principal",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/leadership/principal.jpeg",
    phone: "977-9851136056",
    whatsapp: "977-9851136056",
    facebook: "lkrdf",
    position: 1,
  },
  {
    name: "Bishnu Sharma",
    role: "Vice-Principal",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/leadership/vice-principal.jpeg",
    phone: "+977-9803756714",
    whatsapp: "+977-9803756714",
    facebook: "lkrdf",
    position: 1,
  }, {
    name: "Bikram Sharma",
    role: "Head-Administration",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/bikram-sharma.jpeg",
    phone: "977-9802334186",
    whatsapp: "977-9802334186",
    facebook: "lkrdf",
    position: 1,
  },
  {
    name: "Ashok Rai",
    role: "Science Coordinator",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/ashok-rai.jpeg",
    phone: "+977-9803756714",
    whatsapp: "+977-9803756714",
    facebook: "lkrdf",
    position: 1,
  },
  {
    name: "Anjani Koirala",
    role: "MGMT | LAw Coordinator ",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/anjani-koirala.jpeg",
    phone: "+977-9851056033",
    whatsapp: "+977-9851056033",
    facebook: "anjani.koirala",
    position: 1,
  },
  {
    name: "Tul Bahadur Rai",
    role: "BCA Incharge",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/tul-bahadur-rai.jpeg",
    phone: "977-9814787395",
    whatsapp: "977-9814787395",
    facebook: "",
    position: 1,
  },
  {
    name: "Sujan KC",
    role: "Exam head",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/sujan-kc.jpeg",
    phone: "+977-9860203252",
    whatsapp: "+977-9860203252",
    facebook: "punksujankc123",
    position: 1,
  },
  {
    name: "Deepak Lama",
    role: "ECA head",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/deepak-lama.jpeg",
    phone: "+977-9862582438",
    whatsapp: "+977-98625825708",
    facebook: "dipak.tamang.391",
    position: 1,
  }, {
    name: "Ravi Shah",
    role: "Accountant",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/ravi-shah.jpeg",
    phone: "+977-9803756714",
    whatsapp: "+977-9803756714",
    facebook: "",
    position: 1,
  },
  {
    name: "Sujan Kafle",
    role: "MGMT | LAW Incharge",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/sujan-kafle.jpeg",
    phone: "fdlk",
    whatsapp: "kfd",
    facebook: "sujana.kaphle.2025",
    position: 1,
  },
  {
    name: "Mandip Dhakal",
    role: "MGMT | LAW Incharge",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/manddip-dhakal.jpeg",
    phone: "+977-98060736712",
    whatsapp: "+977-98060736712",
    facebook: "lkrdf",
    position: 1,
  },
  {
    name: "Prashant Sigdel",
    role: "Head Marketing",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/prashant-sigdel.jpeg",
    phone: "+977-9851403223",
    whatsapp: "+977-9843158123",
    facebook: "prashant.sigdel.7",
    position: 1,
  },
  {
    name: "Swastik Dotel",
    role: "Head-Shuttle Service",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/swostik-dotel.jpeg",
    phone: "+977-9845622667",
    whatsapp: "+977-9845622667",
    facebook: "swastik.dotel",
    position: 1,
  },
  {
    name: "Oshan Rai",
    role: "Science Incharge",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/oshan-rai.jpeg",
    phone: "+977-9702505498",
    whatsapp: "+977-9702505498",
    facebook: "",
    position: 1,
  }, {
    name: "Prativa Magar",
    role: "Lab Assistant",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/prativa-magar.jpeg",
    phone: "+977-9813795326",
    whatsapp: "+977-9813795326",
    facebook: "pratibha.magar09",
    position: 3,
  }, {
    name: "Sandhya Adhikari",
    role: "Front Desk",
    image: "https://cdn.jsdelivr.net/gh/achsamrat-bwic/Bridgewater-Images/administrationteam/sandhya.jpeg",
    phone: "+977-9802399870",
    whatsapp: "+977-9802399870",
    facebook: "sandhya.adhikari.89225",
    position: 1,
  },
  {
    name: "Bishwa Bastola",
    role: "It-assistant",
    image: "",
    phone: "+977-9863479066",
    whatsapp: "+977-9863479066",
    facebook: "",
    position: 1,
  },
]

export default function AdministrationSection() {
  const handleWhatsApp = (whatsapp: string) => {
    const message = "Hello! I'd like to connect with you regarding admissions and college information.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`, "_blank");
  };

  const handlePhone = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleFacebook = (facebook: string) => {
    window.open(`https://facebook.com/${facebook}`, "_blank");
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200/40 to-blue-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-40 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-[#1e3a5f]/15 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-[#c9a227]/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6"
        >
          {members.map((member, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                {/* Card Container */}
                <div
                  id={`member-${index + 1}`}
                  className="flex flex-col rounded-lg sm:rounded-xl md:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-500 hover:border-[#c9a227]/30 border border-transparent h-full"
                >

                  {/* Image Section */}
                  <div className="relative w-full h-72 sm:h-48 md:h-52 lg:h-60 xl:h-64 bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-700"
                        />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#1e3a5f] to-[#0f2640] flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/10 flex items-center justify-center mb-2 sm:mb-2 backdrop-blur-sm">
                            <span className="text-xl sm:text-3xl md:text-4xl font-black text-white/60">{member.name.split(" ").map(n => n[0]).join("")}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow">
                    {/* Name */}
                    <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-[#1e3a5f] mb-1 leading-tight line-clamp-2">
                      {member.name.trim()}
                    </h3>

                    {/* Role */}
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
                      <div className="h-0.5 w-3 sm:w-4 bg-gradient-to-r from-[#c9a227] to-[#d4af37] rounded-full flex-shrink-0" />
                      <p className="text-[#1e3a5f]/70 text-xs font-bold uppercase tracking-widest truncate">
                        {member.role}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-slate-200 mb-2.5 sm:mb-3" />

                    {/* Phone Display */}
                    {member.phone && (
                      <div className="mb-2.5 sm:mb-3">
                        <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-0.5">Phone</p>
                        <p className="text-[#1e3a5f] font-semibold text-xs break-all line-clamp-1">{member.phone}</p>
                      </div>
                    )}

                    {/* Contact Buttons */}
                    <div className="flex items-center gap-1.5 sm:gap-2 mt-auto flex-wrap">
                      {/* Phone Button */}
                      {member.phone && (
                        <motion.button
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handlePhone(member.phone)}
                          className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white shadow-md hover:shadow-blue-500/50 transition-all duration-300 flex-shrink-0"
                          title={`Call: ${member.phone}`}
                        >
                          <Phone className="w-3.5 sm:w-4 md:w-4.5 h-3.5 sm:h-4 md:h-4.5" />
                        </motion.button>
                      )}

                      {/* WhatsApp Button */}
                      {member.whatsapp && (
                        <motion.button
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleWhatsApp(member.whatsapp)}
                          className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white shadow-md hover:shadow-green-500/50 transition-all duration-300 flex-shrink-0"
                          title="Contact on WhatsApp"
                        >
                          <MessageCircle className="w-3.5 sm:w-4 md:w-4.5 h-3.5 sm:h-4 md:h-4.5" />
                        </motion.button>
                      )}

                      {/* Facebook Button */}
                      {member.facebook && (
                        <motion.button
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleFacebook(member.facebook)}
                          className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white shadow-md hover:shadow-indigo-500/50 transition-all duration-300 flex-shrink-0"
                          title="Connect on Facebook"
                        >
                          <Facebook className="w-3.5 sm:w-4 md:w-4.5 h-3.5 sm:h-4 md:h-4.5" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
