import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaFileAlt,
  FaHardHat,
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
    badgeColor: "text-sky-600 bg-sky-50",
    accent: "#0369a1",
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
    badgeColor: "text-amber-700 bg-amber-50",
    accent: "#92400e",
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
    badgeColor: "text-violet-700 bg-violet-50",
    accent: "#6d28d9",
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
    badgeColor: "text-teal-700 bg-teal-50",
    accent: "#0f766e",
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
    badgeColor: "text-slate-700 bg-slate-100",
    accent: "#334155",
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

// ─── PAGE ───────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <main className="bg-[#f7f6f2] text-slate-900">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#01696f] to-[#0d5b45] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-10 lg:py-20">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/90">Our Services</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              Gulf Visa · Recruitment · Medical Treatment
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              All Our Services
              <br />
              <span className="text-white/75 font-bold text-3xl sm:text-4xl lg:text-5xl">
                Under One Roof.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              From Gulf work visas and overseas recruitment to medical treatment assistance in India —
              Triphealer provides complete, professional support at every step.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#01696f] transition hover:-translate-y-0.5 hover:bg-slate-50 active:scale-95"
              >
                Get Free Consultation <FaArrowRight className="text-xs" />
              </Link>
              <a
                href="https://wa.me/919953889465"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-white/15 border border-white/25 px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/25 active:scale-95"
              >
                <FaWhatsapp className="text-base" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── GULF & RECRUITMENT SERVICES ── */}
      <section className="px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Gulf Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Visa, Recruitment & Documentation
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Complete support for Gulf employers and job seekers — from visa processing to manpower deployment.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {serviceGroups.map((group) => {
              const GIcon = group.Icon;
              return (
                <div
                  key={group.id}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(15,23,42,0.10)]"
                >
                  {/* Badge */}
                  <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] mb-5 ${group.badgeColor}`}>
                    {group.badge}
                  </span>

                  {/* Icon */}
                  <div className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl ring-4 ${group.iconBg}`}>
                    <GIcon className={`text-2xl ${group.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">{group.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    {group.subtitle}
                  </p>
                  <p className="text-sm leading-7 text-slate-500 mb-5">{group.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <FaCheckCircle className="shrink-0 text-[#01696f] text-xs" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={group.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#01696f] transition group-hover:gap-3"
                  >
                    Learn More <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MEDICAL TREATMENT ── */}
      <section className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
              Medical Tourism
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Medical Treatment in India for Gulf Clients
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Trusted medical treatment services in India for Gulf patients — quality and affordable
              healthcare with complete support from arrival to recovery.
            </p>
            <p className="mt-3 text-sm font-medium italic text-slate-400">
              &ldquo;Helping Gulf patients receive quality and affordable treatment in India with complete support.&rdquo;
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {medicalServices.map((service) => {
              const SIcon = service.Icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-slate-200 bg-[#f7f6f2] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] hover:border-emerald-200 hover:bg-emerald-50/30"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 ring-4 ring-emerald-50">
                    <SIcon className="text-xl text-emerald-700" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-slate-500">
                        <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-600 text-xs" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/medical-treatment-india"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[#01696f] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#0c4e54] hover:-translate-y-0.5"
            >
              Medical Treatment Details <FaArrowRight className="text-xs" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRAVEL & STAY ── */}
      <section className="bg-[#f1efe8] px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
                Travel & Stay Support
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Complete Travel Assistance for Gulf Visitors in India
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-500">
                We handle all logistics for Gulf patients and their families travelling to India for
                medical treatment — from airport pickup to local transport and accommodation.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {travelMedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    <FaCheckCircle className="shrink-0 text-[#01696f]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/travel-support"
                className="mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[#01696f] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#0c4e54] hover:-translate-y-0.5"
              >
                View Travel Support <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* Trust block */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: MdHealthAndSafety, title: "Medical Visa Help", text: "Guidance on medical visa requirements and obtaining invitation letters from hospitals.", color: "text-emerald-600", bg: "bg-emerald-50 ring-emerald-100" },
                { icon: MdTranslate, title: "Arabic Interpreter", text: "Arabic and English language support throughout your hospital visits and consultations.", color: "text-sky-600", bg: "bg-sky-50 ring-sky-100" },
                { icon: FaHospital, title: "Top Hospitals", text: "Access to AIIMS, Apollo, Fortis, Max, Medanta, Narayana Health and more.", color: "text-violet-600", bg: "bg-violet-50 ring-violet-100" },
                { icon: MdSupportAgent, title: "24/7 Patient Help", text: "Round-the-clock assistance for emergencies, pharmacy needs and follow-ups.", color: "text-amber-600", bg: "bg-amber-50 ring-amber-100" },
              ].map(({ icon: TIcon, title, text, color, bg }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ring-4 ${bg}`}>
                    <TIcon className={`text-xl ${color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-xs leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-white px-4 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#01696f] to-[#0d5b45] px-8 py-12 text-white shadow-[0_20px_50px_rgba(1,105,111,0.2)] sm:px-12 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                Get Started
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Need Assistance? Contact Us Today.
              </h2>
              <p className="mt-3 max-w-lg text-base leading-8 text-white/75">
                Our team is ready to help with Gulf visas, manpower recruitment or medical treatment
                planning in India. Reach out and we&apos;ll guide you through every step.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="tel:+919953889465"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#01696f] transition hover:bg-slate-50"
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
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/25"
              >
                <FaEnvelope /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
