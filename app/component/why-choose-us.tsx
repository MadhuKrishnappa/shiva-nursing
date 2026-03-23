"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Hospital,
  GraduationCap,
  Users,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Advanced Skill Labs",
      desc: "High-fidelity simulation environments for precision training.",
      icon: Stethoscope,
    },
    {
      title: "Clinical Immersion",
      desc: "Rotations in multi-speciality hospitals for real exposure.",
      icon: Hospital,
    },
    {
      title: "Expert Mentorship",
      desc: "Guidance from senior clinicians & academic leaders.",
      icon: GraduationCap,
    },
    {
      title: "Growth Culture",
      desc: "Leadership-focused ecosystem with ethical grounding.",
      icon: Users,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* 🔷 GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* 🔹 LEFT */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-5 md:space-y-6 text-center lg:text-left">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#002366] leading-tight">
                Built for <br className="hidden sm:block" />
                <span className="italic font-light text-blue-500">
                  Real-World Nursing
                </span>
              </h2>

              <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                Our approach blends simulation, clinical immersion, and
                mentorship to prepare students for global healthcare demands.
              </p>

            </div>
          </div>

          {/* 🔹 RIGHT */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6">

            {points.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-start gap-4 md:gap-6 p-5 md:p-7 rounded-2xl md:rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white border flex items-center justify-center text-[#002366] group-hover:bg-[#002366] group-hover:text-white transition shrink-0">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-[#002366] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Index */}
                  <div className="hidden sm:block text-xs font-semibold text-slate-300 group-hover:text-blue-400 transition">
                    0{i + 1}
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* 🔷 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 relative overflow-hidden rounded-2xl md:rounded-[3rem] bg-[#002366] text-white px-6 py-8 md:px-10 md:py-12 flex flex-col lg:flex-row items-center text-center lg:text-left gap-6 md:gap-10"
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/10 blur-[100px]" />

          <div className="relative z-10 max-w-xl">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-serif mb-3">
              Step into the Future of Nursing
            </h4>
            <p className="text-blue-100/80 text-sm md:text-base">
              Join a new generation of nurses trained with global standards,
              ethical grounding, and clinical excellence.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}