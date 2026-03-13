"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Stethoscope, Landmark, ShieldCheck } from "lucide-react";

export default function InstituteOverview() {
  const containerRef = useRef(null);

  const features = [
    {
      title: "Modern Infrastructure",
      desc: "State-of-the-art simulation labs & digitally enabled classrooms.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Academic Leadership",
      desc: "Experienced faculty guiding the next generation of nurses.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Clinical Partnerships",
      desc: "Structured hospital affiliations ensuring real-world readiness.",
      icon: <Stethoscope className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 px-6 bg-[#FCFDFF] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-amber-100/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.2em] text-amber-700 bg-amber-50 rounded-full uppercase border border-amber-100">
              New Era of Nursing
            </span>
            <h2 className="text-4xl md:text-7xl font-light tracking-tight text-slate-900 leading-[1.1]">
              Building the Future of <br />
              <span className="font-serif italic text-blue-900">Nursing Excellence</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <p className="text-lg text-slate-500 leading-relaxed border-l-2 border-slate-200 pl-6">
              A newly established institution committed to redefining education through academic strength and ethical leadership in Mysuru.
            </p>
          </motion.div>
        </div>

        {/* --- Feature Bento Grid --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
            >
              <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Split Narrative & Vision Section --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8 lg:sticky lg:top-10"
          >
            {/* Change: Added 'aspect-[3/4]' for mobile to make it taller, 
  keeping 'md:aspect-[4/5]' for desktop.
*/}
<div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden rounded-[32px] md:rounded-[40px] bg-slate-900 group shadow-2xl">
  
  {/* --- Background Video --- */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
  >
    <source src="/shiva-nursing1.mp4" type="video/mp4" />
    <img src="/hero-image2.png" alt="Nursing Campus" className="object-cover w-full h-full" />
  </video>

  {/* --- Aesthetic Overlays --- */}
  {/* Heavier gradient on mobile to ensure text pops against the taller video */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C6B] via-[#0B2C6B]/20 to-transparent opacity-90 md:opacity-100" />

  {/* --- Glassmorphic Quote Card --- */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="absolute bottom-5 left-5 right-5 md:bottom-5 md:left-5 md:right-5 p-2 md:p-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl md:rounded-3xl"
  >
    <p className="text-white font-medium italic text-xs md:text-sm leading-relaxed">
      "Empowering the next generation of compassionate caregivers with advanced clinical competence."
    </p>

    <div className="mt-4 flex items-center gap-3">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
      </div>
      <span className="text-[10px] uppercase tracking-[0.2em] text-amber-200/90 font-bold">
        Campus Life
      </span>
    </div>
  </motion.div>
</div>

            <div className="p-8 bg-blue-900 rounded-[32px] text-white">
              <div className="flex items-center gap-4 mb-4">
                <Landmark className="text-amber-400 w-5 h-5" />
                <span className="font-semibold uppercase tracking-wider text-xs">Accreditations</span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Affiliated to <span className="text-white font-bold">RGUHS Bengaluru</span>, recognized by Govt. of Karnataka, and approved by KNC & INC*.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12 py-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-light text-slate-900 mb-6">A New Chapter in <span className="font-semibold">Healthcare Education</span></h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Through structured academic frameworks and immersive hospital training, we ensure that every student graduates confident and prepared to serve communities locally and globally.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { title: "Our Vision", text: "To educate, inspire and empower future nurses to transform lives and advance the health of communities locally and globally.", color: "bg-amber-500" },
                { title: "Our Mission", text: "Our mission is to advance nursing knowledge through excellence in teaching, research clinical practice and produce nurses who lead change, embrace innovation and improve health care outcomes.", color: "bg-blue-600" }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative p-10 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`absolute top-10 left-0 w-1 h-12 ${card.color} rounded-r-full`} />
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}