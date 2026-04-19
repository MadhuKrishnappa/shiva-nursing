"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
];

export default function InnovativeGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const next = () => setActiveIndex((prev) => (prev! + 1) % images.length);
  const prev = () => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));

  return (
    <section className="bg-[#F4F7FA] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#002366] mb-4">
            Campus <span className="text-[#D4AF37] italic">Moments</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A glimpse into life, learning, and leadership.
          </p>
        </div>

        {/* GRID: 12-column foundation for flexible row layouts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* ROW 1: Images 1 & 2 (Spanning 6 columns each) */}
          {images.slice(0, 2).map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01, y: -5 }}
              onClick={() => setActiveIndex(i)}
              className="md:col-span-6 cursor-pointer relative overflow-hidden rounded-[2rem] shadow-xl h-[400px]"
            >
              <img src={src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt={`Gallery ${i + 1}`} />
            </motion.div>
          ))}

          {/* ROW 2: Images 3 & 4 (Spanning 6 columns each) */}
          {images.slice(2, 4).map((src, i) => (
            <motion.div
              key={i + 2}
              whileHover={{ scale: 1.01, y: -5 }}
              onClick={() => setActiveIndex(i + 2)}
              className="md:col-span-6 cursor-pointer relative overflow-hidden rounded-[2rem] shadow-xl h-[400px]"
            >
              <img src={src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt={`Gallery ${i + 3}`} />
            </motion.div>
          ))}

          {/* ROW 3: Images 5, 6, 7 (Spanning 4 columns each) */}
          {images.slice(4, 7).map((src, i) => (
            <motion.div
              key={i + 4}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveIndex(i + 4)}
              className="md:col-span-4 cursor-pointer relative overflow-hidden rounded-[1.5rem] shadow-lg h-[300px]"
            >
              <img src={src} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt={`Gallery ${i + 5}`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#001533]/80 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setActiveIndex(null); }}
              className="absolute top-8 right-8 z-[1000] text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all border border-white/20"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="hidden md:flex absolute left-8 z-[1000] text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all border border-white/20"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-3xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="hidden md:flex absolute right-8 z-[1000] text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all border border-white/20"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}