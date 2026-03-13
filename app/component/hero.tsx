"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/shiva-nursing2.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity }}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 md:pt-36 text-center flex flex-col items-center">

        {/* ADMISSION BADGE (TOP) */}
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-white/30 rounded-full bg-white/10 backdrop-blur mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span className="text-white text-xs tracking-[0.2em] uppercase font-semibold">
            Admissions Open 2026–27
          </span>
        </div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight"
        >
          Empowering Future
          <span className="block text-[#D4AF37] italic mt-2">
            Nursing Leaders
          </span>
        </motion.h1>

        {/* BUTTON AREA */}
        <div className="mt-14 flex flex-col items-center gap-6">

          <Link
            href="/#admission"
            className="
            group relative inline-flex items-center gap-2
            px-10 py-4
            rounded-full
            text-white text-lg font-semibold
            bg-white/10
            backdrop-blur-md
            border border-white/30
            shadow-lg shadow-black/20
            hover:bg-white/20
            hover:border-white/50
            hover:scale-105
            transition-all duration-300
            "
          >
            <span className="tracking-wide">Apply Now</span>

            <ChevronRight className="transition-transform group-hover:translate-x-1" />
          </Link>

        </div>

      </div>

      {/* FOOTER STRIP */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/20 bg-black/40 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center gap-3 text-white/90 text-sm text-center">
          <Award className="text-[#D4AF37]" size={20} />
          <p className="text-xs md:text-sm">
            Affiliated to <span className="font-semibold">RGUHS Bengaluru</span> •
            Recognized by <span className="font-semibold">Govt. of Karnataka</span> •
            Approved by <span className="font-semibold">KNC & INC</span>
          </p>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0A1F4D] to-transparent" />

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
      </motion.div>

    </section>
  );
}