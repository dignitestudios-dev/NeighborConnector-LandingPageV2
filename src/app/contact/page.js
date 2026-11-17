"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1D2A29] antialiased">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#285A48]/10 text-[#285A48] uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" />
                Get in Touch
              </span>
              <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D2A29]">
                We’d Love to Hear From You
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#4A5D5A]">
                Have questions about NeighborConnector™, want to bring circles to your neighborhood, or looking to partner with Community Care Housing Foundation? Reach out anytime.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={100}>
                <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#285A48]/15 shadow-sm space-y-6">
                  <h2 className="font-serif text-xl font-bold text-[#1D2A29]">
                    Contact Information
                  </h2>

                  <div className="space-y-4 text-sm text-[#4A5D5A]">
                    <div className="flex items-start gap-3.5">
                      <div className="grid size-10 place-items-center rounded-xl bg-[#EBF3EF] text-[#285A48] shrink-0 mt-0.5">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1D2A29]">Email Us</p>
                        <a
                          href="mailto:Info@CommunityCareHousing.org"
                          className="text-[#285A48] hover:underline break-all"
                        >
                          Info@CommunityCareHousing.org
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="grid size-10 place-items-center rounded-xl bg-[#EBF3EF] text-[#285A48] shrink-0 mt-0.5">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1D2A29]">Call Us</p>
                        <a
                          href="tel:+17206932522"
                          className="text-[#285A48] hover:underline"
                        >
                          (720) 693-2522
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="grid size-10 place-items-center rounded-xl bg-[#EBF3EF] text-[#285A48] shrink-0 mt-0.5">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1D2A29]">Sponsoring Organization</p>
                        <p className="text-xs text-[#5C6E6B] mt-0.5">
                          Community Care Housing Foundation<br />
                          Dedicated to Affordable Housing &amp; Mutual Care
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#285A48]/10 text-xs text-[#5C6E6B] leading-relaxed">
                    Our team typically responds within 1–2 business days. For urgent life safety emergencies, always call 911 directly.
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#285A48]/15 shadow-sm">
                  {submitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-[#EBF3EF] text-[#285A48] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#1D2A29]">
                        Message Received!
                      </h3>
                      <p className="text-[#4A5D5A] max-w-md mx-auto text-sm sm:text-base">
                        Thank you for reaching out. A team member from Community Care Housing Foundation will get back to you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
                        }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#285A48] text-white text-sm font-semibold hover:bg-[#1E4336] transition-colors"
                      >
                        Send Another Note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#1D2A29] mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full rounded-xl border border-[#285A48]/20 bg-[#FBFBF9] px-4 py-3 text-sm text-[#1D2A29] focus:border-[#285A48] focus:outline-none focus:ring-2 focus:ring-[#285A48]/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#1D2A29] mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full rounded-xl border border-[#285A48]/20 bg-[#FBFBF9] px-4 py-3 text-sm text-[#1D2A29] focus:border-[#285A48] focus:outline-none focus:ring-2 focus:ring-[#285A48]/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#1D2A29] mb-1.5">
                          Subject / Topic
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full rounded-xl border border-[#285A48]/20 bg-[#FBFBF9] px-4 py-3 text-sm text-[#1D2A29] focus:border-[#285A48] focus:outline-none focus:ring-2 focus:ring-[#285A48]/20"
                        >
                          <option>General Inquiry</option>
                          <option>Starting a Circle in My Neighborhood</option>
                          <option>HOA / Faith Community Collaboration</option>
                          <option>Media or Foundation Inquiry</option>
                          <option>Feedback or Suggestion</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#1D2A29] mb-1.5">
                          Message
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we assist you or your neighborhood?"
                          className="w-full rounded-xl border border-[#285A48]/20 bg-[#FBFBF9] px-4 py-3 text-sm text-[#1D2A29] focus:border-[#285A48] focus:outline-none focus:ring-2 focus:ring-[#285A48]/20"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#285A48] px-6 py-3.5 text-sm font-semibold text-white shadow-lift hover:bg-[#1E4336] transition-colors cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
