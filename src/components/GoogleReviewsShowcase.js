"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function GoogleReviewsShowcase() {
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);
  const column4Ref = useRef(null);

  // Auto-scroll logic for each column
  useEffect(() => {
    const columns = [
      { ref: column1Ref, speed: 0.5 },
      { ref: column2Ref, speed: 0.7 },
      { ref: column3Ref, speed: 0.6 },
      { ref: column4Ref, speed: 0.8 }
    ];

    const animationFrames = [];

    columns.forEach(({ ref, speed }) => {
      const container = ref.current;
      if (!container) return;

      let isPaused = false;

      const scroll = () => {
        if (!isPaused) {
          if (container.scrollTop >= container.scrollHeight / 2) {
            container.scrollTop = 0;
          } else {
            container.scrollTop += speed;
          }
        }
        animationFrames.push(requestAnimationFrame(scroll));
      };

      const handleMouseEnter = () => {
        isPaused = true;
      };

      const handleMouseLeave = () => {
        isPaused = false;
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      animationFrames.push(requestAnimationFrame(scroll));

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    return () => {
      animationFrames.forEach(frame => cancelAnimationFrame(frame));
    };
  }, []);

  // Sample reviews data - just images with ratings
  const column1Reviews = [
    {
      id: 1,
      image: "/qls-ss1.png",
      rating: 5,
      platform: "google",
      size: "normal"
    },
    {
      id: 2,
      image: "/qls-ss2.png",
      rating: 5,
      platform: "google",
      size: "large"
    },
    {
      id: 3,
      image: "/qls-ss3.png",
      rating: 5,
      platform: "trustpilot",
      size: "small"
    }
  ];

  const column2Reviews = [
    {
      id: 4,
      image: "/qls-ss4.png",
      rating: 4.5,
      platform: "google",
      size: "large"
    },
    {
      id: 5,
      image: "/qls-ss5.png",
      rating: 5,
      platform: "google",
      size: "small"
    },
    {
      id: 6,
      image: "/qls-ss6.png",
      rating: 5,
      platform: "trustpilot",
      size: "normal"
    }
  ];

  const column3Reviews = [
    {
      id: 7,
      image: "/qls-ss7.png",
      rating: 5,
      platform: "google",
      size: "normal"
    },
    {
      id: 8,
      image: "/qls-ss8.png",
      rating: 4.5,
      platform: "trustpilot",
      size: "large"
    },
    {
      id: 9,
      image: "/qls-ss9.png",
      rating: 5,
      platform: "google",
      size: "small"
    }
  ];

  const column4Reviews = [
    {
      id: 10,
      image: "/qls-ss10.png",
      rating: 5,
      platform: "google",
      size: "large"
    },
    {
      id: 11,
      image: "/qls-ss11.png",
      rating: 5,
      platform: "trustpilot",
      size: "normal"
    },
    {
      id: 12,
      image: "/qls-ss12.png",
      rating: 4.5,
      platform: "google",
      size: "small"
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-3 h-3 text-yellow-400" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCard = (review) => {
    const heightClass = 
      review.size === "small" ? "h-48" :
      review.size === "large" ? "h-96" :
      "h-72";

    return (
      <div className={`relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-gray-100 ${heightClass}`}>
        {/* Review Screenshot Image */}
        <Image
          src={review.image}
          alt="Review screenshot"
          fill
          className="object-contain"
        />

        {/* Overlay gradient for better badge visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/3 to-transparent pointer-events-none" />

        {/* Top Right Badge with Platform and Stars */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-2 flex flex-col items-center gap-1">
          {/* Platform Logo */}
          <div className="flex items-center justify-center">
            {review.platform === "google" ? (
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <rect width="24" height="24" rx="2" fill="#00B67A"/>
                <path d="M12 4l2.25 6.9h7.25l-5.85 4.25 2.25 6.9L12 17.8l-5.9 4.25 2.25-6.9L2.5 10.9h7.25z" fill="white"/>
              </svg>
            )}
          </div>

          {/* Stars */}
          {renderStars(review.rating)}
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real Stories from
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Real Learners
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our students are saying about their learning journey
          </p>
        </motion.div>
      </div>

      {/* Grid Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white to-transparent z-10 pointer-events-none" />
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div
            ref={column1Ref}
            className="space-y-6 overflow-hidden h-[800px]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {[...column1Reviews, ...column1Reviews].map((review, index) => (
              <div key={`col1-${review.id}-${index}`}>
                {renderCard(review)}
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div
            ref={column2Ref}
            className="space-y-6 overflow-hidden h-[800px]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...column2Reviews, ...column2Reviews].map((review, index) => (
              <div key={`col2-${review.id}-${index}`}>
                {renderCard(review)}
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div
            ref={column3Ref}
            className="space-y-6 overflow-hidden h-[800px]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...column3Reviews, ...column3Reviews].map((review, index) => (
              <div key={`col3-${review.id}-${index}`}>
                {renderCard(review)}
              </div>
            ))}
          </div>

          {/* Column 4 */}
          <div
            ref={column4Ref}
            className="space-y-6 overflow-hidden h-[800px]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...column4Reviews, ...column4Reviews].map((review, index) => (
              <div key={`col4-${review.id}-${index}`}>
                {renderCard(review)}
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </section>
  );
}
