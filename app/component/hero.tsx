"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const images = [
    "/hero-image.png",
    "/hero-image2.png",
    "/hero-image1.png",
    "/hero-image3.png",
  ];

  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Nursing students training"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F4D]/90 via-[#0A1F4D]/75 to-black/70" />

      {/* Soft Blur */}
      {/* <div className="absolute inset-0 backdrop-blur-[0.5px]" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border border-white/40 px-6 py-2 text-xs tracking-[0.3em] uppercase"
        >
          Admissions Open 2026–27
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Empowering Future
          <span className="block text-[#D4AF37] mt-3">
            Nursing Leaders
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Blending academic excellence with real-world clinical training,
          we prepare compassionate professionals for tomorrow’s healthcare challenges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <Link
            href="/#admission"
            className="px-8 py-4 bg-[#D4AF37] text-[#0A1F4D] font-semibold uppercase tracking-wider rounded-md transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </Link>

          <Link
            href="/#courses"
            className="px-8 py-4 border border-white text-white font-semibold uppercase tracking-wider rounded-md transition-all duration-300 hover:bg-white hover:text-[#0A1F4D]"
          >
            Explore Programs
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}