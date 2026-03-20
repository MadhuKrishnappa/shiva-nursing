"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AdmissionCTA() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-[#020817] overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[140px] rounded-full" />

      {/* 🧊 GLASS CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.4)]">

          {/* 🔹 BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-blue-100/80 font-bold">
              Admissions Open 2026–27
            </span>
          </motion.div>

          {/* 🔹 HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif text-white leading-[1.2] mb-6"
          >
            Begin Your Journey in <br />
            <span className="italic font-light text-blue-400">
              Compassionate Healthcare
            </span>
          </motion.h2>

          {/* 🔹 SUBTEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xl mx-auto text-sm md:text-base text-blue-100/60 mb-10 leading-relaxed"
          >
            Step into a learning environment where clinical expertise meets human compassion. 
            Build a future where your skills truly make a difference.
          </motion.p>

          {/* 🔹 CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-2xl font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
            >
              Begin Application
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/#courses"
              className="flex items-center gap-2 px-6 py-4 text-blue-100/70 hover:text-white transition"
            >
              <Sparkles size={16} />
              View Programs
            </Link>
          </motion.div>

          {/* 🔹 TRUST */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest text-white/30">
            <span>INC Recognized</span>
            <span>RGUHS Affiliated</span>
            <span>KNC Approved</span>
          </div>

        </div>
      </div>
    </section>
  );
}