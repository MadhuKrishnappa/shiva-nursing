"use client";

import { motion } from "framer-motion";
import {
  Clock,
  GraduationCap,
  CalendarCheck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function CourseHighlights() {
  const highlights = [
    {
      title: "Duration",
      value: "4 Years",
      sub: "Full-time",
      icon: Clock,
    },
    {
      title: "Eligibility",
      value: "10+2 PCB",
      sub: "45% Min",
      icon: GraduationCap,
    },
    {
      title: "Min Age",
      value: "17 Years",
      sub: "As per norms",
      icon: CalendarCheck,
    },
    {
      title: "Recognition",
      value: "KNC & INC*",
      sub: "Approved",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#F4F7FA]">
      <div className="max-w-6xl mx-auto px-6">

        {/* 🧊 SINGLE CONTAINER */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_60px_rgba(0,35,102,0.06)] p-8 md:p-12">

          {/* 🔹 HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={14} className="text-blue-600" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600">
                  Course Overview
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-serif text-[#002366] leading-tight">
                B.Sc. <span className="italic font-light text-blue-500">Nursing</span>
              </h2>
            </div>

            <p className="text-sm text-slate-500 max-w-sm">
              A structured 4-year program focused on clinical excellence,
              patient care, and real-world healthcare exposure.
            </p>
          </div>

          {/* 🔹 COMPACT GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {highlights.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon
                      size={20}
                      className="text-[#002366] group-hover:text-blue-500 transition"
                    />
                    <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                      {item.title}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#002366] leading-tight">
                    {item.value}
                  </h3>

                  <p className="text-[11px] text-slate-400 mt-1">
                    {item.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* 🔹 TRUST ROW */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap  items-center gap-4 text-xs">

          </div>

        </div>
      </div>
    </section>
  );
}