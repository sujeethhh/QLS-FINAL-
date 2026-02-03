"use client";

import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Users, Calendar, Trophy, Award, Target, Globe } from "lucide-react";

export default function SocialProof() {
  const stats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Professionals Trained",
      description: "Across 50+ countries worldwide"
    },
    {
      icon: Calendar,
      number: "10+",
      label: "Years of Excellence",
      description: "Delivering quality training since 2014"
    },
    {
      icon: Trophy,
      number: "99%",
      label: "Success Rate",
      description: "Students pass certification exams"
    },
    {
      icon: Award,
      number: "500+",
      label: "Corporate Clients",
      description: "Fortune 500 companies trust us"
    },
    {
      icon: Target,
      number: "95%",
      label: "Satisfaction Score",
      description: "Based on student feedback"
    },
    {
      icon: Globe,
      number: "24/7",
      label: "Global Support",
      description: "Round-the-clock assistance"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-rose-50 via-white to-rose-100">
      {/* Refined Background Pattern */}
      

      <Container maxWidth="xl" className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header - Improved spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
              Trusted by Professionals
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-700 to-slate-800  ">
                Worldwide
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful professionals who have advanced their careers with our expert-led training programs
            </p>
          </div>
        </motion.div>

        {/* Stats Grid - Enhanced spacing and layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 lg:mb-24"
        >
          <Grid container spacing={{ xs: 3, sm: 4, lg: 5 }} className="justify-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Grid item xs={12} sm={6} lg={4} key={index} className="flex">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ 
                      y: -12,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 group relative overflow-hidden w-full h-full flex flex-col"
                  >
                    {/* Enhanced Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon - Better positioning */}
                      <motion.div
                        className="w-18 h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#9F2D2D] to-blue-600 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                        whileHover={{ rotate: 8 }}
                      >
                        <IconComponent className="w-9 h-9 lg:w-10 lg:h-10 text-white" />
                      </motion.div>

                      {/* Number - Enhanced typography */}
                      <motion.div
                        className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 group-hover:text-[#9F2D2D] transition-colors duration-500 leading-none"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6, type: "spring", bounce: 0.4 }}
                      >
                        {stat.number}
                      </motion.div>

                      {/* Label - Better spacing */}
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4 leading-tight">
                        {stat.label}
                      </h3>

                      {/* Description - Improved readability */}
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-grow">
                        {stat.description}
                      </p>
                    </div>

                    {/* Refined Decorative Element */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-blue-100/60 to-indigo-100/60 rounded-full opacity-40 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"></div>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>

        {/* Bottom CTA - Enhanced design and spacing */}
        
      </Container>
    </section>
  );
}