import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaFileAlt,
  FaPassport,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { MdSupportAgent, MdVerified } from "react-icons/md";

// ─── DATA ───────────────────────────────────────────────────────────
const gulfCountries = [
  {
    flag: "🇸🇦",
    name: "Saudi Arabia",
    title: "Saudi Work Visa",
    accent: "text-green-600",
    ring: "bg-green-50 ring-green-100",
    desc: "Work visas for construction, healthcare, oil & gas, hospitality and other sectors in the Kingdom of Saudi Arabia.",
  },
  {
    flag: "🇦🇪",
    name: "UAE",
    title: "UAE Employment Visa",
    accent: "text-red-500",
    ring: "bg-red-50 ring-red-100",
    desc: "Employment visas for Dubai, Abu Dhabi, Sharjah and all Emirates — skilled and unskilled categories.",
  },
  {
    flag: "🇶🇦",
    name: "Qatar",
    title: "Qatar Work Visa",
    accent: "text-violet-600",
    ring: "bg-violet-50 ring-violet-100",
    desc: "Work permits for Qatar's booming infrastructure, hospitality, construction and industrial sectors.",
  },
  {
    flag: "🇰🇼",
    name: "Kuwait",
    title: "Kuwait Work Visa",
    accent: "text-sky-600",
    ring: "bg-sky-50 ring-sky-100",
    desc: "Employment visas for Kuwait covering oil & gas, healthcare, engineering and general labor categories.",
  },
  {
    flag: "🇴🇲",
    name: "Oman",
    title: "Oman Work Visa",
    accent: "text-orange-600",
    ring: "bg-orange-50 ring-orange-100",
    desc: "Work visas for Oman's construction, tourism, retail and industrial sectors with full documentation support.",
  },
  {
    flag: "🇧🇭",
    name: "Bahrain",
    title: "Bahrain Work Visa",
    accent: "text-amber-600",
    ring: "bg-amber-50 ring-amber-100",
    desc: "Employment permits for Bahrain covering finance, hospitality, construction and skilled trade positions.",
  },
];

const visaProcess = [
  {
    step: "01",
    title: "Document Preparation",
    desc: "We guide you to gather all necessary documents — passport, photos, educational certificates, and medical reports.",
  },
  {
    step: "02",
    title: "Application Submission",
    desc: "We submit the visa application to the respective embassy with accurate information and complete documentation.",
  },
  {
    step: "03",
    title: "Embassy Processing",
    desc: "We track your application and liaise with the embassy for any additional requirements or clarifications.",
  },
  {
    step: "04",
    title: "Visa Stamping",
    desc: "Once approved, we guide you through passport submission and visa stamping at the Gulf consulate.",
  },
  {
    step: "05",
    title: "Pre-Departure Support",
    desc: "We provide orientation on travel documents, medical fitness certificates, and joining instructions.",
  },
];

const docServices = [
  "Visa Application Filing",
  "Embassy Cover Letter Drafting",
  "Document Attestation Guidance",
  "Medical Fitness Certificate Assistance",
  "Police Clearance Certificate Support",
  "Contract Verification",
  "Work Permit Assistance",
  "Consulate Appointment Booking",
];

const infoCards = [
  {
    Icon: FaFileAlt,
    color: "text-sky-600",
    bg: "bg-sky-50 ring-sky-100",
    title: "Embassy Process Guidance",
    desc: "We guide you through the exact requirements for each Gulf country's embassy — saving time and avoiding rejections.",
  },
  {
    Icon: MdVerified,
    color: "text-emerald-600",
    bg: "bg-emerald-50 ring-emerald-100",
    title: "High Approval Rate",
    desc: "Thorough pre-submission checks and expert knowledge of Gulf visa requirements ensure a high success rate.",
  },
  {
    Icon: FaClock,
    color: "text-amber-600",
    bg: "bg-amber-50 ring-amber-100",
    title: "Fast Processing",
    desc: "We work efficiently to ensure your application is processed as quickly as possible without compromising accuracy.",
  },
];

// ─── PAGE ───────────────────────────────────────────────────────────
export default function GulfVisasPage() {
  return (
    <main className=" bg-[#f7f6f2] text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071525] text-white">
        <Image
          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/22369600168a00aaea518e5d7363a49ceff960ac.jpg"
          alt="Dubai skyline aerial view"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/95 via-[#071525]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 lg:px-10 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sky-300/80 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-sky-200">Gulf Work Visas</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
              Gulf Work Visa Services · 6 GCC Countries
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Gulf Work Visa
              <br />
              <span className="text-sky-300">Processing Made</span>
              <br />
              Simple.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Complete work visa processing for all major Gulf countries — from documentation to
              embassy submission, we handle every step so you can focus on your new opportunity.
            </p>

            {/* Country flag pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {gulfCountries.map((c) => (
                <span
                  key={c.name}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-sky-100 backdrop-blur-sm"
                >
                  <span className="text-base">{c.flag}</span>
                  {c.name}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#071525] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-sky-50 active:scale-95"
              >
                Start Visa Process <FaArrowRight className="text-xs" />
              </Link>
              <a
                href="https://wa.me/919953889465"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1fb85a] active:scale-95"
              >
                <FaWhatsapp className="text-base" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COUNTRY CARDS ── */}
      <section className="px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              GCC Countries
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Countries We Cover
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              We process work visas for all 6 major Gulf Cooperation Council (GCC) countries with
              full documentation and embassy support.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gulfCountries.map((country) => (
              <div
                key={country.name}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Flag + icon */}
                <div className="mb-5 flex items-center gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl ring-4 ${country.ring}`}>
                    {country.flag}
                  </div>
                  <div>
                    <h3 className={`text-base font-bold text-slate-900 group-hover:${country.accent} transition`}>
                      {country.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                      {country.name}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-500 mb-5">{country.desc}</p>

                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${country.accent} transition group-hover:gap-2.5`}
                >
                  Enquire Now <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISA PROCESS — dark section ── */}
      <section className="bg-[#071525] px-4 py-20 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
              Step by Step
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Visa Process
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              A simple, transparent step-by-step process to get your Gulf work visa approved.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {visaProcess.map((item, i) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm hover:bg-white/10 transition"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/20 text-sm font-extrabold text-sky-300 ring-1 ring-sky-500/30">
                    {item.step}
                  </span>
                  {i < visaProcess.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-white/10" />
                  )}
                </div>
                <FaPassport className="text-xl text-sky-400 mb-4" />
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTATION + INFO CARDS ── */}
      <section className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">

          {/* Documentation list */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Paperwork We Handle
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Visa Documentation Support
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Proper documentation is the key to a successful visa application. Our team ensures
              every document is correctly prepared, attested and submitted.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {docServices.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#f7f6f2] px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <FaCheckCircle className="shrink-0 text-[#01696f]" />
                  {service}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[#071525] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0f2d3a] hover:-translate-y-0.5"
            >
              Get Visa Assistance <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            {infoCards.map(({ Icon, color, bg, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-5 rounded-2xl border border-slate-100 bg-[#f7f6f2] p-6 transition hover:border-slate-200 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-4 ${bg}`}>
                  <Icon className={`text-xl ${color}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-sm leading-7 text-slate-500">{desc}</p>
                </div>
              </div>
            ))}

            {/* Visual image strip */}
            <div className="overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.10)]">
              <div className="relative h-44">
                <Image
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/22369600168a00aaea518e5d7363a49ceff960ac.jpg"
                  alt="Gulf skyline"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#071525]/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300 mb-2">
                    Trusted by 500+ Candidates
                  </p>
                  <p className="text-xl font-extrabold leading-tight">
                    6 Gulf Countries · Full Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 py-16 bg-[#f1efe8] lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#071525] to-[#0c4a6e] shadow-[0_20px_50px_rgba(7,21,37,0.25)] px-8 py-12 text-white sm:px-12 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                Start Today
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Need Visa Assistance?
              </h2>
              <p className="mt-3 max-w-lg text-base leading-8 text-slate-200/80">
                Contact our visa experts today. We'll guide you through the entire process — from
                documentation to departure.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="tel:+919953889465"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#071525] transition hover:bg-sky-50"
              >
                <FaPhone /> +91 9953889465
              </a>
              <a
                href="https://wa.me/919953889465"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1fb85a]"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href="mailto:ashhar.info1@gmail.com"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}