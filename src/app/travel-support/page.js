import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaFileContract,
  FaHeadset,
  FaHotel,
  FaMedkit,
  FaPhone,
  FaPlane,
  FaShieldAlt,
  FaShuttleVan,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdAirplaneTicket,
  MdLocationOn,
  MdSupportAgent,
} from "react-icons/md";

// ─── DATA ───────────────────────────────────────────────────────────
const travelServices = [
  {
    Icon: MdAirplaneTicket,
    color: "text-sky-600",
    ring: "bg-sky-50 ring-sky-100",
    title: "Flight Ticket Booking",
    desc: "Affordable and convenient flight bookings for workers and patients — one-way and round trip.",
    points: [
      "Economy & business class options",
      "Direct and connecting flights",
      "Group travel arrangements",
      "Last-minute bookings",
    ],
  },
  {
    Icon: FaHotel,
    color: "text-amber-600",
    ring: "bg-amber-50 ring-amber-100",
    title: "Hotel & Apartment Booking",
    desc: "Budget to premium accommodation near hospitals and work sites, tailored to your requirements.",
    points: [
      "Near-hospital accommodations",
      "Long & short-stay options",
      "Affordable budget rooms",
      "Family-friendly facilities",
    ],
  },
  {
    Icon: FaShuttleVan,
    color: "text-emerald-600",
    ring: "bg-emerald-50 ring-emerald-100",
    title: "Airport Pickup & Transfer",
    desc: "Reliable airport pickup and local transport so you reach your destination safely.",
    points: [
      "Airport pickup on arrival",
      "Hospital-to-hotel transfers",
      "Local city transportation",
      "24/7 availability",
    ],
  },
  {
    Icon: FaShieldAlt,
    color: "text-violet-600",
    ring: "bg-violet-50 ring-violet-100",
    title: "Insurance Help",
    desc: "Guidance on travel and health insurance to ensure you are protected throughout your journey.",
    points: [
      "Travel insurance guidance",
      "Medical insurance support",
      "Policy document help",
      "Claim assistance",
    ],
  },
  {
    Icon: FaMedkit,
    color: "text-red-500",
    ring: "bg-red-50 ring-red-100",
    title: "Medical Assistance",
    desc: "Medical fitness certificates, pre-departure health checks and emergency medical contact.",
    points: [
      "Medical fitness certificate",
      "Pre-travel health check",
      "Emergency contact support",
      "Pharmacy assistance",
    ],
  },
  {
    Icon: MdSupportAgent,
    color: "text-teal-600",
    ring: "bg-teal-50 ring-teal-100",
    title: "Departure Support",
    desc: "Complete pre-departure guidance including documentation, check-in and joining instructions.",
    points: [
      "Pre-departure orientation",
      "Document checklist",
      "Airport assistance",
      "Joining instructions",
    ],
  },
];

const patientTravelServices = [
  {
    Icon: MdLocationOn,
    title: "Airport Pickup",
    desc: "Our team receives patients and families at the airport and takes them directly to hospital or hotel.",
  },
  {
    Icon: FaHotel,
    title: "Hotel / Apartment Booking",
    desc: "Comfortable and affordable accommodation options near major Indian hospitals.",
  },
  {
    Icon: FaHeadset,
    title: "Translator Assistance",
    desc: "Arabic-English interpreters available during doctor consultations and hospital procedures.",
  },
  {
    Icon: FaShuttleVan,
    title: "Local Transport Help",
    desc: "Dedicated transport for hospital visits, diagnostic centers and local travel throughout the stay.",
  },
];

const workerPoints = [
  "Flight booking with best available fares",
  "Travel document verification pre-departure",
  "Employer contact and reporting instructions",
  "Insurance enrollment before departure",
  "Emergency contact in destination country",
  "Ongoing support during initial settlement",
];

const patientPoints = [
  "Flight & accommodation booking",
  "Airport pickup and drop",
  "Hospital appointment coordination",
  "Arabic interpreter during consultations",
  "Local sightseeing & dining support",
  "Return travel arrangement after discharge",
];

// ─── PAGE ───────────────────────────────────────────────────────────
export default function TravelSupportPage() {
  return (
    <main className=" bg-[#f7f6f2] text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071e2b] text-white">
        <Image
          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/920d345b13f96c7ecf8d837141bba33ab5c6c3f6.jpg"
          alt="Airplane at airport sunset"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e2b]/95 via-[#071e2b]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e2b]/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 lg:px-10 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sky-300/80 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-sky-200">Travel Support</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
              Travel & Joining Support
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Smooth Travel for
              <br />
              <span className="text-sky-300">Workers & Patients</span>
              <br />
              Alike.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Flights, hotels, airport transfers, insurance and departure support — we handle every
              travel detail so you can focus on what matters most.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#071e2b] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-sky-50 active:scale-95"
              >
                Plan My Travel <FaArrowRight className="text-xs" />
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

      {/* ── TRAVEL SERVICES GRID ── */}
      <section className="px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Travel Services
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Everything you need for a smooth and hassle-free journey — whether heading to the
              Gulf for work or coming to India for medical treatment.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {travelServices.map((s) => {
              const SIcon = s.Icon;
              return (
                <div
                  key={s.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl ring-4 ${s.ring}`}>
                    <SIcon className={`text-2xl ${s.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#01696f] transition">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-500 mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-slate-500">
                        <FaCheckCircle className="shrink-0 text-[#01696f] text-xs" />
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

      {/* ── PATIENT TRAVEL — dark section ── */}
      <section className="bg-[#071e2b] px-4 py-20 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
              For Medical Patients
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Travel & Stay Support for Gulf Patients
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              For Gulf patients traveling to India for treatment, we provide door-to-door support
              throughout their medical journey.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {patientTravelServices.map((s, i) => {
              const PIcon = s.Icon;
              return (
                <div
                  key={s.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm hover:bg-white/10 transition"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/20 text-sm font-extrabold text-sky-300 ring-1 ring-sky-500/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <PIcon className="text-2xl text-sky-400 mb-4" />
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TWO COLUMNS: Workers + Patients ── */}
      <section className="bg-white px-4 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">
              Tailored For You
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Two journeys, one trusted partner.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Workers Card */}
            <div className="overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(15,45,58,0.16)]">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e651113c8bedb6cfea6bca62fac8671ca1a554bd.jpg"
                  alt="Workers boarding flight"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f2d3a]/20 to-[#0f2d3a]/90" />
                <div className="absolute bottom-5 left-7">
                  <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sky-100 backdrop-blur-sm">
                    Gulf-Bound Workers
                  </span>
                </div>
              </div>
              <div className="bg-[#0f2d3a] p-8 text-white">
                <FaPlane className="text-3xl text-sky-300 mb-5" />
                <h3 className="text-xl font-bold mb-4">For Gulf-Bound Workers</h3>
                <p className="text-sm leading-7 text-slate-300 mb-5">
                  We ensure workers travel safely and confidently with all required documents and a
                  clear plan for their first few days.
                </p>
                <ul className="space-y-3">
                  {workerPoints.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-200 leading-7">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-sky-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Patients Card */}
            <div className="overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(13,91,69,0.16)]">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0b31509108921245bb6ce16bbcc370de344d2558.jpg"
                  alt="Patient arriving at Indian hospital"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d5b45]/20 to-[#0d5b45]/90" />
                <div className="absolute bottom-5 left-7">
                  <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-100 backdrop-blur-sm">
                    Gulf Patients in India
                  </span>
                </div>
              </div>
              <div className="bg-[#0d5b45] p-8 text-white">
                <FaMedkit className="text-3xl text-emerald-300 mb-5" />
                <h3 className="text-xl font-bold mb-4">For Gulf Patients Visiting India</h3>
                <p className="text-sm leading-7 text-emerald-100/80 mb-5">
                  Our patient travel team ensures Gulf patients and their families feel comfortable
                  and well-supported during their entire India stay.
                </p>
                <ul className="space-y-3">
                  {patientPoints.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-emerald-100/90 leading-7">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 py-16 bg-[#f1efe8] lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#071e2b] to-[#0c4a6e] shadow-[0_20px_50px_rgba(7,30,43,0.25)] px-8 py-12 text-white sm:px-12 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                Start Planning
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Need Travel Assistance?
              </h2>
              <p className="mt-3 max-w-lg text-base leading-8 text-slate-200/80">
                Get in touch and we will plan every aspect of your travel — from tickets and
                accommodation to airport pickup and departure support.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="tel:+919953889465"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#071e2b] transition hover:bg-sky-50"
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