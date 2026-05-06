import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardList,
  FaEnvelope,
  FaHardHat,
  FaPhone,
  FaTools,
  FaUserCheck,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";
import { MdBusiness, MdEngineering, MdSupportAgent } from "react-icons/md";
import { GiElectric } from "react-icons/gi";

// ─── DATA ───────────────────────────────────────────────────────────
const workerCategories = [
  {
    Icon: FaHardHat,
    color: "text-amber-600",
    ring: "bg-amber-50 ring-amber-100",
    title: "Construction Labor",
    workers: ["Masons & Carpenters", "Civil Workers", "Steel Fixers", "Scaffolders", "Laborers & Helpers"],
  },
  {
    Icon: MdEngineering,
    color: "text-sky-600",
    ring: "bg-sky-50 ring-sky-100",
    title: "Skilled Technicians",
    workers: ["Electricians", "Plumbers", "Welders", "Mechanics", "AC Technicians"],
  },
  {
    Icon: FaTools,
    color: "text-slate-600",
    ring: "bg-slate-50 ring-slate-200",
    title: "Drivers & Operators",
    workers: ["Heavy Vehicle Drivers", "Light Drivers", "Crane Operators", "Forklift Operators", "Equipment Operators"],
  },
  {
    Icon: MdBusiness,
    color: "text-violet-600",
    ring: "bg-violet-50 ring-violet-100",
    title: "Office & Admin Staff",
    workers: ["Office Assistants", "Data Entry Operators", "Receptionists", "HR Assistants", "Admin Executives"],
  },
  {
    Icon: FaUserTie,
    color: "text-blue-600",
    ring: "bg-blue-50 ring-blue-100",
    title: "Hospitality Staff",
    workers: ["Hotel Housekeeping", "Cleaners & Janitors", "Cooks & Helpers", "Laundry Staff", "Waiters"],
  },
  {
    Icon: GiElectric,
    color: "text-emerald-600",
    ring: "bg-emerald-50 ring-emerald-100",
    title: "Unskilled Workers",
    workers: ["General Helpers", "Warehouse Workers", "Loading/Unloading Staff", "Agricultural Workers", "Security Guards"],
  },
];

const selectionProcess = [
  {
    Icon: FaClipboardList,
    title: "CV Shortlisting",
    desc: "We review and shortlist candidates based on job requirements, experience and qualifications.",
  },
  {
    Icon: FaUserCheck,
    title: "Interview Scheduling",
    desc: "We coordinate online or in-person interviews between candidates and Gulf employers.",
  },
  {
    Icon: FaTools,
    title: "Trade Test",
    desc: "Skilled workers undergo practical trade tests to verify their technical competency.",
  },
  {
    Icon: MdSupportAgent,
    title: "Background Verification",
    desc: "Complete background and reference checks to ensure candidates meet employer expectations.",
  },
];

const gulfCountries = [
  { flag: "🇸🇦", name: "Saudi Arabia" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇶🇦", name: "Qatar" },
  { flag: "🇰🇼", name: "Kuwait" },
  { flag: "🇴🇲", name: "Oman" },
  { flag: "🇧🇭", name: "Bahrain" },
];

const docServices = [
  "Offer Letter Preparation",
  "Employment Contract Review",
  "Visa Application Filing",
  "Medical Fitness Examination",
  "Police Clearance Certificate",
  "Document Attestation",
  "Emigration Clearance (ECR)",
  "Insurance Enrollment",
];

const whyUsPoints = [
  "Large database of pre-screened candidates",
  "Quick turnaround time for manpower mobilization",
  "Transparent process with regular updates",
  "All candidates medically fit and legally cleared",
  "Post-deployment support and follow-up",
  "Competitive and transparent pricing",
];

// ─── PAGE ───────────────────────────────────────────────────────────
export default function RecruitmentPage() {
  return (
    <main className=" bg-[#f7f6f2] text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0a1f2b] text-white">
        <Image
          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e651113c8bedb6cfea6bca62fac8671ca1a554bd.jpg"
          alt="Construction workers reviewing blueprints"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f2b]/95 via-[#0a1f2b]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f2b]/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 lg:px-10 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sky-300/80 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-sky-200">Recruitment Services</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              Overseas Recruitment & Manpower Supply
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Reliable Manpower
              <br />
              <span className="text-sky-300">for Gulf Employers.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              We source, screen and deploy skilled and unskilled workers across all major Gulf
              countries — with full documentation support from selection to departure.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#0a1f2b] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-sky-50 active:scale-95"
              >
                Request Manpower <FaArrowRight className="text-xs" />
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

      {/* ── COUNTRIES STRIP ── */}
      <section className="bg-[#071e2b] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sky-400 font-bold text-xs uppercase tracking-[0.18em]">
              Recruiting For
            </span>
            {gulfCountries.map((c) => (
              <div key={c.name} className="flex items-center gap-2">
                <span className="text-xl">{c.flag}</span>
                <span className="text-sky-100 text-sm font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKER CATEGORIES ── */}
      <section className="px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Manpower Categories
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Categories We Supply
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              We supply manpower across a wide range of industries — from construction and technical
              trades to office and hospitality sectors.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workerCategories.map((cat) => {
              const CatIcon = cat.Icon;
              return (
                <div
                  key={cat.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl ring-4 ${cat.ring}`}>
                    <CatIcon className={`text-2xl ${cat.color}`} />
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-slate-900">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.workers.map((w) => (
                      <li key={w} className="flex items-center gap-2.5 text-sm text-slate-500">
                        <FaCheckCircle className="shrink-0 text-[#01696f] text-xs" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SELECTION PROCESS ── */}
      <section className="bg-[#0a1f2b] px-4 py-20 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Candidate Selection Process
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Our rigorous process ensures you receive only the most qualified and verified candidates.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {selectionProcess.map((step, i) => {
              const StepIcon = step.Icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm hover:bg-white/10 transition"
                >
                  {/* Step number */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/20 text-sm font-extrabold text-sky-300 ring-1 ring-sky-500/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < selectionProcess.length - 1 && (
                      <div className="hidden lg:block flex-1 h-px bg-white/10" />
                    )}
                  </div>
                  <StepIcon className="text-2xl text-sky-400 mb-4" />
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTATION + WHY US ── */}
      <section className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">

          {/* Documentation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">Paperwork Handled</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Documentation Services
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              We handle all paperwork from contract preparation to emigration clearance, ensuring a
              smooth and hassle-free deployment for both employers and workers.
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
              className="mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[#0a1f2b] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0f2d3a] hover:-translate-y-0.5"
            >
              Contact Us for Manpower <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* Why Us */}
          <div className="overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(15,45,58,0.15)]">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e3adf2ddb992aee1b8a21f59c64a37fff319bf7f.jpg"
                alt="Gulf construction site worker"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f2d3a]/90" />
              <div className="absolute bottom-5 left-7">
                <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sky-100 backdrop-blur-sm">
                  Why Employers Choose Us
                </span>
              </div>
            </div>

            <div className="bg-[#0f2d3a] p-8 text-white">
              <ul className="space-y-4">
                {whyUsPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-200 leading-7">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-400" />
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0d5b45] to-[#065f46] shadow-[0_20px_50px_rgba(13,91,69,0.2)] px-8 py-12 text-white sm:px-12 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                Start Today
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Looking for Manpower? Contact Us Today.
              </h2>
              <p className="mt-3 max-w-lg text-base leading-8 text-emerald-100/80">
                Tell us your requirements and we will match you with the right candidates — quickly and professionally.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="tel:+919953889465"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#065f46] transition hover:bg-emerald-50"
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