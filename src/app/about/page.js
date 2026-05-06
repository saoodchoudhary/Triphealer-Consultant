import Link from "next/link";
import Image from "next/image";
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
  { value: "6",    label: "Gulf Countries Covered" },
  { value: "50+",  label: "Hospital Partners" },
  { value: "1000+",label: "Happy Clients" },
];

const offices = [
  {
    title: "Head Office",
    city: "New Delhi",
    address: "Triphealer, 1st Floor, G51/6, Kotak Mahindra ATM, Shaheen Bagh, Jamia Nagar, New Delhi – 110025",
    phones: ["+91 9953889465", "+91 98915 42452"],
  },
  {
    title: "Branch Office",
    city: "Lucknow",
    address: "Lucknow, Uttar Pradesh, India",
    phones: [],
  },
];

// ─── PAGE ───────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="bg-[#f7f6f2] text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#01696f] to-[#0a3a3e] text-white">
        {/* Decorative circles */}
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />

        <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-10 lg:py-24">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/90">About Us</span>
          </nav>

          <div className="grid gap-14 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                About Triphealer
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
                Medical Tourism &
                <br />
                Manpower Consultant
                <br />
                <span className="text-white/70 font-bold text-3xl sm:text-4xl">
                  Based in New Delhi, India.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                Triphealer connects Gulf employers with skilled manpower and assists Gulf families
                seeking quality medical treatment in India — complete visa, travel and support
                services under one roof.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#01696f] transition hover:-translate-y-0.5 hover:bg-slate-50 active:scale-95"
                >
                  Get in Touch <FaArrowRight className="text-xs" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/25 active:scale-95"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/15 bg-white/10 px-6 py-8 text-center backdrop-blur-sm"
                >
                  <div className="text-4xl font-black text-white tracking-tight">{s.value}</div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* Image */}
          <div className="relative overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
            <Image
              src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0b31509108921245bb6ce16bbcc370de344d2558.jpg"
              alt="Triphealer team consulting patients"
              width={640}
              height={460}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-2xl border border-white/20 bg-[#01696f]/90 px-5 py-4 backdrop-blur-md text-white">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70 mb-1">
                  Our Mission
                </p>
                <p className="text-sm font-semibold leading-6">
                  Helping Gulf patients receive quality and affordable treatment in India with complete support.
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your Trusted Gulf Services Partner from India
            </h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-slate-500">
              <p>
                <strong className="text-slate-800">Triphealer</strong> is a New Delhi-based medical
                tourism and manpower consultancy firm specialising in services for the Gulf region.
                We bridge the gap between Gulf employers and skilled Indian manpower, and between
                Gulf patients and India&apos;s world-class healthcare system.
              </p>
              <p>
                With offices in New Delhi (Head Office) and Lucknow, we serve clients across all
                six major Gulf Cooperation Council (GCC) countries — Saudi Arabia, UAE, Qatar,
                Kuwait, Oman and Bahrain.
              </p>
              <p>
                Our team handles everything — Gulf work visa processing, overseas recruitment,
                candidate selection, documentation, medical treatment bookings, travel coordination
                and patient care support — ensuring a smooth experience at every stage.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Government-compliant visa and recruitment processes",
                "Registered manpower consultant serving 6 GCC countries",
                "Partnerships with India's top hospitals",
                "Dedicated Arabic/English language support for patients",
                "End-to-end service from inquiry to completion",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-slate-600">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-[#01696f]" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="px-4 py-20 lg:px-10 bg-[#f7f6f2]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Four core service areas — all under one roof.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((service) => {
              const SIcon = service.Icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)] hover:border-[#01696f]/30"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6f6] ring-4 ring-[#c8e6e8]">
                    <SIcon className="text-xl text-[#01696f]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#01696f] transition mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-500 mb-4">{service.desc}</p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#01696f] transition group-hover:gap-3">
                    Learn More <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VALUES / WHY TRIPHEALER ── */}
      <section className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Our Values
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose Triphealer?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              A structured, professional and client-focused partner you can rely on.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {values.map((item) => {
              const VIcon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-[#f7f6f2] p-7 shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_14px_36px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition duration-300"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-4 ${item.bg}`}>
                    <VIcon className={`text-xl ${item.color}`} />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="bg-[#f1efe8] px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Our Locations
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Find Us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)] transition"
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#edf6f6] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#01696f]">
                  🇮🇳 {office.title}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{office.city}</h3>
                <div className="mt-4 flex items-start gap-3 text-sm leading-7 text-slate-500">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#01696f]" />
                  <span>{office.address}</span>
                </div>
                {office.phones.length > 0 && (
                  <div className="mt-4 space-y-1.5">
                    {office.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-[#01696f] transition"
                      >
                        <FaPhone className="shrink-0 text-xs text-[#01696f]" />
                        {phone}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact card */}
            <div className="rounded-3xl border border-[#01696f]/25 bg-[#01696f] p-8 text-white shadow-[0_8px_24px_rgba(1,105,111,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60 mb-4">
                Contact Us
              </p>
              <div className="space-y-4">
                <a href="tel:+919953889465" className="flex items-center gap-3 text-sm font-medium text-white/90 hover:text-white transition">
                  <FaPhone className="shrink-0 text-xs text-white/60" /> +91 9953889465
                </a>
                <a href="tel:+919891542452" className="flex items-center gap-3 text-sm font-medium text-white/90 hover:text-white transition">
                  <FaPhone className="shrink-0 text-xs text-white/60" /> +91 98915 42452
                </a>
                <a href="mailto:ashhar.info1@gmail.com" className="flex items-center gap-3 text-sm font-medium text-white/90 hover:text-white transition break-all">
                  <FaEnvelope className="shrink-0 text-xs text-white/60" /> ashhar.info1@gmail.com
                </a>
                <a
                  href="https://wa.me/919953889465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1fb85a]"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white px-4 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0f2d3a] to-[#114f60] px-8 py-12 text-white shadow-[0_20px_50px_rgba(15,45,58,0.18)] sm:px-12 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                Start Today
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Work with Triphealer?
              </h2>
              <p className="mt-3 max-w-lg text-base leading-8 text-slate-200">
                Whether you need Gulf visa assistance, skilled manpower or medical treatment planning
                in India — our team is ready to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#0f2d3a] transition hover:bg-sky-50"
              >
                Contact Us <FaArrowRight className="text-xs" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
