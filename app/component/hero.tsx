"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Royal Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F4D] via-[#0E2C6B] to-[#061635]" />

      {/* Golden Ambient Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[160px]" />

      {/* Subtle Royal Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Soft Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Decorative Top Frame */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-[2px] w-24 bg-[#D4AF37]" />
          <div className="mx-4 w-3 h-3 rotate-45 bg-[#D4AF37]" />
          <div className="h-[2px] w-24 bg-[#D4AF37]" />
        </div>

        {/* Royal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="border border-[#D4AF37]/60 text-[#F5D76E] px-6 py-2 text-xs tracking-[0.4em] uppercase">
            Admissions Open 2026–27
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 text-4xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight"
        >
          A Royal Standard in
          <span className="block text-[#D4AF37] mt-4">
            Nursing Education
          </span>
        </motion.h1>

        {/* Accent Line */}
        <div className="mt-10 w-32 h-[3px] bg-[#D4AF37] mx-auto" />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Located in the cultural capital of Karnataka, our institution
          blends heritage-inspired values with modern clinical excellence,
          preparing compassionate healthcare leaders for the future.
        </motion.p>

        {/* Royal Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-14 flex flex-wrap justify-center gap-8"
        >
          <Link
            href="/contact"
            className="px-10 py-4 bg-[#D4AF37] text-[#0A1F4D] font-semibold tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:-translate-y-1"
          >
            Apply Now
          </Link>

          <Link
            href="/courses"
            className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold tracking-widest uppercase transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#0A1F4D]"
          >
            Explore Programs
          </Link>
        </motion.div>

        {/* Decorative Bottom Frame */}
        <div className="flex items-center justify-center mt-16">
          <div className="h-[2px] w-24 bg-[#D4AF37]" />
          <div className="mx-4 w-3 h-3 rotate-45 bg-[#D4AF37]" />
          <div className="h-[2px] w-24 bg-[#D4AF37]" />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}