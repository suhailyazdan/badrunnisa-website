import type { Metadata } from "next";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMeta, workPrograms } from "@/data/site";

export const metadata: Metadata = {
  title: pageMeta.ourWork.title,
  description: pageMeta.ourWork.description,
};

export default function OurWorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Our work"
        title="Programs shaped by urgency, dignity and community response"
        description="Baderunissa Foundation’s work is rooted in practical, compassionate action. Each program reflects a commitment to support people facing vulnerability, illness, injustice or community hardship."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {workPrograms.map((program) => (
          <ProgramCard
            key={program.title}
            title={program.title}
            description={program.description}
            detail={program.detail}
          />
        ))}
      </div>
    </div>
  );
}
