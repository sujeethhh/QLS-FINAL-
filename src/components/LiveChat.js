"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  Mail,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919100195152";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in learning more about your courses."
);

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailStatus, setEmailStatus] = useState(null); // null | "loading" | "success" | "error"
  const [showBubble, setShowBubble] = useState(true);
  const formRef = useRef(null);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) setShowBubble(false);
  };

  const handleEmailChange = (field, value) => {
    setEmailForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setEmailStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: emailForm.name,
          email: emailForm.email,
          courseInterested: emailForm.subject,
          message: emailForm.message,
        }),
      });

      if (res.ok) {
        setEmailStatus("success");
        setEmailForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setEmailStatus(null), 3000);
      } else {
        setEmailStatus("error");
        setTimeout(() => setEmailStatus(null), 3000);
      }
    } catch {
      setEmailStatus("error");
      setTimeout(() => setEmailStatus(null), 3000);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-5 left-5 z-[9998] flex flex-col items-start gap-3"
          >
            {/* Prompt Bubble */}
            <AnimatePresence>
              {showBubble && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 1.5 }}
                  className="bg-white rounded-xl shadow-lg px-4 py-2.5 text-sm text-gray-700 border border-gray-100 max-w-[200px] relative"
                >
                  <span className="font-medium">Need help?</span>{" "}
                  <span className="text-gray-500">Ask our AI or contact us</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowBubble(false);
                    }}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  {/* Arrow */}
                  <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* FAB Button */}
            <motion.button
              onClick={toggleChat}
              className="relative bg-[#9F2D2D] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ touchAction: "manipulation" }}
            >
              <MessageCircle className="w-6 h-6" />
              {/* Online indicator */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Support Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-5 left-5 z-[9998] w-[92vw] max-w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col"
            style={{ height: "min(580px, 85vh)" }}
          >
            {/* Header */}
            <div className="bg-[#9F2D2D] text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">
                  QS
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-tight">
                    QuickLearn Support
                  </h3>
                  <p className="text-[11px] text-white/70 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                    Online &middot; Mon-Fri 9am-6pm IST
                  </p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
                  {/* WhatsApp Quick Action */}
                  <div className="p-4 border-b border-gray-100">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                    >
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">
                          Chat on WhatsApp
                        </p>
                        <p className="text-xs text-gray-500">
                          Get instant support from our team
                        </p>
                      </div>
                      <span className="text-green-600 text-xs font-medium">
                        Open &rarr;
                      </span>
                    </a>
                  </div>

                  {/* Email Form */}
                  <form
                    ref={formRef}
                    onSubmit={handleEmailSubmit}
                    className="p-4 space-y-3"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <h4 className="text-sm font-semibold text-gray-700">
                        Send us a message
                      </h4>
                    </div>

                    <input
                      type="text"
                      required
                      placeholder="Your name *"
                      value={emailForm.name}
                      onChange={(e) => handleEmailChange("name", e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9F2D2D]/30 focus:border-[#9F2D2D] outline-none transition-all"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email address *"
                      value={emailForm.email}
                      onChange={(e) =>
                        handleEmailChange("email", e.target.value)
                      }
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9F2D2D]/30 focus:border-[#9F2D2D] outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Course interested in"
                      value={emailForm.subject}
                      onChange={(e) =>
                        handleEmailChange("subject", e.target.value)
                      }
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9F2D2D]/30 focus:border-[#9F2D2D] outline-none transition-all"
                    />
                    <textarea
                      required
                      rows="3"
                      placeholder="Your message *"
                      value={emailForm.message}
                      onChange={(e) =>
                        handleEmailChange("message", e.target.value)
                      }
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9F2D2D]/30 focus:border-[#9F2D2D] outline-none transition-all resize-none"
                    />

                    {/* Status messages */}
                    {emailStatus === "success" && (
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        Message sent successfully!
                      </div>
                    )}
                    {emailStatus === "error" && (
                      <p className="text-red-500 text-sm">
                        Failed to send. Please try again.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={emailStatus === "loading"}
                      className="w-full bg-[#9F2D2D] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#8a2626] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {emailStatus === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
