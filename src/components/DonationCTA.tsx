import Link from "next/link";

export function DonationCTA() {
  return (
    <section className="rounded-[2rem] border border-[#dfeaf1] bg-[linear-gradient(135deg,#1a9cc9_0%,#72d1d9_100%)] p-8 text-white shadow-[0_20px_50px_rgba(26,156,201,0.18)] sm:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#edfaff]">
            Monthly Sponsorship
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">Support a dialysis patient each month</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/dialysis-support"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0d75a3] transition hover:bg-[#f5fbff]"
          >
            Learn More
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}
