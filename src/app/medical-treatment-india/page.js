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
  FaMapMarkerAlt,
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
    accentBg: "bg-red-500",
    image: "https://picsum.photos/seed/heart-treatment-india/600/400",
    title: "Heart Treatment",
    desc: "Cardiac surgery, bypass, angioplasty and heart valve replacement at India's top cardiac centers.",
  },
  {
    Icon: GiKidneys,
    color: "text-amber-600",
    accentBg: "bg-amber-500",
    image: "https://picsum.photos/seed/kidney-treatment-india/600/400",
    title: "Kidney Treatment",
    desc: "Kidney transplant, dialysis management and nephrology consultations at expert centers.",
  },
  {
    Icon: GiBrain,
    color: "text-violet-600",
    accentBg: "bg-violet-600",
    image: "https://picsum.photos/seed/cancer-oncology-india/600/400",
    title: "Cancer Consultation",
    desc: "Oncology treatment including chemotherapy, radiation therapy and surgical oncology.",
  },
  {
    Icon: FaUserMd,
    color: "text-sky-600",
    accentBg: "bg-sky-500",
    image: "https://picsum.photos/seed/orthopedic-surgery-india/600/400",
    title: "Orthopedic Treatment",
    desc: "Joint replacement, spine surgery, sports injuries and orthopedic rehabilitation.",
  },
  {
    Icon: FaFlask,
    color: "text-pink-600",
    accentBg: "bg-pink-500",
    image: "https://picsum.photos/seed/ivf-fertility-clinic/600/400",
    title: "IVF / Fertility Support",
    desc: "In vitro fertilization, fertility evaluations and reproductive health treatments.",
  },
  {
    Icon: FaHospital,
    color: "text-emerald-600",
    accentBg: "bg-emerald-600",
    image: "https://picsum.photos/seed/general-surgery-hospital/600/400",
    title: "General Surgery",
    desc: "Appendectomy, hernia repair, gallbladder removal and other common surgical procedures.",
  },
  {
    Icon: FaAmbulance,
    color: "text-orange-600",
    accentBg: "bg-orange-500",
    image: "https://picsum.photos/seed/dental-clinic-india/600/400",
    title: "Dental Treatment",
    desc: "Dental implants, root canal, teeth whitening and complete oral care solutions.",
  },
  {
    Icon: MdHealthAndSafety,
    color: "text-teal-600",
    accentBg: "bg-teal-600",
    image: "https://picsum.photos/seed/eye-care-ophthalmology/600/400",
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
  {
    name: "AIIMS (All India Institute of Medical Sciences)",
    city: "New Delhi",
    address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi 110029",
    image: "/images/hospitals/aiims-delhi-hospital.webp",
  },
  {
    name: "Apollo Hospitals",
    city: "New Delhi",
    address: "Mathura Road, Sarita Vihar, New Delhi 110076",
    image: "/images/hospitals/apollo-hospital.webp",
  },
  {
    name: "Fortis Healthcare",
    city: "Gurugram",
    address: "Sector 44, Opposite HUDA City Centre, Gurugram 122002",
    image: "/images/hospitals/fortis-hospital.webp",
  },
  {
    name: "Max Healthcare",
    city: "New Delhi",
    address: "1-2, Press Enclave Road, Saket, New Delhi 110017",
    image: "/images/hospitals/max-healthcare-hospital.webp",
  },
  {
    name: "Medanta – The Medicity",
    city: "Gurugram",
    address: "Sector 38, Gurugram, Haryana 122001",
    image: "/images/hospitals/medanta-hospital.webp",
  },
  {
    name: "Narayana Health",
    city: "Bengaluru",
    address: "258/A, Bommasandra Industrial Area, Bengaluru 560099",
    image: "/images/hospitals/narayana-health-hospital.webp",
  },
  {
    name: "Manipal Hospitals",
    city: "Bengaluru",
    address: "98, HAL Airport Road, Bengaluru 560017",
    image: "/images/hospitals/manipal-hospital.webp",
  },
  {
    name: "Kokilaben Dhirubhai Ambani Hospital",
    city: "Mumbai",
    address: "Rao Saheb Achutrao Patwardhan Marg, Andheri West, Mumbai 400053",
    image: "/images/hospitals/kokilaben-hospital.webp",
  },
];

const topDoctors = [
  {
    name: "Dr. Gautam Niloba Naik",
    credentials: "MBBS, MD - General Medicine, DM - Cardiology",
    specialization: "Interventional Cardiologist",
    experience: "15 Years",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    location: "New Delhi, Delhi",
    image: "https://github.com/user-attachments/assets/703eebd4-4718-45b9-953c-d7f0122e06ea",
  },
  {
    name: "Dr. Anshul Gupta",
    credentials: "MBBS, MD - General Medicine, DM - Oncology",
    specialization: "Medical Oncology",
    experience: "15 Years",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    location: "Akividu, Delhi",
    image: "https://picsum.photos/seed/anshul-gupta-oncology/400/400",
  },
  {
    name: "Dr. Rekha Mittal",
    credentials: "MBBS, MD - Pediatrics, MBBS",
    specialization: "Neurologist / Pediatric Neurologist",
    experience: "29 Years",
    hospital: "Madhukar Rainbow Children Hospital, Malviya Nagar, New Delhi",
    location: "Akividu, Delhi",
    image: "https://picsum.photos/seed/rekha-mittal-pediatrics/400/400",
  },
];

const whatsappNumber = "919953889465";
const buildDoctorWhatsappLink = (doctor) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Sir, I want to consult with ${doctor.name} (${doctor.credentials}).`
  )}`;

const heroTags = [
  { icon: FaStar,        label: "Top Hospitals",         color: "text-amber-400" },
  { icon: MdTranslate,   label: "Arabic Interpreter",    color: "text-emerald-300" },
  { icon: FaCheckCircle, label: "End-to-End Assistance", color: "text-emerald-300" },
];

// ─── PAGE ───────────────────────────────────────────────────────────
export default function MedicalTreatmentPage() {
  return (
    <main className="bg-[#f7f6f2] text-slate-900">

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
          <nav className="mb-8 flex items-center gap-2 text-sm text-emerald-300/80">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
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
              <span className="text-emerald-300">in India</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Quality treatment in India with complete support — from hospital booking to travel,
              accommodation and personalized patient care.
            </p>

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
      <section className="border-y border-white/5 bg-[#03180e]">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center lg:px-10">
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
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]"
                >
                  {/* Treatment image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    {/* Icon badge — bottom-left over image */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-xl ${t.accentBg} shadow-lg`}
                      >
                        <TIcon className="text-sm text-white" />
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-5">
                    <h3 className={`text-base font-bold text-slate-900 transition duration-200 group-hover:${t.color}`}>
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">{t.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SUPPORT SERVICES ── */}
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
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:bg-white/10"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-extrabold text-emerald-300 ring-1 ring-emerald-500/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <SIcon className="mb-4 text-2xl text-emerald-400" />
                  <h3 className="mb-3 text-base font-bold text-white">{s.title}</h3>
                  <ul className="space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-emerald-100/70">
                        <FaCheckCircle className="mt-0.5 shrink-0 text-xs text-emerald-400" />
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

      {/* ── TOP HOSPITALS ── */}
      <section className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
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
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topHospitals.map((hospital, i) => (
              <div
                key={hospital.name}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f6f2] shadow-[0_10px_26px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,23,42,0.12)]"
              >
                <div className="relative h-36">
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052e1c]/70 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-[10px] font-extrabold text-[#052e1c] shadow-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#01696f]">
                    {hospital.city}
                  </p>
                  <h3 className="mt-1 text-sm font-bold leading-snug text-slate-900">
                    {hospital.name}
                  </h3>
                  <div className="mt-2.5 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                    <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#01696f]" />
                    <span>{hospital.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[#052e1c] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0d5b45]"
          >
            Book Hospital Appointment <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>

      {/* ── DOCTOR PANEL ── */}
      <section className="bg-[#f7f6f2] px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Specialist Doctors
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Consult Leading Medical Experts
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Select a doctor and connect instantly on WhatsApp for a consultation request.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topDoctors.map((doctor) => (
              <div
                key={doctor.name}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(15,23,42,0.13)]"
              >
                {/* ── Profile top section ── */}
                <div className="relative flex flex-col items-center px-6 pb-5 pt-8">
                  <div
                    className="absolute left-0 right-0 top-0 h-24 rounded-t-3xl"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, white), color-mix(in srgb, var(--primary-light) 8%, white))",
                    }}
                  />

                  <div className="relative z-10 mb-4">
                    <div
                      className="flex h-24 w-24 items-center justify-center rounded-full p-[3px] shadow-[0_8px_24px_rgba(1,105,111,0.25)]"
                      style={{
                        background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
                      }}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white p-[2px]">
                        <div className="relative h-full w-full overflow-hidden rounded-full">
                          <Image
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            sizes="96px"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                    <span
                      className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white shadow-sm"
                      style={{ background: "var(--primary)" }}
                    >
                      <FaCheckCircle className="text-[10px] text-white" />
                    </span>
                  </div>

                  <h3 className="z-10 text-center text-base font-bold text-slate-900">
                    {doctor.name}
                  </h3>
                  <p className="z-10 mt-1 text-center text-[11px] leading-relaxed text-slate-400">
                    {doctor.credentials}
                  </p>

                  <span
                    className="z-10 mt-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 10%, white)",
                      color: "var(--primary-dark)",
                    }}
                  >
                    {doctor.specialization}
                  </span>
                </div>

                <div className="mx-6 h-px bg-slate-100" />

                <div className="flex flex-1 flex-col gap-2.5 px-6 py-5">
                  <div className="flex items-start gap-2.5">
                    <FaHospital
                      className="mt-0.5 shrink-0 text-xs"
                      style={{ color: "var(--primary)" }}
                    />
                    <span className="text-[12px] leading-relaxed text-slate-600">
                      {doctor.hospital}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FaMapMarkerAlt
                      className="shrink-0 text-xs"
                      style={{ color: "var(--primary)" }}
                    />
                    <span className="text-[12px] text-slate-500">{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FaCheckCircle className="shrink-0 text-xs text-emerald-500" />
                    <span className="text-[12px] text-slate-500">
                      {doctor.experience} Experience
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <a
                    href={buildDoctorWhatsappLink(doctor)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-xs font-bold text-white transition hover:bg-[#1fb85a] hover:-translate-y-0.5 active:scale-95"
                  >
                    <FaWhatsapp className="text-sm" /> WhatsApp Doctor
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f1efe8] px-4 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#052e1c] to-[#0d5b45] px-8 py-12 text-white shadow-[0_20px_50px_rgba(5,46,28,0.25)] sm:px-12 lg:px-14">
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