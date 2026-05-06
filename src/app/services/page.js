import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaHospital,
  FaPassport,
  FaPhone,
  FaPlane,
  FaUserCheck,
  FaUserMd,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdLocalHospital,
  MdSupportAgent,
  MdTranslate,
} from "react-icons/md";

export const metadata = {
  title: "Our Services – Triphealer | Gulf Visa, Recruitment & Medical Treatment",
  description:
    "Complete Gulf work visa services, overseas recruitment, manpower supply, medical treatment in India, and travel support — all under one roof.",
};

// ─── DATA ───────────────────────────────────────────────────────────
const serviceGroups = [
  {
    id: "gulf-visas",
    badge: "Gulf Services",
    badgeColor: "text-sky-700 bg-sky-50 ring-1 ring-sky-200",
    Icon: FaPassport,
    iconBg: "bg-sky-50 ring-sky-200",
    iconColor: "text-sky-600",
    href: "/gulf-visas",
    title: "Gulf Work Visa Services",
    subtitle: "All 6 GCC Countries Covered",
    desc: "We process work visas for Saudi Arabia, UAE, Qatar, Kuwait, Oman and Bahrain — with complete documentation support and embassy guidance.",
    items: [
      "Saudi Work Visa",
      "UAE Employment Visa",
      "Qatar Work Visa",
      "Kuwait Work Visa",
      "Oman Work Visa",
      "Bahrain Work Visa",
      "Visa Documentation Support",
      "Embassy Process Guidance",
    ],
  },
  {
    id: "recruitment",
    badge: "Manpower",
    badgeColor: "text-amber-700 bg-amber-50 ring-1 ring-amber-200",
    Icon: FaUserTie,
    iconBg: "bg-amber-50 ring-amber-200",
    iconColor: "text-amber-700",
    href: "/recruitment-services",
    title: "Overseas Recruitment & Manpower Supply",
    subtitle: "Skilled & Unskilled Workers",
    desc: "We source, screen and deploy manpower across all Gulf countries — construction, trades, office and hospitality — with full documentation from selection to departure.",
    items: [
      "Skilled Workers",
      "Unskilled Workers",
      "Construction Labor",
      "Drivers & Helpers",
      "Cleaners",
      "Electricians, Plumbers & Welders",
      "Mechanics",
      "Office & Hospitality Staff",
    ],
  },
  {
    id: "candidate-selection",
    badge: "Recruitment Process",
    badgeColor: "text-violet-700 bg-violet-50 ring-1 ring-violet-200",
    Icon: FaUserCheck,
    iconBg: "bg-violet-50 ring-violet-200",
    iconColor: "text-violet-700",
    href: "/recruitment-services",
    title: "Candidate Selection",
    subtitle: "Rigorous Screening Process",
    desc: "We ensure every candidate meets the employer's requirements through a multi-stage selection process.",
    items: [
      "CV Shortlisting",
      "Interview Scheduling",
      "Trade Test Arrangement",
      "Background Verification",
    ],
  },
  {
    id: "travel-joining",
    badge: "Travel Support",
    badgeColor: "text-teal-700 bg-teal-50 ring-1 ring-teal-200",
    Icon: FaPlane,
    iconBg: "bg-teal-50 ring-teal-200",
    iconColor: "text-teal-700",
    href: "/travel-support",
    title: "Travel & Joining Support",
    subtitle: "End-to-End Travel Coordination",
    desc: "We handle all logistics from booking to departure so candidates can focus on their new opportunity.",
    items: [
      "Flight Ticket Booking",
      "Medical Assistance",
      "Insurance Help",
      "Departure Support",
    ],
  },
  {
    id: "documentation",
    badge: "Documentation",
    badgeColor: "text-slate-600 bg-slate-100 ring-1 ring-slate-200",
    Icon: FaFileAlt,
    iconBg: "bg-slate-100 ring-slate-200",
    iconColor: "text-slate-600",
    href: "/gulf-visas",
    title: "Documentation Services",
    subtitle: "Paperwork Made Simple",
    desc: "Our documentation experts handle every piece of paperwork required for visas, recruitment and international travel.",
    items: [
      "Visa Application Filing",
      "Embassy Cover Letter",
      "Document Attestation",
      "Medical Fitness Certificates",
      "Police Clearance Support",
      "Contract Verification",
      "Emigration Clearance (ECR)",
      "Insurance Enrollment",
    ],
  },
];

const medicalServices = [
  {
    Icon: FaHospital,
    title: "Hospital Appointment Booking",
    points: [
      "Top hospitals in India",
      "Specialist doctor appointments",
      "Fast scheduling support",
      "Second opinion consultations",
    ],
  },
  {
    Icon: FaUserMd,
    title: "Treatment Assistance",
    points: [
      "Heart & Orthopedic Treatment",
      "Kidney & Cancer Consultation",
      "IVF / Fertility Support",
      "Dental, Eye & General Surgery",
    ],
  },
  {
    Icon: MdLocalHospital,
    title: "Medical Visa Support",
    points: [
      "Medical visa guidance",
      "Invitation / supporting documents",
      "Travel coordination",
      "Embassy document preparation",
    ],
  },
  {
    Icon: MdSupportAgent,
    title: "Patient Care Support",
    points: [
      "Arabic / English interpreter",
      "Follow-up appointments",
      "Pharmacy assistance",
      "Airport pickup & local transport",
    ],
  },
];

const travelMedItems = [
  "Airport Pickup",
  "Hotel / Apartment Booking",
  "Translator Assistance",
  "Local Transport Help",
  "Follow-up Appointment Support",
  "Pharmacy Assistance",
];

const trustCards = [
  {
    icon: MdHealthAndSafety,
    title: "Medical Visa Help",
    text: "Guidance on medical visa requirements and obtaining invitation letters from hospitals.",
    color: "text-emerald-600",
    bg: "bg-emerald-50 ring-emerald-100",
  },
  {
    icon: MdTranslate,
    title: "Arabic Interpreter",
    text: "Arabic and English language support throughout your hospital visits and consultations.",
    color: "text-sky-600",
    bg: "bg-sky-50 ring-sky-100",
  },
  {
    icon: FaHospital,
    title: "Top Hospitals",
    text: "Access to AIIMS, Apollo, Fortis, Max, Medanta, Narayana Health and more.",
    color: "text-violet-600",
    bg: "bg-violet-50 ring-violet-100",
  },
  {
    icon: MdSupportAgent,
    title: "24/7 Patient Help",
    text: "Round-the-clock assistance for emergencies, pharmacy needs and follow-ups.",
    color: "text-amber-600",
    bg: "bg-amber-50 ring-amber-100",
  },
];

// ─── PAGE ───────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-slate-900">

      {/* ══ HERO — dark image background (baaki pages jaisi) ═════════ */}
      <section className="relative overflow-hidden bg-[#071525] text-white">
        <Image
          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/22369600168a00aaea518e5d7363a49ceff960ac.jpg"
          alt="Gulf city skyline — Triphealer services"
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/95 via-[#071525]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-10 lg:py-24">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-sky-300/70">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span className="text-white/25">/</span>
            <span className="text-sky-200">Our Services</span>
          </nav>

          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Gulf Visa · Recruitment · Medical Treatment
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              All Our Services
              <br />
              <span className="text-sky-300">Under One Roof.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">
              From Gulf work visas and overseas recruitment to medical treatment assistance
              in India — Triphealer provides complete, professional support at every step.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#01696f] transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50 active:scale-95"
              >
                Get Free Consultation <FaArrowRight className="text-xs" />
              </Link>
              <a
                href="https://wa.me/919953889465"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 active:scale-95"
              >
                <FaWhatsapp className="text-base" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GULF & RECRUITMENT SERVICES ══════════════════════════════ */}
      <section className="px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* Section header */}
          <div className="mb-12 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#01696f]">
              Gulf Services
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Visa, Recruitment & Documentation
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-500">
              Complete support for Gulf employers and job seekers — from visa processing to
              manpower deployment.
            </p>
          </div>

          {/* Service cards grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceGroups.map((group) => {
              const GIcon = group.Icon;
              return (
                <div
                  key={group.id}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]"
                >
                  {/* Badge + icon row */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${group.badgeColor}`}>
                      {group.badge}
                    </span>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ring-4 ${group.iconBg}`}>
                      <GIcon className={`text-xl ${group.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900">{group.title}</h3>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {group.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{group.desc}</p>

                  <ul className="mt-5 flex-1 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <FaCheckCircle className="shrink-0 text-[10px] text-[#01696f]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <Link
                      href={group.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#01696f] transition duration-200 group-hover:gap-3"
                    >
                      Learn More
                      <FaArrowRight className="text-[10px] transition duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ MEDICAL TREATMENT ════════════════════════════════════════ */}
      <section className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* Section header */}
          <div className="mb-12 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">
              Medical Tourism
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Medical Treatment in India for Gulf Clients
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-500">
              Trusted medical treatment services in India for Gulf patients — quality and affordable
              healthcare with complete support from arrival to recovery.
            </p>
            <p className="mt-3 text-sm italic text-slate-400">
              &ldquo;Helping Gulf patients receive quality and affordable treatment in India with complete support.&rdquo;
            </p>
          </div>

          {/* Medical service cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {medicalServices.map((service) => {
              const SIcon = service.Icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-[#f7f6f2] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/40 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 ring-4 ring-emerald-50">
                    <SIcon className="text-xl text-emerald-700" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-500">
                        <FaCheckCircle className="mt-0.5 shrink-0 text-[10px] text-emerald-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/medical-treatment-india"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#01696f] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_16px_rgba(1,105,111,0.2)] transition duration-200 hover:bg-[#0c4e54] hover:-translate-y-0.5 active:scale-95"
            >
              Medical Treatment Details <FaArrowRight className="text-xs" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition duration-200 hover:bg-slate-50 hover:-translate-y-0.5 active:scale-95"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══ TRAVEL & STAY ════════════════════════════════════════════ */}
      <section className="bg-[#f1efe8] px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left: text + checklist */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#01696f]">
                Travel & Stay Support
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Complete Travel Assistance for Gulf Visitors in India
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-500">
                We handle all logistics for Gulf patients and their families travelling to India
                for medical treatment — from airport pickup to accommodation.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {travelMedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition duration-200 hover:border-slate-300"
                  >
                    <FaCheckCircle className="shrink-0 text-[#01696f]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/travel-support"
                className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#01696f] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_16px_rgba(1,105,111,0.2)] transition duration-200 hover:bg-[#0c4e54] hover:-translate-y-0.5 active:scale-95"
              >
                View Travel Support <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* Right: trust cards 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {trustCards.map(({ icon: TIcon, title, text, color, bg }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ring-4 ${bg}`}>
                    <TIcon className={`text-xl ${color}`} />
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-xs leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA STRIP ════════════════════════════════════════════════ */}
      <section className="bg-white px-4 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-[#071525] px-8 py-12 shadow-[0_20px_50px_rgba(15,23,42,0.18)] sm:px-12 lg:px-14">

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
            />
            {/* Teal accent glow top-right */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#01696f] opacity-20 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">
                  Get Started
                </p>
                <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Need Assistance? Contact Us Today.
                </h2>
                <p className="mt-3 max-w-lg text-base leading-8 text-slate-400">
                  Our team is ready to help with Gulf visas, manpower recruitment or medical
                  treatment planning in India. Reach out and we&apos;ll guide you through every step.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end lg:flex-col xl:flex-row">
                <a
                  href="tel:+919953889465"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#01696f] transition duration-200 hover:bg-slate-50 hover:-translate-y-0.5 active:scale-95"
                >
                  <FaPhone className="text-xs" /> +91 9953889465
                </a>
                <a
                  href="https://wa.me/919953889465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition duration-200 hover:bg-[#1fb85a] hover:-translate-y-0.5 active:scale-95"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a
                  href="mailto:ashhar.info1@gmail.com"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition duration-200 hover:bg-white/15 hover:-translate-y-0.5 active:scale-95"
                >
                  <FaEnvelope /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}