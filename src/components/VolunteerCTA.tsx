import Link from "next/link";

export function VolunteerCTA() {
  return (
    <section className="rounded-[2rem] border border-[#e7e2db] bg-[#fffaf4] p-8 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">
            Join the mission
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            Help us reach more people with compassion and dignity.
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a9cc9] to-[#72d1d9] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
          >
            Volunteer With Us
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#d8eaf2] bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#8f84d9] hover:text-[#0d75a3]"
          >
            Contact Team
          </Link>
        </div>
      </div>
    </section>
  );
}
