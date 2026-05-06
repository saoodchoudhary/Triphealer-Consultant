import Image from "next/image";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="bg-white px-4 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] shadow-[0_24px_64px_rgba(15,45,58,0.18)]">
        <div className="grid lg:grid-cols-[1fr_380px]">

          {/* Left: content */}
          <div className="bg-gradient-to-br from-[#0f2d3a] to-[#114f60] px-8 py-12 text-white sm:px-12 lg:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Contact Triphealer</p>
            <h2 className="mt-3 max-w-lg text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Ready for consultation, recruitment or medical travel guidance?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-slate-200">
              Speak with our team for Gulf work visa services, manpower supply or treatment planning in India.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+919953889465"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#0f2d3a] hover:bg-slate-100 transition"
              >
                <FaPhoneAlt /> +91 9953889465
              </a>
              <a
                href="https://wa.me/919953889465"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:bg-[#1fb85a] transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href="mailto:ashhar.info1@gmail.com"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/18 transition"
              >
                <FaEnvelope /> Email
              </a>
            </div>

            <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 text-sm text-slate-300 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-white mb-1.5">Head Office</p>
                <p className="leading-7">1st Floor, G51/6, Shaheen Bagh, Jamia Nagar, New Delhi – 110025</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1.5">Contact Numbers</p>
                <p className="leading-7">+91 9953889465<br />+91 9891542452</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1.5">Email</p>
                <p className="leading-7 break-all">ashhar.info1@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative hidden lg:block min-h-[400px]">
            <Image
              src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/920d345b13f96c7ecf8d837141bba33ab5c6c3f6.jpg"
              alt="Airplane at airport sunset"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0f2d3a]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}