"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Container from "@mui/material/Container";

export default function Testimonial({ testimonials }) {
  const [expandedCards, setExpandedCards] = useState({});
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollRef = useRef(null);

  // Manual scroll functions - these disable auto-scroll
  const scrollLeft = () => {
    setIsAutoScrolling(false); // Stop auto-scroll when user manually navigates
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    setIsAutoScrolling(false); // Stop auto-scroll when user manually navigates
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  // Auto-scroll logic - only runs when isAutoScrolling is true
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !isAutoScrolling) return;

    const scrollSpeed = 0.5; // Same smooth scroll speed as courses
    let animationFrame;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused && isAutoScrolling) {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0; // Reset to start for seamless loop
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isAutoScrolling]);

  const toggleExpanded = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg animate-pulse">Loading testimonials...</p>
      </div>
    );
  }

  const renderStars = (rating = 5) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="py-16 bg-gray-50">
      <Container maxWidth="xl">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            What Enterprises Are Saying
          </h2>
          <div className="w-16 h-1 bg-[#9F2D2D] mx-auto" />
        </motion.div>

        {/* Auto-scrolling Testimonials Container with Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Left Arrow */}
          <motion.button
            onClick={scrollLeft}
            className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-[#9F2D2D] transition-all duration-300 border border-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={scrollRight}
            className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-[#9F2D2D] transition-all duration-300 border border-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Testimonials Container */}
          <div className="overflow-hidden ">
            {/* Gradient edges */}
            <div className="absolute left-8 sm:left-10 md:left-12 top-0 w-8 sm:w-12 md:w-16 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-8 sm:right-10 md:right-12 top-0 w-8 sm:w-12 md:w-16 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto py-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Hide scrollbar */}
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => {
                const isExpanded = expandedCards[index];
                
                return (
                  <motion.div
                    key={`${testimonial.id || index}-${index}`}
                    className="flex-shrink-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.05 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full w-80 sm:w-96 flex-shrink-0 p-6">
                      
                      {/* Stars */}
                      {renderStars(testimonial.rating)}

                      {/* Testimonial Text */}
                      <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {isExpanded ? testimonial.message : truncateText(testimonial.message)}
                        </p>
                        
                        {testimonial.message.length > 120 && (
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors"
                          >
                            {isExpanded ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </div>

                      {/* Profile Section */}
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h4>
                          {testimonial.role && (
                            <p className="text-gray-500 text-xs">
                              {testimonial.role}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </Container>
    </div>
  );
}
