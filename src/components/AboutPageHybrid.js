"use client";

import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScroolReveal";

export default function AboutPageHybrid() {
  const slideTransition = { type: "spring", stiffness: 120, damping: 25 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -120 },
    visible: { opacity: 1, x: 0, transition: slideTransition }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: slideTransition }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: slideTransition }
  };

  return (
    <div className="w-full flex flex-col">

      <Headers />

      {/* HERO */}
      <section className="relative h-[600px] bg-gray-900 overflow-hidden">
        <AnimatePresence>
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/AboutUs1.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl text-white"
            >
              <motion.h1
                variants={slideInLeftVariants}
                className="text-5xl md:text-7xl font-bold mb-6 font-serif"
              >
                About QuickLearn Systems
              </motion.h1>

              <motion.p
                variants={fadeInVariants}
                className="text-lg md:text-xl text-white/80"
              >
                Value for time and money invested is the prime aspiration of QuickLearn Systems.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TITLE FLOAT */}
      <section className="bg-gradient-to-br from-gray-50 to-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollFloat
            animationDuration={1.5}
            containerClassName="text-center"
            textClassName="text-[clamp(2.5rem,5vw,4.5rem)] font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
          >
            About QuickLearn Systems
          </ScrollFloat>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* TEXT */}
            <div className="md:col-span-8 space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 font-serif">
                Who We Are
              </h2>

              <p>
                QuickLearn Systems is a premier professional training and certification provider,
                empowering individuals and organizations with world-class learning solutions.
              </p>

              <p>
                We deliver instructor-led classroom training, live virtual sessions, e-learning,
                and customized corporate programs designed to meet evolving business needs.
              </p>

              <p>
                Our learner-first philosophy ensures every program delivers measurable outcomes,
                practical skills, and real-world impact.
              </p>

              <p>
                With a strong presence across India and global markets, QuickLearn continues to
                build long-term partnerships based on trust, quality, and results.
              </p>
            </div>

            {/* IMAGE */}
            <div className="md:col-span-4">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <img
                  src="/corporate.jpg"
                  alt="Corporate Training"
                  className="rounded-xl shadow-lg w-full"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-gradient-to-br from-stone-50 to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* TEXT */}
            <div className="md:col-span-8 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-serif mb-3">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To empower professionals and organizations through structured,
                  practical, and outcome-driven learning solutions.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-serif mb-3">
                  Our Values
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Quality in teaching and learning</li>
                  <li>• Customer satisfaction first</li>
                  <li>• Continuous improvement</li>
                  <li>• Long-term partnerships</li>
                  <li>• Professional ethics and integrity</li>
                </ul>
              </div>
            </div>

            {/* IMAGE */}
            <div className="md:col-span-4">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <img
                  src="/team.jpg"
                  alt="Our Team"
                  className="rounded-xl shadow-lg w-full"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
