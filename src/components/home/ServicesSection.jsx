import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { services } from "@/data/homeData";

export default function ServicesSection() {
  return (
    <section className="px-4 py-20 bg-[#f7f6f2] lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">Core Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            End-to-end support for Gulf employers and patients.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-500">
            From Gulf work visas to medical care in India — structured, professional services tailored to your needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(15,23,42,0.10)]"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f2b]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm border border-white/20">
                    <Icon className="text-lg" />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#01696f] transition">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{service.text}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#01696f]">
                    Explore service
                    <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}