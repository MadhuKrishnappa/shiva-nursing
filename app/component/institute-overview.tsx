"use client";

import { motion } from "framer-motion";

export default function InstituteOverview() {
  return (
    <section className="relative py-36 px-6 bg-gradient-to-b from-[#F4F7FF] via-white to-white overflow-hidden">

      {/* ===== Ambient Background Glow ===== */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#0B2C6B]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-sm tracking-[0.4em] text-[#D4AF37] font-semibold uppercase">
            Institute Overview
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold text-[#0B2C6B] leading-tight">
            Building the Future of <span className="text-[#D4AF37]">Nursing Excellence</span> in Mysuru
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed">
            A newly established institution committed to redefining nursing
            education through academic strength, ethical leadership,
            and immersive clinical learning experiences.
          </p>

          <div className="w-28 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#0B2C6B] mx-auto mt-10 rounded-full" />
        </motion.div>

        {/* ================= POSITIONING CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-12 grid md:grid-cols-3 gap-12 text-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-[#0B2C6B]">Modern Infrastructure</h3>
            <p className="mt-3 text-gray-600">
              State-of-the-art simulation labs & digitally enabled classrooms
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0B2C6B]">Academic Leadership</h3>
            <p className="mt-3 text-gray-600">
              Experienced faculty guiding the next generation of nurses
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0B2C6B]">Clinical Partnerships</h3>
            <p className="mt-3 text-gray-600">
              Structured hospital affiliations ensuring real-world readiness
            </p>
          </div>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="mt-28 grid lg:grid-cols-2 gap-24 items-center">

          {/* ===== Left Narrative Block ===== */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-[#0B2C6B]">
              A New Chapter in Healthcare Education
            </h3>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              As a newly founded nursing institution in Mysuru, we are built
              on a foundation of innovation and integrity. Our programs are
              designed to nurture compassionate caregivers equipped with
              advanced clinical competence and ethical responsibility.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Through structured academic frameworks and immersive
              hospital training, we ensure that every student graduates
              confident, skilled, and prepared to serve communities
              locally and globally.
            </p>

            {/* Decorative Accent */}
            <div className="mt-10 h-[2px] w-32 bg-[#D4AF37] rounded-full" />
          </motion.div>

          {/* ===== Vision & Mission Glass Cards ===== */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Vision Card */}
            <div className="relative bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition duration-500">
              <div className="absolute top-0 left-0 h-full w-[5px] bg-[#D4AF37] rounded-l-3xl" />
              <h4 className="text-2xl font-semibold text-[#0B2C6B]">
                Our Vision
              </h4>
              <p className="mt-6 text-gray-600 leading-relaxed">
                To emerge as a premier nursing institution in Mysuru,
                recognized for excellence in education, research, ethical
                leadership, and compassionate patient care.
              </p>
            </div>

            {/* Mission Card */}
            <div className="relative bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition duration-500">
              <div className="absolute top-0 left-0 h-full w-[5px] bg-[#0B2C6B] rounded-l-3xl" />
              <h4 className="text-2xl font-semibold text-[#0B2C6B]">
                Our Mission
              </h4>
              <p className="mt-6 text-gray-600 leading-relaxed">
                To deliver high-quality nursing education through
                innovative teaching methodologies, community engagement,
                and structured clinical partnerships that foster
                competence, compassion, and confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}