import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMeta } from "@/data/site";

export const metadata: Metadata = {
  title: pageMeta.humanity.title,
  description: pageMeta.humanity.description,
};

export default function HumanityCompassionPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Humanity & compassion"
        title="Mercy, dignity and care for all people"
        description="The Foundation’s philosophy is rooted in the belief that service to humanity is a noble and sacred obligation."
      />

      <div className="mt-12 space-y-8 rounded-[2rem] border border-[#e8e1d7] bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
        <blockquote className="rounded-[1.5rem] border border-[#e3d8bb] bg-[#fffaf2] p-6 text-lg font-medium leading-8 text-slate-800">
          “And We have not sent you, [O Muhammad], except as a mercy to the worlds.” — Quran 21:107
        </blockquote>

        <p className="text-base leading-8 text-slate-600">
          This message reflects the Foundation’s guiding principle: compassion is not optional, it is a lived responsibility toward humanity. At the centre of the foundation’s work is a deep respect for every person’s dignity, regardless of background, hardship or circumstance.
        </p>

        <p className="text-base leading-8 text-slate-600">
          In the face of illness, social vulnerability, public risk and everyday injustice, the Foundation responds with empathy, practical care and a strong sense of collective responsibility. The aim is not only to assist in crisis, but to preserve human dignity and remind communities that care is a shared human obligation.
        </p>

        <p className="text-base leading-8 text-slate-600">
          Protection of life, support for the vulnerable and service to the community are not separate acts—they are expressions of compassion and a commitment to a more just and humane society.
        </p>
      </div>
    </div>
  );
}
