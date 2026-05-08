"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaEnvelope,
  FaPhone,
  FaTimes,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

// ─── DATA ───────────────────────────────────────────────────────────
const navLinks = [
  { href: "/about",                   label: "About Us" },
  { href: "/services",                label: "Services" },
  { href: "/gulf-visas",              label: "Gulf Work Visas" },
  { href: "/medical-treatment-india", label: "Medical Treatment" },
  { href: "/travel-support",          label: "Travel Support" },
  { href: "/contact",                 label: "Contact Us" },
];

const sidebarServices = [
  {
    group: "Gulf Services",
    color: "text-sky-600",
    links: [
      { href: "/gulf-visas",           label: "Gulf Work Visa Services" },
      { href: "/recruitment-services", label: "Overseas Recruitment" },
      { href: "/recruitment-services", label: "Manpower Supply" },
    ],
  },
  {
    group: "Medical in India",
    color: "text-emerald-600",
    links: [
      { href: "/medical-treatment-india", label: "Hospital Appointment" },
      { href: "/medical-treatment-india", label: "Treatment Assistance" },
      { href: "/medical-treatment-india", label: "Medical Visa Support" },
    ],
  },
  {
    group: "Travel & Support",
    color: "text-amber-600",
    links: [
      { href: "/travel-support", label: "Flight & Hotel Booking" },
      { href: "/travel-support", label: "Airport Pickup" },
      { href: "/travel-support", label: "Patient Care Support" },
    ],
  },
];



// ─── NAVBAR ─────────────────────────────────────────────────────────
export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_4px_24px_rgba(15,23,42,0.10)]"
            : "shadow-[0_1px_0_rgba(15,23,42,0.06)]"
        }`}
      >

        {/* ── MAIN NAV ── */}
        <nav className="bg-white border-b border-slate-100">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 h-[68px] lg:px-10 xl:px-4">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 transition duration-200 hover:opacity-85"
            >
            
              {/* only image logo name */}
              <img src="/logo/triphealer-logo.png" alt="Triphealer Logo" className="h-[60px] w-auto" />
              
            </Link>

            {/* Desktop nav links */}
            <div className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition duration-200 ${
                      active
                        ? "text-[#01696f]"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#01696f]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden rounded-lg bg-[#01696f] px-4 py-2 text-sm font-bold text-white transition duration-200 hover:bg-[#0c4e54] hover:-translate-y-0.5 lg:inline-flex items-center gap-1.5"
              >
                Get in Touch <FaArrowRight className="text-xs" />
              </Link>

              <button
                onClick={() => setSidebarOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition duration-200 hover:bg-slate-100 hover:text-slate-900 lg:hidden"
                aria-label="Open menu"
              >
                <FaBars className="text-base" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── SIDEBAR BACKDROP ── */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* ── SIDEBAR PANEL — right to left ── */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[320px] max-w-[90vw] flex-col bg-white shadow-[−20px_0_60px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >

        {/* Sidebar header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-[#f7f6f2] px-5 py-4">
          <div className="flex items-center gap-3">
           
            {/* optimize logo and slogan */}
            <div className="flex flex-col items-start">
            {/* only image logo name */}
            <img src="/logo/triphealer-logo.png" alt="Triphealer Logo" className="h-[60px] w-auto" />
            {/* slogan */}
            <div className="text-[10px] -mt-3 font-semibold uppercase tracking-[0.12em] text-[#01696f]">
              Medical Tourism & Manpower Consultant
            </div>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition duration-200 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close menu"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Main nav links */}
        <div className="border-b border-slate-100 px-3 py-3">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition duration-200 ${
                  active
                    ? "bg-[#01696f]/8 text-[#01696f]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.label}
                {active && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#01696f]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Grouped service links */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
          {sidebarServices.map((group) => (
            <div key={group.group}>
              <p className={`mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.16em] ${group.color}`}>
                {group.group}
              </p>
              <div className="space-y-0.5">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-500 transition duration-200 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <span className="block h-px w-3 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-5 group-hover:bg-[#01696f]" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar bottom CTA */}
        <div className="border-t border-slate-100 bg-[#f7f6f2] p-4 space-y-2.5">
          <a
            href="https://wa.me/919953889465"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white transition duration-200 hover:bg-[#1fb85a] active:scale-95"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
          <a
            href="tel:+919953889465"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-700 transition duration-200 hover:bg-slate-50 active:scale-95"
          >
            <FaPhone className="text-xs text-[#01696f]" /> +91 9953889465
          </a>
        </div>
      </aside>
    </>
  );
}