"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
  Target,
  Eye,
} from "lucide-react";

export default function InstituteOverview() {
  const pillars = [
    {
      title: "Modern Infrastructure",
      desc: "State-of-the-art labs & digital classrooms for immersive learning.",
      icon: <GraduationCap size={22} />,
    },
    {
      title: "Clinical Excellence",
      desc: "Hospital exposure ensuring real-world readiness.",
      icon: <Stethoscope size={22} />,
    },
    {
      title: "Global Leadership",
      desc: "Faculty shaping globally competent nurses.",
      icon: <ShieldCheck size={22} />,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#FBFDFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔷 HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#002366]/60">
                The Institution
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-[#002366] leading-[1.05]">
              Shaping the Future of <br />
              <span className="italic font-light text-blue-500">
                Nursing Excellence
              </span>
            </h2>
          </div>

          <p className="lg:col-span-5 text-slate-500 text-sm md:text-base border-l border-slate-200 pl-6">
            A modern institution blending academic rigor with clinical precision,
            empowering students to lead healthcare transformation globally.
          </p>
        </div>

        {/* 🔷 MAIN GRID (LIKE HERO STYLE) */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">

          {/* 🎥 VIDEO BLOCK (LEFT BIG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-video lg:aspect-auto lg:h-full group"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            >
              <source src="/shiva-nursing1.mp4" type="video/mp4" />
            </video>

            <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/30 backdrop-blur-xl rounded-2xl text-white">
              <p className="text-sm italic">
                “Empowering compassionate caregivers of tomorrow.”
              </p>
              <span className="text-[10px] uppercase tracking-widest text-white/70">
                RGUHS • KNC • INC
              </span>
            </div>
          </motion.div>

          {/* 📦 RIGHT SIDE STACK */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">

            {/* 🔹 PILLARS (TOP GRID) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 flex-1">

              {pillars.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-start gap-4 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#002366] shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#002366]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 🔹 VISION + MISSION (BOTTOM CARDS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">

              {/* Vision */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Eye size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#002366]">Vision</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    To inspire nurses who transform communities worldwide.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Target size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#002366]">Mission</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Delivering excellence through education & clinical practice.
                  </p>
                </div>
              </div>
            </div>

            {/* 🔹 FOOTER CTA */}
            <div className="flex items-center justify-between border-t pt-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400">
                  Affiliations
                </p>
                <p className="text-xs font-semibold text-[#002366]">
                  RGUHS •  KNC • INC*
                </p>
              </div>

              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}