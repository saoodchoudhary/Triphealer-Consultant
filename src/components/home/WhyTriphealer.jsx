import { trustPoints } from "@/data/homeData";

export default function WhyTriphealer() {
  return (
    <section className="bg-[#f1efe8] px-4 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#01696f]">Why Triphealer</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A structured and professional partner you can rely on.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {trustPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_14px_36px_rgba(15,23,42,0.09)] transition duration-300 hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6f6] text-[#01696f] group-hover:bg-[#d6eeed] transition">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}