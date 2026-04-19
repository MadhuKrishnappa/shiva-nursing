"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Why Us", id: "why" },
    { name: "Courses", id: "courses" },
    { name: "Admissions", id: "admission" },
  ];

  // ✅ Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Active section detection (SCROLL BASED)
  useEffect(() => {
    const sections = navLinks.map((link) => link.id);

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let currentSection = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            currentSection = entry.target.id;
          }
        });

        if (currentSection) {
          setActiveHash(`#${currentSection}`);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8], // more accuracy
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ✅ Sync URL hash (clean UX)
  useEffect(() => {
    if (activeHash) {
      history.replaceState(null, "", activeHash);
    }
  }, [activeHash]);

  // ✅ Smooth scroll handler
  const handleNavClick = (id: string) => {
    setOpen(false);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveHash(`#${id}`);
    }
  };

  return (
    <header className="fixed top-0 w-full z-[100] transition-all duration-300 px-4 md:px-8 py-4">
      {/* NAVBAR CONTAINER */}
      <nav
        className={`
          mx-auto max-w-7xl transition-all duration-500 ease-in-out
          ${scrolled
            ? "bg-white/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,35,102,0.1)] border border-white/20 py-2 px-6 rounded-full"
            : "bg-transparent py-4 px-2 rounded-2xl"
          }
          flex items-center justify-between
        `}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => handleNavClick("home")}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={scrolled ? 40 : 50}
            height={scrolled ? 40 : 50}
            priority
            className="object-contain transition-all duration-500 group-hover:scale-110"
          />
          <div className="flex flex-col leading-none">

            {/* SHIVA (Brand Highlight) */}
            <span
              className={`
                  font-serif font-bold tracking-widest transition-all duration-500
                  ${scrolled ? "text-lg" : "text-lg"}
                  text-[#002366] flex items-center gap-2
                `}
                >
              SHIVA
              {/* <span className="h-[2px] w-6 bg-[#D4AF37] inline-block"></span> */}
            </span>

            {/* College Name */}
            <span
              className={`
                font-serif transition-all duration-500 font-bold
                ${scrolled ? "text-[11px]" : "text-xs"}
                text-blue-500 tracking-wide
              `}
            >
              College of Nursing
            </span>

            {/* Campus */}
            {!scrolled && (
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#002366]  mt-1">
                Mysuru Campus
              </span>
            )}
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
          {navLinks.map((link) => {
            const isActive = activeHash === `#${link.id}`;

            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`
                  px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300
                  ${isActive
                    ? "bg-white text-[#002366] shadow-sm"
                    : "text-gray-500 hover:text-[#002366]"
                  }
                `}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919739948632"
            className="hidden lg:flex items-center gap-2 text-[#002366] font-bold text-xs mr-4 hover:opacity-70 transition"
          >
            <div className="p-2 bg-blue-50 rounded-full">
              <Phone size={14} className="text-blue-600" />
            </div>
            <span>+91 9739948632</span>
          </a>

          <button
            onClick={() => handleNavClick("contact")}
            className="hidden sm:flex items-center gap-2 bg-[#002366] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
          >
            Apply Now <ArrowRight size={14} />
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden p-2 text-[#002366] hover:bg-gray-100 rounded-full transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 md:hidden flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="text-[#002366] font-serif text-2xl font-medium"
              >
                {link.name}
              </button>
            ))}

            <hr className="w-full border-gray-100" />

            <button
              onClick={() => handleNavClick("contact")}
              className="w-full bg-[#002366] text-white py-4 rounded-2xl font-bold uppercase tracking-widest"
            >
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}