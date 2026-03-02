"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScroolReveal";
import Link from "next/link";

export default function CoursePageTemplate({ courseData }) {
  const slideTransition = { type: "spring", stiffness: 120, damping: 25, mass: 1 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
    exit: { opacity: 0 }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { ...slideTransition, duration: 1.1 } }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 1 } }
  };

  const staggerTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const wordSlideVariants = {
    hidden: { opacity: 0, x: -20, y: 10 },
    visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: slideTransition }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 1.2 } }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[600px] overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${courseData.backgroundImage}')` }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center container mx-auto px-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 variants={slideInLeftVariants} className="text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              {courseData.title}
            </motion.h1>
            <motion.p variants={fadeInVariants} className="text-xl text-white/80 max-w-3xl"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              {courseData.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      

      {/* MAIN CONTENT */}
      <section className="bg-white py-14">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 px-6">
          
          {/* LEFT */}
          <div className="lg:col-span-8">
            <motion.div variants={staggerTextVariants} initial="hidden" whileInView="visible">
              <motion.h2 variants={headingVariants} className="text-3xl font-bold mb-6"
               style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Course Overview
              </motion.h2>

              {courseData.overview.map((p, i) => (
                <motion.p key={i} variants={paragraphVariants} className="mb-5 text-gray-700"
                style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4">
            <motion.div variants={imageVariants} initial="hidden" whileInView="visible" className="sticky top-24">
              <motion.img
                src="/corporate.jpg"
                className="rounded-xl shadow-lg"
                whileHover={{ scale: 1.03 }}
              />
              <Link href="/Events">
                <motion.button
                  className="mt-6 w-full bg-red-600 text-white py-3 rounded-xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Check Schedule
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY TRAIN WITH QUICKLEARN */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-rose-50 py-14 border-t border-gray-100">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Train With <span className="text-[#9F2D2D]">QuickLearn?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Your success is our guarantee — backed by expert trainers, accredited content, and a commitment to your exam results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "100% Exam Passing Guarantee",
                desc: "We are so confident in our training quality that we offer a full retrain at no cost if you don't pass your certification exam."
              },
              {
                icon: "👨‍🏫",
                title: "Subject Matter Experts",
                desc: "Our trainers are recognized industry leaders with real-world experience, bringing practical insights into every session."
              },
              {
                icon: "✅",
                title: "Accredited Training",
                desc: "We are an Accredited Training Organisation (ATO), delivering globally recognized certifications through approved content."
              },
              {
                icon: "💡",
                title: "Real-World Examples",
                desc: "Every module is grounded in real-world scenarios and case studies, ensuring skills you can apply immediately in your workplace."
              },
              {
                icon: "🎓",
                title: "Best Quality Course Material",
                desc: "Our course material is continuously updated to stay aligned with the latest industry standards, frameworks, and exam blueprints."
              },
              {
                icon: "🌐",
                title: "Flexible Delivery Modes",
                desc: "Choose from instructor-led classroom, live virtual sessions, or e-learning — designed to fit your schedule and learning style."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#9F2D2D]/20 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#9F2D2D] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 px-6">
          
          <div className="lg:col-span-8">
            {[
              ["Course Outline", courseData.courseOutline],
              ["Learning Objectives", courseData.learningObjectives],
              ["Target Group", courseData.targetGroup],
              ["Exam Details", courseData.examDetails]
            ].map(([title, list], idx) => (
              <motion.div key={idx} variants={staggerTextVariants} initial="hidden" whileInView="visible">
                <motion.h2 variants={headingVariants} className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </motion.h2>
                <ul className="space-y-3 mb-10">
                  {list.map((item, i) => (
                    <motion.li key={i} variants={wordSlideVariants} className="flex gap-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-2 h-2 bg-slate-700 rounded-full mt-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <motion.div variants={imageVariants} initial="hidden" whileInView="visible" className="sticky top-24">
              <Image src="/team.jpg" alt="Our Team" width={400} height={300} className="rounded-xl shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
