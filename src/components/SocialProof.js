"use client";

import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Users, Calendar, Trophy, Award, Target, Globe, Star } from "lucide-react";

export default function SocialProof() {
  const topStats = [
    {
      icon: "users",
      number: "7500+",
      label: "Learners",
      subtitle: "Careers Transitioned"
    },
    {
      icon: "google",
      rating: "4.9/5",
      stars: 5,
      subtitle: "Average Ratings on this year"
    },
    {
      icon: "trustpilot",
      rating: "4.8/5",
      stars: 5,
      subtitle: "Average Ratings on this year"
    }
  ];

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
      number: "50+",
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
        
        {/* Top Stats Section - New */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {topStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    {stat.icon === "users" && (
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    )}
                    {stat.icon === "google" && (
                      <div className="w-16 h-16 flex items-center justify-center">
                        <svg viewBox="0 0 48 48" className="w-12 h-12">
                          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                        </svg>
                      </div>
                    )}
                    {stat.icon === "trustpilot" && (
                      <div className="w-16 h-16 flex items-center justify-center">
                        <svg viewBox="0 0 48 48" className="w-12 h-12">
                          <rect width="48" height="48" rx="4" fill="#00B67A"/>
                          <path d="M24 8l4.5 13.8h14.5l-11.7 8.5 4.5 13.8L24 35.6l-11.8 8.5 4.5-13.8L5 21.8h14.5z" fill="white"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Number/Rating */}
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number || stat.rating}
                  </div>

                  {/* Stars for ratings */}
                  {stat.stars && (
                    <div className="flex gap-1 mb-2">
                      {[...Array(stat.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  )}

                  {/* Label */}
                  {stat.label && (
                    <div className="text-lg font-semibold text-gray-800 mb-1">
                      {stat.label}
                    </div>
                  )}

                  {/* Subtitle */}
                  <div className="text-sm text-gray-600">
                    {stat.subtitle}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

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