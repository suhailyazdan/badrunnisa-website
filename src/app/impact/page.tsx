import type { Metadata } from "next";
import { ImpactCard } from "@/components/ImpactCard";
import { SectionHeading } from "@/components/SectionHeading";
import { impactProjects, pageMeta } from "@/data/site";

export const metadata: Metadata = {
  title: pageMeta.impact.title,
  description: pageMeta.impact.description,
};

export default function ImpactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Impact & projects"
        title="Community action across healthcare, advocacy and public safety"
        description="The Foundation’s work has touched multiple areas of social care and civic responsibility. These initiatives reflect a hands-on, community-centred approach to humanitarian service."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {impactProjects.map((item) => (
          <ImpactCard key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}
