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

// ─── DATA ───────────────────────────────────────────────────────────
const contactCards = [
  {
    href: "tel:+919953889465",
    Icon: FaPhone,
    iconBg: "bg-sky-50 ring-sky-100",
    iconColor: "text-sky-600",
    badge: "Call",
    label: "Call Us",
    lines: ["+91 9953889465", "+91 98915 42452"],
    cta: "Tap to call",
    external: false,
  },
  {
    href: "mailto:ashhar.info1@gmail.com",
    Icon: FaEnvelope,
    iconBg: "bg-teal-50 ring-teal-100",
    iconColor: "text-[#01696f]",
    badge: "Email",
    label: "Email Us",
    lines: ["ashhar.info1@gmail.com"],
    cta: "Send an email",
    external: false,
  },
  {
    href: "https://wa.me/919953889465",
    Icon: FaWhatsapp,
    iconBg: "bg-green-50 ring-green-100",
    iconColor: "text-green-600",
    badge: "Chat",
    label: "WhatsApp",
    lines: ["+91 9953889465"],
    cta: "Chat instantly",
    external: true,
  },
];

const officeInfo = [
  {
    title: "Head Office",
    city: "New Delhi",
    flag: "🇮🇳",
    address: "Triphealer, 1st Floor, G51/6, Kotak Mahindra ATM, Shaheen Bagh, Jamia Nagar, New Delhi – 110025",
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
  { href: "tel:+919953889465",             Icon: FaPhone,    text: "+91 9953889465",           green: false },
  { href: "tel:+919891542452",             Icon: FaPhone,    text: "+91 98915 42452",           green: false },
  { href: "mailto:ashhar.info1@gmail.com", Icon: FaEnvelope, text: "ashhar.info1@gmail.com",   green: false },
  { href: "https://wa.me/919953889465",    Icon: FaWhatsapp, text: "WhatsApp: +91 9953889465", green: true, external: true },
];

// ─── SHARED INPUT CLASS ─────────────────────────────────────────────
const inputCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#01696f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01696f]/15 transition duration-200";

// ─── PAGE ───────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", country: "", enquiry: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-slate-900">

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#071525] text-white">
        <Image
          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/22369600168a00aaea518e5d7363a49ceff960ac.jpg"
          alt="Dubai skyline"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/95 via-[#071525]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-10 lg:py-24">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-sky-300/70">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span className="text-white/25">/</span>
            <span className="text-sky-200">Contact Us</span>
          </nav>

          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              We're Here to Help
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Get in Touch
              <br />
              <span className="text-sky-300">with Triphealer.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">
              Gulf work visas, manpower recruitment, medical treatment in India, travel support —
              our team will guide you through every step.
            </p>
          </div>
        </div>
      </section>

      {/* ══ CONTACT CARDS ════════════════════════════════════════════ */}
      <section className="px-4 py-10 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-4 sm:grid-cols-3">
          {contactCards.map(({ href, Icon, iconBg, iconColor, label, lines, cta, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center shadow-[0_4px_16px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ring-4 ${iconBg}`}>
                <Icon className={`text-xl ${iconColor}`} />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">{label}</h3>
              <div className="mt-2 space-y-0.5">
                {lines.map((l) => (
                  <p key={l} className="text-sm text-slate-500">{l}</p>
                ))}
              </div>
              <span className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold ${iconColor} transition group-hover:gap-2.5`}>
                {cta} <FaArrowRight className="text-[10px]" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ══ FORM + OFFICES ═══════════════════════════════════════════ */}
      <section className="bg-white px-4 py-14 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* ── FORM ── */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#01696f]">
              Drop Us a Line
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-[2rem]">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Fill in the form and we'll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                  <FaCheckCircle className="text-2xl text-emerald-600" />
                </div>
                <h3 className="font-display text-lg font-bold text-emerald-800">Message Sent!</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-700">
                  Thank you for contacting Triphealer. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name:"",email:"",phone:"",country:"",enquiry:"",message:"" }); }}
                  className="mt-6 rounded-lg border border-emerald-300 bg-white px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">

                {/* Row 1: Name + Phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text" name="name" value={formData.name}
                      onChange={handleChange} required
                      placeholder="Your full name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel" name="phone" value={formData.phone}
                      onChange={handleChange} required
                      placeholder="+91 or Gulf number"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Row 2: Email + Country */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email" name="email" value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Country / Location
                    </label>
                    <input
                      type="text" name="country" value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. Saudi Arabia, UAE"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Enquiry type */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Type of Enquiry <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="enquiry" value={formData.enquiry}
                    onChange={handleChange} required
                    className={inputCls}
                  >
                    <option value="">Select enquiry type</option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message" value={formData.message}
                    onChange={handleChange} required rows={5}
                    placeholder="Please describe your requirement in detail..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex w-full min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#01696f] px-6 text-sm font-bold text-white shadow-[0_6px_20px_rgba(1,105,111,0.25)] transition duration-200 hover:bg-[#0c4e54] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Send Message <FaArrowRight className="text-xs" />
                </button>

                <p className="text-center text-xs text-slate-400">
                  We respond within 24 hours · Your info is kept private
                </p>
              </form>
            )}
          </div>

          {/* ── OFFICES + DETAILS ── */}
          <div className="space-y-4">

            <div className="mb-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#01696f]">
                Find Us
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-[2rem]">
                Our Offices
              </h2>
            </div>

            {/* Office cards */}
            {officeInfo.map((office) => (
              <div
                key={office.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-200 hover:border-slate-300"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-slate-100">
                    {office.flag}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{office.title}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {office.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-sm leading-7 text-slate-500">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#01696f]" />
                  <span>{office.address}</span>
                </div>
              </div>
            ))}

            {/* Contact details */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-display mb-4 text-sm font-bold text-slate-900">
                Contact Details
              </h3>
              <div className="space-y-3">
                {contactDetails.map(({ href, Icon, text, green, external }) => (
                  <a
                    key={text}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`flex items-center gap-3 text-sm transition duration-200 ${
                      green
                        ? "text-slate-600 hover:text-green-600"
                        : "text-slate-600 hover:text-[#01696f]"
                    }`}
                  >
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      green ? "bg-green-50 text-green-600" : "bg-teal-50 text-[#01696f]"
                    }`}>
                      <Icon className="text-xs" />
                    </span>
                    {text}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links dark card */}
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_28px_rgba(15,23,42,0.12)]">
              <div className="relative h-32">
                <Image
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/920d345b13f96c7ecf8d837141bba33ab5c6c3f6.jpg"
                  alt="Travel destination"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f2d3a]/70 to-[#0f2d3a]/95" />
                <div className="absolute inset-0 flex flex-col justify-end px-6 pb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
                    Explore Services
                  </p>
                  <p className="font-display text-base font-bold text-white">
                    Everything under one roof.
                  </p>
                </div>
              </div>
              <div className="bg-[#0f2d3a] px-6 py-4 space-y-1">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-sky-200 transition duration-200 hover:bg-white/5 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <FaArrowRight className="text-[10px] text-sky-400 transition duration-200 group-hover:translate-x-1" />
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