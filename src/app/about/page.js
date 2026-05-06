import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaGlobe,
  FaHandshake,
  FaHospital,
  FaMapMarkerAlt,
  FaPassport,
  FaPhone,
  FaStar,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";
import { MdHealthAndSafety, MdSecurity, MdSupportAgent } from "react-icons/md";

export const metadata = {
  title: "About Us – Triphealer | Medical Tourism & Manpower Consultant",
  description:
    "Triphealer is a Delhi-based medical tourism and manpower consultant connecting Gulf employers with skilled workers and Gulf patients with world-class Indian healthcare.",
};

// ─── DATA ───────────────────────────────────────────────────────────
const values = [
  {
    Icon: FaHandshake,
    title: "Trust & Transparency",
    text: "We operate with complete honesty — no hidden charges, clear timelines and honest communication at every step.",
    color: "text-[#01696f]",
    bg: "bg-[#edf6f6] ring-[#c8e6e8]",
  },
  {
    Icon: MdSecurity,
    title: "Process Clarity",
    text: "Structured documentation, embassy guidance and step-by-step coordination so you always know what's happening.",
    color: "text-sky-600",
    bg: "bg-sky-50 ring-sky-100",
  },
  {
    Icon: MdSupportAgent,
    title: "Complete Assistance",
    text: "From first inquiry to travel and joining or discharge, we stay involved until the process is successfully completed.",
    color: "text-violet-600",
    bg: "bg-violet-50 ring-violet-100",
  },
  {
    Icon: MdHealthAndSafety,
    title: "Patient-Centred Care",
    text: "Medical travellers receive dedicated support — appointment coordination, language assistance and follow-ups.",
    color: "text-emerald-600",
    bg: "bg-emerald-50 ring-emerald-100",
  },
  {
    Icon: FaGlobe,
    title: "Pan-Gulf Reach",
    text: "Serving clients across Saudi Arabia, UAE, Qatar, Kuwait, Oman and Bahrain with a focused India connection.",
    color: "text-amber-600",
    bg: "bg-amber-50 ring-amber-100",
  },
  {
    Icon: FaStar,
    title: "Quality Assurance",
    text: "Rigorous background verification and trade tests ensure only qualified candidates are placed with Gulf employers.",
    color: "text-orange-600",
    bg: "bg-orange-50 ring-orange-100",
  },
];

const whatWeDo = [
  {
    Icon: FaPassport,
    title: "Gulf Work Visa Services",
    desc: "Visa processing for all 6 GCC countries — Saudi Arabia, UAE, Qatar, Kuwait, Oman and Bahrain.",
    href: "/gulf-visas",
  },
  {
    Icon: FaUserTie,
    title: "Overseas Recruitment",
    desc: "Sourcing and deploying skilled and unskilled workers for Gulf employers across industries.",
    href: "/recruitment-services",
  },
  {
    Icon: FaHospital,
    title: "Medical Treatment in India",
    desc: "Helping Gulf patients access top hospitals, specialist doctors and complete patient care.",
    href: "/medical-treatment-india",
  },
  {
    Icon: FaGlobe,
    title: "Travel & Support Services",
    desc: "Flight booking, accommodation, airport pickup, interpreter and local transport coordination.",
    href: "/travel-support",
  },
];

const stats = [
  { value: "500+",  label: "Successful Placements" },
  { value: "6",     label: "Gulf Countries Covered" },
  { value: "50+",   label: "Hospital Partners" },
  { value: "1000+", label: "Happy Clients" },
];

const offices = [
  {
    title: "Head Office",
    city: "New Delhi",
    address:
      "Triphealer, 1st Floor, G51/6, Kotak Mahindra ATM, Shaheen Bagh, Jamia Nagar, New Delhi – 110025",
    phones: ["+91 9953889465", "+91 98915 42452"],
  },
  {
    title: "Branch Office",
    city: "Lucknow",
    address: "Lucknow, Uttar Pradesh, India",
    phones: [],
  },
];

const keyPoints = [
  "Government-compliant visa and recruitment processes",
  "Registered manpower consultant serving 6 GCC countries",
  "Partnerships with India's top hospitals",
  "Dedicated Arabic/English language support for patients",
  "End-to-end service from inquiry to completion",
];

// ─── PAGE ───────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-slate-900">

      {/* ══ HERO — dark image (baaki pages jaisi) ═══════════════════ */}
      <section className="relative overflow-hidden bg-[#071525] text-white">
        <Image
          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/22369600168a00aaea518e5d7363a49ceff960ac.jpg"
          alt="Gulf city skyline"
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
            <span className="text-sky-200">About Us</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-center">
            {/* Left — text */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                About Triphealer
              </div>

              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Medical Tourism &
                <br />
                Manpower Consultant
                <br />
                <span className="text-sky-300">Based in New Delhi.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Triphealer connects Gulf employers with skilled manpower and assists Gulf
                families seeking quality medical treatment in India — complete visa, travel
                and support services under one roof.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#01696f] transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50 active:scale-95"
                >
                  Get in Touch <FaArrowRight className="text-xs" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 active:scale-95"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right — stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/8 px-5 py-7 text-center backdrop-blur-sm"
                >
                  <div className="font-display text-4xl font-black tracking-tight text-white">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO WE ARE ═══════════════════════════════════════════════ */}
      <section className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_56px_rgba(15,23,42,0.12)]">
            <Image
              src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0b31509108921245bb6ce16bbcc370de344d2558.jpg"
              alt="Triphealer team consulting patients"
              width={640}
              height={460}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
            {/* Overlay mission badge */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="rounded-xl border border-white/15 bg-[#01696f]/90 px-5 py-4 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/60 mb-1">
                  Our Mission
                </p>
                <p className="text-sm font-semibold leading-6 text-white">
                  Helping Gulf patients receive quality and affordable treatment in India with complete support.
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#01696f]">
              Who We Are
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-[2rem]">
              Your Trusted Gulf Services Partner from India
            </h2>

            <div className="mt-5 space-y-4 text-[15px] leading-8 text-slate-500">
              <p>
                <strong className="text-slate-800">Triphealer</strong> is a New Delhi-based
                medical tourism and manpower consultancy firm specialising in services for
                the Gulf region. We bridge the gap between Gulf employers and skilled Indian
                manpower, and between Gulf patients and India&apos;s world-class healthcare system.
              </p>
              <p>
                With offices in New Delhi and Lucknow, we serve clients across all six major
                GCC countries — Saudi Arabia, UAE, Qatar, Kuwait, Oman and Bahrain.
              </p>
              <p>
                Our team handles everything — Gulf work visa processing, overseas recruitment,
                candidate selection, documentation, medical treatment bookings, travel coordination
                and patient care support.
              </p>
            </div>

            <ul className="mt-7 space-y-2.5">
              {keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-[#01696f] text-xs" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ WHAT WE DO ═══════════════════════════════════════════════ */}
      <section className="bg-[#f7f6f2] px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#01696f]">
              Our Services
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-500">
              Four core service areas — all under one roof.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((service) => {
              const SIcon = service.Icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#01696f]/25 hover:shadow-[0_14px_32px_rgba(15,23,42,0.09)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf6f6] ring-4 ring-[#c8e6e8]">
                    <SIcon className="text-xl text-[#01696f]" />
                  </div>
                  <h3 className="font-display text-[15px] font-bold text-slate-900 transition duration-200 group-hover:text-[#01696f]">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-slate-500">{service.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#01696f] transition duration-200 group-hover:gap-3">
                    Learn More
                    <FaArrowRight className="text-[10px] transition duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ VALUES ═══════════════════════════════════════════════════ */}
      <section className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#01696f]">
              Our Values
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose Triphealer?
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-500">
              A structured, professional and client-focused partner you can rely on.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {values.map((item) => {
              const VIcon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#f7f6f2] p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ring-4 ${item.bg}`}>
                    <VIcon className={`text-xl ${item.color}`} />
                  </div>
                  <h3 className="font-display mt-4 text-[15px] font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ OFFICES ══════════════════════════════════════════════════ */}
      <section className="bg-[#f1efe8] px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#01696f]">
              Our Locations
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Find Us
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_16px_rgba(15,23,42,0.05)] transition duration-200 hover:shadow-[0_12px_32px_rgba(15,23,42,0.09)]"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#edf6f6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#01696f]">
                  🇮🇳 {office.title}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900">{office.city}</h3>
                <div className="mt-4 flex items-start gap-2.5 text-sm leading-7 text-slate-500">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#01696f]" />
                  <span>{office.address}</span>
                </div>
                {office.phones.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {office.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2.5 text-sm text-slate-600 transition duration-200 hover:text-[#01696f]"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#edf6f6] text-[#01696f]">
                          <FaPhone className="text-[10px]" />
                        </span>
                        {phone}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact card — teal */}
            <div className="relative overflow-hidden rounded-2xl bg-[#01696f] p-7 text-white shadow-[0_8px_28px_rgba(1,105,111,0.22)]">
              {/* Subtle glow */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white opacity-5 blur-2xl" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50 mb-5">
                Contact Us
              </p>
              <div className="space-y-3">
                {[
                  { href: "tel:+919953889465",             Icon: FaPhone,    text: "+91 9953889465" },
                  { href: "tel:+919891542452",             Icon: FaPhone,    text: "+91 98915 42452" },
                  { href: "mailto:ashhar.info1@gmail.com", Icon: FaEnvelope, text: "ashhar.info1@gmail.com" },
                ].map(({ href, Icon, text }) => (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-3 text-sm font-medium text-white/80 transition duration-200 hover:text-white"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Icon className="text-[10px]" />
                    </span>
                    {text}
                  </a>
                ))}
              </div>
              <a
                href="https://wa.me/919953889465"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-[#1fb85a] active:scale-95"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA STRIP ════════════════════════════════════════════════ */}
      <section className="bg-white px-4 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-[#071525] px-8 py-12 shadow-[0_20px_50px_rgba(15,23,42,0.16)] sm:px-12 lg:px-14">
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Teal glow */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#01696f] opacity-20 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">
                  Start Today
                </p>
                <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Work with Triphealer?
                </h2>
                <p className="mt-3 max-w-lg text-base leading-8 text-slate-400">
                  Whether you need Gulf visa assistance, skilled manpower or medical treatment
                  planning in India — our team is ready to help.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:flex-col xl:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-white px-6 py-2.5 text-sm font-bold text-[#071525] transition duration-200 hover:bg-slate-50 hover:-translate-y-0.5 active:scale-95"
                >
                  Contact Us <FaArrowRight className="text-xs" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-6 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition duration-200 hover:bg-white/15 hover:-translate-y-0.5 active:scale-95"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}