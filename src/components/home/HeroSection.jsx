"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroBanners = [
  {
    title: "Manpower Consultant",
    subtitle:
      "Fast, reliable documentation and manpower support for Gulf employers and skilled workers.",
    image: "/banners/visa-services-banner.webp",
    cta: { href: "/gulf-visas", label: "Explore Visa Services" },
    tag: { label: "Manpower & Visa", color: "gold" },
    ctaVariant: "white",
    accentColor: "#d97706",
    stats: [
      { value: "500+", label: "Visas Processed" },
      { value: "UAE · KSA · QAT", label: "Gulf Coverage" },
    ],
    cards: [
      { icon: "📄", title: "Visa Documentation", sub: "All paperwork handled end-to-end" },
      { icon: "✈️", title: "Travel Coordination", sub: "Flights & accommodation support" },
      { icon: "🤝", title: "Employer Liaison", sub: "Direct contact with Gulf employers" },
    ],
  },
  {
    title: "Medical Treatment in India",
    subtitle:
      "Hospital appointments, doctor consultations and full travel support across India's top medical centres.",
    image: "/banners/medical-treatment-banner.webp",
    cta: { href: "/medical-treatment-india", label: "Explore Medical Care" },
    tag: { label: "Healthcare & Travel", color: "teal" },
    ctaVariant: "sky",
    accentColor: "#01696f",
    stats: [
      { value: "50+", label: "Hospital Partners" },
      { value: "End-to-End", label: "Support Included" },
    ],
    cards: [
      { icon: "🏥", title: "Hospital Booking", sub: "Top hospitals across India" },
      { icon: "👨‍⚕️", title: "Doctor Consultations", sub: "Specialist referrals arranged" },
      { icon: "🛂", title: "Medical Visa Help", sub: "Full visa assistance included" },
    ],
  },
];

const SLIDE_COUNT = heroBanners.length;
const SLIDE_DURATION = 5000;

// ─── AccentTag ────────────────────────────────────────────────────────────────

function AccentTag({ label, color }) {
  const cls =
    color === "gold"
      ? "bg-amber-400/10 border border-amber-400/30 text-amber-300"
      : "bg-teal-400/10 border border-teal-400/30 text-teal-300";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-[5px] text-[9px] font-semibold uppercase tracking-[0.18em] ${cls}`}
    >
      {color === "gold" ? (
        <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ) : (
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )}
      {label}
    </span>
  );
}

// ─── StatPill ─────────────────────────────────────────────────────────────────

function StatPill({ value, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
      <span
        className="text-[13px] font-bold leading-none text-white"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </span>
      <span
        className="text-[9px] uppercase tracking-wider text-white/45"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── FeatureCard ──────────────────────────────────────────────────────────────

function FeatureCard({ icon, title, sub, delay, visible }) {
  return (
    <div
      className="rounded-xl border border-white/[0.08] bg-white/[0.05] px-4 py-3 backdrop-blur-md"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0) scale(1)" : "translateX(16px) scale(0.97)",
        transition: `opacity 0.45s ease ${delay}s, transform 0.45s ease ${delay}s`,
      }}
    >
      <div className="mb-1.5 text-base leading-none">{icon}</div>
      <p
        className="text-[11px] font-semibold leading-snug text-white/90"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </p>
      <p
        className="mt-0.5 text-[10px] leading-relaxed text-white/40"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {sub}
      </p>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(true);

  // FIX: interval ki jagah stable timeout chain (no overlap)
  const timerRef = useRef(null);
  const dotRef = useRef([]);

  // keep latest state in refs to avoid stale closures
  const currentRef = useRef(0);
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const goTo = useCallback((index) => {
    setCardsVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setCardsVisible(true);
    }, 150);
  }, []);

  const scheduleNext = useCallback(() => {
    stopTimer();
    timerRef.current = setTimeout(() => {
      // animate cards out/in + move slide
      setCardsVisible(false);
      setTimeout(() => setCardsVisible(true), 150);

      setCurrent((prev) => (prev + 1) % SLIDE_COUNT);

      // schedule again (chain)
      scheduleNext();
    }, SLIDE_DURATION);
  }, [stopTimer]);

  const startTimer = useCallback(() => {
    scheduleNext();
  }, [scheduleNext]);

  useEffect(() => {
    setCardsVisible(true);
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        stopTimer();
        const next = (currentRef.current + 1) % SLIDE_COUNT;
        goTo(next);
        startTimer();
      }
      if (e.key === "ArrowLeft") {
        stopTimer();
        const next = (currentRef.current - 1 + SLIDE_COUNT) % SLIDE_COUNT;
        goTo(next);
        startTimer();
      }
    },
    [goTo, stopTimer, startTimer]
  );

  const banner = heroBanners[current];

  return (
    <section
      className="relative overflow-hidden bg-[#04111a]"
      aria-label="Triphealer hero banners"
      aria-roledescription="carousel"
      role="region"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <h1 className="sr-only">Triphealer Services</h1>

      {/* ── Slide Area ── */}
      <div className="relative h-[320px] min-h-[480px] sm:h-[420px] lg:h-[560px]">
        {/* ── Background Images — crossfade ── */}
        {heroBanners.map((b, i) => (
          <div
            key={b.title}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 1s cubic-bezier(0.4,0,0.2,1)",
              zIndex: i === current ? 1 : 0,
            }}
            aria-hidden={i !== current}
          >
            <Image
              src={b.image}
              alt={b.title}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/70 to-[#04111a]/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04111a]/90 via-[#04111a]/20 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(4,17,26,0.5)_100%)]" />
          </div>
        ))}

        {/* ── Accent line top ── */}
        <div
          className="absolute left-0 right-0 top-0 z-20 h-[2px] transition-all duration-700"
          style={{ background: `linear-gradient(to right, transparent, ${banner.accentColor}99, transparent)` }}
        />

        {/* ══════════════════════════════════════════════════════
            SINGLE max-w-7xl CONTAINER — handles ALL overlay layers
            Counter (top) · Content (bottom-left) · Cards (bottom-right)
        ══════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 z-10 flex flex-col">
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 lg:px-10">
            {/* ── Top row: Counter ── */}
            <div className="flex items-start justify-end pt-5 sm:pt-6">
              <div
                className="hidden items-center gap-1.5 md:flex"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="text-[13px] font-bold text-white">0{current + 1}</span>
                <span className="text-[11px] text-white/30">/</span>
                <span className="text-[11px] text-white/40">0{SLIDE_COUNT}</span>
              </div>
            </div>

            {/* ── Spacer ── */}
            <div className="flex-1" />

            {/* ── Bottom row: Content left + Cards right ── */}
            <div className="flex items-end justify-between gap-6 pb-10 sm:pb-12 lg:pb-14">
              {/* Left — Main content */}
              <div
                className="min-w-0 flex-1"
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <AccentTag label={banner.tag.label} color={banner.tag.color} />

                <div className="mt-3 mb-2 flex items-center gap-3">
                  <span
                    className="h-px w-6 shrink-0 rounded-full"
                    style={{ background: `${banner.accentColor}80` }}
                  />
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Triphealer Consultant
                  </p>
                </div>

                <h2
                  className="text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[2.6rem] lg:text-[3.2rem]"
                  style={{
                    fontFamily: "var(--font-display)",
                    textShadow: "0 2px 24px rgba(0,0,0,0.45)",
                    maxWidth: "16ch",
                  }}
                >
                  {banner.title}
                </h2>

                <p
                  className="mt-3 text-sm font-normal leading-relaxed text-white/65 sm:text-[15px]"
                  style={{ fontFamily: "var(--font-body)", maxWidth: "38ch" }}
                >
                  {banner.subtitle}
                </p>

                {/* CTA + Stats */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href={banner.cta.href}
                    className={[
                      "inline-flex min-h-[44px] items-center gap-2 rounded-full px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
                      banner.ctaVariant === "white"
                        ? "bg-white text-[#04111a] hover:bg-amber-50 hover:shadow-[0_14px_40px_rgba(0,0,0,0.5)]"
                        : "bg-[#01696f] text-white hover:bg-[#0c4e54] hover:shadow-[0_14px_40px_rgba(0,0,0,0.5)]",
                    ].join(" ")}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {banner.cta.label}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <div className="flex flex-wrap gap-2">
                    {banner.stats.map((s) => (
                      <StatPill key={s.label} value={s.value} label={s.label} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Feature Cards (desktop only, same container) */}
              <div className="hidden shrink-0 flex-col gap-2.5 lg:flex" style={{ width: 196 }}>
                {banner.cards.map((c, i) => (
                  <FeatureCard
                    key={`${banner.title}-${c.title}`}
                    icon={c.icon}
                    title={c.title}
                    sub={c.sub}
                    delay={i * 0.07}
                    visible={cardsVisible}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom shimmer line ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
      </div>

      {/* ── Progress Dots — same max-w-7xl alignment ── */}
      <div className="relative z-20 bg-[#04111a]">
        <div className="mx-auto flex max-w-7xl justify-end px-4 py-3 lg:px-10">
          <div role="tablist" aria-label="Slide navigation" className="flex items-center gap-2">
            {heroBanners.map((b, i) => (
              <button
                key={b.title}
                ref={(el) => { dotRef.current[i] = el; }}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}: ${b.title}`}
                onClick={() => {
                  stopTimer();
                  goTo(i);
                  startTimer();
                }}
                className="relative h-[3px] overflow-hidden rounded-full bg-white/15 transition-all duration-300"
                style={{ width: i === current ? 40 : 18 }}
              >
                {i === current && (
                  <span
                    key={current}
                    className="absolute inset-y-0 left-0 rounded-full bg-white/80"
                    style={{ animation: `dotFill ${SLIDE_DURATION}ms linear forwards` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dotFill {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}