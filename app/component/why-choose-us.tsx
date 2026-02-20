"use client";

import { motion } from "framer-motion";
import { Stethoscope, Hospital, GraduationCap, Users } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Modern Nursing Skill Laboratories",
      icon: Stethoscope,
      description:
        "Advanced simulation labs replicating real clinical environments to build confidence, precision, and clinical decision-making skills."
    },
    {
      title: "Multi-Speciality Hospital Exposure",
      icon: Hospital,
      description:
        "Structured clinical postings across departments providing immersive real-world healthcare training experiences."
    },
    {
      title: "Experienced & Qualified Faculty",
      icon: GraduationCap,
      description:
        "Academic mentors with strong educational backgrounds and extensive clinical expertise guiding every stage of learning."
    },
    {
      title: "Student-Centered Learning Culture",
      icon: Users,
      description:
        "A nurturing and professional environment designed to support leadership, growth, and lifelong learning."
    },
  ];

  return (
    <section className="relative py-36 px-6 bg-gradient-to-b from-white via-[#F6F9FF] to-white overflow-hidden">

      {/* Ambient Background Glow */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#0B2C6B]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-sm tracking-[0.4em] text-[#D4AF37] font-semibold uppercase">
            Why Choose Us
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold text-[#0B2C6B] leading-tight">
            Excellence Built on <span className="text-[#D4AF37]">Modern Foundations</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed">
            As a newly established nursing institution in Mysuru, we are designed
            from the ground up to deliver advanced healthcare education aligned
            with global standards and clinical excellence.
          </p>

          <div className="w-28 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#0B2C6B] mx-auto mt-10 rounded-full" />
        </motion.div>

        {/* ===== Feature Grid ===== */}
        <div className="mt-24 grid md:grid-cols-2 gap-10">

          {points.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500 group"
              >
                {/* Decorative Gold Accent */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#D4AF37] to-transparent rounded-t-3xl" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#0B2C6B]/10 flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition duration-500">
                  <Icon className="w-6 h-6 text-[#0B2C6B] group-hover:text-white transition duration-500" />
                </div>

                <h3 className="text-2xl font-semibold text-[#0B2C6B]">
                  {item.title}
                </h3>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ===== Bottom Institutional Statement ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            Our institution represents a forward-thinking approach to nursing
            education — combining modern infrastructure, structured mentorship,
            and ethical healthcare training to shape confident professionals
            ready to serve communities.
          </p>
        </motion.div>

      </div>
    </section>
  );
}