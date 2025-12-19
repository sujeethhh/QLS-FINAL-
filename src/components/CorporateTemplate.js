"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScroolReveal";
import Link from "next/link";
import SendMessageForm from "@/components/SendMessage";



export default function CorporateTemplate({ courseData }) {
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

      {/* DETAILS */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 px-6">
          
          <div className="lg:col-span-8">
            {[
              ["WHY YOU SHOULD CHOOSE QuickLearn Systems?", courseData.WhyQls],
              ["TRAINING DELIVERY METHODS", courseData.DeliveryMethods],
              ["COURSE CATALOG", courseData.Catalog],
              ["OPEN/PUBLIC TRAINING PROGRAMS", courseData.TrainingPrograms],
              ["E-LEARNING :", courseData.eLearning]
              
            ].map(([title, list], idx) => (
              <motion.div key={idx} variants={staggerTextVariants} initial="hidden" whileInView="visible">
                <motion.h2 variants={headingVariants} className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </motion.h2>
                <ul className="space-y-3 mb-10">
                  {list.map((item, i) => (
                    <motion.li key={i} variants={wordSlideVariants} className="flex gap-3">
                      <span className="w-2 h-2 bg-slate-700 rounded-full mt-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <motion.div variants={imageVariants} initial="hidden" whileInView="visible" className="sticky top-24">
              <img src="/team.jpg" className="rounded-xl shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>
      <section
      style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <SendMessageForm />
      </section>
    </>
  );
}
