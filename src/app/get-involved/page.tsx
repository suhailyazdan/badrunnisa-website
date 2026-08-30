import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMeta } from "@/data/site";

export const metadata: Metadata = {
  title: pageMeta.getInvolved.title,
  description: pageMeta.getInvolved.description,
};

export default function GetInvolvedPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Get involved"
        title="There are many ways to serve with compassion"
        description="From direct volunteering to skill-sharing, sponsorship and advocacy, every form of support strengthens the Foundation’s ability to serve people with dignity."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Become a Volunteer",
            description: "Join field-level and community support initiatives that respond to immediate humanitarian needs.",
          },
          {
            title: "Share Your Skills",
            description: "Support advocacy, awareness, outreach and practical project work with your expertise and time.",
          },
          {
            title: "Partner or Sponsor a Cause",
            description: "Help cover urgent needs, including dialysis support and community healthcare assistance.",
          },
          {
            title: "Become a Community Ambassador",
            description: "Help spread awareness and mobilise local compassion within your network and community.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[1.75rem] border border-[#e7e2d8] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edfaff] text-lg text-[#0d75a3] ring-1 ring-[#dfeaf1]">
              ✦
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2rem] border border-[#e8e1d7] bg-[linear-gradient(135deg,#f7f0e7_0%,#eef8f5_100%)] p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">Volunteer request</p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            We welcome volunteers who are ready to serve with sincerity, humility and care. Share your time, knowledge and support in ways that strengthen the lives of vulnerable people and families.
          </p>
          <p className="mt-6 text-base leading-8 text-slate-700">
            We are also open to partnerships and sponsorships for urgent humanitarian needs, especially to support dialysis care and health-related assistance.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
