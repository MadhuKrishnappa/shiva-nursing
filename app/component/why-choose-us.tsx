"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Hospital,
  GraduationCap,
  Users,
  CheckCircle2,
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
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔷 MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-10">

          {/* 🔹 LEFT: STICKY CONTENT */}
          <div className="lg:col-span-5">
            <div className="lg:sticky top-32 space-y-6">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-serif text-[#002366] leading-[1.05]">
                Built for <br />
                <span className="italic font-light text-blue-500">
                  Real-World Nursing
                </span>
              </h2>

              <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                Our approach blends simulation, clinical immersion, and
                mentorship to prepare students for global healthcare demands.
              </p>

              {/* Trust bullets */}
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#002366]">
                  <CheckCircle2 size={16} className="text-blue-500" />
                  INC & KNC Approved
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#002366]">
                  <CheckCircle2 size={16} className="text-blue-500" />
                  RGUHS Affiliated
                </div>
              </div>

            </div>
          </div>

          {/* 🔹 RIGHT: STACKED FEATURE CARDS */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {points.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-6 items-start p-8 rounded-[2.5rem] bg-slate-50/60 border border-slate-100 hover:bg-white hover:shadow-[0_25px_60px_-15px_rgba(0,35,102,0.08)] transition-all duration-500"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[#002366] group-hover:bg-[#002366] group-hover:text-white transition-all duration-500 shrink-0">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-[#002366] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>

                  {/* Subtle index */}
                  <div className="ml-auto text-[10px] font-bold text-slate-300 group-hover:text-blue-400 transition">
                    0{i + 1}
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* 🔷 PREMIUM CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative overflow-hidden rounded-[3rem] bg-[#002366] text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[100px]" />

          <div className="relative z-10 max-w-xl">
            <h4 className="text-2xl md:text-3xl font-serif mb-4">
              Step into the Future of Nursing
            </h4>
            <p className="text-blue-100/70 text-sm">
              Join a new generation of nurses trained with global standards,
              ethical grounding, and clinical excellence.
            </p>
          </div>

          
        </motion.div>

      </div>
    </section>
  );
}