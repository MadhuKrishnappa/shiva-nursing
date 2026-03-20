"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building, Send } from "lucide-react";

export default function ContactSection() {
  const contactItems = [
    { icon: MapPin, title: "Campus", content: "#45, 8th Cross, Vidyanagar, Mysuru – 570029" },
    { icon: Phone, title: "Admissions", content: "+91 97399 48632", subContent: "+91 97430 67989" },
    { icon: Mail, title: "Email", content: "Shivacollegeofnursing@gmail.com" },
    { icon: Building, title: "Governance", content: "Thirumala Educational Trust" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#FBFDFF] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* --- LEFT SIDE: DIRECTORY --- */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Contact Hub</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-[#002366] leading-[1.1] tracking-tight mb-6">
                Connect with our <br />
                <span className="italic font-light text-blue-500">Admissions Office.</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactItems.map((item, i) => (
                <div key={i} className="group flex gap-5 p-4 rounded-2xl transition-colors hover:bg-white hover:shadow-sm">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#002366] shadow-sm group-hover:bg-[#002366] group-hover:text-white transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.title}</h3>
                    <p className="text-[#002366] font-medium leading-snug">{item.content}</p>
                    {item.subContent && <p className="text-[#002366] font-medium mt-1">{item.subContent}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: ACTION CARD & MAP --- */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-4 md:p-6 shadow-[0_20px_50px_rgba(0,35,102,0.04)]">

              {/* Responsive Map Embed */}
              <div className="relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden mb-8 border border-slate-100 shadow-inner bg-slate-100">
                <iframe
                  src="https://www.google.com/maps?q=Shiva+College+of+Nursing+Mysuru&z=17&output=embed"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Shiva College of Nursing Location Pin"
                />
              </div>

              <div className="px-4 pb-4">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-bold text-[#002366]">Digital Enquiry</h3>
                    <p className="text-slate-400 text-sm mt-1">Expected response: Under 24 hours</p>
                  </div>
                  <div className="hidden sm:block text-right">
                    <div className="flex items-center gap-2 text-[#002366]/40 font-bold text-[10px] uppercase tracking-widest">
                      <Clock size={12} /> Office Timings
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Mon – Sat | 9:00 AM – 5:00 PM</p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500/20 text-sm outline-none" />
                    <input type="tel" placeholder="Phone" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500/20 text-sm outline-none" />
                  </div>
                  <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500/20 text-sm outline-none" />
                  <textarea rows={3} placeholder="How can we help you?" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500/20 text-sm outline-none resize-none" />
                  <button className="w-full mt-4 flex items-center justify-center gap-3 py-5 bg-[#002366] text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all">
                    Submit Enquiry <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}