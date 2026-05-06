import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function HospitalVisualStrip() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/23ae89017056d201ca1a88af15f874a173accd1d.jpg"
        alt="Modern hospital interior India"
        fill
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#0a1f2b]/75" />

      <div className="relative mx-auto max-w-4xl px-4 text-center text-white lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300 mb-4">
          Top Hospitals in India
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
          Access world-class healthcare in India at affordable costs.
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-200">
          We partner with leading hospitals across India and assist Gulf patients from appointment booking to full recovery support.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/medical-treatment-india"
            className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#0a1f2b] hover:bg-sky-50 transition"
          >
            Explore Medical Services <FaArrowRight className="text-xs" />
          </Link>
          <a
            href="tel:+919953889465"
            className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20 transition"
          >
            <FaPhoneAlt /> Call Us
          </a>
        </div>
      </div>
    </section>
  );
}