import type { Metadata } from "next";
import Link from "next/link";
import { DonationCTA } from "@/components/DonationCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMeta } from "@/data/site";

export const metadata: Metadata = {
  title: pageMeta.dialysis.title,
  description: pageMeta.dialysis.description,
};

export default function DialysisSupportPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Dialysis support"
        title="Supporting underprivileged patients through critical treatment care"
        description="Regular dialysis is essential for many patients, and treatment costs can become a severe burden for families already facing hardship. Baderunissa Foundation stands with underprivileged critical dialysis patients through sponsored and free dialysis sessions where possible."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-[#e8e1d7] bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">Why this matters</p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Many patients require dialysis regularly to sustain life. For families facing financial strain, these repeated treatment costs can be overwhelming. The Foundation responds to this need with compassionate, practical and human-centred support.
          </p>

          <div className="mt-8 rounded-[1.5rem] bg-[#f7f3ee] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">Approximate session cost</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">₹1,700</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This amount is approximate and subject to hospital charges and change depending on treatment conditions and facility rates.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e8e1d7] bg-[linear-gradient(135deg,#eef7f5_0%,#f7f3eb_100%)] p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">How we help</p>
          <ul className="mt-5 space-y-4 text-base text-slate-700">
            <li className="flex gap-3"><span aria-hidden="true">•</span><span>Sponsored dialysis support for underprivileged patients</span></li>
            <li className="flex gap-3"><span aria-hidden="true">•</span><span>Free or subsidised dialysis support where feasible</span></li>
            <li className="flex gap-3"><span aria-hidden="true">•</span><span>Compassionate support in moments of urgent medical hardship</span></li>
            <li className="flex gap-3"><span aria-hidden="true">•</span><span>Community-led care that keeps dignity at the centre</span></li>
          </ul>
          <Link
            href="/get-involved"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a9cc9] to-[#72d1d9] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
          >
            Sponsor a dialysis patient
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <DonationCTA />
      </div>
    </div>
  );
}
