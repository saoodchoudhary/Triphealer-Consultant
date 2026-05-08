import Link from "next/link";
import Image from "next/image";

const heroBanners = [
  {
    title: "Gulf Visa Services",
    subtitle: "Fast, reliable documentation and manpower support for Gulf employers.",
    image: "/banners/visa-services-banner.svg",
    cta: { href: "/gulf-visas", label: "Explore Visa Services" },
  },
  {
    title: "Medical Treatment in India",
    subtitle: "Hospital appointments, doctor consultations and full travel support.",
    image: "/banners/medical-treatment-banner.svg",
    cta: { href: "/medical-treatment-india", label: "Explore Medical Care" },
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#04111a]"
      aria-label="Triphealer hero banners"
      aria-roledescription="carousel"
    >
      <h1 className="sr-only">Triphealer Services</h1>
      <div className="relative h-[260px] sm:h-[360px] lg:h-[480px]">
        <div className="hero-banner-track absolute inset-0 flex w-[200%]" role="list">
          {[...heroBanners, ...heroBanners].map((banner, index) => {
            const isDuplicate = index >= heroBanners.length;
            const slideIndex = (index % heroBanners.length) + 1;
            return (
              <div
                key={`${banner.title}-${index}`}
                className="relative h-full w-1/2"
                aria-hidden={isDuplicate}
                aria-label={`Slide ${slideIndex} of ${heroBanners.length}: ${banner.title}`}
                aria-roledescription="slide"
                role={isDuplicate ? "presentation" : undefined}
              >
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#04111a]/85 via-[#04111a]/35 to-transparent" />
                <div className="absolute inset-0 flex items-end px-5 pb-8 sm:px-10 sm:pb-10">
                  <div className="max-w-xl text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-200/80">
                      Triphealer Consultant
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                      {banner.title}
                    </h2>
                    <p className="mt-3 text-sm text-slate-200/90 sm:text-base">
                      {banner.subtitle}
                    </p>
                    <Link
                      href={banner.cta.href}
                      className="mt-5 inline-flex min-h-[46px] items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold text-[#04111a] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-sky-50"
                    >
                      {banner.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
