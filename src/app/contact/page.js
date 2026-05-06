"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

// ─── DATA ───────────────────────────────────────────────────────────
const contactCards = [
  {
    href: "tel:+919953889465",
    Icon: FaPhone,
    iconBg: "bg-sky-50 ring-sky-100",
    iconColor: "text-sky-600",
    label: "Call Us",
    lines: ["+91 9953889465", "+91 98915 42452"],
    external: false,
  },
  {
    href: "mailto:ashhar.info1@gmail.com",
    Icon: FaEnvelope,
    iconBg: "bg-teal-50 ring-teal-100",
    iconColor: "text-[#01696f]",
    label: "Email Us",
    lines: ["ashhar.info1@gmail.com"],
    external: false,
  },
  {
    href: "https://wa.me/919953889465",
    Icon: FaWhatsapp,
    iconBg: "bg-green-50 ring-green-100",
    iconColor: "text-green-600",
    label: "WhatsApp",
    lines: ["Chat with us instantly", "+91 9953889465"],
    external: true,
  },
];

const officeInfo = [
  {
    title: "Head Office",
    city: "New Delhi",
    flag: "🇮🇳",
    address:
      "Triphealer, 1st Floor, G51/6, Kotak Mahindra ATM, Shaheen Bagh, Jamia Nagar, New Delhi – 110025",
  },
  {
    title: "Branch Office",
    city: "Lucknow",
    flag: "🇮🇳",
    address: "Lucknow, Uttar Pradesh, India",
  },
];

const enquiryTypes = [
  "Gulf Work Visa",
  "Overseas Recruitment / Manpower",
  "Medical Treatment in India",
  "Travel & Stay Support",
  "Other",
];

const quickLinks = [
  { href: "/gulf-visas",              label: "Gulf Work Visa Services" },
  { href: "/recruitment-services",    label: "Overseas Recruitment" },
  { href: "/medical-treatment-india", label: "Medical Treatment in India" },
  { href: "/travel-support",          label: "Travel & Support" },
];

const contactDetails = [
  { href: "tel:+919953889465",           Icon: FaPhone,    text: "+91 9953889465" },
  { href: "tel:+919891542452",           Icon: FaPhone,    text: "+91 98915 42452" },
  { href: "mailto:ashhar.info1@gmail.com", Icon: FaEnvelope, text: "ashhar.info1@gmail.com" },
  { href: "https://wa.me/919953889465", Icon: FaWhatsapp,  text: "WhatsApp: +91 9953889465", green: true, external: true },
];

// ─── PAGE ───────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", country: "", enquiry: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className=" bg-[#f7f6f2] text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071525] text-white">
        <Image
          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/22369600168a00aaea518e5d7363a49ceff960ac.jpg"
          alt="Dubai skyline"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/95 via-[#071525]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/60 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 lg:px-10 lg:py-20">
          <nav className="flex items-center gap-2 text-sky-300/80 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-sky-200">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              We're Here to Help
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Get in Touch
              <br />
              <span className="text-sky-300">with Triphealer.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Gulf work visas, manpower recruitment, medical treatment in India, travel support —
              reach out and our team will guide you through every step.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="px-4 py-12 lg:px-10">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-3 gap-5">
          {contactCards.map(({ href, Icon, iconBg, iconColor, label, lines, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ring-4 ${iconBg}`}>
                <Icon className={`text-xl ${iconColor}`} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{label}</h3>
              {lines.map((l) => (
                <p key={l} className="text-sm text-slate-500 leading-7">{l}</p>
              ))}
            </a>
          ))}
        </div>
      </section>

      {/* ── FORM + OFFICES ── */}
      <section className="bg-white px-4 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ── FORM ── */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Drop Us a Line
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <FaCheckCircle className="text-3xl text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">Message Sent!</h3>
                <p className="text-emerald-700 text-sm leading-7">
                  Thank you for contacting Triphealer. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-slate-200 bg-[#f7f6f2] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#01696f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01696f]/20 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 or Gulf number"
                      className="w-full rounded-xl border border-slate-200 bg-[#f7f6f2] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#01696f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01696f]/20 transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-[#f7f6f2] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#01696f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01696f]/20 transition"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Country / Location
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. Saudi Arabia, UAE, India"
                    className="w-full rounded-xl border border-slate-200 bg-[#f7f6f2] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#01696f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01696f]/20 transition"
                  />
                </div>

                {/* Enquiry type */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Type of Enquiry <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-[#f7f6f2] px-4 py-3 text-sm text-slate-800 focus:border-[#01696f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01696f]/20 transition"
                  >
                    <option value="">Select enquiry type</option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe your requirement in detail..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-[#f7f6f2] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#01696f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01696f]/20 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#071525] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(15,23,42,0.15)] transition hover:bg-[#0f2d3a] hover:-translate-y-0.5 active:scale-95"
                >
                  Send Message <FaArrowRight className="text-xs" />
                </button>
              </form>
            )}
          </div>

          {/* ── OFFICES + DETAILS ── */}
          <div className="space-y-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
                Find Us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                Our Offices
              </h2>
            </div>

            {/* Office cards */}
            {officeInfo.map((office) => (
              <div
                key={office.title}
                className="rounded-2xl border border-slate-200 bg-[#f7f6f2] p-6 transition hover:border-slate-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{office.flag}</span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{office.title}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                      {office.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-500 leading-7">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#01696f]" />
                  <span>{office.address}</span>
                </div>
              </div>
            ))}

            {/* Contact details */}
            <div className="rounded-2xl border border-slate-200 bg-[#f7f6f2] p-6 space-y-3">
              <h3 className="text-base font-bold text-slate-900 mb-4">Contact Details</h3>
              {contactDetails.map(({ href, Icon, text, green, external }) => (
                <a
                  key={text}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`flex items-center gap-3 text-sm leading-7 transition ${
                    green
                      ? "text-slate-600 hover:text-green-600"
                      : "text-slate-600 hover:text-[#01696f]"
                  }`}
                >
                  <Icon
                    className={`shrink-0 ${green ? "text-green-600" : "text-[#01696f]"}`}
                  />
                  {text}
                </a>
              ))}
            </div>

            {/* Quick links dark card */}
            <div className="overflow-hidden rounded-[28px] shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <div className="relative h-36">
                <Image
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/920d345b13f96c7ecf8d837141bba33ab5c6c3f6.jpg"
                  alt="Travel destination"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0f2d3a]/80" />
                <div className="absolute inset-0 flex items-center px-7">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300 mb-1">
                      Explore Services
                    </p>
                    <p className="text-white font-bold text-lg leading-tight">
                      Everything under one roof.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#0f2d3a] px-7 py-5 space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between text-sm text-sky-200 hover:text-white transition py-1"
                  >
                    <span>{link.label}</span>
                    <FaArrowRight className="text-xs text-sky-400 transition group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}