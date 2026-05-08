import Link from "next/link";
import {
  FaEnvelope, FaFacebook, FaLinkedin,
  FaMapMarkerAlt, FaPhone, FaWhatsapp,
} from "react-icons/fa";

// ─── DATA ───────────────────────────────────────────────────────────
const quickLinks = [
  { href: "/",                        label: "Home" },
  { href: "/about",                   label: "About Us" },
  { href: "/services",                label: "All Services" },
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
    bg: "#25D366",
    label: "WhatsApp",
    external: true,
  },
  {
    href: "#",
    Icon: FaFacebook,
    bg: "#1877F2",
    label: "Facebook",
    external: false,
  },
  {
    href: "#",
    Icon: FaLinkedin,
    bg: "#0A66C2",
    label: "LinkedIn",
    external: false,
  },
];

const contactList = [
  { href: "tel:+919953889465",             Icon: FaPhone,    text: "+91 9953889465" },
  { href: "tel:+919891542452",             Icon: FaPhone,    text: "+91 98915 42452" },
  { href: "mailto:ashhar.info1@gmail.com", Icon: FaEnvelope, text: "ashhar.info1@gmail.com" },
];

const trustBadges = ["6 Gulf Countries", "500+ Placements", "50+ Hospital Partners"];

// ─── FOOTER ─────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-[#f0f4f4]">

      {/* ══ TOP CTA STRIP ══════════════════════════════════════════ */}
      <div className="border-b border-[#d1e0df] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p
              className="text-sm font-bold"
              style={{ color: "var(--primary-dark)" }}
            >
              Ready to get started?
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              Gulf visas, recruitment, medical treatment — we handle it all.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/919953889465"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#1fb85a] active:scale-95"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
            <a
              href="tel:+919953889465"
              className="inline-flex items-center gap-2 rounded-lg border border-[#01696f]/20 bg-[#01696f]/8 px-4 py-2 text-xs font-bold transition duration-200 hover:-translate-y-0.5 hover:bg-[#01696f]/12 active:scale-95"
              style={{ color: "var(--primary-dark)" }}
            >
              <FaPhone /> +91 9953889465
            </a>
          </div>
        </div>
      </div>

      {/* ══ MAIN FOOTER GRID ════════════════════════════════════════ */}
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr]">

          {/* ── BRAND ── */}
          <div>
            <div className="mb-5 flex flex-col items-start">
              <img
                src="/logo/triphealer-logo-black.png"
                alt="Triphealer Logo"
                className="h-[65px] -ml-2 w-auto"
              />
              <div
                className="-mt-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: "var(--primary)" }}
              >
                Medical Tourism & Manpower Consultant
              </div>
            </div>

            <p className="max-w-xs text-sm leading-7 text-slate-500">
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
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ background: bg }}
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>

            {/* Trust pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#01696f]/20 bg-[#01696f]/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
                  style={{ color: "var(--primary-dark)" }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── QUICK LINKS ── */}
          <div>
            <h3
              className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "var(--primary)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-slate-500 transition duration-200 hover:text-slate-800"
                  >
                    <span
                      className="block h-px w-4 shrink-0 rounded-full transition-all duration-300 group-hover:w-6"
                      style={{ background: "var(--primary-light)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── SERVICES ── */}
          <div>
            <h3
              className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "var(--primary)" }}
            >
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2.5 text-sm text-slate-500 transition duration-200 hover:text-slate-800"
                  >
                    <span
                      className="block h-px w-4 shrink-0 rounded-full transition-all duration-300 group-hover:w-6"
                      style={{ background: "var(--primary-light)" }}
                    />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT ── */}
          <div>
            <h3
              className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "var(--primary)" }}
            >
              Contact Us
            </h3>

            <div className="space-y-5">
              {/* Head office */}
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Head Office — New Delhi
                </p>
                <div className="flex items-start gap-2.5 text-sm leading-7 text-slate-500">
                  <FaMapMarkerAlt
                    className="mt-1 shrink-0"
                    style={{ color: "var(--primary)" }}
                  />
                  <span>
                    1st Floor, G51/6, Shaheen Bagh,<br />
                    Jamia Nagar, New Delhi – 110025
                  </span>
                </div>
              </div>

              {/* Lucknow */}
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Branch — Lucknow
                </p>
                <div className="flex items-start gap-2.5 text-sm leading-7 text-slate-500">
                  <FaMapMarkerAlt
                    className="mt-1 shrink-0"
                    style={{ color: "var(--primary)" }}
                  />
                  <span>Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>

              <div className="h-px bg-[#d1e0df]" />

              {/* Phone + Email */}
              <div className="space-y-2.5">
                {contactList.map(({ href, Icon, text }) => (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-2.5 text-sm text-slate-500 transition duration-200 hover:text-slate-800"
                  >
                    <Icon
                      className="shrink-0 text-xs"
                      style={{ color: "var(--primary)" }}
                    />
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ══ BOTTOM BAR ══════════════════════════════════════════════ */}
      <div className="border-t border-[#d1e0df] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 lg:px-10">

          {/* Top row — copyright + location */}
          <div className="flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">
            <p className="text-slate-400">
              © {new Date().getFullYear()}{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--primary-dark)" }}
              >
                Triphealer
              </span>
              . All rights reserved.
            </p>
             {/* Bottom row — RBM Studios credit */}
          <div className=" border-slate-100 text-center">
            <p className="text-xs text-slate-400">
              Designed &amp; Managed by{" "}
              <a
                href="https://www.rbmstudios.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-500 transition duration-200 hover:text-[#01696f]"
              >
                RBM Studios
              </a>
            </p>
          </div>
          </div>

         

        </div>
      </div>

    </footer>
  );
}