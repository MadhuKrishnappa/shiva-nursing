"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-32 pb-16 px-6 bg-[#020817] overflow-hidden">

      {/* 🔷 BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full" />

      {/* 🔷 GLASS CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">

          {/* 🔹 TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

            {/* BRAND */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-3xl font-serif text-white">
                  Shiva{" "}
                  <span className="italic font-light text-blue-400">
                    Nursing.
                  </span>
                </h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-blue-300/70 mt-2">
                  Thirumala Educational Trust
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                Empowering future healthcare leaders through clinical excellence,
                modern infrastructure, and ethical practice.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-3">
                {[Instagram].map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                Campus Hub
              </h4>

              <div className="space-y-5">
                <div className="flex gap-3 text-slate-300">
                  <MapPin className="text-blue-400 shrink-0" size={18} />
                  <p className="text-sm">
                    #45, 8th Cross, Vidyanagar <br />
                    Mysuru – 570029
                  </p>
                </div>

                <div className="flex gap-3 text-slate-300">
                  <Phone className="text-blue-400 shrink-0" size={18} />
                  <p className="text-sm font-medium">+91 97399 48632</p>
                </div>

                <div className="flex gap-3 text-slate-300">
                  <Mail className="text-blue-400 shrink-0" size={18} />
                  <p className="text-sm truncate">
                    shivacollegeofnursing@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                Explore
              </h4>

              <div className="flex flex-col gap-3 text-sm text-slate-300">
               

                <Link
                  href="/#about"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("about");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-white transition"
                >
                   About Institute
                </Link>
                <Link
                  href="/#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("gallery");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-white transition"
                >
                  Gallery
                </Link>
                <Link
                  href="/#courses"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("courses");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-white transition"
                >
                  Courses
                </Link>
                <Link
                  href="/#admission"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("admission");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-white transition"
                >
                  Admissions
                </Link>
                <Link
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("contact");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* 🔹 DIVIDER */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* 🔹 BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-xs text-slate-400">



            <div className="flex items-center gap-3">
              <span className="w-4 h-px bg-white/10" />
              <span>© {currentYear} Shiva College of Nursing</span>
              <span className="w-4 h-px bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}