"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";

export default function ContactSection() {
  const contactItems = [
    {
      icon: MapPin,
      title: "Campus Address",
      content: "#45, 8th Cross, Vidyanagar, Mysuru – 570029",
    },
    {
      icon: Phone,
      title: "Admissions Helpline",
      content: "+91 97399 48632  |  +91 97430 67989",
    },
    {
      icon: Mail,
      title: "Official Email",
      content: "Shivacollegeofnursing@gmail.com",
    },
    {
      icon: Building,
      title: "Managed By",
      content: "Thirumala Educational Trust",
    },
    {
      icon: Clock,
      title: "Office Timings",
      content: "Monday – Saturday | 9:00 AM – 5:00 PM",
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-white overflow-hidden">

      {/* Subtle Gold Top Border */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Soft Ambient Glow */}
      <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0B2C6B]/5 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          

          <span className="uppercase tracking-[0.4em] text-sm text-[#D4AF37] font-semibold">
            Admissions & Enquiries
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-semibold text-[#0B2C6B] leading-tight">
            Connect With Our <span className="text-[#D4AF37]">Admissions Office</span>
          </h2>

          <div className="flex justify-center items-center gap-6 mt-8">
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
          </div>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-8">

            {contactItems.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left shadow-md hover:shadow-xl transition duration-500"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#D4AF37]/10">
                    <Icon className="w-6 h-6 text-[#0B2C6B]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0B2C6B]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-white border border-[#D4AF37]/40 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0B2C6B]">
              Enquiry Form
            </h3>

            <p className="mt-3 text-gray-600 text-sm">
              Submit your details and our admissions office will respond promptly.
            </p>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#0B2C6B] text-white uppercase tracking-[0.2em] text-sm hover:bg-[#D4AF37] hover:text-[#0B2C6B] transition duration-500"
              >
                Submit Enquiry
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}