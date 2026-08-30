import type { Metadata } from "next";
import { LeadershipCard } from "@/components/LeadershipCard";
import { SectionHeading } from "@/components/SectionHeading";
import { leadership, pageMeta, serviceAreas } from "@/data/site";

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="About us"
        title="A grassroots initiative shaped by compassion and local action"
        description="Baderunissa Foundation is an active, grassroots non-governmental organization headquartered along Bannerghatta Road in Bengaluru, Karnataka. The foundation operates under the core motto of “Serving Humanity with Compassion,” and works through localized humanitarian service, dialysis support, healthcare support, public advocacy and safety initiatives."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-8 rounded-[2rem] border border-[#e8e1d7] bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">Foundation story</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The Foundation is rooted in practical service and local understanding. It responds to the realities faced by vulnerable people and families in Bengaluru, with an emphasis on dignity, integrity and care in everyday action.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">Mission</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              To serve humanity with compassion by helping those facing healthcare, social and public vulnerabilities with practical support and humane action.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">Vision</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              To build a more compassionate and just society where every person is protected with dignity, care and opportunity.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e8e1d7] bg-[linear-gradient(135deg,#f7f0e7_0%,#eef8f5_100%)] p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">Core working areas</p>
          <ul className="mt-5 space-y-3 text-base text-slate-700">
            {serviceAreas.map((area) => (
              <li key={area.title} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#8f84d9]" aria-hidden="true" />
                <span>{area.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Leadership"
          title="The people guiding the mission"
          description="The Foundation is led by individuals committed to service, accountability and community care."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {leadership.map((person) => (
            <LeadershipCard key={person.name} name={person.name} role={person.role} />
          ))}
        </div>
      </section>
    </div>
  );
}
