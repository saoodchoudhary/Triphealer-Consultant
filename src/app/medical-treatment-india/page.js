import Link from "next/link";
import Image from "next/image";
import {
  FaAmbulance,
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaFlask,
  FaHeartbeat,
  FaHospital,
  FaPhone,
  FaStar,
  FaUserMd,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdLocalHospital,
  MdSupportAgent,
  MdTranslate,
} from "react-icons/md";
import { GiBrain, GiKidneys } from "react-icons/gi";

// ─── DATA ───────────────────────────────────────────────────────────
const treatments = [
  {
    Icon: FaHeartbeat,
    color: "text-red-500",
    ring: "bg-red-50 ring-red-100",
    title: "Heart Treatment",
    desc: "Cardiac surgery, bypass, angioplasty and heart valve replacement at India's top cardiac centers.",
  },
  {
    Icon: GiKidneys,
    color: "text-amber-600",
    ring: "bg-amber-50 ring-amber-100",
    title: "Kidney Treatment",
    desc: "Kidney transplant, dialysis management and nephrology consultations at expert centers.",
  },
  {
    Icon: GiBrain,
    color: "text-violet-600",
    ring: "bg-violet-50 ring-violet-100",
    title: "Cancer Consultation",
    desc: "Oncology treatment including chemotherapy, radiation therapy and surgical oncology.",
  },
  {
    Icon: FaUserMd,
    color: "text-sky-600",
    ring: "bg-sky-50 ring-sky-100",
    title: "Orthopedic Treatment",
    desc: "Joint replacement, spine surgery, sports injuries and orthopedic rehabilitation.",
  },
  {
    Icon: FaFlask,
    color: "text-pink-600",
    ring: "bg-pink-50 ring-pink-100",
    title: "IVF / Fertility Support",
    desc: "In vitro fertilization, fertility evaluations and reproductive health treatments.",
  },
  {
    Icon: FaHospital,
    color: "text-emerald-600",
    ring: "bg-emerald-50 ring-emerald-100",
    title: "General Surgery",
    desc: "Appendectomy, hernia repair, gallbladder removal and other common surgical procedures.",
  },
  {
    Icon: FaAmbulance,
    color: "text-orange-600",
    ring: "bg-orange-50 ring-orange-100",
    title: "Dental Treatment",
    desc: "Dental implants, root canal, teeth whitening and complete oral care solutions.",
  },
  {
    Icon: MdHealthAndSafety,
    color: "text-teal-600",
    ring: "bg-teal-50 ring-teal-100",
    title: "Eye Treatment",
    desc: "Cataract surgery, LASIK, glaucoma treatment and other ophthalmology services.",
  },
];

const supportServices = [
  {
    Icon: FaHospital,
    title: "Hospital Appointment Booking",
    points: [
      "Access to top hospitals in India",
      "Specialist doctor appointments",
      "Fast scheduling support",
      "Second opinion consultations",
    ],
  },
  {
    Icon: MdLocalHospital,
    title: "Medical Visa Support",
    points: [
      "Medical visa guidance",
      "Invitation letter from hospital",
      "Supporting document help",
      "Travel coordination",
    ],
  },
  {
    Icon: MdSupportAgent,
    title: "Patient Care Support",
    points: [
      "Arabic / English interpreter",
      "Follow-up appointments",
      "Pharmacy assistance",
      "24/7 patient helpline",
    ],
  },
  {
    Icon: MdTranslate,
    title: "Translation Services",
    points: [
      "Medical report translation",
      "Doctor-patient communication",
      "Insurance document help",
      "Report summary in Arabic",
    ],
  },
];

const topHospitals = [
  "AIIMS (All India Institute of Medical Sciences)",
  "Apollo Hospitals",
  "Fortis Healthcare",
  "Max Healthcare",
  "Medanta – The Medicity",
  "Narayana Health",
  "Manipal Hospitals",
  "Kokilaben Dhirubhai Ambani Hospital",
];

const whyIndia = [
  "World-class hospitals with latest technology",
  "Cost 60–80% lower than Gulf & Western countries",
  "Highly qualified English-speaking doctors",
  "Shorter waiting times for procedures",
  "No language barrier with our interpreter support",
  "Warm and personalized patient care",
];

const heroTags = [
  { icon: FaStar,          label: "Top Hospitals",         color: "text-amber-400" },
  { icon: MdTranslate,     label: "Arabic Interpreter",    color: "text-emerald-300" },
  { icon: FaCheckCircle,   label: "End-to-End Assistance", color: "text-emerald-300" },
];

// ─── PAGE ───────────────────────────────────────────────────────────
export default function MedicalTreatmentPage() {
  return (
    <main className=" bg-[#f7f6f2] text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#052e1c] text-white">
        <Image
          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/23ae89017056d201ca1a88af15f874a173accd1d.jpg"
          alt="Modern hospital interior India"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052e1c]/95 via-[#052e1c]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#052e1c]/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 lg:px-10 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-emerald-300/80 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-emerald-200">Medical Treatment in India</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Healthcare Assistance for Gulf Patients
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Trusted Medical Care
              <br />
              <span className="text-emerald-300">in India for Gulf</span>
              <br />
              Patients.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Quality and affordable treatment in India with complete support — from hospital
              booking to travel, accommodation and personalized patient care.
            </p>

            {/* Feature pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {heroTags.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm"
                >
                  <Icon className={color} />
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#052e1c] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-emerald-50 active:scale-95"
              >
                Book Consultation <FaArrowRight className="text-xs" />
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

      {/* ── TRUST STRIP ── */}
      <section className="bg-[#03180e] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-10 text-center">
          <p className="text-sm font-semibold text-emerald-200">
            🇮🇳 We bridge the gap between Gulf patients and world-class Indian healthcare
          </p>
        </div>
      </section>

      {/* ── TREATMENTS ── */}
      <section className="px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Treatment Areas
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Treatment Assistance
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              We connect Gulf patients with top specialists for a wide range of medical conditions
              at India's most trusted hospitals.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((t) => {
              const TIcon = t.Icon;
              return (
                <div
                  key={t.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl ring-4 ${t.ring}`}>
                    <TIcon className={`text-2xl ${t.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#01696f] transition">
                    {t.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-500">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SUPPORT SERVICES ── dark section for contrast ── */}
      <section className="bg-[#052e1c] px-4 py-20 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
              How We Help
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Support Services
            </h2>
            <p className="mt-4 text-base leading-7 text-emerald-100/70">
              Complete assistance from the moment you decide to travel to India for treatment.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportServices.map((s, i) => {
              const SIcon = s.Icon;
              return (
                <div
                  key={s.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm hover:bg-white/10 transition"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-extrabold text-emerald-300 ring-1 ring-emerald-500/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <SIcon className="text-2xl text-emerald-400 mb-4" />
                  <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
                  <ul className="space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-emerald-100/70">
                        <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-400 text-xs" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TOP HOSPITALS + WHY INDIA ── */}
      <section className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">

          {/* Hospitals list */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Our Network
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Top Hospitals in India
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              We have working relationships with India's most reputed hospitals — ensuring Gulf
              patients get access to the best doctors and facilities.
            </p>

            <div className="mt-8 space-y-3">
              {topHospitals.map((hospital, i) => (
                <div
                  key={hospital}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#f7f6f2] px-5 py-3.5 transition hover:border-emerald-200 hover:bg-emerald-50/40"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#052e1c] text-xs font-extrabold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-700">{hospital}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[#052e1c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0d5b45] hover:-translate-y-0.5"
            >
              Book Hospital Appointment <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* Why India card — image + content */}
          <div className="overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(13,91,69,0.16)]">
            <div className="relative h-52 overflow-hidden">
              <Image
                src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0b31509108921245bb6ce16bbcc370de344d2558.jpg"
                alt="Indian doctor consulting patient"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d5b45]/20 to-[#0d5b45]/90" />
              <div className="absolute bottom-5 left-7">
                <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-100 backdrop-blur-sm">
                  Why Choose India?
                </span>
              </div>
            </div>

            <div className="bg-[#0d5b45] p-8 text-white">
              <FaHeartbeat className="text-3xl text-emerald-300 mb-5" />
              <h3 className="text-xl font-bold mb-4">Affordable. Expert. Trusted.</h3>
              <ul className="space-y-3">
                {whyIndia.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-emerald-100/90 leading-7">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 py-16 bg-[#f1efe8] lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#052e1c] to-[#0d5b45] shadow-[0_20px_50px_rgba(5,46,28,0.25)] px-8 py-12 text-white sm:px-12 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                Get Help Today
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Need Medical Treatment Assistance?
              </h2>
              <p className="mt-3 max-w-lg text-base leading-8 text-emerald-100/80">
                Contact our medical support team today. We'll guide you through every step — from
                hospital selection to your safe return home.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="tel:+919953889465"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#052e1c] transition hover:bg-emerald-50"
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