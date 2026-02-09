"use client";
import Link from "next/link";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import ScrollFloat from "@/components/ui/ScroolReveal";
export default function EventPageClient({ onlineEvents, events }) {
  // Same animation variants as Hero component
  const slideTransition = { type: "spring", stiffness: 120, damping: 25, mass: 1 };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
    exit: { opacity: 0 }
  };
  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { ...slideTransition, duration: 1.1 } },
    exit: { opacity: 0, x: 100 }
  };
  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 1, delay: 0.25 } },
    exit: { opacity: 0, y: -40 }
  };
  const staggerTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const tableRowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Headers />

      {/* Hero Section - Same style as Hero component */}
      <section className="relative h-[600px] w-full overflow-hidden bg-gray-900">
        {/* Background with same animations as Hero */}
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15, opacity: 0, x: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.95, opacity: 0, x: -100 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/AboutUs1.jpg')` }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-800 to-gray-900 opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/55" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="max-w-4xl text-white"
              >
                {/* Title */}
                <motion.h1
                  variants={slideInLeftVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] mb-8 tracking-[-0.02em] font-serif"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent drop-shadow-sm">
                    UpComing Events
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInVariants}
                  className="text-lg md:text-xl lg:text-2xl leading-[1.6] mb-10 text-white/85 max-w-4xl font-light tracking-wide"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  Where Innovation Meets Professional Growth
                </motion.p>


              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* Enhanced ScrollFloat Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <ScrollFloat
            animationDuration={1.5}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.05}
            containerClassName="text-center mb-12"
            textClassName="font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] bg-gradient-to-r from-slate-700 via-gray-800 to-stone-900 bg-clip-text text-transparent drop-shadow-lg"
          >
            Training Schedule
          </ScrollFloat>
        </div>
      </section>

      {/* Online Training Events Table */}
      <section className="py-8 bg-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerTextVariants}
            className="bg-white rounded-xl shadow-lg border border-red-200 overflow-hidden mb-12"
          >
            {/* Table Header */}
            <div className="bg-gradient-to-r from-[#9F2D2D] to-red-800 text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Online Training Events</h2>
                  <p className="text-red-100">Join from anywhere in the world</p>
                </div>
              </div>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-red-50 border-b border-red-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 uppercase tracking-wide">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#9F2D2D]" />
                        Training Name
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 uppercase tracking-wide">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#9F2D2D]" />
                        Schedule Date
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 uppercase tracking-wide">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#9F2D2D]" />
                        Platform
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900 uppercase tracking-wide">
                      <div className="flex items-center justify-center gap-2">
                        <Users className="w-4 h-4 text-[#9F2D2D]" />
                        Action
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {onlineEvents && onlineEvents.length > 0 ? (
                    onlineEvents.map((training, index) => (
                      <motion.tr
                        key={index}
                        variants={tableRowVariants}
                        className="hover:bg-red-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-semibold text-slate-800">{training.training}</span>
                            <span className="text-sm text-slate-500 mt-1">
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                  training.category === "ITIL"
                                    ? "bg-blue-100 text-blue-700"
                                    : training.category === "PMP"
                                    ? "bg-green-100 text-green-700"
                                    : training.category === "PRINCE2"
                                    ? "bg-purple-100 text-purple-700"
                                    : training.category === "SAFe"
                                    ? "bg-orange-100 text-orange-700"
                                    : training.category === "Scrum"
                                    ? "bg-cyan-100 text-cyan-700"
                                    : training.category === "Six Sigma"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : training.category === "DevOps"
                                    ? "bg-red-100 text-red-700"
                                    : training.category === "SRE"
                                    ? "bg-indigo-100 text-indigo-700"
                                    : training.category === "BA"
                                    ? "bg-pink-100 text-pink-700"
                                    : training.category === "Testing"
                                    ? "bg-teal-100 text-teal-700"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {training.category}
                              </span>
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-slate-900 font-medium">{training.date}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-[#9F2D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            </div>
                            <span className="text-slate-600">{training.location}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link href="/Contact">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-[#9F2D2D] to-red-800 text-white px-6 py-2 rounded-lg font-medium hover:from-red-800 hover:to-red-900 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                              Register
                            </motion.button>
                          </Link>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-8 text-center text-slate-500">
                        No online events scheduled at the moment
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="bg-red-50 px-6 py-4 border-t border-red-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-[#9F2D2D]">Online Training:</span> Interactive live sessions with expert instructors
                </p>
                <div className="flex gap-2">
                  <Link href="/Contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-[#9F2D2D] to-red-800 text-white px-4 py-2 rounded-lg font-medium hover:from-red-800 hover:to-red-900 transition-all duration-300"
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Classroom Training Events Table */}
      <section className="py-8 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerTextVariants}
            className="bg-white rounded-xl shadow-lg border border-slate-300 overflow-hidden"
          >
            {/* Table Header */}
            <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Classroom Training Events</h2>
                  <p className="text-slate-200">In-person training at our facilities</p>
                </div>
              </div>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100 border-b border-slate-300">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 uppercase tracking-wide">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-700" />
                        Training Name
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 uppercase tracking-wide">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-700" />
                        Schedule Date
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 uppercase tracking-wide">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-700" />
                        Location
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900 uppercase tracking-wide">
                      <div className="flex items-center justify-center gap-2">
                        <Users className="w-4 h-4 text-slate-700" />
                        Action
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {events && events.length > 0 ? (
                    events.map((training, index) => (
                      <motion.tr
                        key={index}
                        variants={tableRowVariants}
                        className="hover:bg-slate-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-semibold text-slate-800">{training.training}</span>
                            <span className="text-sm text-slate-500 mt-1">
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                  training.category === "ITIL"
                                    ? "bg-blue-100 text-blue-700"
                                    : training.category === "PMP"
                                    ? "bg-green-100 text-green-700"
                                    : training.category === "PRINCE2"
                                    ? "bg-purple-100 text-purple-700"
                                    : training.category === "SAFe"
                                    ? "bg-orange-100 text-orange-700"
                                    : training.category === "Scrum"
                                    ? "bg-cyan-100 text-cyan-700"
                                    : training.category === "Six Sigma"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : training.category === "DevOps"
                                    ? "bg-red-100 text-red-700"
                                    : training.category === "SRE"
                                    ? "bg-indigo-100 text-indigo-700"
                                    : training.category === "BA"
                                    ? "bg-pink-100 text-pink-700"
                                    : training.category === "Testing"
                                    ? "bg-teal-100 text-teal-700"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {training.category}
                              </span>
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-slate-900 font-medium">{training.date}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                              <MapPin className="w-4 h-4 text-slate-700" />
                            </div>
                            <span className="text-slate-600">{training.location}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link href="/Contact">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-slate-700 to-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:from-slate-800 hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                              Register
                            </motion.button>
                          </Link>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-8 text-center text-slate-500">
                        No classroom events scheduled at the moment
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="bg-slate-100 px-6 py-4 border-t border-slate-300">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Classroom Training:</span> Hands-on learning with in-person guidance
                </p>
                <div className="flex gap-2">
                  <Link href="/Contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-slate-700 to-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:from-slate-800 hover:to-gray-900 transition-all duration-300"
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
