import { siteConfig } from "@/data/site";

export function EmergencyNumbers() {
  return (
    <section className="rounded-[2rem] border border-[#e8dfd4] bg-[linear-gradient(135deg,#fffaf5_0%,#f3efe6_100%)] p-8 shadow-[0_18px_40px_rgba(24,42,40,0.06)] sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">
            Important numbers
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Emergency & helpline support
          </h3>
        </div>
        <div className="rounded-full bg-[#f8ead1] px-3 py-2 text-sm font-semibold text-[#6a4a16]">
          24/7 support
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {siteConfig.emergencyNumbers.map((item) => (
          <div key={item.label} className="rounded-[1.5rem] border border-[#eadcc0] bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
