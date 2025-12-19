"use client";
import { motion } from "framer-motion";

export default function SendMessageForm() {
  const fieldVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#9F2D2D] via-blue-1000 to-purple-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            SEND A MESSAGE
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="h-[2px] w-24 bg-white/60" />
            <span className="h-2 w-2 bg-white rounded-full" />
            <span className="h-[2px] w-24 bg-white/60" />
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.06 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 text-white"
        >
          {/* Row 1 */}
          <motion.div variants={fieldVariant}>
            <label className="text-sm">Full Name</label>
            <input className="form-input" />
          </motion.div>

          <motion.div variants={fieldVariant}>
            <label className="text-sm">Email</label>
            <input className="form-input" />
          </motion.div>

          <motion.div variants={fieldVariant}>
            <label className="text-sm">Mobile</label>
            <input className="form-input" />
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={fieldVariant}>
            <label className="text-sm">Company</label>
            <input className="form-input" />
          </motion.div>

          <motion.div variants={fieldVariant}>
            <label className="text-sm">City</label>
            <input className="form-input" />
          </motion.div>

          <motion.div variants={fieldVariant}>
            <label className="text-sm">Country</label>
            <input className="form-input" />
          </motion.div>

          {/* Row 3 */}
          <motion.div variants={fieldVariant}>
            <label className="text-sm">Training Course</label>
            <input className="form-input" />
          </motion.div>

          <motion.div variants={fieldVariant} className="md:col-span-2">
            <label className="text-sm">Message</label>
            <textarea rows={2} className="form-input resize-none" />
          </motion.div>

          {/* CAPTCHA */}
          

          {/* Button */}
          <motion.div
            variants={fieldVariant}
            className="md:col-span-3 flex justify-end mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-10 py-3 rounded-xl font-semibold shadow-xl"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </div>

      {/* Input styling */}
      <style jsx>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.6);
          padding: 8px 0;
          outline: none;
          color: white;
        }
        .form-input:focus {
          border-bottom-color: white;
        }
      `}</style>
    </section>
  );
}
