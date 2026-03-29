"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  Play,
  Users,
  Sparkles,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

export default function InnovativeHero() {
  return (
    <section className="bg-[#F4F7FA] pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* 🔷 TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-stretch">

          {/* LEFT MAIN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-9 bg-white p-10 md:p-20 rounded-[3rem] border border-blue-50 shadow-[0_20px_50px_rgba(0,35,102,0.05)] flex flex-col justify-center relative overflow-hidden h-full"
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#002366]/5 rounded-full blur-3xl" />

            <div className="inline-flex items-center gap-3 mb-8 bg-blue-50/50 w-fit px-5 py-2 rounded-full border border-blue-100">
              <span className="h-2 w-2 rounded-full bg-[#002366] animate-pulse"></span>
              <span className="text-[#002366] uppercase tracking-[0.2em] text-[10px] font-bold">
                Academic Excellence
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#002366] leading-[0.95] tracking-tight mb-10">
              Empowering the <br />
              <span className="text-[#D4AF37] italic font-light">
                Next Generation
              </span>{" "}
              <br />
              of Nursing Leaders.
            </h1>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#admission"
                className="bg-[#002366] text-white px-10 py-5 rounded-2xl font-semibold hover:bg-blue-600 transition-all duration-500 flex items-center gap-3 group shadow-xl shadow-blue-900/20"
              >
                Apply Now
                <ArrowUpRight
                  size={20}
                  className="group-hover:rotate-45 transition-transform"
                />
              </Link>

              <Link
                href="/#courses"
                className="bg-white border-2 border-blue-50 text-[#002366] px-10 py-5 rounded-2xl font-semibold hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 bg-[#002366] p-8 rounded-[3rem] flex flex-col justify-between text-white shadow-2xl shadow-blue-900/30 h-full"
          >
            <div>
              <div className="p-4 bg-white/10 w-fit rounded-2xl mb-8">
                <GraduationCap size={32} className="text-blue-300" />
              </div>

              <h3 className="text-2xl font-medium mb-3 leading-tight">
                B.Sc Nursing Admissions
              </h3>

              <p className="text-blue-100/70 text-sm leading-relaxed">
                Affiliated to RGUHS. Secure your clinical future with our upcoming
                batch.
              </p>
            </div>

            <div>
              <div className="text-3xl font-serif text-blue-300">100%</div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-blue-300">
                Career Oriented Training
              </p>
            </div>
          </motion.div>
        </div>

        {/* 🔷 BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 relative group overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl 
            aspect-[4/5] sm:aspect-video lg:aspect-auto lg:h-full"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/shiva-nursing2.mp4" type="video/mp4" />
            </video>

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-black/20 backdrop-blur-3xl rounded-full flex items-center justify-center text-white border-2 border-white/30 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Play size={20} className="md:w-6 md:h-6" fill="white" />
              </div>

              <div>
                <span className="block text-white font-bold text-[10px] md:text-sm uppercase tracking-[0.2em]">
                  The Campus Experience
                </span>
                <span className="text-white/90 text-[10px] md:text-xs font-medium">
                  Life at Shiva Nursing
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full">

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-6 flex-1">

              {/* CARD 1 */}
              <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-blue-50 shadow-sm flex flex-col justify-between h-full hover:bg-blue-50/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col gap-2">
                  <Users className="text-blue-500 mb-2" size={28} />
                  <div className="text-xl md:text-2xl font-bold text-[#002366]">
                    Global
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm font-semibold uppercase tracking-wider">
                    Career Opportunities
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-blue-50 shadow-sm flex flex-col justify-between h-full hover:bg-blue-50/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col gap-2">
                  <Sparkles className="text-blue-500 mb-2" size={28} />
                  <div className="text-xl md:text-2xl font-bold text-[#002366]">
                    Skill-Based
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm font-semibold uppercase tracking-wider">
                    Training Approach
                  </p>
                </div>
              </div>
            </div>

            {/* ACCREDITATION */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border-2 border-blue-50 p-8 rounded-[2.5rem] flex items-center gap-5 text-[#002366] shadow-xl shadow-blue-900/5"
            >
              <div className="p-4 bg-blue-50 rounded-2xl">
                <Award size={32} />
              </div>

              <div>
                <div className="text-[10px] text-blue-400 uppercase font-black tracking-[0.2em] mb-1">
                  Accreditation
                </div>
                <div className="text-sm font-semibold leading-snug">
                  Approved by KSNC & INC*,New Delhi, Affiliated to RGUHS, Bangalore & Recognized by Govt. of Karnataka.
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}