"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Building2, MapPin, Globe, BookOpen, MessageSquare } from "lucide-react";

export default function SendMessageForm() {
  const [formData, setFormData] = useState({
    fullName: "", email: "", mobile: "", company: "",
    city: "", country: "", course: "", message: ""
  });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.mobile,
          company: formData.company,
          location: `${formData.city}, ${formData.country}`,
          courseInterested: formData.course,
          inquiryType: "Corporate Training",
          message: formData.message || "Corporate training enquiry",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ fullName: "", email: "", mobile: "", company: "", city: "", country: "", course: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
    }
    setTimeout(() => setStatus(null), 6000);
  };

  const fields = [
    { name: "fullName",  label: "Full Name",       icon: User,          type: "text",  placeholder: "John Smith",            span: 1 },
    { name: "email",     label: "Email Address",   icon: Mail,          type: "email", placeholder: "john@company.com",      span: 1 },
    { name: "mobile",    label: "Mobile Number",   icon: Phone,         type: "tel",   placeholder: "+91 98765 43210",       span: 1 },
    { name: "company",   label: "Company",         icon: Building2,     type: "text",  placeholder: "Your Organisation",     span: 1 },
    { name: "city",      label: "City",            icon: MapPin,        type: "text",  placeholder: "Hyderabad",             span: 1 },
    { name: "country",   label: "Country",         icon: Globe,         type: "text",  placeholder: "India",                 span: 1 },
    { name: "course",    label: "Training Course", icon: BookOpen,      type: "text",  placeholder: "e.g. ITIL® 4 Foundation", span: 3 },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#1e40af] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-white/15 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Request Corporate Training
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Tell us about your training needs and we&apos;ll get back to you within 24 hours with a customised proposal.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Left panel */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#1D4ED8] to-[#1e40af] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">QuickLearn Systems</h3>
                <p className="text-blue-200 text-sm mb-8 leading-relaxed">
                  Corporate Training Institute in Hyderabad. We deliver practical, role-based training programs tailored to your organisation&apos;s goals.
                </p>
                <ul className="space-y-4 text-sm text-blue-100">
                  {[
                    "Customised programs for your team",
                    "Trainers with real industry experience",
                    "Onsite, online & hybrid delivery",
                    "Pre-training skill gap analysis",
                    "Post-training support included",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 pt-6 border-t border-white/20 text-blue-200 text-xs space-y-1">
                <p>{process.env.NEXT_PUBLIC_PHONE_PRIMARY}</p>
                <p>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
                <p>quicklearnsys.com</p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3 p-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {fields.map(({ name, label, icon: Icon, type, placeholder, span }) => (
                  <div key={name} className={span === 3 ? "sm:col-span-2" : ""}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                    <div className="relative">
                      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition"
                      />
                    </div>
                  </div>
                ))}

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your training requirements, team size, preferred timeline..."
                      className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-1">
                  {status === "success" && (
                    <p className="text-green-600 text-sm font-medium">✓ Message sent! We&apos;ll be in touch soon.</p>
                  )}
                  {status === "error" && (
                    <p className="text-red-500 text-sm font-medium">{errorMsg || "Something went wrong. Please try again."}</p>
                  )}
                  {!status && <span />}

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-blue-200 transition-colors disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </motion.button>
                </div>

              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
