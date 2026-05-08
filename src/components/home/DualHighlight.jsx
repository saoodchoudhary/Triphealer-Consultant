import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaCheckCircle, FaHospital, FaUserTie } from "react-icons/fa";
import { manpowerList, medicalList } from "@/data/homeData";

export default function DualHighlight() {
  return (
    <section className="bg-white px-4 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">Our Expertise</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Two focused services, one reliable partner.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Manpower */}
          <div className="group overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(15,45,58,0.16)]">
            <div className="relative h-52 overflow-hidden">
              <Image
                src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e651113c8bedb6cfea6bca62fac8671ca1a554bd.jpg"
                alt="Construction workers reviewing blueprints"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f2d3a]/20 to-[#0f2d3a]/90" />
              <div className="absolute bottom-5 left-7">
                <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sky-100 backdrop-blur-sm">
                  Manpower & Recruitment
                </span>
              </div>
            </div>
            <div className="bg-[#0f2d3a] p-8 text-white sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/15 text-sky-300 mb-6">
                <FaUserTie className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold leading-tight">Overseas Recruitment &amp; Manpower Supply</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                We support Gulf employers with dependable manpower sourcing and complete candidate processing from selection to departure.
              </p>
              <ul className="mt-6 space-y-3">
                {manpowerList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-400" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/recruitment-services"
                className="mt-8 inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0f2d3a] transition hover:bg-sky-50"
              >
                Recruitment Services <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Medical */}
          <div className="group overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(13,91,69,0.16)]">
            <div className="relative h-52 overflow-hidden">
              <Image
                src="/images/services/medical-treatment-india.webp"
                alt="Indian doctor consulting patient"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d5b45]/20 to-[#0d5b45]/90" />
              <div className="absolute bottom-5 left-7">
                <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-100 backdrop-blur-sm">
                  Medical Treatment India
                </span>
              </div>
            </div>
            <div className="bg-[#0d5b45] p-8 text-white sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/15 text-emerald-300 mb-6">
                <FaHospital className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold leading-tight">Medical Treatment in India for Gulf Patients</h3>
              <p className="mt-4 text-sm leading-7 text-emerald-100/80">
                We help patients and families access world-class hospitals, doctors, treatment planning, visa help and local support in India.
              </p>
              <ul className="mt-6 space-y-3">
                {medicalList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-emerald-50">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-300" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/medical-treatment-india"
                className="mt-8 inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0d5b45] transition hover:bg-emerald-50"
              >
                Medical Services <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}