"use client";
import { motion } from "framer-motion";

const reasons = [
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
];

export default function WhyTrainWithUs() {
  return (
    <section className="bg-gradient-to-br from-rose-50 via-white to-rose-50 py-14 border-t border-gray-100">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Train With <span className="text-[#9F2D2D]">QuickLearn?</span>
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Your success is our guarantee — backed by expert trainers, accredited content, and a commitment to your exam results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#9F2D2D]/20 transition-all duration-300 group"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3
                className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#9F2D2D] transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
