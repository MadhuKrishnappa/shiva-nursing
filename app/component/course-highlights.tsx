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
      value: "Approved by KSNC & INC,New Delhi, Affiliated to RGUHS, Bangalore & Recognized by Govt. of Karnataka.",
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
          {/* TOP HIGHLIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.slice(0, 3).map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-slate-100 bg-slate-50"
                >
                  <Icon size={20} className="text-[#002366] mb-3" />

                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                    {item.title}
                  </p>

                  <h3 className="text-xl font-bold text-[#002366]">
                    {item.value}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.sub}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RECOGNITION */}
          <div className="mt-6 rounded-3xl bg-gradient-to-r from-[#002366] to-[#002366] p-8 text-white">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 shrink-0 mt-1" />

              <div>
                <p className="text-xs uppercase tracking-[0.2em] opacity-70 mb-3">
                  Recognition & Accreditation
                </p>

                <h3 className="text-lg md:text-xl font-semibold leading-relaxed">
                  Approved by KSNC & INC, New Delhi, affiliated to RGUHS,
                  Bengaluru and recognized by the Government of Karnataka.
                </h3>
              </div>
            </div>
          </div>

          {/* 🔹 TRUST ROW */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap  items-center gap-4 text-xs">

          </div>

        </div>
      </div>
    </section>
  );
}