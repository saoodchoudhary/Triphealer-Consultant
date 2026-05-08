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
  {
    name: "AIIMS (All India Institute of Medical Sciences)",
    city: "New Delhi",
    address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi 110029",
    image: "https://picsum.photos/seed/aiims-hospital/900/600",
  },
  {
    name: "Apollo Hospitals",
    city: "New Delhi",
    address: "Mathura Road, Sarita Vihar, New Delhi 110076",
    image: "https://picsum.photos/seed/apollo-hospital/900/600",
  },
  {
    name: "Fortis Healthcare",
    city: "Gurugram",
    address: "Sector 44, Opposite HUDA City Centre, Gurugram 122002",
    image: "https://picsum.photos/seed/fortis-hospital/900/600",
  },
  {
    name: "Max Healthcare",
    city: "New Delhi",
    address: "1-2, Press Enclave Road, Saket, New Delhi 110017",
    image: "https://picsum.photos/seed/max-hospital/900/600",
  },
  {
    name: "Medanta – The Medicity",
    city: "Gurugram",
    address: "Sector 38, Gurugram, Haryana 122001",
    image: "https://picsum.photos/seed/medanta-hospital/900/600",
  },
  {
    name: "Narayana Health",
    city: "Bengaluru",
    address: "258/A, Bommasandra Industrial Area, Bengaluru 560099",
    image: "https://picsum.photos/seed/narayana-hospital/900/600",
  },
  {
    name: "Manipal Hospitals",
    city: "Bengaluru",
    address: "98, HAL Airport Road, Bengaluru 560017",
    image: "https://picsum.photos/seed/manipal-hospital/900/600",
  },
  {
    name: "Kokilaben Dhirubhai Ambani Hospital",
    city: "Mumbai",
    address: "Rao Saheb Achutrao Patwardhan Marg, Andheri West, Mumbai 400053",
    image: "https://picsum.photos/seed/kokilaben-hospital/900/600",
  },
];

const topDoctors = [
  {
    name: "Dr. Sowjanya Aggarwal",
    credentials: "MBBS, MS - Obstetrics & Gynaecology",
    specialization: "Obstetrics & Gynaecology",
    experience: "12 Years",
    hospital: "Apollo Hospitals, New Delhi",
    location: "New Delhi, India",
    image: "https://picsum.photos/seed/sowjanya-doctor/700/800",
  },
  {
    name: "Dr. Rekha Mittal",
    credentials: "MBBS, MD - Pediatrics",
    specialization: "Pediatrics & Neonatology",
    experience: "15 Years",
    hospital: "Fortis Escorts Heart Institute, New Delhi",
    location: "New Delhi, India",
    image: "https://picsum.photos/seed/rekha-doctor/700/800",
  },
  {
    name: "Dr. Gautam Niloba Naik",
    credentials: "MBBS, MD - General Medicine, DM - Cardiology",
    specialization: "Interventional Cardiologist",
    experience: "15 Years",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    location: "New Delhi, India",
    image: "https://github.com/user-attachments/assets/703eebd4-4718-45b9-953c-d7f0122e06ea",
  },
];

const whatsappNumber = "919953889465";
const buildDoctorWhatsappLink = (doctor) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Sir, I want to consult with ${doctor.name} (${doctor.credentials}).`
  )}`;

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
              <span className="text-emerald-300">in India</span>
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

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052e1c]/70 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-bold text-[#052e1c] shadow-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#01696f]">
                      {hospital.city}
                    </p>
                    <h3 className="mt-1 text-sm font-bold text-slate-900">
                      {hospital.name}
                    </h3>
                    <div className="mt-2 flex items-start gap-2 text-xs text-slate-600">
                      <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#01696f]" />
                      <span>{hospital.address}</span>
                    </div>
                  </div>
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
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.14)]"
              >
                <div className="relative h-52">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-[#052e1c]">
                    {doctor.specialization}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900">{doctor.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{doctor.credentials}</p>
                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <div className="flex items-start gap-2">
                      <FaHospital className="mt-0.5 shrink-0 text-[#01696f]" />
                      <span>{doctor.hospital}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#01696f]" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>Experience: {doctor.experience}</span>
                    </div>
                  </div>
                  <a
                    href={buildDoctorWhatsappLink(doctor)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-xs font-bold text-white transition hover:bg-[#1fb85a]"
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
