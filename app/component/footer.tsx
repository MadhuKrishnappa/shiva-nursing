"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#03122B] text-white pt-32 pb-14 px-6 overflow-hidden">

      {/* ===== Palace Glow Background ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0B2C6B_0%,#03122B_60%)] opacity-60" />

      {/* ===== Ornamental Gold Frame Top & Bottom ===== */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative max-w-7xl mx-auto">

        {/* ===== Royal Crest Header ===== */}
        <div className="text-center max-w-3xl mx-auto">

          
          <h2 className="text-3xl md:text-4xl font-bold tracking-[0.08em] text-[#D4AF37]">
            SHIVA COLLEGE OF NURSING
          </h2>

          <p className="mt-4 text-blue-200 text-sm tracking-[0.25em] uppercase">
            Under Thirumala Educational Trust
          </p>

          {/* Bottom Decorative Line */}
          <div className="flex items-center justify-center mt-14">
            <div className="h-[2px] w-20 bg-[#D4AF37]" />
            <div className="mx-4 w-3 h-3 rotate-45 bg-[#D4AF37]" />
            <div className="h-[2px] w-20 bg-[#D4AF37]" />
          </div>

        </div>

        {/* ===== Royal Structured Columns ===== */}
        <div className="mt-24 grid md:grid-cols-3 gap-20 text-sm">

          {/* About */}
          <div className="text-center md:text-left">
            <h4 className="text-[#D4AF37] font-semibold text-lg mb-8 tracking-wide">
              About
            </h4>

            <p className="text-blue-200 leading-relaxed">
              A newly established nursing institution in Mysuru dedicated to
              excellence in academic standards, ethical healthcare values,
              and structured clinical training.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="text-[#D4AF37] font-semibold text-lg mb-8 tracking-wide">
              Navigation
            </h4>

            <ul className="space-y-4 text-blue-200">
              {[
                { name: "About Institution", href: "/about" },
                { name: "Courses Offered", href: "/courses" },
                { name: "Facilities", href: "/facilities" },
                { name: "Contact Admissions", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D4AF37] transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-[#D4AF37] font-semibold text-lg mb-8 tracking-wide">
              Contact
            </h4>

            <div className="space-y-6 text-blue-200">

              <div className="flex justify-center md:justify-end gap-3 items-start">
                <MapPin className="w-4 h-4 mt-1 text-[#D4AF37]" />
                <span>
                  #45, 8th Cross, Vidyanagar<br />
                  Mysuru – 570029
                </span>
              </div>

              <div className="flex justify-center md:justify-end gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  +91 97399 48632<br />
                  +91 97430 67989
                </span>
              </div>

              <div className="flex justify-center md:justify-end gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  Shivacollegeofnursing@gmail.com
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* ===== Royal Motto Divider ===== */}
        <div className="mt-24 text-center">

          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="w-24 h-[1px] bg-[#D4AF37]/50" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="w-24 h-[1px] bg-[#D4AF37]/50" />
          </div>

          <p className="text-blue-300 text-xs tracking-[0.2em] uppercase">
            Excellence • Compassion • Integrity
          </p>

          <p className="mt-6 text-blue-400 text-xs">
            © {new Date().getFullYear()} Shiva College of Nursing ·
            All Rights Reserved · Mysuru, Karnataka
          </p>

        </div>

      </div>
    </footer>
  );
}