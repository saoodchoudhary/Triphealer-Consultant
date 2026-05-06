const tags = ["Visa Guidance", "Recruitment", "Medical Assistance", "Travel Coordination"];

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">
          Trusted by Gulf employers & patients
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-slate-100 px-4 py-1.5 text-slate-600 font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}