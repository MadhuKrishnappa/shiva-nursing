"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setActiveHash(window.location.hash);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Why Us", href: "/#why" },
    { name: "Courses", href: "/#courses" },
    { name: "Admissions", href: "/#admission" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* ================= TOP ROYAL STRIP ================= */}
      <div className="w-full bg-[#03122B] text-[#D4AF37] text-xs md:text-sm border-b border-[#D4AF37]/30">
        <div className="max-w-8xl mx-auto px-6 py-2 flex justify-between items-center tracking-[0.15em] uppercase">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 97399 48632</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Mail size={14} />
              <span>Shivacollegeofnursing@gmail.com</span>
            </div>
          </div>
          <span className="hidden md:block text-[11px]">
            Under Thirumala Educational Trust
          </span>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <header className="sticky top-0 z-50">
        <div
          className={`
            transition-all duration-500
            ${
              scrolled
                ? "bg-white shadow-xl border-b border-[#D4AF37]/30"
                : "bg-white"
            }
          `}
        >
          <div
            className={`
               mx-auto px-4 flex justify-between items-center transition-all duration-500
              ${scrolled ? "py-3" : "py-5"}
            `}
          >
            {/* ================= LOGO ================= */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Shiva College of Nursing Logo"
                width={scrolled ? 55 : 80}
                height={scrolled ? 55 : 80}
                priority
                className="object-contain transition-all duration-500"
              />

              <div className="h-14 w-0.5 bg-[#D4AF37]/50" />

              <div className="leading-tight">
                <span className="block text-[#D4AF37] text-xl md:text-2xl font-semibold tracking-[0.08em]">
                  SHIVA COLLEGE
                </span>
                <span className="block text-[#03122B] text-xs md:text-sm tracking-[0.35em] uppercase">
                  of Nursing
                </span>
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const linkHash = link.href.split("#")[1];
                const isActive =
                  pathname === "/" && activeHash === `#${linkHash}`;

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="relative text-sm uppercase tracking-[0.18em] text-[#03122B] hover:text-[#D4AF37] transition duration-300"
                  >
                    {link.name}

                    <span
                      className={`
                        absolute left-0 -bottom-2 h-[2px] bg-[#D4AF37] transition-all duration-300
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </button>
                );
              })}

              {/* Royal Apply Button */}
              <button
                onClick={() => handleNavClick("/#contact")}
                className="ml-6 px-7 py-2 border border-[#D4AF37] text-[#D4AF37] uppercase text-sm tracking-[0.2em] rounded-full transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#03122B]"
              >
                Apply Now
              </button>
            </nav>

            {/* ================= MOBILE TOGGLE ================= */}
            <button
              className="md:hidden text-[#D4AF37]"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* ================= MOBILE DRAWER ================= */}
          {open && (
            <div className="md:hidden bg-white border-t border-[#D4AF37]/30">
              <div className="px-8 py-10 space-y-6 text-center">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-[#03122B] uppercase tracking-[0.2em] text-sm hover:text-[#D4AF37] transition"
                  >
                    {link.name}
                  </button>
                ))}

                <button
                  onClick={() => handleNavClick("/#contact")}
                  className="block w-full mt-6 border border-[#D4AF37] text-[#D4AF37] py-3 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#D4AF37] hover:text-[#03122B] transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}