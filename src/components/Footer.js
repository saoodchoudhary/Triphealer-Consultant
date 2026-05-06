import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

// ─── DATA ───────────────────────────────────────────────────────────
const quickLinks = [
  { href: "/",                        label: "Home" },
  { href: "/recruitment-services",    label: "Recruitment Services" },
  { href: "/gulf-visas",              label: "Gulf Work Visas" },
  { href: "/medical-treatment-india", label: "Medical Treatment in India" },
  { href: "/travel-support",          label: "Travel Support" },
  { href: "/contact",                 label: "Contact Us" },
];

const services = [
  { href: "/gulf-visas",              label: "Gulf Work Visa Services" },
  { href: "/recruitment-services",    label: "Overseas Recruitment" },
  { href: "/recruitment-services",    label: "Manpower Supply" },
  { href: "/recruitment-services",    label: "Candidate Selection" },
  { href: "/medical-treatment-india", label: "Medical Treatment in India" },
  { href: "/medical-treatment-india", label: "Hospital Appointment Booking" },
  { href: "/medical-treatment-india", label: "Medical Visa Support" },
  { href: "/travel-support",          label: "Travel & Stay Assistance" },
];

const socials = [
  {
    href: "https://wa.me/919953889465",
    Icon: FaWhatsapp,
    bg: "bg-[#25D366] hover:bg-[#1fb85a]",
    label: "WhatsApp",
    external: true,
  },
  {
    href: "#",
    Icon: FaFacebook,
    bg: "bg-[#1877F2] hover:bg-[#1565D8]",
    label: "Facebook",
    external: false,
  },
  {
    href: "#",
    Icon: FaLinkedin,
    bg: "bg-[#0A66C2] hover:bg-[#0855A0]",
    label: "LinkedIn",
    external: false,
  },
];

const contactList = [
  { href: "tel:+919953889465",            Icon: FaPhone,    text: "+91 9953889465" },
  { href: "tel:+919891542452",            Icon: FaPhone,    text: "+91 98915 42452" },
  { href: "mailto:ashhar.info1@gmail.com", Icon: FaEnvelope, text: "ashhar.info1@gmail.com" },
];

// ─── LOGO SVG ───────────────────────────────────────────────────────
// Concept: Plane + Heart pulse line merged — travel (Gulf) + medical (India)
// Geometric, works at 24px and 200px, teal brand color
function TriphealerLogo({ size = 42 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Triphealer"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background rounded square */}
      <rect width="48" height="48" rx="12" fill="#01696f" />

      {/* Heartbeat / pulse line — left flat, spike up, spike down, right flat */}
      {/* Represents medical + vitality */}
      <polyline
        points="6,26 14,26 17,18 20,34 23,22 26,26 42,26"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Small plane silhouette top-right — represents Gulf travel */}
      {/* Body */}
      <ellipse cx="37" cy="13" rx="5" ry="2.2" rx2="5" transform="rotate(-35 37 13)"
        fill="none"
      />
      {/* Use path instead for plane */}
      <path
        d="M32 16 L38 10 L41 11 L36 17 Z"
        fill="white"
        opacity="0.9"
      />
      <path
        d="M35 17 L38 15 L40 16 L37 19 Z"
        fill="white"
        opacity="0.6"
      />
    </svg>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-[#060f18]">

      {/* ── TOP CTA STRIP ── */}
      <div className="border-b border-white/5 bg-[#0a1f2b]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="text-sm font-bold text-white">Ready to get started?</p>
            <p className="mt-0.5 text-xs text-slate-400">
              Gulf visas, recruitment, medical treatment — we handle it all.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/919953889465"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold text-white transition duration-200 hover:bg-[#1fb85a] hover:-translate-y-0.5 active:scale-95"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
            <a
              href="tel:+919953889465"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm transition duration-200 hover:bg-white/15 hover:-translate-y-0.5 active:scale-95"
            >
              <FaPhone /> +91 9953889465
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr]">

          {/* ── BRAND ── */}
          <div>
            {/* Logo lockup */}
            <div className="mb-5 flex items-center gap-3">
              {/* New logo: T letterform + pulse line */}
              <svg
                width="44"
                height="44"
                viewBox="0 0 48 48"
                fill="none"
                aria-label="Triphealer logo"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rounded square bg */}
                <rect width="48" height="48" rx="11" fill="#01696f" />

                {/* Stylised T — top bar + stem, slightly geometric */}
                <rect x="10" y="11" width="28" height="5" rx="2.5" fill="white" />
                <rect x="20.5" y="11" width="7" height="20" rx="2.5" fill="white" />

                {/* Small heartbeat pulse below — sits on baseline of the T stem */}
                <polyline
                  points="10,36 15,36 17.5,31 20,39 22.5,33 25,36 38,36"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.75"
                  fill="none"
                />
              </svg>

              <div>
                <div className="text-lg font-extrabold tracking-tight text-white leading-none">
                  Triphealer
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-400">
                  Medical Tourism & Manpower
                </div>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-7 text-slate-400">
              We connect Gulf employers with skilled manpower and assist Gulf families seeking
              quality medical treatment in India — complete visa, travel and support services
              under one roof.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map(({ href, Icon, bg, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${bg}`}
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>

            {/* Trust pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["6 Gulf Countries", "500+ Placements", "50+ Hospital Partners"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── QUICK LINKS ── */}
          <div>
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-slate-400 transition duration-200 hover:text-white"
                  >
                    <span className="block h-px w-4 rounded-full bg-white/15 transition-all duration-300 group-hover:w-6 group-hover:bg-sky-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── SERVICES ── */}
          <div>
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2.5 text-sm text-slate-400 transition duration-200 hover:text-white"
                  >
                    <span className="block h-px w-4 rounded-full bg-white/15 transition-all duration-300 group-hover:w-6 group-hover:bg-sky-400" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT ── */}
          <div>
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">
              Contact Us
            </h3>

            <div className="space-y-5">
              {/* Head office */}
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Head Office — New Delhi
                </p>
                <div className="flex items-start gap-2.5 text-sm leading-7 text-slate-400">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-sky-500" />
                  <span>
                    1st Floor, G51/6, Shaheen Bagh,<br />
                    Jamia Nagar, New Delhi – 110025
                  </span>
                </div>
              </div>

              {/* Lucknow */}
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Branch — Lucknow
                </p>
                <div className="flex items-start gap-2.5 text-sm leading-7 text-slate-400">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-sky-500" />
                  <span>Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>

              <div className="h-px bg-white/5" />

              {/* Phone + Email */}
              <div className="space-y-2.5">
                {contactList.map(({ href, Icon, text }) => (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-2.5 text-sm text-slate-400 transition duration-200 hover:text-white"
                  >
                    <Icon className="shrink-0 text-xs text-sky-500" />
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/5 bg-[#040b10]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-400">Triphealer</span>.
            All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.14em]">
            Medical Tourism & Manpower Consultant · New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  );
}