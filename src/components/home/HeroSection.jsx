// components/home/HeroSection.jsx
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaWhatsapp,
  FaPhoneAlt,
  FaPassport,
  FaUserTie,
  FaHospital,
  FaPlane,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { stats, countries } from "@/data/homeData";

const heroServices = [
  { icon: FaPassport, label: "Gulf Visa",     href: "/gulf-visas" },
  { icon: FaUserTie,  label: "Recruitment",   href: "/recruitment-services" },
  { icon: FaHospital, label: "Medical India", href: "/medical-treatment-india" },
  { icon: FaPlane,    label: "Travel Help",   href: "/travel-support" },
];

const trustBadges = [
  { icon: FaShieldAlt,   text: "Verified Process" },
  { icon: FaCheckCircle, text: "6 Gulf Countries" },
  { icon: FaCheckCircle, text: "1000+ Clients Served" },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#04111a]">

      {/* Background */}
      <Image
        src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/148372caeed4d88669e45be5ee6abe2f2edf035a.jpg"
        alt="Dubai skyline night aerial view"
        fill
        className="object-cover object-center scale-[1.04] transition-transform duration-[12s] ease-out"
        priority
        quality={95}
      />

      {/* Layered scrims */}
      <div className="absolute inset-0 bg-[#04111a]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/75 to-[#04111a]/15" />
      {/* ── Bottom fade REMOVED ── top vignette only */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04111a]/40 via-transparent to-transparent" />

      {/* Accent glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-10 h-[700px] w-[700px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.6) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.5) 0%, transparent 70%)" }}
      />

      {/* Noise texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content — no extra wrapper div, directly flex-1 */}
      <div className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-5 py-8 lg:px-10 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[1fr_440px] lg:items-center">

            {/* LEFT */}
            <div className="flex flex-col">
              <div className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.08)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-200/90">
                  Triphealer · Medical Tourism & Manpower Consultant
                </span>
              </div>

              <h1 className="text-[2.5rem] font-black leading-[1.05] tracking-[-0.025em] text-white sm:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.5rem]">
                Your Trusted Gulf
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(95deg, #bae6fd 0%, #38bdf8 35%, #22d3ee 65%, #a5f3fc 100%)",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Services Partner
                </span>
                <br />
                <span className="text-white/80 font-extrabold">Based in India.</span>
              </h1>

              <p className="mt-6 max-w-[500px] text-[1.05rem] leading-[1.85] text-slate-300/85">
                We connect Gulf employers with skilled manpower and assist Gulf patients
                seeking quality treatment in India — complete visa, travel and support
                services under one roof.
              </p>

              <div className="mt-8 h-px w-16 rounded-full bg-gradient-to-r from-sky-400 to-transparent opacity-60" />

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#04111a] shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-50 hover:shadow-[0_14px_50px_rgba(0,0,0,0.5)] active:scale-[0.97]"
                >
                  Start Consultation
                  <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/919953889465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(37,211,102,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1ebc5a] hover:shadow-[0_12px_40px_rgba(37,211,102,0.45)] active:scale-[0.97]"
                >
                  <FaWhatsapp className="text-[17px]" /> WhatsApp
                </a>
                <a
                  href="tel:+919953889465"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-white/14 active:scale-[0.97]"
                >
                  <FaPhoneAlt className="text-xs" /> Call Now
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                {trustBadges.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.text} className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Icon className="text-emerald-400 text-[11px] shrink-0" />
                      <span>{b.text}</span>
                      {i < trustBadges.length - 1 && (
                        <span className="ml-3 h-3 w-px bg-white/15" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {countries.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-white/7 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-sky-100/75 backdrop-blur-sm transition hover:border-sky-400/25 hover:bg-white/12 hover:text-sky-100"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 mb-1">
                Our Services
              </p>

              <div className="grid grid-cols-2 gap-3">
                {heroServices.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/8 bg-white/7 p-5 backdrop-blur-md transition duration-200 hover:border-sky-400/25 hover:bg-white/12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                           style={{ background: "radial-gradient(circle at top left, rgba(56,189,248,0.08), transparent 70%)" }} />
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/12 text-sky-300 group-hover:bg-sky-400/20 transition">
                        <Icon className="text-sm" />
                      </div>
                      <span className="text-sm font-semibold leading-tight text-white/85 group-hover:text-white transition">
                        {s.label}
                      </span>
                      <FaArrowRight className="absolute bottom-4 right-4 text-[10px] text-sky-400/50 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                  Our Impact
                </span>
                <div className="flex-1 h-px bg-white/8" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/7 p-5 text-center backdrop-blur-md transition hover:bg-white/10 hover:border-white/14"
                  >
                    {i === 0 && (
                      <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full opacity-30"
                           style={{ background: "radial-gradient(circle, rgba(56,189,248,0.6), transparent 70%)" }} />
                    )}
                    <div className="relative text-3xl font-black tracking-tight text-white sm:text-[2rem]">
                      {s.value}
                    </div>
                    <div className="relative mt-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-sky-300/70">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-1 rounded-2xl border border-white/8 bg-white/5 px-5 py-4 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2.5">
                  Head Office
                </p>
                <p className="text-xs leading-6 text-slate-300/75">
                  Shaheen Bagh, Jamia Nagar, New Delhi – 110025
                </p>
                <a
                  href="tel:+919953889465"
                  className="mt-1 inline-block text-xs font-semibold text-sky-400/80 hover:text-sky-300 transition"
                >
                  +91 9953889465
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}