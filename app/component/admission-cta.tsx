"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AdmissionCTA() {
  return (
    <section className="relative py-36 px-6 overflow-hidden bg-[#0A1F4D] text-white">

      {/* Deep Royal Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F4D] via-[#0E2C6B] to-[#061635]" />

      {/* Golden Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Top Decorative Line */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-[2px] w-20 bg-[#D4AF37]" />
          <div className="mx-4 w-3 h-3 rotate-45 bg-[#D4AF37]" />
          <div className="h-[2px] w-20 bg-[#D4AF37]" />
        </div>

        {/* Royal Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.5em] uppercase text-[#D4AF37] font-semibold"
        >
          Admissions Open 2026 – 27
        </motion.p>

        {/* Main Royal Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight"
        >
          Step Into a Legacy of
          <span className="block text-[#D4AF37] mt-2">
            Excellence in Nursing Education
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-lg text-gray-300 leading-relaxed"
        >
          Begin your professional journey in Mysuru with an institution
          inspired by tradition, guided by excellence, and committed to
          shaping compassionate healthcare leaders.
        </motion.p>

        {/* Royal CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Link
            href="/#contact"
            className="inline-block px-12 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold tracking-widest uppercase transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#0A1F4D] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Enquire Now
          </Link>
        </motion.div>

        {/* Bottom Decorative Line */}
        <div className="flex items-center justify-center mt-14">
          <div className="h-[2px] w-20 bg-[#D4AF37]" />
          <div className="mx-4 w-3 h-3 rotate-45 bg-[#D4AF37]" />
          <div className="h-[2px] w-20 bg-[#D4AF37]" />
        </div>

      </div>
    </section>
  );
}