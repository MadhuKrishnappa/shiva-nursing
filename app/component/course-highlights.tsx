"use client";

import { motion } from "framer-motion";
import { Clock, GraduationCap, CalendarCheck, ShieldCheck } from "lucide-react";

export default function CourseHighlights() {
  const highlights = [
    {
      title: "Duration",
      value: "4 Years",
      icon: Clock,
    },
    {
      title: "Eligibility",
      value: "10+2 with PCB",
      icon: GraduationCap,
    },
    {
      title: "Minimum Age",
      value: "17 Years",
      icon: CalendarCheck,
    },
    {
      title: "Recognition",
      value: "As per Karnataka Norms",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative py-36 px-6 bg-[#F8FAFF] overflow-hidden">

      {/* Soft Royal Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Decorative Top Frame */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-[2px] w-24 bg-[#D4AF37]" />
          <div className="mx-4 w-3 h-3 rotate-45 bg-[#D4AF37]" />
          <div className="h-[2px] w-24 bg-[#D4AF37]" />
        </div>

        {/* Section Label */}
        <span className="text-sm tracking-[0.45em] text-[#D4AF37] font-semibold uppercase">
          Course Highlights
        </span>

        {/* Title */}
        <h2 className="mt-6 text-4xl md:text-5xl font-serif font-semibold text-[#0B2C6B]">
          Bachelor of Science in Nursing
        </h2>

        {/* Description */}
        <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A four-year professional undergraduate program structured to
          develop academic excellence, clinical competence, and ethical
          leadership in nursing practice.
        </p>

        {/* Royal Content Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 border-2 border-[#D4AF37]/40 rounded-2xl bg-white shadow-xl"
        >
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#D4AF37]/20">

            {highlights.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="p-12 text-center group transition-all duration-500 hover:bg-[#FDF9ED]"
                >
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#D4AF37] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition duration-500">
                    <Icon className="w-7 h-7 text-[#0B2C6B] group-hover:text-white transition duration-500" />
                  </div>

                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    {item.title}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold text-[#0B2C6B]">
                    {item.value}
                  </h3>
                </div>
              );
            })}

          </div>
        </motion.div>

        {/* Decorative Bottom Frame */}
        <div className="flex items-center justify-center mt-16">
          <div className="h-[2px] w-24 bg-[#D4AF37]" />
          <div className="mx-4 w-3 h-3 rotate-45 bg-[#D4AF37]" />
          <div className="h-[2px] w-24 bg-[#D4AF37]" />
        </div>

      </div>
    </section>
  );
}