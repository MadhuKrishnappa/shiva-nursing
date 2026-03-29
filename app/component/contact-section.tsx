"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const contactItems = [
    { icon: MapPin, title: "Campus", content: "#45, 8th Cross, Vidyanagar, Mysuru – 570029" },
    { icon: Phone, title: "Admissions", content: "+91 97399 48632", subContent: "+91 97430 67989" },
    { icon: Mail, title: "Email", content: "Shivacollegeofnursing@gmail.com" },
    { icon: Building, title: "Governance", content: "Thirumala Educational Trust" },
  ];

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_w5ax9eg",
        "template_v8ej32c",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone,
          message: formData.message,
        },
        "2edHourvToJXIsmK7"
      );

      setSuccess(true);
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#FBFDFF] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-6xl font-serif text-[#002366] leading-[1.1] tracking-tight mb-6">
                Connect with our <br />
                <span className="italic font-light text-blue-500">Admissions Office.</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactItems.map((item, i) => (
                <div key={i} className="group flex gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-white border flex items-center justify-center text-[#002366]">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {item.title}
                    </h3>
                    <p className="text-[#002366] font-medium">{item.content}</p>
                    {item.subContent && (
                      <p className="text-[#002366] font-medium mt-1">{item.subContent}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div className="lg:col-span-7">
            <div className="bg-white border rounded-[2.5rem] p-6 shadow">

              {/* MAP */}
              <div className="relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden mb-8 border">
                <iframe
                  src="https://www.google.com/maps?q=Shiva+College+of+Nursing+Mysuru&z=17&output=embed"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 placeholder:text-gray-600"
                    required
                  />

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 placeholder:text-gray-600"
                    required
                  />
                </div>

                <input
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 placeholder:text-gray-600"
                  required
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 placeholder:text-gray-600"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 py-5 bg-[#002366] text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-600"
                >
                  {loading ? "Sending..." : "Submit Enquiry"}
                  <Send size={16} />
                </button>

                {success && (
                  <p className="text-green-600 text-sm text-center mt-2">
                    Message sent successfully!
                  </p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}